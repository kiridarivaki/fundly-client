# Fundly Angular Frontend

Angular 19 frontend for Fundly, configured to run with json-server for local development.

## Getting Started

```bash
npm install

# Terminal 1: Start mock API
npm run start:json-server

# Terminal 2: Start Angular dev server  
npm start
```

The app runs on `http://localhost:4200` with API mocked on `http://localhost:3000`.

## Project Structure

```
src/app/
├── client/        # Services and DTOs
├── shared/        # Domain models, enums, utilities
└── environments/  # Config per build environment
```

## Architecture

- **Standalone Components** with Angular 19 APIs
- **Service Layer** with centralized `UrlService` for API URLs
- **Path Aliases** for clean imports (`@shared/*`, `@client/*`, `@environments/*`)
- **Mock Data** in `db.json` with `routes.json` for endpoint mapping
