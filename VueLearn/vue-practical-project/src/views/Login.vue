<template>
  <div>
    <form v-if="!isReg">
      <div>用户</div>
      <input type="text" v-model="user">
      <div>密码</div>
      <input type="password" v-model="password">
      <button type="button" @click="login()">登录</button>
      <button type="button" @click="skipReg()">注册</button>
    </form>

    <form v-else>
      <div>用户</div>
      <input type="text" v-model="user">
      <div>密码</div>
      <input type="password" v-model="password">
      <div>再次输入密码</div>
      <input type="password" v-model="repeat">
      <button type="button" @click="skipLogin()">登录</button>
      <button type="button" @click="reg()">注册</button>
    </form>
    
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      isReg:false,
      user:'',
      password:'',
      repeat:''
    };
  },
  methods: {
    login(){
      if(localStorage.getItem("user")===this.user&&localStorage.getItem("password")===this.password){
        this.user = '';
        this.password = '';
        this.$router.push("/home/list");
      }else{
        alert("密码或用户名不正确！");
        this.user = '';
        this.password = '';
      }
      
    },
    reg(){
      if(this.password === this.repeat){
        localStorage.setItem("user",this.user);
        localStorage.setItem("password",this.password);
        this.user = '';
        this.password = '';
        this.repeat = '';
        this.isReg = false;
      }else{
        alert("两次输入密码不一致！");
        this.user = '';
        this.password = '';
        this.repeat = '';
      }
      
    },
    skipReg(){
      this.user = '';
      this.password = '';
      this.repeat = '';
      this.isReg = true;
    },
    skipLogin(){
      this.user = '';
      this.password = '';
      this.repeat = '';
      this.isReg = false;
    }
  }
}
</script>

<style>
</style>