import React from 'react';
import { Switch, Route } from "react-router-dom";

// component
import {Test1} from "./../Test/Test1";
import {Test2} from "./../Test/Test2";


const Router = () => {
  return (
    <Switch>
      <Route path="/test1" exact component={Test1} />
      <Route path="/test2" exact component={Test2} />
    </Switch>
  )
}

export { Router };