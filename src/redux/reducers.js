/**
 * App Reducers
 */
import { combineReducers } from "redux";
import { reducer as modal } from "redux-modal";

// session
import { AuthReducer } from "Ducks/session";

// crm
import { LeadReducer, CrmFieldReducer } from "Ducks/crm";

// follow ups
import { FollowupReducer } from "Ducks/followUp";

//settings
import { UserManagementReducer, RolesReducer } from "Ducks/setting";

// system

const reducers = combineReducers({
  sessionState: combineReducers({
    authState: AuthReducer
  }),
  crmState: combineReducers({
    leadState: LeadReducer,
    crmField: CrmFieldReducer
  }),

  followupState: FollowupReducer,
  usersState: UserManagementReducer,
  rolesState: RolesReducer,
  modal
});

export default reducers;
