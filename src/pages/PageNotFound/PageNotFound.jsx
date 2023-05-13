import clsx from "clsx";
import style from "./PageNotFound.module.scss";

const PageNotFound = () => {
  return (
    <div className={clsx(style.wrapper)}>
      <div className={clsx(style.loading)}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default PageNotFound;
