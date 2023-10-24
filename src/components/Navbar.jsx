const Navbar = () => {
  return (
    <header className="flex items-center justify-between bg-black px-3 py-6 md:px-44">
      <a href="/"><h1 className="text-2xl font-bold text-white">Sohail <span className="p-1 bg-white text-black rounded-lg">Batoor</span></h1></a>
      <ul className="flex items-center justify-between text-white gap-14">
        <li>Home</li>
        <li>About</li>
        <li>Skills</li>
        <li>Portfolio</li>
        <li>Contact</li>
      </ul>
    </header>
  )
}

export default Navbar