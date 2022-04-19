import cls from "./style.module.scss";

const Items = ({ kitchenItems, setKitchenItems }) => {
  const handleToggle = (e) => {
    e.preventDefault();
    // kitchenItems.forEach((ele) => {
    //   if (ele?.foodname === e.target.innerText) {
    //     console.log("items", !ele?.outofstock);
    //     ele?.outofstock;
    //     // setKitchenItems(ele?.outofstock);
    //   }
    // });
    kitchenItems.map((ele) => {
      return ele?.foodname === e.target.innerText
        ? ele?.outofstock
        : !ele?.outofstock;
    });
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
