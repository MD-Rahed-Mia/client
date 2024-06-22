import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
import Error from "./pages/Error";
import Product from "./pages/Product";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Error />} />
          <Route path="/product" element={<Product />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
