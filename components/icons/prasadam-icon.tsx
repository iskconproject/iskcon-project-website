import { cn } from '@/lib/utils';

type Props = {
  className?: string;
};

const PrasadamIcon: React.FC<Props> = ({ className }) => {
  return (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    data-name="Layer 1"
    viewBox="0 0 128 128"
    className={cn('h-6 w-6', className)}
  >
    <path
      fill="#81d9e3"
      d="M115 64a51 51 0 11-51-51 51.06 51.06 0 0151 51z"
    ></path>
    <path
      fill="#2d4356"
      d="M128 64a10.45 10.45 0 00-10.05-10.66c-.01-.08-.02-.17-.04-.26a9.806 9.806 0 004.28-3.57 10.722 10.722 0 00.89-10.11 10.613 10.613 0 00-9.74-6.68 9.669 9.669 0 00-3.63.72.21.21 0 01-.04-.06 9.87 9.87 0 002.5-4.45 10.608 10.608 0 00-2.92-10.18 10.747 10.747 0 00-7.65-3.23 9.944 9.944 0 00-3.83.75 9.796 9.796 0 00-3.15 2.07 4.6 4.6 0 00-.23-.15 9.704 9.704 0 00.6-5.08 10.623 10.623 0 00-6.61-8.28 11.043 11.043 0 00-4.22-.85 10.419 10.419 0 00-7.74 3.39 9.677 9.677 0 00-1.71 2.68.195.195 0 01-.07-.01 9.737 9.737 0 00-1.38-4.9 10.911 10.911 0 00-18.52 0 9.714 9.714 0 00-1.36 4.9c-.09.02-.19.03-.28.05a9.663 9.663 0 00-1.71-2.66 10.399 10.399 0 00-7.72-3.38 10.942 10.942 0 00-4.27.87 10.615 10.615 0 00-6.57 8.3 9.81 9.81 0 00.61 5.08c-.02.01-.03.02-.05.03a9.976 9.976 0 00-6.99-2.81 10.747 10.747 0 00-7.65 3.23 10.608 10.608 0 00-2.92 10.18 9.746 9.746 0 002.52 4.43c-.06.08-.11.17-.16.25a9.784 9.784 0 00-3.6-.71 10.888 10.888 0 00-8.84 16.8 9.84 9.84 0 004.31 3.58.127.127 0 00-.01.06 10.679 10.679 0 000 21.32c.01.08.02.17.04.26a9.806 9.806 0 00-4.28 3.57 10.722 10.722 0 00-.89 10.11 10.613 10.613 0 009.74 6.68 9.67 9.67 0 003.63-.72.208.208 0 01.04.06 9.87 9.87 0 00-2.5 4.45 10.608 10.608 0 002.92 10.18 10.747 10.747 0 007.65 3.23 9.918 9.918 0 006.98-2.82c.07.05.15.1.23.15a9.704 9.704 0 00-.6 5.08 10.623 10.623 0 006.61 8.28 11.043 11.043 0 004.22.85 10.42 10.42 0 007.74-3.39 9.678 9.678 0 001.71-2.68.196.196 0 01.07.01 9.737 9.737 0 001.38 4.9 10.911 10.911 0 0018.52 0 9.714 9.714 0 001.36-4.9c.09-.02.19-.03.28-.05a9.663 9.663 0 001.71 2.66 10.399 10.399 0 007.72 3.38 10.942 10.942 0 004.27-.87 10.615 10.615 0 006.57-8.3 9.81 9.81 0 00-.61-5.08c.02-.01.03-.02.05-.03a9.976 9.976 0 006.99 2.81 10.747 10.747 0 007.65-3.23 10.608 10.608 0 002.92-10.18 9.745 9.745 0 00-2.52-4.43c.06-.08.11-.17.16-.25a9.785 9.785 0 003.6.71 10.888 10.888 0 008.84-16.8 9.84 9.84 0 00-4.31-3.58.127.127 0 00.01-.06A10.45 10.45 0 00128 64zm-9.41-6.61a6.743 6.743 0 010 13.22 53.491 53.491 0 000-13.22zM9.41 70.61a6.743 6.743 0 010-13.22 53.491 53.491 0 000 13.22zm103.93-33.89a6.632 6.632 0 016.05 4.22 6.48 6.48 0 01-2.45 8.17 54.715 54.715 0 00-5.09-12.18 5.764 5.764 0 011.49-.21zm-11.74-17.2a6.858 6.858 0 014.83 2.05 6.517 6.517 0 01.83 8.52 55.335 55.335 0 00-9.34-9.33 5.963 5.963 0 013.68-1.24zM84.16 7.98a6.97 6.97 0 012.7.55 6.503 6.503 0 014.05 7.53 55.026 55.026 0 00-12.21-5.05 6.292 6.292 0 015.46-3.03zM64 4a6.502 6.502 0 016.61 5.41 53.491 53.491 0 00-13.22 0A6.502 6.502 0 0164 4zM40.94 8.61a7.095 7.095 0 012.73-.56 6.274 6.274 0 015.44 3.02 54.793 54.793 0 00-12.19 5.09 6.505 6.505 0 014.02-7.55zM21.57 21.57a6.858 6.858 0 014.83-2.05 5.963 5.963 0 013.68 1.24 55.335 55.335 0 00-9.34 9.33 6.517 6.517 0 01.83-8.52zM8.53 41.14a6.63 6.63 0 016.06-4.24 6.042 6.042 0 011.46.2 54.728 54.728 0 00-5.04 12.2 6.474 6.474 0 01-2.48-8.16zm6.13 50.14a6.632 6.632 0 01-6.05-4.22 6.48 6.48 0 012.45-8.17 54.717 54.717 0 005.09 12.18 5.764 5.764 0 01-1.49.21zm11.74 17.2a6.857 6.857 0 01-4.83-2.05 6.518 6.518 0 01-.83-8.52 55.336 55.336 0 009.34 9.33 5.963 5.963 0 01-3.68 1.24zm17.44 11.54a6.97 6.97 0 01-2.7-.55 6.502 6.502 0 01-4.05-7.53 54.835 54.835 0 0012.21 5.05 6.304 6.304 0 01-5.46 3.03zM64 124a6.502 6.502 0 01-6.61-5.41 53.483 53.483 0 0013.22 0A6.502 6.502 0 0164 124zm23.06-4.61a7.096 7.096 0 01-2.73.56 6.274 6.274 0 01-5.44-3.02 54.793 54.793 0 0012.19-5.09 6.505 6.505 0 01-4.02 7.55zm19.37-12.96a6.857 6.857 0 01-4.83 2.05 5.963 5.963 0 01-3.68-1.24 55.336 55.336 0 009.34-9.33 6.518 6.518 0 01-.83 8.52zM64 115a51 51 0 1151-51 51.06 51.06 0 01-51 51zm55.47-28.14a6.63 6.63 0 01-6.06 4.24 6.042 6.042 0 01-1.46-.2 54.727 54.727 0 005.04-12.2 6.474 6.474 0 012.48 8.16z"
    ></path>
    <path
      fill="#fc785e"
      d="M16.05 37.1a54.728 54.728 0 00-5.04 12.2 6.474 6.474 0 01-2.48-8.16 6.63 6.63 0 016.06-4.24 6.042 6.042 0 011.46.2z"
    ></path>
    <path
      fill="#ffdb80"
      d="M30.08 20.76a55.335 55.335 0 00-9.34 9.33 6.517 6.517 0 01.83-8.52 6.858 6.858 0 014.83-2.05 5.963 5.963 0 013.68 1.24z"
    ></path>
    <path
      fill="#fc785e"
      d="M49.11 11.07a54.793 54.793 0 00-12.19 5.09 6.505 6.505 0 014.02-7.55 7.095 7.095 0 012.73-.56 6.274 6.274 0 015.44 3.02z"
    ></path>
    <path
      fill="#ffdb80"
      d="M70.61 9.41a53.491 53.491 0 00-13.22 0 6.743 6.743 0 0113.22 0z"
    ></path>
    <path
      fill="#fc785e"
      d="M90.91 16.06a55.026 55.026 0 00-12.21-5.05 6.292 6.292 0 015.46-3.03 6.97 6.97 0 012.7.55 6.503 6.503 0 014.05 7.53z"
    ></path>
    <path
      fill="#ffdb80"
      d="M107.26 30.09a55.335 55.335 0 00-9.34-9.33 5.963 5.963 0 013.68-1.24 6.858 6.858 0 014.83 2.05 6.517 6.517 0 01.83 8.52z"
    ></path>
    <path
      fill="#fc785e"
      d="M116.94 49.11a54.715 54.715 0 00-5.09-12.18 5.764 5.764 0 011.49-.21 6.632 6.632 0 016.05 4.22 6.48 6.48 0 01-2.45 8.17z"
    ></path>
    <path
      fill="#ffdb80"
      d="M124 64a6.51 6.51 0 01-5.41 6.61 53.491 53.491 0 000-13.22A6.51 6.51 0 01124 64z"
    ></path>
    <path
      fill="#fc785e"
      d="M119.47 86.86a6.63 6.63 0 01-6.06 4.24 6.042 6.042 0 01-1.46-.2 54.727 54.727 0 005.04-12.2 6.474 6.474 0 012.48 8.16z"
    ></path>
    <path
      fill="#ffdb80"
      d="M106.43 106.43a6.857 6.857 0 01-4.83 2.05 5.963 5.963 0 01-3.68-1.24 55.336 55.336 0 009.34-9.33 6.518 6.518 0 01-.83 8.52z"
    ></path>
    <path
      fill="#fc785e"
      d="M87.06 119.39a7.096 7.096 0 01-2.73.56 6.274 6.274 0 01-5.44-3.02 54.793 54.793 0 0012.19-5.09 6.505 6.505 0 01-4.02 7.55z"
    ></path>
    <path
      fill="#ffdb80"
      d="M70.61 118.59a6.743 6.743 0 01-13.22 0 53.483 53.483 0 0013.22 0z"
    ></path>
    <path
      fill="#fc785e"
      d="M49.3 116.99a6.304 6.304 0 01-5.46 3.03 6.97 6.97 0 01-2.7-.55 6.502 6.502 0 01-4.05-7.53 54.835 54.835 0 0012.21 5.05z"
    ></path>
    <path
      fill="#ffdb80"
      d="M30.08 107.24a5.963 5.963 0 01-3.68 1.24 6.857 6.857 0 01-4.83-2.05 6.518 6.518 0 01-.83-8.52 55.336 55.336 0 009.34 9.33z"
    ></path>
    <path
      fill="#fc785e"
      d="M16.15 91.07a5.764 5.764 0 01-1.49.21 6.632 6.632 0 01-6.05-4.22 6.48 6.48 0 012.45-8.17 54.717 54.717 0 005.09 12.18z"
    ></path>
    <path
      fill="#ffdb80"
      d="M9 64a55.472 55.472 0 00.41 6.61 6.743 6.743 0 010-13.22A55.472 55.472 0 009 64z"
    ></path>
    <path
      fill="#f9dbd7"
      d="M16.05 37.1c-.34.6-.67 1.21-.97 1.83a4.025 4.025 0 00-.49-.03 6.915 6.915 0 00-6.53 5.96 6.968 6.968 0 01.47-3.72 6.63 6.63 0 016.06-4.24 6.042 6.042 0 011.46.2z"
      opacity="0.3"
    ></path>
    <path
      fill="#ad9359"
      d="M9.41 70.61A6.777 6.777 0 014.07 63a6.431 6.431 0 005.14 5.57c.05.68.12 1.36.2 2.04z"
      opacity="0.45"
    ></path>
    <path
      fill="#a54b3f"
      d="M16.15 91.07a5.764 5.764 0 01-1.49.21 6.632 6.632 0 01-6.05-4.22 6.987 6.987 0 01-.48-3.75 7.141 7.141 0 00.48 1.75 6.632 6.632 0 006.05 4.22 4.37 4.37 0 00.51-.03c.31.62.64 1.22.98 1.82z"
      opacity="0.5"
    ></path>
    <path
      fill="#ad9359"
      d="M30.08 107.24a5.963 5.963 0 01-3.68 1.24 6.857 6.857 0 01-4.83-2.05 6.76 6.76 0 01-1.97-5.82 6.963 6.963 0 001.97 3.82 6.857 6.857 0 004.83 2.05 5.974 5.974 0 002.23-.42c.48.4.96.8 1.45 1.18z"
      opacity="0.45"
    ></path>
    <path
      fill="#a54b3f"
      d="M49.3 116.99a6.304 6.304 0 01-5.46 3.03 6.97 6.97 0 01-2.7-.55 6.542 6.542 0 01-4.15-7.04 6.657 6.657 0 004.15 5.04 6.97 6.97 0 002.7.55 6.446 6.446 0 004.08-1.43c.46.14.92.27 1.38.4z"
      opacity="0.5"
    ></path>
    <path
      fill="#ad9359"
      d="M70.61 118.59a6.743 6.743 0 01-13.22 0c.23.03.47.05.7.07a6.899 6.899 0 0011.82 0c.23-.02.47-.04.7-.07z"
      opacity="0.45"
    ></path>
    <path
      fill="#a54b3f"
      d="M87.06 119.39a7.096 7.096 0 01-2.73.56 6.274 6.274 0 01-5.44-3.02c.46-.13.92-.27 1.38-.41a6.411 6.411 0 004.06 1.43 7.096 7.096 0 002.73-.56 6.679 6.679 0 004.12-5.05 6.531 6.531 0 01-4.12 7.05z"
      opacity="0.5"
    ></path>
    <path
      fill="#ad9359"
      d="M106.43 106.43a6.857 6.857 0 01-4.83 2.05 5.963 5.963 0 01-3.68-1.24c.49-.38.97-.78 1.45-1.18a5.974 5.974 0 002.23.42 6.857 6.857 0 004.83-2.05 6.963 6.963 0 001.97-3.82 6.76 6.76 0 01-1.97 5.82z"
      opacity="0.45"
    ></path>
    <path
      fill="#a54b3f"
      d="M119.47 86.86a6.63 6.63 0 01-6.06 4.24 6.042 6.042 0 01-1.46-.2c.34-.6.67-1.21.97-1.83a4.037 4.037 0 00.49.03 6.915 6.915 0 006.53-5.96 6.968 6.968 0 01-.47 3.72z"
      opacity="0.5"
    ></path>
    <path
      fill="#f9edd2"
      d="M124 64a6.543 6.543 0 01-.07 1 6.431 6.431 0 00-5.14-5.57c-.05-.68-.12-1.36-.2-2.04A6.51 6.51 0 01124 64z"
      opacity="0.5"
    ></path>
    <path
      fill="#f9dbd7"
      d="M119.87 44.69a7.14 7.14 0 00-.48-1.75 6.632 6.632 0 00-6.05-4.22 4.356 4.356 0 00-.51.03c-.31-.62-.64-1.22-.98-1.82a5.764 5.764 0 011.49-.21 6.632 6.632 0 016.05 4.22 6.987 6.987 0 01.48 3.75z"
      opacity="0.3"
    ></path>
    <path
      fill="#f9edd2"
      d="M108.4 27.39a6.963 6.963 0 00-1.97-3.82 6.858 6.858 0 00-4.83-2.05 5.973 5.973 0 00-2.23.42c-.48-.4-.96-.8-1.45-1.18a5.963 5.963 0 013.68-1.24 6.858 6.858 0 014.83 2.05 6.76 6.76 0 011.97 5.82z"
      opacity="0.5"
    ></path>
    <path
      fill="#f9dbd7"
      d="M91.01 15.57a6.657 6.657 0 00-4.15-5.04 6.97 6.97 0 00-2.7-.55 6.475 6.475 0 00-4.09 1.43c-.45-.14-.91-.27-1.37-.4a6.292 6.292 0 015.46-3.03 6.97 6.97 0 012.7.55 6.542 6.542 0 014.15 7.04z"
      opacity="0.3"
    ></path>
    <path
      fill="#f9edd2"
      d="M70.61 9.41c-.23-.03-.47-.05-.7-.07a6.899 6.899 0 00-11.82 0c-.23.02-.47.04-.7.07a6.743 6.743 0 0113.22 0z"
      opacity="0.5"
    ></path>
    <path
      fill="#f9dbd7"
      d="M49.11 11.07c-.46.13-.92.27-1.38.41a6.411 6.411 0 00-4.06-1.43 7.095 7.095 0 00-2.73.56 6.679 6.679 0 00-4.12 5.05 6.531 6.531 0 014.12-7.05 7.095 7.095 0 012.73-.56 6.274 6.274 0 015.44 3.02z"
      opacity="0.3"
    ></path>
    <path
      fill="#f9edd2"
      d="M30.08 20.76c-.49.38-.97.78-1.45 1.18a5.973 5.973 0 00-2.23-.42 6.858 6.858 0 00-4.83 2.05 6.963 6.963 0 00-1.97 3.82 6.76 6.76 0 011.97-5.82 6.858 6.858 0 014.83-2.05 5.963 5.963 0 013.68 1.24z"
      opacity="0.5"
    ></path>
    <path
      fill="#e1ebf4"
      d="M38.201 64.678a22.368 22.368 0 00.47 3.18 88.312 88.312 0 0025.57 3.64 90.803 90.803 0 0020.82-2.367c.096-.118.182-.243.283-.358a11.276 11.276 0 014.806-3.207c.035-.295.08-.588.102-.888a2.24 2.24 0 01-.34-.27 1.936 1.936 0 01-.6-1.41 1.72 1.72 0 01.04-.39 1.579 1.579 0 01.11-.37 1.513 1.513 0 01.2-.35 1.427 1.427 0 01.25-.3 1.696 1.696 0 01.33-.27 20.58 20.58 0 00-.88-4.43 86.496 86.496 0 01-25.12 3.61 86.413 86.413 0 01-25.15-3.62 20.549 20.549 0 00-.88 4.44 1.696 1.696 0 01.33.27 1.221 1.221 0 01.26.3 2.27 2.27 0 01.19.34 2.724 2.724 0 01.11.38 1.724 1.724 0 01.04.39 1.936 1.936 0 01-.6 1.41 2.243 2.243 0 01-.34.27zm38.07-34.18c0 1.11-5.39 2-12.04 2-6.66 0-12.05-.89-12.05-2a2.999 2.999 0 012.47-2.94 2.015 2.015 0 001.61-1.6 2.983 2.983 0 012.91-2.45h.01l.27.03a2.022 2.022 0 002.01-1.21 3.011 3.011 0 015.54 0 2 2 0 002 1.21 1.332 1.332 0 00.24-.04 3.01 3.01 0 012.96 2.46 2.003 2.003 0 001.61 1.6 3 3 0 012.46 2.94z"
    ></path>
    <path
      fill="#ffdb80"
      d="M87.801 53.178a82.294 82.294 0 01-23.56 3.32 82.383 82.383 0 01-23.58-3.32 31.995 31.995 0 019.42-10.51c.3-.24.63-.47.94-.72a.311.311 0 00.09-.07c1.65-1.25 3.22-2.7 3.22-4.82 0-.43-.01-.84-.03-1.33.28.05.54.09.75.13.95.16 2.01.29 3.15.39v4.25a2.01 2.01 0 004.02 0v-4.03q.99.03 2.01.03c.67 0 1.34-.01 2-.03v4.03a2.01 2.01 0 004.02 0v-4.25c1.14-.1 2.2-.23 3.15-.39.22-.04.49-.08.78-.14-.03.56-.06.74-.06 1.34 0 2.12 1.57 3.54 3.22 4.81a.874.874 0 00.1.08c.3.25.64.48.95.72a32.073 32.073 0 019.41 10.51z"
    ></path>
    <path
      fill="#fff"
      d="M76.271 30.498c0 .18-.14.35-.4.51a3 3 0 00-2.06-1.45 2.003 2.003 0 01-1.61-1.6 3.01 3.01 0 00-2.96-2.46 1.326 1.326 0 01-.24.04 2 2 0 01-2-1.21 3.011 3.011 0 00-5.54 0 2.022 2.022 0 01-2.01 1.21l-.27-.03h-.01a2.983 2.983 0 00-2.91 2.45 2.015 2.015 0 01-1.61 1.6 2.98 2.98 0 00-2.06 1.45c-.27-.16-.41-.33-.41-.51a2.999 2.999 0 012.47-2.94 2.015 2.015 0 001.61-1.6 2.983 2.983 0 012.91-2.45h.01l.27.03a2.022 2.022 0 002.01-1.21 3.011 3.011 0 015.54 0 2 2 0 002 1.21 1.326 1.326 0 00.24-.04 3.01 3.01 0 012.96 2.46 2.003 2.003 0 001.61 1.6 3 3 0 012.46 2.94z"
      opacity="0.5"
    ></path>
    <path
      fill="#f9edd2"
      d="M66.231 36.468v2c-.66.02-1.33.03-2 .03q-1.02 0-2.01-.03v-2q.99.03 2.01.03c.67 0 1.34-.01 2-.03zm-8.03-.22v2c-1.14-.1-2.2-.23-3.15-.39-.21-.04-.47-.08-.75-.13 0 .04-.01.08-.04.09a3.7 3.7 0 00.07-.76c0-.43-.01-.84-.03-1.33.28.05.54.09.75.13.95.16 2.01.29 3.15.39zm15.92.81a3.518 3.518 0 00.06.66c-.29.06-.56.1-.78.14-.95.16-2.01.29-3.15.39v-2c1.14-.1 2.2-.23 3.15-.39.22-.04.49-.08.78-.14-.03.56-.06.74-.06 1.34z"
      opacity="0.5"
    ></path>
    <path
      fill="#fff"
      d="M90.241 61.318a2.34 2.34 0 00-.25.19 19.601 19.601 0 00-.63-2.62 86.498 86.498 0 01-25.12 3.61 86.413 86.413 0 01-25.15-3.62 19.767 19.767 0 00-.64 2.63 1.116 1.116 0 00-.24-.19 20.549 20.549 0 01.88-4.44 86.413 86.413 0 0025.15 3.62 86.498 86.498 0 0025.12-3.61 20.58 20.58 0 01.88 4.43z"
      opacity="0.5"
    ></path>
    <path
      fill="#2d4356"
      d="M84.25 62.41a1.998 1.998 0 00.33 3.97 1.805 1.805 0 00.33-.03 1.997 1.997 0 00-.66-3.94zm-6.63.9a2.001 2.001 0 00.22 3.99 1.665 1.665 0 00.21-.01 2.002 2.002 0 00-.43-3.98zm-35.68.74a1.996 1.996 0 001.64 2.3 1.79 1.79 0 00.33.03 2 2 0 10-1.97-2.33zm13.5 1.68a2.016 2.016 0 001.9 2.1h.1a2.001 2.001 0 10-2-2.1zm13.61.2a2 2 0 002 1.9h.1a2.002 2.002 0 10-2.1-1.9zm-20.38-.84a2 2 0 001.78 2.2 1.504 1.504 0 00.21.01 2 2 0 10-1.99-2.21zm13.58.91a2 2 0 102-2 2 2 0 00-2 2z"
    ></path>
    <path
      fill="#2d4356"
      d="M41.224 81.11A29.41 29.41 0 0043.071 83h6.437a26.094 26.094 0 01-5.288-4.54 24.359 24.359 0 01-3.91-5.987A93.505 93.505 0 0064.26 75.5a96.054 96.054 0 0018.575-1.786 11.18 11.18 0 012.234-4.593A90.282 90.282 0 0164.261 71.5a87.694 87.694 0 01-25.475-3.632 23.328 23.328 0 01-.464-3.184 2.19 2.19 0 00.338-.274 1.463 1.463 0 00.25-.3 1.599 1.599 0 00.19-.34 1.696 1.696 0 00.11-.38 1.65 1.65 0 00.04-.39 1.983 1.983 0 00-.59-1.41 1.905 1.905 0 00-.334-.263 20.498 20.498 0 01.881-4.44A85.837 85.837 0 0064.261 60.5a85.736 85.736 0 0025.033-3.61 20.506 20.506 0 01.88 4.438 1.786 1.786 0 00-.334.262 1.457 1.457 0 00-.25.3 1.673 1.673 0 00-.19.34 1.796 1.796 0 00-.11.38 1.718 1.718 0 00-.04.39 1.983 1.983 0 00.59 1.41 1.854 1.854 0 00.338.275c-.024.307-.067.608-.102.91a11.223 11.223 0 013.717-.642c.127 0 .252.012.379.016.047-.646.078-1.295.078-1.95 0-8.693-4.776-17.043-13.451-23.52-.35-.262-.692-.534-1.04-.799-1.57-1.208-1.649-1.578-1.649-1.64 0-.304.088-1.59.112-2.84a4.313 4.313 0 002.028-3.72 4.517 4.517 0 00-.052-.677 6.98 6.98 0 00-4.426-5.845 6.993 6.993 0 00-5.748-4.435 7 7 0 00-11.548 0 6.993 6.993 0 00-5.748 4.435 6.98 6.98 0 00-4.428 5.88 4.514 4.514 0 00-.05.642 4.319 4.319 0 002.048 3.734c.018.583.037 1.058.053 1.47.021.516.039.921.039 1.356 0 .04-.046.428-1.635 1.639-.347.264-.713.516-1.044.8C39.03 45.972 34.25 54.323 34.25 63.02a26.653 26.653 0 001.354 8.41 27.856 27.856 0 005.62 9.68zM52.25 30.5a2.993 2.993 0 012.453-2.941 1.999 1.999 0 001.606-1.606 2.979 2.979 0 012.91-2.45h.008c.086.013.175.023.264.031a2.008 2.008 0 002-1.21 3 3 0 015.519 0 2.004 2.004 0 001.999 1.21 1.744 1.744 0 00.241-.034 2.993 2.993 0 012.941 2.453 1.999 1.999 0 001.606 1.606 2.991 2.991 0 012.449 2.897h-.006a.36.36 0 01.01.044c0 1.105-5.373 2-12 2-6.51 0-11.797-.865-11.982-1.942l-.023-.006c0-.018.005-.034.005-.052zm-2.1 12.17c.347-.258.685-.528 1.03-.79 1.64-1.25 3.21-2.7 3.21-4.82 0-.432-.015-.841-.034-1.332.28.053.538.096.751.132.946.157 2.006.288 3.143.389V40.5a2 2 0 004 0v-4.029c.658.018 1.324.029 2 .029s1.342-.011 2-.029V40.5a2 2 0 004 0v-4.251a41.988 41.988 0 003.143-.39c.22-.036.484-.08.776-.136-.03.554-.059.736-.059 1.337 0 2.12 1.56 3.54 3.21 4.81.346.267.689.539 1.04.8a32.063 32.063 0 019.38 10.514A81.94 81.94 0 0164.26 56.5a82.047 82.047 0 01-23.497-3.319A32.042 32.042 0 0150.15 42.67zM83.318 83l-.396-3.139A26.22 26.22 0 0178.99 83z"
    ></path>
    <path
      fill="#2d4356"
      d="M100.94 74.72a7.233 7.233 0 00-4.69-5.34 7.406 7.406 0 00-2.46-.43 7.244 7.244 0 00-7.19 8.14l.82 6.45a4.03 4.03 0 00.94 2.11l-.54 1.38a5.453 5.453 0 00-.57-.03h-51a6 6 0 000 12h42.03a10.297 10.297 0 01-2.58.92 2.003 2.003 0 00.42 3.96 2.1 2.1 0 00.43-.05 14.067 14.067 0 004.75-1.97 14.874 14.874 0 00.62 1.7 2.002 2.002 0 001.83 1.19 1.932 1.932 0 00.81-.17 2 2 0 001.02-2.64A8.31 8.31 0 0184.8 99h2.45a5.99 5.99 0 004.2-10.27l.69-1.76a4.003 4.003 0 002.01-1.03l4.7-4.49a7.188 7.188 0 002.09-6.73zM38.13 95h-1.88a2 2 0 010-4h1.88zm43.62 0H42.13v-4h3.62v.29a2 2 0 004 0V91h2v.29a2 2 0 004 0V91h2v.29a2 2 0 004 0V91h20zm5.5 0h-1.5v-4h1.5a2 2 0 010 4zm8.85-16.44l-4.71 4.48-.82-6.45a3.243 3.243 0 013.22-3.64 3.44 3.44 0 011.12.2 3.252 3.252 0 011.19 5.41z"
    ></path>
    <path
      fill="#fc785e"
      d="M89.25 93a2.006 2.006 0 01-2 2h-1.5v-4h1.5a2.006 2.006 0 012 2z"
    ></path>
    <path
      fill="#98e07e"
      d="M96.1 78.56l-4.71 4.48-.82-6.45a3.243 3.243 0 013.22-3.64 3.44 3.44 0 011.12.2 3.252 3.252 0 011.19 5.41z"
    ></path>
    <path fill="#fc785e" d="M38.13 91v4h-1.88a2 2 0 010-4z"></path>
    <path
      fill="#98e07e"
      d="M81.75 91v4H42.13v-4h3.62v.29a2 2 0 004 0V91h2v.29a2 2 0 004 0V91h2v.29a2 2 0 004 0V91z"
    ></path>
    <path
      fill="#e8fbfc"
      d="M115 64c0 .34 0 .67-.02 1a50.99 50.99 0 00-101.96 0c-.02-.33-.02-.66-.02-1a51 51 0 01102 0z"
      opacity="0.4"
    ></path>
    <path
      fill="#0f423c"
      d="M115 64a51 51 0 01-102 0c0-.34 0-.67.02-1a50.99 50.99 0 00101.96 0c.02.33.02.66.02 1z"
      opacity="0.3"
    ></path>
    <path
      fill="#ffdb80"
      d="M49.45 83H79a26.375 26.375 0 003.926-3.109l-.29-2.3a11.21 11.21 0 01.199-3.877 96.674 96.674 0 01-18.594 1.774 94.234 94.234 0 01-24.04-3.02 24.416 24.416 0 003.92 5.98A26.18 26.18 0 0049.451 83z"
    ></path>
    <path
      fill="#ad9359"
      d="M75.293 83h3.706a26.375 26.375 0 003.927-3.109l-.224-1.776A26.928 26.928 0 0175.292 83zM49.45 83h3.679a26.659 26.659 0 01-9.008-6.552 24.097 24.097 0 01-2.69-3.66c-.41-.11-.82-.21-1.23-.32a24.416 24.416 0 003.92 5.98A26.18 26.18 0 0049.451 83z"
      opacity="0.45"
    ></path>
    <path
      fill="#9fa5aa"
      d="M64.241 71.498a90.803 90.803 0 0020.82-2.367c.096-.118.182-.243.283-.358a11.263 11.263 0 013.432-2.622 88.571 88.571 0 01-24.535 3.347 88.312 88.312 0 01-25.57-3.64c-.1-.44-.18-.89-.25-1.34-.07.06-.15.11-.22.16a22.368 22.368 0 00.47 3.18 88.312 88.312 0 0025.57 3.64zm25.91-5.932c.034-.295.078-.588.1-.888a1.767 1.767 0 01-.22-.16c-.06.403-.142.791-.227 1.184.116-.044.229-.095.346-.136z"
      opacity="0.5"
    ></path>
    <path
      fill="#a54b3f"
      d="M38.13 93v2h-1.88a2.006 2.006 0 01-2-2 1.905 1.905 0 01.28-1 1.968 1.968 0 001.72 1z"
      opacity="0.5"
    ></path>
    <path
      fill="#528440"
      d="M81.75 93v2H42.13v-2h4.59a1.904 1.904 0 001.03.29 2.03 2.03 0 001.04-.29h3.93a1.904 1.904 0 001.03.29 2.03 2.03 0 001.04-.29h3.93a1.904 1.904 0 001.03.29 2.03 2.03 0 001.04-.29z"
      opacity="0.3"
    ></path>
    <path
      fill="#a54b3f"
      d="M89.25 93a2.006 2.006 0 01-2 2h-1.5v-2h1.5a1.968 1.968 0 001.72-1 1.905 1.905 0 01.28 1z"
      opacity="0.5"
    ></path>
    <path
      fill="#cbe0c3"
      d="M96.94 77.24a3.264 3.264 0 00-2.03-2.09 3.44 3.44 0 00-1.12-.2 3.267 3.267 0 00-3.13 2.37l-.09-.73a3.243 3.243 0 013.22-3.64 3.44 3.44 0 011.12.2 3.276 3.276 0 012.03 4.09z"
      opacity="0.6"
    ></path>
  </svg>
  );
};

export default PrasadamIcon;