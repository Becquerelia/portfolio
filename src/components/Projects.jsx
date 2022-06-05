//!IMPORTS:
import { Grid, Box, Typography } from "@mui/material";
import { useState } from "react";
import ProjectCard from "./ProjectCard";
import pokeRex from "../assets/pokeRex.jpg";
import libraryWeb from "../assets/libraryWeb.jpg";
import balloonMars from "../assets/balloonMars.jpg";

const projects = [
  {
    name: "Balloon to Mars",
    date: "March, 2022",
    author: "E",
    image: balloonMars,
    description:
      "Full stack MERN app about astronomy with users/admin functionality and all CRUD functions, which has been built using React as a foundation. Also use packages like Stripe, Nodemailer, FullCalendar, Cloudinary or GoogleMaps for React. Moreover, it works using two external NASA Open APIs, APOD and Mars Rover Photos, that allow you to view some photographs of places as spectacular as the surface of Mars.",
    technologies:
      "ReactJS, JavaScriptES6, HTML5, CSS3, Bootstrap, Material UI, MongoDB, Mongoose, Node.js, ExpressJS",
    url: "https://balloontomars.netlify.app/",
  },
  {
    name: "LibraryWeb",
    date: "March, 2022",
    author: "E",
    image: libraryWeb,
    description:
      "Fully functional CRUD app that works like a community of book readers that allow users to search a book from Google Books API and consult its details, create their own book collections to classify them as pending, reading or read and find and consult the lists of other registered users.",
    technologies:
      "JavaScriptES6, HTML5, CSS3, Bootstrap, MongoDB, Mongoose, Node.js, ExpressJS, Handlebars",
    url: "https://librarywebih.herokuapp.com/",
  },
  {
    name: "PokeRex Game",
    date: "February, 2022",
    author: "E",
    image: pokeRex,
    description:
      "Fully functional game inspired by classic Chrome T-Rex dinosaur but with Pokemon theme, using HTML, CSS & JavaScript, with HTML canvas for graphics and deployed online using GitHub Pages.",
    technologies: "JavaScriptES6, HTML5, CSS3 (Graphics with Canvas)",
    url: "https://becquerelia.github.io/Game-Project-PokeRex/",
  },
];

function Projects() {
  const [allProjects, setAllProjects] = useState(projects);

  return (
    <div style={{ backgroundColor: "#6d11ab", paddingTop: "5rem" }}>
      <Typography gutterBottom variant="h4" component="div" color="white">
        MY PROJECTS
      </Typography>

      <Grid
        sx={{
          p: 5,
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
