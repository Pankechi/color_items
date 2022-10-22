<template>

  <div class="brick_wrap">
    <div class="line_divider">
      <OutputItem :bricks="brick" v-for="brick in item" :key="brick"></OutputItem>
    </div>
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
  methods: {    
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
    margin-top: 15px;
    border: 1px solid;
    padding: 19px;
  }

  .line_divider {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }

  .brick {
    width: 20px;
    height: 20px;
  }

</style>