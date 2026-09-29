/**
 * store.js - שכבת ניהול הנתונים והסנכרון (Data Store & Webhook Layer)
 * תומך בפרוטוקול John Bryce המדויק: POST { action, table, payload }
 */

class AppStore {
  constructor() {
    this.STORAGE_KEYS = {
      PRODUCTS: 'jb_erp_products',
      CUSTOMERS: 'jb_erp_customers',
      LEADS: 'jb_erp_leads',
      ORDERS: 'jb_erp_orders',
      INVOICES: 'jb_erp_invoices',
      TASKS: 'jb_erp_tasks',
      SETTINGS: 'jb_erp_settings'
    };

    this.settings = {
      n8nWebhookUrl: '',
      airtablePat: '',
      airtableBaseId: '',
      telegramBotToken: '',
      isLiveMode: false // ברירת מחדל: מצב מקומי אמין ומהיר
    };

    this.data = {
      products: [],
      customers: [],
      leads: [],
      orders: [],
      invoices: [],
      tasks: []
    };

    this.listeners = [];
    this.init();
  }

  init() {
    // טעינת הגדרות
    const savedSettings = localStorage.getItem(this.STORAGE_KEYS.SETTINGS);
    if (savedSettings) {
      try {
        this.settings = { ...this.settings, ...JSON.parse(savedSettings) };
      } catch (e) {
        console.error('Error parsing settings', e);
      }
    }

    // טעינת כל הטבלאות מ-localStorage או אתחול מנתוני בסיס
    this.data.products = this._loadTable(this.STORAGE_KEYS.PRODUCTS, INITIAL_PRODUCTS);
    this.data.customers = this._loadTable(this.STORAGE_KEYS.CUSTOMERS, INITIAL_CUSTOMERS);
    this.data.leads = this._loadTable(this.STORAGE_KEYS.LEADS, INITIAL_LEADS);
    this.data.orders = this._loadTable(this.STORAGE_KEYS.ORDERS, INITIAL_ORDERS);
    this.data.invoices = this._loadTable(this.STORAGE_KEYS.INVOICES, INITIAL_INVOICES);
    this.data.tasks = this._loadTable(this.STORAGE_KEYS.TASKS, INITIAL_TASKS);
  }

  _loadTable(key, defaultData) {
    const raw = localStorage.getItem(key);
    if (raw) {
      try {
        return JSON.parse(raw);
      } catch (e) {
        console.error(`Failed to parse table ${key}`, e);
      }
    }
    // שמירת ברירת המחדל
    localStorage.setItem(key, JSON.stringify(defaultData));
    return JSON.parse(JSON.stringify(defaultData));
  }

  _saveTable(table) {
    const keyMap = {
      products: this.STORAGE_KEYS.PRODUCTS,
      customers: this.STORAGE_KEYS.CUSTOMERS,
      leads: this.STORAGE_KEYS.LEADS,
      orders: this.STORAGE_KEYS.ORDERS,
      invoices: this.STORAGE_KEYS.INVOICES,
      tasks: this.STORAGE_KEYS.TASKS
    };
    if (keyMap[table]) {
      localStorage.setItem(keyMap[table], JSON.stringify(this.data[table]));
    }
    this._notifyListeners(table);
  }

  subscribe(listener) {
    this.listeners.push(listener);
    return () => {
      this.listeners = this.listeners.filter(l => l !== listener);
    };
  }

  _notifyListeners(table) {
    this.listeners.forEach(fn => fn(table, this.data[table]));
  }

  // פעולות CRUD תואמות פרוטוקול Webhook
  getAll(table) {
    return this.data[table] || [];
  }

  getById(table, id) {
    return (this.data[table] || []).find(item => item.id === id);
  }

  create(table, payload) {
    if (!this.data[table]) return null;

    // הפקת מזהה ייחודי אם לא סופק
    if (!payload.id) {
      const prefixes = {
        products: 'PROD',
        customers: 'CUST',
        leads: 'LEAD',
        orders: 'ORD-2026',
        invoices: 'INV-2026',
        tasks: 'TASK'
      };
      const prefix = prefixes[table] || 'ID';
      const num = String(this.data[table].length + 1).padStart(table === 'customers' ? 4 : 3, '0');
      payload.id = `${prefix}-${num}`;
    }

    if (!payload.createdAt) {
      const now = new Date();
      payload.createdAt = `${String(now.getDate()).padStart(2, '0')}/${String(now.getMonth() + 1).padStart(2, '0')}/${now.getFullYear()}`;
    }

    this.data[table].unshift(payload);
    this._saveTable(table);

    // שליחה ל-Webhook חיצוני אם הוגדר
    this._dispatchWebhook('create', table, payload);

    return payload;
  }

