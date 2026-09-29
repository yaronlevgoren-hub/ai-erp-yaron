# 2. Telegram Bots Setup Guide

The system uses two separate bots:
1. **Manager Bot (WF9)**: Owner-only financial analytics and task manager.
2. **Support Bot (WF5)**: Customer service grounded in RAG.

## Setup Instructions

1. Open Telegram and search for [@BotFather](https://t.me/BotFather).
2. Send `/newbot`.
3. Create **Manager Bot**:
   * Name: `AI Electronics Manager`
   * Username: e.g., `ai_erp_yaron_mgr_bot`
   * Copy the returned API token.
4. Send `/newbot` again for **Support Bot**:
   * Name: `AI Electronics Support`
   * Username: e.g., `ai_erp_yaron_support_bot`
   * Copy the returned API token.

## Owner Authentication
The Manager Bot checks incoming chat IDs against the verified owner ID. Non-owner users receive an unauthorized message.
