export const on = jest.fn()

export const line = jest.fn().mockImplementation(() => {
  return {
    on: on
  }
})

export const chart = {
  Line: line
}
export default chart
