import React from 'react'

import {Link} from 'react-router-dom';


const Main = () => {
  return (
    <div>
      <h1> Day la trang Main</h1>
      <Link to="/test" >Link to Test</Link>
      <br/>

      <Link to="/main1" >Sang Main 1</Link>
      <br/>

      <Link to="/main2" >Sang Main 2</Link>

    </div>
  )
}

export {Main};
