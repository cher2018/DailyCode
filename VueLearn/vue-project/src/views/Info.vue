<template>
  <div>
      hello info component
      <button type="button" @click="add()">添加</button>
  </div>
</template>

<script>
import store from '@/store.js'
export default {
  name: 'info',
  store,
  methods: {
    add(){
      console.log("add event from info");
      store.commit('increment');
    }
  }
}
</script>

<style lang='stylus' scoped>
</style>