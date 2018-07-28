<template>
  <div class="user">
    <div class="login">
      <span>注册/登陆</span>
    </div>
    <div class="user-info">
      <span>投递</span>
      <span>面试</span>
      <span>邀约</span>
      <span>收藏</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import "../../../static/css/user.css"; 
</style>
