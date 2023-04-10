import React from "react";
import Logo from "../../assets/logo.svg";
import Image from "next/image";

type Props = {};

function Footer({}: Props) {
  return (
    <div className="bg-[#231F1A] w-full py-8 flex items-center justify-center gap-6 rounded-tl-3xl rounded-tr-3xl">
      <div className="h-16 w-16">
        <Image src={Logo} alt="logo" />
      </div>
    </div>
  );
}

export default Footer;
