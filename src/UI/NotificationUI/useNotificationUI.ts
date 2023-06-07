import { useState } from "react";

export const useNotificationUI = () => {
  const [isStop, setStop] = useState<boolean>(false);
  // наводим курсор на блок и меняем состояние на true
  const handleMouseEnter = () => {
    setStop(true);
  };
  // убираем курсор с блока и меняем состояние на false
  const handlePointerDown = () => {
    setStop(false);
  };
  return {
    isStop,
    handleMouseEnter,
    handlePointerDown,
  };
};
