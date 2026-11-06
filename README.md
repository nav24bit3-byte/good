# SV Coir Mill Website

A responsive React website starter for SV Coir Mill, built with Vite.

## 1. Install Node.js
Install the LTS version of Node.js from https://nodejs.org and restart your terminal.

## 2. Open this project
Extract the ZIP file. Open the `sv-coir-mill` folder in Visual Studio Code.

## 3. Run the website
Open Terminal in VS Code and run:

```bash
npm install
npm run dev
```

Open the local address shown in the terminal (usually http://localhost:5173).

## 4. Customize company details
Open `src/App.jsx` and replace:
- `+91 XXXXX XXXXX` with the company phone number
- `your-email@example.com` with the company email
- `Add your mill address here` with the full company address
- Sample product descriptions and production steps with the real details
- Replace sample images with your own SV Coir Mill factory/product photos

## 5. Create a production build
```bash
npm run build
```

## 6. Upload to GitHub
Create a new empty repository on GitHub. In the terminal, from this project folder, run:

```bash
git init
git add .
git commit -m "Initial SV Coir Mill website"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/sv-coir-mill.git
git push -u origin main
```

Replace the GitHub URL with your own repository URL.

## 7. Publish with Vercel
1. Visit https://vercel.com and sign in using GitHub.
2. Choose **Add New → Project**.
3. Import your `sv-coir-mill` repository.
4. Keep the framework as Vite; build command `npm run build`; output directory `dist`.
5. Click **Deploy**. Vercel will give you a public website link.

## Notes
- The contact form opens the visitor's email application. It does not save enquiries to a database.
- Product photographs are sample online images. Use your own licensed company photos before publishing.
- This is a starter website. Confirm all company information and product claims before making it public.
