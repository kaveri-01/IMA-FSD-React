import { useNavigate } from "react-router-dom";

function Products() {
  const navigate = useNavigate();
  const products = [
    {
      id: 1,
      name: "Product 1",
      price: 10.99,
      images:
        "https://m.media-amazon.com/images/I/41KsebppJcL._AC_UL640_FMwebp_QL65_.jpg",
    },
    {
      id: 2,
      name: "Product 2",
      price: 1029,
      images:
        "https://m.media-amazon.com/images/I/41KsebppJcL._AC_UL640_FMwebp_QL65_.jpg",
    },
    {
      id: 3,
      name: "Product 3",
      price: 10699,
      images:
        "https://m.media-amazon.com/images/I/41KsebppJcL._AC_UL640_FMwebp_QL65_.jpg",
    },
    {
      id: 4,
      name: "Product 4",
      price: 109,
      images:
        "https://m.media-amazon.com/images/I/41KsebppJcL._AC_UL640_FMwebp_QL65_.jpg",
    },
    {
      id: 5,
      name: "Product 5",
      price: 1099,
      images:
        "https://m.media-amazon.com/images/I/41KsebppJcL._AC_UL640_FMwebp_QL65_.jpg",
    },
  ];
  console.log(products,"products")
  return (
    <div>
      <h1> Products</h1>
      {products.map((product) => (
        <div key={product.id}>
          <img src={product.images} alt={product.name} width="200" />
          <h2> {product.name}</h2>
          <p> {product.price}</p>
          <button onClick={() => navigate(`/products/${product.id}`)}>
            view Details
          </button>
        </div>
      ))}
    </div>
  );
}
export default Products;
