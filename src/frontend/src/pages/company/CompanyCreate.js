import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import {Typewriter, Cursor} from 'react-simple-typewriter';
import useRequest from '../../hooks/UseRequest';
import NavigationBar from "../../components/layout/NavigationBar";
import background from "../../assets/images/629055.png"
import {Fade} from "@mui/material";
const CompanyCreate = () => {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [checked, setChecked] = useState(false);
    const [logo_url, setLogo_url] = useState('');
    const [web_url, setWeb_url] = useState('');
    const [description, setDescription] = useState('');

    const { doRequest, errors } = useRequest({
        url: `${process.env.REACT_APP_BACKEND_URL}/companies/addCompany`,
        method: 'post',
        body: {
            name: name,
            logo_url: logo_url,
            description: description,
            web_url: web_url,
        },
        onSuccess: () => navigate("/company")
    })

    const onSubmit = async (event) => {
        event.preventDefault();
        await doRequest();
    }

    const handleDone = () => {
        setChecked(true)
    }

    return (
        <div style={{backgroundImage:`url(${background})`,height: 'auto', minHeight:'100vh', width:'100%', position: "absolute"}}>
            <NavigationBar/>
            <div className={"container"} style={{marginTop:'1%'}}>
                <div className="row align-items-center" style={{background: `linear-gradient(to bottom right, rgba(255,255,255,0.2), white )`,
                    backdropFilter: "blur(10px)", boxShadow: '20px 20px 20px rgba(30,30,30,0.5)', borderRadius:'25px', padding:'2%', marginLeft: '10%', marginRight:'10%'}}>
                    <div>
                        <h1 className="" align = "center" >
                            <span style={{ color: 'white', fontWeight: 'bold' }}>
                                <Typewriter
                                    words={['Cannot find your target company?','Feel free to apply for adding a company!']}
                                    cursor
                                    loop={1}
                                    onLoopDone={handleDone}
                                    typeSpeed={40}
                                    delaySpeed={500}
                                    deleteSpeed={20}
                                />
                            </span>
                        </h1>
                    </div>
                    <Fade orientation="horizontal" in={Boolean(checked)} timeout={1000}>
                        <form className="row" onSubmit={onSubmit} style={{marginTop:'1%'}}>
                            <h5 className="" style={{marginLeft: '25%',color: 'white'}}><b>Company Name:</b></h5>
                            <input
                                value={name}
                                style={{marginLeft: '25%',width: '50%'}}
                                onChange={e => setName(e.target.value)}
                                className="form-control"
                                placeholder="Please enter a company name"
                            />
                            <h5 className="" style={{marginTop:'2%',color: 'white',marginLeft: '25%'}}><b>Company Description (optional):</b></h5>
                            <textarea
                                value={description}
                                onChange={e => setDescription(e.target.value)}
                                className="form-control"
                                placeholder="Description in detail will help us review"
                                id="floatingTextarea2"
                                style={{marginLeft: '25%',width: '50%',height:'200px'}}>
                            </textarea>
                            <h5 className="" style={{marginTop:'2%',color: 'white',marginLeft: '25%'}}><b>Company Logo Url (optional):</b></h5>
                            <input
                                value={logo_url}
                                style={{marginLeft: '25%',width: '50%'}}
                                onChange={e => setLogo_url(e.target.value)}
                                className="form-control"
                                placeholder="Company logo url (Max length 200)"
                                maxLength="200"
                            />
                            <h5 className="" style={{marginTop:'2%',color: 'white',marginLeft: '25%'}}><b>Company Website Url (optional):</b></h5>
                            <input
                                value={web_url}
                                style={{marginLeft: '25%',width: '50%'}}
                                onChange={e => setWeb_url(e.target.value)}
                                className="form-control"
                                placeholder="Company website url (Max length 200)"
                                maxLength="200"
                            />
                            <br/>
                            <button type="submit" className="btn btn-primary"style={{marginLeft: '25%',marginTop:'2%',width: '10%'}}>Apply</button>
                            <button className="btn btn-primary" style={{marginLeft: '30%',marginTop:'2%',width: '10%'}} onClick={() => navigate("/company")}>Back</button>
                            {errors}
                        </form>
                    </Fade>


                {errors}
                </div>
            </div>
        </div>
    );
}
export default CompanyCreate;