import React from 'react'

import { Text } from '../00-atoms/Text/Text'
import { H1, H2 } from '../00-atoms/Headings';

import { data } from '../data';

export const Services = () => (
  <article className="container">
    <div style={{ maxWidth: 878 }}>
      <div style={{ marginBottom: 40 }}>
        <H1>{data.pages.services.heading}</H1>
      </div>
      {data.pages.services.services.map((service) => (
        <div key={service.heading} style={{ marginBottom: 40 }}>
          <div style={{ marginBottom: 20 }}>
            <H2>{service.heading}</H2>
          </div>
          <Text>
            {service.text}
          </Text>
        </div>
      ))}
    </div>
  </article>
)