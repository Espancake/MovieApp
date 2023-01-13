import * as React from 'react';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function MediaCard(props) {


    const { Title, Year, imdbID, Type, Poster } = props.movie;
      
      

  return (
    <Card sx={{ maxWidth: 345, height:"581.11px" }}>
      <CardMedia
        sx={{ height: 362, objectFit:"cover" }}
        image={Poster}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {Title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {Year}
        </Typography>
        <Typography>
            {imdbID}
        </Typography>
        <Typography>
            {Type}
        </Typography>
      </CardContent>
      <CardActions>
        <Link to={`/movieinfo/${Title}`} state={imdbID}>
          <Button size="small">More Info</Button>
        </Link>
      </CardActions>
    </Card>
  );
}
