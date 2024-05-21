import Link from "next/link";
import styles from "../page.module.css";
const Footer = () => {
    return (
        <div className={`${styles.grid} ${styles.footer}`}>
          <Link
            href="/about"
            className={styles.card}
            rel="noopener noreferrer"
          >
            <h2>
              About Us <span>-&gt;</span>
            </h2>
            <p>Find in-depth information about Us.</p>
          </Link>

          <Link
            href="/contact"
            className={styles.card}
            rel="noopener noreferrer"
          >
            <h2>
              Contac Us <span>-&gt;</span>
            </h2>
            <p>Contact Us Via Phone or Email!</p>
          </Link>

          <Link
            href="career"
            className={styles.card}
            rel="noopener noreferrer"
          >
            <h2>
              Join Us <span>-&gt;</span>
            </h2>
            <p>Explore Career Options.</p>
          </Link>

        </div>
    )
}

export default Footer;