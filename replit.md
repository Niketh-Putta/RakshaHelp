# Emergency First Aid - Rural India

## Overview

This is a progressive web application (PWA) designed to provide life-saving emergency first aid guidance specifically for rural India with multilingual support. The app provides step-by-step instructions for critical medical emergencies including cardiac arrest, stroke, heart attack, and sepsis. It's built as a mobile-first application that works offline and supports multiple Indian languages to ensure accessibility in areas with limited internet connectivity and diverse linguistic populations.

## User Preferences

Preferred communication style: Simple, everyday language.

## Recent Changes

### August 7, 2025 - Fixed React Errors and Added Emergency Colors
- Fixed "Cannot read properties of null (reading 'useRef')" errors by:
  - Replaced all forwardRef components with simple function components
  - Removed problematic Toaster and TooltipProvider imports
  - Simplified Button, Input, Label, Card, and Select components
  - Replaced Radix Select with native HTML select for language selector
- Added emergency color CSS variables:
  - Red for Cardiac Arrest
  - Orange for Stroke
  - Yellow for Heart Attack
  - Purple for Sepsis
  - Green for emergency contacts
- App now fully functional with proper color coding for medical emergencies

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development practices
- **Build Tool**: Vite for fast development and optimized production builds
- **Routing**: Wouter for lightweight client-side routing
- **UI Components**: shadcn/ui component library built on Radix UI primitives for accessible, customizable components
- **Styling**: Tailwind CSS with custom CSS variables for consistent theming and responsive design
- **State Management**: TanStack Query (React Query) for server state management and caching

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules for modern JavaScript features
- **Development Server**: Custom Vite integration for seamless full-stack development
- **Storage Interface**: Abstracted storage layer with in-memory implementation (MemStorage) that can be easily swapped for database integration

### Data Storage Solutions
- **Database ORM**: Drizzle ORM configured for PostgreSQL with type-safe schema definitions
- **Schema**: Defined database tables for users, emergency contacts, and emergency logs with proper relationships
- **Migration System**: Drizzle Kit for database schema migrations and management
- **Current Implementation**: In-memory storage for development with interface ready for database integration

### Progressive Web App Features
- **Service Worker**: Custom offline caching strategy for emergency scenarios
- **Web App Manifest**: Configured for mobile installation with emergency shortcuts
- **Offline Functionality**: Critical emergency instructions cached for offline access
- **Mobile Optimization**: Touch-friendly interface with accessibility considerations

### Internationalization
- **Multi-language Support**: Built-in translation system supporting English, Hindi, Bengali, Tamil, Telugu, and Marathi
- **Language Persistence**: localStorage-based language preference storage
- **Audio Instructions**: Web Speech API integration for audio guidance in multiple languages

### Mobile and Accessibility Features
- **Responsive Design**: Mobile-first approach with touch-optimized interface
- **Emergency Contact Integration**: Native tel: links for emergency calling
- **Audio Guidance**: Speech synthesis for audio instructions
- **High Contrast**: Emergency-specific color coding for different medical situations
- **Large Touch Targets**: Optimized for emergency use under stress

## External Dependencies

### Core Framework Dependencies
- **@neondatabase/serverless**: PostgreSQL database connection for Neon serverless database
- **drizzle-orm** and **drizzle-zod**: Type-safe database ORM with Zod schema validation
- **express**: Web server framework with middleware support
- **react** and **react-dom**: Core React framework for UI development

### UI and Component Libraries
- **@radix-ui/react-***: Comprehensive set of accessible, unstyled UI primitives
- **@tanstack/react-query**: Server state management and data fetching
- **tailwindcss**: Utility-first CSS framework for styling
- **lucide-react**: Icon library for consistent iconography

### Development and Build Tools
- **vite**: Fast build tool and development server
- **typescript**: Static type checking for JavaScript
- **@replit/vite-plugin-***: Replit-specific development tools and error handling

### PWA and Mobile Features
- **wouter**: Lightweight routing library for single-page applications
- **date-fns**: Date manipulation library for timestamps and logging

### Database and Validation
- **connect-pg-simple**: PostgreSQL session store for Express sessions
- **zod**: Runtime type validation and schema parsing
- **nanoid**: Unique ID generation for database records