import React from 'react'

export default function CategoryCard({category}) {
  return (
    <div className="card">
    <img src={category.imageUrl} alt={category.imageUrl} />
    <h3>{category.categoryName}</h3>
    </div>
  )
}
