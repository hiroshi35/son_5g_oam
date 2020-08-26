import { shallow } from 'vue-test-utils'
import TimelineItem from '@/components/TimelineItem.vue'

describe('TimelineItem.vue', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(TimelineItem,
      {
        propsData: {
          title: 'Item',
          date: '2 hours ago',
          badgeColor: 'blue',
          badgeIcon: '<i class="fa fa-clock-o" aria-hidden="true"></i>',
          inverted: false
        },
        slots: {
          default: 'Test'
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
    expect(wrapper.props().title).toBe('Item')
    expect(wrapper.props().date).toBe('2 hours ago')
    expect(wrapper.props().badgeColor).toBe('blue')
    expect(wrapper.props().badgeIcon).toBe('<i class="fa fa-clock-o" aria-hidden="true"></i>')
    expect(wrapper.props().inverted).toBe(false)
  })
  test('badge has correct class', () => {
    expect(wrapper.find('.timeline-badge ').classes()).toContain('blue')
  })
  test('badge has correct icon', () => {
    expect(wrapper.find('.icon').element.innerHTML).toBe('<i class="fa fa-clock-o" aria-hidden="true"></i>')
  })
  test('item don not have inverted class', () => {
    expect(wrapper.classes()).not.toContain('timeline-inverted')
  })
  it('should have inverted class when inverted is true', () => {
    wrapper.setProps({inverted: true})
    expect(wrapper.classes()).toContain('timeline-inverted')
  })
  it('should have correct text', () => {
    expect(wrapper.find('.timeline-body').text()).toBe('Test')
  })
})
