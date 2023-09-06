import { CardMedia, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Box } from "@mui/material";
import axios from "axios";
import { BASE_URL } from '../services/helper';

export default function BlogExpand() {

    const [blog, setBlog] = useState({});
    const blogid = useParams().id;
    const navigate = useNavigate();
    const [inputs, setInputs] = useState({});

    //get blog details
    const getBlogDetails = async () => {
        try {
            const { data } = await axios.get(`${BASE_URL}/api/v1/blog/getBlog/${blogid}`)
            if (data?.success) {
                setBlog(data?.blog);
                setInputs({
                    title: data?.blog.title,
                    description: data?.blog.description,
                    image: data?.blog.image,
                    textbody: data?.blog.textbody,
                    timestamp: data?.blog.createdAt,
                    username: data?.blog?.user
                });
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getBlogDetails();
    }, []);


    return <>
        <Box sx={{
            margin: 'auto',
            position: 'relative',
            maxWidth: 900,
            bgcolor: 'white'
        }}>
            <CardMedia
                component={'img'}
                height={'400px'}
                image={inputs.image}
            ></CardMedia>
            <Box>
                <Typography
                    variant="h4"
                    fontWeight={'bold'}
                    // color={'white'}
                    sx={{ margin: 'auto', mt: 2, mb: 2, maxWidth: 600 }}
                >{inputs.title}</Typography>

                <Typography
                    fontWeight={''}
                    sx={{
                        display: 'flex', justifyContent: 'flex-end', margin: 'auto', maxWidth: 600
                    }}
                    variant="body2"
                >{inputs.timestamp}</Typography>
                <Typography
                    variant="h6"
                    sx={{ margin: 'auto', mt: 5, mb: 3, maxWidth: 600 }}
                >{inputs.description}</Typography>
                <Typography
                    paragraph
                    sx={{
                        maxWidth: 600,
                        margin: 'auto',
                        textAlign: 'justify'
                    }}
                >{inputs.textbody}</Typography>
            </Box>
        </Box>
    </>
}