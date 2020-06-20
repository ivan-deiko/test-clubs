import {
  SET_SELECTED_ACTIVITY,
} from './mutations'

// consts actions
export const CHANGE_SELECTED_ACTIVITY = 'CHANGE_SELECTED_ACTIVITY'

export default {
  [CHANGE_SELECTED_ACTIVITY]: ({ commit }, activity) => commit(SET_SELECTED_ACTIVITY, activity),
}