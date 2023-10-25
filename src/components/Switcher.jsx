import React, { useState, useEffect } from 'react';

const Switcher = () => {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    if(window.matchMedia('(prefers-color-scheme: black)').matches){
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, [])
  
  useEffect(() => {
    if (theme === "dark"){
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [theme])

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  }

  return (
    <button type="button" onClick={handleThemeSwitch} className="px-2 py-1 bg-white dark:bg-black dark:text-white rounded-lg">Change Theme</button>
  )
}

export default Switcher