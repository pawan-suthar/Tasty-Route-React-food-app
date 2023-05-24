import { Link } from "react-router-dom";
import "./style.css";

const Cartbtn = ({ cartcount }) => {
  return (
    <div className="btncartcounter">
      <Link to="/cart">
        <button>cart</button>
      </Link>
      <div className="count">{cartcount >= 100 ? "99+" : cartcount}</div>
    </div>
  );
};

export default Cartbtn;
