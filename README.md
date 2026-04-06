# Taracoder - Professional Corporate Website

A complete, production-ready Angular web application for Taracoder, an IT company specializing in service-based and product-based software solutions.

## 🎯 Project Overview

Taracoder is a modern, responsive, and feature-rich corporate website built with:
- **Angular 21.2.0** (Latest) - Frontend Framework
- **Bootstrap 5.3.0** - CSS Framework
- **TypeScript** - Programming Language
- **RxJS** - Reactive Programming

## 📦 Features

### ✅ Multi-Page Application
- **Home Page** - Hero section, services highlights, testimonials, technologies, CTA
- **About Us** - Company info, vision & mission, why choose us, team section, statistics
- **Services** - Detailed service offerings with interactive selection
- **Careers** - Job listings with online application form
- **Contact Us** - Contact form, information, and embedded map

### 🎨 UI/UX Features
- Sticky navbar with hover effects
- Beautiful footer with social media links
- Smooth animations and transitions
- Responsive design (mobile, tablet, desktop)
- Cards with shadows and hover effects
- Loading spinner
- Scroll-to-top button
- Professional color theme (Blue/Tech style)

### 🏗️ Architecture
- Component-based architecture
- Standalone components (modern Angular)
- Service-based data handling
- Modular folder structure
- Reusable components
- Angular Router for navigation

## 📁 Project Structure

```
src/app/
├── components/
│   ├── header/
│   │   ├── header.component.ts
│   │   ├── header.component.html
│   │   └── header.component.css
│   └── footer/
│       ├── footer.component.ts
│       ├── footer.component.html
│       └── footer.component.css
├── pages/
│   ├── home/
│   ├── about/
│   ├── services/
│   ├── careers/
│   └── contact/
├── services/
│   └── data.service.ts
├── shared/
├── app.ts (Root Component)
├── app.html
├── app.css
├── app.routes.ts (Routing)
└── app.config.ts (Configuration)
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm (v11 or higher)
- Angular CLI (v21 or higher)

### Installation

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm start
   ```

3. **Open in Browser**
   Navigate to `http://localhost:4200/`

### Build for Production

```bash
npm run build
```

Output will be in the `dist/` directory.

## 📄 Pages Overview

### Home Page (`/`)
- Hero section with main CTA
- Service highlights (4 main services)
- Technology stack showcase
- Client testimonials
- Call-to-action section
- Scroll-to-top button

### About Us Page (`/about`)
- Company introduction
- Vision & Mission cards
- Why Choose Taracoder section (6 points)
- Leadership team with social links
- Key statistics

### Services Page (`/services`)
- Service list with interactive selection
- Detailed service information
- Key features display
- All services grid view
- Why choose our services section

### Careers Page (`/careers`)
- Why join section
- Job listings (4 current openings)
- Job details display
- Online application form
- Contact for other positions

### Contact Us Page (`/contact`)
- Contact information cards
- Contact form with validation
- Contact details sidebar
- Social media links
- Embedded Google Map

## 🎨 Customization

### Colors
Edit CSS variables in `src/styles.css`:
```css
:root {
  --primary-color: #0066cc;
  --secondary-color: #003d99;
  --accent-color: #ff6b35;
  /* ... more variables */
}
```

### Content
Edit data in `src/app/services/data.service.ts`:
- Services
- Jobs
- Testimonials
- Team Members

### Navigation Links
Edit in `src/app/components/header/header.component.ts`:
```typescript
navigationLinks = [
  { label: 'Home', route: '/' },
  { label: 'About', route: '/about' },
  // ... more links
];
```

## ✨ Animations

Beautiful animations are predefined in `src/styles.css`:
- `fade-in` - Fade in from bottom
- `slide-in-left` - Slide from left
- `slide-in-right` - Slide from right
- `scale-in` - Scale up from center

Apply to elements using CSS classes:
```html
<div class="fade-in">Content</div>
<div class="slide-in-left">Content</div>
```

## 📱 Responsive Design

The application is fully responsive with Bootstrap grid system:
- Mobile: < 576px
- Tablet: 576px - 992px
- Desktop: > 992px

## 🔧 Technologies

- **Angular 21.2.0** - Frontend Framework
- **Bootstrap 5.3.0** - CSS Framework
- **TypeScript 5.9.2** - Language
- **RxJS 7.8.0** - Reactive Programming
- **Angular Forms** - Form handling with ngModel

## 📝 Component Communication

### Services
- `DataService` - Provides mock data for services, jobs, testimonials, and team members
  - Uses RxJS Observables
  - Returns data on demand

### Components
- `HeaderComponent` - Navigation and branding
- `FooterComponent` - Footer with quick links and social media
- Page components import and use DataService

## 🎯 Usage Examples

### Using Data Service
```typescript
// In any component
constructor(private dataService: DataService) {}

ngOnInit() {
  this.dataService.getServices().subscribe(data => {
    this.services = data;
  });
}
```

### Navigation
```html
<!-- In templates -->
<a [routerLink]="'/about'" routerLinkActive="active">About</a>
```

## 🚀 Deployment

### Vercel
```bash
npm run build
# Deploy the dist/taracoder folder
```

### Netlify
```bash
npm run build
# Drag and drop the dist/taracoder folder
```

### Docker
Create a `Dockerfile` for containerization and deploy to any Docker-compatible platform.

## 📊 Performance

- Lazy loading routes ready
- Optimized images with placeholders
- CSS minification via Bootstrap
- Angular AOT compilation enabled

## 🔐 Security

- Form validation on contact form
- Email validation
- XSS protection (Angular sanitization)
- CSRF ready configuration

## 🐛 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📞 Contact & Support

For questions or issues:
- Email: info@taracoder.com
- Phone: +91 9876-543-210
- Address: Bangalore, India

## 📄 License

This project is provided as-is for Taracoder.

## 🙏 Acknowledgments

Built with Angular, Bootstrap, and modern web technologies to create a professional and engaging corporate presence.

---

**Version:** 1.0.0
**Last Updated:** 2026
**Status:** Production Ready ✅
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
