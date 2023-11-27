import { cn } from '@/lib/utils';

type Props = {
  className?: string;
};

const KitchenIcon: React.FC<Props> = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={cn('h-6 w-6', className)}
      enableBackground="new 0 0 122.88 111.69"
      viewBox="0 -5.59 122.88 122.88"
    >
      <path d="M25.66 19.3a2.053 2.053 0 01-2.9 0 2.053 2.053 0 010-2.9c.73-.73.94-1.39.86-2.02-.08-.69-.47-1.43-.9-2.22-.74-1.39-1.54-2.87-1.79-4.67-.26-1.82.04-3.91 1.51-6.45l.01-.04c.28-.47.73-.79 1.22-.93.5-.14 1.06-.08 1.55.2s.82.74.96 1.24.08 1.06-.2 1.55c-.9 1.57-1.07 2.87-.9 4.01.18 1.15.73 2.18 1.25 3.14.77 1.43 1.48 2.76 1.57 4.23.1 1.51-.45 3.07-2.24 4.86zM14.09 42.76h94.51c.38 0 .75.08 1.09.22.33.14.62.33.88.57.02.01.04.03.06.05.52.52.84 1.23.84 2.02v6.37h9.36c.57 0 1.08.23 1.45.6.37.37.6.89.6 1.45 0 .57-.23 1.08-.6 1.45l-.03.03c-.37.35-.87.57-1.42.57h-9.36v42.1c0 1.82-.37 3.56-1.03 5.15-.69 1.65-1.69 3.14-2.93 4.38a13.479 13.479 0 01-4.38 2.93c-1.59.66-3.33 1.03-5.15 1.03H24.73c-1.82 0-3.56-.37-5.15-1.03-1.65-.69-3.14-1.69-4.38-2.94a13.667 13.667 0 01-2.94-4.38c-.66-1.59-1.03-3.33-1.03-5.15V56.11H2.06c-.57 0-1.08-.23-1.45-.6A2.048 2.048 0 01.6 52.6c.37-.37.89-.6 1.45-.6h9.18v-6.37c0-.38.08-.75.22-1.09.15-.35.36-.67.62-.93.52-.52 1.24-.85 2.02-.85zm93.26 4.12h-92V98.2a9.294 9.294 0 002.76 6.63c.87.87 1.9 1.57 3.05 2.05 1.1.46 2.31.71 3.58.71h73.25c1.26 0 2.47-.25 3.57-.71a9.719 9.719 0 003.05-2.04c.87-.87 1.57-1.9 2.04-3.05.46-1.1.71-2.31.71-3.57V46.88h-.01zm-87.29 6.97c0-.57.23-1.08.6-1.45.37-.37.89-.6 1.45-.6.57 0 1.08.23 1.45.6.37.37.6.89.6 1.45v27.09c0 .57-.23 1.08-.6 1.45-.37.37-.89.6-1.45.6-.57 0-1.08-.23-1.45-.6l-.03-.03c-.35-.37-.57-.87-.57-1.42V53.85zM40.3 25.44c-3.54.51-6.72 1.16-9.54 1.93-2.83.78-5.32 1.69-7.46 2.73-1.5.73-2.83 1.52-3.98 2.37-.81.59-1.53 1.22-2.17 1.87h88.43c-.59-.62-1.27-1.21-2.03-1.77-1.11-.81-2.4-1.56-3.86-2.24-2.08-.98-4.5-1.82-7.21-2.56-2.73-.74-5.75-1.35-9.01-1.86-1.48-.23-2.98-.44-4.49-.63h-.02a157.438 157.438 0 00-13.58-1.11 2.06 2.06 0 01-1.43-.65c-.36-.38-.57-.9-.55-1.47v-.01c.01-.33.1-.64.25-.91.15-.28.37-.51.63-.7.32-.24.62-.51.88-.82.26-.3.48-.64.66-.99.18-.35.32-.72.41-1.13.09-.39.14-.79.14-1.21 0-.7-.14-1.36-.39-1.96-.26-.62-.64-1.19-1.11-1.66-.47-.47-1.04-.86-1.66-1.11-.6-.25-1.26-.39-1.96-.39a5.077 5.077 0 00-3.62 1.51c-.47.47-.86 1.04-1.11 1.66-.25.6-.39 1.26-.39 1.96 0 .41.05.81.13 1.19.09.39.23.77.4 1.11.18.35.4.69.65.99.26.31.55.59.87.82.45.34.73.83.8 1.35a2.057 2.057 0 01-1.94 2.34h-.1c-1.37.03-2.77.08-4.18.15-1.39.07-2.8.16-4.25.28-1.4.11-2.79.24-4.15.4-1.37.15-2.72.32-4.06.52zm-18.79.96c2.34-1.13 5.03-2.12 8.08-2.96 3.03-.84 6.41-1.53 10.13-2.07 1.39-.2 2.79-.38 4.2-.54 1.43-.16 2.84-.3 4.26-.41.87-.07 1.78-.13 2.71-.19.64-.04 1.3-.07 1.96-.1a9.25 9.25 0 01-.84-3.84c0-1.25.25-2.44.7-3.53a9.306 9.306 0 012.01-3c.85-.85 1.87-1.54 3-2 1.09-.45 2.28-.7 3.53-.7s2.44.25 3.53.7c1.13.47 2.15 1.16 3 2 .85.85 1.54 1.87 2.01 3a9.223 9.223 0 01.44 5.69c-.15.63-.37 1.24-.65 1.82.76.05 1.5.1 2.22.16.97.07 1.98.16 3.02.26 1.55.15 3.09.32 4.64.52 1.55.19 3.09.41 4.62.65 3.47.54 6.66 1.2 9.54 1.98 2.9.79 5.51 1.71 7.79 2.78 2.38 1.11 4.41 2.39 6.05 3.85 1.66 1.47 2.92 3.12 3.77 4.97a2.086 2.086 0 01.23.95c0 .57-.23 1.08-.6 1.45l-.03.03c-.37.35-.87.57-1.42.57H13.09c-.04 0-.07 0-.1-.01-.13-.01-.27-.03-.39-.06-.14-.04-.28-.09-.42-.16-.03-.01-.06-.03-.09-.05-.47-.27-.8-.7-.95-1.19-.15-.49-.12-1.03.13-1.51.01-.03.03-.06.05-.09.98-1.81 2.31-3.47 4.01-4.97 1.69-1.48 3.75-2.82 6.18-4zm60.1-10.01a2.053 2.053 0 010 2.9 2.053 2.053 0 01-2.9 0c-1.79-1.79-2.34-3.35-2.25-4.85.09-1.47.81-2.8 1.57-4.23 1-1.88 2.15-4.02.35-7.15l-.02-.04c-.27-.48-.32-1.03-.18-1.52.14-.51.47-.96.96-1.24s1.05-.34 1.55-.2c.51.14.96.47 1.24.96 1.47 2.54 1.77 4.63 1.51 6.44-.26 1.8-1.05 3.29-1.79 4.67-.8 1.52-1.49 2.81-.04 4.26zm15.5 0a2.053 2.053 0 010 2.9 2.053 2.053 0 01-2.9 0c-1.79-1.79-2.34-3.35-2.25-4.85.09-1.47.81-2.8 1.57-4.23.51-.96 1.07-1.99 1.25-3.14.18-1.14.01-2.44-.9-4.01a2.041 2.041 0 01.76-2.79c.49-.28 1.05-.34 1.55-.2s.96.47 1.24.96c1.47 2.54 1.77 4.63 1.51 6.44-.26 1.8-1.05 3.29-1.79 4.67-.42.79-.82 1.53-.9 2.22-.08.65.13 1.3.86 2.03zM41.16 19.3a2.053 2.053 0 01-2.9 0 2.053 2.053 0 010-2.9c1.46-1.46.77-2.75-.04-4.25-.74-1.39-1.54-2.87-1.79-4.68-.26-1.82.04-3.91 1.51-6.45.28-.49.74-.82 1.25-.95s1.06-.08 1.55.21c.49.28.82.74.95 1.25s.08 1.06-.21 1.55c-1.8 3.12-.65 5.27.35 7.14.77 1.43 1.48 2.76 1.57 4.23.1 1.5-.46 3.06-2.24 4.85z"></path>
    </svg>
  );
};

export default KitchenIcon;
