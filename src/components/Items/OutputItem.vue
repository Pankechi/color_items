<template>   
    <div @click="brickRemove" v-for="brick in number" :key="brick" :class="[default_class, id]" :style="{'background-color': bricks.color}"></div>
</template>

<script>

export default {
  props: {
    bricks: Object
  },
  data() {
    return{
      id: this.bricks.id.toString(),
      default_class: 'brick',
    }
  },
  computed: {
    number: {
      get() {
        return this.findNumder()
        },
    },

  },
  methods: {
    findNumder() {
      for (let i = 0; i < this.$store.state.lists.length; i++) {
        for(let j = 0; j < this.$store.state.lists[i].length; j++) {
          if (this.$store.state.lists[i][j].id == this.bricks.id) {
           return this.$store.state.lists[i][j].quantity 
          }
        }
      }
    },
    brickRemove() {
      this.$store.commit('REMOVE_BRICK', this.bricks.id)
    }
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