import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Signin from './components/Signin'
import {Contenedor} from './components/Contenedor'
function App() {
  return (
    <>
        <Router>


<Route exact path="/" component={Signin}/>
<Route exact path="/contenedor" component={Contenedor}/>
</Router>
      
    </>
  );
}

export default App;
