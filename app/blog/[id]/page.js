// import Image from "next/image";
// import styles from "../page.module.css";

// export default function blogDetails() {
//   return (
//     <div className={`${styles.main} blogPage`}>
//       <div className={styles.description}>
//         <p>
//           Welcome to the Blog Details Page&nbsp;
//         </p>
//       </div>
//     </div>
//   );
// }

'use client'

import { useState, useEffect } from 'react';
import Link from 'next/link';
import blogStyles from "../blog.module.css";

const BlogDetails = ({ params }) => {
    const [blogDetails, setBlogDetails] = useState({});
    const id = params.id;
    console.log(params);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(`https://dummyapi.online/api/blogposts/${id}`);
                const resData = await res.json();
                setBlogDetails(resData);
                console.log('resData===', resData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        // Call fetchData only once when the component mounts
        if (!blogDetails._id) {
            fetchData();
        }
    }, []);

    return (
        <div className={`${blogStyles.blogData}`}>
            <Link href= {'/blog'} className={`${blogStyles.backBtn}`}>Back</Link>
            <div className={`${blogStyles.description}`}>
                <h1 className={`${blogStyles.h1}`}>{blogDetails.title}</h1>
                <p className={`${blogStyles.contentWrapper}`}>{blogDetails.content}</p>
                <span className={`${blogStyles.dateSpan}`}>{blogDetails.date_published}</span>
            </div>
            <div className={`${blogStyles.authorName}`}>
                {blogDetails.author}
            </div>
        </div>
    );
}

export default BlogDetails;