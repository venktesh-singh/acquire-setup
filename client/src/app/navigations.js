import { authRoles } from './auth/authRoles';


export const navigations = [
  {
    name: 'Dashboard',
    path: '/dashboard/default',
    icon: 'dashboard',
    auth: authRoles.admin,
    showTo: 'admin',
  },

  {
    name: 'Master',
    icon: 'add_to_photos',

    showTo: 'Admin',
    children: [
      {
        name: 'Materials',
        path: '/products/productlist',
        iconText: 'S',
        showTo: 'Admin',
      },

      // { name: 'Clients', path: '/client/client-list', iconText: 'S', showTo: "Admin" },
      // {
      //   name: 'Employee',
      //   path: '/employee/employeeList-list',
      //   iconText: 'S',
      //   showTo: 'Admin',
      // },
      {
        name: 'Safety Equipment',
        path: '/safety-equipment/equipment-list',
        iconText: 'S',
        showTo: 'Admin',
      },
      // { name: 'Payment', path: '/payment/payment-list', iconText: 'S', showTo: "Admin" },
      // { label: 'PROCESS STAGES', type: 'label' },
      // { name: 'Quotations', path: '/quotation/quotation-list', iconText: 'S', showTo: "Admin" },
    ],
  },

  // { label: 'COMPLETE STAGES', type: 'label' },
  // {
  //   name: 'Session/Auth',
  //   icon: 'security',
  //   children: [
  //     { name: 'Sign in', iconText: 'SI', path: '/session/signin' },
  //     { name: 'Sign up', iconText: 'SU', path: '/session/signup' },
  //     { name: 'Forgot Password', iconText: 'FP', path: '/session/forgot-password' },
  //     { name: 'Error', iconText: '404', path: '/session/404' },
  //   ],
  // },

  {
    name: 'Employee',
    icon: 'people',
    showTo: "Admin",
    children: [
      { name: 'Employee List', path: '/users/userlist', iconText: 'U', showTo: "Admin" },
      { name: 'Add Employee', path: '/users/add-user', iconText: 'A', showTo: "Admin" },

    ],
  },
  {
    name: 'Work List',
    icon: 'people',
    showTo: 'Employee',
    children: [
      {
        name: 'Work List',
        path: '/emp/work',
        iconText: 'U',
        showTo: 'Employee',
      },
      // { name: 'Add New Survey', path: '/survey/new-survey', iconText: 'U', showTo: "employee" },
    ],
  },
  {
    name: 'All Works',
    icon: 'folder_open',

    showTo: "Admin",
    children: [

      { name: 'Work List', path: '/orders/order-list', iconText: 'O', auth: authRoles.sa, showTo: "Admin" },
      { name: 'Add New Work', path: '/orders/new-order', iconText: 'A', showTo: "Admin" },
      // { name: 'Work Track List', path: '/orders/new-wrok-track', iconText: 'A', showTo: "Admin" },
      // { name: 'Work Progress', path: '/orders/wrok-progress', iconText: 'A', showTo: "Admin" },
      { name: 'New Work', path: '/orders/new-wrok', iconText: 'A', showTo: "Admin" },

    ],
  },

  // Admin site Survey

  {
    name: 'Site Survey',
    icon: 'building',
    showTo: 'Admin',
    children: [
      {
        name: 'Survey List',
        path: '/survey/survey-list',
        iconText: 'S',
        showTo: 'Admin',
      },

    ],
  },
  {
    name: 'Site Survey',
    icon: 'building',
    showTo: 'Employee',
    children: [
      {
        name: 'Survey List',
        path: '/emp/survey',
        iconText: 'S',
        showTo: 'Employee',
      },
    ],
  },

  {
    name: 'Drawing',
    icon: 'drawing',

    showTo: 'Admin',
    children: [
      { name: 'Drawing ', path: '/drawing/drawing-list', showTo: 'Admin' },

    ],
  },

  {
    name: 'Drawing',
    icon: 'drawing',
    showTo: 'Employee',
    children: [
      { name: 'Drawing ', path: '/emp/drawinglist', showTo: 'Employee' },
    ],
  },

  // {
  //   name: 'Approved Drawing ',
  //   icon: 'verified_user',
  //   showTo: "Admin",
  //   children: [

  //     { name: 'Approved Drawing ', path: '/approved-drawing/approved-drawing-list', showTo: "Admin", },
  //   ],
  // },
  {
    name: 'Aluminium ',
    icon: 'domain',

    showTo: 'Admin',
    children: [
      { name: 'Aluminium', path: '/aluminium/aluminium-list', showTo: 'Admin' },
    ],
  },

  {
    name: 'Aluminium ',
    icon: 'domain',
    showTo: 'Employee',
    children: [
      { name: 'Aluminium', path: '/emp/aluminumlist', showTo: 'Employee' },
    ],
  },

  {
    name: 'Glass / ACP Fixing  ',
    icon: 'dynamic_feed',

    showTo: 'Admin',
    children: [
      {
        name: 'Glass / ACP Fixing ',
        path: '/glassacphplfixing/glassacphplfixing-list',
        showTo: 'Admin',
      },
    ],
  },

  {
    name: 'Glass / ACP Fixing  ',
    icon: 'dynamic_feed',
    showTo: 'Employee',
    children: [
      {
        name: 'Glass / ACP Fixing ',
        path: '/emp/glassacplist',
        showTo: 'Employee',
      },
    ],
  },

  {
    name: 'Handover ',
    icon: 'key',

    showTo: 'Admin',
    children: [
      { name: 'Handover', path: '/handover/handover-list', showTo: 'Admin' },
    ],
  },
  {
    name: 'Handover ',
    icon: 'key',
    showTo: 'Employee',
    children: [
      { name: 'Handover', path: '/emp/handoverlist', showTo: 'Employee' },
    ],
  },


  {
    name: 'Notification',
    icon: 'notificationsactiveIcon ',

    showTo: 'Admin',
    children: [
      { name: 'Notification ', path: '/notification', showTo: 'Admin' },

    ],
  },

  // {
  //   name: 'Notification ',
  //   icon: 'notificationsactiveIcon',
  //   showTo: 'Employee',
  //   children: [
  //     { name: 'Notification', path: '/emp/notification', showTo: 'Employee' },
  //   ],
  // },
];
