import React, { FC, HTMLAttributes } from 'react';
import cn from 'classnames';

import './Headings.css';

export const H1: FC<HTMLAttributes<HTMLHeadingElement>> = ({ children, className }) => (
  <h1 className={cn(className, 'heading-one')}>
    {children}
  </h1>
);