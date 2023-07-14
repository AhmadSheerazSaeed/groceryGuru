// import React from 'react'
// import "./CategoryCard.css";
// export default function CategoryCard({category}) {
//   return (
//     <div className="card">
//     <img src={category.imageUrl} className="card-img-top"  alt={category.imageUrl} />
//       <div className="card-body">
//       <h3 className="card-title">{category.categoryName}</h3>
//       </div>
//     </div>
//   )
// }

import React from "react";

import "./CategoryCard.css";
import { Link } from "react-router-dom";

export default function CategoryCard({ category }) {
  return (
    <>
      <div className="card">
        <img src={category.imageUrl} className="card-img-top" alt="..." />
        {/* <img src={berebere} className="card-img-top" alt="..." /> */}
        <div className="card-body">
          <h5 className="card-title">{category.categoryName}</h5>
          <p className="card-text"></p>
          <Link
            to={`/categories/${category._id}`}
            className="btn btn-primary"
            style={{ backgroundColor: "#F39317", borderColor: "#F39317" }}
          >
            click
          </Link>
        </div>
      </div>
    </>
  );
}
