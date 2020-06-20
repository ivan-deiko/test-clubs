// consts mutations 
export const SET_SELECTED_CITY = 'SET_SELECTED_CITY'
export const SET_CITIES = 'SET_CITIES'

export default {
  [SET_SELECTED_CITY]: (state, payload) => state.selectedCity = payload,
  [SET_CITIES]: (state, { data }) => {
    let newCities = [];
    data.forEach(({ city }) => newCities.find(item => item.slug === city.slug) ? null : newCities.push(city));
    state.cities = newCities;
  }
}
