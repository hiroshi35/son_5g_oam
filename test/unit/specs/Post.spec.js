import { shallow } from 'vue-test-utils'
import Post from '@/components/Post.vue'

describe('Post.vue', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(Post, {
      propsData: {
        title: 'Title',
        author: 'John Doe',
        date: '2 hours ago',
        category: 'WEB',
        commentsNumber: 5,
        likesNumber: 5,
        img: '/img.jpg',
        imgPosition: 'top',
        liked: false
      },
      slots: {
        default: 'Body'
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
    expect(wrapper.props().title).toBe('Title')
    expect(wrapper.props().author).toBe('John Doe')
    expect(wrapper.props().date).toBe('2 hours ago')
    expect(wrapper.props().category).toBe('WEB')
    expect(wrapper.props().commentsNumber).toBe(5)
    expect(wrapper.props().likesNumber).toBe(5)
    expect(wrapper.props().img).toBe('/img.jpg')
    expect(wrapper.props().imgPosition).toBe('top')
    expect(wrapper.props().liked).toBe(false)
  })
  it('has correct data', () => {
    expect(wrapper.vm.likedByUser).toBe(false)
    expect(wrapper.vm.likes).toBe(5)
  })
  it('should increment likes number', () => {
    const btn = wrapper.find('.likes')
    btn.trigger('click')
    expect(wrapper.vm.likes).toBe(6)
    expect(wrapper.vm.likedByUser).toBe(true)
    expect(btn.classes()).toContain('liked')
  })
  it('should decrement likes number', () => {
    const btn = wrapper.find('.likes')
    btn.trigger('click')
    btn.trigger('click')
    expect(wrapper.vm.likedByUser).toBe(false)
    expect(wrapper.vm.likes).toBe(5)
    expect(btn.classes()).not.toContain('liked')
  })
})
