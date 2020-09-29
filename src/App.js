// import React from 'react';

// import logo from './logo.svg';
// import './App.css';
// import Container from './components/Container';
// import { Router, Switch, Route } from "react-router-dom";
// import history from "./components/history";
// import PayPage from "./components/PayPage/PayPage";


// function App() {
//   return (
//     <div className="App">

//       <Router>
//                     <Switch>
//                       <Route exact path = "/" component = { Container} ></Route>
//                         <Route path="/PayPage" component = {PayPage}></Route> 

//                         </Switch>
//                 </Router>

//     </div>
//   );
// }

// export default App;



import React from 'react';
import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LogIn from './components/LogIn/LogIn';
import Container from './components/Container';
import PayPage from "./components/PayPage/PayPage";



function App() {
  return (
    <div className="App">
      <Router>
        <div>
          {/* <h2>Welcome to React Router Tutorial</h2> */}
          {/* <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul className="navbar-nav mr-auto">
            <li><Link to={'/'} className="nav-link"> LogIn </Link></li>
            <li><Link to={'/container'} className="nav-link">Container</Link></li>
           
          </ul>
          </nav> */}

          <Switch>
            <Route exact path='/' component={LogIn} />
            <Route path='/container' component={Container} />
            <Route path="/PayPage" component={PayPage}></Route>


          </Switch>
        </div>
      </Router>

    </div>
  );
}

export default App;