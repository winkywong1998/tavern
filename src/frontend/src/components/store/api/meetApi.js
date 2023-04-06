import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const meetApi = createApi({
    reducerPath: 'meetApi',
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.REACT_APP_BACKEND_URL
    }),
    endpoints(build) {
        return {
            createMeeting: build.mutation({
                query(meeting) {
                    return {
                        url: 'meeting/save',
                        method: 'post',
                        // title, hostId, meetingTime, isGroupMeeting, description,
                        // participantsId (list of useId / teamId)
                        body: meeting,
                    }
                }
            }),
            getMeetingById: build.mutation({
                query(meeting) {
                    return {
                        url: 'meeting/' + meeting.id,
                        method: 'get'
                    }
                }
            }),
            getMeetingByUser: build.mutation({
                query(meeting) {
                    return {
                        url: 'meeting?idType=' + meeting.idType + '&id=' + meeting.id,
                        method: 'get'
                    }
                }
            }),
            // admin page
            getMeetingPage: build.mutation({
                query(page) {
                    return {
                        url: 'meeting/page?pageNum=' + page.pageNum + '&pageSize=' + page.pageSize,
                        method: 'get'
                    }
                }
            }),
            attendMeeting: build.mutation({
                query(meeting) {
                    return {
                        url: 'meeting/attend',
                        method: 'post',
                        body: meeting
                    }
                }
            }),
            quitMeeting: build.mutation({
                query(meeting) {
                    return {
                        url: 'meeting/quit',
                        method: 'post',
                        body: meeting
                    }
                }
            }),
            // participant
            getUnregisteredMeetingPage: build.mutation({
                query(meeting) {
                    return {
                        url: 'meeting/unregistered/page?idType=' + meeting.idType +
                            '&id=' + meeting.id + '&pageNum=' + meeting.pageNum +
                            '&pageSize=' + meeting.pageSize,
                        method: 'get'
                    }
                }
            }),
            deleteMeeting: build.mutation({
                query(arg) {
                    return {
                        url: 'meeting/' + arg.id,
                        method: 'delete'
                    }
                }
            })
        }
    }
})

export const {
    useCreateMeetingMutation, useGetMeetingByIdMutation,
    useGetMeetingByUserMutation, useGetMeetingPageMutation,
    useAttendMeetingMutation, useQuitMeetingMutation,
    useGetUnregisteredMeetingPageMutation, useDeleteMeetingMutation
} = meetApi