import React from 'react'

import PropsTypes from 'prop-types'

const Button = ({text,color,onClick}) => {
  return (
    <div>
      <button className='btn'  onClick={onClick} style={{backgroundColor:color}}>
        {text}
      </button>
    </div>
  )
}

Button.defaultProps = {
    color : "black",
    text : "Add",
}

Button.propTypes = {
    text : PropsTypes.string,
    color : PropsTypes.string,
    onClick : PropsTypes.func,
}

export default Button
