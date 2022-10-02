import Product from "../../../components/Product.jsx/Product";
import { useRouter } from "next/router";

export default function ProductPage() {
  const router = useRouter();

  return <Product id={router.query.productId} />;
}
