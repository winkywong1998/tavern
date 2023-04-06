import React, {useEffect, useState} from 'react';
import {useGetMeetingByUserMutation, useQuitMeetingMutation} from "../../../components/store/api/meetApi";
import {Link} from "react-router-dom";

const RegisteredMeetingList = ({ pageNum, pageSize }) => {

    const [getRegistered, {error: getRegisteredError}] = useGetMeetingByUserMutation()
    const [quitMeeting, {error: quitMeetingError}] = useQuitMeetingMutation()
    const [registered, setRegistered] = useState([])
    const [registeredTeam, setRegisteredTeam] = useState([])

    const quitHandler = (meetingId, type) => {
        console.log(Number(type)===1?1:2)
        console.log(Number(type)===1?localStorage.getItem('teamId'):localStorage.getItem('id'))
        console.log(meetingId)
        quitMeeting({
            idType: Number(type)===1?1:2,
            id: Number(type)===1?localStorage.getItem('teamId'):localStorage.getItem('id'),
            meetingId: meetingId
        }).then(res=>{
            if (res.error) {
                console.log(res.error)
            }
        })
        window.location.reload();
    }

    useEffect(()=>{
        const getRegisteredMeeting = async () => {
            getRegistered({
                idType: 2,
                id: localStorage.getItem('id')
            }).then(res=>{
                if (!res.error) {
                    console.log(res.data)
                    if (res.data) {
                        setRegistered(res.data)
                    }
                }
            })

            getRegistered({
                idType: 1,
                id: localStorage.getItem('teamId')
            }).then(res=>{
                if (!res.error) {
                    console.log(res.data)
                    if (res.data) {
                        setRegisteredTeam(res.data)
                    }
                }
            })
        }
        getRegisteredMeeting()
    }, []);

    return (
        <div className="row" style={{marginLeft: '10%',marginRight: '10%', marginBottom: '2%'}}>
            <h2 style={{textAlign:'center', color: 'white', marginBottom: '2%'}}>Individual Meeting</h2>
            {registered.map(registerMeeting=>{
                return(
                    <div className="col-4 mb-5" key={registerMeeting.id} style={{width:'24%'}}>
                        <div className="card h-100" style={{textAlign: 'center', padding:'10px', borderRadius:'10px',
                            marginRight:'1%', boxShadow: '10px 10px 10px rgba(30,30,30,0.5)'}}>
                            <div className="card-body">
                                <h5 className="card-title">Topic: {registerMeeting.title}</h5>
                                <h6 className="card-title">Description: {registerMeeting.description}</h6>
                                <h6 className="card-title">Time: {registerMeeting.meetingTime}</h6>
                            </div>
                            <div className="card-footer">
                                <Link to={{ pathname: `/meeting/${registerMeeting.id}`, state:{'isHide': true} }}>
                                    <button className='btn btn-primary' > Details </button>
                                </Link>&nbsp;&nbsp;
                                <button className='btn btn-primary' onClick={()=>quitHandler(registerMeeting.id, registerMeeting.isGroupMeeting)}> Quit </button>
                            </div>
                        </div>
                    </div>
                )
            })
            }
            <p></p>
            <h2 style={{textAlign:'center', color: 'white', marginBottom: '2%'}}>Group Meeting</h2>
            {registeredTeam.map(
                registerMeeting=>{
                return(
                    <div className="col-4 mb-5" key={registerMeeting.id} style={{width:'24%'}}>
                        <div className="card h-100" style={{textAlign: 'center', padding:'10px', borderRadius:'10px',
                            marginRight:'1%', boxShadow: '10px 10px 10px rgba(30,30,30,0.5)'}}>
                            <div className="card-body">
                                <h5 className="card-title">Topic: {registerMeeting.title}</h5>
                                <h6 className="card-title">Description: {registerMeeting.description}</h6>
                                <h6 className="card-title">Time: {registerMeeting.meetingTime}</h6>
                            </div>
                            <div className="card-footer">
                                <Link to={{ pathname: `/meeting/${registerMeeting.id}`, state:{'isHide': true} }}>
                                    <button className='btn btn-primary' > Details </button>
                                </Link>&nbsp;&nbsp;
                                <button className='btn btn-primary' onClick={()=>quitHandler(registerMeeting.id, registerMeeting.isGroupMeeting)}> Quit </button>
                            </div>
                        </div>
                    </div>
                )
            })
            }

        </div>
    );
};

export default RegisteredMeetingList;