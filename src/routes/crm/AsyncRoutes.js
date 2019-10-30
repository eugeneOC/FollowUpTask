import React from "react";
import Loadable from "react-loadable";

// rct page loader
import RctPageLoader from "Components/RctPageLoader";

/**
 * Lead Routes
 */
export const crm_lead_list = Loadable({
  loader: () => import("./lead"),
  loading: () => <RctPageLoader />
});
export const crm_single_lead = Loadable({
  loader: () => import("./lead/view"),
  loading: () => <RctPageLoader />
});
export const crm_new_lead = Loadable({
  loader: () => import("./lead/new"),
  loading: () => <RctPageLoader />
});
export const crm_edit_lead = Loadable({
  loader: () => import("./lead/edit"),
  loading: () => <RctPageLoader />
});
export const crm_import_lead = Loadable({
  loader: () => import("./lead/import"),
  loading: () => <RctPageLoader />
});
