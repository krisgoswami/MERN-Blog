import { Card, Typography } from "@mui/material";

export default function Post({ title, description, image, username, time }) {
    return <div>
        <Card
            variant="outlined"
            style={{
                width: '30%',
                margin: 'auto',
                marginTop: 10,
                // padding: 10,
                borderRadius: 10
            }}>
            <center>
                <img style={{
                    objectFit: 'cover',
                    width: '100%',
                    height: '250px',
                    objectPosition: 'top'
                }}
                    src={image}></img>
            </center>
            <Typography
                variant="h6"
                style={{
                    fontWeight: 'bold',
                    marginTop: 10,
                    marginLeft: 20,
                    marginBottom: 10
                }}>{title}</Typography>
            <Typography
                variant="body1"
                style={{
                    width: '85%',
                    marginLeft: 20,
                }}>{description}</Typography>

            <div style={{
                display: "flex",
                justifyContent: 'space-between',
                marginTop: '10%',
                marginBottom: '5%',
                marginLeft: 20,
                marginRight: 20,
            }}>
                <Typography
                    variant='body2'
                    style={{
                        fontWeight: 'bold'
                    }}>
                    {username}
                </Typography>
                <Typography
                    variant='body2'
                    style={{
                        fontWeight: 'bold',
                    }}>
                    {time}
                </Typography>
            </div>
        </Card>
    </div>
}