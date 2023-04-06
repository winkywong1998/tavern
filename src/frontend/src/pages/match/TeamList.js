import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { RotatingLines } from 'react-loader-spinner';

const TeamList = ({ pageNum, pageSize }) => {
    const [teamSize, setTeamSize] = useState(0);
    const [text, setText] = useState('');
    const [isMatching, setIsMatching] = useState(null);
    const [teams, setTeams] = useState([]);

    const getTeams = async (e) => {
        setIsMatching(true);
        setText('Matching all the parcipants...')
        const timeout = setTimeout(async () => {
            const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/matching/${teamSize}`);
            setTeams(response.data);
            setIsMatching(false);
            setText('Match done');
        }, 1000)
    }

    return (
        <div>
            <div>
                <div className="row align-items-center" style={{ background: '#eee', padding: '20px', marginLeft: '110px', marginRight: '110px' }}>
                    <div className="col-lg-7"><img className="img-fluid rounded mb-4 mb-lg-0" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLTXMVauPua8hs2gEGBYEBx5wUwY7gH7N1v7N0_syq1Z7sRNJ2-FUPIwXAZx7XjcdqqKU&usqp=CAU" alt="..." /></div>
                    <div className="col-lg-5">
                        <h1 className="" style={{ marginLeft: '-130px' }}>Match System Initializer</h1>
                        <p style={{ marginLeft: '-130px' }}>This is a test for Match System Initializer. Feel free to use this initializer for any match you want!</p>
                        <input value={teamSize} onChange={e => setTeamSize(Number(e.target.value))} style={{ marginLeft: '-130px' }} type="radio" name="pool" value="2" /> 2
                        <input value={teamSize} onChange={e => setTeamSize(Number(e.target.value))} style={{ marginLeft: '130px' }} type="radio" name="pool" value="3" /> 3
                        <input value={teamSize} onChange={e => setTeamSize(Number(e.target.value))} style={{ marginLeft: '130px' }} type="radio" name="pool" value="4" /> 4
                        <br />
                        <br />
                        {teamSize > 0 && <button
                            className='btn btn-primary' style={{ marginLeft: '-130px' }}
                            onClick={e => getTeams(e)}
                            disabled={isMatching !== null}>
                            Start Match!
                        </button>}
                    </div>
                </div>
            </div>
            <p style={{ textAlign: 'center', padding: '20px', fontSize: '40px', textShadow: '1px 1px 1px black, 0px 0px 1px black', color: 'grey' }}>{text}</p>

            {isMatching && (
                <div className='container-fluid' style={{ textAlign: 'center' }}>
                    <RotatingLines
                        strokeColor="grey"
                        strokeWidth="5"
                        animationDuration="0.75"
                        width="96"
                        visible={true}
                    />
                </div>
            )}
            <div className="row" style={{ textAlign: 'center', padding: '10px', marginLeft: '110px', marginRight: '110px' }}>
                {teams && teams.map((team) => {
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
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
export default TeamList;