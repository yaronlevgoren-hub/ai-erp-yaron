# 1. Airtable Setup Guide

The Airtable base is the database for the entire ERP system.

## 1. Create the Base
1. Go to [airtable.com](https://airtable.com) and create an empty base named **`AI-ERP Yaron`**.
2. Copy the **Base ID** from the browser address bar (`appXXXXXXXXXXXXXX`).

## 2. Personal Access Token (PAT)
1. Go to [airtable.com/create/tokens](https://airtable.com/create/tokens) → **Create new token**.
2. Name: `AI-ERP Yaron`
3. Add Scopes:
   * `data.records:read`
   * `data.records:write`
   * `schema.bases:read`
   * `schema.bases:write`
4. Access: Add your base `AI-ERP Yaron`.
5. Copy the generated `pat...` token.

## 3. The 8 Tables (`schema/schema.json`)
The base contains 8 tables:
1. `Leads` (Name, Email, Company, Status, Created)
2. `Customers` (CustomerId, Name, Email, Phone, Company)
3. `Products` (Name, Category, Price, InStock, Description)
4. `Tasks` (Title, Status, DueDate)
5. `Invoices` (InvoiceNumber, CustomerId, Amount, VatAmount, Total, Status, Created)
6. `TaxInvoices` (InvoiceNumber, CustomerId, Amount, VatAmount, Total, Status, Created)
7. `Receipts` (ReceiptNumber, CustomerId, Amount, Status, Created)
8. `Orders` (OrderId, CustomerId, Total, Status, Created)
