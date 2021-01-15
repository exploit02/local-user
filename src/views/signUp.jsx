import React, { useState, useEffect } from "react";
import { Card } from "../components/Card";
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { Link } from "react-router-dom";
import { authService } from "../services/authService";
import { signupInputValidator } from "../utils/inputValidator";

function SignUp(props) {
    const [user, setUser] = useState({
        firstname: "",
        lastname: "",
        username: "",
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
            authService.signup(user);
            checkLogin();
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
            <h2>Signup Form</h2>
            <Card>
                <form onSubmit={handleSubmit}>
                    <Input
                        name="firstname"
                        placeholder="First Name"
                        required
                        onChange={inputHandler}
                        value={user.firstname}
                    />
                    <Input
                        name="lastname"
                        placeholder="Last Name"
                        required
                        onChange={inputHandler}
                        value={user.lastname}
                    />
                    <Input
                        name="username"
                        placeholder="Username"
                        required
                        onChange={inputHandler}
                        value={user.username}
                    />
                    <Input
                        name="email"
                        placeholder="Email Address"
                        required
                        onChange={inputHandler}
                        value={user.email}
                    />
                    <Input
                        name="password"
                        placeholder="Password"
                        required
                        onChange={inputHandler}
                        value={user.password}
                    />
                    <div className="align-center">
                        <Button color="secondary" type="submit">
                            Sign Up
                        </Button>
                    </div>

                    <div className="align-center">
                        <p className="text-fade">
                            Have an account with us ?{" "}
                            <Link to="/signin">
                                <span className="text-bold">Login here</span>
                            </Link>
                        </p>
                    </div>
                </form>
            </Card>
        </div>
    );
}

export default SignUp;
