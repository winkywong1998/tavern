import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.REACT_APP_BACKEND_URL
    }),
    endpoints(build) {
        return {
            register: build.mutation({
                query(user) {
                    return {
                        url: 'user/participant/save',
                        method: 'post',
                        body: user, // username, password, email
                    }
                }
            }),
            login: build.mutation({
                query(user) {
                    return {
                        url: 'user/login',
                        method: 'post',
                        body: user  // identifier
                    }
                }
            }),
            getUserInfo: build.mutation({
                query(user) {
                    return {
                        url: 'user/user/' + user.id,
                        method: 'get'
                    }
                }
            }),
            editUserInfo: build.mutation({
                query(user) {
                    return {
                        url: 'user/',
                        method: 'post',
                        body: user
                    }
                }
            }),
            getTeamInfo: build.mutation({
                query(user) {
                    return {
                        url: 'team/getTeam/' + user.teamId,
                        method: 'get'
                    }
                }
            }),
            getPoolId: build.mutation({
                query(user) {
                    return {
                        url: 'pool/getPoolId/' + user.userId,
                        method: 'get'
                    }
                }
            }),
            getHistPosts: build.mutation({
                query(user) {
                    return {
                        url: 'creator/' + user.id,
                        method: 'get'
                    }
                }
            })
        }
    }
});

export const {
    useRegisterMutation, useLoginMutation,
    useGetUserInfoMutation, useEditUserInfoMutation,
    useGetTeamInfoMutation, useGetPoolIdMutation,
    useGetHistPostsMutation
} = authApi