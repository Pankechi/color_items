<template>
  <div class="app__wrapper">
    <div class="input__wrapper">
      <InputList :item_list="list" v-for="list in $store.state.lists" :key="list"></InputList>
    </div>
    <OutputItem :item="$store.state.lists"></OutputItem>
  </div>
</template>
  
<script>
import InputList from './components/Items/InputList.vue'
import OutputItem from'./components/Items/OutputItem.vue'


export default {
  components: {
    InputList,
    OutputItem,
  },
}
</script>

<style>
  .app__wrapper {
    display: flex;
    flex-direction: row;
    gap: 90px;
  }

  .input__wrapper {
    display: flex;
    flex-direction: column;
  }

</style>
