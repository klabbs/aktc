import { ROLES } from "./roles";

export const sidebarLinks = [
    {
      label: "Dashboard",
      path: "/dashboard",
      roles: [ROLES.ADMIN,ROLES.MANAGER,ROLES.INSTRUCTOR,ROLES.STUDENT],
    },
    {
      label: "Reports",
      path: "/reports",
      roles: [ROLES.ADMIN, ROLES.MANAGER, ROLES.INSTRUCTOR],
    },
    {
      label: "Users",
      path: "/users",
      roles: [ROLES.ADMIN]
    },
    {
      label: "Courses",
      path: "/courses",
      roles: [ROLES.ADMIN,ROLES.MANAGER,ROLES.INSTRUCTOR,ROLES.STUDENT],
    },
    {
      label: "Batches",
      path: "/batches",
      roles: [ROLES.ADMIN,ROLES.MANAGER,ROLES.INSTRUCTOR,ROLES.STUDENT],
    },
    {
      label: "Registrations",
      path: "/registration",
      roles: [ROLES.ADMIN]
    },
    {
      label: "Payments",
      path: "/payments",
      roles: [ROLES.ADMIN,ROLES.MANAGER,ROLES.STUDENT],
    },
    {
      label: "Wallets",
      path: "/wallets",
      roles: [ROLES.ADMIN,ROLES.MANAGER,ROLES.STUDENT],
    },
    {
      label: "Classes",
      path: "/classes",
      roles: [ROLES.ADMIN,ROLES.MANAGER,ROLES.INSTRUCTOR,ROLES.STUDENT],
    },
    {
      label: "Timetable",
      path: "/timetable",
      roles: [ROLES.ADMIN,ROLES.MANAGER,ROLES.INSTRUCTOR,ROLES.STUDENT],
    },
    {
      label: "Attendance",
      path: "/attendance",
      roles: [ROLES.ADMIN,ROLES.MANAGER,ROLES.INSTRUCTOR,ROLES.STUDENT],
    },
    {
      label: "Gradebook",
      path: "/gradebook",
      roles: [ROLES.ADMIN,ROLES.MANAGER,ROLES.INSTRUCTOR,ROLES.STUDENT],
    },
    {
      label: "eLibrary",
      path: "/library",
      roles: [ROLES.ADMIN, ROLES.INSTRUCTOR],
    },
    {
      label: "Tickets",
      path: "/tickets",
      roles: [ROLES.ADMIN, ROLES.INSTRUCTOR],
    },
    {
      label: "Announcements",
      path: "/announcements",
      roles: [ROLES.ADMIN,ROLES.MANAGER,ROLES.INSTRUCTOR,ROLES.STUDENT],
    },
    {
      label: "Events",
      path: "/events",
      roles: [ROLES.ADMIN,ROLES.MANAGER,ROLES.INSTRUCTOR,ROLES.STUDENT],
    },
    {
      label: "Forum",
      path: "/forum",
      roles: [ROLES.ADMIN,ROLES.MANAGER,ROLES.INSTRUCTOR,ROLES.STUDENT],
    },
  ];
