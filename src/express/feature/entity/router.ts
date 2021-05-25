import { Router } from 'express';
import FeatureController from './controller';
import FeatureValidator from './validator';
import { wrapController, wrapValidator } from '../../utils/express';
import ValidateRequest from '../../utils/joi';
import { getFoldersRequestSchema, createFolderRequestSchema } from './validator.schema';

const entityRouter: Router = Router();

// getByRole (role_amanldentity or role_name)
// getByDomainUser (name or uniqueld)
// getByld
// getByldentifier (pn or id card)
// getMany (id array)
// search (name or pn or id_card)
// getAll (filters)
// getUpdatedFrom (from_date)
// getUnderGroup  hierarchy
// getDirectlyUnderGroup (group_id or hierarchy)
// create (createDTO)
// updateDetails (updateDTO)
// discharge?  (person id)
// connectDomainUser (person_id, du_name or du_uniqueld)
// disconnectDomainUser (person_id, du_name or ser du_uniqueld)

entityRouter.get('getByRole/:uniqueID', () => {});
entityRouter.get('getByDomainUser/:uniqueID', () => {});
entityRouter.get('getByld/:id', () => {});
entityRouter.get('getByldentifier/:identifier', () => {});
entityRouter.get('getMany/:identifier', () => {});

export default entityRouter;
