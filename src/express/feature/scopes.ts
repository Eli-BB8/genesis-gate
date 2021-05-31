import { Request } from 'express';

export type PersonFilters = {
    currentUnit: string | string[];
    'domainUsers.dataSource': string | string[];
    rank: string | string[];
    entityType: string | string[];
    responsibility: string | string[];
    serviceType: string | string[];
    status: string | string[];
    job: string | string[];
    underGroupId: string;
};

class ScopesHandler {
    static async extractScopes(req: Request) {
        const spikeScope: string[] = JSON.parse(Buffer.from((req.headers.authorization || '').split('.')[1], 'base64').toString('ascii'))
            .scope as string[];
        req.scopes = spikeScope;
    }
}

export default ScopesHandler;
