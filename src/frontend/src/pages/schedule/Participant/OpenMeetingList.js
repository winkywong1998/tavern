import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
    useAttendMeetingMutation,
    useGetUnregisteredMeetingPageMutation
} from "../../../components/store/api/meetApi";
import {Pagination} from "../../../components/Pagination";
import {Button} from "@mui/material";

const OpenMeetingList = ({ pageNum, pageSize, defineMeeting }) => {

    const [getUnMeetingPages, {error: getUnMeetingPageError}] = useGetUnregisteredMeetingPageMutation()
    const [registerMeeting, {error: registerMeetingeError}] = useAttendMeetingMutation()
    const [pages, setPages] = useState(0);
    const [meetings, setMeetings] = useState([]);


    useEffect(() => {
        const getOpenMeetings = async () => {
            getUnMeetingPages({
                idType: Number(defineMeeting),
                id: Number(defineMeeting)===2?localStorage.getItem('id'):localStorage.getItem('teamId'),
                pageNum: pageNum,
                pageSize: pageSize,
            }).then(res=>{
                if (!res.error) {
                    if (res.data) {
                        setMeetings(res.data.data)
                        const len = res.data.total / pageSize;
                        if (len % 1 === 0) {
                            setPages(Math.round(len));
                        } else {
                            setPages(Math.ceil(len));
                        }
                    }
                }
            })
        }
        getOpenMeetings();
    }, []);

    const registerHandler = (meetingId) => {
        registerMeeting({
            idType: Number(defineMeeting),
            id: Number(defineMeeting)===2?localStorage.getItem('id'):localStorage.getItem('teamId'),
            meetingId: meetingId
        }).then(res=>{
            if (res.error) {
                console.log(res.error)
            }
        })
        window.location.reload();
    }

    return (
        <div>
            {(Number(defineMeeting)===2) ||
            (Number(defineMeeting)===1 && localStorage.getItem('teamId') !== null) ?
                <div className="row" style={{marginLeft: '10%',marginRight: '10%', marginBottom: '2%'}}>
                    {meetings.map(meeting=>{
                        return (
                            <div className="col-4 mb-5" key={meeting.id} style={{width:'24%'}}>
                                <div className="card h-100" style={{textAlign: 'center', padding:'10px', borderRadius:'10px',
                                    marginRight:'1%', boxShadow: '10px 10px 10px rgba(30,30,30,0.5)'}}>
                                    <div className="card-body">
                                        <h5 className="card-title">Topic: {meeting.title}</h5>
                                        <h6 className="card-title">Description: {meeting.description}</h6>
                                        <h6 className="card-title">Time: {meeting.meetingTime}</h6>
                                        <h6 className="card-title">Status: {meeting.meetingStatus===0?'Scheduled':
                                            meeting.meetingStatus===1?'In Progress':meeting.meetingStatus===2?'Finished':'Canceled'}</h6>
                                    </div>
                                    <div className="card-footer">
                                        <Link to={{ pathname: `/meeting/${meeting.id}` }}>
                                            <button className='btn btn-primary' style={{marginBottom: "2px"}} > Details </button>
                                        </Link>&nbsp;&nbsp;&nbsp;
                                        {
                                            meeting.meetingStatus!==3?<button onClick={
                                                (e)=>registerHandler(meeting.id)}
                                                                              className='btn btn-primary'>
                                                Register </button> : ''
                                        }
                                    </div>

                                </div>

                            </div>
                        )

                    })}
                    <Pagination params={{pageNum: pageNum, maxPage: pages}}  baseUrl={'/meetinglist'} />
                </div>
                :
                <div>
                    <h3 style={{textAlign:"center", color:"white"}}>You are not a member of a team , please go to personal page to match.</h3>
                    <Link to={'/user-info'}>
                        <Button style={{'background-color':'white', marginRight:"40%", marginLeft: "40%", width:'20%'}}>Go to Personal</Button>
                    </Link>
                </div>

            }
        </div>


    );
}
export default OpenMeetingList;