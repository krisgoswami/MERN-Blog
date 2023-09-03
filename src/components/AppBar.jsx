import { Box, Button, ButtonBase, Typography } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { authActions } from '../redux/store';

export default function AppBar() {
    // const navigate = useNavigate();

    //global
    const isLogin = useSelector((state) => state.isLogin);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    //state
    const [value, setValue] = useState();

    //handle logout
    const handleLogout = () => {
        try {
            dispatch(authActions.logout());
            navigate('/');
        } catch (error) {
            console.log(error);
        }
    }

    return <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#262626',
        height: 50
    }}>
        <ButtonBase
            disableRipple={true}
            LinkComponent={Link}
            to='/'
            style={{
                color: 'white',
                marginLeft: 10,
                fontSize: 30,
                fontFamily: 'monospace'
            }}>Blog App</ButtonBase>
        <Box display={"flex"} marginLeft="auto">
            {!isLogin && <>
                <Button
                    variant='text'
                    LinkComponent={Link}
                    to='/login'
                    style={{
                        color: 'white'
                    }}>Login</Button>
            </>}
            {isLogin && <>
                <Button
                    onClick={handleLogout}
                    variant='text'
                    LinkComponent={Link}
                    to='/'
                    style={{
                        color: 'white'
                    }}>Logout</Button>
            </>}

        </Box>
    </div>
}