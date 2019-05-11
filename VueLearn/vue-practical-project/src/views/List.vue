<template>
  <div>
    <p>新闻列表</p>
    <ul>
      <li 
       v-for="(item,index) in listsPage" 
    :key="index">
    {{item.title}}-{{item.content}}
    </li>
    </ul>
  </div>
</template>

<script>
import store from '@/store.js'
export default {
  name: '',
  store,
  computed:{
    listsPage:function(){
      return store.state.lists;
    }
  }
}
</script>

<style>
</style>