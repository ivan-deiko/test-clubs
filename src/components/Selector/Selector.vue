<template>
  <ul class="selector">
    <li 
      class="selector-clear"
      v-if="selected"
      @click="handlerClick('')"
    > 
      clear
    </li>
    <li
      v-for="item in list"
      :key="item.slug"
      :class="`${className}${item.slug === selected ? ` ${className}_activ` : ''}`"
      @click="handlerClick(item.slug)"
    >
      {{ item.title }}
    </li>
  </ul>
</template>

<script>
  export default {
    props: {
      list: {
        type: Array,
        required: true,
        validator: list => list.every(item => {
          const typeCheck = typeof item === 'object';
          const keyCheck = ['slug', 'title'].every(key => item[key]);
          return typeCheck && keyCheck;
        })
      },
      selected: {
        type: String,
        required: true,
      },
      className: {
        type: String,
        required: true,
      },
      handlerClick: {
        type: Function,
        required: true
      }
    },
  }
</script>
