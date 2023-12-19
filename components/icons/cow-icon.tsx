import { cn } from '@/lib/utils';

type Props = {
  className?: string;
};

const CowIcon: React.FC<Props> = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      className={cn('h-6 w-6', className)}
    >
      <path
        fill="#fff"
        d="M30.818 32.284s-5.772 1.035-6.083 1.035c-.311 0-3.989.829-4.351.829-.363 0-4.555 2.072-4.555 2.072l-1.649 7.909-2.189 5.924 1.14 2.176 2.798.725 6.683-2.901 3.108-1.865 1.606 4.144 2.201 3.59 5.156 1.176s3.575 2.435 3.575 2.694c0 .259 1.347 3.264 1.347 3.264l.417 3.523-1.039 2.719-1.088 1.736.363 1.658 4.352-.311.452-4.611.222-12.174 3.212 1.347 7.692 2.942 10.959.639.517.129 4.025-1.042 4.937-2.563 2.66 1.103 1.121 6.408-.725 4.196-2.487 1.865.259 2.072 10.318-.259 2.864-4.644.546-6.598.295-6.354-2.005-5.451.881-4.203 1.124-3.057-.347-11.086-5.958-2.901-12.174.415-29.168.509-6.733 2.185-4.279 1.036z"
      ></path>
      <path
        fill="#ffb827"
        d="M81.016 74.931h-5.359a2.666 2.666 0 01-2.641-3.059l.223-1.51a2.686 2.686 0 011.377-1.96l.746-.401a.882.882 0 00.448-.603l.581-2.859-.803-7.132c-7.781-3.74-8.495-10.971-7.741-14.382a1.601 1.601 0 013.128.685c-.07.33-1.504 7.686 6.721 11.136.535.224.907.721.972 1.298l.932 8.29c.019.166.012.334-.022.498l-.631 3.106a4.077 4.077 0 01-2.068 2.785l-.512.275-.093.634h3.587l2.031-6.109-.405-11.835a1.601 1.601 0 01.48-1.198c1.702-1.669 6.161-6.689 6.343-9.828.252-4.323.002-10.52 0-10.583-.002-1.014-2.758-2.335-5.202-2.882l-35.378.811a39.564 39.564 0 00-12.484 2.317c-.832.299-1.75.631-2.759.999-3.833 1.399-7.123 1.138-9.207.673a4.895 4.895 0 00-4.398 1.169l-1.112 1.03c-.382.354-.65.802-.776 1.297-.322 1.268-.897 3.743-1.128 6.089-.251 2.55-1.774 4.64-3.007 5.944a.504.504 0 00.004.703l1.749 1.701c.198.199.474.222.672.074 1.51-1.109 4.336-2.182 6.829-3.128.819-.311 1.591-.604 2.24-.871 2.205-.906 1.396-3.517 1.211-4.03a1.605 1.605 0 01.956-2.049 1.595 1.595 0 012.049.942c.765 2.061 1.124 6.405-2.999 8.1-.673.277-1.473.581-2.322.903-2.188.83-4.912 1.865-6.069 2.716a3.68 3.68 0 01-4.821-.38l-1.749-1.702a3.698 3.698 0 01-.078-5.177c.89-.942 1.985-2.41 2.147-4.059.239-2.427.791-4.908 1.211-6.562a5.855 5.855 0 011.705-2.86l1.112-1.03a8.097 8.097 0 017.27-1.945c1.667.372 4.306.579 7.412-.556 1.014-.37 1.938-.704 2.774-1.004a42.714 42.714 0 0113.492-2.505l35.567-.818c.12-.003.243.009.363.033 1.323.274 7.924 1.856 7.924 5.988.009.194.258 6.351-.002 10.834-.252 4.318-5.111 9.684-6.797 11.423l.391 11.431c.006.19-.021.38-.081.56l-2.486 7.477a1.596 1.596 0 01-1.517 1.096z"
      ></path>
      <path
        fill="#ffb827"
        d="M86.127 74.931h-4.403a1.601 1.601 0 010-3.202h3.374l1.84-4.033c.445-.976.71-2.011.786-3.079l.469-6.456a8.976 8.976 0 00-.227-2.758l-1.702-7.055a1.601 1.601 0 013.113-.751l1.702 7.055c.296 1.224.399 2.483.308 3.74l-.468 6.455a12.147 12.147 0 01-1.068 4.178l-2.267 4.969c-.261.571-.83.937-1.457.937zM36.914 59.268c-.026 0-.052 0-.078-.002-.127-.006-3.153-.161-6.767-1.317-4.166-1.333-5.932-7.511-6.119-8.211a1.6 1.6 0 013.092-.831c.363 1.338 1.877 5.312 4.003 5.992 3.191 1.021 5.918 1.167 5.945 1.169a1.602 1.602 0 011.52 1.678 1.599 1.599 0 01-1.596 1.522z"
      ></path>
      <path
        fill="#ffb827"
        d="M43.336 74.931h-5.871a1.601 1.601 0 01-1.599-1.517l-.097-1.856a3.162 3.162 0 011.2-2.643l.729-.573.056-2.753a3.723 3.723 0 00-.669-2.22 6.835 6.835 0 01-1.13-2.671l-1.652-8.672a1.602 1.602 0 011.273-1.873 1.603 1.603 0 011.872 1.273l1.653 8.673c.098.518.302.999.604 1.43a6.935 6.935 0 011.249 4.145l-.074 2.79a3.146 3.146 0 01-1.203 2.395l-.73.573.019.296h2.917l.678-6.952-.342-13.7a1.6 1.6 0 011.56-1.641 1.608 1.608 0 011.64 1.561l.345 13.797c.002.065-.001.13-.007.196l-.829 8.496a1.599 1.599 0 01-1.592 1.446z"
      ></path>
      <path
        fill="#ffb827"
        d="M62.919 62.252c-12.712 0-18.838-4.238-19.093-4.418a1.6 1.6 0 011.845-2.617c.076.053 5.677 3.833 17.247 3.833.356 0 .712-.012 1.067-.034a1.6 1.6 0 11.194 3.197c-.42.026-.841.039-1.26.039zm7.443-1.239a1.6 1.6 0 01-.466-3.134c3.277-.998 5.739-2.295 5.841-2.35a1.606 1.606 0 011.58.041l-1.651 2.743.826-1.372.747 1.416c-.288.152-2.901 1.516-6.409 2.584a1.557 1.557 0 01-.468.072z"
      ></path>
      <path
        fill="#eac9a6"
        d="M23.028 35.08c-1.865-9.394-13.055-8.358-13.055-8.358s8.082 3.868 8.911 10.914l4.144-2.556z"
      ></path>
      <path
        fill="#9d7143"
        d="M18.881 39.237a1.6 1.6 0 01-1.588-1.414c-.713-6.066-7.941-9.623-8.013-9.658a1.602 1.602 0 01.546-3.037c4.364-.403 13.075 1.09 14.773 9.64a1.602 1.602 0 01-3.14.624c-.709-3.572-3.04-5.365-5.407-6.256 2.057 2.01 4.009 4.79 4.423 8.313a1.601 1.601 0 01-1.594 1.788z"
      ></path>
      <path
        fill="#ffb827"
        d="M18.955 42.759c-.104 0-.216-.008-.312-.033a1.505 1.505 0 01-.577-.232 3.187 3.187 0 01-.248-.2 3.01 3.01 0 01-.2-.248 1.769 1.769 0 01-.144-.272 1.277 1.277 0 01-.088-.304 1.378 1.378 0 01-.032-.312c0-.104.008-.208.032-.312.016-.104.048-.2.088-.296a1.85 1.85 0 01.144-.28c.064-.088.128-.168.2-.24.08-.072.16-.144.248-.2a1.5 1.5 0 01.273-.152c.095-.04.2-.064.304-.089.2-.04.416-.04.624 0 .096.024.2.048.296.089.096.04.192.096.281.152.088.056.168.128.24.2a1.448 1.448 0 01.344.52c.04.096.072.193.096.296.017.104.032.208.032.312a1.625 1.625 0 01-.712 1.336 1.815 1.815 0 01-.281.144c-.096.04-.2.072-.296.088a1.38 1.38 0 01-.312.033z"
      ></path>
      <path
        fill="#fff8aa"
        d="M71.795 45.234a76.752 76.752 0 01-28.735 0V27.068l28.735-.38v18.546z"
      ></path>
      <path
        fill="#ff554f"
        d="M57.427 48.198c-4.9 0-9.801-.464-14.667-1.391a1.6 1.6 0 01-1.301-1.573V27.068a1.6 1.6 0 011.58-1.601l28.735-.38a1.598 1.598 0 011.622 1.601v18.545c0 .769-.547 1.429-1.302 1.573a78.203 78.203 0 01-14.667 1.392zm14.368-2.964h.008-.008zm-27.134-1.336a74.767 74.767 0 0025.533 0V28.311l-25.533.337v15.25z"
      ></path>
      <path
        fill="#ff554f"
        d="M67.306 28.293a1.64 1.64 0 01-1.137-.472 1.726 1.726 0 01-.192-.24 1.363 1.363 0 01-.152-.28c-.04-.096-.072-.2-.087-.296a1.378 1.378 0 01-.032-.312c0-.112.008-.216.032-.32a1.407 1.407 0 01.239-.569c.057-.088.12-.176.192-.248.6-.592 1.673-.592 2.265 0 .072.072.144.16.2.248.056.08.104.176.144.272.048.096.072.2.096.297.016.104.032.208.032.32 0 .104-.016.208-.032.312-.024.096-.048.2-.096.296a1.85 1.85 0 01-.144.28 1.62 1.62 0 01-1.328.712zm-1.601 5.139c0-.889.712-1.601 1.601-1.601.88 0 1.6.712 1.6 1.601a1.6 1.6 0 11-3.201 0zm1.601 8.342c-.425 0-.833-.168-1.137-.472a1.357 1.357 0 01-.192-.24 1.37 1.37 0 01-.152-.281 1.214 1.214 0 01-.087-.296 1.378 1.378 0 01-.032-.312c0-.104.008-.208.032-.312a1.361 1.361 0 01.239-.577c.057-.088.12-.168.192-.24.6-.601 1.673-.601 2.265 0a1.448 1.448 0 01.344.513c.048.096.072.2.096.304.016.104.032.208.032.312 0 .104-.016.208-.032.312a1.28 1.28 0 01-.096.296 1.91 1.91 0 01-.144.281 1.448 1.448 0 01-.2.24 1.59 1.59 0 01-1.128.472z"
      ></path>
      <path
        fill="#ff554f"
        d="M67.306 41.774c-.425 0-.833-.168-1.137-.472a1.357 1.357 0 01-.192-.24 1.37 1.37 0 01-.152-.281 1.214 1.214 0 01-.087-.296 1.378 1.378 0 01-.032-.312c0-.104.008-.208.032-.312a1.361 1.361 0 01.239-.577c.057-.088.12-.168.192-.24.6-.601 1.673-.601 2.265 0a1.448 1.448 0 01.344.513c.048.096.072.2.096.304.016.104.032.208.032.312 0 .104-.016.208-.032.312a1.28 1.28 0 01-.096.296 1.91 1.91 0 01-.144.281 1.448 1.448 0 01-.2.24 1.59 1.59 0 01-1.128.472zm-8.15-.841a1.598 1.598 0 113.194-.08 1.595 1.595 0 01-1.561 1.641h-.04a1.59 1.59 0 01-1.593-1.561zm-5.099 1.561a1.595 1.595 0 01-1.56-1.641 1.6 1.6 0 011.641-1.561c.88.024 1.576.752 1.561 1.641a1.603 1.603 0 01-1.601 1.561h-.041zm-6.508-.72c-.104 0-.208-.008-.312-.032a1.452 1.452 0 01-.304-.088c-.096-.04-.184-.096-.272-.152a1.115 1.115 0 01-.24-.2 1.11 1.11 0 01-.2-.24 1.21 1.21 0 01-.152-.281 1.808 1.808 0 01-.088-.296 1.38 1.38 0 01-.033-.312c0-.104.009-.208.033-.312.024-.104.048-.208.088-.304.04-.096.088-.185.152-.273a1.14 1.14 0 01.2-.24 1.14 1.14 0 01.24-.2 1.398 1.398 0 01.576-.241 1.643 1.643 0 01.929.089c.096.04.184.088.272.152.088.056.168.12.24.2.08.072.145.152.2.24.064.088.112.176.152.273.04.096.072.2.087.304.024.104.032.208.032.312 0 .104-.008.208-.032.312a1.26 1.26 0 01-.087.296c-.04.104-.089.192-.152.281a1.14 1.14 0 01-.2.24 1.58 1.58 0 01-1.129.472z"
      ></path>
      <path
        fill="#ff554f"
        d="M47.549 41.774c-.104 0-.208-.008-.312-.032a1.452 1.452 0 01-.304-.088c-.096-.04-.184-.096-.272-.152a1.115 1.115 0 01-.24-.2 1.11 1.11 0 01-.2-.24 1.21 1.21 0 01-.152-.281 1.808 1.808 0 01-.088-.296 1.38 1.38 0 01-.033-.312c0-.104.009-.208.033-.312.024-.104.048-.208.088-.304.04-.096.088-.185.152-.273a1.14 1.14 0 01.2-.24 1.14 1.14 0 01.24-.2 1.398 1.398 0 01.576-.241 1.643 1.643 0 01.929.089c.096.04.184.088.272.152.088.056.168.12.24.2.08.072.145.152.2.24.064.088.112.176.152.273.04.096.072.2.087.304.024.104.032.208.032.312 0 .104-.008.208-.032.312a1.26 1.26 0 01-.087.296c-.04.104-.089.192-.152.281a1.14 1.14 0 01-.2.24 1.58 1.58 0 01-1.129.472zm-1.602-8.206c0-.88.713-1.601 1.601-1.601a1.6 1.6 0 110 3.202 1.596 1.596 0 01-1.601-1.601zm1.602-5.003c-.424 0-.832-.168-1.128-.472a1.572 1.572 0 01-.44-1.441c.024-.104.048-.2.088-.304.04-.096.088-.184.152-.272a1.14 1.14 0 01.2-.24 1.11 1.11 0 01.24-.2c.087-.064.175-.112.272-.152.104-.04.2-.072.304-.088a1.594 1.594 0 011.441.441c.08.072.145.152.2.24a1.39 1.39 0 01.239.576c.024.104.032.208.032.312 0 .104-.008.208-.032.312a1.26 1.26 0 01-.087.296 1.22 1.22 0 01-.152.28 1.14 1.14 0 01-.2.24 1.577 1.577 0 01-1.129.472z"
      ></path>
      <path fill="#ffe3d7" d="M62.815 36.22H52.039v-9.256h10.776z"></path>
      <path
        fill="#ff554f"
        d="M62.815 37.821H52.039a1.601 1.601 0 01-1.601-1.601v-9.256c0-.884.717-1.601 1.601-1.601h10.776c.884 0 1.601.717 1.601 1.601v9.256c0 .884-.717 1.601-1.601 1.601zm-9.175-3.202h7.573v-6.054H53.64v6.054z"
      ></path>
    </svg>
  );
};

export default CowIcon;