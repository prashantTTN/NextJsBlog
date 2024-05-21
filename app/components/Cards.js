// `'use client'`
import Link from "next/link";
import styles from "../page.module.css";
import cardStyles from "./common.module.css";
// import getBlogsDetails from '../api/route';

const Cards = async (props) => {
    const res = await fetch('https://dummyapi.online/api/blogposts')
    const blogs = await res.json();
    // console.log('blogs====', blogs);
    return (
        <div className={`${styles.grid} ${cardStyles.blogCards}`}>
            {blogs?.map((item) => {
                return  <>
                        <div id={`card_${item.id}`} className={`${cardStyles.cardWrapper}`} key={item.id}>
                            <div className={`${cardStyles.pic}`}></div>
                            <p className={`${cardStyles.desc}`}>This is a simple example of what a card can look like. it's simpple, elegant, functional and it simply does it's job because of this.
                            <br/>It can, for example, showcase a certain product, location, or any other thing you wish to sell or display.
                            </p>
                            <Link href="#" className={`${cardStyles.redirectBtn}`}>
                            <div className={`${cardStyles.buttonCenter}`}>
                                <button className={`${cardStyles.readmore}`}><strong>Read More </strong></button>
                            </div>
                            </Link>
                        </div>
                        </>
            })}
            {/* <div className={`${styles.grid} ${cardStyles.blogCards}`}>
                <div className={`${cardStyles.cardWrapper}`}>
                    <div className={`${cardStyles.pic}`}></div>
                    
                    <p className={`${cardStyles.desc}`}>This is a simple example of what a card can look like. it's simpple, elegant, functional and it simply does it's job because of this.
                    <br/>It can, for example, showcase a certain product, location, or any other thing you wish to sell or display.
                    </p>
                    <Link href="#" className={`${cardStyles.redirectBtn}`}>
                    <div className={`${cardStyles.buttonCenter}`}>
                        <button className={`${cardStyles.readmore}`}><strong>Read More </strong></button>
                    </div>
                    </Link>
                </div>
                <div className={`${cardStyles.cardWrapper}`}>
                    <div className={`${cardStyles.pic}`}></div>
                    <p className={`${cardStyles.cardHeader}`}>
                        Title
                    </p>
                    <p className={`${cardStyles.desc}`}>This is a simple example of what a card can look like. it's simpple, elegant, functional and it simply does it's job because of this.
                    <br/>It can, for example, showcase a certain product, location, or any other thing you wish to sell or display.
                    </p>
                    <Link href="#" className={`${cardStyles.redirectBtn}`}>
                    <div className={`${cardStyles.buttonCenter}`}>
                        <button className={`${cardStyles.readmore}`}><strong>Read More </strong></button>
                    </div>
                    </Link>
                </div>
                <div className={`${cardStyles.cardWrapper}`}>
                    <div className={`${cardStyles.pic}`}></div>
                    <p className={`${cardStyles.cardHeader}`}>
                        Title
                    </p>
                    <p className={`${cardStyles.desc}`}>This is a simple example of what a card can look like. it's simpple, elegant, functional and it simply does it's job because of this.
                    <br/>It can, for example, showcase a certain product, location, or any other thing you wish to sell or display.
                    </p>
                    <Link href="#" className={`${cardStyles.redirectBtn}`}>
                    <div className={`${cardStyles.buttonCenter}`}>
                        <button className={`${cardStyles.readmore}`}><strong>Read More </strong></button>
                    </div>
                    </Link>
                </div>
                <div className={`${cardStyles.cardWrapper}`}>
                    <div className={`${cardStyles.pic}`}></div>
                    <p className={`${cardStyles.cardHeader}`}>
                        Title
                    </p>
                    <p className={`${cardStyles.desc}`}>This is a simple example of what a card can look like. it's simpple, elegant, functional and it simply does it's job because of this.
                    <br/>It can, for example, showcase a certain product, location, or any other thing you wish to sell or display.
                    </p>
                    <Link href="#" className={`${cardStyles.redirectBtn}`}>
                    <div className={`${cardStyles.buttonCenter}`}>
                        <button className={`${cardStyles.readmore}`}><strong>Read More </strong></button>
                    </div>
                    </Link>
                </div>
            </div> */}
        </div>
    )
}

export default Cards;