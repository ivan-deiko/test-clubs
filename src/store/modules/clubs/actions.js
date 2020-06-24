import HTTP from '@/http'
import { SET_CLUBS, SET_SEARCH_TEXT, SET_LOADING } from './mutations'
import { GET_CITIES } from '../cities/actions'

// consts actions
export const GET_CLUBS = 'GET_CLUBS'
export const SEARCH = 'SEARCH'

export default {
  [GET_CLUBS]: ({ commit, dispatch}) => HTTP.getClubs().then(data => {
    commit(SET_CLUBS, data);
    commit(SET_LOADING);
    dispatch(GET_CITIES, {data}, {root: true});
  }),
  [SEARCH]: ({ commit }, payload) => commit(SET_SEARCH_TEXT, payload)
}