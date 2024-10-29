import Image from "next/image";
import Logo from "./logo.svg";
import { Profile } from "../profile";
import ArrowDownIcon from "./icons/ArrowDownIcon";
import UIButton from "../uikit/UIButton";

function Header() {
  return (
    <header className="flex h-24 items-center px-8 bg-white shadow-lg">
      <Image src={Logo} alt="Logo" />
      <div className="w-px h-8 bg-slate-200 mx-6"></div>
      <UIButton className="w-44" size="lg" variant="primary">
        Играть
      </UIButton>
      <button className="ml-auto flex items-center text-start gap-2 text-teal-600">
        <Profile />
        <ArrowDownIcon />
      </button>
    </header>
  );
}

export default Header;
