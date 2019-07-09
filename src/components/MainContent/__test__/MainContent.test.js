import { MemoryRouter } from 'react-router-dom'
import { MainContent } from '../MainContent'
import Home from '../../Home/Home';
import Profile from '../../Profile/Profile';
import Login from '../../Login/Login';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

describe("MainContent Component with loggedIn", () => {
    const mockStore = createStore(s => s, {
        auth: {
            isLoggedIn: true
        }
    })
    test("It should render home component", () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/']}>
                <MainContent />
            </MemoryRouter>
        )
        expect(wrapper.find(Home)).toHaveLength(1)
        expect(wrapper.find(Profile)).toHaveLength(0)
        expect(wrapper.find(Login)).toHaveLength(0)
    })

    test("It should render profile component", () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/profile']}>
                <Provider store={mockStore}>
                    <MainContent />
                </Provider>
            </MemoryRouter>
        )
        expect(wrapper.find(Home)).toHaveLength(0)
        expect(wrapper.find(Profile)).toHaveLength(1)
        expect(wrapper.find(Login)).toHaveLength(0)
    })

    test("It should render profile component when try to access login", () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/login']}>
                <Provider store={mockStore}>
                    <MainContent />
                </Provider>
            </MemoryRouter>
        )
        expect(wrapper.find(Home)).toHaveLength(0)
        expect(wrapper.find(Profile)).toHaveLength(1)
        expect(wrapper.find(Login)).toHaveLength(0)
    })
})

describe("MainContent Component without loggedIn", () => {
    const mockStore = createStore(s => s, {
        auth: {
            isLoggedIn: false
        }
    })
    test("It should render home component", () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/']}>
                <MainContent />
            </MemoryRouter>
        )
        expect(wrapper.find(Home)).toHaveLength(1)
        expect(wrapper.find(Profile)).toHaveLength(0)
        expect(wrapper.find(Login)).toHaveLength(0)
    })

    test("It should render login component when try to access profile", () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/profile']}>
                <Provider store={mockStore}>
                    <MainContent />
                </Provider>
            </MemoryRouter>
        )
        expect(wrapper.find(Home)).toHaveLength(0)
        expect(wrapper.find(Profile)).toHaveLength(0)
        expect(wrapper.find(Login)).toHaveLength(1)
    })

    test("It should render login component", () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/login']}>
                <Provider store={mockStore}>
                    <MainContent />
                </Provider>
            </MemoryRouter>
        )
        expect(wrapper.find(Home)).toHaveLength(0)
        expect(wrapper.find(Profile)).toHaveLength(0)
        expect(wrapper.find(Login)).toHaveLength(1)
    })
})
