ToolsBox — 30 Free Online Tools
A collection of 30 free, fast, and SEO-optimized calculator and text utility tools.
Built with pure HTML, CSS, and JavaScript — no frameworks, no dependencies.
🗂️ Project Structure
toolsbox/
├── assets/
│   ├── style.css        ← Shared styles for all 30 tools
│   ├── common.js        ← Shared nav, footer, utilities
│   └── template.html    ← Starter template for new tools
├── calculators/
│   ├── index.html       ← Calculator tools hub page
│   ├── age-calculator.html
│   ├── bmi-calculator.html
│   ├── emi-calculator.html
│   └── ... (12 more)
├── text-tools/
│   ├── index.html       ← Text tools hub page
│   ├── word-counter.html
│   ├── case-converter.html
│   └── ... (13 more)
├── index.html           ← Homepage (all 30 tools)
├── sitemap.xml
├── robots.txt
└── README.md
🧮 Calculator Tools (15)
ToolFileAge Calculatorcalculators/age-calculator.htmlBMI Calculatorcalculators/bmi-calculator.htmlEMI / Loan Calculatorcalculators/emi-calculator.htmlPercentage Calculatorcalculators/percentage-calc.htmlDate Differencecalculators/date-diff.htmlCalorie Calculatorcalculators/calorie-calc.htmlCompound Interestcalculators/compound-interest.htmlSIP Calculatorcalculators/sip-calculator.htmlGST Calculatorcalculators/gst-calculator.htmlTime Calculatorcalculators/time-calculator.htmlTip Calculatorcalculators/tip-calculator.htmlFuel Cost Calculatorcalculators/fuel-cost.htmlDue Date Calculatorcalculators/due-date-calc.htmlGPA Calculatorcalculators/gpa-calculator.htmlDiscount Calculatorcalculators/discount-calc.html
✍️ Text Tools (15)
ToolFileWord Countertext-tools/word-counter.htmlCharacter Countertext-tools/character-counter.htmlCase Convertertext-tools/case-converter.htmlLorem Ipsum Generatortext-tools/lorem-ipsum.htmlText Reversertext-tools/text-reverser.htmlRemove Duplicatestext-tools/remove-duplicates.htmlSlug Generatortext-tools/slug-generator.htmlPassword Generatortext-tools/password-generator.htmlFind & Replacetext-tools/find-replace.htmlText to Binarytext-tools/text-to-binary.htmlWhitespace Cleanertext-tools/whitespace-cleaner.htmlReading Time Calculatortext-tools/reading-time.htmlLine Sortertext-tools/line-sorter.htmlMorse Code Convertertext-tools/morse-converter.htmlHashtag Generatortext-tools/hashtag-generator.html
🚀 How to Add a New Tool

Copy assets/template.html
Rename it and place it in calculators/ or text-tools/
Update window.TB config at the top
Add your calculation/text logic in the <script> block
Update sitemap.xml with the new URL

🌐 Deployment
Deployed via Netlify — auto-deploys on every git push.
Live at: https://yourdomain.com
📈 SEO

Every page has unique <title>, <meta description>, and canonical URL
JSON-LD structured data (WebApplication schema) on all tool pages
sitemap.xml submitted to Google Search Console
Cross-linking between related tools on every page

🛠️ Tech Stack

HTML5, CSS3, Vanilla JavaScript
Google Fonts (DM Sans + DM Serif Display)
Zero dependencies, zero build step
Works offline after first load