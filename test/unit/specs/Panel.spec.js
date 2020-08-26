import { shallow } from 'vue-test-utils'
import Panel from '@/components/Panel.vue'

describe('Panel.vue', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(Panel,
      {
        propsData: {
          type: 'panel-teal',
          footer: true,
          header: true
        },
        slots: {
          default: 'Hello World',
          header: 'Header',
          footer: 'Footer'
        }
      })
  })
  it('should be vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
  it('has the expected html structure', () => {
    expect(wrapper.element).toMatchSnapshot()
  })
  it('has a header with correct text', () => {
    expect(wrapper.find('.panel-heading').text()).toBe('Header')
    expect(wrapper.contains('.panel-heading')).toBeTruthy()
  })
  it('has a footer with correct text', () => {
    expect(wrapper.find('.panel-footer').text()).toBe('Footer')
    expect(wrapper.contains('.panel-footer')).toBeTruthy()
  })
  it('has a correct body text', () => {
    expect(wrapper.find('.panel-body').text()).toBe('Hello World')
  })
  it('it does not have a header when header: false', () => {
    wrapper.setProps({header: false})
    expect(wrapper.contains('.panel-heading')).toBeFalsy()
  })
  it('it does not have a footer when footer: false', () => {
    wrapper.setProps({footer: false})
    expect(wrapper.contains('.panel-footer')).toBeFalsy()
  })
  it('has correct props', () => {
    expect(wrapper.props().type).toBe('panel-teal')
    expect(wrapper.props().footer).toBeTruthy()
    expect(wrapper.props().header).toBeTruthy()
  })
  it('has correct class', () => {
    expect(wrapper.classes()).toContain('panel-teal')
  })
})
