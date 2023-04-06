import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Typewriter} from "react-simple-typewriter";
import {Grow} from "@mui/material";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import degreeMap from "../../components/store/map/DegreeMap";
import majorMap from "../../components/store/map/MajorMap";
import roIMap from "../../components/store/map/RoIMap";
import timeZoneMap from "../../components/store/map/TimeZoneMap";

const TeamShow = () => {

    const teamId = localStorage.getItem("teamId");
    // const [team, setTeam] = useState({});
    const [participants, setParticipants] = useState([]);
    useEffect(() => {
        const getTeamDetails = async () => {
            const participantsResponse = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/team/member/${teamId}`)
            setParticipants(participantsResponse.data);
            console.log(participantsResponse.data)
        }
        getTeamDetails();
    }, [teamId]);

    const [checked, setChecked] = useState(false);
    const handleDone = () => {
        setChecked(true)
    }

    return (
        <div>
            <div className="row align-items-center border border-5 rounded-2 " style={{padding:'1px', marginLeft: '1%', marginRight:'1%'}}>
                <div className="col-lg-5" style={{marginLeft:'5%', width:'95%'}}>
                    <h1 className="" style={{marginTop:'3%', marginBottom:'5%'}} align = "center">
                        <span style={{ color: 'black', fontWeight: '10' }}>
                            <Typewriter words={['Your team is matched!', 'You are Team '+ teamId]} cursor
                                        loop={1}
                                        typeSpeed={60}
                                        delaySpeed={5}
                                        deleteSpeed={40}
                                        onLoopDone={handleDone}/>
                        </span>
                    </h1>
                    {participants && participants.map(participant => {
                        const email_full = "mailto:"+ participant.email
                        return (
                            <div style={{marginBottom:'8%'}}>
                                <Grow in={true} style={{transformOrigin: '0 0 0'}} timeout={1000}>
                                    <Card style={{marginLeft:"2%", marginRight:"5%"}} >
                                        <CardContent style={{marginBottom:'-5%'}}>
                                            <Typography gutterBottom variant="h5" component="div">
                                                {participant.fname} {participant.lname}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                Basic information about {participant.fname} {participant.lname}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                Email: {participant.email}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                Degree: {degreeMap[participant.degree]}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                Year of Degree: {participant.year}th grade
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                Major: {majorMap[participant.major]}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                Number of Experience: {participant.numOfExp} year(s)
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                School: {participant.school}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                Research of Industry: {roIMap[participant.rorI]}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                Time Zone: {timeZoneMap[participant.timeZone]}
                                            </Typography>
                                        </CardContent>
                                        <CardActions>
                                            <Button size="small">
                                                <a href={email_full}>Send a Email</a>
                                            </Button>
                                        </CardActions>
                                    </Card>
                                </Grow>

                            </div>
                            );
                    })}
                    </div>
            </div>
            <br/>
        </div>
    );
}

export default TeamShow;
