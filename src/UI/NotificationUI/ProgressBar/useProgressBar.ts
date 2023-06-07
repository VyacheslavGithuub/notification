import { useState, useRef, useEffect } from "react";

export const useProgressBar = (
  lifetime: number,
  status: string,
  isStop: boolean,
  setActive: (props: boolean) => void
) => {
  // Состояние активной полосы
  const [progress, setProgress] = useState<number>(0);
  // Используем ref для сохранения кол-ва шагов |
  // для сохранения между рендерами,
  // ref изменяется синхронно и его изменение не вызывает перерисовку компонента.
  const ref = useRef<number>(0);
  const timeoutRef = useRef<number>(0);

  useEffect(() => {
    const progressBar = (isStop: boolean) => {
      // сумма шагов для 3сек это число равно 30
      const sumOfSteps = (lifetime * 1000) / 100;

      // за 1 шаг пройдено 3.3%
      const step = 100 / sumOfSteps;

      // Функция отвечающая за работу с setTimeout
      const start = (isStop: boolean) => {
        if (ref.current === sumOfSteps && isStop) {
          clearTimeout(timeoutRef.current);
          timeoutRef.current = 0;
          return;
        }
        if (ref.current === sumOfSteps) {
          setActive(false);
        } else {
          // Увеличиваем сумму на 1
          ref.current++;
          // Добавляем в стей 1 шаг 3.3% += 2 шаг 6.6%
          setProgress((prev) => (prev += step));
          // Всего нужно сделать 30 шагов по 3.3
          // Используем рекурсию
          timeoutRef.current = setTimeout(start, 100);
        }
      };
      // Что бы заработало, ножно вызвать функцию ||
      start(isStop);
    };
    progressBar(isStop);

    return () => {
      // Обязательно отписываемя от сайд эффекта
      clearTimeout(timeoutRef.current);
      timeoutRef.current = 0;
    };
  }, [status, isStop]);

  return {
    progress,
  };
};
