<template>
  <div>
    <router-view/>
    <ul class="rooter">
      <li class="icon"><router-link :to="{name:'list'}">新闻列表</router-link></li>
      <li class="icon"><router-link :to="{name:'user'}">个人中心</router-link></li>
    </ul>   
  </div>
  
</template>

<script>
export default {
  name: '',
  data () {
    return {
      
    };
  },
  components: {},
  mounted () {},
  methods: {}
}
</script>

<style lang="scss">
li{
  list-style-type: none;
}
.rooter{
  position:fixed;
  width:100%;
  height: 60px;
  line-height: 60px;
  left:0;
  bottom: 0;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
}
.icon{
  font-size: 16px;
  flex:1;
  text-align: center;
  border-top:1px solid #42b983;
  a{
    color:#42b983;
    display: block;
    // 链接被激活后下面的样式覆盖原有的
    &.active{
      color:#fff;
      background:#42b983;
    }
  }
}
</style>