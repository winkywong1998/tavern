import React, { useState, useEffect } from 'react';
import { useNavigate, Link, useSearchParams } from 'react-router-dom';
import axios from 'axios';
import { RotatingLines } from 'react-loader-spinner';

import { Pagination } from '../../components/Pagination';

const TeamList = ({ pageNum, pageSize }) => {
    const navigate = useNavigate();
    const [pages, setPages] = useState(0);
    const [teams, setTeams] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const teamSize = searchParams.get("teamSize") || "All"

    useEffect(() => {
        var size = 0;
        if (teamSize != "All") {
            size = Number(teamSize);
        }
        const getAllTeams = async () => {
            const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/team/page`, {
                params: {
                    pageNum,
                    pageSize,
                    teamSize: size
                }
            });
            setTeams(response.data.data);

            const len = response.data.total / pageSize;
            if (len % 1 === 0) {
                setPages(Math.round(len));
            } else {
                setPages(Math.ceil(len));
            }
        }
        getAllTeams();
    }, [])



    return (

        <div>
            {teams.length > 0 && <div style={{ textAlign: 'center', padding: '10px', marginLeft: '110px' }}>
                <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown">
                    teamSize: {teamSize === 0 ? "All" : teamSize}
                </button>
                <ul className="dropdown-menu">
                    <li key="All">
                        <a className="dropdown-item" href={`/team?pageNum=${pageNum}&teamSize=All`} aria-label="All">
                            <span aria-hidden="true">All</span>
                        </a>
                    </li>
                    <li key="2">
                        <a className="dropdown-item" href={`/team?pageNum=${pageNum}&teamSize=2`} aria-label="2">
                            <span aria-hidden="true">2</span>
                        </a>
                    </li>
                    <li key="3">
                        <a className="dropdown-item" href={`/team?pageNum=${pageNum}&teamSize=3`} aria-label="3">
                            <span aria-hidden="true">3</span>
                        </a>
                    </li>
                    <li key="4">
                        <a className="dropdown-item" href={`/team?pageNum=${pageNum}&teamSize=4`} aria-label="4">
                            <span aria-hidden="true">4</span>
                        </a>
                    </li>
                </ul>
            </div>}
            <div className="row" style={{ textAlign: 'center', padding: '10px', marginLeft: '110px', marginRight: '110px' }}>
                {teams.length == 0 &&
                    <div className="row align-items-center" style={{ background: '#eee', padding: '20px', marginLeft: '110px', marginRight: '110px' }}>
                        <div className="col-lg-5" style={{ marginLeft: '300px', width: '700px' }}>
                            <h1 className="" style={{ marginLeft: '-500px' }}>There are no teams now.</h1>
                        </div>
                    </div>
                }
                {teams.length > 0 && teams.map(team => {
                    return (
                        <div className="card col-4 mb-2" key={team.id}>
                            <div className="card-body">
                                <h5 className="card-title">Team No.{team.id}</h5>
                                <h6 className="card-subtitle mb-2 text-muted">Team member: {team.numOfMember}</h6>
                                <ul className="list-group list-group-flush">
                                    {team.member.map(participant => {
                                        return (
                                            <li className="list-group-item" key={participant.id}>
                                                {participant.fname} {participant.lname}
                                            </li>
                                        )
                                    })}
                                </ul>
                                <div className="card-footer">
                                    <Link to={`/admin/team/${team.id}`}>
                                        <button className='btn btn-primary'> Review </button></Link>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
            {teams.length > 0 && <Pagination params={{ pageNum: pageNum, maxPage: pages, teamSize: teamSize }} baseUrl={'/team'} />}
        </div>
    );
}
export default TeamList;