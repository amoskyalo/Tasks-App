import React from 'react'

const Button = ( {text, color, clickFunc} ) => {
  return <button onClick={clickFunc} style={ {backgroundColor: color} } className="btn">{text}</button>
}

export default Button