/**
 * ai-agent.js - מנוע סוכן ה-AI ואינטגרציית RAG
 * תומך בפרוטוקול n8n: POST { action: "chat", message } -> { reply: "..." }
 * ומספק מענה מדויק על בסיס 12 קובצי המדיניות וכללי הבטיחות (Agent Guardrails)
 */

class AIAgentEngine {
  constructor() {
    this.history = [
      {
        sender: 'agent',
        text: 'שלום! אני סוכן ה-AI של איי.איי אלקטרוניקה. אני כאן כדי לעזור בבדיקת מדיניות החברה (החזרות, אחריות, משלוחים, מע"מ 18%), חיפוש מוצרים ומלאי, או הפקת תקציר מנהל יומי. במה אוכל לסייע?',
        time: this._getCurrentTime()
      }
    ];
  }

  _getCurrentTime() {
    const now = new Date();
    return `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
  }

  async sendMessage(userMessage) {
    // הוספת הודעת המשתמש להיסטוריה
    this.history.push({
      sender: 'user',
      text: userMessage,
      time: this._getCurrentTime()
    });

    const settings = store.settings;

    // אם מוגדר Webhook חי ב-n8n ונבחר מצב ענן חי:
    if (settings.isLiveMode && settings.n8nWebhookUrl) {
      try {
        const response = await fetch(settings.n8nWebhookUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ action: 'chat', message: userMessage })
        });
        const data = await response.json();
        const replyText = data.reply || data.output || 'התקבלה תשובה מ-n8n ללא תוכן מוגדר.';
        
        this.history.push({
          sender: 'agent',
          text: replyText,
          time: this._getCurrentTime(),
          source: 'n8n Live Webhook'
        });
        return replyText;
      } catch (err) {
        console.warn('n8n Webhook chat failed, falling back to local policy engine:', err);
      }
    }

    // מענה מקומי מבוסס RAG על 12 קובצי המדיניות וקטלוג המוצרים
    const localReply = this._generateLocalResponse(userMessage);
    
    // סימולציית השהייה קלה לחוויית משתמש טבעית
    await new Promise(resolve => setTimeout(resolve, 400));

    this.history.push({
      sender: 'agent',
      text: localReply,
      time: this._getCurrentTime(),
      source: 'Local RAG Knowledge Base'
    });

    return localReply;
  }

  _generateLocalResponse(query) {
    const q = query.toLowerCase().trim();

    // 1. בקשת תקציר מנהל (Manager Daily Brief / Digest)
    if (q.includes('תקציר מנהל') || q.includes('דוח מנהל') || q.includes('סקירת מנהל') || q.includes('מצב העסק')) {
      const metrics = store.getMetrics();
      const overdueList = metrics.overdueInvoices.map(inv => `• חשבונית ${inv.invoiceNumber} (${inv.customerName}) על סך ₪${inv.total.toLocaleString()} — בסטטוס ${inv.status}`).join('\n');
      const lowStockList = metrics.lowStockProducts.map(p => `• ${p.name} (נותרו ${p.stock} יח', סף מינימום: ${p.minStock})`).join('\n');

      return `📊 **תקציר מנהל יומי — איי.איי אלקטרוניקה**
(מבוסס על מסמך מדיניות סוכן מנהל 10)

💰 **נתונים פיננסיים עדכניים:**
• סה"כ הכנסות שנגבו (חשבוניות ששולמו): **₪${metrics.totalRevenue.toLocaleString()}**
• הזמנות פתוחות בתהליך: **${metrics.pendingOrders}**
• לידים פעילים במערכת: **${metrics.activeLeads}**
• משימות פתוחות לביצוע: **${metrics.openTasks}**

⚠️ **התראות יזומות שדורשות את תשומת ליבך:**
1. **חשבוניות פתוחות ובאיחור מעל שוטף+30:**
${overdueList || 'אין חשבוניות באיחור כרגע.'}

2. **מוצרים מתחת לסף מלאי מינימלי (דרושה הזמנת רכש):**
${lowStockList || 'כל המוצרים מעל סף המינימום.'}

💡 **המלצה תפעולית:** מומלץ להוציא תזכורת תשלום מסודרת ללקוחות עם יתרות פתוחות, ולקדם פנייה ללידים מוסמכים (B2B).`;
    }

    // 2. שאלות על החזרות, ביטולים ו-DOA (Policy 01)
    if (q.includes('החזר') || q.includes('ביטול') || q.includes('להחזיר') || q.includes('חרטה') || q.includes('פגם') || q.includes('doa')) {
      return `🔄 **מדיניות החזרות וביטולים (לפי חוק הגנת הצרכן ומסמך 01):**

• **זכות ביטול עסקת מכר מרחוק:** עומדת ללקוח בתוך **14 ימים** ממועד קבלת המוצר. (לאזרחים ותיקים, עולים חדשים ואנשים עם מוגבלות: עד 4 חודשים).
• **ביטול עקב חרטה:** דמי הביטול עומדים על **5% ממחיר העסקה או 100 ₪ (הנמוך מביניהם)**. המוצר חייב להיות באריזתו המקורית, ללא נזק וללא הפעלה/רישום לחשבון יצרן. עלות המשלוח חזרה חלה על הלקוח.
• **ביטול עקב פגם או אי-התאמה:** זכאות להחזר מלא, החלפה או תיקון — **ללא דמי ביטול וללא עלות משלוח**.
• **DOA (תקלה בהגעה):** מוצר שנמצא לא תקין בתוך **48 שעות** מקבלתו יוחלף מיידית בחדש זהה מהמלאי.
• **חריגים (לא ניתנים להחזרה בחרטה):** תוכנות/רישיונות שנפתחו, ואוזניות תוך-אוזניות (In-Ear) מטעמי היגיינה.`;
    }

    // 3. שאלות על אחריות ומעבדות (Policy 02)
    if (q.includes('אחריות') || q.includes('יבואן רשמי') || q.includes('מעבדה') || q.includes('תיקון')) {
      return `🛡️ **מדיניות אחריות ושירות (מסמך 02):**

• **100% מקוריות:** איי.איי אלקטרוניקה מוכרת אך ורק מוצרים מקוריים עם **אחריות יבואן רשמי** בישראל (ללא שוק אפור).
• **תקופות אחריות לדוגמה:**
  - סמארטפונים (Apple, Samsung): 24 חודשי אחריות רשמית.
  - מחשבים ניידים Dell: 36 חודשי אחריות עם שירות בבית הלקוח (On-Site).
  - מחשבי Apple MacBook: 12 חודשי אחריות יבואן רשמי.
  - שעוני Garmin: 24 חודשי אחריות רונלייט.
• האחריות מכסה תקלות חומרה ופגמי ייצור. שבר, רטיבות וקורוזיה אינם מכוסים.`;
    }

    // 4. שאלות על מע"מ וחשבוניות מס (Policy 06)
    if (q.includes('מע"מ') || q.includes('מעמ') || q.includes('חשבונית') || q.includes('ח.פ') || q.includes('18%') || q.includes('מס')) {
      return `🧾 **כללי חשבוניות מס ומע"מ בישראל (מסמך 06):**

• **שיעור המע"מ:** החל מ-**1.1.2025** שיעור המע"מ בישראל עודכן ל-**18%** (עד סוף 2024 עמד על 17%).
• **פרטי החברה:** איי.איי אלקטרוניקה בע"מ הינה עוסק מורשה רשום (ח.פ: **515-678-923**).
• **הצגת מחירים:** באתר ובחנות ללקוחות פרטיים (B2C) כל המחירים כוללים מע"מ 18%. בהצעות מחיר לעסקים (B2B) המחיר מוצג נטו ומע"מ מתווסף בחשבונית.
• **הפקת חשבונית מס:** ניתן להפיק חשבונית מס מלאה עם פירוט מע"מ וייצוא להדפסה/PDF במסך החשבוניות במערכת.`;
    }

    // 5. שאלות על משלוחים ואספקה (Policy 03)
    if (q.includes('משלוח') || q.includes('משלוחים') || q.includes('אספקה') || q.includes('זמן אספקה') || q.includes('איסוף')) {
      return `🚚 **מדיניות משלוחים ואספקה (מסמך 03):**

• **משלוח חינם:** לכל הזמנה מעל **499 ₪**!
• הזמנות מתחת ל-499 ₪: שליח עד הבית ב-35 ₪, או נקודת איסוף ב-19 ₪.
• **זמני אספקה:** 1–3 ימי עסקים למרכז הארץ, עד 5 ימי עסקים ליישובים מרוחקים.
• **איסוף עצמי חינם:** מחנות החברה ברחוב הברזל 30, רמת החייל, תל אביב (בימים א'–ה' 9:00–18:00, ו' 9:00–13:00).`;
    }

    // 6. שאלות על הנחות כמות ו-B2B (Policy 04)
    if (q.includes('הנחה') || q.includes('הנחות') || q.includes('כמות') || q.includes('b2b') || q.includes('סיטונאות') || q.includes('קופון')) {
      return `🏷️ **מדיניות הנחות כמות ומחירים (מסמך 04):**

מדרגות הנחת כמות לרכש B2B (מהמחיר הקטלוגי לפני מע"מ):
• 5–9 יחידות: **3% הנחה**
• 10–24 יחידות: **6% הנחה**
• 25–49 יחידות: **9% הנחה**
• 50–99 יחידות: **12% הנחה**
• 100+ יחידות: **הצעה אישית (עד 18% ומעלה בהתאם להיקף העסקה)**

*הערת Guardrails:* נציג מכירות מוסמך לאשר עד 10% הנחה. הנחות גבוהות יותר דורשות אישור מנהל בלבד.`;
    }

    // 7. שאלות על חיפוש מוצר או מלאי
    const matchingProducts = store.getAll('products').filter(p => 
      q.includes(p.name.toLowerCase()) || 
      q.includes(p.category.toLowerCase()) || 
      (q.includes('אייפון') && p.name.includes('iPhone')) ||
      (q.includes('סמסונג') && p.name.includes('Samsung')) ||
      (q.includes('לפטופ') && p.category.includes('מחשבים')) ||
      (q.includes('מחשב') && p.category.includes('מחשבים')) ||
      (q.includes('אוזניות') && p.category.includes('אודיו')) ||
      (q.includes('שעון') && p.category.includes('לבישים')) ||
      (q.includes('פלייסטיישן') && p.category.includes('גיימינג')) ||
      (q.includes('ראוטר') && p.category.includes('רשת'))
    );

    if (matchingProducts.length > 0) {
      const itemsList = matchingProducts.slice(0, 4).map(p => 
        `• **${p.name}**\n  קטגוריה: ${p.category} | מחיר: ₪${p.price.toLocaleString()} (כולל מע"מ 18%) | מלאי: ${p.stock} יח' | אחריות: ${p.warrantyMonths} חודשים יבואן רשמי`
      ).join('\n\n');

      return `📦 **נמצאו מוצרים תואמים בקטלוג איי.איי אלקטרוניקה:**\n\n${itemsList}\n\n*כל המוצרים מגיעים עם אחריות יבואן רשמי ומשלוח מהיר.*`;
    }

    // 8. פרטי החברה ושעות פעילות (Policy 11)
    if (q.includes('כתובת') || q.includes('שעות') || q.includes('טלפון') || q.includes('מיקום') || q.includes('סניף')) {
      return `🏢 **פרטי איי.איי אלקטרוניקה בע"מ:**

• **כתובת:** רחוב הברזל 30, רמת החייל, תל אביב
• **ח.פ:** 515-678-923 (עוסק מורשה)
• **טלפון שירות ומכירות:** 03-555-1234
• **דוא"ל:** support@ai-electronics.co.il | sales@ai-electronics.co.il
• **שעות פעילות מענה אנושי ואיסופים:**
  - ימים א'–ה': 09:00 – 18:00
  - יום ו' וערבי חג: 09:00 – 13:00
  - שבת וחגים: סגור`;
    }

    // מענה כללי ומזמין בהתאם ל-Guardrails (מסמך 07)
    return `אשמח לסייע! אני מכיר את כל נתוני המערכת ומדיניות החברה:
• **מדיניות לקוחות:** החזרות וביטולים (14 יום / DOA ב-48 שעות), אחריות יבואן רשמי, משלוחים חינם מעל 499 ₪.
• **מיסוי וחשבוניות:** חישוב מע"מ ישראלי 18% והפקת חשבונית מס.
• **קטלוג ומוצרים:** בדיקת מחירים, זמינות מלאי, ומדרגות הנחת כמות B2B.
• **תפעול וניהול:** בקש ממני "תקציר מנהל" לקבלת דוח פעילות יומי.`;
  }
}

const aiAgent = new AIAgentEngine();
