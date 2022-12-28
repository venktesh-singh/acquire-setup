import Loadable from 'app/components/Loadable';
import { lazy } from 'react';

const AppTable = Loadable(lazy(() => import('./order-list/AppTable')));
const OrderForm = Loadable(lazy(() => import('./new-order/OrderForm')));
const OrderDetails = Loadable(lazy(() => import('./order-details/OrderDetails')));
const EditOrder = Loadable(lazy(() => import('./edit-order/EditOrder')));
const WorkProgress = Loadable(lazy(() => import('./work progress/WorkProgress')));
const NewWorkP = Loadable(lazy(() => import('./work progress/Newwork')));
const WorkTrack = Loadable(lazy(() => import('./work progress/WorkTrackList')));


const orderRoutes = [
  {
    path: '/orders/order-list',
    element: <AppTable />,
  },
  {
    path: '/orders/new-order',
    element: <OrderForm />,
  },
  {
    path: '/orders/order-details',
    element: <OrderDetails />,
  },
  {
    path: '/orders/edit-order',
    element: <EditOrder />,
  },

  {
    path: '/orders/wrok-progress',
    element: <WorkProgress />,
  },

  {
    path: '/orders/new-wrok',
    element: <NewWorkP />,
  },

  {
    path: '/orders/new-wrok-track',
    element: <WorkTrack />,
  },
];

export default orderRoutes;
