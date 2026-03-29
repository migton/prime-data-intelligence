# Prime Data Intelligence

Prime Data Intelligence is a Cloudflare Workers project built as a premium brand site and digital product platform focused on conscious information technology.

## Official naming convention

- Brand name: `Prime Data Intelligence`
- Repository: `prime-data-intelligence`
- Worker name: `prime-data-intelligence`
- Product family labels: `Prime Guide`, `Prime Brief`, `Prime Playbook`, `Prime Toolkit`, `Prime Signal`
- Product IDs: `PDI-GUIDE-001`, `PDI-BRIEF-001`, `PDI-PLAYBOOK-001`
- Slugs: lowercase and hyphenated, for example `prime-guide-conscious-it-essentials`

## Official brand data in this repo

- Official email: `info@primedataintelligence.com`
- Rights line: `© 2026 Prime Data Intelligence. All rights reserved.`
- White logo for dark backgrounds: `public/assets/images/logo-white.jpg`
- Dark logo version: `public/assets/images/logo-black.jpg`
- Placeholder Instagram URL: `https://instagram.com/prime.data.intelligence`

## What is included

- Multi-page premium website UI
- Cloudflare Worker with API routes
- Static assets served from `public`
- Product catalog in JSON
- Insight catalog in JSON
- Optional GitHub Actions deployment workflow

## File map

- `src/worker.js` → Worker entry point
- `wrangler.jsonc` → Cloudflare Worker configuration
- `public/index.html` → Homepage
- `public/products.html` → Product catalog page
- `public/insights.html` → Insights page
- `public/about.html` → Brand and positioning page
- `public/contact.html` → Contact page
- `public/data/products.json` → Product catalog and placeholder Hotmart links
- `public/data/insights.json` → Insight themes
- `public/assets/css/styles.css` → Main design system and page styling
- `public/assets/js/main.js` → Front-end data rendering

## What you should edit later

### 1. Replace placeholder Hotmart URLs

Open:

`public/data/products.json`

Replace every `url` value with the official product URL from Hotmart.

### 2. Replace placeholder Instagram URL

Search for:

`https://instagram.com/prime.data.intelligence`

Replace it everywhere with the official Instagram profile URL.

### 3. Optional logo changes

If you later create final PNG or SVG assets, replace:

- `public/assets/images/logo-white.jpg`
- `public/assets/images/logo-black.jpg`

### 4. Optional free resource link

In `public/index.html`, replace:

`https://example.com/free-resource`

with the real lead magnet or landing page URL.

## Local run

### Prerequisites

- Node.js installed
- npm installed
- Cloudflare account

### Install dependencies

```bash
npm install
```

### Log in to Cloudflare

```bash
npx wrangler login
```

### Run locally

```bash
npm run dev
```

### Deploy manually

```bash
npm run deploy
```

## Step-by-step: upload to GitHub correctly

### Option A: create the repository from GitHub website first

1. Go to GitHub and create a new repository named `prime-data-intelligence`.
2. Do not add a README on GitHub because this repo already includes one.
3. Download and extract this project locally.
4. Open the extracted folder in terminal.
5. Run these commands:

```bash
git init
git branch -M main
git add .
git commit -m "Initial Prime Data Intelligence site"
git remote add origin https://github.com/YOUR-USERNAME/prime-data-intelligence.git
git push -u origin main
```

Replace `YOUR-USERNAME` with your real GitHub username.

### Option B: upload from VS Code

1. Open the folder in VS Code.
2. Open terminal inside VS Code.
3. Run the same commands above.
4. Sign in if Git asks for authentication.

## Step-by-step: connect GitHub repo to Cloudflare Workers pull deployment

### Recommended method: Git integration in Cloudflare

1. Sign in to Cloudflare.
2. Go to `Workers & Pages`.
3. Click `Create`.
4. Choose `Workers`.
5. Choose the option to connect to Git.
6. Authorize GitHub if asked.
7. Select the repository `prime-data-intelligence`.
8. Set the production branch to `main`.
9. Confirm the build and deployment settings.
10. Deploy.

Cloudflare will pull from GitHub and redeploy on each push to `main`.

## Manual deploy alternative

If you prefer not to connect GitHub immediately:

```bash
npm install
npx wrangler login
npx wrangler deploy
```

## GitHub Actions deployment option

This repo also includes `.github/workflows/deploy.yml`.

If you want GitHub Actions to deploy to Cloudflare, create a GitHub repository secret:

- Name: `CLOUDFLARE_API_TOKEN`
- Value: your Cloudflare API token with Workers edit permissions

Then every push to `main` can trigger deployment through GitHub Actions.

## Suggested next improvements

- Replace placeholder checkout URLs with real Hotmart URLs
- Add dedicated product detail pages
- Add an email capture form
- Add analytics and conversion tracking
- Add legal pages if needed
