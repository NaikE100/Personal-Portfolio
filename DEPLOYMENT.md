# Deployment Guide for Unfiltered Ventures Portfolio

## 🚀 Recommended: Vercel (Easiest for Next.js)

Vercel is made by the Next.js team and offers the best integration. It's free for personal projects.

### Option 1: Deploy via Vercel Dashboard (Recommended for first-time)

1. **Push your code to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio setup"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
   git push -u origin main
   ```

2. **Deploy on Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Sign up/login with GitHub
   - Click "Add New Project"
   - Import your GitHub repository
   - Vercel auto-detects Next.js settings
   - Click "Deploy"
   - Your site will be live in ~2 minutes at `your-portfolio.vercel.app`

### Option 2: Deploy via Vercel CLI

```bash
# Install Vercel CLI globally
npm i -g vercel

# Login to Vercel
vercel login

# Deploy (run from portfolio directory)
vercel

# For production deployment
vercel --prod
```

### Custom Domain Setup (Vercel)

1. In Vercel dashboard → Your Project → Settings → Domains
2. Add your domain (e.g., `unfilteredventures.com`)
3. Follow DNS instructions (add A/CNAME records)
4. Vercel handles SSL automatically

---

## 🌐 Alternative: Netlify

### Deploy via Netlify Dashboard

1. **Push to GitHub** (same as above)

2. **Deploy on Netlify:**
   - Go to [netlify.com](https://netlify.com)
   - Sign up/login with GitHub
   - Click "Add new site" → "Import an existing project"
   - Select your repository
   - Build settings:
     - **Build command:** `npm run build`
     - **Publish directory:** `.next`
   - Click "Deploy site"

### Netlify Configuration File

Create `netlify.toml` in your project root:

```toml
[build]
  command = "npm run build"
  publish = ".next"

[[plugins]]
  package = "@netlify/plugin-nextjs"
```

---

## 📦 Pre-Deployment Checklist

Before deploying, make sure:

- [ ] Test build locally: `npm run build`
- [ ] Test production build: `npm run start`
- [ ] Update `layout.tsx` metadata URLs if you have a custom domain
- [ ] Verify all images are in `/public` folder
- [ ] Check that contact form endpoints are configured (if using serverless functions)

---

## 🔧 Build Configuration

Your `package.json` already has the correct scripts:
- `npm run build` - Creates production build
- `npm run start` - Runs production server locally

Both Vercel and Netlify will automatically run `npm run build` during deployment.

---

## 🎯 Quick Start (Vercel - Fastest)

1. **Install Vercel CLI:**
   ```bash
   npm i -g vercel
   ```

2. **Deploy:**
   ```bash
   cd C:\Users\tiaan\OneDrive\Desktop\portfolio
   vercel
   ```

3. **Follow prompts:**
   - Login/create account
   - Link to existing project or create new
   - Confirm settings (auto-detected)
   - Deploy!

Your site will be live in under 2 minutes! 🎉

---

## 📝 Environment Variables (if needed later)

If you add contact form functionality or API keys:

**Vercel:**
- Project Settings → Environment Variables

**Netlify:**
- Site Settings → Environment Variables

---

## 🔄 Continuous Deployment

Both platforms automatically redeploy when you push to your main branch. Just:
1. Make changes locally
2. `git push`
3. Deployment happens automatically!

---

## 💡 Pro Tips

- **Vercel** is recommended for Next.js (zero config, fastest)
- **Netlify** is great if you prefer their interface
- Both offer free SSL certificates
- Both support custom domains
- Both have generous free tiers for personal projects

---

## 🆘 Troubleshooting

**Build fails?**
- Check `npm run build` works locally
- Review build logs in dashboard
- Ensure all dependencies are in `package.json`

**Images not loading?**
- Verify images are in `/public` folder
- Check image paths in components

**Styling issues?**
- Ensure Tailwind CSS is properly configured
- Check that `globals.css` is imported in `layout.tsx`

