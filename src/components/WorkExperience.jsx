//!IMPORTS:
import { Typography } from "@mui/material";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineOppositeContent,
  TimelineDot,
} from "@mui/lab";
import WorkIcon from "@mui/icons-material/Work";

//!MAIN FUNCTION:
function WorkExperience() {
  return (
    <div
      id="work-experience"
      style={{
        backgroundColor: "#6d11ab",
        paddingTop: "5rem",
        paddingBottom: "3rem",
      }}
    >
      <Typography gutterBottom variant="h4" component="div" color="white">
        EXPERIENCE
      </Typography>
      <Timeline position="alternate" sx={{ py: 5 }}>
      <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            align="right"
            variant="body2"
            color="white"
          >
            July, 2022 - Currently
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot variant="outlined" sx={{ bgcolor: "white" }}>
              <WorkIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography variant="h7" component="span" color="white">
              Junior Software Engineer
            </Typography>
            <Typography color="white"> IKEA - Ingka Group Digital (Remote) </Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            align="right"
            variant="body2"
            color="white"
          >
            April, 2022 - June, 2022
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot variant="outlined" sx={{ bgcolor: "white" }}>
              <WorkIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography variant="h7" component="span" color="white">
              Full-Stack Web Developer
            </Typography>
            <Typography color="white"> FlamaTech (Remote) </Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            variant="body2"
            color="white"
          >
            April, 2022 - June, 2022
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot variant="outlined" sx={{ bgcolor: "white" }}>
              <WorkIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography variant="h7" component="span" color="white">
              Teacher Assistant in WebDev Bootcamp
            </Typography>
            <Typography color="white">IronHack (Remote)</Typography>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            variant="body2"
            color="white"
          >
            April, 2018 - March, 2020
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot variant="outlined" sx={{ bgcolor: "white" }}>
              <WorkIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography variant="h7" component="span" color="white">
              Embryologist
            </Typography>
            <Typography color="white">IVI-RMA</Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            variant="body2"
            color="white"
          >
            September, 2015 - September, 2016
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot variant="outlined" sx={{ bgcolor: "white" }}>
              <WorkIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography variant="h7" component="span" color="white">
              Junior Researcher in Neuroscience
            </Typography>
            <Typography color="white">
              Complutense University, Medicine School <br /> Neuroscience Lab
            </Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            variant="body2"
            color="white"
          >
            June, 2015 - September, 2015
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot variant="outlined" sx={{ bgcolor: "white" }}>
              <WorkIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography variant="h7" component="span" color="white">
              Junior Researcher in Neuroscience
            </Typography>
            <Typography color="white">
              Cajal Institute - CSIC (Spanish National Research Council ) <br />{" "}
              Neuronal Circuits Laboratory
            </Typography>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </div>
  );
}

export default WorkExperience;
