import React, {Component}  from 'react';
import logo, { ReactComponent } from './logo.png';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Search from './component/search-component'

class App extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return(
    <div className="App">
      <header className="App-header">
      <img src={logo} className="App-logo"/>
        <Search />
      </header>
    </div>
    )
  }
}

export default App;
