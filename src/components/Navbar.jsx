import { AiFillHome } from "react-icons/ai";
import { BiSolidUser, BiLogoReact } from "react-icons/bi";
import { SiWindows11 } from "react-icons/si";
import { BsFillChatTextFill } from "react-icons/bs";
import Switcher from "./Switcher"

const Navbar = () => {
  return (
    <header className="flex items-center justify-between bg-black dark:bg-white px-3 py-6 md:px-12 lg:px-44">
      <a href="/"><h1 className="text-[20px] md:text-2xl font-bold text-white dark:text-black">Sohail <span className="p-1 bg-white dark:bg-black text-black dark:text-white rounded-lg">Batoor</span></h1></a>
      <ul className="hidden lg:flex items-center justify-between text-white dark:text-black gap-14">
        <li className="font-bold">Home</li>
        <li className="font-bold">About</li>
        <li className="font-bold">Skills</li>
        <li className="font-bold">Portfolio</li>
        <li className="font-bold">Contact</li>
      </ul>
      <ul className="absolute left-1/2 transform translate-x-1/2 bottom-6 p-3" style="-webkit-transform: translateX(-50%)">
        <div className="flex items-center self-center gap-4">
          <li className="text-black text-xl"><AiFillHome /></li>
          <li className="text-black text-xl"><BiSolidUser /></li>
          <li className="text-black text-xl"><BiLogoReact /></li>
          <li className="text-black text-xl"><SiWindows11 /></li>
          <li className="text-black text-xl"><BsFillChatTextFill /></li>
        </div>
      </ul>
      <Switcher />
    </header>
  )
}

export default Navbar