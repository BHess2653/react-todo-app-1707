import React, { Component } from 'react'
import './App.css'
import Header from '../components/header'
import ItemBar from '../components/itembar'
import ItemList from '../components/itemlist'

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6 col-md-offset-3">
            <Header />
            <ItemBar />
            <ItemList />
           </div>
          </div>
        </div>
    );
  }
}

export default App;
