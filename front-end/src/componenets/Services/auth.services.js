const logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("id");
};

const getCurrentUser = () => {
    return localStorage.getItem("user");
};


const authService = {
    logout,
    getCurrentUser,
};

export default authService;