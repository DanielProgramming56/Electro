import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./page/HomePage";
import ProductListPage from "./page/ProductListPage";
import ProductDetailsPage from "./page/ProductDetailsPage";
import CartPage from "./page/CartPage";
import LoginPage from "./page/LoginPage";
import RegisterPage from "./page/RegisterPage";
import UserProfilePage from "./page/users/UserProfilePage";
import UserCartDetailsPage from "./page/users/UserCartDetailsPage";
import ProtectRoute from "./components/ProtectRoute";
import UserOrdersPage from "./page/users/UserOrdersPage";
import AdminProductsPage from "./page/admin/AdminProductsPage";
import AdminUsersPage from "./page/admin/AdminUsersPage";
import AdminOrdersPage from "./page/admin/AdminOrdersPage";
import AdminOrderDetailsPage from "./page/admin/AdminOrderDetailsPage";
import AdminEditUserPage from "./page/admin/AdminEditUserPage";
import AdminEditProductPage from "./page/admin/AdminEditProductPage";
import AdminCreateProductPage from "./page/admin/AdminCreateProductPage";
import AdminAnalyticsPage from "./page/admin/AdminAnalyticsPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import UserChatComponent from "./components/UserChatComponent";
import UserComponentwithCharBar from "./components/userComponentwithCharBar";

function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route element={<UserComponentwithCharBar/>} >
        <Route path="/" element={<HomePage />} />
        <Route path="/product-list" element={<ProductListPage />} />
        <Route path="/product-details" element={<ProductDetailsPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        {/* Protected Route for Users */}
        <Route element={<ProtectRoute  admin={false}/>}>
          <Route path="/user" element={<UserProfilePage />} />
          <Route path="/user/my-order" element={<UserOrdersPage />} />
          <Route path="/user/cart-details" element={<UserCartDetailsPage />} />
        </Route>
        </Route>
      {/* Protected Route for Admin */}
      <Route element={<ProtectRoute  admin={true}/>}>
          <Route path="/admin-products" element={<AdminProductsPage />} />
          <Route path="/admin-user" element={<AdminUsersPage />} />
          <Route path="/admin-orders" element={<AdminOrdersPage />} />
          <Route path="/admin-orders-details" element={<AdminOrderDetailsPage />} />
          <Route path="/admin-edit-user" element={<AdminEditUserPage />} />
          <Route path="/admin-edit-product" element={<AdminEditProductPage />} />
          <Route path="/admin-create-product" element={<AdminCreateProductPage />} />
          <Route path="/admin-analytic" element={<AdminAnalyticsPage />} />

          
        </Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
