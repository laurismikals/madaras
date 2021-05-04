import React, { FC } from 'react';

import './DrawerHeader.css';

interface DrawerHeaderProps {
  id: string;
  isVisible: boolean;
  onClose: () => void;
}

export const DrawerHeader: FC<DrawerHeaderProps> = ({ children, id, isVisible, onClose }) => (
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