import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import FolderIcon from '@mui/icons-material/Folder';
import Grid from '@mui/material/Grid';
import { useNavigate } from 'react-router-dom';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

const MovieCard = ({ movieInfo }) => {
  const navigate = useNavigate();
    console.log("MOVIE INFO", movieInfo)
  const { title, images, aired, synopsis, studios, score, duration, genres, mal_id } = movieInfo
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        title={title}
        subheader={aired.string}
        style={{whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis'}}
      />
      <CardMedia
        component="img"
        height="194"
        image={images.jpg.large_image_url}
        alt={title}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">Score: {score}</Typography>
        <Typography variant="body2" color="text.secondary">Duration: {duration}</Typography>
        <Typography variant="body2" color="text.secondary">Studio: {studios?.[0]?.name}</Typography>
        <Grid item xs={12} md={12}>
        <Typography sx={{}} variant="body2" color="text.secondary">
            Genres:
        </Typography>
        <List dense={true}>
            { 
                genres.filter((e, index) => index < 3).map((e, index) => (
                    <ListItem key={index}>
                        <ListItemIcon><FolderIcon /></ListItemIcon>
                        <ListItemText
                            primary={e.name}
                        />
                    </ListItem>
                ))
            }
        </List>
        </Grid>
        <Button variant="outlined" onClick={() => navigate(`/movie/${mal_id}/characters`)}>See characters</Button>
      </CardContent>
      <CardActions disableSpacing>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph >Title</Typography>
          <Typography paragraph variant="body2" color="text.secondary">{title}</Typography>
          <Typography paragraph>Sinopsis</Typography>
          <Typography paragraph style={{textAlign: 'justify'}} variant="body2" color="text.secondary">{synopsis ? synopsis : 'No information'}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}

export default MovieCard