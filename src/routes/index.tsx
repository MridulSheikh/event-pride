import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/layouts/MainLayout";
import Home from "../pages/home";
import Login from "../pages/login";
import Signup from "../pages/signup";
import DashboardLayout from "../components/layouts/DashboardLayout";
import Events from "../pages/dahboard/Events";
import CreateEvent from "../pages/dahboard/CreateEvent";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/dashboard",
        element: <DashboardLayout />,
        children: [
          {
            index: true,
            element: <Events />,
          },
        ],
      },
      {
        path: "/dashboard/create-events",
        element: <DashboardLayout />,
        children: [
          {
            index: true,
            element: <CreateEvent />,
          },
        ],
      },
    ],
  },
]);

export default router;
