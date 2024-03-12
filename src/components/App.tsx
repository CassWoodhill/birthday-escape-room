import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./Home";
import { RootLayout } from "./RootLayout";
import { Success } from "./Success";
import { Ooops } from "./Ooops";

export function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <>
          <Route index element={<Home />} />
          <Route path="/success" element={<Success />} />
          <Route path="/oops" element={<Ooops />} />
        </>
      </Route>
    )
  );

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}
