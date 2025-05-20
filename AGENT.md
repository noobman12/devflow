# Development Guidelines

## Commands
- Development: `npm run dev` (with Turbo)
- Build: `npm run build`
- Lint: `npm run lint`
- Start production: `npm run start`

## Code Style
- TypeScript with strict mode enabled
- NextJS 15 with App Router
- React 19 (RC)
- ESLint with Standard, Next/TypeScript, TailwindCSS plugins
- Prettier for formatting

## Import Conventions
- Ordered groups: built-in, external, internal, parent/sibling, index, object
- Empty lines between groups
- Alphabetize imports

## Component Standards
- Client components marked with "use client" directive
- Form validation with Zod schemas
- Error handling with explicit error messages
- Tailwind for styling with classname merging (cn utility)
- Custom components from shadcn/ui

## Naming Conventions
- Camel case for variables and functions
- Pascal case for components and interfaces
- Clear, descriptive names for files and exports