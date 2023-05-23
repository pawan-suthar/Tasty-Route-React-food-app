import "./style.css";
import Logoimg from "../../Common/Logo/logo.png";

const Logo = () => {
  return (
    <div className="logo">
      <div>
        <img src={Logoimg} alt="logo" />
      </div>
    </div>
  );
};

export default Logo;
