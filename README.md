# ToolsBox — 150+ Free Online Tools

[![GitHub Pages](https://img.shields.io/badge/Hosted%20on-GitHub%20Pages-blue?logo=githubpages)](https://mytoolsbox.org)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

A massive collection of **150+ fast, accessible, and SEO-optimized** tools — calculators, QR code generators, and text utilities. Built with pure HTML, CSS, and JavaScript — no frameworks, no dependencies, no sign-ups, 100% client‑side.

🔗 **Live site:** [https://mytoolsbox.org](https://mytoolsbox.org)

---

## 📂 Project Structure
toolsbox/
│
├── assets/
│ ├── common.js ← Shared navigation & utilities (legacy)
│ ├── style.css ← Global styles
│ ├── template.html ← Starter template for new tools
│ └── images/ ← Favicons, icons, webmanifest
│
├── calculators/ ← 70+ calculators (finance, health, math, education, utility)
│ ├── calculators-index.html ← Hub page
│ ├── emi-calculator.html
│ ├── bmi-calculator.html
│ ├── sip-calculator.html
│ └── ... (70+ files)
│
├── qr-codes/ ← 50+ QR code generators (social, payment, business, utility)
│ ├── qr-code-index.html ← Hub page
│ ├── qr-url.html
│ ├── qr-wifi.html
│ ├── qr-upi.html
│ └── ... (50+ files)
│
├── text-tools/ ← 40+ text tools (analysis, transformation, encoding, AI)
│ ├── text-tools-index.html ← Hub page
│ ├── word-counter.html
│ ├── case-converter.html
│ ├── json-formatter.html
│ └── ... (40+ files)
│
├── index.html ← Homepage (all tools)
├── about.html ← About ToolsBox
├── sitemap.xml ← Complete sitemap (150+ URLs)
├── robots.txt ← Crawl directives
├── CNAME ← Custom domain (mytoolsbox.org)
├── _headers ← Security & indexing headers
├── broken_links.txt ← Link checker output (optional)
└── README.md


---

## 🧮 Tools Overview

| Category         | Count | Examples |
|------------------|-------|----------|
| **Calculators**  | 70+   | EMI, SIP, GST, Income Tax, BMI, GPA, Compound Interest, Unit Converter, Age Calculator, Percentage, Scientific, etc. |
| **QR Codes**     | 50+   | URL, WiFi, UPI, PayPal, vCard, Google Review, Instagram, YouTube, WhatsApp, Telegram, LINE, WeChat, etc. |
| **Text Tools**   | 40+   | Word Counter, Case Converter, JSON Formatter, Base64, Password Generator, Slug Generator, Text Reverser, Morse Code, etc. |

**Total:** 150+ free tools, all client‑side.

---

## 🚀 How to Add a New Tool

1. Copy `assets/template.html` to the appropriate folder (`calculators/`, `qr-codes/`, or `text-tools/`) with a new filename.
2. Edit the `<title>`, `<meta name="description">`, and `<link rel="canonical">`.
3. Write your tool logic in the `<script>` block (replace the placeholder UI).
4. Add the tool definition to the `ALL_TOOLS` array inside `index.html` (for global search).
5. Update `sitemap.xml` with the new URL (you can use the included PowerShell scripts or do it manually).
6. Commit and push — GitHub Pages auto‑deploys.

---

## 🌐 Deployment

- **Hosting:** GitHub Pages (free, unlimited, auto‑HTTPS).
- **Custom domain:** [https://mytoolsbox.org](https://mytoolsbox.org)
- **Deployment:** Automatic on every push to the `master` branch.

---

## 📈 SEO & Performance

| Feature                  | Implementation |
|--------------------------|----------------|
| Unique meta tags         | Custom `<title>` and `<meta name="description">` per page |
| Structured data          | JSON‑LD (`WebApplication`, `FAQPage`, `Organization`) |
| Sitemap                  | Full `sitemap.xml` (150+ URLs) |
| Internal linking         | "Related tools" sections on every page |
| Fully responsive         | 90+ Lighthouse mobile score |
| Privacy                  | `_headers` removes `X-Robots-Tag: noindex`; no server‑side data collection |
| Custom domain & SSL      | `CNAME` + GitHub Pages automatic HTTPS |

---

## 🛠️ Tech Stack

- **HTML5, CSS3, Vanilla JavaScript** – no build step, no dependencies
- **Google Fonts** (Plus Jakarta Sans, Playfair Display, Inter, JetBrains Mono)
- **qrcode.js** (CDN) – for QR generation
- **GitHub Pages** – hosting
- **PowerShell** – utility scripts (sitemap generation, link checking)

---

## 📄 License

MIT — free to use, modify, and distribute. Please retain attribution to ToolsBox.

---

## 🙏 Acknowledgments

Built with care by a single developer. All tools are client‑side only — your data never leaves your browser.

If you find this useful, consider sharing a link back or starring the repository. Feedback and contributions are welcome.

---

**Happy calculating, generating, and transforming!** 🚀