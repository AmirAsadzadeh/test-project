import Link from "next/link";
import styles from "./ProductItem.module.css";

export default function ProductItem(props) {
  return (
    <li className={styles.item}>
      <picture className={styles.picture}>
        <source srcSet={props.imgSrc} type="image/webp" />
        <img src={props.imgSrc} alt={props.title} />
      </picture>
      <div className={styles["desc-container"]}>
        <h3>{props.title}</h3>
        <p>{props.description}</p>
        <Link href={`/products/${props.id}`}>more info ...</Link>
      </div>
    </li>
  );
}
