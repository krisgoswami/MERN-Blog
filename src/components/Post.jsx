import { Card, IconButton, Typography, Box, CardMedia, Button } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
// import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import toast from 'react-hot-toast';

export default function Post({
    title,
    description,
    image,
    username,
    time,
    id,
    isUser
}) {

    const navigate = useNavigate();
    const handleEdit = () => {
        navigate(`/blog-details/${id}`);
    }

    const handleExpand = () => {
        navigate(`/blog/${id}`);
    }

    return <div >
        <Card
            variant="outlined"
            style={{
                maxWidth: '30%',
                minWidth: 500,
                margin: 'auto',
                marginTop: 10,
                // padding: 10,
                borderRadius: 10
            }}>
            <CardMedia
                component={'img'}
                height={'250px'}
                image={image}
            ></CardMedia>
            <Box>
                <Typography
                    variant="h6"
                    style={{
                        fontWeight: 'bold',
                        width: '90%',
                        marginTop: 10,
                        marginLeft: 20,
                        marginBottom: 10
                    }}>{title}</Typography>
                <Typography
                    variant="body1"
                    style={{
                        width: '90%',
                        marginLeft: 20,
                    }}>{description}</Typography>
            </Box>

            <div style={{
                display: "flex",
                justifyContent: 'space-between',
                alignItems: 'center',
                marginTop: '10%',
                marginBottom: '5%',
                marginLeft: 20,
                marginRight: 20,
            }}>
                <div>
                    <Typography
                        variant='body1'
                        style={{
                            fontWeight: 'bold'
                        }}>
                        {username}
                    </Typography>
                    <Typography
                        variant='caption'
                        style={{
                            fontWeight: 'bold',
                        }}>
                        {time}
                    </Typography>
                </div>
                <div>
                    {isUser && (
                        <Box
                            display={'flex'}
                            paddingLeft={25}
                        >
                            <IconButton onClick={handleEdit}>
                                <EditIcon color="info" />
                            </IconButton>
                        </Box>
                    )}
                </div>
                <div>
                    <Button
                        disableRipple={true}
                        onClick={handleExpand}
                    >Read More</Button>
                </div>
            </div>
        </Card>
    </div>
}