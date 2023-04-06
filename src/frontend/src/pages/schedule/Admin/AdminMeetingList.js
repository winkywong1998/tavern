import React, {useState, useEffect, useRef} from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

import Rating from 'react-rating';
import StarGrey from '../../../assets/images/star-grey.png'
import StarYellow from '../../../assets/images/star-yellow.png'

import {Pagination} from '../../../components/Pagination';
import {useDeleteMeetingMutation, useGetMeetingPageMutation} from "../../../components/store/api/meetApi";
import {useDispatch, useSelector} from "react-redux";
import {getMeetingPage} from "../../../components/store/reducer/meetSlice";
import moment from "moment";

const AdminMeetingList = ({ pageNum, pageSize }) => {

    const [getMeetingPages, {error: getMeetingPageError}] = useGetMeetingPageMutation()
    const dispatch = useDispatch()
    const navLink = useNavigate()
    const [meetings, setMeetings] = useState([]);
    const [pages, setPages] = useState(0);
    const [deleteMeeting, {error: deleteMeetingError}] = useDeleteMeetingMutation()

    const deleteHandler = (e) => {
        deleteMeeting({
            id: e
        }).then(res=> {
            if (res.error) {
                console.log(res.error)
            }
        })
        window.location.reload();
    }

    useEffect(() => {
        const getAllMeetings = async () => {
            getMeetingPages({
                pageNum: pageNum,
                pageSize: pageSize
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

                        dispatch(getMeetingPage({
                            meetingListByPage: res.data.data
                        }))
                    }
                }
            })
        }
        getAllMeetings();
    }, []);

    return(
        <div className="row" style={{marginLeft: '10%',marginRight: '10%', marginBottom: '2%'}}>
            {meetings.map(meeting=>{
                return (
                    <div className="col-4 mb-5" key={meeting.id} style={{width:'24%'}}>
                        <div className="card h-100" style={{textAlign: 'center', padding:'10px', borderRadius:'10px',
                            marginRight:'1%', boxShadow: '10px 10px 10px rgba(30,30,30,0.5)'}}>
                            <div className="card-body">
                                <h5 className="card-title">Topic: {meeting.title}</h5>
                                <h6 className="card-title">Time: {meeting.meetingTime}</h6>
                                <h6 className="card-title">Hosted by {meeting.hostId}</h6>
                                <h6 className="card-title">Status: {meeting.meetingStatus===0?'Scheduled':
                                    meeting.meetingStatus===1?'In Progress':meeting.meetingStatus===2?'Finished':'Canceled'}</h6>
                            </div>
                            <div className="card-footer">
                                <Link to={{ pathname: `/meeting/${meeting.id}` }}>
                                    <button className='btn btn-primary' > Details </button>
                                </Link>&nbsp;&nbsp;
                                {
                                    meeting.meetingStatus!==3?<button onClick={
                                        (e)=>deleteHandler(meeting.id)}
                                                                      className='btn btn-primary'>
                                        Cancel </button> : ''
                                }
                            </div>

                        </div>

                    </div>
                )
            })}
            <Pagination
                params={{pageNum: pageNum, maxPage: pages}} baseUrl={'/meetinglist'} />
        </div>
    );
}
export default AdminMeetingList;