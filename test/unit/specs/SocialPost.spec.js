import { mount } from 'vue-test-utils'
import SocialPost from '@/components/SocialPost.vue'

describe('SocialPost.vue', () => {
  let wrapper
  beforeEach(() => {
    wrapper = mount(SocialPost,
      {
        propsData: {
          id: 1,
          author: {
            name: 'John Smith ',
            avatar: '/static/imgs/avatars/man-1.png'
          },
          date: '4 hours ago',
          title: 'added a new photo ',
          likes: 15,
          body: '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p><img src="/static/imgs/carousel/3.jpg" width="100%">',
          comments: [
            {
              author: {
                name: 'Frank Doe',
                avatar: '/static/imgs/avatars/man-4.png'
              },
              date: '3 hours ago',
              message: 'Lorem ipsum dolor sit amet, consectetur\n adipisicing elit. Corporis debitis dignissimos nisi obcaecati )',
              likes: 5
            },
            {
              author: {
                name: 'Sam Doe',
                avatar: '/static/imgs/avatars/man-7.png'
              },
              date: '2 hours ago',
              message: 'Lorem ipsum dolor sit amet, consectetur\n adipisicing elit. Corporis debitis dignissimos nisi obcaecati )',
              likes: 5
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
})
