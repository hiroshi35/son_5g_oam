import { shallow } from 'vue-test-utils'
import PhotoSwipe from '@/components/PhotoSwipe.vue'
import {ps, init} from 'photoswipe'

describe('PhotoSwipe.vue', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(PhotoSwipe, {
      propsData: {
        items: [
          {
            src: '/static/imgs/carousel/1.jpg',
            w: 5184,
            h: 2400,
            title: 'First Image',
            author: 'John Doe'
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
  it('opens gallery', () => {
    wrapper.find('figure').trigger('click')
    expect(ps).toBeCalled()
    expect(init).toBeCalled()
  })
})
