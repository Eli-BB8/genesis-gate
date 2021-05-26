import { Router } from 'express';
// import FeatureController from './controller';
// import FeatureValidator from './validator';
// import { wrapController, wrapValidator } from '../../utils/express';
// import ValidateRequest from '../../utils/joi';
// import { getFoldersRequestSchema, createFolderRequestSchema } from './validator.schema';

const roleRouter: Router = Router();

roleRouter.get('domainUser/:uniqeId', () => {});
roleRouter.get('/:id', () => {});
roleRouter.get('/underGroup/:groupId', () => {}); // or :hiearachy ??
roleRouter.get('/underHierarchy/:hierarchy', () => {}); // or :hiearachy ??
roleRouter.get('/directlyUnderGroup/:groupId', () => {}); // or :hiearachy ??
roleRouter.get('/search/:uniqueId', () => {});
roleRouter.post('/create', () => {});
roleRouter.put('/:uniqueId/changeGroup/:groupId', () => {});
roleRouter.put('/:uniqueId/connectDomainUser/:domainUser', () => {});
roleRouter.put('/:uniqueId/replaceDomainUser/:domainUser', () => {});

export default roleRouter;
