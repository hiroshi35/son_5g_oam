import { shallow } from 'vue-test-utils'
import Tab from '@/components/Tab.vue'

describe('Tab.vue', () => {
  let wrapper
  // Mock this.$parent.push()
  const mock = jest.fn()
  Tab.beforeCreate = function () { this.$parent = {tabs: {push: mock}} }
  beforeEach(() => {
    wrapper = shallow(Tab,
      {
        propsData: {
          title: 'Tab'
        },
        slots: {
          default: 'Test'
        }
      })
  })
  test('current tab should be pushed to parent tabs', () => {
    expect(mock.mock.calls.length).toBe(1)
    expect(mock.mock.calls[0][0].id).toBe('tab')
    expect(mock.mock.calls[0][0].title).toBe('Tab')
  })
  it('should be vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
  it('has the expected html structure', () => {
    expect(wrapper.element).toMatchSnapshot()
  })
  it('has correct props', () => {
    expect(wrapper.props().title).toBe('Tab')
  })
})
