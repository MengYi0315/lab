import { Link, RouterProvider, createBrowserRouter } from 'react-router-dom';

import Layout from "./layouts/Layout";

import Home from "./Pages/01Home/Home";
import Professor from "./Pages/02Professor/Professor";
import Award from "./Pages/03Achievement/0301Award/Award";
import Topic from "./Pages/03Achievement/0302Topic/Topic";
import Activity from "./Pages/04Activity/Activity";

import Login from './Pages/Auth/Login';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
        // handle: {
        //   crumb: () => <Link to="/Home">首頁</Link>,
        // },
      },
      {
        path: "Home",
        element: <Home />,
        // handle: {
        //   crumb: () => <Link to="/Home">首頁</Link>,
        // },
      },
      {
        path: "Professor",
        element: <Professor />,
        // handle: {
        //   crumb: () => <Link to="/Professor">教授</Link>,
        // },
      },
      {
        path: "Achievement/Award",
        element: <Award />,
        // handle: {
        //   crumb: () => <Link to="/Professor">教授</Link>,
        // },
      },
      {
        path: "Achievement/Topic",
        element: <Topic />,
        // handle: {
        //   crumb: () => <Link to="/Professor">教授</Link>,
        // },
      },
      {
        path: "Activity",
        element: <Activity />,
        // handle: {
        //   crumb: () => <Link to="/Professor">教授</Link>,
        // },
      },
      {
        path: "Auth/Login",
        element: <Login />,
        // handle: {
        //   crumb: () => <Link to="/Professor">教授</Link>,
        // },
      },
      
      // {
      //   path: "help",
      //   element: <HelpLayout />,
      //   handle: {
      //     crumb: () => <Link to="/help">幫助</Link>,
      //   },
      //   children: [
      //     {
      //       path: "faq",
      //       element: <FAQ />,
      //       handle: {
      //         crumb: () => <Link to="help/faq">問答集</Link>,
      //       },
      //     },
      //     {
      //       path: "contact",
      //       element: <Contact />,
      //       handle: {
      //         crumb: () => <Link to="help/contact">聯繫我們</Link>,
      //       },
      //     },
      //   ],
      // },
    ],
  },
]);


export default function App() {
  return <RouterProvider router={router} />;
}
