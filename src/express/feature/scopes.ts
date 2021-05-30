import { Request } from 'express';

class ScopesHandler {
    static async extractScopes(req: Request) {
        (req as any).scope = Buffer.toString(req.header as any).(authorization as String));
    }
}

export default ScopesHandler;
