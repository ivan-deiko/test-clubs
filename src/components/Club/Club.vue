<template>
  <li class="club">
    <a class="club-container" :href="club.link" target="_blank">
      <div class="club-logo">
        <img :src="club.logo" :alt="club.title" />
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
        validator: club => ['link', 'logo', 'title'].every(item => club[item])
      }
    }
  }
</script>