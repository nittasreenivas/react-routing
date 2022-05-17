import { useParams } from "react-router-dom";
import { products } from "../Products";
export default function ProductDescription() {
  //  const location = useLocation();
  const params = useParams();
  // console.log("location",location)
  const product = products.find((item) => item.id === params.id);
  console.log("params", params);
  //  const product = location.state
  return (
    <div>
      <h3> Product Description </h3>
      <h4>{product.title} </h4>
      <p> {product.description} </p>
      <b> price: {product.price} </b>
    </div>
  );
}
