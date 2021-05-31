import axios from 'axios';
import { NextFunction, Request, Response } from 'express';
import config from '../../config';
import { FeatureManager } from './manager';

class FeatureController {
    static async getFolders(req: Request, res: Response) {
        res.json(await FeatureManager.getFolders(req.query));
    }

    static async createFolder(req: Request, res: Response) {
        res.json(await FeatureManager.createFolder(req.body));
    }

    static async getQueries(req: Request) {
        const queries = await axios.get(config.queryService.uri, { params: { scopes: req.scopes } });
        req.scopesQueries = queries;
    }
}

export default FeatureController;
