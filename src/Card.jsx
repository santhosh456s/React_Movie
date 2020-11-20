import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MoreVertIcon from '@material-ui/icons/MoreVert';


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function RecipeReviewCard(props) {

 
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  // all props
  const {title,
    whichlist,
    onwatch ,
    onlike,
    ondelete,
    id} = props;

  return (
    <div className="container">
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            {props.rating}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={title.name}
        subheader={props.date}
      />
      {/* image container */}
      <CardMedia
        className={classes.media}
        image={props.img}
        title={props.title}/>

      {/* description */}
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {props.dec}
        </Typography>

        {/* like button */}
      </CardContent>
      <CardActions disableSpacing>
        <IconButton onClick={() => {onlike(id)}} aria-label="add to favorites">
        <button  variant="contained" className={classes.button}>{props.like}</button>
          <FavoriteIcon />
        </IconButton>

        {/* which list */}
        <Button
        className={whichlist === 1 ? "green" : "red"}
        onClick ={() => {onwatch(id)}}>letter</Button>

        {/* delete button */}
        <Button
        color="secondary"
        onClick={() => {ondelete(id)}}
        startIcon={<DeleteIcon />}>
      </Button>
      
      </CardActions>
     
    </Card>
    </div>
  );
}
