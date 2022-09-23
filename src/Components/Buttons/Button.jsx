import React from 'react'

const Button = ( {text, color, clickFunc, className} ) => {
  return <button onClick={clickFunc} style={ {backgroundColor: color} } className={className}>{text}</button>
}

export default Button