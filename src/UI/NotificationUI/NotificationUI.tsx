import { useState } from "react";

import style from "./NotificationUI.module.css";
import NotificationUIIcon from "./NotificationUIIcon/NotificationUIIcon";
import ProgressBar from "./ProgressBar/ProgressBar";
import { INotificationUI } from "./type";

const NotificationUI = ({ status, label, text }: INotificationUI) => {
  const [isStop, setStop] = useState<boolean>(false);
  console.log(isStop);

  const handleMouseEnter = () => {
    setStop(true);
  };
  const handlePointerDown = () => {
    setStop(false);
  };

  return (
    <div
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
      <ProgressBar lifetime={3} status={status} isStop={isStop} />
    </div>
  );
};

export default NotificationUI;
