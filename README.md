# React Profile Card

A beautiful and responsive React profile card component built with Vite.

## Features

- 🎨 Modern gradient design with purple theme
- 👤 Profile avatar with circular border
- 📝 Name, title, and description display
- 🔗 Social media links (GitHub, LinkedIn, Twitter, Email)
- ✨ Smooth hover animations
- 📱 Fully responsive design

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

### Build

```bash
npm run build
```

Builds the app for production to the `dist` folder.

### Lint

```bash
npm run lint
```

Runs ESLint to check code quality.

## Customization

You can customize the profile card by editing the `profileData` object in `src/App.jsx`:

```javascript
const profileData = {
  name: 'Your Name',
  title: 'Your Title',
  description: 'Your description...',
  avatar: 'your-avatar-url',
  social: {
    github: 'https://github.com/username',
    linkedin: 'https://linkedin.com/in/username',
    twitter: 'https://twitter.com/username',
    email: 'your.email@example.com'
  }
}
```

## Tech Stack

- React 19
- Vite 7
- CSS3 with modern features
- ESLint for code quality

