import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import ProductRoute from "./routes/ProductRoute";
import ContactRoute from "./routes/ContactRoute";
import AboutRoute from "./routes/AboutRoute";
import SingleProductRoute from "./routes/SingleProductRoute";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactRoute />} />
        <Route path="/about" element={<AboutRoute />} />
        <Route path="/product" element={<ProductRoute />} />
        <Route path="/product/:id" element={<SingleProductRoute />} />
      </Routes>
    </>
  );
}

export default App;
