import React from 'react'
import { useHistory } from "react-router-dom";
import {
  Switch,
  Route,
  Link
} from "react-router-dom";
import {Main3} from './Main3';
import {Main4} from './Main4';
// import {Test1} from './Test1';
// import {Main1} from './Main1';

const Main = () => {
  let history = useHistory();
  const handleClick = () => {
    history.replace("/main1");
  }
  return (

        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/main3">Main 3</Link>
            </li>
            <li>
              <Link to="/main4">Main 4</Link>
            </li>
            <li>
              <Link to="/api/test1">Test 1</Link>
            </li>
            <li>
              <button
               onClick={handleClick}>
                Nhap Vao Toi
              </button>
            </li>
            {/* <li>
              <Link to="/main1">Main 1</Link>
            </li> */}
          </ul>
  
          <hr />
  
          <Switch>
            <Route path="/main3">
              <Main3 />
            </Route>
            <Route path="/main4">
              <Main4 />
            </Route>
            {/* <Route path="/api/test1" exact component={Test1} />
            <Route path="/main1" exact component={Main1} /> */}
          </Switch>
        </div>

  )
}

export {Main};
