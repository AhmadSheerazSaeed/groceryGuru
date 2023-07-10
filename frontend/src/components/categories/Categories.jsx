import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Categories = ({ onSelectCategory }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get('/api/category');
        setCategories(response.data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <div className="row">
      <h2>Categories</h2>
      {categories.map((category) => (
        <div className="col-md-3" key={category._id} onClick={() => onSelectCategory(category._id)}>
          <div className="card">
            <img src={category.imageUrl} className="card-img-top" alt={category.name} />
            <div className="card-body">
              <h5 className="card-title">{category.name}</h5>
              <p className="card-text">{category.details}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Categories;
