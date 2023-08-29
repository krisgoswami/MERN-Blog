import { Card, Typography } from "@mui/material";

export default function Post() {
    return <div>
        <Card
            variant="outlined"
            style={{
                width: 500,
                height: 400,
                margin: 10,
                padding: 10,
                borderRadius: 10
            }}>
            <center>
                <img style={{
                    objectFit: 'cover',
                    width: 500,
                    height: 250
                }}
                    src="https://e2.365dm.com/23/08/768x432/skysports-bruno-fernandes-man-utd_6263669.jpg?20230826164906"></img>
            </center>
            <Typography
                variant="h5"
                style={{
                    fontWeight: 'bold',
                    marginTop: 10,
                    marginBottom: 10
                }}>Captain Bruno wins it for United</Typography>
            <Typography variant="body1">Bruno Fernandes converts the winning penalty sealing all 3 points for Manchester United</Typography>
        </Card>
    </div>
}