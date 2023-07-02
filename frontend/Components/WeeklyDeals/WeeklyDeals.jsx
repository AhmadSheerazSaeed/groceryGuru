
import { productData } from "../../productData.js";
import Card from "./Card/Card.jsx";

export default function WeeklyDeals() {
  return (
    <div className="row" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' , margin:'0 15rem' }}>
      <h1  style={{ margin: '20px auto', textAlign: 'center' }}>Weekly Deals </h1>
      {productData.map((product, key) => (
        <div className="col-sm-4" key={key} style={{ marginBottom: '20px' }}>
          <Card product={product} />
        </div>
      ))}
    </div>
  );
}
