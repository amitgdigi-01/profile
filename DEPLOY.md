# Deployment Instructions

## Prerequisites Checklist

- [ ] GitHub account created
- [ ] GitHub repository created (e.g., "profile")
- [ ] Cloudflare account created
- [ ] Cloudflare Web Analytics enabled (get your token)
- [ ] Google Sheet created with headers
- [ ] Google Apps Script deployed (get web app URL)
- [ ] Photos prepared (see below)

---

## Prepare Your Photos

Place these files in the same folder as `index.html`:

| File | Description | Recommended Size |
|------|-------------|------------------|
| `photo.jpg` | Passport-size photo (biodata) | 400x400 px |
| `img1.jpg` | Full-screen image 1 | 1200x800 px |
| `img2.jpg` | Full-screen image 2 | 1200x800 px |
| `img3.jpg` | Full-screen image 3 | 1200x800 px |

---

## Configure the Website

### 1. Update `index.html`

Open `index.html` and replace these placeholders:

```html
<!-- Line near top - Cloudflare Analytics -->
data-cf-beacon='{"token": "YOUR_CLOUDFLARE_TOKEN_HERE"}'

<!-- Replace with your Apps Script URL -->
const APPS_SCRIPT_URL = 'YOUR_APPS_SCRIPT_WEB_APP_URL';

<!-- Update your biodata -->
<h1>Your Name</h1>
<p class="age">Age: 25</p>
<p class="occupation">Software Developer</p>
<p class="bio">Your bio here...</p>
```

### 2. Update Contact Info

```html
<a href="mailto:your.email@example.com">your.email@example.com</a>
<a href="tel:+1234567890">+1 234 567 890</a>
```

### 3. Update Social Links

```html
<a href="https://linkedin.com/in/yourprofile" target="_blank">LinkedIn</a>
<a href="https://twitter.com/yourhandle" target="_blank">Twitter</a>
```

### 4. Update Watermarks (optional)

In `index.html`, find and replace "Your Name" with your name:

```html
<span class="watermark">Your Name</span>
```

---

## Deploy to GitHub

### Step 1: Create Repository
1. Go to [github.com](https://github.com)
2. Click "+" → "New repository"
3. Repository name: `profile`
4. Select "Public"
5. Click "Create repository"

### Step 2: Upload Files

**Option A: GitHub Web Interface**
1. In your repository, click "Add file" → "Upload files"
2. Drag and drop all 6 files:
   - `index.html`
   - `style.css`
   - `photo.jpg`
   - `img1.jpg`
   - `img2.jpg`
   - `img3.jpg`
3. Click "Commit changes"

**Option B: Git Commands**
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/profile.git
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. Go to your repository settings
2. Click "Pages" (left sidebar)
3. Under "Build and deployment":
   - Source: "Deploy from a branch"
   - Branch: `main` (or `master`)
   - Folder: `/ (root)`
4. Click "Save"
5. Wait 1-2 minutes, then refresh

### Step 4: Get Your URL

Your site will be live at:
```
https://YOUR_USERNAME.github.io/profile
```

---

## Verify Tracking Works

### 1. Visit your website
Open the URL in a browser (incognito/private mode).

### 2. Check Google Sheets
Wait ~30 seconds, then check your Google Sheet. A new row should appear with visitor data.

### 3. Check Cloudflare Analytics
Log into Cloudflare dashboard → your site → Analytics → Web Analytics.

---

## Optional: Custom Domain

If you want a custom domain (e.g., `myprofile.site`):

1. **Buy domain** from Namecheap, GoDaddy, etc.
2. **Add to Cloudflare**:
   - Cloudflare Dashboard → Add site
   - Follow prompts
3. **Update nameservers** at your domain registrar:
   - Use Cloudflare's nameservers
4. **Configure GitHub Pages**:
   - Repository Settings → Pages
   - Custom domain: `myprofile.site`
   - Enforce HTTPS (wait ~1 min)

---

## Files Structure

```
profile/
├── index.html      (main page with tracking)
├── style.css       (styling)
├── photo.jpg       (passport photo)
├── img1.jpg        (gallery image 1)
├── img2.jpg        (gallery image 2)
└── img3.jpg        (gallery image 3)
```

---

## Troubleshooting

| Issue | Solution |
|-------|----------|
| Google Sheets not logging | Check browser console for errors. Ensure Apps Script is deployed with "Anyone" access. |
| Images not showing | Make sure file names match exactly (lowercase). Check file paths. |
| Cloudflare analytics not working | Verify token is correct. May take 24h for first data. |
| Site not loading | Check GitHub Pages settings. Ensure repository is public. |

---

## Security Notes

- Your Apps Script URL is public but only logs data to your Google Sheet
- IP addresses are stored in your Google Sheet (keep it private)
- Content protection can be bypassed (screenshots, etc.) — this is just a deterrent
