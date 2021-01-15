export const signupInputValidator = (user) => {
    let errors = {};
    if (!validateEmail(user.email)) {
        errors.email = "Email not valid";
    }

    if (user.password.length < 4) {
        errors.password = "Password is too small";
    }

    return {
        success: !Boolean(Object.keys(errors).length),
        errors,
    };
};

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
