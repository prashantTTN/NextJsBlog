'use client'
import Link from "next/link";
import styles from "../page.module.css";
import cardStyles from "./common.module.css";
import { fetchData } from "./commonUtils";

const Cards = async(props) => {
    const {blogs = []} = props;
    // console.log(props , 'props====')
    // console.log('blogs in card===', blogs);

    // const handleEdit = async(id) => {
    //     try {
    //         const res = await fetch(`http://localhost:3000/api/blog/${id}`, {
    //             method: "PUT",
    //             headers: {
    //                 "Content-type": "application/json",
    //             },
    //         });

    //         if (res.ok) {
    //             console.log('res.ok===', res.ok);
    //         } else {
    //             throw new Error("Failed to edit a topic");
    //         }
    //     } catch (error) {
    //         console.log(error);
    //     }
    // };  


    const handleDelete = async(id) => {
        try {
            const res = await fetch(`http://localhost:3000/api/blog/${id}`, {
                method: "DELETE",
                headers: {
                    "Content-type": "application/json",
                },
            });

            if (res.ok) {
                console.log('res.ok===', res.ok);
            } else {
                throw new Error("Failed to delete a topic");
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className={`${styles.grid} ${cardStyles.blogCards}`}>
            {blogs && blogs.length ? blogs.map((item) => {
                return(
                    <div id={`card_${item._id}`} className={`${cardStyles.cardWrapper}`} key={item._id}>
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
                            <button className={`${cardStyles.delete}`} onClick={() => handleDelete(item._id)}>
                                <strong>Delete</strong>
                            </button>
                            {/* <button className={`${cardStyles.edit}`}>
                                <Link href={`/blog/${item._id}/edit`}>
                                    <strong> Edit </strong>
                                </Link>                                
                            </button> */}
                        </div>
                    </div>
                )
            }) : null}
        </div>
    )
}

export default Cards;