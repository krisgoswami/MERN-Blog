import { Card, Typography } from "@mui/material";

export default function Post() {
    return <div>
        <Card
            variant="outlined"
            style={{
                width: 350,
                height: 500,
                marginTop: 20,
                // padding: 10,
                borderRadius: 10
            }}>
            <center>
                <img style={{
                    objectFit: 'cover',
                    width: '100%',
                    height: '200px',
                    objectPosition: 'top'
                }}
                    src="https://e2.365dm.com/23/08/768x432/skysports-bruno-fernandes-man-utd_6263669.jpg?20230826164906"></img>
            </center>
            <Typography
                variant="h6"
                style={{
                    fontWeight: 'bold',
                    marginTop: 10,
                    marginLeft: 20,
                    marginBottom: 10
                }}>Captain Bruno wins it for United</Typography>
            <Typography
                variant="body1"
                style={{
                    width: '80%',
                    marginLeft: 20,
                }}>Bruno Fernandes converts the winning penalty sealing all 3 points for Manchester United</Typography>

            <div style={{
                display: "flex",
                justifyContent: 'space-between',
                marginTop: '30%',
                marginLeft: 20,
                marginRight: 20,
            }}>
                <Typography
                    variant='body2'
                    style={{
                        fontWeight: 'bold'
                    }}>
                    By Krishanu
                </Typography>
                <Typography
                    variant='body2'
                    style={{
                        fontWeight: 'bold',
                    }}>
                    26/08/2023 21:45
                </Typography>
            </div>
        </Card>
    </div>
}