# 4. Workflows Guide & Credential Wiring

Everything runs inside **n8n Cloud**.

## Standard Credential Names
Name credentials in n8n **exactly as listed below** so imported workflows connect automatically:

| Name | Type | Purpose |
|---|---|---|
| `Airtable PAT` | Airtable Personal Access Token | Connects to base `AI-ERP Yaron` |
| `Chat Model` | OpenAI API compatible | LLM Chat for agents |
| `Embeddings API` | OpenAI API compatible | Vector embeddings (Hebrew multilingual) |
| `Telegram Manager Bot` | Telegram API | Owner bot token |
| `Telegram Support Bot` | Telegram API | Customer service bot token |
| `Gmail OAuth` | Gmail OAuth2 | Outbound sales outreach |
| `Drive OAuth` | Google Drive OAuth2 | PDF storage and policy intake |

## The Workflows
1. **WF1**: Tax-Document Validation → Queues invoices for PDF rendering.
2. **WF3**: Contact Intake → Registers and deduplicates incoming leads in Airtable.
3. **WF4a & WF4b**: Sales Agent → Sends cold emails and tracks replies.
4. **WF5**: Customer Service Agent → RAG chat via Telegram.
5. **WF6 & WF7**: Embedding Pipelines → Reads policies & products into the in-memory vector store.
6. **WF8**: Document → PDF → Drive pipeline.
7. **WF9**: Manager Agent → Telegram analytics and task management.
