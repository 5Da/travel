import React, { Component } from 'react'
import './app.css'
import Footer from './Components/Footer/Footer'
import Home from './Components/Home/Home'
import Main from './Components/Main/Main'
import Navbar from './Components/Navbar/Navbar'
export class App extends Component {
  render() {
    return (
      <>
      <Navbar/>
      <Home/>
      <Main/>
      <Footer/>
      </>
    )
  }
}

export default App