export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGOUT = "LOGOUT";

export const login = (username, password) => {
  return {
    type: LOGIN_SUCCESS,
    payload: {
      username,
      token: "THIS_IS_A_FAKE_TOKEN",
      isLoggedIn: true
    }
  };
};

export const logout = () => ({
  type: LOGOUT
});
