import React from 'react'

import Text from '../00-atoms/text/text'

export default ({data, lang}) => {
  const {heading, text} = data

  return (
    <article className="container">
      <h1 className="heading-one width-100 bottom-margin--20">{heading[lang]}</h1>
      <Text>
        {text[lang]}
      </Text>
    </article>
  )
}
