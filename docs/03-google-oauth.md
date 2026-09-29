# 3. Google OAuth Setup (Gmail & Drive)

The ERP automation integrates with Google services for:
* **Gmail**: Automated B2B cold sales outreach (WF4a & WF4b).
* **Google Drive**: Storing the 12 policy files for RAG embedding (WF6) and saving generated invoice PDFs (WF8).

## Setup via n8n Cloud
1. In n8n, navigate to **Credentials → Add Credential**.
2. Select **Gmail OAuth2 API** → name it `Gmail OAuth`.
3. Use the built-in "Sign in with Google" or custom OAuth Client ID.
4. Repeat for **Google Drive OAuth2 API** → name it `Drive OAuth`.
