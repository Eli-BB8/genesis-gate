import { PersonFilters } from './src/express/feature/scopes';

declare namespace Express {
    export interface Request {
        scopes?: string[];
        // scopeQueries?: Partial<PersonFilters>;
    }
}
