<template>
  <div v-if="sorted" class="brick_wrap">
    <button 
    class="sort_button" 
    @click="sortChange">
    Перемешать
    </button>
    <div>
      <div class="line_divider">
        <OutputItem 
        :bricks="brick" 
        v-for="brick in item" 
        :key="brick">
      </OutputItem>
      </div>
    </div>
  </div>

  <div v-if="!sorted" 
  class="brick_wrap">
      <button class="sort_button" 
      @click="sortChange">
      Сортировать
    </button>
    <div class="random_wrapper">
      <OutputItem 
      :bricks="brick" 
      v-for="brick in item" 
      :key="brick"></OutputItem>
    </div>
  </div>
</template>

<script>
import OutputItem from '../Items/OutputItem.vue'
export default {
  components: {
    OutputItem
  },
  props: {
    item: Array
  },
  data() {
    return{
      sorted: true,
  }
  },
  methods: {  
    sortChange() {
      this.sorted = !this.sorted
    }  
  },
}
</script>

<style>
  .sort_button {
    width: 100px;
  }

  .brick_wrap {
    display: flex;
    flex-direction: column;
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

  .random_wrapper {
    display: flex;
    gap: 5px;
    width: 600px;
    flex-wrap: inherit;
  }

  .brick {
    width: 20px;
    height: 20px;
  }

</style>