import { useState, useEffect } from "react";
import axios from "axios";
import Post from "../components/Post";


export default function MyBlogs() {

    const [blogs, setBlogs] = useState([]);

    //get user blogs
    const getUserBlogs = async () => {
        try {
            const id = localStorage.getItem('userId');
            const { data } = await axios.get(`http://localhost:8080/api/v1/blog/userBlogs/${id}`);
            if (data?.success) {
                setBlogs(data?.userBlog.blogs);
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getUserBlogs();
    }, [])

    return <div>
        {blogs && blogs.length > 0 ? (
            blogs.map((blog) => <Post
                id={blog._id}
                isUser={true}
                title={blog.title}
                description={blog.description}
                image={blog.image}
                textbody={blog.textbody}
                username={blog.user.username}
                time={blog.createdAt}
            />)) : (
            <h1>No blogs created</h1>
        )}
    </div>
}