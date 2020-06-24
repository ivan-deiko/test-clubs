// consts mutations
export const SET_CLUBS = 'SET_CLUBS'
export const SET_SEARCH_TEXT = 'SET_SEARCH_TEXT'
export const SET_LOADING = 'SET_LOADING'

export default {
  [SET_CLUBS]: (state, payload) => state.clubs = payload,
  [SET_SEARCH_TEXT]: (state, payload) => state.searchText = payload,
  [SET_LOADING]: (state) => state.clubLoad = !state.clubLoad,
}