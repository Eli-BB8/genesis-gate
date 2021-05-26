import { Router } from 'express';
// import FeatureController from './controller';
// import FeatureValidator from './validator';
// import { wrapController, wrapValidator } from '../../utils/express';
// import ValidateRequest from '../../utils/joi';
// import { getFoldersRequestSchema, createFolderRequestSchema } from './validator.schema';

const duRouter: Router = Router();

// // DU
// search (uniqueld)
// getByRole (role_amanidentity or role name)
// getById (uniqueld)
// create (createDTO)
// connectToPerson (du_uniqueld, person id)

duRouter.get('search', () => {}); // ?uniqueId
duRouter.get('role/:uniqueId', () => {});
duRouter.post('create', () => {});
duRouter.put(':uniqueId/connectToPerson/:id', () => {});

export default duRouter;
