import { shallow } from 'vue-test-utils'
import Carousel from '@/components/Carousel.vue'

describe('Carousel.vue', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(Carousel, {
      propsData: {
        id: 'carousel'
      }
    })
    wrapper.setData({items: [{imgSrc: '/static/imgs/carousel/1.jpg', caption: 'Image'}]})
  })
  it('should be vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
  it('has the expected html structure', () => {
    expect(wrapper.element).toMatchSnapshot()
  })
  it('renders correct tab id', () => {
    expect(wrapper.contains('.carousel-inner')).toBeTruthy()
  })
})
