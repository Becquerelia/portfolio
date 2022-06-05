//!IMPORTS:
import { Grid, Box, Typography, Tab, Tabs } from "@mui/material";
import PropTypes from "prop-types";
import { useState } from "react";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

//!MAIN FUNCTION:
function Skills() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div  id="my-skills" style={{ paddingTop: "5rem" }}>
      <Typography gutterBottom variant="h4" component="div" color="#6d11ab">
        MY SKILLS
      </Typography>
      <Box
        sx={{
          flexGrow: 1,
          bgcolor: "background.paper",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          height: 300,
          py: 5          
        }}
      >
        <Tabs
          centered
          orientation="vertical"
          variant="scrollable"
          value={value}
          textColor="secondary"
          indicatorColor="secondary"
          onChange={handleChange}
          aria-label="Vertical tabs example"
          sx={{ borderRight: 2, borderColor: "#6d11ab" }}
        >
          <Tab label="Main Languages" {...a11yProps(0)} />
          <Tab label="Libraries" {...a11yProps(1)} />
          <Tab label="Frameworks" {...a11yProps(2)} />
          <Tab label="Packages" {...a11yProps(3)} />
          <Tab label="Server Tools" {...a11yProps(4)} />
          <Tab label="Database" {...a11yProps(5)} />
          <Tab label="Version Control" {...a11yProps(6)} />
        </Tabs>
        <TabPanel value={value} index={0}>
          HTML5 <br /> CSS <br /> JavaScriptES6
        </TabPanel>
        <TabPanel value={value} index={1}>
          ReactJS <br /> Redux
        </TabPanel>
        <TabPanel value={value} index={2}>
          Material UI <br /> Bootstrap <br /> Handlebars <br /> ExpressJS
        </TabPanel>
        <TabPanel value={value} index={3}>
          Stripe <br /> Cloudinary <br /> FullCallendar <br /> Nodemailer <br />{" "}
          Socket.io <br /> GoogleMaps Platform <br /> Leaflet
        </TabPanel>
        <TabPanel value={value} index={4}>
          Node.js <br /> API REST <br /> Postman <br /> Axios
        </TabPanel>
        <TabPanel value={value} index={5}>
          noSQL <br /> MongoDB <br /> Mongoose
        </TabPanel>
        <TabPanel value={value} index={6}>
          Git <br /> GitHub <br /> GitHub Pages <br /> Heroku <br /> Netlify
        </TabPanel>
      </Box>
    </div>
  );
}

export default Skills;
