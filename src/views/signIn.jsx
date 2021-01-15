import React, { useState, useEffect } from "react";
import { Card } from "../components/Card";
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { Link } from "react-router-dom";
import { authService } from "../services/authService";
import { signupInputValidator } from "../utils/inputValidator";

function SignIn(props) {
    const [user, setUser] = useState({
        email: "",
        password: "",
    });
    const inputHandler = (event) => {
        setUser((user) => ({ ...user, [event.target.name]: event.target.value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { success, errors } = signupInputValidator(user);
        if (success) {
            const { success, message } = authService.login(user);
            if (!success) {
                alert(JSON.stringify(message));
            } else {
                checkLogin();
            }
        } else {
            alert(JSON.stringify(errors));
        }
    };
    const checkLogin = () => {
        const isLoggedIn = authService.checkLogin();
        if (isLoggedIn) {
            props.history.push("/");
        }
    };
    useEffect(() => {
        checkLogin();
    }, []);
    return (
        <div className="flex-column h-full justify-center items-center">
            <h2>Login Form</h2>
            <Card>
                <form onSubmit={handleSubmit}>
                    <Input name="email" placeholder="Email Address" onChange={inputHandler} value={user.email} />
                    <Input name="password" placeholder="Password" onChange={inputHandler} value={user.password} />

                    <div className="align-center">
                        <Button color="primary" type="submit">
                            Login
                        </Button>
                    </div>
                    <div className="align-center">
                        <p className="text-fade">
                            New user ?{" "}
                            <Link to="/signup">
                                <span className="text-bold">Register here</span>
                            </Link>
                        </p>
                    </div>
                </form>
            </Card>
        </div>
    );
}

export default SignIn;
