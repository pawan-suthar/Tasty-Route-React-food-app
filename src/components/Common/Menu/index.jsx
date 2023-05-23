import { menuItemsData } from "./Data";
import Menuitems from "./Menuitem";
import "./style.css";

const Menu = () => {
  return (
    <>
      <h1 className="all">All Items</h1>
      <main>
        {menuItemsData.map((item) => (
          <Menuitems key={item.id} item={item} />
        ))}
      </main>
    </>
  );
};

export default Menu;
