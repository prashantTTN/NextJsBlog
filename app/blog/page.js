import Image from "next/image";
import styles from "../page.module.css";
import blogStyles from "./blog.module.css";
import Layout from "../layout";
import Cards from "../components/Cards";

export default function Blog() {
  return (
    // <Layout>
      <div className={`${styles.main} blogPage`}>
        <div className={styles.description}>
          <p>
            Welcome to the Blog Listing Page&nbsp;
          </p>
        </div>
        <Cards />
      </div>
    // </Layout>
  );
}
