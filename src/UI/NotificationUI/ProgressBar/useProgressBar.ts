import React, { useState, useRef, useEffect } from "react";

export const useProgressBar = (
  lifetime: number,
  status: string,
  isStop: boolean
) => {
  const [progress, setProgress] = useState<number>(0);
  console.log(progress);

  // Используем ref для сохранения кол-ва шагов |
  // для сохранения между рендерами,
  // ref изменяется синхронно и его изменение не вызывает перерисовку компонента.
  const ref = useRef<number>(0);

  useEffect(() => {
    const progressBar = (isStop: boolean) => {
      // 3000 Для удобного расчета
      const test = lifetime * 1000;
      // 30 сумма шагов
      const sumOfSteps = test / 100;
      // 3.3 пройдено за 1 шаг %
      const step = 100 / sumOfSteps;

      const progressBarFill = (isStop: boolean) => {
        // Увеличиваем сумму на 1
        ref.current += 1;
        // Добавляем в стей 1 шаг в процентном соотношении
        setProgress((prev) => (prev += step));
        // Всего нужно сделать 30 шагов по 3.3
        const timerId = setTimeout(progressBarFill, 100);
        if (!isStop && sumOfSteps >= ref.current) {
          timerId;
        }
        return;
      };
      progressBarFill(isStop);
    };
    progressBar(isStop);
    return () => progressBar(isStop);
  }, [isStop, lifetime, status]);

  return {
    progress,
  };
};
