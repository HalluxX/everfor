# EVERfor Deployment Guide

## Overview

This guide covers deploying the cleaned-up EVERfor project to production using:
- **Frontend**: Netlify (static site hosting)
- **Backend**: Railway (API + PostgreSQL database)

## Pre-Deployment Checklist

✅ Replit dependencies removed  
✅ Object storage system simplified  
✅ Video paths updated for static hosting  
✅ Package.json cleaned up  
✅ Routes simplified to essential API endpoints  

## Deployment Steps

### 1. Backend Deployment (Railway)

1. **Create Railway Account**
   - Go to [railway.app](https://railway.app)
   - Sign up with GitHub

2. **Create New Project**
   - Click "New Project"
   - Choose "Deploy from GitHub repo"
   - Select your EVERfor repository

3. **Add PostgreSQL Database**
   - Click "New" → "Database" → "PostgreSQL"
   - Railway will automatically set `DATABASE_URL`

4. **Deploy Backend**
   - Railway will auto-detect the Node.js app
   - Build command: `npm run build`
   - Start command: `npm start`
   - Railway will expose your API at a public URL

5. **Get Your API URL**
   - Copy the generated domain (e.g., `https://your-app.railway.app`)
   - This will be your backend API endpoint

### 2. Frontend Deployment (Netlify)

1. **Create Netlify Account**
   - Go to [netlify.com](https://netlify.com)
   - Sign up with GitHub

2. **Deploy from GitHub**
   - Click "New site from Git"
   - Choose your repository
   - Build command: `npm run build`
   - Publish directory: `dist/public`

3. **Environment Variables**
   - Go to Site settings → Environment variables
   - Add: `VITE_API_URL` = your Railway API URL

4. **Update API Endpoints**
   - In your frontend code, update API calls to use `VITE_API_URL`
   - Example: `${import.meta.env.VITE_API_URL}/api/leads`

### 3. Video Content Setup

1. **Create Videos Folder**
   - Add `public/videos/` folder to your project
   - Place your video files there:
     - `essential-intro.mp4`
     - `signature-intro.mp4`
     - `eternal-intro.mp4`
     - Corresponding thumbnail images

2. **Update Content Configuration**
   - Videos will be served directly from Netlify's CDN
   - No complex object storage needed

## Post-Deployment

1. **Test Contact Form**
   - Submit a test lead through the website
   - Verify it appears in your Railway database

2. **Check Video Playback**
   - Ensure all videos load correctly
   - Verify thumbnail images display

3. **Monitor Performance**
   - Netlify provides analytics and performance insights
   - Railway shows API usage and database performance

## Benefits of This Setup

✅ **Simpler Architecture**: No complex object storage  
✅ **Better Performance**: Global CDN for frontend, optimized backend  
✅ **Easier Maintenance**: Separate concerns, simpler debugging  
✅ **Cost Effective**: Free frontend hosting, minimal backend costs  
✅ **Scalable**: Both platforms handle growth well  
✅ **Professional**: Industry-standard hosting solutions  

## Troubleshooting

### Common Issues

1. **Build Failures**
   - Check that all Replit dependencies are removed
   - Verify TypeScript compilation passes

2. **API Connection Errors**
   - Ensure `VITE_API_URL` is set correctly in Netlify
   - Check Railway deployment status

3. **Video Loading Issues**
   - Verify video files are in `public/videos/`
   - Check file paths in content configuration

### Support

- **Netlify**: [docs.netlify.com](https://docs.netlify.com)
- **Railway**: [docs.railway.app](https://docs.railway.app)
- **Project Issues**: Check the GitHub repository issues

## Next Steps

After successful deployment:
1. Set up custom domain (optional)
2. Configure SSL certificates (automatic with both platforms)
3. Set up monitoring and analytics
4. Plan for scaling as your business grows
