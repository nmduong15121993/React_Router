import React from 'react'

import {Link, useLocation} from 'react-router-dom';

const Main3 = () => {

  let location = useLocation();

  console.log(location);

  React.useEffect(() => {
    console.log("Did mount");
    document.title = "Main 3";
    
    return () => {
      console.log("Will UnMount");
      document.title = "Trang Chu";
    };
  }, []);

  return (
    <div>
      <h1>Day La Trang Main 3</h1>
      <Link to="/" >Back To Main</Link>
    </div>
  )
}

export {Main3};