import { Router } from 'express';
import { wrapController } from '../../../utils/express';
import ScopesHandler from '../scopes';
// import FeatureController from './controller';
// import FeatureValidator from './validator';
// import { wrapController, wrapValidator } from '../../utils/express';
// import ValidateRequest from '../../utils/joi';
// import { getFoldersRequestSchema, createFolderRequestSchema } from './validator.schema';

const entityRouter: Router = Router();

entityRouter.get('/', () => {}); // query
entityRouter.get('role/:uniqueID', wrapController(ScopesHandler.extractScopes));
entityRouter.get('digitalIdentity/:uniqueID', () => {});
entityRouter.get('id/:id', () => {});
entityRouter.get('identifier/:identifier', () => {});
entityRouter.get(':identifier', () => {});
entityRouter.get('search/:name', () => {});
entityRouter.get('updatedFrom/:fromDate', () => {});
entityRouter.get('underGroup/:hierarchy', () => {});
entityRouter.get('directlyUnderGroup/:id', () => {}); // id or hierarchy
entityRouter.post('create', () => {});
entityRouter.put('updateDetails/:updateDTO', () => {});
entityRouter.put('discharge/:id', () => {}); // ?
entityRouter.put(':id/connectDomainUser/:domainUser', () => {});
entityRouter.put(':id/disconnectDomainUser/:domainUser', () => {});

export default entityRouter;
