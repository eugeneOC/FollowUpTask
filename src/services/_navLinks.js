// crm routes
import { leadListPage } from "Helpers/crmURL";

export default [
  {
    url: "/app/crm/leads",
    baseUrl: "/app/crm",
    name: "CRM",
    child_routes: [
      {
        title: "sidebar.leads",
        path: leadListPage
      }
    ]
  }
];
