import {authApi} from "./api/authApi";
import {configureStore} from "@reduxjs/toolkit";
import {setupListeners} from "@reduxjs/toolkit/query";
import {authSlice} from "./reducer/authSlice";
import {meetApi} from "./api/meetApi";
import {meetingSlice} from "./reducer/meetSlice";

const store = configureStore({

    reducer: {
        authorize: authSlice.reducer,
        meetAuthorize: meetingSlice.reducer
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(meetApi.middleware).concat(authApi.middleware)
    // middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), meetApi, authApi]

})

// reload data
setupListeners(store.dispatch)

export default store