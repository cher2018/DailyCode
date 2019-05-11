<template>
  <div>
    <ul>
      <li
        v-for="(item,index) in list"
        @click="change(index)"
        :class="{'active':index==current&&current!==''}"   
        :key="index"
      >
      <!--这里的current是强不等于，因为0==''是对的，0===''是错的，若此处为弱等于，则当current=0时，后面的判断为错而不能执行添加class行为-->
      {{item}}</li>
    </ul>
    <button type="button" @click="add()">添加</button>
    <ul>
      <li v-for="(item,index) in target" :key="index">{{item}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "listRendering",
  data() {
    return {
      current: '',
      list: [1, 2, 3, 4, 5, 6, 7],
      target: []
    };
  },
  methods: {
    change(index) {
      this.current = index;
    },
    add(){
        if(this.current!==''){
            this.target.push(this.list[this.current]);
            //要让每次添加后都归空，不然就能进行添加了
            this.current = '';
        }
        
    }
  }
};
</script>

<style>
li.active {
  background: green;
}
</style>