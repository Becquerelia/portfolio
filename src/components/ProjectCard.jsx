//!IMPORTS:
import {
  Box,
  Button,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Collapse,
  Avatar,
  IconButton,
  Typography,
  styled,
} from "@mui/material";
import { purple } from '@mui/material/colors';
import ShareIcon from "@mui/icons-material/Share";
import LaunchIcon from '@mui/icons-material/Launch';
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState } from "react";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

function ProjectCard(props) {
  const { eachProject } = props;
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345, minWidth: 345, m: 3 }}>
      <CardHeader
        avatar={<Avatar sx={{ bgcolor: purple[800] }} aria-label="recipe" >{eachProject.author}</Avatar>}
        action={
          <IconButton aria-label="visit" href={eachProject.url} target="_blank" >
          <LaunchIcon />
        </IconButton>
        }
        title={eachProject.name}
        subheader={eachProject.date}
      />      
      <CardMedia
        component="img"
        height="194"
        image={eachProject.image}
        alt="Project Image"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {eachProject.technologies}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="share" href={eachProject.url} target="_blank" >
          <ShareIcon />
        </IconButton>
        
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
          <Typography paragraph>Description:</Typography>
          <Typography paragraph>{eachProject.description}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}

export default ProjectCard;
