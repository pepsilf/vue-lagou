<template>
  <div class="search">
    <div class="search-header">
      <router-link class="city" tag="div" to="/city">{{city}}</router-link>
      <input type="text"  placeholder="搜索职位或公司" @input="contents($event)" value="" @keyup.enter="getJobs(city,content)">
      <div class="tosearch" @click="getJobs(city,content)">搜索</div>
    </div>
    <div class="point" :class="{points:pointOut!=''}">{{pointOut}}</div>
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
    <div class="list-more" @click="listMore(city,content)" v-if="arr.length">加载更多</div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      arr:[],
      pageNo:1,         //页数
      pageSize:15,      //数量
      content:"",       //输入框内容
      city:this.$route.params.city,  //城市
      pointOut:"",      //提示信息
    }
  },
  computed:{
    
  },
  methods:{
    //http://m.lagou.com/search.json?city=全国&positionName=百度&pageNo=1&pageSize=15
    getJobsList(city,name){             //获取工作列表
      let params = {city:city,positionName:name,pageNo:this.pageNo,pageSize:this.pageSize};
      let url = `/anhao/search.json`;
      this.$http.get(url,{params}).then(res=>{
        this.arr=this.arr.concat(res.data.content.data.page.result);
        if(!this.arr.length){
          console.log(this.arr)
          this.pointOut="拉勾上暂时没有这样的职位"
        }else{
          this.pointOut="将搜索地区和关键词设为定制条件"
        }
      });
    },
    getJobs(city,name){
      this.arr=[];              //先清空列表
      this.getJobsList(city,name);
    },
    listMore(city,name){
      this.pageNo++,            //页数++
      this.getJobsList(city,name)
    },
    contents(e){                //输入时赋值给content
      this.content=e.data;
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import "../../../static/css/search.css"
</style>
