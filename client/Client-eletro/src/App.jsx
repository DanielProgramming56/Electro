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

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product-list" element={<ProductListPage />} />
        <Route path="/product-details" element={<ProductDetailsPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        {/* Protected Route for Users */}
        <Route element={<ProtectRoute/>}>
          <Route path="/user" element={<UserProfilePage />} />
          <Route path="/user/my-order" element={<UserOrdersPage />} />
          <Route path="/user/cart-details" element={<UserCartDetailsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
