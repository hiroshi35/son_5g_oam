import { shallow } from 'vue-test-utils'
import Colorpicker from '@/components/VSelect2.vue'
import {select2, val} from 'jquery'

const data = {laravel: 'Laravel', gulp: 'Gulp', sass: 'Sass'}
describe('VSelect2.vue', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(Colorpicker, {
      propsData: {
        data: data,
        placeholder: 'Select',
        value: 'laravel'
      }
    })
  })
  it('should be vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
  it('has the expected html structure', () => {
    expect(wrapper.element).toMatchSnapshot()
  })
  test('$().select2() should be called', () => {
    expect(select2).toBeCalled()
  })
  test('$().select2().val() should be called', () => {
    expect(val).toBeCalledWith('laravel')
  })
  it('has correct props', () => {
    expect(wrapper.props().data).toBe(data)
  })
  it('generates options object', () => {
    expect(wrapper.vm.optionsObj).toEqual({placeholder: 'Select'})
  })
})
