# EVERfor Family Legacy Platform

Professional family legacy video preservation services that connect families with videography services to capture and preserve precious family stories.

## Features

- **Contact Form**: Lead capture system for potential clients
- **Service Packages**: Three-tier pricing (Essential $5K, Signature $10K, Eternal $20K)
- **Video Gallery**: Showcase of work and package introductions
- **Content Management**: Easy-to-update content configuration system
- **Responsive Design**: Modern, professional UI built with React and Tailwind CSS

## Tech Stack

- **Frontend**: React + TypeScript + Tailwind CSS + Shadcn/ui
- **Backend**: Express.js + TypeScript + Drizzle ORM
- **Database**: PostgreSQL
- **Build Tools**: Vite + ESBuild

## Quick Start

### Development

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Set Environment Variables**
   ```bash
   cp env.example .env
   # Edit .env with your database URL
   ```

3. **Start Development Server**
   ```bash
   npm run dev
   ```

4. **Build for Production**
   ```bash
   npm run build
   ```

### Database

1. **Generate Migrations**
   ```bash
   npm run db:generate
   ```

2. **Apply Migrations**
   ```bash
   npm run db:migrate
   ```

## Deployment

This project is designed to be deployed to:

- **Frontend**: Netlify (static hosting)
- **Backend**: Railway (API + PostgreSQL)

See [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md) for detailed deployment instructions.

## Content Updates

All content can be easily updated through `client/src/config/content.ts`:

- Service packages and pricing
- Video gallery content
- Profile information
- Hero section text
- Navigation items

See [CONTENT_GUIDE.md](./CONTENT_GUIDE.md) for detailed content update instructions.

## Project Structure

```
├── client/                 # React frontend application
│   ├── src/
│   │   ├── components/    # UI components
│   │   ├── config/        # Content configuration
│   │   └── pages/         # Page components
│   └── public/            # Static assets
├── server/                 # Express.js backend
│   ├── routes.ts          # API endpoints
│   └── storage.ts         # Database operations
├── shared/                 # Shared types and schemas
└── dist/                   # Production build output
```

## API Endpoints

- `POST /api/leads` - Submit contact form
- `GET /api/leads` - Retrieve all leads (admin)
- `GET /api/health` - Health check

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

MIT License - see LICENSE file for details

## Support

For deployment support, see the [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md).

For content updates, see the [CONTENT_GUIDE.md](./CONTENT_GUIDE.md).
