import { useSearchParams, Link } from 'react-router-dom';
import {useSelector} from "react-redux";
import React, { useState} from 'react';

import CompanyList from './CompanyList';
import NavigationBar from "../../components/layout/NavigationBar";
import {Typewriter} from "react-simple-typewriter";
import {Fade} from "@mui/material";
import background from "../../assets/images/629055.png";

const CompanyBoard = () => {
    const pageSize = 4;
    const [searchParams] = useSearchParams();
    const pageNum = searchParams.get("pageNum") || 1
    const [checked, setChecked] = useState(false);
    const authorization = useSelector(state => state.authorize);
    const utype = authorization.utype;
    const handleDone = () => {
        setChecked(true)
    }
    return (
        <div style={{backgroundImage:`url(${background})`,height: 'auto', minHeight:'100vh',width:'100%', position: "absolute"}}>
            <NavigationBar/>
            {/*<img src={background} style={{height: '100%', width:'100%', transform:'scale(1.5)', overflow:'hidden',  position: "absolute", left: '0', top:'0', zIndex:'-100'}}/>*/}
            <div className="row align-items-center" style={{ marginLeft: '10%', marginTop:'1%', marginRight:'10%'}}>
                 <div className="col-lg-5" style={{marginLeft:'5%', width:'95%'}}>
                     <h1 align = "center">
                         <span style={{fontWeight: 'bold', color:'white' }}>
                                <Typewriter
                                    words={['Cannot find your target company?','Feel free to apply for adding a company!']}
                                    cursor
                                    loop={1}
                                    typeSpeed={40}
                                    delaySpeed={500}
                                    deleteSpeed={10}
                                    onLoopDone={handleDone}
                                />
                            </span></h1>
                     {utype == 'p' && <Link to={{ pathname: `/company/new` }}>
                         <Fade orientation="horizontal" in={Boolean(checked)} ><button
                             className='btn btn-primary' id = 'add' style={{marginLeft: '40%',marginTop: '1%'}}>
                             Request for creating a company
                         </button></Fade>

                     </Link>}
                     {utype == 'a' && <Link to={{ pathname: `/company/newRequests` }}>
                         <button
                             className='btn btn-primary' style={{marginLeft: '40%',marginTop: '1%'}}>
                             Review Requests for creating companies
                         </button>
                     </Link>}
                </div>
            </div>
            <br/>
            <CompanyList pageNum={pageNum} pageSize={pageSize} />
            <br/>
        </div>

    );
}

export default CompanyBoard;