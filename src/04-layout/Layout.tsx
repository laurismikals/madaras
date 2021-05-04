import React, { useEffect } from 'react'
import { Route, Switch, Redirect, useLocation  } from 'react-router-dom';

import { HeaderMain } from '../03-organisms/HeaderMain/HeaderMain';
import { FooterMain } from '../03-organisms/FooterMain/FooterMain'
import { Home } from '../05-pages/Home'
import { Lake } from '../05-pages/Lake';
import { Services } from '../05-pages/Services'
import { Contacts } from '../05-pages/Contacts'

export const Layout = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="site__layout-wrap">
      <HeaderMain />
      <main id="main">
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/lake">
            <Lake />
          </Route>
          <Route path="/services">
            <Services />
          </Route>
          <Route path="/contacts">
            <Contacts />
          </Route>
          <Redirect to="/" />
        </Switch>
      </main>
      <FooterMain/>
    </div>
  );
};
