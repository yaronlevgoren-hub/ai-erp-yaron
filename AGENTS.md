# AGENTS.md — AI-ERP (n8n + Airtable)

Guide for AI agents, developers, and John Bryce Course 53500 evaluators in this repository.

## Project Overview

A comprehensive, production-grade ERP for an Israeli electronics business (**איי.איי אלקטרוניקה בע"מ**), built with **n8n Cloud**, **Airtable**, and **RAG Vector Stores**.

* **Architecture**: Airtable is the multi-table database and UI (8 tables in `schema/schema.json`), n8n Cloud runs the automated LangChain workflows, and Google Drive stores generated PDF tax documents.
* **Localization**: Full RTL Hebrew layout, Israeli Shekel currency (`₪`), and compliance with Israeli tax rules (**18% VAT** from 01/01/2025).
* **Products Catalog**: 30 diverse electronics products across 8 categories (`mock/products.csv`, `js/data.js`).

---

## The 3 Autonomous AI Agents

### 1. Customer Service Agent (WF5)
* **Access**: Telegram Bot #1 (Customer-facing: `@yaron_ai_support_bot` | [t.me/yaron_ai_support_bot](https://t.me/yaron_ai_support_bot)).
* **Role**: 24/7 customer service representative grounded in RAG.
* **Welcome Opener**:
  > "ברוכים הבאים לחנות שלנו! (איי.איי אלקטרוניקה בע\"מ) 🛒✨ כיצד נוכל לעזור לך היום? באפשרותי לסייע לך במידע על מוצרים ומפרטים, מחירי מבצע, מדיניות החזרות ואחריות יבואן רשמי, זמני משלוח ומע\"מ 18%."
* **Knowledge Base**:
  * 12 official company policies (`data/policies/`): Returns (14 days, 5% / 100 ₪ remorse fee, 48h DOA), official warranty, free shipping over 499 ₪, pricing & B2B volume discounts.
  * Products catalog (30 products in `mock/products.csv`).
* **Guardrails**: Grounded strictly in retrieved data; never fabricates prices or specs; escalates to human team members for disputes > 5,000 ₪ or safety concerns.

### 2. Manager / Owner Agent (WF9)
* **Access**: Telegram Bot #2 (Owner-only: `@yaron_ai_manager_bot`).
* **Role**: Internal business analyst, financial controller, and executive assistant for Yaron Levgoren.
* **Capabilities**:
  * Calculates financial metrics: Revenue, expenses, net earnings.
  * Surfaces proactive alerts: Overdue invoices (> שוטף+30), low inventory SKUs, stale leads.
  * Manages internal tasks in Airtable (`search_tasks`, `create_task`).
  * Queries tax documents (`search_invoices`, `search_products`).
* **Guardrails**: Only interacts with verified owner Telegram Chat ID; never executes irreversible financial actions without explicit confirmation.

### 3. Sales Outreach Agent (WF4a & WF4b)
* **Access**: Automated schedule (every 3 hours) + Gmail webhook.
* **Role**: B2B sales development representative.
* **Capabilities**: Searches new leads in Airtable, drafts personalized cold emails based on company sector and interests, sends via Gmail, and tracks responses.

---

## 8 Airtable Tables (`schema/schema.json`)
1. **`Leads`**: Sales lead intake and qualification.
2. **`Customers`**: B2C and B2B customer directory (`CUST-0001` format).
3. **`Products`**: Product catalog, prices, and stock levels (30 items).
4. **`Tasks`**: Operational task tracking and employee dispatch.
5. **`Invoices`**: Standard pro-forma and transaction invoices.
6. **`TaxInvoices`**: Legal Israeli tax invoices with 18% VAT.
7. **`Receipts`**: Payment receipts.
8. **`Orders`**: Customer order tracking.
