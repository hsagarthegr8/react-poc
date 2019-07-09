import { MemoryRouter, Route} from 'react-router-dom'
import { Profile } from '../Profile'
import { Typography } from '@material-ui/core';


describe("Profile Component when logged in", () => {
    const Component = () => <Profile isLoggedIn={true} username='TEST' />
    const wrapper = mount(<Component />)
    test("it should display the username", () => {
        expect(wrapper.find(Typography).children().text()).toContain('TEST')
    })
})


describe("Profile Component when not logged in", () => {
    const Component = () => <Profile isLoggedIn={false} />
    const wrapper = mount( 
        <MemoryRouter iniitalEntries={[]}>
            <Route component={Component} />
        </MemoryRouter>
    )

    test("it should redirect to login ", () => {
        expect(wrapper.find(Component).props().location.pathname).toBe('/login')
    })
})