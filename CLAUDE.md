# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

### Essential Commands
- `npm install` - Install dependencies
- `npm run dev` - Start development server (Vite)
- `npm run build` - Build for production
- `npm run preview` - Preview production build

### Notes
- No linting, testing, or TypeScript checking commands are configured
- Project uses Vite as the build tool and development server

## Project Architecture

### Tech Stack
- **Framework**: React 19.1.0 with TypeScript
- **Router**: React Router DOM v7
- **UI Libraries**: 
  - React Bootstrap 2.10.10 (primary UI framework)
  - Flowbite React 0.12.3 (additional components)
  - Bootstrap 5.3.7 (base styles)
- **Icons**: React Icons 5.5.0
- **Styling**: Tailwind CSS + Custom CSS with CSS variables
- **Build Tool**: Vite 7.0.6

### Application Structure
This is a multi-page React SPA for ZUTTO, a travel/credit card benefits service:

**Core Layout**: Fixed header + main content + footer layout using flexbox
- `src/App.tsx` - Main router with layout structure
- `src/main.tsx` - Application entry point with React Router setup

**Pages** (located in `src/pages/`):
- `Home.tsx` - Landing page with hero section and offer cards
- `About.tsx` - Company information
- `Services.tsx` - Service offerings  
- `TravelHub.tsx` - Travel-related features
- `Contact.tsx` - Contact information
- Several commented-out pages: FAQ, Testimonials, Privacy, Terms

**Components** (located in `src/components/`):
- `Header.tsx` - Fixed navigation bar with responsive design
- `Footer.tsx` - Site footer (CustomFooter component)
- `ScrollToTop.tsx` - Utility component for page navigation

### Styling System

**Typography**: 
- Primary font: "Open Sans" (imported from Google Fonts)
- Logo font: "Tesla" (local TTF file)
- Consistent typography hierarchy with CSS variables

**Design System**:
- CSS variables in `:root` for consistent theming
- Apple-inspired design language (clean, minimal)
- Card-based layouts throughout
- Responsive design with Bootstrap grid system

**Color Scheme**:
- Background: `#fafafa` (--apple-bg)
- Text: `#1d1d1f` (--apple-text, --apple-heading)  
- Accent: `#007aff` (--apple-accent)

### Key Features
- Responsive navigation with mobile hamburger menu
- Smooth scrolling and scroll-to-top functionality
- Card-based UI components throughout
- Custom hover effects and transitions
- Apple-inspired visual design system

### Current State
- 5 main pages are active and functional
- Several pages are commented out (FAQ, Testimonials, Privacy, Terms)
- Typography system was recently updated to use consistent "Open Sans" font
- No testing framework or linting tools configured
- Project is ready for deployment but may need additional pages enabled

### Development Notes
- Uses CSS-in-JS for some component styling mixed with global CSS
- Tailwind CSS configured with custom theme extensions
- Bootstrap and custom CSS coexist in the styling approach
- Font files stored in `/public` directory
- Recent comprehensive typography and spacing updates documented in `TYPOGRAPHY_UPDATES.md`