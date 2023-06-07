export interface IProgressBar {
  lifetime: number;
  status: string;
  isStop: boolean;
  setActive: (props: boolean) => void;
}
