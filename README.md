# Swati's Portfolio (React + Tailwind)

GitHub repository: [Swatisingh6/My-Portfolio](https://github.com/Swatisingh6/My-Portfolio.git)

This project is a personal portfolio website built with **React (Create React App)** and styled using **Tailwind CSS**. It includes smooth section navigation, animated UI, a custom animated galaxy background, and a contact form that sends messages to a form endpoint.

## Live Sections

Use the navbar to smoothly scroll to these sections:

- `Home` (hero + typed roles + CTA buttons)
- `Skills` (education + technical skills + soft skills)
- `Certificates`
- `Projects` (driven from Professional Experience data)
- `Vision`
- `Blog` (display cards; posts currently link to `#`)
- `Contact` (form + direct email link)
- `Footer` (social links + copyright)

## Features

### UI & motion

- Smooth scrolling navigation with `react-scroll`
- Typed hero text using `react-typed`
- Scroll-triggered animations with `framer-motion`
- Animated galaxy background using `ogl` (WebGL)

### Content architecture

- Centralized portfolio data using `PortfolioContext`:
  - Education
  - Skills (grouped by category)
  - Certifications
  - Professional experience / project cards
  - Achievements and mission statement

### Contact

- Contact form built with `react-hook-form`
- Submit handler uses `axios` + `react-hot-toast` notifications
- Form is currently posted to the Getform endpoint:
  - `https://getform.io/f/pbqgzwzb`

## Tech Stack

- React (Create React App) + `react-scripts`
- Tailwind CSS (configured in `tailwind.config.js`, styles in `src/index.css`)
- Animation: `framer-motion`
- WebGL background: `ogl`
- Icons: `react-icons`
- Smooth scrolling: `react-scroll`
- Typed text: `react-typed`
- Forms/notifications:
  - `react-hook-form`
  - `axios`
  - `react-hot-toast`

## Project Structure (high level)

- `src/App.js`
  - Assembles the page sections and renders the `Galaxy` background + `Navbar`, `Home`, `About`, `Vision`, `Blog`, `Contact`, `Footer`.
- `src/context/PortfolioContext.js`
  - All content data (education, skills, certificates, projects, achievements, mission statement).
- `src/components/*`
  - `Navbar.js` - top navigation + responsive menu
  - `Home.js` - hero section
  - `About.js` - skills, certificates, projects, achievements, mission
  - `Vision.js` - expandable vision cards
  - `Blog.js` - blog post cards
  - `Contact.js` - contact form
  - `Footer.js` - social links and footer text
  - `Galaxy.js` + `Galaxy.css` - animated background
- `src/img/*`
  - Images used across the site (profile picture, project images, certificate images)
- `public/index.html`
  - CRA entry HTML template

## Getting Started

### Prerequisites

- Node.js (LTS recommended)
- npm

### Install dependencies

From the project root:

```bash
npm install
```

### Run the app (development)

```bash
npm start
```

Then open:

- `http://localhost:3000`

### Build for production

```bash
npm run build
```

The production build will be generated in:

- `build/`

## Customizing Your Portfolio

### 1) Edit the portfolio content

All main content is stored in:

- `src/context/PortfolioContext.js`

Update objects such as:

- `AboutData.education`
- `AboutData.skill_experience`
- `AboutData.certificates`
- `AboutData.professional_experience`
- `AboutData.achievements`
- `AboutData.mission_statement`

### 2) Replace images

Images are imported from:

- `src/img/`

Update filenames/paths in `PortfolioContext.js` and ensure the images you reference exist in `src/img/`.

### 3) Adjust the animated background

`Galaxy` is rendered in `src/App.js` with many props (density, hueShift, mouse repulsion, etc.).

To tweak the look, edit the `Galaxy` props inside `src/App.js`.

### 4) Update navigation labels and section IDs

The navbar items are defined in:

- `src/components/Navbar.js`

Links use `react-scroll` with `to={text}`. Matching section targets are set with `name="Home"`, `name="Skills"`, `name="Certificates"`, `name="Projects"`, `name="Vision"`, `name="Blog"`, `name="Contact"` in the relevant components.

## Contact Form Setup (Getform)

The form submission endpoint is hardcoded in:

- `src/components/Contact.js`

If you create your own Getform endpoint, replace:

- `https://getform.io/f/pbqgzwzb`

with your new URL.

## Deployment

You can deploy the generated `build/` folder using any static hosting provider that supports SPA routing (because it is a CRA app).

Common options:

- GitHub Pages
- Netlify
- Vercel

If you deploy under a subpath (not site root), you may need additional CRA base/public-path configuration.

## Troubleshooting

- Tailwind styles not applying
  - Confirm you have `src/index.css` with Tailwind directives (`@tailwind base; @tailwind components; @tailwind utilities;`)
  - Confirm `tailwind.config.js` content paths include `./src/**/*.{js,jsx,ts,tsx}`
- Contact form not sending
  - Check the endpoint URL in `src/components/Contact.js`
  - Ensure your browser allows the request (no blocked CORS issues)
- Navbar scroll targets don't work
  - Ensure `Navbar.js` item labels match the `name` attributes used in components

## License

All rights reserved.

# Swati’s Portfolio (React + Tailwind)

This project is a personal portfolio website built with **React (Create React App)** and styled using **Tailwind CSS**. It includes smooth section navigation, animated UI, a custom animated galaxy background, and a contact form that sends messages to a form endpoint.

## Live Sections

Use the navbar to smoothly scroll to these sections:

- `Home` (hero + typed roles + CTA buttons)
- `Skills` (education + technical skills + soft skills)
- `Certificates`
- `Projects` (driven from “Professional Experience” data)
- `Vision`
- `Blog` (display cards; posts currently link to `#`)
- `Contact` (form + direct email link)
- `Footer` (social links + copyright)

## Features

### UI & motion

- **Smooth scrolling navigation** with `react-scroll`
- **Typed hero text** using `react-typed`
- **Scroll-triggered animations** with `framer-motion`
- **Animated “Galaxy” background** using `ogl` (WebGL)

### Content architecture

- Centralized portfolio data using `PortfolioContext`:
  - Education
  - Skills (grouped by category)
  - Certifications
  - Professional experience / project cards
  - Achievements and mission statement

### Contact

- Contact form built with `react-hook-form`
- Submit handler uses `axios` + `react-hot-toast` notifications
- Form is currently posted to **Getform** endpoint: `https://getform.io/f/pbqgzwzb`

## Tech Stack

- React (Create React App) + `react-scripts`
- Tailwind CSS (configured in `tailwind.config.js`, styles in `src/index.css`)
- Animation: `framer-motion`
- WebGL background: `ogl`
- Icons: `react-icons`
- Smooth scrolling: `react-scroll`
- Typed text: `react-typed`
- Forms/notifications:
  - `react-hook-form`
  - `axios`
  - `react-hot-toast`

## Project Structure (high level)

- `src/App.js`
  - Assembles the page sections and renders the `Galaxy` background + `Navbar`, `Home`, `About`, `Vision`, `Blog`, `Contact`, `Footer`.
- `src/context/PortfolioContext.js`
  - All content data (education, skills, certificates, projects, achievements, mission statement).
- `src/components/*`
  - `Navbar.js` - top navigation + responsive menu
  - `Home.js` - hero section
  - `About.js` - skills, certificates, projects, achievements, mission
  - `Vision.js` - expandable vision cards
  - `Blog.js` - blog post cards
  - `Contact.js` - contact form
  - `Footer.js` - social links and footer text
  - `Galaxy.js` + `Galaxy.css` - animated background
- `src/img/*`
  - Images used across the site (profile picture, project images, certificate images)
- `public/index.html`
  - CRA entry HTML template

## Getting Started

### Prerequisites

- Node.js (LTS recommended)
- npm

### Install dependencies

From the project root:

```bash
npm install
```

### Run the app (development)

```bash
npm start
```

Then open:

- `http://localhost:3000`

### Build for production

```bash
npm run build
```

The production build will be generated in:

- `build/`

## Customizing Your Portfolio

### 1) Edit the portfolio content

All main content is stored in:

- `src/context/PortfolioContext.js`

Update objects such as:

- `AboutData.education`
- `AboutData.skill_experience`
- `AboutData.certificates`
- `AboutData.professional_experience`
- `AboutData.achievements`
- `AboutData.mission_statement`

### 2) Replace images

Images are imported from:

- `src/img/`

Update filenames/paths in `PortfolioContext.js` and ensure the images you reference exist in `src/img/`.

### 3) Adjust the animated background

`Galaxy` is rendered in `src/App.js` with many props (density, hueShift, mouse repulsion, etc.).

To tweak the look, edit the `Galaxy` props inside `src/App.js`.

### 4) Update navigation labels and section IDs

The navbar items are defined in:

- `src/components/Navbar.js`

Links use `react-scroll` with `to={text}`. Matching section targets are set with `name="Home"`, `name="Skills"`, `name="Certificates"`, `name="Projects"`, `name="Vision"`, `name="Blog"`, `name="Contact"` in the relevant components.

## Contact Form Setup (Getform)

The form submission endpoint is hardcoded in:

- `src/components/Contact.js`

If you create your own Getform endpoint, replace:

- `https://getform.io/f/pbqgzwzb`

with your new URL.

## Deployment

You can deploy the generated `build/` folder using any static hosting provider that supports SPA routing (because it’s a CRA app).

Common options:

- GitHub Pages
- Netlify
- Vercel

If you deploy under a subpath (not site root), you may need additional CRA base/public-path configuration.

## Troubleshooting

- **Tailwind styles not applying**
  - Confirm you have `src/index.css` with Tailwind directives (`@tailwind base; @tailwind components; @tailwind utilities;`)
  - Confirm `tailwind.config.js` content paths include `./src/**/*.{js,jsx,ts,tsx}`.
- **Contact form not sending**
  - Check the endpoint URL in `src/components/Contact.js`
  - Ensure your browser allows the request (no blocked CORS issues).
- **Navbar scroll targets don’t work**
  - Ensure `Navbar.js` item labels match the `name` attributes used in components.

## License

All rights reserved.

