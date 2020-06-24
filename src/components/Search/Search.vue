<template>
  <div class="search">
    <input type="text" placeholder="поиск по названию клуба" @input="search($event)" :value="defVal" />
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  import { SEARCH } from "@/store/modules/clubs/actions"

  export default {
    computed: {
      ...mapState('clubs/', {
        defVal: state => state.searchText
      })
    },
    methods: {
      search({ target }) {
        this.$store.dispatch(`clubs/${SEARCH}`, target.value)
      }
    }
  }
</script>