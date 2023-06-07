import style from "./NotificationUI.module.css";
import NotificationUIIcon from "./NotificationUIIcon/NotificationUIIcon";
import ProgressBar from "./ProgressBar/ProgressBar";
import { INotificationUI } from "./type";
import { useNotificationUI } from "./useNotificationUI";

const NotificationUI = ({
  status,
  label,
  text,
  setActive,
}: INotificationUI) => {
  const { isStop, handleMouseEnter, handlePointerDown } = useNotificationUI();
  return (
    <div
      id="test"
      className={style.notificationUI}
      onMouseEnter={handleMouseEnter}
      onPointerLeave={handlePointerDown}
    >
      <div className={style.notificationUIIcon}>
        <NotificationUIIcon status={status} />
      </div>
      <div>
        <h3 className={style.notificationUILabel}>{label}</h3>
        <p className={style.notificationUIText}>{text}</p>
      </div>
      <div></div>
      <ProgressBar
        // Мы можем изменить кол-во секунд для отображения уведомления lifetime={10}
        lifetime={10}
        status={status}
        isStop={isStop}
        setActive={setActive}
      />
    </div>
  );
};

export default NotificationUI;
