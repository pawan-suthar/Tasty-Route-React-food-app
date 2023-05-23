import Banner from "../../components/Home/Banner";
import Menu from "../../components/Common/Menu";
import Footer from "../../components/Common/Footer";
import Cartbtn from "../../components/Common/Cartbtn";

const Home = () => {
  return (
    <div>
      {/* banner */}
      <Banner />
      {/* menu */}
      <Menu />
      {/* footer */}
      <Footer />
      {/* cart */}
      <Cartbtn />
    </div>
  );
};

export default Home;
