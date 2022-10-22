<template>

  <div class="brick_wrap">
    <OutputItem :bricks="brick" v-for="brick in item" :key="brick"></OutputItem>
  </div>

</template>

<script>

import OutputItem from './OutputItem.vue'
export default {
  components: {
    OutputItem
  },
  props: {
    item: Array
  },
  data() {
    return{
    }
  },
  
}
</script>

<style>

  .brick_wrap {
    display: flex;
    flex-direction: row;
    gap: 5px;
    flex-wrap: wrap;
    width: 600px;
    margin-bottom: 50px;
  }
  .brick {
    width: 20px;
    height: 20px;
  }

</style>