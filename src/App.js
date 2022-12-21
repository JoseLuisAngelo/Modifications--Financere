import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Signin from './components/Signin'
//import {Contenedor} from './components/Contenedor'
import MenuComponent from './components/MenuComponent/MenuComponent'
import Signup from  './components/Signup'
function App() {
  return (
    <>
        <Router>


<Route exact path="/" component={Signin}/>
<Route exact path="/register" component={Signup}/>
<Route exact path="/contenedor" component={MenuComponent}/>
</Router>
      
    </>
  );
}

export default App;
