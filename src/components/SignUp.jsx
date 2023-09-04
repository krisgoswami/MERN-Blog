import { useState } from 'react';
import axios from 'axios';
import { Button, TextField, Typography, Box } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

export default function SignUp() {
    const navigate = useNavigate();

    //state
    const [inputs, setInputs] = useState({
        username: '',
        email: '',
        password: ''
    })

    //handle input Change
    const handleChange = (e) => {
        setInputs(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    //handleSubmit
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const { data } = await axios.post("http://localhost:8080/api/v1/user/signup", {
                username: inputs.username,
                email: inputs.email,
                password: inputs.password
            })
            if (data.success) {
                toast.success('User registered successfully');
                navigate('/login');
            }
        } catch (error) {
            console.log(error);
        }
    }

    return <>
        <form onSubmit={handleSubmit}>
            <Box
                maxWidth={450}
                display='flex'
                flexDirection={'column'}
                alignItems={'center'}
                justifyContent={'center'}
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
                >Welcome to Blog App. Sign up today.</Typography>
                <TextField
                    fullWidth={true}
                    variant='outlined'
                    label='Name'
                    name='username'
                    required
                    value={inputs.username}
                    onChange={handleChange}
                /><br />
                <TextField
                    fullWidth={true}
                    variant='outlined'
                    type='email'
                    label='Email'
                    name='email'
                    required
                    value={inputs.email}
                    onChange={handleChange}
                /><br />
                <TextField
                    fullWidth={true}
                    variant='outlined'
                    label='Password'
                    name='password'
                    type='password'
                    required
                    value={inputs.password}
                    onChange={handleChange}
                /><br />
                <Button
                    variant='contained'
                    type='submit'
                >Sign Up</Button><br />
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                    <Typography>Have an account already?</Typography>
                    <Button
                        sx={{ "&:hover": { backgroundColor: "transparent", } }}
                        disableRipple={true}
                        variant='text'
                        LinkComponent={Link}
                        to='/login'
                    >Login</Button>
                </div>
            </Box>
        </form>
    </>
}