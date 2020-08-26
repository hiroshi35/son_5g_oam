import { shallow } from 'vue-test-utils'
import InlineChart from '@/components/InlineChart.vue'
import {peity} from 'jquery'

describe('InlineChart.vue', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(InlineChart,
      {
        propsData: {
          type: 'line'
        },
        slots: {
          default: '4.2/5'
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
    expect(wrapper.props().type).toBe('line')
  })
  test('$().peity() should be called with line', () => {
    expect(peity).toBeCalled()
    expect(peity.mock.calls[0][0]).toBe('line')
  })
})
