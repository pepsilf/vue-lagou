<template>
  <div class="cuty">
    <ul class="city-list" v-for="item in arr" >
      <div class="list-header">{{item.nameStr}}</div>
      <router-link class="city-item" tag="li" :to="{name:'search',params:{city:items}}" v-for="items in item.cityList" :key="items">{{items}}</router-link>
    </ul>
  </div>
</template>

<script>
export default {
  data(){
    return {
      arr: [{"cityList":["北京","上海","广州","深圳","成都","杭州"],"name":"热门城市","nameStr":"热门城市"},
      {"cityList":["安庆","蚌埠","保定","北海","北京","包头","滨州","长春","成都","常德","承德","赤峰","重庆","长沙","常州","沧州","潮州","滁州","郴州","东莞","大连","大理","东营","德阳","达州","德州","佛山","阜阳","福州"],"name":"","nameStr":"ABCDEF"},
      {"cityList":["桂林","贵阳","广州","赣州","淮安","邯郸","哈尔滨","合肥","黄冈","呼和浩特","海口","衡水","河源","衡阳","杭州","惠州","湖州","菏泽","金华","吉林","江门","济南","济宁","嘉兴","揭阳","荆州","晋中"],"name":"","nameStr":"GHIJ"},
      {"cityList":["开封","昆明","聊城","廊坊","拉萨","丽水","临沂","洛阳","龙岩","连云港","兰州","柳州","泸州","马鞍山","眉山","绵阳","梅州","宁波","南昌","南充","宁德","南京","南宁","南通","南阳"],"name":"","nameStr":"KLMN"},
      {"cityList":["莆田","濮阳","青岛","秦皇岛","清远","泉州","衢州","日照"],"name":"","nameStr":"OPQR"},
      {"cityList":["韶关","上海","石家庄","遂宁","商丘","宿迁","上饶","汕头","汕尾","绍兴","沈阳","三亚","十堰","深圳","苏州","泰安","天津","唐山","太原","台州","泰州"],"name":"","nameStr":"STUV"},
      {"cityList":["潍坊","武汉","威海","芜湖","乌鲁木齐","无锡","温州","西安","许昌","香港特别行政区","厦门","西宁","咸宁","邢台","湘潭","新乡","咸阳","襄阳","信阳","新余","徐州","宜宾","银川","盐城","宜昌","宜春","烟台","岳阳","扬州","淄博","珠海","镇江","湛江","肇庆","中山","遵义","郑州","株洲","漳州"],"name":"","nameStr":"WXYZ"}],
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import "../../../static/css/city.css"
</style>
