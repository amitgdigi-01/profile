# Account Setup Guide

## Required Services

### 1. GitHub Account (Required)
**Purpose**: Host the static website for free

**Steps**:
1. Go to [github.com](https://github.com)
2. Click "Sign up"
3. Enter email, password, username
4. Verify email
5. Create a new repository named `profile` (or any name)
6. Enable GitHub Pages in repository settings

---

### 2. Cloudflare Account (Required)
**Purpose**: 
- DNS management for custom domain (optional)
- Free web analytics

**Steps**:
1. Go to [cloudflare.com](https://cloudflare.com)
2. Click "Sign up" → enter email + password
3. Add your domain (if using custom domain)
   - Change nameservers at your domain registrar
4. For analytics only (no domain):
   - Just add the site with any placeholder domain
   - Or use Cloudflare dashboard without adding domain

**To enable Cloudflare Analytics**:
1. Go to Cloudflare Dashboard
2. Select your site
3. Go to **Analytics** → **Web Analytics**
4. Click "Enable Web Analytics"
5. Copy the JavaScript snippet provided

---

### 3. Google Account (Required)
**Purpose**: Create Google Sheets for visitor logging

**Steps**:
1. Go to [sheets.google.com](https://sheets.google.com)
2. Sign in with your Google account (or create one)
3. Create a new Google Sheet

---

### 4. Google Apps Script (Required for Sheets Logging)
**Purpose**: Backend to receive visitor data from website and write to Google Sheets

**Steps**:

1. **Create the Google Sheet first**:
   - Go to [sheets.google.com](https://sheets.google.com)
   - Create a new sheet
   - Name it "Visitor Logs" (or any name)
   - Add header row in first row:
     ```
     A1: Timestamp
     B1: IP Address
     C1: City
     D1: Country
     E1: Device
     F1: Browser
     G1: Time Spent (seconds)
     H1: Page URL
     ```

2. **Create Apps Script**:
   - Go to [script.google.com](https://script.google.com)
   - Click "New project"
   - Delete any existing code and paste the following:

```javascript
const SHEET_NAME = "Sheet1";

const doPost = (e) => {
  const lock = LockService.getScriptLock();
  lock.tryLock(10000);

  try {
    const doc = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = doc.getSheetByName(SHEET_NAME);

    const headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
    const nextRow = sheet.getLastRow() + 1;

    const data = JSON.parse(e.postData.contents);

    const newRow = [
      new Date(),
      data.ip || "",
      data.city || "",
      data.country || "",
      data.device || "",
      data.browser || "",
      data.timeSpent || "",
      data.url || ""
    ];

    sheet.getRange(nextRow, 1, 1, newRow.length).setValues([newRow]);

    return ContentService
      .createTextOutput(JSON.stringify({ 'result': 'success', 'row': nextRow }))
      .setMimeType(ContentService.MimeType.JSON);
  }

  catch (e) {
    return ContentService
      .createTextOutput(JSON.stringify({ 'result': 'error', 'error': e }))
      .setMimeType(ContentService.MimeType.JSON);
  }

  finally {
    lock.releaseLock();
  }
};
```

3. **Deploy the Web App**:
   - Click **Deploy** → **New deployment**
   - Click the gear icon next to "Select type" → **Web app**
   - Fill in:
     - **Description**: "Visitor Logger v1"
     - **Execute as**: "Me"
     - **Who has access**: "Anyone" ⚠️ This is important!
   - Click **Deploy**
   - Copy the **Web app URL** (you'll need this for your website)

4. **Note**: Make sure your Google Sheet has a tab named "Sheet1" (default name) or update the `SHEET_NAME` variable in the script.

---

## Optional: Custom Domain via Cloudflare

If you want a custom domain instead of `username.github.io`:

1. **Buy a domain** (Namecheap, GoDaddy, etc.)
2. **Add to Cloudflare**:
   - Cloudflare Dashboard → Add site
   - Enter your domain
   - Select free plan
3. **Update nameservers** at your domain registrar:
   - Cloudflare will provide 2 nameservers
   - Replace existing nameservers
4. **Wait** for DNS propagation (up to 24 hours)
5. **Configure GitHub Pages** with custom domain in repository settings

---

## Summary of What You Need Before Deployment

| Service | Required | Account Ready When |
|---------|----------|-------------------|
| GitHub | Yes | Repository created |
| Cloudflare | Yes | Account created + analytics enabled |
| Google Sheets | Yes | Sheet created |
| Google Apps Script | Yes | Web app deployed |
| Custom Domain | Optional | Domain purchased + DNS configured |

---

## Quick Checklist

- [ ] GitHub account created
- [ ] GitHub repository created
- [ ] Cloudflare account created
- [ ] Cloudflare Web Analytics enabled (get script)
- [ ] Google Sheet created
- [ ] Google Apps Script deployed (get web app URL)
- [ ] (Optional) Custom domain purchased
