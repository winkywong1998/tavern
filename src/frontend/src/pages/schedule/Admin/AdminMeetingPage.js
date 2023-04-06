import React, {useEffect} from 'react';
import {Link, useSearchParams} from "react-router-dom";
import AdminMeetingList from "./AdminMeetingList";

export const AdminMeetingPage = () => {

    const pageSize = 8;
    const [searchParams, setSearchParams] = useSearchParams();
    const pageNum = searchParams.get("pageNum") || 1

    return (
        <div>
            <div className="row align-items-center" style={{background:'#eee', padding:'20px', marginLeft:'110px', marginRight:'110px'}}>
                <div className="col-lg-5" style={{marginLeft:'300px', width:'700px'}}>
                    <h1 className="" style={{marginLeft:'-130px'}}>Meeting Scheduler</h1>
                    <p style={{marginLeft:'-130px'}}>View all historical and scheduled meetings.</p>
                    <Link to={'/meeting/create'}>
                        <button className='btn btn-primary' style={{marginLeft:'250px'}}>
                            Create a Meeting
                        </button>
                    </Link>
                </div>
            </div>
            <br/>
            <AdminMeetingList pageNum={pageNum} pageSize={pageSize} />
        </div>
    );
};

export default AdminMeetingPage;