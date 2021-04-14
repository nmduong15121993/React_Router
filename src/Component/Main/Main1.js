import React from 'react'

import {Link} from 'react-router-dom';

const Main1 = () => {
  return (
    <div>
      <h1>Day La Trang Main 1</h1>

      <Link to="/admin" >Back To Admin</Link>

      <h2>Test Router</h2>
    </div>
  )
}

export {Main1};