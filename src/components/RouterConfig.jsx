import { Suspense, lazy } from "react";
import { Routes, Route, Outlet, Navigate } from "react-router-dom";
import Error from "./Error.jsx";
import Spinner from "./Spinner.jsx";

const Cart = lazy(() => import("../pages/Cart.jsx"));
const Home = lazy(() => import("../pages/Home.jsx"));
const ProductList = lazy(() => import("../pages/ProductList.jsx"));
const Register = lazy(() => import("../pages/Register.jsx"));
const Login = lazy(() => import("../pages/Login.jsx"));
const Product = lazy(() => import("../pages/Product.jsx"));

const RequireAuth = ({ isLoggedIn }) => {
  if (!isLoggedIn) return <Navigate to="/login" />;

  return <Outlet />;
};

const RouterConfig = () => {
  return (
    <Suspense fallback={<Spinner />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="category/:id" element={<ProductList />} />
        <Route path="products/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
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
