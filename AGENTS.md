# AGENTS.md — AI-ERP (n8n + Airtable)

Guide for AI agents and evaluators in this repository.

## Project Overview

A learning-oriented ERP for a fictional Israeli electronics business (**איי.איי אלקטרוניקה בע"מ**), built with **n8n Cloud**, **Airtable**, and **RAG Vector Stores**.

* **Architecture**: Airtable is the database and UI (8 tables in `schema/schema.json`), n8n Cloud runs the automated workflows, and Google Drive stores generated PDF tax documents.
* **Localization**: Full RTL Hebrew layout, Israeli Shekel currency (`₪`), and compliance with Israeli tax rules (**18% VAT** from 01/01/2025).

---

## The 3 AI Agents

### 1. Manager / Owner Agent (WF9)
* **Access**: Telegram Bot #1 (Owner-only).
* **Role**: Internal business analyst and executive assistant.
* **Capabilities**:
  * Calculates financial metrics: Revenue, expenses, net earnings.
  * Surfaces proactive alerts: Overdue invoices (> שוטף+30), low inventory SKUs, stale leads.
  * Manages internal tasks in Airtable (`search_tasks`, `create_task`).
  * Searches tax documents (`search_invoices`, `Create_Invoice`, `Create_Receipt`).
* **Guardrails**: Only interacts with verified owner chat ID; never executes irreversible financial actions without explicit confirmation.

### 2. Customer Service Agent (WF5)
* **Access**: Telegram Bot #2 (Customer-facing).
* **Role**: 24/7 customer service representative grounded in RAG.
* **Knowledge Base**:
  * 12 official company policies (`data/policies/`): Returns (14 days, 5% / 100 ₪ remorse fee, 48h DOA), official warranty, free shipping over 499 ₪, pricing & B2B volume discounts.
  * Products catalog (`mock/products.csv`).
* **Guardrails**: Grounded strictly in retrieved data; never fabricates prices or specs; escalates to human team members for disputes > 5,000 ₪ or safety concerns.

### 3. Sales Outreach Agent (WF4a & WF4b)
* **Access**: Automated schedule (every 3 hours) + Gmail webhook.
* **Role**: B2B sales development representative.
* **Capabilities**: Searches new leads in Airtable, drafts personalized cold emails based on company sector and interests, sends via Gmail, and tracks responses.

---

## 8 Airtable Tables (`schema/schema.json`)
1. **`Leads`**: Sales lead intake and qualification.
2. **`Customers`**: B2C and B2B customer directory (`CUST-0001` format).
3. **`Products`**: Product catalog, prices, and stock levels.
4. **`Tasks`**: Operational task tracking.
5. **`Invoices`**: Standard pro-forma and transaction invoices.
6. **`TaxInvoices`**: Legal Israeli tax invoices with 18% VAT.
7. **`Receipts`**: Payment receipts.
8. **`Orders`**: Customer order tracking.
