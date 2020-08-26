import { shallow } from 'vue-test-utils'
import Trumbowyg from '@/components/Trumbowyg.vue'
import {trumbowyg, trumbowygOn} from 'jquery'

describe('Trumbowyg.vue', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(Trumbowyg)
  })
  it('should be vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
  it('has the expected html structure', () => {
    expect(wrapper.element).toMatchSnapshot()
  })
  test('$().trumbowyg() should be called with correct options', () => {
    expect(trumbowyg).toBeCalledWith(wrapper.vm.optionsObj)
  })
  test('$().trumbowyg().on should be called with correct arguments', () => {
    expect(trumbowygOn.mock.calls[0][0]).toBe('tbwchange')
    expect(trumbowygOn.mock.calls[1][0]).toBe('tbwinit')
  })
})
