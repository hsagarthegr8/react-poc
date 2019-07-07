import { LOGIN_SUCCESS, LOGOUT, login, logout } from '../actions'


const mockUser = {
    username: 'username',
    password: 'password',
}

describe("Auth Action Creators should create action of correct type", () => {
    test("login should create an action of type LOGIN_SUCCESS", () => {
        expect(login(mockUser).type).toBe(LOGIN_SUCCESS)
    })

    test("logout should create an action of type LOGOUT", () => {
        expect(logout().type).toBe(LOGOUT)
    })
})