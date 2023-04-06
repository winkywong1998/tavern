import React, {useEffect, useState} from 'react';
import {Link, useSearchParams} from "react-router-dom";
import OpenMeetingList from "../Participant/OpenMeetingList";
export const ParticipantMeetingPage = () => {
    const pageSize = 8;
    const [searchParams, setSearchParams] = useSearchParams();
    const pageNum = searchParams.get("pageNum") || 1

    const texts = [
        {
            name: 'Individual Meeting',
            param: 2
        },{
            name: 'Group Meeting',
            param: 1
        }
    ]

    const [buttonText, setButtonText] = useState("Choose List to Show")
    const switchList = (e, text) => {
        localStorage.setItem('buttonText', text.name)
        setButtonText(text.name)
        window.location.reload()
    }


    return (
        <div>
            <div className="row align-items-center" style={{ marginLeft: '10%', marginTop:'1%', marginRight:'10%'}}>
                <div className="col-lg-5" align = "center"  style={{width:'100%',color: 'white'}}>
                    <div>
                        <h1><b>Meeting Scheduler</b></h1>
                        <h4>Feel free to review opened meetings and register them as you want!</h4>
                    </div>
                    <div style={{marginTop:'2%'}}>
                        <Link to={{ pathname: `/mymeetings` }}>
                            <button className='btn btn-primary'>
                                View My Meeting List
                            </button>
                        </Link>
                    </div>
                    <div className="dropdown" style={{marginBottom:'2%'}}>
                        <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown"
                                aria-expanded="false" style={{padding:'10px', marginTop: '2%'}}>
                            {localStorage.getItem('buttonText') }
                        </button>
                        <ul className="dropdown-menu">
                            {texts.map(text => {
                                return (
                                    <li key={text.id}>
                                        <button className="dropdown-item" onClick={(e) => switchList(e, text)}>{text.name }</button>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
            </div>
            <br/>
            {localStorage.getItem('buttonText') === 'Individual Meeting' ?
                <OpenMeetingList pageNum={pageNum} pageSize={pageSize} defineMeeting={2} />
                :
                <OpenMeetingList pageNum={pageNum} pageSize={pageSize} defineMeeting={1} />
            }
        </div>
    );
};

export default ParticipantMeetingPage;