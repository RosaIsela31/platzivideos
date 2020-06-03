import React from 'react';
import './Search.css';

const Search = () => (
  <section className="main">
    <h2 className="main__title">¿Qué quieres hoy?</h2>
    <input type="text" class="input" placeholder="Buscar..." />
  </section>
);

export default Search;