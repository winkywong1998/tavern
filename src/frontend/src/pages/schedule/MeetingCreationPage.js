import React, {useRef, useState} from 'react';
import NavigationBar from "../../components/layout/NavigationBar";
import moment from "moment";
import {useCreateMeetingMutation} from "../../components/store/api/meetApi"

const MeetingCreationPage = () => {

    const titleValue = useRef()
    const hostId = localStorage.getItem('id')
    const [isGroupMeeting, setIsGroupMeeting] = useState(1);
    const descValue = useRef()

    const [saveMeeting, {error: saveMeetingError}] = useCreateMeetingMutation()

    const submitHandler = (e) => {
        e.preventDefault()
        saveMeeting({
            title: titleValue.current.value,
            hostId: Number(hostId),
            meetingTime: moment(Date.now()).format("YYYY-MM-DDTHH:mm:ss"),
            isGroupMeeting: isGroupMeeting,
            description: descValue.current.value,
            participantsId: []
        }).then(res=> {
            if (!res.error) {
                console.log(res.data)
            }
        })

        window.location.assign(`${process.env.REACT_APP_MAIN_URL}/meetinglist?pageNum=1`)
    }

    return (
        <div>
            <NavigationBar/>
            <div>
                <section className="vh-100">
                    <form onSubmit={submitHandler}>
                        <div className="container-fluid h-custom">
                            <div className="row d-flex justify-content-center align-items-center h-100">
                                <div className="col-md-9 col-lg-6 col-xl-5">
                                    <div className="form-floating">
                                        <textarea ref={titleValue} className="form-control" placeholder="Leave a comment here"
                                                  id="floatingTextarea"></textarea>
                                        <label htmlFor="floatingTextarea">Title</label>
                                    </div>
                                    <br/>
                                    <div className="form-floating">
                                        <textarea ref={descValue} className="form-control" placeholder="Leave a comment here"
                                                  id="floatingTextarea"></textarea>
                                        <label htmlFor="floatingTextarea">Meeting Description</label>
                                    </div>
                                    <br/>

                                    <div className="form-outline mb-3">
                                        <input value={isGroupMeeting} defaultChecked={true} onChange={e => setIsGroupMeeting(Number(e.target.value))}
                                               style={{marginLeft:'0px'}} type = "radio" name = "pool" value = "1"/> Group Meeting
                                        <input value={isGroupMeeting} onChange={e => setIsGroupMeeting(Number(e.target.value))}
                                               style={{marginLeft:'130px'}} type = "radio" name = "pool" value = "0"/> Individual Meeting
                                    </div>

                                    <div className="d-flex justify-content-between align-items-center ">
                                        <a href="/meetinglist" className="text-body align-items-center">Return to Meeting List</a>
                                        <button className="btn btn-primary btn-lg" >
                                            Register a Meeting
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </section>
            </div>
        </div>
    );
};

export default MeetingCreationPage;