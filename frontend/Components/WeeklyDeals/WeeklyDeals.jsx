import { productData } from "../../productData.js";
import Card from "./Card/Card.jsx";

export default function WeeklyDeals() {
  return (
    <>
      <h1 style={{ margin: "20px auto", textAlign: "center" }}>
        Weekly Deals{" "}
      </h1>
      <div
        className="row row-cols-1 row-cols-md-3 g-4"
        style={{
          display: "flex",
          flexWrap: "wrap",
          width: '100%',
          alignItems:"center"
        }}
      >
        {productData.map((product, key) => (
          <div className="col" key={key} >
            <Card product={product} />
          </div>
        ))}
      </div>
    </>
  );
}
