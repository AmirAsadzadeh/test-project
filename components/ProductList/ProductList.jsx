import Link from "next/link";
import React from "react";
import { useEffect, useState } from "react";
import ProductItem from "../ProductItem/ProductItem";
import Spinner from "../UI/Spinner";
import styles from "./ProductList.module.css";

export default function ProductList() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const getData = async function () {
      setIsLoading(true);

      const response = await fetch("https://dummyjson.com/products");

      setIsLoading(false);

      if (!response.ok) {
        setHasError(true);
        setError("Something Went Wrong, try again");
      }

      const data = await response.json();

      setItems(data.products.slice(0, 10));
    };

    getData();
  }, []);

  let itemsContainer =
    items.length > 0
      ? items.map((item) => (
          <ProductItem
            id={item.id}
            title={item.title}
            key={item.id}
            imgSrc={item.thumbnail}
            description={item.description}
          />
        ))
      : "Product List is Empty";

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Products</h2>
      <ul className={styles.list}>{!hasError ? itemsContainer : error}</ul>
      {isLoading && <Spinner />}
    </div>
  );
}
