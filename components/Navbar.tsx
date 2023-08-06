'use client';

import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

import logoLight from '@import/public/assets/logo-light.svg';
import logoDark from '@import/public/assets/logo-dark.svg';

interface board {
  id: string;
  name: string;
}
interface RootState {
  kanban: {
    boards: board[];
  };
}

type NavbarPropType = {
  sidebarOpen: boolean;
};

const Navbar = ({ sidebarOpen }: NavbarPropType) => {
  const location = usePathname();
  const [heading, setHeading] = useState('');
  const boardState = useSelector((state: RootState) => state.kanban.boards);

  useEffect(() => {
    if (location === '/') {
      setHeading('Boards');
    } else {
      const boardId = location.slice(1);
      const boardIdx = boardState.findIndex(
        (board: board) => board.id === boardId
      );
      if (boardIdx > -1) {
        setHeading(boardState[boardIdx]?.name);
      }
    }
  }, [location]);

  return (
    <nav className="flex items-center justify-between w-full fixed top-0 right-0 left-0 z-1 h-[97px] px-[24px] bg-white dark:bg-darkGrey divide-x">
      <div
        className="logo-container pr-[32px] h-full w-[185px] flex items-center"
        style={sidebarOpen ? { width: '276px' } : {}}
      >
        <Image src={logoDark} alt="logo" className="dark:hidden" />
        <Image src={logoLight} alt="logo" className="hidden dark:block" />
      </div>
      <div className="navbar-content-container flex flex-1 flex-row justify-between items-center pl-[32px] h-full">
        <h1 className="font-bold text-3xl leading-3xl text-black dark:text-white">
          {heading}
        </h1>
        <button className="bg-mainPurple h-[48px] px-[24px] rounded-[24px] text-white text-xl font-bold">
          + Add New Task
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
