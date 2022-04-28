import { useEffect, useState } from "react";
import Items from "../Items";
import cls from "./style.module.scss";

const Kitchen = ({ menu }) => {
  const [kitchen, setKitchen] = useState("");
  const [kitchenItems, setKitchenItems] = useState([]);

  useEffect(() => {
    console.log("menu", Object.keys(menu.menuDetails));
    setKitchen(Object.keys(menu?.menuDetails)[0]);
  }, [menu]);

  useEffect(() => {
    setKitchenItems(menu?.menuDetails?.[kitchen]);
  }, [kitchen]);

  return (
    <div className={cls.main}>
      <div className={cls.sidebar}>
        {Object.keys(menu?.menuDetails).map((ele) => {
          return (
            <div
              key={ele}
              onClick={() => setKitchen(ele)}
              className={kitchen === ele ? cls.selected : cls.unselected}
            >
              {ele}
            </div>
          );
        })}
      </div>
      <div className={cls.items}>
        <Items kitchenItems={kitchenItems} setKitchenItems={setKitchenItems} />
      </div>
    </div>
  );
};

export default Kitchen;
