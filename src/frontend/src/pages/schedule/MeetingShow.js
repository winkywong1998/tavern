import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import NavigationBar from "../../components/layout/NavigationBar";
import TeamShow from "./TeamShow";
import {useDeleteMeetingMutation, useGetMeetingByIdMutation} from "../../components/store/api/meetApi";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import Groups2Icon from '@mui/icons-material/Groups2';

const MeetingShow = () => {
    const {meetingId} = useParams();
    const [getMeetParam, {error: getMeetParamError}] = useGetMeetingByIdMutation()
    const [thisMeeting, setThisMeeting] = useState([]);

    const navLink = useNavigate()
    const [deleteMeeting, {error: deleteMeetingError}] = useDeleteMeetingMutation()

    const deleteHandler = (e) => {
        deleteMeeting({
            id: e
        }).then(res => {
            if (res.error) {
                console.log(res.error)
            }
        })
        navLink("/schedule", {replace: true})
        this.forceUpdate()
    }

    useEffect(() => {
        const getMeetingParam = async () => {
            getMeetParam({
                id: meetingId
            }).then(res => {
                if (!res.error) {
                    if (res.data) {
                        setThisMeeting(res.data)
                    }
                }
            })
        }
        getMeetingParam();
    }, []);
    return (
        <div>
            <NavigationBar/>
            <div className="row" style={{'marginLeft': '8%', 'marginRight': '8%'}}>
                <span style={{
                    'marginTop': '10px',
                    'marginottom': '10px',
                    'fontSize': '25px',
                    width: '80%',
                    'marginLeft': 'auto',
                    'marginRight': 'auto'
                }}
                      className="badge bg-secondary">
                    {thisMeeting.title}
                </span>

                <br/>
                <div>
                    <List sx={{width: '100%', bgcolor: 'background.paper'}}>
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar>
                                    <WorkIcon/>
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary="Description" secondary={thisMeeting.description}/>
                        </ListItem>
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar>
                                    <CalendarMonthIcon/>
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary="Schedule Time" secondary={thisMeeting.meetingTime}/>
                        </ListItem>
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar>
                                    <BeachAccessIcon/>
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary="Status"
                                          secondary={thisMeeting.meetingStatus === 0 ? 'Scheduled Meeting' :
                                              thisMeeting.meetingStatus === 1 ? 'In Progressed Meeting' : thisMeeting.meetingStatus === 2 ? 'Finished Meeting' : 'Canceled Meeting'}/>
                        </ListItem>
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar>
                                    <Groups2Icon/>
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary="Meeting Type"
                                          secondary={thisMeeting.isGroupMeeting === 0 ? 'Individual Meeting' : 'Group Meeting'}/>
                        </ListItem>
                    </List>
                </div>
            </div>
            <TeamShow Teams={thisMeeting.participants} meetingType={thisMeeting.isGroupMeeting}/>
        </div>
    );
};

export default MeetingShow;