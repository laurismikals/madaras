import React from 'react'

const Text = ({children, className}) => {
  return (
    <div
      className={`text ${className ? className : null}`}
      dangerouslySetInnerHTML={{__html: children}}
    />
  )
}

export default Text