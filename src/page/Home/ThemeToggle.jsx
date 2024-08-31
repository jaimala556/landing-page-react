import React, { useEffect, useState } from 'react';

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const currentTheme = localStorage.getItem('color-theme');
    if (currentTheme === 'dark' || (!currentTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setIsDarkMode(true);
      document.documentElement.classList.toggle('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = isDarkMode ? 'light' : 'dark';
    setIsDarkMode(!isDarkMode);
    localStorage.setItem('color-theme', newTheme);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <label className="inline-flex items-center cursor-pointer">
       <span className="">Dark mode</span>
      <input
        type="checkbox"
        className="sr-only peer"
        checked={isDarkMode}
        onChange={toggleTheme}
      />
      <div className={`relative w-9 h-5 ml-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600`}></div>
     
    </label>
  );
};

export default ThemeToggle;
