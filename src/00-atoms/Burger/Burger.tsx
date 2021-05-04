import React from 'react';

import './Burger.css';

interface BurgerProps {
  id: string;
  navOpened: boolean;
  onClick: () => void;
}

export const Burger = ({ id, navOpened, onClick }: BurgerProps) => (
  <button
    className="burger js-burger"
    aria-label="Atvērt navigāciju"
    aria-controls={`#${id}`}
    aria-expanded={navOpened}
    onClick={onClick}
  >
    <span className="burger__flex">
      <span className="burger__bars">
        <span className="burger-bar burger-bar--1"/>
        <span className="burger-bar burger-bar--2"/>
        <span className="burger-bar burger-bar--3"/>
      </span>
    </span>
  </button>
);
