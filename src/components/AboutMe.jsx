//!IMPORTS:
import {
  Box,
  Button,
  TextField,
  Typography,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Card,
  CardActions,
  CardActionArea,
  CardContent,
  CardMedia,
  Divider,
  Link,
} from "@mui/material";
import fotoEva from "../assets/Eva.jpg";

function AboutMe() {
  return (
    <Box
      sx={{
        m: 10,
        flexWrap: "wrap",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          width: 400,
          height: 300,
        }}
      >
        <img src={fotoEva} alt="Foto Eva" className="photo" />
      </Box>
      <Box
        sx={{
          mt: 3,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          width: 460,
          height: 300,
        }}
      >
        <Typography gutterBottom variant="h5" component="div">
          Eva González Cagigas
        </Typography>
        <Divider />
        <br />
        <Typography variant="body2" color="text.secondary">
          Hi! I'm a Spanish girl who enjoys with challenges, solving complex
          problems and trying to better myself. I love reading, science &
          technology and web development. I consider myself a loyal, committed, diligent, tenacious and
          resolutive person. And I’m 100% motivated to continue growing and
          learning every day! 🚀
        </Typography>
        <br />
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center"
          }}
        >
        <Button  sx={{ mx:2 }} color="secondary" href="https://github.com/Becquerelia">GitHub</Button>
        <Button sx={{ mx:2 }} color="secondary" href="https://www.linkedin.com/in/evagonzalezcagigas">LinkedIn</Button>
        </Box>
      </Box>
    </Box>
  );
}

export default AboutMe;
