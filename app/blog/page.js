// "use client"
import styles from "../page.module.css";
import Cards from "../components/Cards";
import { fetchData } from "../components/commonUtils";

export default async function Blog() {
  let blogData =  await fetchData('http://localhost:3000/api/blog');
  const blogs = !!blogData.blogs ? blogData.blogs : [];
  // console.log('blogs======', blogs);
  return (
    // <Layout>
      <div className={`${styles.main} blogPage`}>
        <div className={styles.description}>
          <p>
            Welcome to the Blog Listing Page&nbsp;
          </p>
        </div>
        <Cards blogs = {blogs} />
      </div>
    // </Layout>
  );
}
