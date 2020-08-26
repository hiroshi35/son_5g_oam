export const init = jest.fn()
export const ps = jest.fn().mockImplementation(() => {
  return {
    init: init
  }
})
export default ps
