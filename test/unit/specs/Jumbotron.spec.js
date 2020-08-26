import { shallow } from 'vue-test-utils'
import Jumbotron from '@/components/Jumbotron.vue'

describe('Jumbotron.vue', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(Jumbotron,
      {
        propsData: {
          title: 'Hello World',
          img: '/static/imgs/carousel/1.jpg'
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
    expect(wrapper.props().title).toBe('Hello World')
    expect(wrapper.props().img).toBe('/static/imgs/carousel/1.jpg')
  })
})
