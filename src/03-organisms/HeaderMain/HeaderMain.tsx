import React, { useState } from 'react';

import { LogoMain } from '../../01-molecules/LogoMain/LogoMain';
import { NavMain } from '../../01-molecules/NavMain/NavMain';
import { Burger } from '../../00-atoms/Burger/Burger';
import { DrawerHeader } from '../../02-cells/DrawerHeader/DrawerHeader';

import './HeaderMain.css';

export const HeaderMain = () => {
  const [navOpened, setNavOpened] = useState(false);

  return(
    <header className="header-main">
      <div className="container header-main__container">
        <div className="header-main__flex">
          <LogoMain />
          <Burger
            navOpened={navOpened}
            onClick={() => setNavOpened(!navOpened)}
            id="nav"
          />
          <DrawerHeader
            id="nav"
            isVisible={!navOpened}
            onClose={() => setNavOpened(false)}
          >
            <NavMain
              onClick={() => setNavOpened(false)}
            />
          </DrawerHeader>
        </div>
      </div>
    </header>
  );
}