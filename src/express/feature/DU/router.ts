import { Router } from 'express';
import FeatureController from './controller';
import FeatureValidator from './validator';
import { wrapController, wrapValidator } from '../../utils/express';
import ValidateRequest from '../../utils/joi';
import { getFoldersRequestSchema, createFolderRequestSchema } from './validator.schema';

const duRouter: Router = Router();

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

// // Role
// getByDomainUser (du_uniqueld)
// getByid (role_amanldentity)
// getUnderGroup (group_id or hierarchy)
// getDirectlyUnderGroup(groupID or hierarchy)
// search (name or companyID or description)
// create (createDTO)
// changeGroup (role_amanidentity, group_id or group_hierarchy)
// connectDomainUser (role_companyIdentity, du_uniqueld)
// disconnectDomainUser (role_companyidentity)
// replaceDomainUser?  (role_amanidentity, du_uniqueld)

// // DU
// search (uniqueld)
// getByRole (role_amanidentity or role name)
// getById (uniqueld)
// create (createDTO)
// connectToPerson (du_uniqueld, person id)

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

duRouter.get('search', () => {});

export default duRouter;
