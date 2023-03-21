import React from 'react'
import {Link} from 'react-router-dom'

function Footer() {
  return (
    <div>
      <p>Copyright &copy 2023</p>
      <Link to="/about">About</Link>
    </div>
  )
}

export default Footer
