import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";

// component 
import {Login} from "./Component/Login/Login";
import { Admin } from "./Component/Admin/Admin";
import {Main1} from "./Component/Main/Main1";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/login" exact>
          <Login/> 
        </Route>

      <Route path="/main1" exact component={Main1} />


        <Route 
          path="/" 
          render={() => {return localStorage.getItem("checkLogin") 
          ? <Admin/> 
          : <Redirect to="/login" />
            }
          } 
        >
        </Route>

      </Switch>
    </Router>
  )
}
export default App;
