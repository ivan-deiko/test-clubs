import { filterByCities } from '@/utils'
export const ACTIVITIES = 'ACTIVITIES'

export default {
  [ACTIVITIES]: (state, getters, { cities, clubs: { clubs } }) => {
    const newActivities = [];

    if (!clubs) return;

    const newClubs = cities.selectedCity ? filterByCities(clubs, cities.selectedCity.slug) : clubs;
    
    newClubs.forEach(({ activity }) => {
      activity.forEach(activ => {
        newActivities.find(item => item.slug === activ.slug) ? null : newActivities.push(activ);
      })
    });

    return newActivities;
  }
}