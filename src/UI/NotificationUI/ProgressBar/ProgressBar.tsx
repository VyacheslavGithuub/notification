import style from "./ProgressBar.module.css";
import { IProgressBar } from "./type";
import { useProgressBar } from "./useProgressBar";

const ProgressBar = ({ lifetime, status, isStop, setActive }: IProgressBar) => {
  const { progress } = useProgressBar(lifetime, status, isStop, setActive);
  return (
    <div className={style.container}>
      <div className={style.progressBar}>
        <div
          className={style.progressBarFill}
          style={{ width: progress + "%" }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;
