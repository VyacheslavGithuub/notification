import ButtonUI from "../UI/ButtonUI/ButtonUI";
import NotificationUI from "../UI/NotificationUI/NotificationUI";
import style from "./mainLayout.module.css";
import { useMainLayout } from "./useMainLayout";

const MainLayout = () => {
  const { isRequest, isActive, setActive, isLoading, oneSubmit } =
    useMainLayout();
  return (
    <>
      {isRequest !== null && (
        <div className={style.notificationContainer}>
          {isRequest
            ? isActive && (
                // Я бы в компонент пробрасывал только состояние status={"success/error"}
                // но по тз нужно прокинуть эти пропсы здесь
                <NotificationUI
                  status={"success"}
                  label={"Успешно"}
                  text={"Изменения успешно сохранены"}
                  setActive={setActive}
                />
              )
            : isActive && (
                <NotificationUI
                  status={"error"}
                  label={"Изменения не сохранены"}
                  text={"Потеря интернет соединения"}
                  setActive={setActive}
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
