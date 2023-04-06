import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import PostBoard from './pages/board/PostBoard';
import PostShow from './pages/board/PostShow';
import CompanyBoard from './pages/company/CompanyBoard';
import CompanyCreate from './pages/company/CompanyCreate';
import CompanyRequest from './pages/company/CompanyRequest';
import CompanyShow from './pages/company/CompanyShow';
import TeamBoard from './pages/team/TeamBoard';
import MatchBoard from './pages/match/MatchBoard';
import MatchRegister from './pages/match/MatchRegister';
import AuthPage from "./pages/user/AuthPage";
import UserInfo from "./pages/user/UserInfo";
import {Provider} from "react-redux";
import store from "./components/store"
import AboutPage from "./components/layout/AboutPage";
import SchedulePage from "./pages/schedule/SchedulePage";
import RegisterForm from "./pages/user/RegisterForm";
import MeetingShow from "./pages/schedule/MeetingShow";
import MeetingCreationPage from "./pages/schedule/MeetingCreationPage";
import ParticipantMyMeetingPage from "./pages/schedule/Participant/ParticipantMyMeetingPage";
import TeamAdminShow from "./pages/team/TeamAdminShow";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
	<Provider store={store} >
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<App />}/>

				<Route path="/board" element={<PostBoard />}/>
				<Route path="/board/:postId" element={<PostShow />}/>
				<Route path="/company" element={<CompanyBoard />}/>
				<Route path="/company/new" element={<CompanyCreate />}/>
				<Route path="/company/newRequests" element={<CompanyRequest />}/>
				<Route path="/company/:companyId" element={<CompanyShow />}/>
				<Route path="/team" element={<TeamBoard />}/>
				{/*<Route path="/team/:teamId" element={<TeamAdminShow/>}/>*/}
				<Route path="/admin/team/:id" element={<TeamAdminShow/>}/>

				<Route path="/match" element={<MatchBoard />}/>
				<Route path="/match/register" element={<MatchRegister />}/>

				<Route path="/user-auth" element={<AuthPage />}/>

				<Route path="/user-info" element={<UserInfo/>}/>
				<Route path="/schedule" element={<SchedulePage/>}/>
				<Route path="/about" element={<AboutPage />}/>

				<Route path="/mymeetings" element={<ParticipantMyMeetingPage />}/>
				<Route path="/meetinglist" element={<SchedulePage />}/>
				<Route path="/register" element={<RegisterForm />}/>
				<Route path="/meeting/:meetingId" element={<MeetingShow />}/>
				<Route path="/meeting/create" element={<MeetingCreationPage />}/>


			</Routes>
		</BrowserRouter>
	</Provider>
);
