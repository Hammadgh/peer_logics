# cPanel Deployment Guide

## 📦 Static Build Complete!

Your Next.js site has been successfully built as a static site and is ready for cPanel deployment.

---

## 📁 Build Output Location

**All static files are located in:** `out/` directory

---

## 🚀 How to Deploy to cPanel

### Step 1: Compress the Build Files
1. Navigate to the `out` folder
2. Select **ALL files and folders** inside `out/`
3. Create a ZIP file (e.g., `peerlogics-static.zip`)
   - **Important:** ZIP the contents of the `out` folder, NOT the `out` folder itself

### Step 2: Access cPanel File Manager
1. Log in to your cPanel account
2. Open **File Manager**
3. Navigate to `public_html` (or your domain's root directory)

### Step 3: Upload Files
1. Click **Upload** button in File Manager
2. Upload your `peerlogics-static.zip` file
3. Wait for the upload to complete

### Step 4: Extract Files
1. Go back to File Manager
2. Right-click on `peerlogics-static.zip`
3. Select **Extract**
4. Extract to current directory (`public_html`)
5. Delete the ZIP file after extraction

### Step 5: Verify Deployment
1. Visit your domain in a browser
2. Test all pages and features:
   - Home page (`/`)
   - About page (`/about`)
   - Contact page (`/contact`)
   - All service pages (`/services/*`)
   - Theme toggle (light/dark mode)

---

## ✅ What's Included

The static build includes:

- ✅ All HTML pages pre-rendered
- ✅ Optimized JavaScript bundles
- ✅ CSS stylesheets
- ✅ All images and assets
- ✅ Font files
- ✅ Video files
- ✅ Full light/dark mode functionality

---

## 📊 Build Statistics

- **Total Pages:** 13 pages
- **Main Bundle Size:** ~120 KB (first load)
- **All Pages:** Static (pre-rendered)
- **Performance:** Optimized for production

### Pages Included:
- `/` - Home page (4.41 kB)
- `/about` - About page (168 B)
- `/contact` - Contact page (3.9 kB)
- `/services/ecommerce` - E-commerce service (5.09 kB)
- `/services/hr-management` - HR Management service (3.73 kB)
- `/services/medical-billing` - Medical Billing service (3.67 kB)
- `/services/software-development` - Software Development (3.81 kB)
- `/services/ui-ux` - UI/UX Design service (3.65 kB)
- `/services/website-development` - Website Development (5.1 kB)
- `/404` - 404 error page

---

## ⚙️ Configuration Changes Made

Updated `next.config.ts`:
```typescript
output: 'export'           // Static export mode
images: { unoptimized: true }  // Required for static hosting
trailingSlash: true        // Better static hosting compatibility
```

---

## 🔧 Alternative: Upload via FTP

If you prefer FTP:
1. Connect to your hosting via FTP client (FileZilla, etc.)
2. Navigate to `public_html` or your domain root
3. Upload **all contents** from the `out/` folder
4. Ensure file permissions are correct (644 for files, 755 for folders)

---

## 📝 Important Notes

1. **Upload Contents, Not Folder:** Upload the files INSIDE the `out` folder, not the `out` folder itself
2. **Root Directory:** Files should be in `public_html`, not `public_html/out`
3. **File Structure:** Maintain the exact folder structure from the `out` directory
4. **Assets:** All images, videos, and assets will be in the `assests` folder
5. **Clean Directory:** If you have old files, clear them before uploading

---

## 🔄 Rebuilding for Updates

When you make changes to your site:

1. Run: `npm run build`
2. New static files will be generated in `out/`
3. Upload the new files to cPanel (overwrite existing)
4. Clear browser cache to see changes

---

## 🌐 Testing Before Upload

Test the static build locally:
```bash
# Install a simple HTTP server
npm install -g serve

# Serve the out directory
serve out

# Open http://localhost:3000 in your browser
```

---

## ✨ Features Working in Static Build

All features are fully functional:
- ✅ Light/Dark mode toggle
- ✅ Theme persistence (via localStorage)
- ✅ Smooth scrolling navigation
- ✅ Contact form (Web3Forms integration)
- ✅ All animations and transitions
- ✅ Responsive design
- ✅ All service pages
- ✅ Glass morphism effects

---

## 📞 Support

If you encounter any issues:
1. Check file permissions on cPanel
2. Verify all files uploaded correctly
3. Check browser console for errors
4. Clear browser cache and try again

**Your static site is ready to deploy!** 🎉

