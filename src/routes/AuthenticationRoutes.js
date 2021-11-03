import React, { lazy } from 'react';
import Loadable from 'ui-component/Loadable';

// project imports
import MinimalLayout from 'layout/MinimalLayout';

// login option 3 routing
const Login = Loadable(lazy(() => import('views/auth/Login')));
const Register = Loadable(lazy(() => import('views/auth/Register')));
const ForgotPassword = Loadable(lazy(() => import('views/auth/ForgotPassword')));

// ===========================|| AUTHENTICATION ROUTING ||=========================== //

const AuthenticationRoutes = {
    path: '/',
    element: <MinimalLayout />,
    children: [
        {
            path: '/auth/login',
            element: <Login />
        },
        {
            path: '/auth/register',
            element: <Register />
        },
        {
            path: '/auth/forgot-password',
            element: <ForgotPassword />
        }
    ]
};

export default AuthenticationRoutes;
