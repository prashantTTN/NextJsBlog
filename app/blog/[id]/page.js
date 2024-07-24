'use client'

import { useState, useEffect } from 'react';
import Link from 'next/link';
import blogStyles from "../blog.module.css";

const BlogDetails = ({ params }) => {
    const [blogDetails, setBlogDetails] = useState({});
    const id = params.id;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(`http://localhost:3000/api/blog/${id}`);
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
            {console.log('blogDetails===', blogDetails)}
            <Link href= {'/blog'} className={`${blogStyles.backBtn}`}>Back</Link>
            <div className={`${blogStyles.description}`}>
                <h1 className={`${blogStyles.h1}`}>{blogDetails && blogDetails.topic && blogDetails.topic.title}</h1>
                <p className={`${blogStyles.contentWrapper}`}>{blogDetails && blogDetails.topic && blogDetails.topic.content}</p>
                <span className={`${blogStyles.dateSpan}`}>Date Published : {blogDetails && blogDetails.topic && new Date(blogDetails.topic.createdAt).toLocaleDateString()}</span>
            </div>
            <div className={`${blogStyles.authorName}`}>
                Author : {blogDetails && blogDetails.topic && blogDetails.topic.author}
            </div>
        </div>
    );
}

export default BlogDetails;