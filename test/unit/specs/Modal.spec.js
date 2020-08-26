import { shallow } from 'vue-test-utils'
import Modal from '@/components/Modal.vue'
import {modal} from 'jquery'

describe('Modal.vue', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(Modal,
      {
        slots: {
          default: 'Body',
          title: 'Title',
          footer: 'Footer'
        },
        propsData: {
          id: 'modal',
          show: true
        }
      })
  })
  it('should be vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
  test('modal is open', () => {
    expect(modal).toBeCalledWith('show')
  })
  test('event emitted when closing modal', () => {
    wrapper.find('.close').trigger('click')
    expect(wrapper.emitted().modalClosed).toBeTruthy()
  })
  test('$().modal("hide") should called when show = false', () => {
    wrapper.setProps({show: false})
    expect(modal).toBeCalledWith('hide')
  })
  it('has the expected html structure', () => {
    expect(wrapper.element).toMatchSnapshot()
  })
  it('has correct props', () => {
    expect(wrapper.props().id).toBe('modal')
  })
})
