import "./styles.css";
import Home from "./Components/Home";
import Navigation from "./Components/Navigation";
import Products from "./Components/Products";
import Signin from "./Components/Signin";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductDescription from "./Components/ProductDescription";
export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDescription />} />
          <Route path="/signin" element={<Signin />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
