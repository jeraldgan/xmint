import Image from "next/image";

import Clock from "@/app/_components/clock";

function Navbar() {
  return (
    <div className="fixed inset-x-0 top-0 z-40 w-full h-20">
      <div className="absolute inset-x-0 top-0 w-full h-[145px] pointer-events-none navbar-gradient -z-10"></div>
      <div className="max-w-[432px] flex sm:max-w-screen-sm md:max-w-[720px] md:pl-[7.5rem] md:pr-16 sm:px-[7.875rem] px-8 z-0 mx-auto items-center justify-between h-20">
        <Image
          className="w-auto h-8"
          src={logo}
          alt="Logo"
          width={32}
          height={32}
        />
        <Clock />
      </div>
    </div>
  );
}

export default Navbar;
