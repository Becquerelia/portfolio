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
    <Box sx={{ m: 10, display:"flex", flexDirection:"row", justifyContent:"center" }} >
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
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </Card>
    </Box>
  );
}

export default AboutMe;
