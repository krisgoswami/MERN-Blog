import { Button, Typography } from '@mui/material';

export default function AppBar() {
    return <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#262626'
    }}>
        <Typography
            variant='h5'
            style={{
                color: 'white',
                marginLeft: 10
            }}>Blog App</Typography>
        <Button
            variant='text'
            style={{
                color: 'white'
            }}>Login</Button>
    </div>
}