import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function ImgMediaCard(props) {
  return (
    <Card sx={{ maxWidth: 300 ,margin:3 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        width='140'
        image={props.link}      />
      <CardContent sx={{backgroundColor:'#121217'}}>
        <Typography sx={{fontSize:15 ,color:'white'}} variant="h5" component="div">
          {props.text}
        </Typography>
     </CardContent>
    </Card>
  );
}