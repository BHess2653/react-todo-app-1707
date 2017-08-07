import React, { Component } from 'react'
import Header from '../components/header'
import ItemBar from '../components/itembar'
import ItemList from '../components/itemlist'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <ItemBar />
        <ItemList />
      </div>
    );
  }
}

export default App;
