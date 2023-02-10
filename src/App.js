import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header.js"
import Footer from "./components/Footer/Footer.js"
import { Container } from "@material-ui/core";
import Trending from "./Pages/Trending/Trending";
import Movies  from "./Pages/Movies/Movies";
import Series from "./Pages/Series/Series";
import Search from "./Pages/Search/Search";
import './App.css';



function App() {
  
  return (  
    <BrowserRouter>
      <Header />
      <div className="app">
        <Container>
          <Switch>
            <Route path="/" component={Trending} exact />
            <Route path="/movies" component={Movies} />
            <Route path="/series" component={Series} />
            <Route path="/search" component={Search} />
          </Switch>
        </Container>
      </div>
      <Footer />
    </BrowserRouter>
  
  );

}

export default App;
