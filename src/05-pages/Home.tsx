import React from 'react';

import { Image } from '../00-atoms/Image/Image';
import { Text } from '../00-atoms/Text/Text';
import { H1 } from '../00-atoms/Headings';

import { data } from '../data';

import './Home.css';

export const Home = () => (
  <article className="container">
    <div style={{ marginBottom: 40 }}>
      <H1>{data.pages.home.heading}</H1>
    </div>
    <div style={{ marginBottom: 20, maxWidth: 768 }}>
      <Text>
        {data.pages.home.text}
      </Text>
    </div>
    <div className="space-out">
      <div
        className="space-out__element"
        style={{
          width: '100%',
          maxWidth: '538px',
        }}
      >
        <Image
          src="/userfiles/krasaini_logo.jpg"
          x={1244}
          y={226}
          alt="EU logo"
        />
      </div>
      <div
        className="space-out__element"
        style={{
          width: '100%',
          maxWidth: '114px',
        }}
      >
        <Image
          src="/userfiles/leader.png"
          x={1}
          y={1}
          alt="Leader logo"
        />
      </div>
      <div
        className="space-out__element"
        style={{
          width: '100%',
          maxWidth: '234px'
        }}
      >
        <Image
          src="/userfiles/mnf_logo.png"
          x={229}
          y={101}
          alt="MNF logo"
        />
      </div>
    </div>
  </article>
);