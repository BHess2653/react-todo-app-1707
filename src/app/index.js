import React, { Component } from 'react'
import Header from '../components/Header'
import ItemBar from '../components/ItemBar'
import ItemList from '../components/ItemList'

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
