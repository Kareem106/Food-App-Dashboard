import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList } from "@fortawesome/free-solid-svg-icons";
import SideBar from "./components/sidebar/SideBar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Layout from "./Layout";
import {
  RouterProvider,
  createBrowserRouter,
  useNavigate,
} from "react-router-dom";
import Home from "./pages/home/Home";
import Explore from "./pages/explore/Explore";
import Orders from "./pages/orders/Orders";
import Registiration from "./pages/registration/Registration";
import LogIn from "./components/logInForm/LogIn";
import SignUp from "./components/signUpForm/SignUp";
import { useEffect } from "react";
import { useSelector } from "react-redux";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/explore",
        element: <Explore />,
      },
      {
        path: "/orders",
        element: <Orders />,
      },
    ],
  },
  {
    path: "/registration",
    element: <Registiration />,
    children: [
      {
        path: "/registration/login",
        element: <LogIn />,
      },
      {
        path: "/registration/signup",
        element: <SignUp />,
      },
    ],
  },
]);
function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
      <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="colored"
      />
    </div>
  );
}

export default App;
