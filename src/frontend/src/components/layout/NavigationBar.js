import React from 'react';
import {NavLink} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import {logout} from "../store/reducer/authSlice";
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';
import ListAltIcon from '@mui/icons-material/ListAlt';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import GroupsIcon from '@mui/icons-material/Groups';
import JoinInnerIcon from '@mui/icons-material/JoinInner';
import Diversity3Icon from '@mui/icons-material/Diversity3';

export const NavigationBar = () => {
    const dispatch = useDispatch();
    const authorization = useSelector(state => state.authorize)
    const utype = authorization.utype;
    const logged = authorization.isLogin;
    const meeting = "Meeting "
    const about = "About "
    const board = "Post Board "
    const list = "Company List "
    const personal = "Personal "
    const logout_out = "Logout "
    const login = "Login "
    const team = "Team "
    const match = "Match "

    return (
        <div style={{'height':'100px'}}>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary" id="mainNav">
                <div className="container-fluid">
                    {
                        (!logged) &&
                        <NavLink className="navbar-brand " to="/">
                            <span style={{"marginLeft":"30%"}} className={"glyphicon glyphicon-search"}>Tavern Website </span>
                            <LaptopMacIcon/>
                        </NavLink>
                    }
                    {
                        (logged && utype === 'p') &&
                        <NavLink className="navbar-brand" to="/">
                            <span style={{"marginLeft":"30%"}}>Tavern Dashboard </span>
                            <LaptopMacIcon/>
                        </NavLink>
                    }
                    {
                        (logged && utype === 'a') &&
                    <NavLink className="navbar-brand" to="/">
                        <span style={{"marginLeft":"30%"}}>Tavern Terminal </span>
                        <LaptopMacIcon/>
                    </NavLink>
                    }
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01"
                            aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                        Menu
                        <i className="fas fa-bars"></i>
                    </button>
                    <div style={{"marginRight":"6%"}} className="collapse navbar-collapse" id="navbarColor01">
                        <ul style={{fontSize:20}} className="navbar-nav ms-auto py-4 py-lg-0">
                            {((!logged) || (logged&&utype ==='p')) &&
                                <NavLink className="nav-item nav-link px-lg-3 py-3 py-lg-4" to="/about">{about}
                                <LightbulbIcon/>
                                </NavLink>}
                                <NavLink className="nav-item nav-link px-lg-3 py-3 py-lg-4" to="/board">{board}
                                <DynamicFeedIcon/>
                                </NavLink>
                                <NavLink className="nav-item nav-link px-lg-3 py-3 py-lg-4" to="/company">{list}
                                <ListAltIcon/>
                                </NavLink>
                            {(logged && utype ==='a') &&
                                <NavLink className="nav-item nav-link px-lg-3 py-3 py-lg-4" to="/team">{team}
                                    <Diversity3Icon/>
                                </NavLink>}
                            {(logged && utype === 'a') &&
                                <NavLink className="nav-item nav-link px-lg-3 py-3 py-lg-4" to="/match">{match}
                                    <JoinInnerIcon/>
                                </NavLink>}
                            {!logged &&
                                <NavLink className="nav-item nav-link px-lg-3 py-3 py-lg-4" to="/user-auth">{login}
                                    <LoginIcon/>
                                </NavLink>}
                            {logged &&
                                <NavLink className="nav-item nav-link px-lg-3 py-3 py-lg-4" to="/schedule">{meeting}
                                    <GroupsIcon/>
                                </NavLink>}
                            {(logged && utype === 'p') &&
                                <NavLink className="nav-item nav-link px-lg-3 py-3 py-lg-4" to="/user-info">{personal}
                                    <PermContactCalendarIcon/>
                                </NavLink>}
                            {logged &&
                                <li className="nav-item" onClick={()=>dispatch(logout())}><a className="nav-link px-lg-3 py-3 py-lg-4" href="/">{logout_out}
                                <LogoutIcon/></a></li>}
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default NavigationBar;