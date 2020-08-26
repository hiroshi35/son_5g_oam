import { shallow } from 'vue-test-utils'
import Widget from '@/components/Widget.vue'

describe('Widget.vue', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(Widget,
      {
        slots: {
          default: '22'
        },
        propsData: {
          title: 'Test',
          icon: '<i class="fa fa-envelope-o" aria-hidden="true"></i>',
          className: 'widget-red'
        }
      })
  })
  it('should be vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
  it('should render correct class', () => {
    expect(wrapper.classes()).toContain('widget-red')
  })
  it('has correct text', () => {
    expect(wrapper.text()).toBe('Test 22')
  })
  it('has the expected html structure', () => {
    expect(wrapper.element).toMatchSnapshot()
  })
  it('has correct props', () => {
    expect(wrapper.props().title).toBe('Test')
    expect(wrapper.props().className).toBe('widget-red')
    expect(wrapper.props().icon).toBe('<i class="fa fa-envelope-o" aria-hidden="true"></i>')
  })
})
