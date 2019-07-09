import { MemoryRouter, Route } from 'react-router-dom'
import { Topbar } from '../Topbar'
import { Button } from '@material-ui/core'


describe("TopBar Component when isLoggedIn is false", () => {
    const TopbarComponent = () => <Topbar isLoggedIn={false} classes={{}} />
    const wrapper = mount(
        <MemoryRouter initialEntries={['/']}>
            <Route component={TopbarComponent} />
        </MemoryRouter>
    )

    test("it should display login button when isLoggedIn is false", () => {
        expect(wrapper.find(Button).props().children).toBe('Login')
    })

})


describe("TopBar component when isLoggedIn is true", () => {
    const logout = jest.fn()
    const wrapper = mount(
        <MemoryRouter initialEntries={['/']}>
            <Topbar isLoggedIn={true} classes={{}} logout={logout}/>
        </MemoryRouter>
    )

    test("it should display logout button when isLoggedIn is true", () => {
        expect(wrapper.find(Button).props().children).toBe('Logout')
    })

    test("it should call logout fn when logout button is clicked", () => {
        wrapper.find(Button).simulate('click')
        expect(logout).toHaveBeenCalled()
    })
})