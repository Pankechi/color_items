<template>
  <div enter-class="input-list__wrapper">
    <div class="list__info">
      <button @click="toggleDropdown" class="list__button"><i class="arrow" :class="swap"></i></button>
      <input v-model="checked" type="checkbox">test
  </div>
  <div v-if="toggle" class="dropdown__items">
    <!-- <InputItem :main_checked="checked" :item="item" v-for="item in item_list" :key="item"></InputItem>  -->
    <InputItem :item="list" v-for="list in item_list" :key="list" :main_checked="checked"></InputItem>
  </div>
  <div v-for="item, in item_list" :key="item" class="bricks_wrapper">
    
  </div>
</div>

</template>

<script>

import InputItem from './InputItem.vue'
export default {
  components: {
    InputItem,
  },
  data() {
    return {
      toggle: false,
      swap: 'right',
      checked: false,
      bricks: []

    }
  },
  props:{
    item_list: Object
  },
  methods: {
    toggleDropdown() {
      this.toggle = !this.toggle
      this.swap === 'right' ? (this.swap = 'down') : (this.swap = 'right')
    },
    checkedSwap() {
      this.checked = !this.checked
    },
  },
  mounted() {
   for(let i = 0; i < this.item_list.length; i++) {
    console.log(this.item_list[i].quantity)
      console.log(this.item_list[i].color)
      
   }
  },
  
}
</script>

<style>

.input-list__wrapper {
  display: flex;
  margin: 10px 5px;
}

.list__info {
  display: flex;
  align-items: center;
} 

.dropdown__items {
  display: flex;
  flex-direction: column;
  margin-left: 40px;
}

.list__button {
    background: no-repeat;
    border: none;
}

.arrow {
  border: solid black;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 3px;
}

.right {
  transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
}

.down {
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
}
  
</style>