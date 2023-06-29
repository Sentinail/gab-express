import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import MyAccount from './Components/My_Account/MyAccount';
import OrderForm from './Components/Order_Form/OrderForm';
import Register from './Components/Register/Register';
import TopDonors from './Components/Top_Donors/TopDonors';
import About from './Components/About/About';

const router = createBrowserRouter([
    {
        path: "/",
        element: <App></App>,
        children: [
            {
                path: "/",
                element: <Navigate to="/home"></Navigate>
            },
            {
                path: "/home",
                element: <Home></Home>,
            },
            {
                path: "/login",
                element: <Login></Login>,
            },
            {
                path: "/register",
                element: <Register></Register>,
            },
            {
                path: "/myaccount",
                element: <MyAccount></MyAccount>,
            },
            {
                path: "/orderform",
                element: <OrderForm></OrderForm>,
            },
            {
                path: "/topdonors",
                element: <TopDonors></TopDonors>
            },
            {
                path: "/about",
                element: <About></About>
            },
        ]
    }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router}></RouterProvider>
);
