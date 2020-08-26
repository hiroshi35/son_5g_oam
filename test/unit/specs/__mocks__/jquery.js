export const on = jest.fn()

export const datetimepickerOn = jest.fn()

export const trumbowygOn = jest.fn()

export const modal = jest.fn()

export const datatable = jest.fn()

export const peity = jest.fn()

export const each = jest.fn()

export const fullcalendar = jest.fn()

export const val = jest.fn().mockImplementation(() => ({on: jest.fn()}))

export const select2 = jest.fn().mockImplementation(() => {
  return {
    val: val
  }
})
export const colorpicker = jest.fn().mockImplementation(() => {
  return {
    on: on
  }
})
export const datetimepicker = jest.fn().mockImplementation(() => {
  return {
    on: datetimepickerOn
  }
})
export const trumbowyg = jest.fn().mockImplementation(() => {
  return {
    on: trumbowygOn
  }
})

export const $ = jest.fn().mockImplementation(() => {
  return {
    colorpicker: colorpicker,
    select2: select2,
    modal: modal,
    val: jest.fn(),
    off: jest.fn(),
    peity: peity,
    DataTable: datatable,
    datetimepicker: datetimepicker,
    fullCalendar: fullcalendar,
    each: each,
    trumbowyg: trumbowyg
  }
})

$.trumbowyg = jest.fn()

export default $
