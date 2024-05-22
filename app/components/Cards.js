"use client"
import Link from "next/link";
import styles from "../page.module.css";
import cardStyles from "./common.module.css";
import { fetchData } from "./commonUtils";
// import { useRouter } from 'next/navigation'

const Cards = async(props) => {
    const blogs = await fetchData('https://dummyapi.online/api/blogposts');
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
                                <div className={`${cardStyles.buttonCenter}`}>
                                    <button className={`${cardStyles.readmore}`}>
                                        <Link href={`/blog/${item.id}`}>
                                            <strong> Read More </strong>
                                        </Link>
                                    </button>
                                </div>
                            </div>
                        </>
            })}
        </div>
    )
}

export default Cards;