import React, { Component } from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import Login from "./components/Login";

class App extends Component {
  render() {
    return (
      <div className="App">
          <BrowserRouter>
              <Route path="/login" component={Login}/>
          </BrowserRouter>
      </div>
    );
  }
}

export default App;
