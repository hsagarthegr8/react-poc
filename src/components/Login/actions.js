export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGOUT = "LOGOUT";

export const login = (user) => {
  return {
    type: LOGIN_SUCCESS,
    payload: {
      username: user.username,
      token: "THIS_IS_A_FAKE_TOKEN",
      isLoggedIn: true
    }
  };
};

export const logout = () => ({
  type: LOGOUT
});
