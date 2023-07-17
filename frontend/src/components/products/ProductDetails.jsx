// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";

// export default function ProductDetails() {
//   const [productDetail, setProductDetail]= useState([])
//   const {id}= useParams()
//   useEffect(() => {
//     axios
//       .get(`http://localhost:4000/api/products/productbyid/${id}`)
//       .then((res) => {
//         setProductDetail(res.data);
//       });
//   }, []);
//   return (
//     <div>
//       ProductDetails
//       {/* {productDetail.map((product,key)=>{

//       })} */}
//       {/* <div class="card mb-3" style="max-width: 540px;">
//         <div class="row g-0">
//           <div class="col-md-4">
//             <img src="..." class="img-fluid rounded-start" alt="..." />
//           </div>
//           <div class="col-md-8">
//             <div class="card-body">
//               <h5 class="card-title">Card title</h5>
//               <p class="card-text">
//                 This is a wider card with supporting text below as a natural
//                 lead-in to additional content. This content is a little bit
//                 longer.
//               </p>
//               <p class="card-text">
//                 <small class="text-body-secondary">
//                   Last updated 3 mins ago
//                 </small>
//               </p>
//             </div>
//           </div>
//         </div>
//       </div> */}
//     </div>
//   );
// }
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ProductDetailCard";
import ProductDetailCard from "./ProductDetailCard";

export default function ProductDetails() {
  const [productDetail, setProductDetail] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fetchProductDetails();
  }, []);

  const fetchProductDetails = async () => {
    try {
      const response = await axios.get(
        `http://localhost:4000/api/products/productbyid/${id}`
      );
      setProductDetail(response.data);
    } catch (error) {
      console.error("Error fetching product details:", error);
    }
  };

  return (
    <div className="container">
      <h1 className="my-4">Product Details</h1>
      <ProductDetailCard productDetail={productDetail} />
    </div>
  );
}
