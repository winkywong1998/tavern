import {createSlice} from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: "authorization",

    initialState: () => {
        const fname = localStorage.getItem('fname');
        if (!fname){
            return {
                isLogin: false,
                fname: null,
                id: null,
                email: null,
                numOfExp: null,
                major: null,
                degree: null,
                timeZone: null,
                school: null,
                year: null,
                lname: null,
                utype: null,
                teamId: null,
                poolId: 0,
                expirationTime:0  // login expired during
            }
        }
        return {
            isLogin: true,
            fname: fname,
            id: localStorage.getItem('id'),
            email: localStorage.getItem('email'),
            utype: localStorage.getItem('utype'),
            teamId: localStorage.getItem('teamId'),
            expirationTime: +localStorage.getItem('expirationTime'),
            numOfExp: localStorage.getItem('numOfExp'),
            major: localStorage.getItem('major'),
            degree: localStorage.getItem('degree'),
            timeZone: localStorage.getItem('timeZone'),
            school: localStorage.getItem('school'),
            year: localStorage.getItem('year'),
            lname: localStorage.getItem('lname'),
            poolId: localStorage.getItem('poolId')
        }
    },

    reducers: {
        login(state, action) {
            state.isLogin = true;

            const currentTime = Date.now();
            const timeout = 3000;
            state.expirationTime = currentTime + timeout; // set expiration time
            localStorage.setItem('expirationTime', state.expirationTime + "")
        },
        logout(state, action) {
            state.isLogin = false;
            localStorage.removeItem('fname')
            localStorage.removeItem('id')
            localStorage.removeItem('email')
            localStorage.removeItem('utype')
            localStorage.removeItem('teamId')
            localStorage.removeItem('expirationTime')
            localStorage.removeItem('numOfExp')
            localStorage.removeItem('degree')
            localStorage.removeItem('timeZone')
            localStorage.removeItem('school')
            localStorage.removeItem('year')
            localStorage.removeItem('lname')
            localStorage.removeItem('major')
            localStorage.removeItem('poolId')
            localStorage.removeItem('buttonText')
            localStorage.removeItem('rorI')
            localStorage.removeItem('teamId')
        },
        getInfo(state, action) {
            state.fname = action.payload.fname
            state.id = action.payload.id
            state.email = action.payload.email
            state.utype = action.payload.utype
            state.numOfExp = action.payload.numOfExp
            state.major = action.payload.major
            state.degree = action.payload.degree
            state.timeZone = action.payload.timeZone
            state.school = action.payload.school
            state.year = action.payload.year
            state.lname = action.payload.lname
            state.rorI = action.payload.rorI

            localStorage.setItem('fname', state.fname)
            localStorage.setItem('id', state.id)
            localStorage.setItem('email', state.email)
            localStorage.setItem('utype', state.utype)
            localStorage.setItem('numOfExp', state.numOfExp)
            localStorage.setItem('degree', state.degree)
            localStorage.setItem('timeZone', state.timeZone)
            localStorage.setItem('school', state.school)
            localStorage.setItem('year', state.year)
            localStorage.setItem('lname', state.lname)
            localStorage.setItem('major', state.major)
            localStorage.setItem('rorI', state.rorI)
        },
        editUser(state, action) {
        },
        getTeamId(state, action) {
            state.teamId = action.payload.teamId
            localStorage.setItem('teamId', state.teamId)
        },
        getPoolId(state, action) {
            localStorage.setItem('poolId', state.poolId)
            localStorage.setItem('poolId', action.payload.poolId)
        },
        getHistPosts(state, action){
        }
    }
})

export const {login, logout, getInfo, editUser, getTeamId, getPoolId, getHistPosts} = authSlice.actions;