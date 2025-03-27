
import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard";
import Setting from "./pages/Setting";
import Users from "./pages/Users";
import Analytics from "./pages/Analytics";
import Messages from "./pages/Messages";
import Reports from "./pages/Reports";
import Support from "./pages/Support";


export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Dashboard /> },
      { path: "/setting", element: <Setting /> },
      { path: "/users", element: <Users /> },
      { path: "/analytics", element: <Analytics /> },
      { path: "/messages", element: <Messages /> },
      { path: "/reports", element: <Reports /> },
      { path: "/support", element: <Support /> },
      { path: "*", element: <h1>404 - Page Not Found</h1> }
    ]
  }
])