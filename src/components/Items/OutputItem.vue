<template>
  <div class="brick_wrap">
    <div  v-for="wall in item" :key="wall" >
      <div v-for="bricks in wall" :key="bricks" class="brick" :style="{'background-color': bricks.color}">
      </div>
    </div>
  </div>


</template>

<script>

export default {
  props: {
    item: Array
  },
  data() {
    return{

    }
  }
}
</script>
<style>

  .brick_wrap {
    display: flex;
    flex-direction: column;
    gap: 5
  }
  .brick {
    width: 20px;
    height: 20px;
  }
</style>