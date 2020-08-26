import { shallow } from 'vue-test-utils'
import Tabs from '@/components/Tabs.vue'

describe('Tabs.vue', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(Tabs)
    wrapper.setData({tabs: [{id: 'testTab', title: 'Test tab'}]})
  })
  it('should be vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
  it('has the expected html structure', () => {
    expect(wrapper.element).toMatchSnapshot()
  })
  it('renders correct tab id', () => {
    expect(wrapper.contains('li a')).toBeTruthy()
  })
})
