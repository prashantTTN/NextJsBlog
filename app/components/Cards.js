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
            {blogs && blogs.length && blogs.map((item) => {
                return  <>
                            <div id={`card_${item.id}`} className={`${cardStyles.cardWrapper}`} key=    {item.id}>
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

                        {/* <div class="max-w-sm rounded overflow-hidden shadow-lg">
                        <img class="w-full" src="https://v1.tailwindcss.com/img/card-top.jpg" alt="Sunset in the mountains" />
                        <div class="px-6 py-4">
                            <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
                            <p class="text-gray-700 text-base">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                            </p>
                        </div>
                        <div class="px-6 pt-4 pb-2">
                            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
                        </div>
                        </div> */}
                    </>
            })}
        </div>
    )
}

export default Cards;