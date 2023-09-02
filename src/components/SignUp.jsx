import { Button, Card, TextField, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

export default function SignUp() {
    return <div>
        <center>
            <div
                style={{
                    marginTop: 100,
                    marginBottom: 20
                }}>
                <Typography variant='h6'>Welcome to Blog App. Sign up today</Typography>
            </div>
        </center>
        <center>
            <Card
                variant='outlined'
                style={{
                    width: 400,
                    padding: 20,
                    borderRadius: 10
                }}>
                <TextField
                    fullWidth={true}
                    variant='outlined'
                    label='Name'
                /><br /><br />
                <TextField
                    fullWidth={true}
                    variant='outlined'
                    label='Email'
                /><br /><br />
                <TextField
                    fullWidth={true}
                    variant='outlined'
                    label='Password'
                    type='password'
                /><br /><br />
                <Button variant='contained'>Sign Up</Button><br /><br />
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                    <Typography>Have an account already?</Typography>
                    <Button
                        variant='text'
                        LinkComponent={Link}
                        to='/login'
                    >Login</Button>
                    {/* <Link href="/login">Login</Link> */}
                </div>
            </Card>
        </center>
    </div>
}