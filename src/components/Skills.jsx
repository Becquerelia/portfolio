//!IMPORTS:
import { Box, Typography, Tab, Tabs } from "@mui/material";
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
    <div id="my-skills" style={{ paddingTop: "5rem" }}>
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
          py: 5,
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
          <Tab label="Programming Language" {...a11yProps(0)} />
          <Tab label="MarkUp/Styling Language" {...a11yProps(1)} />
          <Tab label="Frameworks & Libraries" {...a11yProps(2)} />
          <Tab label="Backend & Database" {...a11yProps(3)} />
          <Tab label="Testing" {...a11yProps(4)} />
          <Tab label="Version Control & Tools" {...a11yProps(5)} />
          <Tab label="Package Managers" {...a11yProps(6)} />
          <Tab label="Methodologies" {...a11yProps(7)} />
        </Tabs>
        <TabPanel value={value} index={0}>
          <b>
           JavaScript ES6 <br /> TypeScript
          </b>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <b>
           HTML5 <br /> CSS3
          </b>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <b>
           ReactJS <br /> (Hooks & HOCs) <br /> Redux <br /> Material UI <br /> Bootstrap
          </b>
        </TabPanel>
        <TabPanel value={value} index={3}>
          <b>
           ExpressJS <br /> Node.js <br /> API REST <br /> Postman <br /> Axios <br /> noSQL <br /> MongoDB <br /> Mongoose <br /> Handlebars 
          </b>
        </TabPanel>
        <TabPanel value={value} index={4}>
          <b>
          Jest <br /> Cypress <br /> (E2E & Components)
          </b>
        </TabPanel>
        <TabPanel value={value} index={5}>
          <b>
          Git <br /> GitHub <br /> (Actions & Pages) <br /> Heroku <br /> Netlify <br /> VS Code
          </b>
        </TabPanel>
        <TabPanel value={value} index={6}>
          <b>
           NPM <br /> (Stripe <br /> Cloudinary <br /> FullCallendar <br /> Nodemailer{" "}
           <br /> Socket.io <br /> GoogleMaps Platform <br /> Leaflet... )
          </b>
        </TabPanel>
        <TabPanel value={value} index={7}>
          <b>
           Jira <br /> Trello <br /> Kanban <br /> Agile <br /> Scrum <br /> OKR
          </b>
        </TabPanel>
      </Box>
    </div>
  );
}

export default Skills;
