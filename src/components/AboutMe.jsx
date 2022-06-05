//!IMPORTS:
import { Box, Button, Typography, Divider } from "@mui/material";
import fotoEva from "../assets/Eva.jpg";
import gitHubLogo from "../assets/github.png";
import linkedInLogo from "../assets/linkedin.png";

function AboutMe() {
  return (
    <Box
      id="about-me"
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
        <Typography gutterBottom variant="h5" component="div" color="#6d11ab">
          <b>Eva González Cagigas</b>
        </Typography>
        <Divider />
        <br />
        <Typography variant="body2" color="text.secondary">
          Hi! I'm a Spanish girl who enjoys with challenges, solving complex
          problems and trying to better myself. I love reading, science &
          technology and web development. I consider myself a loyal, committed,
          diligent, tenacious and resolutive person. And I’m 100% motivated to
          continue growing and learning every day! 🚀
        </Typography>
        <br />
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <Button
            sx={{ mx: 2 }}
            color="secondary"
            href="https://github.com/Becquerelia"
            target="_blank"
          >
            {" "}
            <img
              src={gitHubLogo}
              alt="Logo GitHub"
              width="15%"
              style={{ marginRight: "5px" }}
            />{" "}
            GitHub
          </Button>
          <Button
            sx={{ mx: 2 }}
            color="secondary"
            href="https://www.linkedin.com/in/evagonzalezcagigas"
            target="_blank"
          >
            {" "}
            <img
              src={linkedInLogo}
              alt="Logo GitHub"
              width="15%"
              style={{ marginRight: "5px" }}
            />{" "}
            LinkedIn
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default AboutMe;
