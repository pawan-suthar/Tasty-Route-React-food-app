import Home from "./pages/Home/Index";
import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Cart from "./pages/Cart";

function App() {
  return (
    <div className="Container">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
