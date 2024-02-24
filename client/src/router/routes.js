import {
  SignUp,
  Home,
  Login,
  AdminHome,
  AdminLogin,
  VendorHome,
  VendorLogin,
  VendorSignUp,
  VendorProducts,
} from '../views';
import { AdminProducts } from '../views/AdminDashboard';
import AdminOrders from '../views/AdminDashboard/adminorders';
import AdminProfile from '../views/AdminDashboard/adminprofile';
import VendorOrders from '../views/VendorDashboard/vendororders';
import VendorProfile from '../views/VendorDashboard/vendorprofile';

const routes = {
  userSignUp: {
    path: '/signup',
    component: <SignUp />,
  },
  userLogin: {
    path: '/login',
    component: <Login />,
  },
  userHome: {
    path: '/',
    component: <Home />,
  },
  vendorSignUp: {
    path: '/vendorsignup',
    component: <VendorSignUp />,
  },
  vendorLogin: {
    path: '/vendorlogin',
    component: <VendorLogin />,
  },
  vendorHome: {
    path: '/vendorhome',
    component: <VendorHome />,
  },

  adminLogin: {
    path: '/adminlogin',
    component: <AdminLogin />,
  },
  adminHome: {
    path: '/adminhome',
    component: <AdminHome />,
  },
  adminProducts: {
    path: '/adminproducts',
    component: <AdminProducts />,
  },
  adminProfile: {
    path: '/adminprofile',
    component: <AdminProfile />,
  },
  adminOrders: {
    path: '/adminproducts',
    component: <AdminOrders />,
  },
  vendorProducts: {
    path: '/vendorproducts',
    component: <VendorProducts />,
  },
  vendorProfile: {
    path: '/vendorprofile',
    component: <VendorProfile />,
  },
  vendorOrders: {
    path: '/vendorOrders',
    component: <VendorOrders />,
  },
};

const defaultRoutes = {
  publicRoutes: [
    routes.userSignUp,
    routes.userLogin,
    routes.vendorSignUp,
    routes.vendorLogin,
    routes.adminLogin,
  ],
  protectedRoutes: [
    routes.vendorHome,
    routes.adminHome,
    routes.userHome,
    routes.adminProducts,
    routes.adminProfile,
    routes.adminOrders,
    routes.vendorProducts,
    routes.vendorProfile,
    routes.vendorOrders,
  ],
};

export default defaultRoutes;
