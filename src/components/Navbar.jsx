import { AiFillHome } from 'react-icons/ai';
import { BiSolidUser, BiLogoReact } from 'react-icons/bi';
import { SiWindows11 } from 'react-icons/si';
import { BsFillChatTextFill } from 'react-icons/bs';
import Switcher from './Switcher';

const Navbar = () => (
  <header className="flex items-center justify-between bg-black dark:bg-white px-3 py-6 md:px-12 lg:px-44">
    <a href="/">
      <h1 className="text-[20px] md:text-2xl font-bold text-white dark:text-black">
        Sohail <span className="p-1 bg-white dark:bg-black text-black dark:text-white rounded-lg">Batoor</span>
      </h1>
    </a>
    <ul className="hidden lg:flex items-center justify-between text-white dark:text-black gap-14">
      <li className="font-bold">Home</li>
      <li className="font-bold">About</li>
      <li className="font-bold">Skills</li>
      <li className="font-bold">Portfolio</li>
      <li className="font-bold">Contact</li>
    </ul>
    <ul className="fixed custom-transform left-1/2 blur-bg-nav rounded-[3rem] bottom-6 px-[0.8rem] py-[0.6rem] lg:hidden">
      <div className="flex items-center gap-4">
        <li className="text-white active:bg-black rounded-full text-[1.3rem] p-[0.5rem]"><AiFillHome /></li>
        <li className="text-white active:bg-black rounded-full text-[1.3rem] p-[0.5rem]"><BiSolidUser /></li>
        <li className="text-white active:bg-black rounded-full text-[1.3rem] p-[0.5rem]"><BiLogoReact /></li>
        <li className="text-white active:bg-black rounded-full text-[1.3rem] p-[0.5rem]"><SiWindows11 /></li>
        <li className="text-white active:bg-black rounded-full text-[1.3rem] p-[0.5rem]"><BsFillChatTextFill /></li>
      </div>
    </ul>
    <Switcher />
  </header>
);

export default Navbar;
