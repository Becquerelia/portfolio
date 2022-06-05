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
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";

//!MAIN FUNCTION:
function WorkExperience() {
  return (
    <div
      style={{
        backgroundColor: "#6d11ab",
        paddingTop: "5rem",
        paddingBottom: "3rem",
      }}
    >
      <Typography gutterBottom variant="h4" component="div" color="white">
        WORK EXPERIENCE
      </Typography>
      <Timeline position="alternate" sx={{ py: 5 }}>
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            align="right"
            variant="body2"
            color="white"
          >
            April, 2022 - Currently
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot variant="outlined" sx={{ bgcolor: "white" }}>
              <WorkIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography variant="h6" component="span" color="white">
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
            <Typography variant="h6" component="span" color="white">
              Teacher Assistant at Full-Stack Web Development Bootcamp
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
            <Typography variant="h6" component="span" color="white">
              Embryologist & Researcher
            </Typography>
            <Typography color="white">IVI-RMA (Madrid & Valladolid)</Typography>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </div>
  );
}

export default WorkExperience;
