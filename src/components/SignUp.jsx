import { Button, Card, TextField, Typography, Link } from '@mui/material';

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
                <Button variant='contained'>Sign Up</Button><br /><br />
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                    <Typography style={{ marginRight: 10 }}>Have an account already?</Typography>
                    <Link href="/login">Login</Link>
                </div>
            </Card>
        </center>
    </div>
}