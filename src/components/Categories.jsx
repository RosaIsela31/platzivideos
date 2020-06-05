import React from 'react';
import './Categories.css'

const Categories = ({ children, title }) => (
  <div className="categories">
    <h3 class="categories__title">{title}</h3>
    {children}
  </div>
);

export default Categories;