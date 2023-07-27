import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import App from './App';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import MyAccount from './Components/User_Account/MyAccount';
import OrderForm from './Components/Order_Form/OrderForm';
import Register from './Components/Register/Register';
import TopDonors from './Components/Top_Donors/TopDonors';
import About from './Components/About/About';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import StylesProvider from './ContextProviders/StylesProvider';
import GlobalStyleForTest from './GlobalStylesTest';
import AuthProvider from './ContextProviders/AuthProvider';
import UserAccount from './Components/User_Account/UserAccount';
import APIEndpointsProvider from './ContextProviders/APIEndpointsProvider';
import EditUserAccount from './Components/User_Account/EditUserAccount';
import LoadingComponent from './Components/Loading/LoadingComponent';

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
};

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<APIEndpointsProvider><StylesProvider><AuthProvider><App /></AuthProvider></StylesProvider></APIEndpointsProvider>}>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/myaccount" element={<MyAccount />}>
            <Route path='/myaccount/edit' element={<EditUserAccount></EditUserAccount>}/>
          </Route>
          <Route path="/orderform" element={<OrderForm />} />
          <Route path="/topdonors" element={<TopDonors />} />
          <Route path="/about" element={<About />} />
          <Route path='/user/:search' element={<UserAccount></UserAccount>}></Route>
        </Route>
        <Route path="/test" element={<APIEndpointsProvider><StylesProvider><GlobalStyleForTest /><LoadingComponent></LoadingComponent></StylesProvider></APIEndpointsProvider>} />
      </Routes>
    </BrowserRouter>
);
