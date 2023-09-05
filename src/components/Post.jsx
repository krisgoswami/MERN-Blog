import { Card, IconButton, Typography, Box, CardMedia } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast from 'react-hot-toast';

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

    const handleDelete = async (blogId) => {
        try {
            const { data } = await axios.delete(`http://localhost:8080/api/v1/blog/deleteBlog/${id}`);
            if (data?.success) {
                toast.success('Post Deleted');
            }

        } catch (error) {
            console.log(error);
        }
    }

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
            <CardMedia
                component={'img'}
                height={'250px'}
                image={image}
            ></CardMedia>
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
                    width: '90%',
                    marginLeft: 20,
                }}>{description}</Typography>

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
                            paddingLeft={2}
                        >
                            <IconButton onClick={handleEdit}>
                                <EditIcon color="info" />
                            </IconButton>
                            {/* <IconButton onClick={handleDelete}>
                                <DeleteIcon color="error" />
                            </IconButton> */}
                        </Box>
                    )}
                </div>
            </div>
        </Card>
    </div>
}