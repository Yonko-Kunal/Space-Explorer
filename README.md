# Space Explorer (NASA Web App)

A modern, responsive web application built with React and Vite that brings you real images and data from the surface of Mars, captured by NASA's Curiosity and Perseverance rovers. The app uses NASA's public APIs to fetch and display space exploration data and imagery.

[Live link](https://yonko-space-explorer.netlify.app)

## Features

- **Animated Hero Section:** Immersive animated background with stars and parallax effects.
- **Explore Cards:** Quick navigation to Mars Rover exploration and other features.
- **Mars Rover Gallery:**
  - Browse real Mars images by rover and camera type.
  - Filter by rover (Curiosity, Perseverance) and camera.
  - Responsive, mobile-friendly image gallery.
- **Learn More Section:**
  - Information about the project, NASA APIs, and the famous "Pale Blue Dot" image and quote by Carl Sagan.
- **Footer:**
  - Data source links, NASA resources, and social links.
  - Fully responsive and accessible.

## Demo

> **To run locally, see instructions below.**

---

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v18 or later recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)

### Installation
1. **Clone the repository:**
   ```bash
   git clone [<your-repo-url>](https://github.com/Yonko-Kunal/Space-Explorer/tree/main/Frontend/NASA-webApp)
   cd Frontend/NASA-webApp
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Set up environment variables:**
   - Create a `.env` file in the root of `NASA-webApp`:
     ```env
     VITE_SECRET=your_nasa_api_key_here
     ```
   - Get your free NASA API key from [api.nasa.gov](https://api.nasa.gov/).

### Running the App
- **Development mode:**
  ```bash
  npm run dev
  ```
  The app will be available at [http://localhost:5173](http://localhost:5173) by default.

- **Production build:**
  ```bash
  npm run build
  npm run preview
  ```

---

## Project Structure

```
NASA-webApp/
├── public/                # Static assets (favicons, etc.)
├── src/
│   ├── assets/images/     # Image assets
│   ├── Components/
│   │   ├── AnimatedSection/
│   │   ├── CardsSection/
│   │   ├── Footer/
│   │   └── Hero/
│   ├── Pages/
│   │   ├── MarsRover.jsx  # Mars Rover gallery page
│   │   └── CSS/
│   ├── App.jsx            # Main app component
│   ├── main.jsx           # Entry point
│   └── index.css          # Global styles
├── index.html             # HTML template
├── package.json           # Project metadata & scripts
└── README.md              # This file
```

---

## Environment Variables
- **VITE_SECRET**: Your NASA API key (required for fetching Mars Rover images).

---

## Scripts
- `npm run dev` — Start development server
- `npm run build` — Build for production
- `npm run preview` — Preview production build
- `npm run lint` — Lint the codebase

---

## Dependencies
- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Axios](https://axios-http.com/)
- [React Router](https://reactrouter.com/)
- [React Scroll](https://www.npmjs.com/package/react-scroll)
- [React Intersection Observer](https://www.npmjs.com/package/react-intersection-observer)
- [React Icons](https://react-icons.github.io/react-icons/)

---

## Credits & Data Sources
- **Images & Data:** [NASA Open APIs](https://api.nasa.gov/)
- **Pale Blue Dot:** NASA/JPL-Caltech, Carl Sagan
- **UI/UX:** Custom, with inspiration from NASA's public resources

---

## License
This project is for educational and demonstration purposes. Please respect NASA's [image use policy](https://www.nasa.gov/multimedia/guidelines/index.html) when using data and images.
