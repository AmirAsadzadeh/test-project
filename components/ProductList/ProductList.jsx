import Link from "next/link";
import React from "react";
import { useEffect, useState } from "react";
import useHttp from "../../hooks/use-http";
import ProductItem from "../ProductItem/ProductItem";
import Spinner from "../UI/Spinner";
import styles from "./ProductList.module.css";

export default function ProductList() {
  const { data, hasError, error, isLoading } = useHttp(
    "https://dummyjson.com/products"
  );

  const itemsContainer =
    !hasError && data.products && data.products.length > 0
      ? data.products.map((item) => (
          <ProductItem
            id={item.id}
            title={item.title}
            key={item.id}
            imgSrc={item.thumbnail}
            description={item.description}
          />
        ))
      : !hasError && data.products && data.products.length === 0
      ? "Products list is empty"
      : "";

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Products</h2>
      <ul className={styles.list}>{!hasError ? itemsContainer : error}</ul>
      {isLoading && <Spinner />}
    </div>
  );
}
