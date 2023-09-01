import React from 'react';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

export default function Project(props) {
    return props.myProjects.map((item, index) => (
        <Card key={index} sx={{ maxWidth: 560}}>
            <CardActionArea >
                <CardMedia
                    component="img" 
                    image={item.imgSrc} 
                    className="card-img-top" 
                    alt={item.imgAlt} 
                />
                <CardContent className="card-body">
                    <Typography variant="h5" gutterBottom >{item.projectTitle}</Typography>
                    <Typography variant="body1" color="text.secondary" >{item.projectDescription}</Typography>
                </CardContent>
            </CardActionArea>

            <CardActions>
                <Button href={item.projectLink} target="_blank" rel="noreferrer" variant="contained">{item.projectLinkPhrase}</Button>
                <Button href={item.projectGitHub} target="_blank" rel="noreferrer" variant="outlined">GitHub</Button>
            </CardActions>
        </Card>
    ));
}