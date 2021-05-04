import React from 'react'

import { Image } from '../00-atoms/Image/Image'
import { Text } from '../00-atoms/Text/Text'
import { H1 } from '../00-atoms/Headings';

import { data } from '../data';

export const Lake = () => (
  <article className="container">
    <div style={{ maxWidth: 768 }}>
      <div style={{ marginBottom: 40 }}>
          <H1>{data.pages.lake.heading}</H1>
      </div>
      <div style={{ marginBottom: 20 }}>
        <Text>
          {data.pages.lake.text}
        </Text>
      </div>
      <Image
        src="/userfiles/kala_karte.png"
        x={972}
        y={928}
        alt="Kāla karte"
      />
    </div>
  </article>
);