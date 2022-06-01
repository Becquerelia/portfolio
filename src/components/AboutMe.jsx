//!IMPORTS:
import {
  Box,
  TextField,
  Typography,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Card,
  CardContent,
  Divider,
} from "@mui/material";
import fotoEva from "../assets/Eva.jpg";

function AboutMe() {
  return (
    <Card
      variant={"outlined"}      
      
      sx={{ py: 5, px: 8, mx: 3, my: 5, border:"none" }}      
    >
      <CardContent sx={{ p: 1 }} className="cardStructure" maxWidth={"sm"} >
      <Box>
        <img
          src={fotoEva}
          alt={"Foto Eva"}
          width="50%"
          className="photo"
        />
      </Box>
        
        <Box>

        <Typography
                maxWidth={"sm"}
                sx={{ fontSize: 15, fontWeight: "bold" }}
                color="black"
                gutterBottom
                align={"center"}
              >
                Eva GC
              </Typography>
              <Divider />
              <Typography
                maxWidth={"sm"}
                sx={{ fontSize: 15, fontWeight: "bold" }}
                color="black"
                gutterBottom
                align={"center"}
              >
                Eva GC
              </Typography>
              <Divider />
              </Box>
      </CardContent>
    </Card>
  );
}

export default AboutMe;
