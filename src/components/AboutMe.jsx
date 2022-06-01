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
} from "@mui/material";
import fotoEva from "../assets/Eva.jpg";

function AboutMe() {
  return (
    <Box
      sx={{
        m: 10,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
      }}
    >
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="300"
            image={fotoEva}
            alt="Foto Eva"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Eva González Cagigas
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Hi! I'm a Spanish girl who enjoys with challenges, solving complex
              problems and trying to better myself. I love reading, science &
              technology and web development. I consider myself a loyal, committed, diligent,
              tenacious and resolutive person. And I’m 100% motivated
              to continue growing and learning every day! 🚀
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions sx={{
          display: "flex",
        flexDirection: "row",
        justifyContent: "center",
      }}>
          <Button size="small" color="secondary">
            GitHub
          </Button>
          <Button size="small" color="secondary">
            LinkedIn
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
}

export default AboutMe;
