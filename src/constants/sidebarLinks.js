import { ROLES } from "./roles";

export const sidebarLinks = [
    {
      label: "Dashboard",
      path: "/dashboard",
      roles: [ROLES.ADMIN,ROLES.MANAGER,ROLES.INSTRUCTOR,ROLES.STUDENT],
    },
    {
      label: "Courses",
      path: "/courses",
      roles: [ROLES.ADMIN,ROLES.MANAGER,ROLES.INSTRUCTOR,ROLES.STUDENT],
    },
    {
      label: "Payments",
      path: "/payments",
      roles: [ROLES.ADMIN,ROLES.MANAGER,ROLES.STUDENT],
    },
    {
      label: "Users",
      path: "/users",
      roles: [ROLES.ADMIN]
    },
    {
      label: "Tickets",
      path: "/admin/tickets",
      roles: [ROLES.ADMIN, ROLES.INSTRUCTOR],
    },
  ];
