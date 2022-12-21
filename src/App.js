import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Signin from './components/Signin'
import Signup from  './components/Signup'
//import {Contenedor} from './components/Contenedor'
import MenuComponent from './components/MenuComponent/MenuComponent'
import LastDocuments  from './components/LastDocuments/LastDocuments'
import FinanciationComponent from './components/FinanciatonComponent/FinanciationComponent';
function App() {
  return (
    <>
        <Router>


<Route exact path="/" component={Signin}/>
<Route exact path="/register" component={Signup}/>

<Route exact path="/contenedor" component={MenuComponent}/>
<Route exact path="/programas" component={LastDocuments}/>
<Route exact path="/financiation" component={FinanciationComponent}/>

</Router>
      
    </>
  );
}

export default App;
