import { shallow } from 'vue-test-utils'
import CarouselItem from '@/components/CarouselItem.vue'

describe('CarouselItem.vue', () => {
  let wrapper
  // Mock this.$parent.push()
  const mock = jest.fn()
  CarouselItem.beforeCreate = function () { this.$parent = {items: {push: mock}} }
  beforeEach(() => {
    wrapper = shallow(CarouselItem,
      {
        propsData: {
          imgSrc: 'src',
          caption: 'caption'
        }
      })
  })
  test('data should be pushed to parent', () => {
    expect(mock.mock.calls.length).toBe(1)
    expect(mock.mock.calls[0][0].imgSrc).toBe('src')
    expect(mock.mock.calls[0][0].caption).toBe('caption')
  })
  it('should be vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
  it('has the expected html structure', () => {
    expect(wrapper.element).toMatchSnapshot()
  })
  it('has correct props', () => {
    expect(wrapper.props().imgSrc).toBe('src')
    expect(wrapper.props().caption).toBe('caption')
  })
})
