# Deploy to Netlify - Step by Step Guide

## 🚀 Quick Deploy (5 minutes)

### Step 1: Go to Netlify
1. Open your browser and go to: **https://app.netlify.com**
2. Sign up or log in (you can use your GitHub account for easy connection)

### Step 2: Import Your Repository
1. Click **"Add new site"** button (top right)
2. Select **"Import an existing project"**
3. Choose **"Deploy with GitHub"**
4. Authorize Netlify to access your GitHub (if needed)
5. Find and select your **"Personal-Portfolio"** repository
6. Click **"Import"**

### Step 3: Configure Build Settings
Netlify should auto-detect Next.js, but verify these settings:

- **Build command:** `npm run build`
- **Publish directory:** `.next` (or leave blank - Netlify plugin handles it)
- **Node version:** `20` (already set in netlify.toml)

### Step 4: Deploy!
1. Click **"Deploy site"** button
2. Wait 2-3 minutes for the build to complete
3. Your site will be live at: `your-site-name.netlify.app`

## ✅ That's It!

Your portfolio is now live! Netlify will:
- Automatically deploy when you push to GitHub
- Provide free SSL certificate
- Give you a custom domain option

## 🎯 Next Steps

### Custom Domain (Optional)
1. Go to **Site settings** → **Domain management**
2. Click **"Add custom domain"**
3. Follow the DNS instructions

### Automatic Deployments
Every time you push to your `main` branch on GitHub, Netlify will automatically rebuild and deploy your site!

## 🆘 Troubleshooting

**Build fails?**
- Check the build logs in Netlify dashboard
- Make sure `npm run build` works locally first

**Site not loading?**
- Check that the build completed successfully
- Verify the publish directory is correct

**Need help?**
- Check Netlify docs: https://docs.netlify.com
- Or check the build logs in your Netlify dashboard

