import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

// async components
import * as async from "./AsyncRoutes";
import * as url from "Helpers/crmURL";

function crmSwitcher() {
  return (
    <div className="saas-dashboard">
      <Switch>
        {/* ------- /Leads ------- */}
        <Route exact path={url.leadListPage} component={async.crm_lead_list} />
        <Route path={url.leadNewPage} component={async.crm_new_lead} />
        <Route path={url.leadImportPage} component={async.crm_import_lead} />
        <Route
          exact
          path={`${url.leadListPage}/:id`}
          component={async.crm_single_lead}
        />
        <Route
          path={`${url.leadListPage}/:id/edit`}
          component={async.crm_edit_lead}
        />

        {/* ------- /404 ------- */}
        <Redirect to="/404" />
      </Switch>
    </div>
  );
}

export default crmSwitcher;
