export const authService = {
    signup: (user) => {
        let appData = localStorage.getItem("localUserApp");
        if (appData) {
            appData = JSON.parse(appData);
            appData.user.push(user);
            appData.isLoogedIn = true;
            appData.currentUser = { ...user };
            localStorage.setItem("localUserApp", JSON.stringify(appData));
        } else {
            appData = {
                user: [{ ...user }],
                currentUser: { ...user },
                isLoogedIn: true,
            };
            localStorage.setItem("localUserApp", JSON.stringify(appData));
        }
    },
    login: (credentials) => {
        let appData = localStorage.getItem("localUserApp");
        if (appData) {
            appData = JSON.parse(appData);
        } else {
            return {
                success: false,
                message: "User not found",
            };
        }
        let user = [];

        if (appData && appData.user && Array.isArray(appData.user)) {
            user = appData.user.filter((item) => {
                return item.email === credentials.email && item.password === credentials.password;
            });
        }
        if (user.length) {
            appData.isLoogedIn = true;
            appData.currentUser = user[0];
            localStorage.setItem("localUserApp", JSON.stringify(appData));
            return {
                success: true,
                message: "Loggedin successfully",
            };
        } else {
            return {
                success: false,
                message: "User not found",
            };
        }
    },
    checkLogin: () => {
        let appData = localStorage.getItem("localUserApp");

        if (appData) {
            appData = JSON.parse(appData);
        }

        if (appData && appData.isLoogedIn) {
            return true;
        }

        return false;
    },
    logout: () => {
        let appData = localStorage.getItem("localUserApp");
        if (appData) {
            appData = JSON.parse(appData);
        }

        if (appData && appData.isLoogedIn) {
            appData.isLoogedIn = false;
            appData.currentUser = {};
            localStorage.setItem("localUserApp", JSON.stringify(appData));
        }
    },
    currentUser: () => {
        let appData = localStorage.getItem("localUserApp");
        if (appData) {
            appData = JSON.parse(appData);
        }

        if (appData && appData.isLoogedIn && appData.currentUser) {
            return appData.currentUser;
        }

        return {};
    },
};
