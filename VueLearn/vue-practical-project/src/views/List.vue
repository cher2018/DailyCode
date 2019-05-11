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
  // data(){
  //   return{
  //     listsPage:store.state.lists;
  //   }
  // },
  //为什么不用这种方法，是因为列表中有多个元素吗
  computed:{
    listsPage:function(){
      return store.state.lists;
    }
  }
}
</script>

<style>
</style>