import { filterByCities } from '@/utils'
export const CLUBS = 'CLUBS'

export default {
  [CLUBS]: (state, getters, { cities: { selectedCity }, activity: { selectedActivity } }) => {
    let clubs = state.clubs;

    if (selectedCity || selectedActivity) {
      clubs = selectedCity ? filterByCities(clubs, selectedCity.slug) : clubs; // fillter by city
      clubs = selectedActivity // filter by activity 
        ?
          clubs.filter(({ activity }) => activity.find(item => item.slug === selectedActivity.slug))
        :
          clubs;
    }

    return state.searchText ? clubs.filter(({ title }) => title.includes(state.searchText)) : clubs; // filter by searc text
  }
}