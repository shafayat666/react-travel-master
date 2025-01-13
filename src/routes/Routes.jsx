import {createBrowserRouter }  from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home/Home";
import HomeLayout from "../layouts/HomeLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    children: [
      {
        path: "/",
        element: <HomeLayout></HomeLayout>,
        children: [
          {
            path: "/",
            element: <Home></Home>
          },
        ]
      },
    ]
  },
]);

export default router;