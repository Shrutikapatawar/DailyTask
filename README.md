<<<<<<< HEAD
# DailyTask
=======
# Home SA - Next.js Project

A modern web application built with Next.js, TypeScript, Prisma, and Tailwind CSS.

## Features

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with shadcn/ui components
- **Database**: Prisma ORM with MySQL
- **UI Components**: Radix UI components
- **Animations**: Framer Motion

## Development

### Prerequisites
- Node.js 18+
- npm or yarn

### Setup
```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Deployment

### Hostinger Deployment

1. **Connect to Git Repository**
   - Your project is already connected to GitHub: https://github.com/Sharuk3/home-SA

2. **Deploy to Hostinger**
   - Log in to your Hostinger control panel
   - Navigate to "Hosting" → "Manage"
   - Go to "Advanced" → "Auto Deployer"
   - Connect your GitHub repository
   - Select the repository: `Sharuk3/home-SA`
   - Choose branch: `main`
   - Set deployment settings:
     - Node.js version: 18
     - Build command: `npm run build`
     - Start command: `npm start`
     - Publish directory: `.next`

3. **Environment Variables**
   - Add any required environment variables in Hostinger's deployment settings
   - Database connection strings
   - API keys
   - Other sensitive configuration

4. **Deploy**
   - Click "Deploy" to start the deployment process
   - Hostinger will automatically build and deploy your application

### Manual Deployment

If you prefer manual deployment:
```bash
# Clone the repository
git clone https://github.com/Sharuk3/SAProduct.git
cd home-SA

# Install dependencies
npm install

# Build the project
npm run build

# Upload the .next directory and package.json to your hosting
```

## Project Structure

```
├── src/
│   ├── app/          # Next.js app router pages
│   ├── components/   # React components
│   ├── hooks/        # Custom hooks
│   └── lib/          # Utility functions
├── prisma/           # Database schema and migrations
├── public/           # Static assets
└── tailwind.config.ts # Tailwind configuration
```

## License

MIT License
>>>>>>> b1dfc0d (Initial commit)
