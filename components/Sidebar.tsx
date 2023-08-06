"use client";

import Toggle from 'react-toggle';
import { useTheme } from "next-themes";
import { useEffect, useState } from 'react';

import 'react-toggle/style.css';
import './sidebar.css';

const Sidebar = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, [])
  
  const themeChangeHandler = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

  if (!mounted) {
    return null;
  }

  return (
    <div className="flex flex-col fixed top-[97px] left-0 bottom-0 w-[300px] z-1 bg-white pr-[24px]">
      <div className="boards-list overflow-auto">
        <p className="uppercase pl-[24px] text-[#828FA3] font-[700]">
          all boards
        </p>
        {/* Place all the boards here */}
      </div>
      <div className="absolute bottom-0 left-0 right-0 pb-[47px]">
        <div className="px-[24px] bg-[#F4F7FD] flex justify-center">
          <div></div>
          <Toggle
            checked={theme === 'dark'}
            onChange={themeChangeHandler}
            icons={false}
          />
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
