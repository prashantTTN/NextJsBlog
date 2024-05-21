import styles from "../page.module.css";
// import Layout from "../layout";
import aboutStyles from "./about.module.css";

export default function About() {
  return (
      <div className={`${styles.main} aboutPage`}>
        <div className={styles.description}>
          <p>
            Welcome to the About Us Section
          </p>
        </div>
      </div>
  );
}
