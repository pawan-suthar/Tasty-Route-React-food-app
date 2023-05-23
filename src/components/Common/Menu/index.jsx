import { menuItemsData } from "./Data";
import Menuitems from "./Menuitem";
import "./style.css";

const Menu = () => {
  return (
    <main>
      {menuItemsData.map((item) => (
        <Menuitems item={item} />
      ))}
    </main>
  );
};

export default Menu;
