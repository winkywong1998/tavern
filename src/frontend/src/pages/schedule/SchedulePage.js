import React from 'react';
import NavigationBar from "../../components/layout/NavigationBar";
import {useSelector} from "react-redux";
import ParticipantMeetingPage from "./Participant/ParticipantMeetingPage";
import AdminMeetingPage from "./Admin/AdminMeetingPage";
import background from "../../assets/images/629055.png";

const SchedulePage = () => {
    const authorization = useSelector(state => state.authorize)
    const utype = authorization.utype
    return (
        <div style={{backgroundImage:`url(${background})`,height: 'auto', minHeight:'100vh',width:'100%', position: "absolute"}}>
            <NavigationBar/>
            
            <div>
                {
                    (utype === 'p') && <ParticipantMeetingPage/>
                }
                {
                    (utype === 'a') && <AdminMeetingPage/>
                }
            </div>
        </div>
    );
};

export default SchedulePage;