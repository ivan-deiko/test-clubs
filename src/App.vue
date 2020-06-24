<template>
  <div id="app">
    <div class="container" v-if="clubLoad">
      <Selectors />
      <Search />
      <Clubs />
    </div>
  </div>
</template>

<script>
  import './assets/style/css/main.css'
  import { mapState } from 'vuex'
  import { GET_CLUBS } from './store/modules/clubs/actions'
  import Clubs from './components/Clubs/Clubs'
  import Selectors from './components/Selectors/Selectors'
  import Search from './components/Search/Search'

  export default {
    computed: {
      ...mapState('clubs/', ['clubLoad'])
    },
    mounted() {
      this.$store.dispatch(`clubs/${GET_CLUBS}`);
    },
    components: {
      Clubs,
      Selectors,
      Search,
    }
  }
</script>

