import { Router } from 'express';
// import FeatureController from './controller';
// import FeatureValidator from './validator';
// import { wrapController, wrapValidator } from '../../utils/express';
// import ValidateRequest from '../../utils/joi';
// import { getFoldersRequestSchema, createFolderRequestSchema } from './validator.schema';

const groupRouter: Router = Router();

// // OG
// getByRole (role_name or role_amanldentity)
// getByhierarchy (hierarchy)
// getByid (id)
// getByAkaUnit(akaUnit)
// getSubtree (root_id, depth?)
// create (createDTO)
// changeParent (group_id, parent_id)
// createHierarchy (hierarchy string)
// renameGroup(group_id, newName)

groupRouter.get('role/:uniqueID', () => {});
groupRouter.get('hierarchy/:hierarchy', () => {});
groupRouter.get('id/:id', () => {});
groupRouter.get('unit/:unitName', () => {});
groupRouter.get('subTree/:rootId', () => {}); // ?depth
groupRouter.post('create', () => {});
groupRouter.put('changeParent:id', () => {}); // { parentId: String }
groupRouter.post('createHierarchy', () => {}); // { hierarchy: String }
groupRouter.put('rename/:id', () => {}); // { name: String }

export default groupRouter;
