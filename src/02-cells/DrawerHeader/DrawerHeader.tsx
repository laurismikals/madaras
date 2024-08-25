import React, { ReactNode } from 'react';

import './DrawerHeader.css';

interface DrawerHeaderProps {
  children: ReactNode;
  id: string;
  isVisible: boolean;
  onClose: () => void;
}

export const DrawerHeader = ({ children, id, isVisible, onClose }: DrawerHeaderProps) => (
  <div
    className="drawer-header"
    id={id}
    aria-hidden={isVisible}
  >
    <div className="drawer-header__scroll">
      {children}
    </div>
    <div
      className="drawer-header__close"
      onClick={onClose}
    />
  </div>
);