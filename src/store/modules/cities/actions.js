import { SET_CITIES, SET_SELECTED_CITY } from "./mutations"

// conts actions
export const CHANGE_SELECTED_CITY = 'CHANGE_SELECTED_CITY'
export const GET_CITIES = 'GET_CITIES'

export default {
  [GET_CITIES]: {
    root: true,
    handler: ({ commit }, payload) => commit(SET_CITIES, payload)
  },
  [CHANGE_SELECTED_CITY]: ({ commit }, payload) =>  commit(SET_SELECTED_CITY, payload)
}