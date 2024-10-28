import Image from "next/image";
import Logo from "./logo.svg";
import { Profile } from "../profile";
import ArrowDownIcon from "./icons/ArrowDownIcon";

function Header() {
  return (
    <header className="flex h-24 items-center px-8 bg-white shadow-lg">
      <Image src={Logo} alt="Logo" />
      <div className="w-px h-8 bg-slate-200 mx-6"></div>
      <button className="w-44 bg-teal-600 text-white rounded-lg px-5 py-2 text-2xl leading-tight transition-colors hover:bg-teal-500">
        Играть
      </button>
      <button className="ml-auto flex items-center text-start gap-2 text-teal-600">
        <Profile />
        <ArrowDownIcon />
      </button>
    </header>
  );
}

export default Header;
