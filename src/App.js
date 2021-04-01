import React from 'react';

import { BrowserRouter as Router, Route } from "react-router-dom";

import {Main} from './Component/Main';
import {Test} from './Component/Test';
import {Main1} from './Component/Main1';
import {Main2} from './Component/Main2';

const App = () => {
  return (
    <Router>
      <Main />
      <Route path="/test" exact component={Test} />
      <Route path="/main1" exact component={Main1} />
      <Route path="/main2" exact component={Main2} />
    </Router>

  )
}

export default App;
