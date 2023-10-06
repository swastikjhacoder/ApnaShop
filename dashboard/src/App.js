import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import Category from "./pages/Category";
import Customer from "./pages/Customer";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Vendors from "./pages/Vendors";
import SidebarHeader from "./components/SidebarHeader";

function App() {
  return (
    <>
      <BrowserRouter>
        <Sidebar>
          <SidebarHeader/>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/category" element={<Category />} />
            <Route path="/customer" element={<Customer />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<ProductDetails />} />
            <Route path="/vendor" element={<Vendors />} />
          </Routes>
        </Sidebar>
      </BrowserRouter>
    </>
  );
}

export default App;
