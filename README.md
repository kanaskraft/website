# KanasKraft Pottery Website

A marketing website for KanasKraft pottery showcasing handcrafted ceramic art and pottery items. The website is built with React and Material UI, optimized for SEO, and hosted on GitHub Pages.

## Features

- Responsive design for all device sizes
- SEO optimized with meta tags, structured data, sitemap, and robots.txt
- Material UI components for a modern and consistent UI
- React Router for client-side routing
- Easy deployment to GitHub Pages

## Tech Stack

- React.js
- Material UI
- React Router
- React Helmet for SEO
- GitHub Pages for hosting

## Getting Started

### Prerequisites

- Node.js (v14.0.0 or higher)
- npm (v6.0.0 or higher)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/kanaskraft/website.git
cd website/pottery-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The website will be available at [http://localhost:3000](http://localhost:3000).

## Deployment to GitHub Pages

The project is configured for easy deployment to GitHub Pages.

1. Update the `homepage` field in `package.json` with your GitHub Pages URL:
```json
"homepage": "https://kanaskraft.github.io/website"
```

2. Deploy to GitHub Pages:
```bash
npm run deploy
```

This will build the project and push it to the `gh-pages` branch of your repository.

## Project Structure

```
pottery-website/
├── public/                 # Static files
│   ├── images/             # Image assets
│   ├── index.html          # HTML template
│   ├── robots.txt          # SEO robots file
│   └── sitemap.xml         # XML sitemap
├── src/
│   ├── assets/             # Assets (images, icons)
│   ├── components/         # Reusable components
│   │   ├── layout/         # Layout components
│   │   └── ui/             # UI components
│   ├── contexts/           # React contexts
│   ├── hooks/              # Custom React hooks
│   ├── pages/              # Page components
│   ├── themes/             # MUI theme configuration
│   ├── utils/              # Utility functions
│   │   └── seo/            # SEO utilities
│   ├── App.js              # Main App component
│   └── index.js            # Entry point
└── package.json            # Project configuration
```

## SEO Features

- Meta tags for all pages
- Open Graph and Twitter card support
- Structured data (JSON-LD)
- XML sitemap
- Robots.txt
- Canonical URLs
- SEO-friendly routing

## Wiki Documentation

Additional documentation is available in the GitHub Wiki:
- [Content Management Guide](https://github.com/kanaskraft/website/wiki/Content-Management)
- [Development Guidelines](https://github.com/kanaskraft/website/wiki/Development-Guidelines)
- [SEO Best Practices](https://github.com/kanaskraft/website/wiki/SEO-Best-Practices)

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
