import React from 'react';
import { useHistory } from 'react-router-dom';
import { Link} from "react-router-dom";
import { Router } from './Routes';

class Admin extends React.PureComponent {
  render() {
    console.log('hiii');
    return (
      <div>
            {/* <button onClick={onHandleLogout} > Logout </button> */}
            <button> Logout </button>
            <h1>Admin Page</h1>

          <ul>
            <li>
              <Link to="/test1">Test 1</Link>
            </li>
            <li>
              <Link to="/test2">Test 2</Link>
            </li>

            <li>
              <Link to="/main1">Main</Link>
            </li>

          </ul>    
          <Router />       

        </div>
    )
  }
}

// const Admin = React.memo((props) => {
//     let history = useHistory();

//     const onHandleLogout = () => {
//       localStorage.removeItem("checkLogin");
//       history.replace("/");
//     };

//     console.log('render')

//     return (
        
//     )
// })

export {Admin};
