import { shallow } from 'vue-test-utils'
import PageHeader from '@/components/PageHeader.vue'

describe('PageHeader.vue', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(PageHeader,
      {
        propsData: {
          title: 'Dashboard',
          smallText: 'Small Text'
        }
      })
  })
  it('should be vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
  it('has the expected html structure', () => {
    expect(wrapper.element).toMatchSnapshot()
  })

  it('has correct props', () => {
    expect(wrapper.props().title).toBe('Dashboard')
    expect(wrapper.props().smallText).toBe('Small Text')
  })
})
