import "./styles.css";
import { Link } from "react-router-dom";
export const products = [
  {
    id: 1,
    title: "Iphone",
    description: "description about Iphone",
    price: "1,00,000"
  },
  {
    id: 2,
    title: "Samsung",
    description: "description about Samsung",
    price: "60,000"
  },
  {
    id: 3,
    title: "Nokia",
    description: "description about Nokia",
    price: "50,000"
  },
  {
    id: 4,
    title: "Vivo",
    description: "description about Vivo",
    price: "30,000"
  }
];
export default function Products() {
  const productElements = products.map((item) => {
    return (
      <ul className="products-list">
        <li key={item.id}>
          <Link to={`/products/${item.id}`} state={item}>
            <h3> {item.title} </h3>
            <p> {item.description} </p>
            <b> price: {item.price} </b>
          </Link>
        </li>
      </ul>
    );
  });
  return <div>{productElements}</div>;
}
