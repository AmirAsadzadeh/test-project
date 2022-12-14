import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./Navigation.module.css";

function Navigation() {
  const router = useRouter();

  return (
    <ul className={styles["nav-bar"]}>
      <Link href="/">
        <li
          className={`
          ${styles["nav-item"]} 
          ${router.pathname === "/" && styles.active}
        `}
        >
          Home Page
        </li>
      </Link>
      <Link href="/products">
        <li
          className={`
            ${styles["nav-item"]} 
            ${router.pathname === "/products" && styles.active}
          `}
        >
          Products
        </li>
      </Link>
    </ul>
  );
}

export default Navigation;
