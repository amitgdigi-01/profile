# Project: Personal Biodata Website with Visitor Tracking

## Project Overview
Create a simple, mobile-friendly static website to display personal biodata and photos with visitor tracking capabilities.

## Website Structure

### Pages
- Single page: `index.html`

### Assets
- `style.css` - All styling
- `photo.jpg` - Passport-size photo (biodata section)
- `img1.jpg`, `img2.jpg`, `img3.jpg` - Full-screen gallery images

## Functionality Requirements

### 1. Display Content
- Biodata section with:
  - Name
  - Age / DOB
  - Occupation
  - Contact info (email / phone)
  - Short bio
  - Passport-size photo
  - Optional: social links, skills
- 2-3 full-screen images displayed below biodata
- Mobile-optimized, responsive layout

### 2. Visitor Tracking

#### Cloudflare Web Analytics
- Integration via Cloudflare script
- Dashboard shows: total visitors, unique visitors, city/country, device type, browser, visit timeline

### Google Sheets Logging (via Google Apps Script)
- JavaScript sends POST request to Apps Script web app URL
- Apps Script backend writes row to Google Sheets
- Logs include:
  - Timestamp
  - IP Address (via free IP geolocation API: ip-api.com)
  - City, Country
  - Device type, Browser
  - Visit duration/time spent (estimated via visibilitychange event)

### 3. Content Protection
- Disable right-click context menu
- Disable image drag
- Optional watermark text overlay on images

## Hosting

- **Primary**: GitHub Pages (free)
- **Custom Domain**: Optional, via Cloudflare DNS

## Technical Notes

### Deployment URL Format
- GitHub Pages: `https://username.github.io/profile`
- Custom domain (if configured): `https://yourdomain.com`

## Acceptance Criteria

1. Website loads on mobile devices without horizontal scroll
2. All images display correctly on various screen sizes
3. Right-click disabled on page
4. Images cannot be dragged
5. Cloudflare analytics script present
6. Visitor data logged to Google Sheets (via Apps Script backend)
