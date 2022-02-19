import { Suspense, lazy } from "react";
import { Routes, Route, Outlet, Navigate } from "react-router-dom";
import Error from "./Error.jsx";
import Spinner from "./Spinner.jsx";
import OrderData from "../context/order.js";
import { useSelector } from "react-redux";

const Cart = lazy(() => import("../pages/Cart.jsx"));
const Home = lazy(() => import("../pages/Home.jsx"));
const ProductList = lazy(() => import("../pages/ProductList.jsx"));
const Register = lazy(() => import("../pages/Register.jsx"));
const Login = lazy(() => import("../pages/Login.jsx"));
const Product = lazy(() => import("../pages/Product.jsx"));
const ForgotPass = lazy(() => import("../pages/ForgotPass.jsx"));
const ResetPass = lazy(() => import("../pages/ResetPass.jsx"));
const Activation = lazy(() => import("../pages/Activation.jsx"));

const RequireAuth = () => {
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  if (!isLoggedIn) return <Navigate to="/login" />;

  return <Outlet />;
};

const RequireLogout = () => {
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

  if (isLoggedIn) return <Navigate to="/" />;

  return <Outlet />;
};

const RouterConfig = () => {
  return (
    <Suspense fallback={<Spinner />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="category/:id" element={<ProductList />} />
        <Route
          path="products/:id"
          element={
            <OrderData>
              <Product />
            </OrderData>
          }
        />
        <Route path="/cart" element={<Cart />} />
        <Route element={<RequireLogout />}>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPass />} />
          <Route path="/reset-password/:token" element={<ResetPass />} />
        </Route>
        <Route path="/activate-account/:activation" element={<Activation />} />
        <Route element={<RequireAuth />}>
          <Route path="profile" element={<div>Profile</div>} />
        </Route>

        <Route
          path="*"
          element={
            <Error
              message="Sorry, This page is not found"
              imageUrl="https://i.imgur.com/Q2BAOd2.png"
            />
          }
        />
      </Routes>
    </Suspense>
  );
};

export default RouterConfig;
