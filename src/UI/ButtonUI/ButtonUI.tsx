import styles from "./ButtonUI.module.css";
import LoaderUI from "../LoaderUI/LoaderUI";
import { IButtonUI } from "./type";

const ButtonUI = ({ handleClick, isLoading }: IButtonUI) => {
  return (
    <button
      className={styles.buttonUI}
      onClick={handleClick}
      disabled={isLoading}
    >
      {isLoading ? <LoaderUI /> : "отправить"}
    </button>
  );
};

export default ButtonUI;
