import cls from "./style.module.scss";

const Items = ({ kitchenItems, setKitchenItems }) => {
  const handleToggle = (e) => {
    e.preventDefault();

    setKitchenItems(
      kitchenItems.map((ele) => {
        let temp = Object.assign({}, ele);
        if (ele?.foodname === e.target.innerText)
          temp.outofstock = !ele?.outofstock;
        else temp.outofstock = ele?.outofstock;
        return temp;
      })
    );
  };

  return (
    <div className={cls.items_section}>
      {kitchenItems?.map((ele) => {
        return (
          <div
            className={`${ele?.outofstock ? cls.out_stock : cls.in_stock} ${
              cls.items
            }`}
            key={ele?.foodid}
            onClick={handleToggle}
          >
            {ele?.foodname}
          </div>
        );
      })}
    </div>
  );
};

export default Items;
