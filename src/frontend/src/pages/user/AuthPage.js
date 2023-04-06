import React from 'react';
import AuthForm from "./AuthForm";
import NavigationBar from "../../components/layout/NavigationBar";

const AuthPage = () => {
    return (
        <div>
            <NavigationBar/>
            <AuthForm/>
        </div>
    );
};

export default AuthPage;