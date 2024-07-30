import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomePage from "./Pages/Home/HomePage";
import NavBarLogin from "./Components/Uitily/NavBarLogin";
import LoginPage from "./Pages/Auth/LoginPage";
import RegisterPage from "./Pages/Auth/RegisterPage";
import AllCategoryPage from "./Pages/Category/AllCategoryPage";
import AllBrandPage from "./Pages/Brand/AllBrandPage";
import ShopProductsPage from "./Pages/Products/ShopProductsPage";
import ProductDetailsPage from "./Pages/Products/ProductDetailsPage";
import CartPage from "./Pages/Cart/CartPage";
import UserAllOrdersPage from "./Pages/User/UserAllOrdersPage";
import UserWishlist from "./Pages/User/UserWishlistPage";
import UserProfilePage from "./Pages/User/UserProfilePage";
import Footer from "./Components/Uitily/Footer";
import Slider from "./Components/Home/Slider";
import ProductsForCategoryPage from "./Pages/Products/ProductsForCategoryPage";

function App() {
    return (
        <div className="">
            <Slider />

                <Routes>
                    <Route index element={<HomePage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/register" element={<RegisterPage />} />
                    <Route path="/allcategory" element={<AllCategoryPage />} />
                    <Route path="/products/:id" element={<ProductDetailsPage />} />
                    <Route path="/products/category/:id" element={<ProductsForCategoryPage />} />
                    <Route path="/user/allorders" element={<UserAllOrdersPage />} />
                    <Route path="/user/wishlist" element={<UserWishlist />} />
                    <Route path="/user/profile" element={<UserProfilePage />} />
                    <Route path="/cart" element={<CartPage />} />
                </Routes>
            <Footer />
        </div>
    );
}

export default App;
