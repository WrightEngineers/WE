Wright Engineers website - 4 pages (Home, Services, About us, Contact us)
=======================================================================

HOW TO PREVIEW
Double-click index.html. It opens in your browser. No installation needed.

WHAT TO REPLACE (use Find and Replace in any text editor, across all .html files)
  Wright Engineers                 -> the business name
  Mumbai                  -> e.g. the town and state of the workshop
  [Street address]               -> the street address
  [City, State, PIN code]        -> full postal line on the Contact page
  [Year]                         -> year the business was founded
  info@wrightengineers.in           -> real email address
  +91 98201 66320 (India)                -> phone number (as shown on screen)
  +910000000000                  -> same number with no spaces (used for tap-to-call)
  [ ... ] text on About us       -> story, workshop and machine list (search for "[")
  Certifications row on About us -> add a real certification or delete the row

CHECK THE WORDING
The copy is a first draft. Please check these against how the business really works:
  - Services page: materials, processes, heat treatment, inspection tools
  - Home page "How an order works" (five steps)
  - About us: "We check the first piece with you", "Many of our customers..."
Delete or change anything that is not true. Do not claim certifications you do not hold.

CONTACT FORM
The form needs a free form-handling service because a plain website cannot send email by itself.
  1. Create an account at https://formspree.io and make a new form with your email address.
  2. Copy the form ID they give you.
  3. In contact.html, replace YOUR_FORM_ID in
     action="https://formspree.io/f/YOUR_FORM_ID" with that ID.
Until you do this, the form will show an error and visitors should use the email address and phone number.

PUTTING IT ONLINE
Upload the whole folder (keeping the css, js and images folders) to any web host:
  - Shared hosting: upload into the public_html folder using the host's file manager or FTP.
  - Free options: Netlify Drop (drag the folder onto the page) or GitHub Pages.
Then point your domain name at it. Keep the file names exactly as they are.

FILES
  index.html, services.html, about.html, contact.html   the four pages
  css/style.css      all colours, fonts and layout (colours are at the top of the file)
  js/main.js         footer year and contact form sending
  images/            part drawings (SVG) and the logo (logo-mark.png)
  favicon.ico, favicon.png, apple-touch-icon.png   browser tab and phone home-screen icons

FONTS
Archivo and IBM Plex Sans load from Google Fonts. If a visitor is offline, the page falls back to Arial.

REPLACING THE DRAWINGS WITH PHOTOS
Put your photos in the images folder and change the src="images/..." file names in the pages.
Real photos of your parts will always be more convincing than drawings.
