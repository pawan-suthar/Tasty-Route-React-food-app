import "./style.css";
import Btnaddremove from "../../Btnaddremove";
const Menuitems = ({ item }) => {
  const { id, name, info, price, img } = item;
  return (
    <div className="item">
      <img src={img} alt="item" />
      <div className="item-head">
        <p className="item-name">{name}</p>
        <p className="item-info">
          <small>{info}</small>
        </p>
      </div>
      <div className="item-price-foot">
        <span className="item-price">${price}</span>
        <Btnaddremove quantity={22} />
      </div>
    </div>
  );
};

export default Menuitems;
