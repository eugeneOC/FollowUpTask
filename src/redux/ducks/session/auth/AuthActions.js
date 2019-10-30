import * as types from "./AuthTypes";

/**
 * Log in User
 */
export const signInAccount = (user, history) => ({
  type: types.LOGIN_USER,
  payload: { user, history }
});
export const signinUserSuccess = (user, accessRights, userInfo) => ({
  type: types.LOGIN_USER_SUCCESS,
  payload: { user, accessRights, userInfo }
});
export const signinUserFailure = error => ({
  type: types.LOGIN_USER_FAILURE,
  payload: error
});

/**
 * Logout user
 */
export const logoutUser = () => ({
  type: types.LOGOUT_USER
});
export const logoutUserSuccess = () => ({
  type: types.LOGOUT_USER_SUCCESS
});
export const logoutUserFailure = () => ({
  type: types.LOGOUT_USER_FAILURE
});

/**
 * Get User rights
 */
export const getUserRights = () => ({
  type: types.USER_RIGHTS
});
export const userRightsSuccess = (accessRights, userInfo) => ({
  type: types.USER_RIGHTS_SUCCESS,
  payload: { accessRights, userInfo }
});
export const userRightsFailure = error => ({
  type: types.USER_RIGHTS_FAILURE,
  payload: error
});

/**
 * Edit Current User
 */
export const updateCurrentUser = data => ({
  type: types.UPDATE_CURRENT_USER,
  payload: data
});
export const updateCurrentUserSuccess = data => ({
  type: types.UPDATE_CURRENT_USER_SUCCESS,
  payload: data
});
export const updateCurrentUserFailure = error => ({
  type: types.UPDATE_CURRENT_USER_FAILURE,
  payload: error
});

/**
 * Update Password
 */

export const updatePassword = (oldPassword, newPassword) => ({
  type: types.UPDATE_PASSWORD,
  payload: { oldPassword, newPassword }
});
export const updatePasswordSuccess = msg => ({
  type: types.UPDATE_PASSWORD_SUCCESS,
  payload: msg
});
export const updatePasswordFailure = err => ({
  type: types.UPDATE_PASSWORD_FAILURE,
  payload: err
});
