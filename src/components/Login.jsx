import { Button, Card, TextField, Typography, Link } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    return <div>
        <center>
            <div
                style={{
                    marginTop: 100,
                    marginBottom: 20
                }}>
                <Typography variant='h6'>Welcome to Blog App. Login Below</Typography>
            </div>
        </center>
        <center>
            <Card
                variant='outlined'
                style={{
                    width: 400,
                    padding: 20
                }}>
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
                <Button variant='contained'>Login</Button><br /><br />
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                    <Typography style={{ marginRight: 10 }}>Don't have an account?</Typography>
                    <Link href="/signup">Sign Up</Link>
                </div>
            </Card>
        </center>
    </div>
}