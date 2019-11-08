<template>
    <div class="personality">
      <div class="person">
        <ul>
        <li v-for="(item ,index) in list" :key="index" :class="actveclass == index ? 'actives':''" @click="Isactive(index)">
          <router-link :to='item.todo'>{{item.name}}</router-link>
        </li>
      </ul>
      </div>
          <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: "index",
      data(){
          return{
            list:[
              {name:'个性推荐',todo:'/'},
              {name:'歌单',todo:'/playlist'},
              {name:'主播电台',todo:'/thehost'},
              {name:'排行榜',todo:'/ranking'},
              {name:'歌手',todo:'/singer'},
              {name:'最新音乐',todo:'/thelatest'}
              ],
            actveclass:0
          }
      },
      methods:{
        Isactive(index){
          this.actveclass =index
        }
      }
    }
</script>

<style lang="scss" scoped>
.personality{
  height: 100%;
  min-height: 910px;
  .person{
    width: 97%;
    height: 44px;
    border-bottom: solid 1px #0000002e;
    line-height: 44px;
    ul{
      width: 500px;
      height: 100%;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      li{
        a{
          text-decoration: none;
        }
        a:active{
          color: rgb(68,170,248);
          text-decoration: none;
        }
      }

      .actives{
        border-bottom: solid 2px rgb(68,170,248);
      }

    }
  }
}
</style>
