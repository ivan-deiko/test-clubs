<template>
  <ul>
    <transition-group name="fade" class="list-clubs">
      <Club
        v-for="club in CLUBS"
        :club="club"
        :key="club.title"
      />
    </transition-group>
  </ul>
</template>

<script>
  import { mapGetters } from 'vuex'
  import { CLUBS } from '@/store/modules/clubs/getters'
  import Club from '../Club/Club'

  export default {
    computed: {
      ...mapGetters('clubs', [ CLUBS ])
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