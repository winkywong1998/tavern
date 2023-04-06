import {createSlice} from "@reduxjs/toolkit";

export const meetingSlice = createSlice({
    name: "meetingAuthorization",
    initialState: {
        createTime: null,

        id: null,
        titile: null,
        hostId: null,
        meetingTime: null,
        isGroupMeeting: null,
        meetingStatus: null,
        description: null,
        participantsId: null,
        participants: null,

        meetingListByPage: []
    },

    reducers: {
        createMeeting(state, action) {
            const currentTime = Date.now()
            state.createTime = currentTime
        },
        getMeetingById(state, action) {
            state.id = action.payload.id
            state.titile = action.payload.titile
            state.hostId = action.payload.hostId
            state.meetingTime = action.payload.meetingTime
            state.isGroupMeeting = action.payload.isGroupMeeting
            state.meetingStatus = action.payload.meetingStatus
            state.description = action.payload.description
            state.participantsId = action.payload.participantsId
            state.participants = action.payload.participants
        },
        getMeetingByUser(state, action) {

        },
        getMeetingPage(state, action) {
            state.meetingListByPage = action.payload
        },
        attendMeeting(state, action) {

        },
        quitMeeting(state, action) {

        },
        getUnregisteredMeeting(state, action) {

        }
    }
})

export const {createMeeting, getMeetingById, getMeetingByUser,getMeetingPage,
    attendMeeting, quitMeeting,getUnregisteredMeeting} = meetingSlice.actions;
