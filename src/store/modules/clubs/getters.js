export const CLUBS = 'CLUBS'

export default {
  [CLUBS]: (state, getters, { cities: { selectedCity }, activity: { selectedActivity } }) => {

    if (!selectedCity) {
     return selectedActivity
        ?
          state.clubs.filter(({ activity }) => activity.find(item => item.slug === selectedActivity))
        :
          state.clubs;
    }

    const newClubs = state.clubs.filter(({ city }) => city.slug === selectedCity);

    return selectedActivity 
      ? 
        newClubs.filter(({ activity }) => activity.find(item => item.slug === selectedActivity))
      : 
        newClubs;
  }
}