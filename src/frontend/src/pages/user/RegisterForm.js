import React, {useEffect, useRef} from 'react';
import NavigationBar from "../../components/layout/NavigationBar";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {Navigate, useNavigate} from "react-router";
import {
    useRegisterMutation
} from "../../components/store/api/authApi";

const RegisterForm = () => {
    const [majorId, setMajorId] = React.useState();
    const [majorName, setMajorName] = React.useState();
    const handleMajorChange = (event) => {
        setMajorName(event.target.value)
        setMajorId(event.target.value)
    };

    const [degree, setDegree] = React.useState('');
    const [degreeId, setDegreeId] = React.useState()
    const handleDegreeChange = (event) => {
        setDegree(event.target.value);
        setDegreeId(event.target.value);
    };

    const [roi, setROI] = React.useState('');
    const [roiId, setRoiId] = React.useState()
    const handleROIChange = (event) => {
        setROI(event.target.value);
        setRoiId(event.target.value)
    };

    const [timeZone, setTimeZone] = React.useState('');
    const handleTZChange = (event) => {
        setTimeZone(event.target.value);
    };

    const pwdInput = useRef()
    const emailValue = useRef()
    const fnameValue = useRef()
    const lnameValue = useRef()
    const schoolValue = useRef()
    const yearValue = useRef()
    const degreeYear = useRef()

    const navLink = useNavigate()
    const [registerForm, {error:regError}] = useRegisterMutation()

    const submitHandler = (e) => {
        e.preventDefault()
        const password = pwdInput.current.value
        const email = emailValue.current.value
        const fname = fnameValue.current.value
        const lname = lnameValue.current.value
        const school = schoolValue.current.value
        const year = yearValue.current.value
        const degreeYearId = degreeYear.current.value


        registerForm({
            password: password,
            email: email,
            numOfExp: year,
            major: majorId,
            degree: degreeId,
            rorI: roiId,
            fname: fname,
            lname: lname,
            timeZone: timeZone,
            school: school,
            year: degreeYearId
        }).then(res => {
            console.log(res)
            if (res.data !== null) {
                navLink("/user-auth", {replace: true})
            } else {
                alert("Register unsuccessfully.")
            }
        })
    }

    return (
        <div>
            <NavigationBar/>
            <div style={{marginBottom:'5%'}}>
                <section  style={{marginBottom:'5%'}} className="vh-100">
                    <div style={{'width':"40%", marginLeft:"auto", marginRight:"auto"}}>
                        <img
                            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                            className="img-fluid" alt="Login image"/>
                    </div>
                    <form onSubmit={submitHandler}>
                        <div className="container-fluid h-custom">
                            <br/>
                            <div className="row d-flex justify-content-center align-items-center h-100">
                                <div className="col-md-9 col-lg-6 col-xl-5">

                                    <div className="form-outline mb-3">
                                        <input ref={emailValue} type="text" className="form-control form-control-lg"
                                               placeholder="Enter email"/>
                                        <label className="form-label">Email</label>
                                    </div>
                                    <div className="form-outline mb-3">
                                        <input ref={fnameValue} type="text" className="form-control form-control-lg"
                                               placeholder="Enter first name"/>
                                        <label className="form-label">First Name</label>
                                    </div>
                                    <div className="form-outline mb-3">
                                        <input ref={schoolValue} type="text" className="form-control form-control-lg"
                                               placeholder="Enter graduated school"/>
                                        <label className="form-label">School</label>
                                    </div>

                                    <div className="form-outline mb-3">
                                        <FormControl sx={{ minWidth: '100%' }}>
                                            <InputLabel id="major-simple-select-helper-label">Major</InputLabel>
                                            <Select
                                                labelId="major-simple-select-helper-label"
                                                id="major-simple-select-helper"
                                                value={majorName}
                                                label="Major"
                                                onChange={handleMajorChange}
                                                // onChange={(e) => handleMajorChange(e, majorName)}
                                            >
                                                <MenuItem value="">
                                                    <em>None</em>
                                                </MenuItem>
                                                <MenuItem value={1}>Computer Science</MenuItem>
                                                <MenuItem value={2}>Computer Engineering</MenuItem>
                                                <MenuItem value={3}>Software Engineering</MenuItem>
                                                <MenuItem value={4}>Artificial Intelligence</MenuItem>
                                                <MenuItem value={5}>Data Science</MenuItem>
                                                <MenuItem value={6}>Cyber and Information Security</MenuItem>
                                                <MenuItem value={7}>Civil Engineering</MenuItem>
                                                <MenuItem value={8}>Electrical Engineering</MenuItem>
                                                <MenuItem value={9}>Business Analytics</MenuItem>
                                                <MenuItem value={10}>Financial Engineering</MenuItem>
                                            </Select>
                                            <FormHelperText>Major</FormHelperText>
                                        </FormControl>
                                    </div>

                                    <div className="form-outline mb-3">
                                        <FormControl sx={{ minWidth: '100%' }}>
                                            <InputLabel id="ri-simple-select-helper-label">ROI</InputLabel>
                                            <Select
                                                labelId="ri-simple-select-helper-label"
                                                id="ri-simple-select-helper"
                                                value={roi}
                                                label="ROI"
                                                onChange={handleROIChange}
                                            >
                                                <MenuItem value="">
                                                    <em>None</em>
                                                </MenuItem>
                                                <MenuItem value={1}>Research</MenuItem>
                                                <MenuItem value={0}>Industry</MenuItem>
                                            </Select>
                                            <FormHelperText>Research of Industry</FormHelperText>
                                        </FormControl>
                                    </div>

                                    <div className="form-outline mb-3">
                                        <a href="/user-auth" className="text-body align-items-center" style={{marginLeft:"9%"}}>Return to Login</a>
                                        <button className="btn btn-primary btn-lg" style={{marginLeft:'10%'}} >
                                            Register
                                        </button>
                                        <a href="#" onClick={
                                            event => {
                                                event.preventDefault()
                                            }
                                        }/>
                                    </div>
                                </div>

                                <div className="col-md-9 col-lg-6 col-xl-5">
                                    <div className="form-outline mb-3">
                                        <input ref={pwdInput} type="password" className="form-control form-control-lg"
                                               placeholder="Enter password"/>
                                        <label className="form-label">Password</label>
                                    </div>
                                    <div className="form-outline mb-3">
                                        <input ref={lnameValue} type="text" className="form-control form-control-lg"
                                               placeholder="Enter last name"/>
                                        <label className="form-label">Last Name</label>
                                    </div>
                                    <div className="form-outline mb-3">
                                        <input ref={yearValue} type="number" className="form-control form-control-lg"
                                               placeholder="Enter year of experience"/>
                                        <label className="form-label">Year of Experience</label>
                                    </div>

                                    <div className="form-outline mb-3">
                                        <input ref={degreeYear} type="number" className="form-control form-control-lg"
                                               placeholder="Enter year of degree"/>
                                        <label className="form-label">Year</label>
                                    </div>

                                    <div className="form-outline mb-3">
                                        <FormControl sx={{ minWidth: '100%' }}>
                                            <InputLabel id="degree-simple-select-helper-label">Degree</InputLabel>
                                            <Select
                                                labelId="degree-simple-select-helper-label"
                                                id="degree-simple-select-helper"
                                                value={degree}
                                                label="Degree"
                                                onChange={handleDegreeChange}
                                            >
                                                <MenuItem value="">
                                                    <em>None</em>
                                                </MenuItem>
                                                <MenuItem value={1}>PhD</MenuItem>
                                                <MenuItem value={2}>Master</MenuItem>
                                                <MenuItem value={3}>Bachelor</MenuItem>
                                            </Select>
                                            <FormHelperText>Highest Degree</FormHelperText>
                                        </FormControl>
                                    </div>

                                    <div className="form-outline mb-3">
                                        <FormControl sx={{ minWidth: '100%' }}>
                                            <InputLabel id="tz-simple-select-helper-label">Time Zone</InputLabel>
                                            <Select
                                                labelId="tz-simple-select-helper-label"
                                                id="tz-simple-select-helper"
                                                value={timeZone}
                                                label="TimeZone"
                                                onChange={handleTZChange}
                                            >
                                                <MenuItem value="">
                                                    <em>None</em>
                                                </MenuItem>
                                                <MenuItem value={0}>West Time Zone</MenuItem>
                                                <MenuItem value={1}>Central Time Zone</MenuItem>
                                                <MenuItem value={2}>East Time Zone</MenuItem>
                                            </Select>
                                            <FormHelperText>Time Zone</FormHelperText>
                                        </FormControl>
                                    </div>
                                </div>
                            </div>
                            {/*<div className="d-flex justify-content-between align-items-center ">*/}
                            {/*    <a href="/user-auth" className="text-body align-items-center" style={{marginLeft:"9%"}}>Return to Login</a>*/}
                            {/*    <button className="btn btn-primary btn-lg" style={{marginLeft:'-5%'}} >*/}
                            {/*        Register*/}
                            {/*    </button>*/}
                            {/*    <a href="#" onClick={*/}
                            {/*        event => {*/}
                            {/*            event.preventDefault()*/}
                            {/*        }*/}
                            {/*    }/>*/}
                            {/*</div>*/}
                        </div>
                    </form>
                </section>
            </div>
        </div>
    );
};

export default RegisterForm;