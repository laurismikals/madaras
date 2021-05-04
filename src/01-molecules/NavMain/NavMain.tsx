import React from 'react';
import { NavLink } from 'react-router-dom';

import './NavMain.css';

const data = [
  { url: '/', heading: 'Sākums' },
  { url: '/lake', heading: 'Kāla ezers' },
  { url: '/services', heading: 'Pakalpojumi' },
  { url: '/contacts', heading: 'Kontakti' },
];

interface NavMainProps {
  onClick: () => void;
}

export const NavMain = ({ onClick }: NavMainProps) =>(
  <nav className="nav-main">
    <ul className="nav-main__list">
      {data.map(({ url, heading }) => (
        <li key={url} className="nav-main__item">
          <NavLink
            to={url}
            exact
            activeClassName="active"
            className="nav-main__link"
            onClick={onClick}
          >
            {heading}
          </NavLink>
        </li>
      ))}
    </ul>
  </nav>
);