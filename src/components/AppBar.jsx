import { Box, Button, ButtonBase, Tabs, Tab } from '@mui/material';
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
        marginLeft: 'auto',
        marginRight: 'auto',
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
                marginLeft: 20,
                fontSize: 30,
                fontFamily: 'monospace'
            }}>Blog App</ButtonBase>

        <Button
            variant='text'
            LinkComponent={Link}
            to='/blogs'
            style={{
                color: 'white',
                marginLeft: 200
            }}>Blogs</Button>
        <Button
            variant='text'
            LinkComponent={Link}
            to='/blogs'
            style={{
                color: 'white',
                // marginLeft: 200
            }}>My Blogs</Button>

        <Box display={"flex"} marginLeft="auto">
            {!isLogin && <>
                <Button
                    variant='text'
                    LinkComponent={Link}
                    to='/login'
                    style={{
                        color: 'white',
                        marginRight: 20
                    }}>Login</Button>
            </>}
            {isLogin && <>
                <Button
                    onClick={handleLogout}
                    variant='text'
                    LinkComponent={Link}
                    to='/'
                    style={{
                        color: 'white',
                        marginRight: 20
                    }}>Logout</Button>
            </>}

        </Box>
    </div>
}