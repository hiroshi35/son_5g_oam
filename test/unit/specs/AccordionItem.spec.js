import { shallow } from 'vue-test-utils'
import AccordionItem from '@/components/AccordionItem.vue'

describe('AccordionItem.vue', () => {
  let wrapper
  AccordionItem.beforeCreate = function () { this.$parent = {id: 'accordion_id'} }
  beforeEach(() => {
    wrapper = shallow(AccordionItem,
      {
        propsData: {
          title: 'Accordion'
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
    expect(wrapper.props().title).toBe('Accordion')
  })
})
