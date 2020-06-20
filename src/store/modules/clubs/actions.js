import HTTP from '@/http'
import { SET_CLUBS } from './mutations'
import { GET_CITIES } from '../cities/actions'

// consts actions
export const GET_CLUBS = 'GET_CLUBS'

export default {
  [GET_CLUBS]: ({ commit, dispatch}) => HTTP.getClubs().then(data => {
    commit(SET_CLUBS, data);
    dispatch(GET_CITIES, {data}, {root: true});
  }),
}