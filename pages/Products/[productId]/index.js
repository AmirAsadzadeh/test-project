import { useRouter } from "next/router";

function Product() {
  const router = useRouter();

  console.log(router.query);

  return <h1>product id {router.query.productId}</h1>;
}

export default Product;
