import { useState, useEffect } from "react"
import axios from "axios";
import Post from "../components/Post";
import Blog from "../components/Blog"

export default function Blogs() {

    const [blogs, setBlogs] = useState([]);

    // get all blogs
    const getAllBlogs = async () => {
        try {
            const { data } = await axios.get('http://localhost:8080/api/v1/blog/allBlogs')
            if (data && data.success) {
                setBlogs(data && data.blogs);
            }
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getAllBlogs();
    }, [])

    return <div
        style={{
            // margin: 20,
            // display: 'flex',
            // justifyContent: 'space-between',
            // flexDirection: 'row'
        }}>
        {blogs && blogs.map((blog) => <Post
            id={blog?._id}
            isUser={localStorage.getItem('userId') === blog?.user?._id}
            title={blog?.title}
            description={blog?.description}
            image={blog?.image}
            username={blog?.user?.username}
            time={blog.createdAt}
        />)}
    </div >
}