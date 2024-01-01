import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"; 
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import Cart from "./Cart";
import Products from "./Products";
import SingleProduct from "./SingleProduct";
import GlobalStyle from "./GlobalStyle";
import { ThemeProvider } from "styled-components";
const App = () => {
  
  const theme ={

    colors: {

      bg: "#4287f5",
    }
  };
  
  return (

    

<ThemeProvider theme = {theme}>
    <Router>
      <GlobalStyle/>
      <Routes>
        <Route path = "/" element = {<Home/>}/>
        <Route path = "/About" element = {<About/>}/>
        <Route path = "/Contact" element = {<Contact/>}/>
        <Route path = "/Cart" element = {<Cart/>}/>
        <Route path = "/Product" element = {<Products/>}/>
        <Route path = "/SingleProduct/:id" element = {<SingleProduct/>}/>
      </Routes>
    </Router>
    </ThemeProvider>
  )
};

export default App;
