import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector} from "react-redux";
import useRequest from '../../hooks/UseRequest';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';

const MatchRegister = ({ pageNum, pageSize }) => {
    const navigate = useNavigate();
    const authorization = useSelector(state => state.authorize)
    const userId = authorization.id;
    const [newPoolId, setNewPoolId] = useState(0);

    const { doRequest, errors } = useRequest({
        url: `${process.env.REACT_APP_BACKEND_URL}/pool/join`,
        method: 'post',
        onSuccess: () => navigate(0)
    })

    const onSubmit = async (event) => {
        event.preventDefault();
        await doRequest({params: {participantId: userId, poolId: newPoolId}});
        localStorage.setItem('poolId', newPoolId)
    }

    return (

        <div>
            <div className="row align-items-center" style={{padding: '1px', marginLeft: '1%', marginRight: '1%'
            }}>
                <div className="col-lg-5  border border-5 rounded-2" style={{marginLeft: '1%', marginRight: '1%', width: '98%'}}>
                    {Number(localStorage.getItem('poolId')) === 0 &&
                    <div className="row align-items-center"
                         style={{marginLeft: '1%', marginRight: '1%', marginTop:"5%"}}>
                        <div className="col-lg-5" style={{marginBottom:'5%', width: '98%', textAlign: 'center'}}>
                            <h3>Do not have a team yet?</h3>
                            <h5>Choose a pool to join matching for a new team!</h5>
                            <form onSubmit={onSubmit} style={{marginLeft:'-20%', marginTop: '2%'}}>
                                <input value={newPoolId} onChange={e => setNewPoolId(Number(e.target.value))}
                                       style={{marginLeft: '20%'}} type="radio" name="pool" value="2"/> 2
                                <input value={newPoolId} onChange={e => setNewPoolId(Number(e.target.value))}
                                       style={{marginLeft: '20%'}} type="radio" name="pool" value="3"/> 3
                                <input value={newPoolId} onChange={e => setNewPoolId(Number(e.target.value))}
                                       style={{marginLeft: '20%'}} type="radio" name="pool" value="4"/> 4
                                <br/>
                                {newPoolId !== 0 &&
                                <button type="submit" className='btn btn-primary' style={{marginLeft:'80%', marginTop:'2%'}}> Join </button>}
                            </form>
                        </div>
                    </div>
                    }

                    {Number(localStorage.getItem('poolId')) !== 0 &&
                    <div className="row align-items-center"
                         style={{background: '', marginLeft: '1%', marginRight: '1%', marginTop:"5%"}}>
                        <div className="col-lg-5" style={{width: '98%', textAlign: 'center'}}>
                            <div>
                                <h4>
                                    {localStorage.getItem('poolId')} people team is matching ~~
                                </h4>
                                <Box style={{marginLeft:'80%', marginTop: '-5%'}}>
                                    <CircularProgress />
                                </Box>
                            </div>
                            <div style={{marginTop: '2%'}}>
                                <h5>Wanna change your matching pool or quit
                                    matching?
                                </h5>
                                <form onSubmit={onSubmit} style={{marginTop: '2%'}}>
                                    <input value={newPoolId} onChange={e => setNewPoolId(Number(e.target.value))}
                                           style={{marginLeft: '1%'}} type="radio" name="pool" value="0"/> quit
                                    {Number(localStorage.getItem('poolId')) !== 2 &&
                                    <label><input value={newPoolId} onChange={e => setNewPoolId(Number(e.target.value))}
                                                  style={{marginLeft: '130px'}} type="radio" name="pool"
                                                  value="2"/> 2</label>}
                                    {Number(localStorage.getItem('poolId')) !== 3 &&
                                    <label><input value={newPoolId} onChange={e => setNewPoolId(Number(e.target.value))}
                                                  style={{marginLeft: '130px'}} type="radio" name="pool"
                                                  value="3"/> 3</label>}
                                    {Number(localStorage.getItem('poolId')) !== 4 &&
                                    <label><input value={newPoolId} onChange={e => setNewPoolId(Number(e.target.value))}
                                                  style={{marginLeft: '130px'}} type="radio" name="pool"
                                                  value="4"/> 4</label>}
                                    <br/>
                                    <br/>
                                    {newPoolId !== 0 && <button type="submit" className='btn btn-primary' style={{
                                        marginLeft: '80%',
                                        marginBottom: '5%'
                                    }}> Update </button>}
                                    {newPoolId === 0 && <button type="submit" className='btn btn-primary' style={{
                                        marginLeft: '80%',
                                        marginBottom: '5%'
                                    }}> Quit </button>}
                                </form>
                            </div>
                        </div>
                    </div>
                    }
                </div>

            </div>


        </div>
    );
}
export default MatchRegister;