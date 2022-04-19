import { useState } from "react";
import cls from "./style.module.scss";
const Header = () => {
  const [searchText, setSearchText] = useState("");
  const handleChange = (e) => {
    setSearchText(e?.target?.value);
  };
  return (
    <>
      <header className={cls.header}>
        <div className={cls.header_input}>
          <input
            type="input"
            placeholder="Search..."
            value={searchText}
            onChange={handleChange}
            className={cls.input_search}
          ></input>
        </div>
      </header>
    </>
  );
};

export default Header;
