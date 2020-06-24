<template>
  <li class="club">
    <a class="club-container" :href="club.link" target="_blank">
      <div class="club-logo">
        <img :src="getLogo(club.logo)" :alt="club.title" />
      </div>
      <div class="club-details">
        <ul>
          <li v-for="act in club.activity" :key="act.slug">{{ act.slug }}</li>
        </ul>
      </div>
    </a>
    <span class="club-title"> {{ club.title }}</span>
  </li>
</template>

<script>
  export default {
    props: {
      club: {
        type: Object,
        required: true,
        validator: club => ['link', 'logo', 'title', 'activity', 'city'].every(item => club[item])
      }
    },
    methods: {
      getLogo: logo => logo === 'https://instasport.co/dashboard/api/v1/clubs/' ? require('../../assets/images/no-logo.png') : logo,
    },
  }
</script>