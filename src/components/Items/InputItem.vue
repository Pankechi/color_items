//Компонент инпута
<template>
  <div class="item__wrapper">
    <div class="item__input">
      <input v-model="checked" type="checkbox" class="item_check" name="" id="">Test
      <input v-on:change="changeQuantity" v-model="number" type="number" min="0">
      <input v-model="color" type="color" :default="color">
    </div>
    <div class="item__preview">
      <div class="item__quantity">{{number}}</div>
      <div :style="{'background-color': color}" class="item__color"></div>
    </div>
    <!-- <div v-if="checked" class="item_bricks">
      <div @click="deletBrick" v-for="number in numbers" :key="number++" :style="{'background-color': item_color}" class="item__color"></div>
    </div> -->
  </div>
</template>

<script>
import { useStore } from 'vuex'

export default {
  setup() {
    const store = useStore()
    return {
      store
    }
  },
  data() {
    return {
      checked: this.main_checked,
    }
  },
  props: {
    main_checked: Boolean,
    item: Object
  },
  computed: {
    color: {
      get() {
        return this.findColor()
  },
      set(value) {
        this.$store.commit('CHANGE_COLOR', {id: this.item.id, color:value})
        
      }
    },
    number: {
      get() {
        return this.findNumder()
  },
      set(value) {
        this.$store.commit('CHANGE_QUANTITY', {id: this.item.id, quantity:value})
      }
    },
  },
  methods: {
    findColor() {
      for (let i = 0; i < this.$store.state.lists.length; i++) {
        for(let j = 0; j < this.$store.state.lists[i].length; j++) {
          if (this.$store.state.lists[i][j].id == this.item.id) {
           return this.$store.state.lists[i][j].color 
          }
        }
      }
    },

    findNumder() {
      for (let i = 0; i < this.$store.state.lists.length; i++) {
        for(let j = 0; j < this.$store.state.lists[i].length; j++) {
          if (this.$store.state.lists[i][j].id == this.item.id) {
           return this.$store.state.lists[i][j].quantity 
          }
        }
      }
    },
  },  

  watch: {
    main_checked: function(newVal) {
      this.checked = newVal
    },
    item_color: function(){
      this.store.commit('CHANGE_COLOR', this.item.id, this.item_color)
    },
    numbers: function() {
      this.store.commit('CHANGE_QUANTITY', this.item.id, this.numbers)
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