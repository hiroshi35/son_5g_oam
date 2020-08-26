import { shallow } from 'vue-test-utils'
import Colorpicker from '@/components/Datatable.vue'
import {datatable} from 'jquery'

describe('VSelect2.vue', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(Colorpicker, {
      propsData: {
        columns: [{title: 'Define'}, {title: 'Your'}, {title: 'Column Names'}, {title: 'Here'}],
        tableData: [['First', 'Second', 'Third', 'Fourth']]
      }
    })
  })
  it('should be vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
  it('has the expected html structure', () => {
    expect(wrapper.element).toMatchSnapshot()
  })
  test('$().DataTable() should be called', () => {
    expect(datatable).toBeCalled()
  })
  it('has correct props', () => {
    expect(wrapper.props().columns).toEqual([{title: 'Define'}, {title: 'Your'}, {title: 'Column Names'}, {title: 'Here'}])
    expect(wrapper.props().tableData).toEqual([['First', 'Second', 'Third', 'Fourth']])
  })
})
