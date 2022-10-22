<template>
  <div class="app__wrapper">
    <div class="input__wrapper">
      <InputList :item_list="list" v-for="list in $store.state.lists" :key="list"></InputList>
    </div>
    <div class="output__wrapper">
      <OutputList v-for="list in $store.state.lists" :key="list" :item="list"></OutputList>
    </div>
  </div>
</template>
  
<script>
import InputList from './components/Lists/InputList.vue'
import OutputList from'./components/Lists/OutputList.vue'


export default {
  components: {
    InputList,
    OutputList
  },
}
</script>

<style>
  .app__wrapper {
    display: flex;
    flex-direction: row;
    gap: 30px;
  }

  .input__wrapper {
    display: flex;
    flex-direction: column;
  }

  .output__wrapper {
    display: flex;
    flex-direction: column;
  }

</style>
