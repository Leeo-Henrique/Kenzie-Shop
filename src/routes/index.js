import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "../components/shop";
import { Cart } from "../components/Cart";
export const Rotas = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/Cart" element={<Cart />} />
      </Routes>
    </Router>
  );
};
