import React from 'react';
import Header from './components/Header';
import Search from './components/Search';
import Categories from './components/Categories';
import Carousel from './components/Carousel';
import CarouselItem from './components/CarouselItem';
import Footer from './components/Footer';

import './App.css';

function App() {
  return (
    <div >
      <Header />
      <Search />

      <Categories title="Mi Lista">
        <Carousel>
          <CarouselItem />
          <CarouselItem />
          <CarouselItem />
          <CarouselItem />
        </Carousel>
      </Categories>

      <Categories title="Tendencias">
        <Carousel>
          <CarouselItem />
          <CarouselItem />
        </Carousel>
      </Categories>

      <Categories title="Originales de la plataforma">
        <Carousel> 
          <CarouselItem />
        </Carousel>
      </Categories>

      <Footer />
    </div>
  );
}

export default App;
