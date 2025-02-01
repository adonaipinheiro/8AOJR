import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  RouterProvider,
} from "react-router-dom";

import { Home, NotFound, SignIn } from "../pages";

const browserRouter = createBrowserRouter(
  createRoutesFromElements([
    <Route path="/" element={<Navigate to="/movies" replace />} />,
    <Route path="/movies" element={<Home />} />,
    <Route path="/signin" element={<SignIn />} />,
    <Route path="/404" element={<NotFound />} />,
    <Route path="*" element={<Navigate to="/404" replace />} />,
  ])
);

const Router = () => {
  return <RouterProvider router={browserRouter} />;
};

export { Router };
