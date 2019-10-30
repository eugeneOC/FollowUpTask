/**
 * Root Sagas
 */
import { all } from "redux-saga/effects";

//  crm
import { LeadSaga, CrmFieldSaga } from "Ducks/crm";

// follow ups
import { FollowupSaga } from "Ducks/followUp";

// settings
import { UserManagementSaga, RolesSaga } from "Ducks/setting";

// session
import AuthSaga from "Ducks/session/auth/AuthSaga";

// reports

// widgets

export default function* rootSaga() {
  yield all([
    // CRM
    LeadSaga(),
    CrmFieldSaga(),

    // Follow ups
    FollowupSaga(),

    // Session
    AuthSaga(),

    // Settings
    RolesSaga(),
    UserManagementSaga()
  ]);
}
