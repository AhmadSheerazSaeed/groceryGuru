import { productData } from "../../productData.js";
import Card from "./Card/Card.jsx";

export default function WeeklyDeals() {
  return (
    <>
      <h1 style={{ margin: "20px auto", textAlign: "center" }}>
        Weekly Deals{" "}
      </h1>
      <div
        className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4"
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          margin: "0 15rem",
        }}
      >
        {productData.map((product, key) => (
          <div className="col" key={key} style={{ marginBottom: "20px" }}>
            <Card product={product} />
          </div>
        ))}
      </div>
    </>
  );
}
