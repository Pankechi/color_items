<template>
  <div class="input-list__wrapper">
    <div class="list__info">
      <button @click="toggleDropdown" class="list__button"><i class="arrow" :class="swap"></i></button>
      <input v-model="checked" type="checkbox">List
  </div>
  <div v-if="toggle" class="dropdown__items">
    <InputItem :item="list" v-for="list in item_list" :key="list" :main_checked="checked"></InputItem>
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
    doge() {

    }
  },
   
}
</script>

<style>

.input-list__wrapper {
  width: 470px;
  
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