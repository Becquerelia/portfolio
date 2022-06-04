//!IMPORTS:
import { Box, Button, Card, CardHeader, CardMedia, CardContent, CardActions, Collapse, Avatar, IconButton, FavoriteIcon, ShareIcon, ExpandMoreIcon, MoreVertIcon,Typography, Divider, styles } from "@mui/material";
import { useState } from "react";
import ProjectCard from "./ProjectCard";

const projects = [
  { name: "PokeRex Game", date: "February, 2022", author: "E", image:"E",  description: "Loquesea", technologies: "blabla"}
]

function Projects() {

  const [allProjects, setAllProjects] = useState(projects);

  return (
    <div>

    <h1>Proyectos</h1>

    {allProjects.map((eachProject, index) => {
      return (
        <ProjectCard key={eachProject.name + index}  eachProject={eachProject} />
      )
    })}
    
    </div>
  )
}

export default Projects