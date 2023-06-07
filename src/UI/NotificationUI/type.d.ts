interface IStatus {
  status: "success" | "error";
}
export interface INotificationUI extends IStatus {
  label: string;
  text: string;
  setActive: (props: boolean) => void;
}
