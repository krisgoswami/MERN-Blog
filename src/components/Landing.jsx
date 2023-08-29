import { Button, Typography } from "@mui/material";
import Post from "./Post";

export default function Landing() {
    return <div style={{ margin: 10 }}>
        <Typography variant="h4">Welcome to THE BLOG!</Typography>
        <Button variant="contained" onClick={() => { window.location = "/login" }}>Login</Button>
        <Button variant="contained" onClick={() => { window.location = "/signup" }}>Sign Up</Button>
        <Post />
    </div>
}