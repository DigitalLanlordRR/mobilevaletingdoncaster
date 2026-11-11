# Mobile Valeting Doncaster

A lightweight static HTML/CSS/vanilla-JS website designed specifically for:
https://www.mobilevaletingdoncaster.co.uk

## Files
- `index.html` — homepage and Doncaster enquiry landing page
- `services/index.html` — service directory
- `services/*.html` — 15 individual Doncaster service pages
- `about.html`, `contact.html`
- `assets/styles.css` — shared responsive CSS
- `assets/site.js` — small deferred navigation/form script
- `robots.txt`, `sitemap.xml`

## Important pre-launch tasks
1. Confirm domain ownership and point DNS to your hosting provider. This package does not register the domain or publish the site.
2. Replace `SET-ENQUIRIES-EMAIL-HERE` in `assets/site.js` with the real monitored email address.
3. The enquiry form is currently a `mailto:` demonstration. For production, use a secure server-side form endpoint or trusted form provider, validate inputs, add spam protection, and test successful delivery.
4. Add the real business/operator identity, phone number, privacy notice, terms, insurance/credentials if applicable, genuine photos and authentic reviews with permission.
5. Confirm actual service coverage, availability, prices, booking terms and practical requirements before making claims.
6. Only add LocalBusiness structured data once the real business name, contact details, service area and eligibility are verified. No fictitious address, phone, opening hours, ratings or reviews have been added.

## Performance
The site uses static HTML, one shared CSS file, a small deferred vanilla-JS file, system fonts, and CSS-generated decorative artwork. No external frameworks, icon fonts, remote images, trackers or third-party widgets are loaded by default.
This is designed to minimise page weight and layout shift, but no one can truthfully guarantee passing Core Web Vitals without testing the deployed site. Test with PageSpeed Insights and Search Console field data after deployment. Targets at the 75th percentile: LCP <= 2.5s, INP <= 200ms, CLS <= 0.1.
