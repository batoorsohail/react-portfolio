import Switcher from "./Switcher"

const Navbar = () => {
  return (
    <header className="flex items-center justify-between bg-black dark:bg-white px-3 py-6 md:px-12 lg:px-44">
      <a href="/"><h1 className="text-2xl font-bold text-white dark:text-black">Sohail <span className="p-1 bg-white dark:bg-black text-black dark:text-white rounded-lg">Batoor</span></h1></a>
      <ul className="hidden lg:flex items-center justify-between text-white dark:text-black gap-14">
        <li className="font-bold">Home</li>
        <li className="font-bold">About</li>
        <li className="font-bold">Skills</li>
        <li className="font-bold">Portfolio</li>
        <li className="font-bold">Contact</li>
      </ul>
      <Switcher />
    </header>
  )
}

export default Navbar