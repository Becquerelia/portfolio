//!IMPORTS:
import { Typography } from "@mui/material";

//!MAIN FUNCTION:
function Footer() {
  return (
    <div
      style={{
        backgroundColor: "#6d11ab",
        paddingTop: "1rem",
        paddingBottom: "1rem",
      }}
    >
      <Typography gutterBottom variant="h6" component="div" color="white">
        © EVA G. CAGIGAS, 2022
      </Typography>
    </div>
  );
}

export default Footer;
