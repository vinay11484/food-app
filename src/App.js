import React, { lazy } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Cart from "./components/Cart";
// import About from "./components/About";
import Error from "./components/Error";
import ContactUs from "./components/ContactUs";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Suspense } from "react";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import Example from "./components/Example";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Register from "./components/Register";
const queryClint = new QueryClient();
const About = lazy(() => import("./components/About"));
const AppLayout = () => (
  <Provider store={appStore}>
    <div className="app">
      <Header></Header>
      <Example></Example>
      <Outlet></Outlet>
    </div>
  </Provider>
);

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <QueryClientProvider client={queryClint}>
        <AppLayout></AppLayout>
        {/* <ReactQueryDevtools></ReactQueryDevtools> */}
      </QueryClientProvider>
    ),
    children: [
      {
        path: "/",
        element: <Body></Body>,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>lazy loading...</h1>}>
            <About></About>
          </Suspense>
        ),
      },
      {
        path: "/contact-us",
        element: <ContactUs></ContactUs>,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu></RestaurantMenu>,
      },
      {
        path: "/cart",
        element: <Cart></Cart>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
    errorElement: <Error></Error>,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<AppLayout />);
root.render(<RouterProvider router={appRouter} />);
