// 'use client'
import Link from "next/link";
import styles from "../page.module.css";
import cardStyles from "./common.module.css";
import { fetchData } from "./commonUtils";

const Cards = async(props) => {
    const {blogs = []} = props;
    // console.log(props , 'props====')
    // console.log('blogs in card===', blogs);
    return (
        <div className={`${styles.grid} ${cardStyles.blogCards}`}>
            {blogs && blogs.length ? blogs.map((item) => {
                return(
                    <div id={`card_${item.id}`} className={`${cardStyles.cardWrapper}`} key={item.id}>
                        <div className={`${cardStyles.pic}`}></div>
                        <p className={`${cardStyles.cardHeader}`}>{item.title}</p>
                        <p className={`${cardStyles.desc}`}>
                            {item.content}
                        </p>
                        <div className={`${cardStyles.buttonCenter}`}>
                            <button className={`${cardStyles.readmore}`}>
                                <Link href={`/blog/${item._id}`}>
                                    <strong> Read More </strong>
                                </Link>
                            </button>
                        </div>
                    </div>
                )
            }) : null}
        </div>
    )
}

export default Cards;