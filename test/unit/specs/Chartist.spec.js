import { shallow } from 'vue-test-utils'
import Chartist from '@/components/Chartist.vue'
import {on, line} from 'chartist'
describe('Chartist.vue', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(Chartist,
      {
        propsData: {
          type: 'line',
          data: {
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
            series: [
              [5, 2, 4, 2, 3]
            ]
          }
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
    expect(wrapper.props().data).toEqual({labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'], series: [[5, 2, 4, 2, 3]]})
  })
  test('chart.js should be called with correct arguments', () => {
    expect(line).toBeCalled()
    expect(on).toBeCalled()
  })

  test('labels and datasets are required', () => {
    expect(wrapper.vm.$options.props.data.required).toBeTruthy()
  })
})
