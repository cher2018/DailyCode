<template>
  <div>
    <p>标题</p>
    <input type="text" v-model="title">
    <p>内容</p>
    <input type='text' v-model="content">
    <button type='button' @click="addNews()">提交</button>
    <button type='button' @click="skip()">跳转</button>
  </div>
</template>

<script>
import store from '@/store.js'
export default {
  name: '',
  store,
  data () {
    return {
      title:'',
      content:''
    };
  },
  components: {},
  mounted () {},
  methods: {
    addNews(){
      store.commit('add',{
        title:this.title,
        content:this.content
      });
      this.title = '';
      this.content='';
    },
    skip(){
      this.$router.push('/home/list');
    }
  }
}
</script>

<style>
</style>