import { shallow } from 'vue-test-utils'
import Calendar from '@/components/Calendar.vue'
import {fullcalendar} from 'jquery'

describe('Calendar.vue', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(Calendar, {
      propsData: {
        events: [
          {
            id: 1,
            title: 'Event',
            start: '2018-04-04',
            color: '#e53935'
          }
        ],
        externalEvents: [
          {
            id: 7,
            title: 'External Event 1',
            color: '#fa7252'
          }
        ]
      }
    })
  })
  it('should be vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
  it('has the expected html structure', () => {
    expect(wrapper.element).toMatchSnapshot()
  })
  test('$().fullCalendar() should be called with correct options', () => {
    expect(fullcalendar).toBeCalledWith(wrapper.vm.optionObj)
  })
  it('has correct pros', () => {
    expect(wrapper.props().events).toEqual([{id: 1, title: 'Event', start: '2018-04-04', color: '#e53935'}])
    expect(wrapper.props().externalEvents).toEqual([{id: 7, title: 'External Event 1', color: '#fa7252'}])
  })
  test('push external event', () => {
    wrapper.find('.push-event-button').trigger('click')
    expect(wrapper.vm.eventNameError).toBeTruthy();
    wrapper.setData({ eventName: 'bar' })
    wrapper.find('.push-event-button').trigger('click')
    expect(wrapper.emitted().externalEventAdded).toBeTruthy()
  })
})
