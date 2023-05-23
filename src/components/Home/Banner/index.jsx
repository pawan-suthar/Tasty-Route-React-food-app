import "./style.css";
import bannerlogo from "./banerlogo.png";
import Logo from "../../Common/Logo";

const Banner = () => {
  return (
    <header>
      <div className="header-content">
        <Logo />
        <div className="content-main">
          <h1>Delicious food Where you want</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis,
          </p>
          <button>
            View Menu <i className="fa-solid fa-arrow-right"></i>
          </button>
        </div>
      </div>
      <img src={bannerlogo} alt="bannerlogo" className="header-image" />
    </header>
  );
};

export default Banner;
