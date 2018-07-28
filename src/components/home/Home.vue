<template>
  <div class="home">
    <div class="home-header">
      <div class="title">10秒钟定制职位</div>
      <div class="gologin">去登陆</div>
    </div>
    <ul class="job-list">
      <li class="job-item" v-for="item in arr" :key="item.companyID">
        <div class="item-logo">
          <img :src="'https://www.lgstatic.com/'+item.companyLogo" />
        </div>
        <div class="item-info">
          <div class="item-left">
            <div class="item-name">
              <span>{{item.companyName}}</span>
            </div>
            <div class="item-details">
              <span>{{item.positionName}}</span>
            </div>
            <div class="item-time">
              <span>{{item.createTime}}</span>
            </div>
          </div>
          <div class="item-pay">{{item.salary}}</div>
        </div>
      </li>
    </ul>
    <div class="list-more" @click="listMore">加载更多</div>
    <div class="footer">
      <div class="lagou">©2015 lagou.com, all right reserved</div>
      <div class="gotop">移动版 · 电脑版 · 回顶部</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      arr:[],
      pageNo:2,
      pageSize:15,
    }
  },
  methods:{
    //http://m.lagou.com/listmore.json?pageNo=2&pageSize=15
    getFilms(){             //获取电影列表
      let params = {pageNo:this.pageNo,pageSize:this.pageSize};
      let url = `/anhao/listmore.json`;
      this.$http.get(url,{params}).then(res=>{
        this.arr=this.arr.concat(res.data.content.data.page.result);
        console.log(this.arr)
      });
    },
    listMore(){
      this.pageNo++,
      this.getFilms()
    }
  },
  mounted(){
    this.getFilms()
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import "../../../static/css/home.css"; 
</style>
