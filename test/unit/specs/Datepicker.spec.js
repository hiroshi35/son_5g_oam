import { shallow } from 'vue-test-utils'
import Datepicker from '@/components/Datepicker.vue'
import {datetimepicker, datetimepickerOn} from 'jquery'

describe('Datepicker.vue', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(Datepicker)
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
  test('$().datetimepicker() should be called', () => {
    expect(datetimepicker).toBeCalled()
  })
  test('$().datetimepicker().on() should be called with correct argument', () => {
    expect(datetimepickerOn).toBeCalled()
    expect(datetimepickerOn.mock.calls[0][0]).toBe('dp.change')
  })
})
