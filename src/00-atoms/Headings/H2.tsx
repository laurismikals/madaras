import React, { FC, HTMLAttributes } from 'react';
import cn from 'classnames';

import './Headings.css';

export const H2: FC<HTMLAttributes<HTMLHeadingElement>> = ({ children, className }) => (
  <h2 className={cn(className, 'heading-two')}>
    {children}
  </h2>
);