import React, { Children } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./routes/homepage/Homepage.jsx";
import DashboardPage from "./routes/dashboardPage/DashboardPage.jsx";
import ChatPage from "./routes/chatPage/ChatPage.jsx";
import RootLayout from "./routes/layouts/rootLayout/rootLayout.jsx";
import { SignIn } from "@clerk/clerk-react";
import { SignUp } from "@clerk/clerk-react";


const router = createBrowserRouter([
  {
   elemnt:<RootLayout/>,
   Children: [
    {
      path:"/sign-in/*",
      element: <SignInPage/>,
    },
    {
      path:"/sign-up/*",
      element: <sign-up/>,
    },
    {
      path:"/",
      element: <Homepage/>,
    },
    {
      element:<DashboardLayout/>,
      Children:[
        {
          path:"/dashboard",
          element:<DashboardPage/>
        },
        {
          path:"/dashboard/chats/:id",
          element:<ChatPage/>
        },

      ],
    },
   ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>   
);
