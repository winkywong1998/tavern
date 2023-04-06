import React, {Component} from 'react';
import NavigationBar from "../../components/layout/NavigationBar";
import PersonalPage from "../personal/PersonalPage";

class UserInfo extends Component {
    render() {
        return (
            <div>
                <NavigationBar/>
                <PersonalPage/>
            </div>
        );
    }
}

export default UserInfo;