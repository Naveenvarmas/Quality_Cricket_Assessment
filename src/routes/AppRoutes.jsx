import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/home/Home";
import Login from "../pages/auth/Login";
import Signup from "../pages/auth/Signup";
import Register from "../pages/auth/Register";
import OtpVerify from "../pages/auth/OtpVerify";
import ForgotPassword from "../pages/auth/ForgotPassword";
import CreatePassword from "../pages/auth/CreatePassword";
import AllProducts from "../pages/product/AllProducts";
import SingleProduct from "../pages/product/SingleProduct";
import Cart from "../pages/cart/Cart";
import Checkout from "../pages/checkout/Checkout";
import OrdersPage from "../pages/checkout/OrdersPage";
import Dashboard from "../pages/admin/Dashboard";
import AdminProducts from "../pages/admin/AllProductsAdmin";
import Orders from "../pages/admin/Orders";
import AddProducts from "../pages/admin/AddProduct";
import Reports from "../pages/admin/Reports";
import Account from "../pages/customer/Account";
import Address from "../pages/customer/Address";
import Security from "../pages/customer/Security";
import Contact from "../pages/admin/Contact";
import FAQ from "../pages/admin/FAQ";

<Route
  path="/admin/products"
  element={<AdminProducts />}
/>
function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/register" element={<Register />} />
        <Route path="/otp-verify" element={<OtpVerify />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/create-password" element={<CreatePassword />} />
        <Route path="/products" element={<AllProducts />} />
        <Route path="/product/:id" element={<SingleProduct />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/orders" element={<OrdersPage />} />
        <Route path="/admin/dashboard" element={<Dashboard />}/>
        <Route path="/admin/products"  element={<AdminProducts />}/>
        <Route path="/admin/orders"  element={<Orders />}/>
        <Route path="/admin/add-products"  element={<AddProducts />}/>
        <Route path="/admin/reports" element={<Reports />}/>
        <Route path="/account" element={<Account />} />
        <Route path="/account/address" element={<Address />}/>
        <Route path="/account/security"  element={<Security />}/>
        <Route path="/contact"  element={<Contact />}/>
        <Route path="/faq" element={<FAQ />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;