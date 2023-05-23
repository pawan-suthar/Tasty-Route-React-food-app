import "./style.css";

const Btnaddremove = ({ quantity, handleadd, handleremove }) => {
  return (
    <div className="btnaddremove">
      {quantity !== 0 ? (
        <div className="btnpos">
          <i className="fa-solid fa-minus" onClick={handleremove}></i>
          <span>{quantity}</span>
          <i className="fa-solid fa-plus" onClick={handleadd}></i>
        </div>
      ) : (
        <div className="btnneg" onClick={handleadd}>
          <span>ADD</span>
          <i className="fa-solid fa-plus"></i>
        </div>
      )}
    </div>
  );
};

export default Btnaddremove;
