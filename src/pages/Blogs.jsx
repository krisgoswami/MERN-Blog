import { useState, useEffect } from "react"
import axios from "axios";

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

    return <>
    </>
}