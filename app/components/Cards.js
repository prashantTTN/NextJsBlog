`'use client'`
import Link from "next/link";
import styles from "../page.module.css";
import cardStyles from "./common.module.css";
import { fetchData } from "./commonUtils";

const Cards = async(props) => {
    const blogs = await fetchData('https://dummyapi.online/api/blogposts');
    // console.log('res===', blogs);
    return (
        <div className={`${styles.grid} ${cardStyles.blogCards}`}>
            {blogs?.map((item) => {
                return  <>
                            <div id={`card_${item.id}`} className={`${cardStyles.cardWrapper}`} key={item.id}>
                                <div className={`${cardStyles.pic}`}></div>
                                <p className={`${cardStyles.cardHeader}`}>{item.title}</p>
                                <p className={`${cardStyles.desc}`}>
                                    {item.content}
                                </p>
                                {/* <Link href="#" className={`${cardStyles.redirectBtn}`}> */}
                                <div className={`${cardStyles.buttonCenter}`}>
                                    <button className={`${cardStyles.readmore}`} >
                                        <Link href={`/blog/${item.id}`}>
                                            <strong> Read More </strong>
                                        </Link>
                                    </button>
                                </div>
                                {/* </Link> */}
                            </div>
                        </>
            })}
        </div>
    )
}

export default Cards;