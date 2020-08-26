import { mount } from 'vue-test-utils'
import Contact from '@/components/Contact.vue'

describe('Contact.vue', () => {
  let wrapper
  beforeEach(() => {
    wrapper = mount(Contact,
      {
        propsData: {
          name: 'Adam Simpson',
          title: 'CEO',
          image: '/static/imgs/avatars/man-3.png'
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
    expect(wrapper.props().name).toBe('Adam Simpson')
    expect(wrapper.props().title).toBe('CEO')
    expect(wrapper.props().image).toBe('/static/imgs/avatars/man-3.png')
  })
})
