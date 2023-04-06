import React from 'react';
import {useSelector} from "react-redux";
import MatchRegister from "../match/MatchRegister";
import TeamShow from "../team/TeamShow";
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import RepeatIcon from '@mui/icons-material/Repeat';
import Typography from '@mui/material/Typography';
import TerminalIcon from '@mui/icons-material/Terminal';
import Grid from '@mui/material/Grid';
import HistoryPost from "./HistoryPost";
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import FavoriteIcon from '@mui/icons-material/Favorite';
import NavigationIcon from '@mui/icons-material/Navigation';
import {Link} from "react-router-dom";
import {Grow} from "@mui/material";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import roIMap from "../../components/store/map/RoIMap";
import majorMap from "../../components/store/map/MajorMap";
import timeZoneMap from "../../components/store/map/TimeZoneMap";
import degreeMap from "../../components/store/map/DegreeMap";


function stringToColor(string) {
    let hash = 0;
    let i;
    for (i = 0; i < string.length; i += 1) {
        hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }
    let color = '#';
    for (i = 0; i < 3; i += 1) {
        const value = (hash >> (i * 8)) & 0xff;
        color += `00${value.toString(16)}`.slice(-2);
    }
    return color;
}

function stringAvatar(name) {
    return {
        sx: {
            bgcolor: stringToColor(name),
        },
        children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
    };
}

const PersonalPage = () => {
    const authorization = useSelector(state => state.authorize)
    const email = authorization.email
    const numOfExp = authorization.numOfExp
    const major = authorization.major
    const degree = authorization.degree
    const school = authorization.school
    const teamId = authorization.teamId
    const fname = authorization.fname
    const lname = authorization.lname
    const combined_name = fname + " " + lname
    const year = localStorage.getItem('year')
    const timeZoneId = localStorage.getItem('timeZone')
    const rorIId = localStorage.getItem('rorI')

    return (
        <div style={{backgroundColor:'#e5f2ff',height: 'auto', minHeight:'100vh', width:'100%', position: "absolute"}}>
            <Grid container spacing={2}>
                <Grid item xs={5}>
                    <div style={{"marginLeft":"15%"}}>
                        <Stack style={{marginLeft:"10px", marginBottom:"10px", marginTop:"10px"}} direction="row" spacing={2}>
                            <Avatar {...stringAvatar(combined_name)} />
                            <h3> Personal Information</h3>
                            <br/>
                        </Stack>
                        <Grow in={true} style={{transformOrigin: '0 0 0'}} timeout={500*2}>
                            <Card style={{marginLeft:"2%", marginRight:"5%"}} >
                                <CardContent >
                                    <Typography gutterBottom variant="h5" component="div">
                                        {fname} {lname}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Basic information about {fname} {lname}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Email: {email}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Year of Experience: {numOfExp} Year(s)
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Major: {majorMap[major]}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        School: {school}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Degree: {degreeMap[degree]}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Year of Degree: {year}th grade
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Research or Industry: {roIMap[rorIId]}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Time Zone: {timeZoneMap[timeZoneId]}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grow>
                    </div>
                </Grid>
                <Grid item xs={7}>
                    <div>
                        <Timeline position="alternate">
                            <TimelineItem>
                                <TimelineOppositeContent
                                    sx={{ m: 'auto 0' }}
                                    align="right"
                                    variant="h7"
                                    color="text.secondary">
                                    Step 1
                                </TimelineOppositeContent>
                                <TimelineSeparator>
                                    <TimelineConnector />
                                    <TimelineDot>
                                        <FastfoodIcon />
                                    </TimelineDot>
                                    <TimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent sx={{ py: '12px', px: 2 }}>
                                    <Typography variant="h7" component="span">
                                        Match and meet your team
                                    </Typography>
                                </TimelineContent>
                            </TimelineItem>
                            <TimelineItem>
                                <TimelineOppositeContent
                                    sx={{ m: 'auto 0' }}
                                    variant="h7"
                                    color="text.secondary">
                                    Step 2
                                </TimelineOppositeContent>
                                <TimelineSeparator>
                                    <TimelineConnector />
                                    <TimelineDot color="primary">
                                        <RepeatIcon />
                                    </TimelineDot>
                                    <TimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent sx={{ py: '12px', px: 2 }}>
                                    <Typography variant="h7" component="span">
                                        Reserve a meeting
                                    </Typography>
                                </TimelineContent>
                            </TimelineItem>
                            <TimelineItem>
                                <TimelineSeparator>
                                    <TimelineConnector />
                                    <TimelineDot color="primary" variant="outlined">
                                        <TerminalIcon />
                                    </TimelineDot>
                                    <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
                                </TimelineSeparator>
                                <TimelineContent sx={{ py: '12px', px: 2 }}>
                                    <Typography variant="h7" component="span">
                                        Step 3
                                    </Typography>
                                    <Typography>Prepare it!</Typography>
                                </TimelineContent>
                            </TimelineItem>
                            <TimelineItem>
                                <TimelineSeparator>
                                    <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
                                    <TimelineDot color="secondary">
                                        <LaptopMacIcon />
                                    </TimelineDot>
                                    <TimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent sx={{ py: '12px', px: 2 }}>
                                    <Typography variant="h7" component="span">
                                        Step 4
                                    </Typography>
                                    <Typography>Enjoy and get reward!</Typography>
                                </TimelineContent>
                            </TimelineItem>
                        </Timeline>
                    </div>
                    <div style={{marginLeft:'50%'}}>
                        <button className="btn btn-primary" type="button" data-bs-toggle="offcanvas"
                                data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                            Check How Meeting Works
                        </button>
                        <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasExample"
                             aria-labelledby="offcanvasExampleLabel">
                            <div className="offcanvas-header">
                                <h5 className="offcanvas-title" id="offcanvasExampleLabel">Instruction</h5>
                                <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas"
                                        aria-label="Close"></button>
                            </div>
                            <div className="offcanvas-body">
                                <div>
                                    We offer great service for matching people with brilliant ideas and similar career paths.
                                    Here is some instructions about how meeting module works and everything else.
                                </div>
                                <br/>
                                <div className="dropdown mt-3">
                                    <button className="btn btn-secondary dropdown-toggle" type="button"
                                            id="dropdownMenuButton" data-bs-toggle="dropdown">
                                        Quick Links
                                    </button>
                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                        <li><Link className="dropdown-item" to={'/about'}>About Tavern Basics</Link></li>
                                        <li><Link className="dropdown-item" to={'/schedule'}>Available Meeting</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={6}>
                    <HistoryPost/>
                </Grid>
                <Grid item xs={6}>
                    <div style={{marginRight:"10%"}}>
                        {teamId ? <TeamShow teamId={teamId}/> : <MatchRegister/>}
                    </div>
                </Grid>
                <Grid item xs={12}>
                    <div style={{float:"right", marginRight:"10%"}}>
                        <Box sx={{ '& > :not(style)': { m: 1 } }}>
                            <Fab variant="extended">
                                <Link to={"/mymeetings"}>
                                    <NavigationIcon sx={{ mr: 1 }} />
                                    Navigate to My Meeting
                                </Link>
                            </Fab>
                            <Fab disabled aria-label="like">
                                <FavoriteIcon />
                            </Fab>
                        </Box>
                    </div>
                </Grid>
            </Grid>
            <br/>
        </div>
    );
};

export default PersonalPage;