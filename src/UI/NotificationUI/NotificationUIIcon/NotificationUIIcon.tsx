import { IStatus } from "../type";
// Компонент принимает статус запроса и отображает соответствующую иконку
const NotificationUIIcon = ({ status }: IStatus) => {
  return (
    <>
      {status === "success" ? (
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="20" cy="20" r="20" fill="#638E58" />
          <circle cx="20" cy="20" r="20" fill="#638E58" />
          <path
            d="M16.6667 28.6667L8.33333 17.5253L11.3408 14.6883L16.8546 22.2277L29.0727 10L31.9444 13.3473L16.6667 28.6667Z"
            fill="#F5F5F5"
          />
        </svg>
      ) : status === "error" ? (
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="20" cy="20" r="20" fill="#EF373E" />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M20.0995 16.5466L12.6449 9.09204L9.09117 12.6458L16.5458 20.1004L9.28971 27.3564L12.8435 30.9102L20.0995 23.6542L27.3556 30.9102L30.9093 27.3565L23.6533 20.1004L31.1079 12.6458L27.5541 9.09204L20.0995 16.5466Z"
            fill="white"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          x="0px"
          y="0px"
          viewBox="0 0 512 640"
          enable-background="new 0 0 512 512"
        >
          <g>
            <path d="M285,402.775c0-16.029-12.984-29.029-28.999-29.029c-16.03,0-29.015,13-29.015,29.029l0,0v80.217l0,0   c0,16,12.983,28.998,29.015,28.998c16.015,0,28.999-12.998,28.999-28.998c0-0.031,0-0.031,0-0.064v-80.121V402.775z" />
            <path d="M285,28.353L285,28.353c-0.375-15.702-13.203-28.343-28.999-28.343s-28.64,12.641-28.999,28.343h-0.016v80.872v0.016   c0,16.015,12.983,29.015,29.015,29.015c16.015,0,28.999-13,28.999-29.015V29.07V29.04c0-0.031,0-0.031,0-0.063V28.353z" />
            <path d="M436.977,395.965l-56.653-56.654c-0.016-0.029-0.016-0.029-0.031-0.029c-11.328-11.346-29.702-11.346-41.027,0   c-11.328,11.311-11.328,29.686,0,41.027l0,0l56.716,56.719l0,0c11.327,11.313,29.702,11.313,41.027,0   c11.327-11.346,11.327-29.721,0-41.029C436.992,395.965,436.992,395.965,436.977,395.965z" />
            <path d="M74.509,115.552l57.186,57.17c0,0,0,0,0,0.031c11.343,11.312,29.717,11.312,41.028-0.016   c11.344-11.328,11.344-29.702,0-41.03l-56.685-56.67c0-0.031,0-0.031-0.031-0.047c0,0-0.016-0.016-0.03-0.031l-0.438-0.438v0.016   c-11.375-10.875-29.374-10.718-40.561,0.453c-11.156,11.171-11.313,29.187-0.453,40.545L74.509,115.552z" />
            <path d="M482.959,227.001c0,0-0.016,0-0.029,0h-80.121c0,0-0.031,0-0.047,0c-16.018,0-29.017,12.983-29.017,28.999   c0,16.031,12.999,29.031,29.017,29.031l0,0h80.197l0,0c16.03,0,29.029-13,29.029-29.031   C511.988,239.984,498.989,227.001,482.959,227.001z" />
            <path d="M109.211,285.031h0.017c16.029,0,29.014-13,29.014-29.032c0-16.015-12.984-28.999-29.014-28.999H29.074   c-0.031,0-0.031,0-0.031,0c-0.031,0-0.063,0-0.063,0h-0.625l0,0C12.637,227.375,0.012,240.203,0.012,256   c0,15.813,12.625,28.625,28.344,29v0.031H109.211z" />
            <path d="M380.292,172.737L380.292,172.737l56.716-56.701l0,0c11.327-11.343,11.327-29.718,0-41.045   c-11.325-11.327-29.7-11.328-41.027,0c-0.018,0.016-0.018,0.016-0.031,0.047l-56.653,56.639c-0.016,0.016-0.016,0.016-0.029,0.031   c-11.328,11.328-11.328,29.702,0,41.03C350.59,184.065,368.965,184.065,380.292,172.737z" />
            <path d="M131.694,339.279l-56.686,56.686c0,0-0.016,0-0.03,0.031c0,0-0.017,0-0.031,0.031l-0.438,0.438h0.017   c-10.859,11.373-10.703,29.373,0.453,40.563c11.187,11.154,29.186,11.313,40.561,0.469l0,0l57.185-57.188l0,0   c11.344-11.344,11.344-29.719,0-41.027C161.411,327.936,143.037,327.936,131.694,339.279z" />
          </g>
        </svg>
      )}
    </>
  );
};

export default NotificationUIIcon;
