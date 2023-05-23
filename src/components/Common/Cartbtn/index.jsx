import "./style.css";

const Cartbtn = ({ cartcount }) => {
  return (
    <div className="btncartcounter">
      {" "}
      cart
      <div className="count">{cartcount >= 100 ? "99+" : cartcount}</div>
    </div>
  );
};

export default Cartbtn;
