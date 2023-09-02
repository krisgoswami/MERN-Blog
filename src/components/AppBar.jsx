import { Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

export default function AppBar() {
    // const navigate = useNavigate();
    return <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#262626',
        height: 50
    }}>
        <Typography
            variant='h5'
            LinkComponent={Link}
            to='/'
            // onClick={() => { navigate("/") }}
            style={{
                color: 'white',
                marginLeft: 10,
                cursor: 'pointer'
            }}>Blog App</Typography>
        <Button
            variant='text'
            LinkComponent={Link}
            to='/login'
            // onClick={() => { navigate("/login") }}
            style={{
                color: 'white'
            }}>Login</Button>
    </div>
}