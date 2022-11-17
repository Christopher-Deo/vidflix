import React from 'react';
import { Route, Routes} from "react-router-dom"
import Header from "./components/Header/Header.js"
import Footer from "./components/Footer/Footer.js"
import Container from '@mui/material/Container';
import Trending from "./Pages/Trending/Trending";
import { Movies } from "./Pages/Movies/Movies";
import Series from "./Pages/Series/Series";
import Search from "./Pages/Search/Search";
import './App.css';



function App() {
  
  return (  
      <div className="App">
        <Header />
        <Container>
          <Routes>
            <Route path="/" element={<Trending />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/series" element={<Series />} />
            <Route path="/search" element={<Search />} />
          </Routes>
        </Container>
        <Footer />
      
    </div>
  
  );

}

export default App;
