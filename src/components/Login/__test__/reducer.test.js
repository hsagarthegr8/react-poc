import { authReducer, initialState } from '../reducer'
import { login, logout } from '../actions'

const mockUser = {
    username: 'THIS_IS_A_TEST_USER',
    password: 'password'
}

const mockLoginState = {
    username: 'THIS_IS_A_TEST_USER',
    token: 'THIS_IS_A_FAKE_TOKEN',
    isLoggedIn: true
}

const mockAction = {
    type: 'TEST_ACTION'
}

describe("authReducer should behave as expected", () => {
    test("Action of type LOGIN_SUCCESS should update the state", () => {
        expect(authReducer(initialState, login(mockUser))).toEqual(mockLoginState)
    })

    test("Action of type LOGOUT should update the state", () => {
        expect(authReducer(mockLoginState, logout())).toEqual(initialState)
    })

    test("Any other action should not change the state", () => {
        expect(authReducer(initialState, mockAction)).toEqual(initialState)
        expect(authReducer(mockLoginState, mockAction)).toEqual(mockLoginState)
    })
})