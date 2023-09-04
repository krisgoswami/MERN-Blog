import { useState } from "react";
import { Box, Button, InputLabel, TextField, TextareaAutosize, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast from 'react-hot-toast';

export default function CreateBlog() {

    const navigate = useNavigate();
    const id = localStorage.getItem('userId');

    //state
    const [inputs, setInputs] = useState({
        title: '',
        description: '',
        image: ''
    })

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
            const { data } = await axios.post('http://localhost:8080/api/v1/blog/createBlog', {
                title: inputs.title,
                description: inputs.description,
                image: inputs.image,
                user: id
            })
            if (data?.success) {
                toast.success('Blog created');
                navigate('/my-blogs');
            }
        } catch (error) {
            console.log(error)
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
                >Create a new blog post</Typography>

                <InputLabel sx={{ mb: 1, mt: 1, fontSize: '25px', fontWeight: 'bold' }}>Title</InputLabel>
                < TextField
                    fullWidth={true}
                    variant='outlined'
                    label='Title'
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
                    label='Description'
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
                    label='Image Link'
                    name='image'
                    type='text'
                    required
                    value={inputs.image}
                    onChange={handleChange}
                /><br /><br />
                <Button
                    variant='contained'
                    type='submit'
                >Create</Button>
            </Box>
        </form>
    </ >
}