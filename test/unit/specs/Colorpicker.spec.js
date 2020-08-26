import { shallow } from 'vue-test-utils'
import Colorpicker from '@/components/Colorpicker.vue'
import {colorpicker, on} from 'jquery'
describe('Colorpicker.vue', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(Colorpicker)
  })
  it('should be vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
  it('has the expected html structure', () => {
    expect(wrapper.element).toMatchSnapshot()
  })
  it('renders .input-group-addon', () => {
    wrapper.setProps({icon: true})
    expect(wrapper.find('.input-group-addon').is('span')).toMatchSnapshot()
  })
  test('$().colorpicker() should be called', () => {
    expect(colorpicker).toBeCalled()
  })
  test('$().colorpicker().on() should be called with correct argument', () => {
    expect(on).toBeCalled()
    expect(on.mock.calls[0][0]).toBe('changeColor')
  })
  test('event should be emitted when color is changed', () => {
    wrapper.setData({color: '#fff'})
    expect(wrapper.emitted().input[0][0]).toBe('#fff')
  })
})
