# EVERfor Railway Migration Guide

## Issues with Current Codebase

The downloaded Replit project has several platform-specific dependencies that cause errors on Railway:

### Replit-Specific Code to Remove:
1. **Object Storage System** (`server/objectStorage.ts`, `server/objectAcl.ts`)
2. **Video serving routes** in `server/routes.ts` (lines 10-24)
3. **Environment variables** for Replit object storage

### Simple Railway-Compatible Solution:

## 1. Remove Replit Dependencies
- Delete `server/objectStorage.ts` and `server/objectAcl.ts`
- Remove video serving routes from `server/routes.ts`

## 2. Serve Videos Statically
- Create `public/videos/` folder
- Move all video files to `public/videos/`
- Update video components to use `/videos/filename.mp4` paths

## 3. Update Routes (server/routes.ts)
Keep only:
- Contact form submission (`/api/leads`)
- Lead retrieval (`/api/leads`)
- Static file serving

## 4. Railway Environment Setup
- Connect to Railway PostgreSQL database
- Set `DATABASE_URL` environment variable
- Deploy with `npm run build` and `npm start`

## Files to Modify:
1. `server/routes.ts` - Remove object storage routes
2. `client/src/config/content.ts` - Update video paths
3. All video components - Change to static paths
4. `package.json` - Ensure Railway-compatible scripts

This will give you a clean, Railway-compatible version with full functionality except for the complex object storage (which wasn't needed for static video files anyway).