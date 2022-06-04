//!IMPORTS:
import {
  Grid,
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
  FavoriteIcon,
  ShareIcon,
  ExpandMoreIcon,
  MoreVertIcon,
  Typography,
  Divider,
  styles,
} from "@mui/material";
import { useState } from "react";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    name: "PokeRex Game",
    date: "February, 2022",
    author: "E",
    image: "E",
    description: "Loquesea",
    technologies: "blabla",
    url: "https://github.com/Becquerelia"
  },
  
];

function Projects() {
  const [allProjects, setAllProjects] = useState(projects);

  return (
    <div style={{backgroundColor:"#6d11ab", paddingTop:"5rem"}} >

      <Typography gutterBottom variant="h4" component="div" color="white">
          MY PROJECTS
        </Typography>

      <Grid
        sx={{
        p: 5
      }}
      >
       <Box
      sx={{
        flexWrap: "wrap",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
      }}
    >
        {allProjects.map((eachProject, index) => {
          return (
            <ProjectCard
              key={eachProject.name + index}
              eachProject={eachProject}
            />
          );
        })}
        </Box>
      </Grid>
    </div>
  );
}

export default Projects;
