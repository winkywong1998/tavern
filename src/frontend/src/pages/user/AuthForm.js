import React, {useRef, useState} from 'react';
import {
    useRegisterMutation,
    useLoginMutation,
    useGetUserInfoMutation,
    useGetTeamInfoMutation,
    useGetPoolIdMutation
} from "../../components/store/api/authApi";
import {useDispatch, useSelector} from "react-redux";
import {login, getInfo, getTeamId, getPoolId} from "../../components/store/reducer/authSlice";
import {useNavigate} from "react-router";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const AuthForm = () => {
    const [isLogin, setIsLogin] = useState(true)

    // import api
    const [registerForm, {error: regError}] = useRegisterMutation()
    const [loginForm, {error: loginError}] = useLoginMutation()
    const [getUserInfo, {error: getInfoError}] = useGetUserInfoMutation()
    const [getTeamInfo, {error: getTeamInfoError}] = useGetTeamInfoMutation()
    const [getMatchPoolId, {error: getMatchPoolIdError}] = useGetPoolIdMutation()


    const usernameInput = useRef()

    const dispatch = useDispatch()
    const navLink = useNavigate()

    const submitHandler = (e) => {
        e.preventDefault()

        const email = usernameInput.current.value
        const password = values.password

        // process login parameter
        if (isLogin) {
            loginForm({
                email: email,
                password: password
            }).then(res => {
                console.log(res)
                if (!res.error) {
                    console.log(res)
                    if (res.data !== null) {
                        // identify log status of users
                        dispatch(login(
                            {
                                isLogin: true,
                            }))
                        // redirect to root
                        navLink("/", {replace: true})

                        // get user Information when id and password is passed
                        getUserInfo({
                            id: res.data.id
                        }).then(res => {
                            if (!res.error) {
                                if (res.data) {
                                    dispatch(getInfo({
                                        fname: res.data.fname,
                                        id: res.data.id,
                                        email: res.data.email,
                                        utype: res.data.utype,
                                        numOfExp: res.data.numOfExp,
                                        major: res.data.major,
                                        degree: res.data.degree,
                                        timeZone: res.data.timeZone,
                                        school: res.data.school,
                                        year: res.data.year,
                                        lname: res.data.lname,
                                        rorI: res.data.rorI
                                    }))
                                    getMatchPoolId({
                                        userId: res.data.id
                                    }).then(res => {
                                        if (!res.error) {
                                            if (res.data !== null) {
                                                dispatch(getPoolId({
                                                    poolId: res.data
                                                }))
                                            }
                                        }
                                    })
                                    if (res.data.utype === 'p') {
                                        getTeamInfo({
                                            teamId: res.data.id
                                        }).then(res => {
                                            if (!res.error) {
                                                if (res.data) {
                                                    dispatch(getTeamId({
                                                        teamId: res.data
                                                    }))
                                                }
                                            }
                                        })
                                    }
                                }
                            }
                        })
                    } else {
                        alert("Wrong match.")
                    }
                }
            })
        } else {
            alert("Not Supported Yet.")
        }
    }

    const [values, setValues] = React.useState({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
    });

    const handleChange = (prop) => (event) => {
        setValues({...values, [prop]: event.target.value});
    };

    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return (
        <div>
            <br/>
            <br/>
            <br/>
            <section className="vh-100">
                <div className="container-fluid h-custom">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-md-9 col-lg-6 col-xl-5">
                            <img
                                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                                className="img-fluid" alt="Login image"/>
                        </div>
                        <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">

                            <form onSubmit={submitHandler} style={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'flex-end', marginRight: '45%'
                            }}>
                                <div style={{marginLeft: '-8%'}} className="form-outline mb-4">
                                    <Box sx={{'& > :not(style)': {m: 1}}}>
                                        <Box sx={{display: 'flex', alignItems: 'flex-end'}}>
                                            <AccountCircle sx={{color: 'action.active', mr: 1, my: 0.5}}/>
                                            <TextField inputRef={usernameInput} id="input-with-sx" label="Email"
                                                       variant="standard"/>
                                        </Box>
                                    </Box>
                                </div>
                                <div className="form-outline mb-3">
                                    <FormControl sx={{m: 1, width: '25ch'}} variant="standard">
                                        <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                                        <Input
                                            id="standard-adornment-password"
                                            type={values.showPassword ? 'text' : 'password'}
                                            value={values.password}
                                            onChange={handleChange('password')}
                                            endAdornment={
                                                <InputAdornment position="end">
                                                    <IconButton
                                                        aria-label="toggle password visibility"
                                                        onClick={handleClickShowPassword}
                                                        onMouseDown={handleMouseDownPassword}
                                                    >
                                                        {values.showPassword ? <VisibilityOff/> : <Visibility/>}
                                                    </IconButton>
                                                </InputAdornment>
                                            }
                                        />
                                    </FormControl>
                                </div>

                                <div className="d-flex justify-content-between align-items-center">
                                    <div style={{marginLeft: '-20%'}}>
                                        <a href="/register" className="text-body">Register</a>
                                    </div>
                                </div>
                                <div className="text-center text-lg-start mt-4 pt-2">
                                    <button className="btn btn-primary btn-lg">
                                        {isLogin ? "Login" : "Register"}
                                    </button>
                                    &nbsp;&nbsp;&nbsp;
                                    <a href="#" onClick={
                                        event => {
                                            event.preventDefault()
                                            setIsLogin(prevState => !prevState);
                                        }
                                    }>
                                    </a>
                                </div>
                            </form>
                            <p style={{color: 'red'}}>
                                {regError && "Register error message"}
                            </p>
                            <p style={{color: 'red'}}>
                                {loginError && "Login error message"}
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AuthForm;