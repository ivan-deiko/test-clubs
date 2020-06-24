<template>
  <div class="selectors">
    <Selector 
      :list="cities" 
      :selected="selectedCity" 
      className="city"
      v-if="cities"
      :handlerClick="selectCity"
    />
    <Selector
      :list="ACTIVITIES"
      :selected="selectedActivity"
      className="activity"
      v-if="ACTIVITIES"
      :handlerClick="selectActivity"
    />
  </div>
</template>

<script>
  import { mapState, mapGetters } from 'vuex'
  import { CHANGE_SELECTED_CITY } from '@/store/modules/cities/actions'
  import { SEARCH } from '@/store/modules/clubs/actions'
  import { CHANGE_SELECTED_ACTIVITY } from '@/store/modules/activity/actions'
  import { ACTIVITIES } from '@/store/modules/activity/getters'
  import Selector from '../Selector/Selector'

  export default {
    computed: {
      ...mapState('cities', {
        cities: state => state.cities,
        selectedCity: state => state.selectedCity.slug ? state.selectedCity.slug : state.selectedCity
      }),
      ...mapState('activity', {
        selectedActivity: state => state.selectedActivity.slug ? state.selectedActivity.slug : state.selectedActivity
      }),
      ...mapGetters('activity', [ ACTIVITIES ]),
    },
    methods: {
      selectCity(selected) {
        this.$store.dispatch(`cities/${CHANGE_SELECTED_CITY}`, selected);
        this.$store.dispatch(`activity/${CHANGE_SELECTED_ACTIVITY}`, '');
        this.$store.dispatch(`clubs/${SEARCH}`, null);
      },
      selectActivity(selected) {
        this.$store.dispatch(`activity/${CHANGE_SELECTED_ACTIVITY}`, selected);
      }
    },
    components: {
      Selector
    }
  }
</script>

<style>
</style>