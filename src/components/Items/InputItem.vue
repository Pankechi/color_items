//Компонент инпута
<template>
  <div class="item__wrapper">
    <div class="item__input">
      <input v-model="checked" type="checkbox" class="item_check" name="" id="">Test
      <input v-on:change="changeQuantity" v-model="numbers" type="number" min="0">
      <input v-model="item_color" type="color">
    </div>
    <div class="item__preview">
      <div class="item__quantity">{{numbers}}</div>
      <div :style="{'background-color': item_color}" class="item__color"></div>
    </div>
    <div v-if="checked" class="item_bricks">
      <div @click="deletBrick" v-for="number in numbers" :key="number++" :style="{'background-color': item_color}" class="item__color"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      numbers: this.item.quantity,
      item_color: this.item.color,
      checked: this.main_checked,
    }
  },
  props: {
    main_checked: Boolean,
    item: Object
  },
  methods: {
    deletBrick() {
      this.numbers--
    },
    changeQuantity() {
      console.log(this.numbers)
    },
  },
  watch: {
    main_checked: function(newVal) {
      this.checked = newVal
    }
  }

}
</script>

<style >
  .item__wrapper {
  display: flex;
  gap: 80px;
  align-items: center;
}

.item__input {
  display: flex;
  align-items: center;
  gap: 5px;
}

.item__preview {
  display: flex;
  gap: 10px;
}

.item__color {
  width: 20px;
  height: 20px;
}

.item_bricks {
  display: flex;
  flex-direction: row;
  gap: 5px;
}
</style>