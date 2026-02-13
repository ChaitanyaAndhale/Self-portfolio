# 🚀 Deploy to Netlify - Quick Guide

Your portfolio is now on GitHub: https://github.com/ChaitanyaAndhale/Self-portfolio

## Easiest Way to Deploy (3 Steps)

### Step 1: Go to Netlify
Visit: **https://app.netlify.com**
- Sign up or log in (use your GitHub account for easy integration)

### Step 2: Import Your Project
1. Click **"Add new site"** → **"Import an existing project"**
2. Choose **"Deploy with GitHub"**
3. Authorize Netlify to access your GitHub
4. Select the **"Self-portfolio"** repository

### Step 3: Configure Build Settings
Use these exact settings:
- **Branch to deploy**: `main`
- **Build command**: `npm run build`
- **Publish directory**: `dist`

Then click **"Deploy site"**

That's it! Your site will be live in 2-3 minutes! 🎉

---

## Your Live URL
After deployment, you'll get a URL like:
```
https://your-site-name.netlify.app
```

You can customize the site name in **Site settings** → **Site details** → **Change site name**

---

## Add Custom Domain (Optional)
1. Go to **Site settings** → **Domain management**
2. Click **"Add custom domain"**
3. Follow the DNS configuration instructions

---

## Automatic Deployments
✅ Every time you push to GitHub, Netlify will automatically rebuild and deploy!

To update your site:
```bash
git add .
git commit -m "Update portfolio"
git push
```

---

## Need Help?
- Netlify Docs: https://docs.netlify.com
- Your GitHub Repo: https://github.com/ChaitanyaAndhale/Self-portfolio

---

**Your portfolio is ready to go live! 🚀**
