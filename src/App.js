import React, { Component } from 'react';
import logo from './images/MTB_LOGO.png';
import photo from './images/Dashboard_Header.png';
//import { button } from 'react-native';
import './App.css';
import Header from './components/Header';



class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <button className="gptt" color="red" >GET PAID TO TRAVEL</button>
          <button className="byb">BUILD YOUR BUISNESS</button>
          <button className="a&i">AWARDS & INCENTIVES</button>
          <button className="amt">ABOUT MY TRAVELBIZ</button>
          <button className="tcf">TRAVELCOINFOUNDATION</button>

        </header>
        <Header/>
        <p className="App-intro">
          GET PAID TO TRAVEL
        </p>

        <img src={photo} className="app-photo" alt="photo" />
      </div>
    );
  }
}

export default App;
