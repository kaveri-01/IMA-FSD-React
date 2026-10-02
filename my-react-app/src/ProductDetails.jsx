import {useParams, useNavigate } from "react-router-dom";

function ProductDetails(){
    const {id} = useParams();
    const navigate = useNavigate();
    const products = [
        {
            id: 1,
            name: "Product 1",
            price: 10.99,
            images :"https://m.media-amazon.com/images/I/41KsebppJcL._AC_UL640_FMwebp_QL65_.jpg",
            description : "5G CONNECTIVITY: Stay connected at high speeds with 5G network support for seamless browsing and streaming."
        },
        {
            id: 2,
            name: "Product 2",
            price: 1029,
            images :"https://m.media-amazon.com/images/I/41KsebppJcL._AC_UL640_FMwebp_QL65_.jpg",
            description : "5G CONNECTIVITY: Stay connected at high speeds with 5G network support for seamless browsing and streaming."
        },
        {
            id: 3,
            name: "Product 3",
            price: 10699,
            images :"https://m.media-amazon.com/images/I/41KsebppJcL._AC_UL640_FMwebp_QL65_.jpg",
            description : "5G CONNECTIVITY: Stay connected at high speeds with 5G network support for seamless browsing and streaming."
        },
        {
            id: 4,
            name: "Product 4",
            price: 109,
            images :"https://m.media-amazon.com/images/I/41KsebppJcL._AC_UL640_FMwebp_QL65_.jpg",
            description : "5G CONNECTIVITY: Stay connected at high speeds with 5G network support for seamless browsing and streaming."
        },
        {
            id: 5,
            name: "Product 5",
            price: 1099,
            images :"https://m.media-amazon.com/images/I/41KsebppJcL._AC_UL640_FMwebp_QL65_.jpg",
            description : "5G CONNECTIVITY: Stay connected at high speeds with 5G network support for seamless browsing and streaming."
        }
    ];
  const product = products.find((product)=> product.id === Number(id));
  console.log(product,"product",id,"id")
  if (!product){
    return <h1> Product Not Found</h1>;
  }
  return (
    <div>
       <button onClick={()=> navigate(-1)}>
        Back
       </button>
       <h1>Product Details</h1>
       <img 
                src={product.images}
                alt= {product.name}
                width="300"/>
                <h2> {product.name}</h2>
                <p> {product.price}</p>
                <p> {product.description}</p>
                <button >Add To Cart</button>
    </div>
  )
}
export default ProductDetails