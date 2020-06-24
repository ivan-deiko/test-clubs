<template>
  <ul v-if="CLUBS.length">
    <transition-group name="fade" class="list-clubs">
      <Club
        v-for="club in CLUBS"
        :club="club"
        :key="club.title"
      />
    </transition-group>
  </ul>
  <div class="clubs-empty" v-else> 
    {{ emptyClubText }}
  </div>
</template>

<script>
  import { mapGetters, mapState, } from 'vuex'
  import { CLUBS } from '@/store/modules/clubs/getters'
  import Club from '../Club/Club'

  export default {
    computed: {
      ...mapGetters('clubs', [ CLUBS ]),
      ...mapState('cities', {
        selectedCity: state => state.selectedCity?.title
      }),
      ...mapState('clubs', {
        search: state => state.searchText
      }),
      emptyClubText() {
        return this.selectedCity
          ?
            `В городе ${this.selectedCity} не найден этот ${this.search} клуб`
          :
            `${this.search} клуб не найден!`
      }
    },
    components: {
      Club,
    }
  }
</script>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
}
</style>