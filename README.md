# ToolsBox — 100+ Free Online Tools

[![GitHub Pages](https://img.shields.io/badge/Hosted%20on-GitHub%20Pages-blue?logo=githubpages)](https://mytoolsbox.org)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

A massive collection of **100+ fast, accessible, and SEO-optimized** calculator and text utility tools. Built with pure HTML, CSS, and JavaScript — no frameworks, no dependencies, no sign-ups.

🔗 **Live site:** [https://mytoolsbox.org](https://mytoolsbox.org)

---

## 📂 Project Structure

```
toolsbox/
│
├── assets/
│   ├── style.css          ← Shared styles for all tools
│   ├── common.js          ← Shared nav, footer, utilities (legacy)
│   └── template.html      ← Starter template for new tools
│
├── calculators/
│   ├── calculators-index.html   ← Hub page (64+ calculators)
│   ├── age-calculator.html
│   ├── bmi-calculator.html
│   ├── emi-calculator.html
│   ├── sip-calculator.html
│   └── ... (60+ more)
│
├── text-tools/
│   ├── text-tools-index.html    ← Hub page (40+ text tools)
│   ├── word-counter.html
│   ├── case-converter.html
│   ├── json-formatter.html
│   └── ... (35+ more)
│
├── index.html               ← Homepage (all 100+ tools)
├── about.html               ← About ToolsBox
├── sitemap.xml              ← Complete sitemap (100+ URLs)
├── robots.txt
├── CNAME                    ← Custom domain (mytoolsbox.org)
├── _headers                 ← Security & indexing headers
└── README.md
```

---

## 🧮 Calculator Tools (64+)

| Category | Example Tools |
|----------|----------------|
| **Finance** | EMI, SIP, GST, Income Tax, PPF, EPF, FD, RD, NPS, CAGR, ROI, Currency Converter, Loan Eligibility, Gratuity, HRA, Break‑even, Refinance, Rent vs Buy |
| **Health** | BMI, Body Fat, Calorie, BMR, TDEE, Water Intake, Heart Rate Zones, Sleep Cycle, Due Date, Calorie Deficit, Cholesterol |
| **Math** | Percentage, Fraction, Exponent, Logarithm, Quadratic, Slope, Standard Deviation, Random Number, Ratio, Triangle, Volume, Distance, Hex, Root |
| **Date & Time** | Age, Date Difference, Time Calculator |
| **Education** | GPA, CGPA, GPA to %, Grade, Average, Study Hour |
| **Utility** | Unit Converter, Speed Calculator, IP Address Lookup, Stopwatch, Running Pace |

---

## ✍️ Text Tools (40+)

| Category | Example Tools |
|----------|----------------|
| **Counting & Analysis** | Word Counter, Character Counter, Reading Time, Word Frequency, Sentence Counter, Line Sorter |
| **Transformation** | Case Converter, Find & Replace, Text Reverser, Whitespace Cleaner, Remove Duplicates, Join Text, Center/Left/Right Align, Add Prefix, Repeat Text, Make Text Vertical |
| **Generators** | Password Generator, Lorem Ipsum, Hashtag Generator, Random Word, Slug Generator |
| **Encoding & Conversion** | Base64, URL Encoder/Decoder, Morse Code (↔ Text), Text to Binary, Text to JSON, JSON Formatter, Color Converter (HEX/RGB/HSL), Text to Image, Text to Speech |
| **AI & Grammar** | AI Humanizer, Grammar Checker, Text Summarizer |

---

## 🚀 How to Add a New Tool

1. Copy `assets/template.html` to `calculators/` or `text-tools/` with a new filename.
2. Edit the `<title>`, `<meta name="description">`, and `<link rel="canonical">`.
3. Add your calculation or text transformation logic in the `<script>` block (or replace with your own UI).
4. Add the tool definition to the `ALL_TOOLS` array in `index.html` (for global search).
5. Update `sitemap.xml` with the new URL (or regenerate using the included PowerShell script).
6. Commit and push — GitHub Pages auto-deploys in 1–2 minutes.

---

## 🌐 Deployment

Hosted on **GitHub Pages** (free, unlimited, no credit system).  
Deploys automatically on every `git push` to the `master` branch.

- **Custom domain:** [https://mytoolsbox.org](https://mytoolsbox.org)
- **HTTPS:** Enforced (free Let’s Encrypt via GitHub Pages)
- **Live URL:** `https://mytoolsbox.org`

---

## 📈 SEO & Performance

| Feature | Implementation |
|---------|----------------|
| **Meta tags** | Unique `<title>` and `<meta name="description">` on every page |
| **Structured data** | JSON-LD (`WebApplication`, `FAQPage`, `Organization`) |
| **Sitemap** | Complete `sitemap.xml` (100+ URLs) submitted to Google Search Console |
| **Internal linking** | “Related tools” sections on every page for topical authority |
| **Mobile friendly** | Fully responsive, 90+ Lighthouse mobile score |
| **Privacy** | `_headers` file removes `X-Robots-Tag: noindex`; no server‑side data collection |
| **Custom domain** | `CNAME` + GitHub Pages SSL |

---

## 🛠️ Tech Stack

- **HTML5, CSS3, Vanilla JavaScript** – no frameworks, no build step
- **Google Fonts** (Plus Jakarta Sans, Playfair Display, Inter, JetBrains Mono)
- **Zero external dependencies** – all tools work offline after first load
- **GitHub Pages** – hosting with automatic HTTPS
- **PowerShell** – utility scripts for sitemap generation and broken link checking

---

## 📄 License

MIT — free to use, modify, and distribute. Please retain attribution to ToolsBox.

---

## 🙏 Acknowledgments

Built with care by a single developer. All tools are client‑side only — your data never leaves your browser.

If you find this useful, consider sharing a link back or starring the repository. Feedback and contributions are welcome.

---

**Happy calculating!** 🚀