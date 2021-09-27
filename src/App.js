import React, { Component } from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'




import Header from "./components/header/Header";
import CardBody from './components/body/CardBody.js';


class App extends Component {
  render() {

    return(
      <div className="App">
           <Header />
           <CardBody />
      </div>
    );
    
  }
}

export default App;
