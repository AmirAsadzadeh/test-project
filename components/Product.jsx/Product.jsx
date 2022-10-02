import { useEffect, useState } from "react";
import styles from "./Product.module.css";
import useHttp from "../../hooks/use-http";
import { useRouter } from "next/router";

export default function Product(props) {
  const router = useRouter();
  const { data, hasError, error, isLoading } = useHttp(
    `https://dummyjson.com/products/${router.query.productId}`
  );

  return (
    <div className={styles.container}>
      <article className={styles["item-container"]}>
        <h1 className={styles.title}>{data.title}</h1>
        <div className={styles.content}>
          <figure className={styles.img}>
            <picture>
              <img src={data.thumbnail} alt={data.title} />
            </picture>
          </figure>
          <section className={styles["description-container"]}>
            <h3>Product Description:</h3>
            <p className={styles.descrtiption}>{data.description}</p>
            <div className={styles["more-info"]}>
              <span className={styles.price}>
                <b>price:</b> {data.price}
              </span>
              <span className={styles.discount}>
                <b>discount:</b> {data.discountPercentage}
              </span>
              <span className={styles.rating}>
                <b>rate:</b> {data.rating}
              </span>
              <span className={styles.brand}>
                <b>brand:</b> {data.brand}
              </span>
            </div>
          </section>
        </div>
      </article>
    </div>
  );
}
