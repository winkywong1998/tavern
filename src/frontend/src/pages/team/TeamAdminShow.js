import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import NavigationBar from "../../components/layout/NavigationBar";
import axios from "axios";
import {Grow} from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";

const TeamAdminShow = () => {
    const params = useParams()
    const teamId = params.id
    const [participants, setParticipants] = useState([]);
    useEffect(() => {
        const getTeamDetails = async () => {
            const participantsResponse = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/team/member/${teamId}`)
            setParticipants(participantsResponse.data);
        }
        getTeamDetails();
        console.log(participants)
    }, [teamId]);

    return (
        <div>
            <NavigationBar/>
            <div>
                <span style={{'fontSize': '30px', textAlign: 'center', display: 'block', padding: '10px'}}>
                    Review for Team {teamId}
                </span>
                <div className="row align-items-center border border-5 rounded-2 "
                     style={{padding: '10px', marginLeft: '10%', marginRight: '10%'}}>
                    <div className="col-lg-5" style={{marginLeft: '5%', width: '95%'}}>
                        {participants && participants.map(participant => {
                            const email_full = "mailto:" + participant.email
                            return (
                                <div style={{marginBottom: '3%'}}>
                                    <Grow in={true} style={{transformOrigin: '0 0 0'}}
                                          timeout={500*2}>
                                        <Card style={{marginLeft: "2%", marginRight: "5%"}}>
                                            <CardContent style={{marginBottom: '5%'}}>
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
                                                    Degree: {participant.degree}
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary">
                                                    Major: {participant.major}
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary">
                                                    Number of Experience: {participant.numOfExp}
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary">
                                                    School: {participant.school}
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary">
                                                    Time Zone: {participant.timeZone}
                                                </Typography>
                                            </CardContent>
                                            <CardActions style={{marginTop: '0%'}}>
                                                <Button size="small">
                                                    <a href={email_full}>Send an Email</a>
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
        </div>
    );
};

export default TeamAdminShow;