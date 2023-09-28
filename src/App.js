import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Home from "./Components/Home/Home";
import NotFound from "./Components/NotFound/NotFound";
import { GetHeightContextProvider } from "./Context/getHeightContext";

export default function App() {
  let routes = createBrowserRouter([
    {
      path: "/portfolio",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "*",
          element: <NotFound />,
        },
      ],
    },
  ]);
  return (
    <GetHeightContextProvider>
      <RouterProvider router={routes}></RouterProvider>
    </GetHeightContextProvider>
  );
}
