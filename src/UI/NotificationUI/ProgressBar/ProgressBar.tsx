import style from "./ProgressBar.module.css";
import { useProgressBar } from "./useProgressBar";
interface IProgressBar {
  lifetime: number;
  status: any;
  isStop: boolean;
}
const ProgressBar = ({ lifetime, status, isStop }: IProgressBar) => {
  const { progress } = useProgressBar(lifetime, status, isStop);
  return (
    <div className={style.container}>
      <div className={style.progressBar}>
        <div
          className={style.progressBarFill}
          style={{ width: progress + "%" }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
