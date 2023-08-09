import WeeklyDeals from "./components/WeeklyDeals/WeeklyDeals";
import "./App.css";
import Header from "./components/header/Header";
import { Routes, Route } from "react-router-dom";
import Cart from "./components/cart/Cart";
import Authorization from "./components/signinandup/Authorization";
import ForgotPassword from "./components/forgotPassword/ForgotPassword";
import NewCustomer from "./components/newCustomer/NewCustomer";
import Categories from "./components/categories/Categories";
import Contact from "./components/contact/Contact";
import Sale from "./components/sale/Sale";
import Footer from "./components/footer/Footer";
import PageNotFound from "./components/pagenotfound/PageNotFound";
import Carousel from "./components/carousel/Carousel";
import Products from "./components/products/Products";

import ProductDetails from "./components/products/ProductDetails";
import CategoryItems from "./components/categories/CategoryItems";
import ProductCard from "./components/header/searchbar/ProductCard";
import SearchBar from "./components/header/searchbar/SearchBar";
import SearchResult from "./components/header/searchbar/SearchResult";

function App() {
  return (
    <div className="whole_wrapper">
      <Header />

      <div className="routesWrapper">
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <Carousel /> <WeeklyDeals />
                <Categories />
              </div>
            }
          />
          <Route exact path="/products" element={<Products />} />
          <Route exact path="/sale" element={<Sale />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/signinandsignup" element={<Authorization />} />
          <Route exact path="/forgotPassword" element={<ForgotPassword />} />
          <Route exact path="/newcustomer" element={<NewCustomer />} />
          <Route path="/categories/:id" element={<CategoryItems />} />
          <Route path="/productdetails/:id" element={<ProductDetails />} />
          <Route path="/searchResult" element={<SearchResult />} />

          <Route exact path="*" element={<PageNotFound />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;