  update(table, id, updates) {
    if (!this.data[table]) return null;
    const index = this.data[table].findIndex(item => item.id === id);
    if (index === -1) return null;

    this.data[table][index] = { ...this.data[table][index], ...updates };
    this._saveTable(table);

    this._dispatchWebhook('update', table, { id, ...updates });
    return this.data[table][index];
  }

  delete(table, id) {
    if (!this.data[table]) return false;
    const index = this.data[table].findIndex(item => item.id === id);
    if (index === -1) return false;

    const removed = this.data[table].splice(index, 1)[0];
    this._saveTable(table);

    this._dispatchWebhook('delete', table, { id });
    return true;
  }

  // פרוטוקול n8n Webhook: POST { action, table, payload }
  async _dispatchWebhook(action, table, payload) {
    if (!this.settings.isLiveMode || !this.settings.n8nWebhookUrl) {
      console.log(`[Store Local Simulation] ${action} on ${table}:`, payload);
      return;
    }

    try {
      const body = { action, table, payload };
      const response = await fetch(this.settings.n8nWebhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
      });
      console.log(`[Store Webhook Synced] Status: ${response.status}`);
    } catch (error) {
      console.warn(`[Store Webhook Error] Could not reach n8n endpoint:`, error);
    }
  }

  // עדכון הגדרות
  saveSettings(newSettings) {
    this.settings = { ...this.settings, ...newSettings };
    localStorage.setItem(this.STORAGE_KEYS.SETTINGS, JSON.stringify(this.settings));
  }

  // חישוב מדדי לוח הבקרה (KPI Dashboard Metrics)
  getMetrics() {
    const totalRevenue = this.data.invoices
      .filter(inv => inv.status === 'שולם')
      .reduce((sum, inv) => sum + (Number(inv.total) || 0), 0);

    const pendingOrders = this.data.orders.filter(ord => ord.status !== 'סופק' && ord.status !== 'בוטל').length;
    const activeLeads = this.data.leads.filter(l => l.status.includes('חדש') || l.status.includes('נוצר') || l.status.includes('מוסמך')).length;
    const openTasks = this.data.tasks.filter(t => t.status !== 'הושלם').length;

    // התראות מנהל פרואקטיביות
    const overdueInvoices = this.data.invoices.filter(inv => inv.status.includes('איחור') || inv.status.includes('פתוח'));
    const lowStockProducts = this.data.products.filter(p => p.stock <= p.minStock);
    const hotLeads = this.data.leads.filter(l => l.status.includes('מוסמך'));

    return {
      totalRevenue,
      pendingOrders,
      activeLeads,
      openTasks,
      overdueInvoices,
      lowStockProducts,
      hotLeads,
      totalProducts: this.data.products.length,
      totalCustomers: this.data.customers.length
    };
  }

  // מחולל חשבונית מס מקצועית
  createInvoiceFromOrder(order) {
    const vatRate = COMPANY_INFO.vatRate; // 18%
    const subtotal = order.subtotal;
    const vatAmount = Math.round(subtotal * vatRate * 100) / 100;
    const total = Math.round((subtotal + vatAmount) * 100) / 100;

    const invoiceNum = `INV-2026-${String(this.data.invoices.length + 1).padStart(3, '0')}`;
    const now = new Date();
    const dateStr = `${String(now.getDate()).padStart(2, '0')}/${String(now.getMonth() + 1).padStart(2, '0')}/${now.getFullYear()}`;

    const newInvoice = {
      id: invoiceNum,
      invoiceNumber: invoiceNum,
      customerId: order.customerId,
      customerName: order.customerName,
      orderId: order.id,
      amount: subtotal,
      vatRate: vatRate,
      vatAmount: vatAmount,
      total: total,
      status: 'פתוח (ממתין לתשלום)',
      paymentTerms: order.paymentMethod || 'שוטף+30',
      date: dateStr,
      dueDate: dateStr,
      pdfUrl: '#',
      items: order.items.map(item => ({
        description: item.name,
        qty: item.quantity,
        unitPrice: item.unitPrice,
        amount: item.total
      }))
    };

    return this.create('invoices', newInvoice);
  }

  // איפוס מלא לנתוני ההתחלה
  resetToDefaults() {
    localStorage.removeItem(this.STORAGE_KEYS.PRODUCTS);
    localStorage.removeItem(this.STORAGE_KEYS.CUSTOMERS);
    localStorage.removeItem(this.STORAGE_KEYS.LEADS);
    localStorage.removeItem(this.STORAGE_KEYS.ORDERS);
    localStorage.removeItem(this.STORAGE_KEYS.INVOICES);
    localStorage.removeItem(this.STORAGE_KEYS.TASKS);
    this.init();
    this._notifyListeners('all');
  }
}

// מופע יחיד גלובלי
const store = new AppStore();
