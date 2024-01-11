import React from "react";

import { SVGProps } from "react";

type Props = SVGProps<SVGSVGElement>;

const Home_icon = ({ className }: Props) => {
  return (
    <svg className={className} viewBox="0 0 24 24">
      <path d="M13.8028 4.10345C12.7111 3.37567 11.2889 3.37567 10.1972 4.10345L5.19722 7.43679C4.29308 8.03955 3.75 9.0543 3.75 10.141V17.0002C3.75 18.7951 5.20507 20.2502 7 20.2502H17C18.7949 20.2502 20.25 18.7951 20.25 17.0002V10.141C20.25 9.0543 19.7069 8.03955 18.8028 7.43679L13.8028 4.10345ZM9.36517 2.85538C10.9607 1.7917 13.0393 1.7917 14.6348 2.85538L19.6348 6.18871C20.9563 7.06967 21.75 8.55277 21.75 10.141V17.0002C21.75 19.6236 19.6234 21.7502 17 21.7502H7C4.37665 21.7502 2.25 19.6236 2.25 17.0002V10.141C2.25 8.55277 3.04373 7.06967 4.36517 6.18871L9.36517 2.85538Z"></path>
      <path d="M14.7963 15.1627C15.1249 14.9129 15.5938 14.9756 15.8452 15.3035C16.0973 15.6322 16.0351 16.103 15.7064 16.355L15.25 15.7598C15.7064 16.355 15.7064 16.355 15.7064 16.355L15.7055 16.3557L15.7045 16.3564L15.7021 16.3582L15.6959 16.3629L15.6775 16.3766C15.6625 16.3875 15.6424 16.402 15.6172 16.4195C15.5668 16.4545 15.496 16.5019 15.4063 16.5574C15.2273 16.6681 14.971 16.8124 14.6494 16.9558C14.0088 17.2415 13.091 17.5319 12 17.5319C10.9091 17.5319 9.99132 17.2415 9.35066 16.9558C9.02911 16.8124 8.77282 16.6681 8.59377 16.5574C8.50408 16.5019 8.4333 16.4545 8.38291 16.4195C8.35769 16.402 8.33753 16.3875 8.32261 16.3766L8.30417 16.3629L8.29793 16.3582L8.29556 16.3564L8.29456 16.3557C8.29456 16.3557 8.29369 16.355 8.75004 15.7598L8.29369 16.355C7.96498 16.103 7.90282 15.6322 8.15485 15.3035C8.40623 14.9756 8.87522 14.9129 9.20381 15.1627L9.20834 15.166C9.21388 15.1701 9.22424 15.1775 9.23922 15.1879C9.2692 15.2088 9.31754 15.2413 9.38278 15.2816C9.51358 15.3625 9.71036 15.4738 9.96168 15.5859C10.4668 15.8112 11.174 16.0319 12 16.0319C12.8261 16.0319 13.5333 15.8112 14.0384 15.5859C14.2897 15.4738 14.4865 15.3625 14.6173 15.2816C14.6825 15.2413 14.7309 15.2088 14.7609 15.1879C14.7758 15.1775 14.7862 15.1701 14.7917 15.166L14.7963 15.1627L14.7951 15.1636ZM14.7963 15.1627L14.7941 15.1643Z"></path>
    </svg>
  );
};

export default Home_icon;
