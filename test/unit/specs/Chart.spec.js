import { shallow } from 'vue-test-utils'
import Chart from '@/components/Chart.vue'
import ChartJs from 'chart.js'
const getContext = jest.fn()
window.HTMLCanvasElement.prototype.getContext = getContext
describe('Chart.vue', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(Chart,
      {
        propsData: {
          type: 'line',
          height: 50,
          labels: ['A', 'B', 'C', 'D', 'E'],
          datasets: {
            label: 'My First dataset',
            data: [65, 59, 80, 81, 56]
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
    expect(wrapper.props().height).toBe(50)
    expect(wrapper.props().labels).toEqual(['A', 'B', 'C', 'D', 'E'])
    expect(wrapper.props().datasets).toEqual({label: 'My First dataset', data: [65, 59, 80, 81, 56]})
  })
  test('chart.js should be called with correct arguments', () => {
    expect(ChartJs).toBeCalled()
    expect(ChartJs.mock.calls[0][1].type).toBe('line')
    expect(ChartJs.mock.calls[0][1].data.labels).toEqual(['A', 'B', 'C', 'D', 'E'])
    expect(ChartJs.mock.calls[0][1].data.datasets.label).toBe('My First dataset');
    expect(ChartJs.mock.calls[0][1].data.datasets.data).toEqual([65, 59, 80, 81, 56]);
  })
  test('el.getContext() should be called', () => {
    expect(getContext).toBeCalled()
  })
  test('labels and datasets are required', () => {
    expect(wrapper.vm.$options.props.labels.required).toBeTruthy()
    expect(wrapper.vm.$options.props.datasets.required).toBeTruthy()
  })
})
