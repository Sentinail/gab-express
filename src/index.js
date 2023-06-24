import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import MyAccount from './Components/MyAccount';
import OrderForm from './Components/OrderForm';
import Register from './Components/Register';
import SignIn from './Components/SignIn';
import TopDonors from './Components/TopDonors';
import HomePage from './HomePage';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/home",
        element: <HomePage></HomePage>
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <SignIn></SignIn>
      },
      {
        path: "/topDonors",
        element: <TopDonors></TopDonors>
      },
      {
        path: "/myAccount",
        element: <MyAccount></MyAccount>
      },
      {
        path: "/orderForm",
        element: <OrderForm></OrderForm>
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router} />
);
