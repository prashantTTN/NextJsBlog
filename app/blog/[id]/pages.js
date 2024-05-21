import Image from "next/image";
import styles from "../page.module.css";

export default function BlogDetails() {
  return (
    <div className={`${styles.main} blogPage`}>
      <div className={styles.description}>
        <p>
          Welcome to the Blog Details Page&nbsp;
        </p>
      </div>
    </div>
  );
}
