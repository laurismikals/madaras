import React, { FC } from 'react'

import './Text.css';

export const Text: FC<{ children: string; className?: string }> = ({children, className}) => (
  <div
    className={`text ${className ? className : null}`}
    dangerouslySetInnerHTML={{__html: children}}
  />
);
