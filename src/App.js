import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import ProductRoute from "./routes/ProductRoute";
import ContactRoute from "./routes/ContactRoute";
import AboutRoute from "./routes/AboutRoute";
import SingleProductRoute from "./routes/SingleProductRoute";
import SearchProducts from "./routes/SearchProducts";
import QuoteRoute from "./routes/QuoteRoute";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactRoute />} />
        <Route path="/about" element={<AboutRoute />} />
        <Route path="/product" element={<ProductRoute />} />
        <Route path="/product/:id" element={<SingleProductRoute />} />
        <Route path="/products/:query" element={<SearchProducts />} />
        <Route path="/products/:qty/:size" element={<QuoteRoute />} />
      </Routes>
    </>
  );
}

export default App;
