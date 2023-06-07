import { useState } from "react";

export const useMainLayout = () => {
  // состояние запроса
  const [isRequest, setRequest] = useState<boolean | null>(null);
  // Отслеживаем состояние загрузки / нужно для дизейбла кнопки во время продолжительного запроса
  const [isLoading, setLoading] = useState<boolean>(false);
  // Состояние уведомления - добавляем компонент / удаляем
  const [isActive, setActive] = useState<boolean>(false);

  // Моковый запрос
  const simulateServer = () => {
    setLoading(true);
    const promise = new Promise<void>((resolve, reject) => {
      if (Math.random() > 0.5) {
        return resolve();
      }
      const t = setTimeout(() => {
        reject();
        return clearTimeout(t);
      }, 1000);
      return;
    });
    promise.then(
      () => {
        setRequest(true);
        setLoading(false);
      },
      () => {
        setRequest(false);
        setLoading(false);
      }
    );
  };
  // Событие для кнопки
  const oneSubmit = () => {
    isRequest !== null && setRequest(null);
    simulateServer();
    setActive(true);
  };

  return {
    isRequest,
    isActive,
    setActive,
    isLoading,
    oneSubmit,
  };
};
