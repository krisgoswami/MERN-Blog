import { Button, Card, TextField, Typography, Box } from '@mui/material';
import axios from 'axios';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { authActions } from '../redux/store';
import toast from 'react-hot-toast';


export default function Login() {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    //state
    const [inputs, setInputs] = useState({
        email: '',
        password: '',
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
            const { data } = await axios.post('http://localhost:8080/api/v1/user/login', {
                email: inputs.email,
                password: inputs.password
            })
            if (data.success) {
                localStorage.setItem("userId", data?.user._id);
                dispatch(authActions.login());
                toast.success("Login successful");
                navigate('/my-blogs');
            }

        } catch (error) {
            console.log(error)
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
                >Welcome. Please Login Below.</Typography>

                < TextField
                    fullWidth={true}
                    variant='outlined'
                    label='Email'
                    name='email'
                    type='email'
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
                >Login</Button><br />
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Typography>Don't have an account?</Typography>
                    <Button
                        sx={{ "&:hover": { backgroundColor: "transparent", } }}
                        disableRipple={true}
                        variant='text'
                        LinkComponent={Link}
                        to='/signup'
                    >Sign Up</Button>
                </div>
            </Box>
        </form>
    </ >
}