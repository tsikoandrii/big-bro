import {createBrowserRouter, redirect} from 'react-router-dom'

import Homepage from 'pages/home'
import MasterPage from "pages/master";
import ReservePage from "pages/reserve";
import SendPage from "pages/send";
import LoginPage from "pages/login";
import AllCheckoutsPage from "pages/all";
import MastersPage from "pages/masters/index.jsx";
import ServicesPage from "pages/services/index.jsx";
import AddMasterPage from "pages/add-master/index.jsx";
import EditMasterPage from "pages/edit-master/index.jsx";
import AddServicePage from "pages/add-service/index.jsx";
import EditServicePage from "pages/edit-service/index.jsx";
import AdditionalPage from "pages/additional/index.jsx";

export default createBrowserRouter([
    {
        path: '/',
        element: <Homepage />,
    },
    {
        path: '/master/:id',
        element: <MasterPage />,
    },
    {
        path: '/reserve/:master/:service',
        element: <ReservePage />,
    },
    {
        path: '/send',
        element: <SendPage />,
    },
    {
        path: '/admin',
        loader: () => redirect('/admin/login'),
    },
    {
        path: '/admin/login',
        element: <LoginPage />
    },
    {
        path: '/admin/all',
        element: <AllCheckoutsPage />
    },
    {
        path: '/admin/masters',
        element: <MastersPage />
    },
    {
        path: '/admin/masters/add',
        element: <AddMasterPage />
    },
    {
        path: '/admin/masters/edit/:id',
        element: <EditMasterPage />
    },
    {
        path: '/admin/services',
        element: <ServicesPage />
    },
    {
        path: '/admin/services/add',
        element: <AddServicePage />
    },
    {
        path: '/admin/services/edit/:id',
        element: <EditServicePage />
    },
    {
        path: '/admin/additional',
        element: <AdditionalPage />
    }
])