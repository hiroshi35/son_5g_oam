import { shallow } from 'vue-test-utils'
import Timeline from '@/components/Timeline.vue'

describe('Timeline.vue', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(Timeline)
  })
  it('should be vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
  it('has the expected html structure', () => {
    expect(wrapper.element).toMatchSnapshot()
  })
  it('should render correct class', () => {
    expect(wrapper.classes()).toContain('timeline_wrapper')
  })
})
