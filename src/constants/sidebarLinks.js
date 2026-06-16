import { ROLES } from "./roles";

export const sidebarLinks = [
  {
    label: "Dashboard",
    path: "/dashboard",
    icon: "fa-solid fa-table-columns",
    roles: [ROLES.ADMIN, ROLES.MANAGER, ROLES.INSTRUCTOR, ROLES.STUDENT],
  },
  {
    label: "Courses",
    path: "/courses",
    icon: "fa-solid fa-book",
    roles: [ROLES.ADMIN, ROLES.MANAGER, ROLES.INSTRUCTOR, ROLES.STUDENT],
  },
  {
    label: "Payments",
    path: "/payments",
    icon: "fa-solid fa-credit-card",
    roles: [ROLES.ADMIN, ROLES.MANAGER, ROLES.STUDENT],
  },
  {
    label: "Users",
    path: "/admin/users",
    icon: "fa-solid fa-users",
    roles: [ROLES.ADMIN],
  },
];