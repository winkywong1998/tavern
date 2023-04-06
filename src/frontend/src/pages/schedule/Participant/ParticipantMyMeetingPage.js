import React from 'react';
import NavigationBar from "../../../components/layout/NavigationBar";
import {Link, useSearchParams} from "react-router-dom";
import RegisteredMeetingList from "./RegisteredMeetingList";
import background from "../../../assets/images/629055.png";

const ParticipantMyMeetingPage = () => {

    const pageSize = 8;
    const [searchParams, setSearchParams] = useSearchParams();
    const pageNum = searchParams.get("pageNum") || 1

    return (
        <div style={{backgroundImage:`url(${background})`,height: 'auto', minHeight:'100vh',width:'100%', position: "absolute"}}>
            <NavigationBar/>
            <div style={{marginBottom: '1%'}}>
                <div className="row align-items-center" style={{ marginLeft: '10%', marginTop:'1%', marginRight:'10%'}}>
                    <div className="col-lg-5" align = "center"  style={{width:'100%',color: 'white'}}>
                        <div style={{marginBottom:'1%'}}>
                            <h1>Meeting Scheduler</h1>
                            <h4>My Registered Meetings</h4>
                        </div>
                        <Link to={'/meetinglist'}>
                            <button className='btn btn-primary'>
                                Register for a new meeting!
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
            <br/>
            <RegisteredMeetingList pageNum={pageNum} pageSize={pageSize}/>
        </div>
    );
};

export default ParticipantMyMeetingPage;