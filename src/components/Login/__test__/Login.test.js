import { MemoryRouter, Route } from 'react-router-dom'
import { Login } from '../Login'


describe("Login Component", () => {
    test("it should redirect to profile when already loggedIn", () => {
        const LoginComponent = () => <Login classes={{}} isLoggedIn={true} />
        const wrapper = mount(
        <MemoryRouter>
            <Route component={LoginComponent}/>
        </MemoryRouter>
    )
        expect(wrapper.find(LoginComponent).props().location.pathname).toBe('/profile')
    })

    test("it should call login method on handleSubmit", () => {
        const login = jest.fn()
        const wrapper = mount(<Login classes={{}} isLoggedIn={false} login={login}/>)
        const mockUser = {username: 'TEST', password: 'PASSWORD'}

        wrapper.instance().handleSubmit(mockUser)
        expect(login).toHaveBeenCalled()
        expect(login.mock.calls[0][0]).toEqual(mockUser)
    })
})