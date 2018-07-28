<template>
  <div id="app">
    <div class="header">拉勾网</div>
    <ul class="nav">
      <router-link 
      tag="li" 
      :to="item.path" 
      v-for="item in arr" 
      :key="item.id" 
      :class="{action:item.path==decodeURIComponent(type)}"
      @click.native="change(item.path)"
      >
      {{item.type}}</router-link>
    </ul>
    <router-view></router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{
      arr:[
        {
          id:1,
          type:"职位",
          path:"/"
        },
        {
          id:2,
          type:"搜索",
          path:"/search/全国"
        },
        {
          id:3,
          type:"我的",
          path:"/user"
        },
      ],
      type:"/",
    }
  },
  methods:{
    change(path){
      this.type=path
      console.log(location)
    }
  },
  created(){
    this.type=(location.hash).split("#")[1]
  }

}
</script>

<style>
  @import "../static/css/app.css";  
</style>
