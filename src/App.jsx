import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./components/RootLayout";
import Testpage from "./routes/Testpage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [{ path: "test", element: <Testpage /> }],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
