<template>
  <div class="brick_wrap">

    <div  v-for="brick in item" :key="brick" >
      <div v-for="doge in brick.quantity" :key="doge" :style="{'background-color': brick.color}" class="brick"></div>
    </div>

  </div>

</template>

<script>

export default {
  props: {
    item: Object
  },
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