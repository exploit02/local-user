import React, { useState, useEffect } from "react";
import { Button } from "../components/Button";
import { Card } from "../components/Card";
import { authService } from "../services/authService";

function Home(props) {
    const [user, setUser] = useState({});
    const checkLogin = () => {
        const isLoogedIn = authService.checkLogin();
        if (!isLoogedIn) {
            props.history.push("/signin");
        }
    };

    const logout = () => {
        authService.logout();
        checkLogin();
    };
    useEffect(() => {
        checkLogin();
        const currentUser = authService.currentUser();
        setUser({ ...currentUser });
    }, []);

    return (
        <div className="flex-column h-full justify-center items-center">
            <h2>LoggedIn User</h2>
            <Card>
                <h4>Name : {user.firstname + " " + user.lastname}</h4>
                <h4>Username : {user.username}</h4>
                <h4>Email : {user.email}</h4>
                <Button color="secondary" onClick={logout}>
                    Logout
                </Button>
            </Card>
        </div>
    );
}

export default Home;
