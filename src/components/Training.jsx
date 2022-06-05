//!IMPORTS:
import { Grid, Box, Typography } from "@mui/material";
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineOppositeContent, TimelineDot } from '@mui/lab';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import HotelIcon from '@mui/icons-material/Hotel';
import RepeatIcon from '@mui/icons-material/Repeat';
import { useState } from "react";

//!MAIN FUNCTION:
function Training() {
  return (
    <div style={{ backgroundColor: "#6d11ab", paddingTop: "5rem", paddingBottom: "3rem" }}>
      <Typography gutterBottom variant="h4" component="div" color="white">
        TRAINING
      </Typography>
      <Timeline position="alternate" sx={{py:5}} >
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          align="right"
          variant="body2"
          color="white"
        >
          9:30 am
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot variant="outlined" sx={{ bgcolor: 'white' }} >
            <WorkIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span" color="white">
            Eat
          </Typography>
          <Typography color="white" >Because you need strength</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant="body2"
          color="white"
        >
          10:00 am
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot variant="outlined" sx={{ bgcolor: 'white' }} >
            <WorkIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span" color="white" >
            Code
          </Typography>
          <Typography color="white" >Because it&apos;s awesome!</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot variant="outlined" sx={{ bgcolor: 'white' }}>
            <SchoolIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span" color="white" >
            Sleep
          </Typography>
          <Typography color="white" >Because you need rest</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot variant="outlined" sx={{ bgcolor: 'white' }} >
            <RepeatIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span" color="white" >
            Repeat
          </Typography>
          <Typography color="white" >Because this is the life you love!</Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
    </div>
  );
}

export default Training;
