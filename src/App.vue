<template>
  <div id="app">
    <Selectors />
    <Clubs />
  </div>
</template>

<script>
  import './assets/style/css/main.css'
  import { GET_CLUBS } from './store/modules/clubs/actions'
  import Clubs from './components/Clubs/Clubs'
  import Selectors from './components/Selectors/Selectors'

  export default {
    mounted() {
      this.$store.dispatch(`clubs/${GET_CLUBS}`)
    },
    components: {
      Clubs,
      Selectors,
    }
  }
</script>

