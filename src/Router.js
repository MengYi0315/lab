import { RouterProvider, createBrowserRouter, createHashRouter } from 'react-router-dom';

import Layout from "./layouts/Layout";

import Home from "./Pages/01Home/Home";
import News from "./Pages/01Home/0101News/News";
import Professor from "./Pages/02Professor/Professor";
import Award from "./Pages/03Achievement/0301Award/Award";
import Topic from "./Pages/03Achievement/0302Topic/Topic";
import Activity from "./Pages/04Activity/Activity";

import Login from './Pages/Auth/Login';

const router = createHashRouter(
  [
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        { 
          path: "home",
          element: <Home />,
        },
        {
          path: "news/:id",
          element: <News />,
        },
        {
          path: "professor",
          element: <Professor />,
        },
        {
          path: "achievement/award",
          element: <Award />,
        },
        {
          path: "achievement/topic",
          element: <Topic />,
        },
        {
          path: "activity",
          element: <Activity />,
        },
        {
          path: "auth/login",
          element: <Login />,
        },
      ],
    },
  ],
  // {
  //   basename: "/lab",
  // }
);



export default function App() {
  return <RouterProvider router={router}/>;
}
