# Fundly Angular - Coding Guidelines

## Code Style
- **Language**: TypeScript (Angular 19, strict mode)
- **Syntax**: Use modern ES6+ features, functional patterns with `inject()` for DI
- **SCSS**: Components use `style: "scss"` with scoped styles
- **Naming**: PascalCase for classes/interfaces, camelCase for properties/methods
- **Strings**: Use single quotes in TypeScript, double quotes in JSON

## Architecture
- **Standalone Components**: No NgModules, standalone APIs throughout
- **Service Layer Pattern**: Services with `@Injectable({ providedIn: 'root' })` use `inject()` for dependencies
- **Model Organization**:
  - **Shared models** (`@shared/models/*`): Core domain entities (AppUser, Goal, Expense)
  - **Client models** (`@client/models/*`): Request/response DTOs
  - **Enums** (`@shared/enums/*`): String enums with explicit values for API compatibility
- **HTTP Services**: Return observables directly from `HttpClient` methods, never subscribe in services
- **URL Construction**: Always use `UrlService.urlFor(controller, action?, pathParams?, queryParams?)` — never hardcode API paths

## Build and Test
```bash
npm start                 # Dev server (ng serve)
npm run start:mock       # With json-server proxy
npm run start:json-server # Launch json-server on port 3000
npm run build            # Production build
npm test                 # Karma + Jasmine
npm run watch            # Watch mode
```

## Path Aliases
Always use configured path aliases instead of relative imports:
```typescript
import { AppUser } from '@shared/models/user.model';
import { UserClientService } from '@client/services/user-client.service';
import { environment } from '@environments/environment';
import '@styles/variables.scss';
```

Aliases in `tsconfig.json`:
- `@shared/*` → `src/app/shared/*`
- `@client/*` → `src/app/client/*`
- `@environments/*` → `src/environments/*`
- `@styles/*` → `src/scss/*`

## Project Conventions

### Services
```typescript
@Injectable({ providedIn: 'root' })
export class MyService {
  private http = inject(HttpClient);
  private urlService = inject(UrlService);
  
  getData() {
    return this.http.get(this.urlService.urlFor('resource'));
  }
}
```

### HTTP Methods
- **GET**: Retrieve data
- **POST**: Create new resource (`/api/user/register`)
- **PATCH**: Partial update (preferred for entity updates)
- **PUT**: Full replacement (rare, avoid unless replacing entire entity)

### JSON Server Routes
- Routes mapped via `routes.json` with pattern: `"/api/path/:id": "/resource/:id"`
- Development uses proxy to `http://localhost:3000`
- Production/real backend: Configure in `environment.ts`

### Data Models
- Enums: `export enum Status { ACTIVE = 'ACTIVE', ... }`
- Interfaces: Define in appropriate `models/` directory
- Keep enums with explicit string values for API consistency

## Integration Points
- **json-server**: Mock backend on port 3000 (development only)
- **Angular HttpClient**: All HTTP communication
- **UrlService**: Centralized API URL management
- **Environment Variables**: Manage baseUrl per environment in `environment.ts` and `environment.development.ts`