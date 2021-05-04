import React from 'react'

import { H1, H2 } from '../00-atoms/Headings'
import { Text } from '../00-atoms/Text/Text'

import { data } from '../data';

import './Contacts.css';

export const Contacts = () => (
  <article className="container">
    <div style={{ marginBottom: 40 }}>
      <H1>{data.pages.contacts.heading}</H1>
    </div>
    <div style={{ marginBottom: 20 }}>
      <H2>{data.pages.contacts.address.heading}</H2>
    </div>
    <div style={{ marginBottom: 40 }}>
      <Text>{data.pages.contacts.address.text}</Text>
    </div>
    <div style={{ marginBottom: 20 }}>
      <H2>{data.pages.contacts.hosts.heading}</H2>
    </div>
    <div className="grid">
      {data.pages.contacts.hosts.hosts.map((host)=>{
        return(
          <div key={host.phone}>
            <div style={{ marginBottom: 40 }}>
              <div className="text">
                <p dangerouslySetInnerHTML={{__html: host.name}} />
                <p><strong>E-pasts:</strong> <a href={`mailto:${host.email}`}>{host.email}</a></p>
                <p><strong>Telefons:</strong> <a href={`tel:${host.phone}`}>{host.phone}</a></p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
    <div style={{ marginBottom: 20 }}>
      <H2>{data.pages.contacts.requisites.heading}</H2>
    </div>
    <div style={{ marginBottom: 40 }}>
      <Text>
        {data.pages.contacts.requisites.text}
      </Text>
    </div>
  </article>
)