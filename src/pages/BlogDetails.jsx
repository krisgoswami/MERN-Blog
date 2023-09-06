import { useState, useEffect } from "react";
import { Box, Button, InputLabel, TextField, TextareaAutosize, Typography } from "@mui/material";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { BASE_URL } from '../services/helper';

export default function BlogDetails() {

    const [blog, setBlog] = useState({});
    const id = useParams().id;
    const navigate = useNavigate();
    const [inputs, setInputs] = useState({});

    //get blog details
    const getBlogDetails = async () => {
        try {
            const { data } = await axios.get(`${BASE_URL}/api/v1/blog/getBlog/${id}`)
            if (data?.success) {
                setBlog(data?.blog);
                setInputs({
                    title: data?.blog.title,
                    description: data?.blog.description,
                    image: data?.blog.image,
                    textbody: data?.blog.textbody
                });
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getBlogDetails();
    }, []);


    //handle on change
    const handleChange = (e) => {
        setInputs(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    //handle submit
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const { data } = await axios.put(`${BASE_URL}/api/v1/blog/updateBlog/${id}`, {
                title: inputs.title,
                description: inputs.description,
                image: inputs.image,
                textbody: inputs.textbody
            })
            if (data?.success) {
                toast.success('Blog updated');
                navigate('/my-blogs');
            }
        } catch (error) {
            console.log(error)
        }
    }

    const handleDelete = async () => {
        try {
            const { data } = await axios.delete(`${BASE_URL}/api/v1/blog/deleteBlog/${id}`);
            if (data?.success) {
                toast.success('Post Deleted');
                navigate('/my-blogs');
            }

        } catch (error) {
            console.log(error);
        }
    }


    return <>
        <form onSubmit={handleSubmit} >
            <Box
                width={'80%'}
                // display='flex'
                // flexDirection={'column'}
                // alignItems={'center'}
                // justifyContent={'center'}
                margin={'auto'}
                marginTop={10}
                boxShadow={'0px 0px 5px #ccc'}
                padding={3}
                borderRadius={3}
                backgroundColor={'white'}
            >
                <Typography
                    variant='h6'
                    marginBottom={3}
                    fontWeight={'bold'}
                >Edit post</Typography>

                <InputLabel sx={{ mb: 1, mt: 1, fontSize: '25px', fontWeight: 'bold' }}>Title</InputLabel>
                < TextField
                    fullWidth={true}
                    variant='outlined'
                    name='title'
                    type='text'
                    required
                    value={inputs.title}
                    onChange={handleChange}
                /><br />
                <InputLabel sx={{ mt: 1, mb: 1, fontSize: '25px', fontWeight: 'bold' }}>Description</InputLabel>
                <TextField
                    fullWidth={true}
                    variant='outlined'
                    name='description'
                    type='text'
                    required
                    value={inputs.description}
                    onChange={handleChange}
                /><br />
                <InputLabel sx={{ mb: 1, mt: 1, fontSize: '25px', fontWeight: 'bold' }}>Image Link</InputLabel>
                < TextField
                    fullWidth={true}
                    variant='outlined'
                    name='image'
                    type='text'
                    required
                    value={inputs.image}
                    onChange={handleChange}
                />
                <InputLabel sx={{ mb: 1, mt: 1, fontSize: '25px', fontWeight: 'bold' }}>Detailde Post</InputLabel>
                < TextField
                    fullWidth={true}
                    sx={{ mb: 2 }}
                    variant='outlined'
                    name='textbody'
                    type='text'
                    required
                    value={inputs.textbody}
                    onChange={handleChange}
                />
                <Box
                    display='flex'
                    alignItems={'center'}
                    justifyContent={'space-between'}
                >
                    <Button
                        variant='contained'
                        type='submit'
                        color="success"
                    >Update</Button>
                    <Button
                        variant='contained'
                        onClick={handleDelete}
                        color="error"
                    >Delete</Button>
                </Box>
            </Box>
        </form>
    </>
}