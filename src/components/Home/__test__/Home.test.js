import Home from '../Home'

describe("Home Component", () => {
    test("it should match Snapshot", () => {
        const wrapper = mount(<Home />)
        expect(wrapper).toMatchSnapshot()
    })
})