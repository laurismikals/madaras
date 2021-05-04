import React, {ImgHTMLAttributes, useState} from 'react';

import './Image.css';

interface ImageProps extends Pick<ImgHTMLAttributes<HTMLImageElement>, 'className' | 'src' | 'alt'> {
  x: number;
  y: number;
}

export const Image = ({ className, x, y, src, alt }: ImageProps) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <figure
      className={`
        ${className ? className : ''}
        image
        ${x && y ? 'image--aspect' : ''}
        ${loaded ? 'image--loaded' : 'image--loading'}
      `}
      style={x && y ? {padding: `0 0 ${y * 100 / x}% 0`} : {}}
    >
      <img
        loading="lazy"
        src={src}
        alt={alt}
        onLoad={() => setLoaded(true)}
      />
      <span className="image__loading-animation"/>
    </figure>
  );
};