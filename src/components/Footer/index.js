import cls from "./style.module.scss";
const Footer = () => {
  return (
    <div className={cls.footer}>
      <button className={cls.btn}>All Unavailable</button>
      <button className={cls.btn}>All Available</button>
      <button className={cls.btn}>Apply</button>
    </div>
  );
};

export default Footer;
