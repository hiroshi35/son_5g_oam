import { shallow } from 'vue-test-utils'
import Accordion from '@/components/Accordion.vue'

describe('Accordion.vue', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(Accordion,
      {
        propsData: {
          id: 'accordion_id'
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
    expect(wrapper.props().id).toBe('accordion_id')
  })
})
