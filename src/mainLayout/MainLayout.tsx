import { useState } from "react";
import ButtonUI from "../UI/ButtonUI/ButtonUI";
import NotificationUI from "../UI/NotificationUI/NotificationUI";
import style from "./mainLayout.module.css";

const MainLayout = () => {
  const [test, setTest] = useState<boolean | null>(null);
  const [isLoading, setLoading] = useState<boolean>(false);
  console.log(isLoading);

  const simulateServer = async () => {
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
        setTest(true);
        setLoading(false);
      },
      () => {
        setTest(false);
        setLoading(false);
      }
    );
  };
  // const testClick = () => {};
  const oneSubmit = () => {
    simulateServer();
    // testClick();
  };

  return (
    <>
      {test !== null && (
        <div className={style.notificationContainer}>
          {test ? (
            <NotificationUI
              status={"success"}
              label={"Успешно"}
              text={"Изменения успушно сохранены"}
            />
          ) : (
            <NotificationUI
              status={"error"}
              label={"Изменения не сохранены"}
              text={"Потеря интернет соединения"}
            />
          )}
        </div>
      )}

      <div className={style.buttonContainer}>
        <ButtonUI handleClick={oneSubmit} isLoading={isLoading} />
      </div>
    </>
  );
};

export default MainLayout;
