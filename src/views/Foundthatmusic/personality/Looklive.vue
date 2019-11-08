<template>
  <div class="Thehost">
    <ul class="UL">
      <li>最新音乐</li>
      <li>更多<span class="iconfont icon-jiantouyou"></span></li>
    </ul>
    <div class="theost">
      <ul>
        <li v-for="(item,index) in lista" :key="index">
          <span style="line-height: 50px;font-size: 14px;color: #9999B1;">
            {{index+1 | tofixed(index+1)}}</span>
          <img class="IMG" :src="item.song.album.picUrl"/>
          <i class="el-icon-video-play"></i>
          <div class="song">
          {{item.name}}
          <template v-if="item.song.alias.length">
           <span class="series"> ({{...item.song.alias}})</span>
          </template>
          <br>
            <template v-if="item.song.artists.length">
              <span class="author" v-for="(item2,index2) in item.song.artists" :key="index2">
                {{item2.name}}
              </span>
            </template>
          </div>
        </li>
      </ul>
    </div>

    <ul class="ULa">
      <li>现在可以根据个人喜好,自由调整首页栏目顺序啦~</li>
      <li>调整栏目顺序</li>
    </ul>
  </div>
</template>

<script>
  import {personality} from '../../../api/interface/personality'
  export default {
    name: "looklive",
    data(){
      return{
        lista:[]
      }
    },
    methods:{

      async djprogram(){
        try {
          let res =await personality.newsong({})
          if(res.code === 200){
            this.lista = res.result
          }
        }catch (e){
          this.$message.error('服务器异常')
        }
      },

    },
    mounted(){
      this.djprogram()
    },

    filters:{
      tofixed:(n)=>{
          if(n >= 10){
            return n
        }else {
          return "0"+n
          }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .Thehost{
    width: 95%;
    height: 437px;
    min-width:780px;
    max-width: 1034px;
    margin: 20px auto;
    .UL{
      width: 100%;
      height: 34px;
      display: flex;
      justify-content: space-between;
      line-height: 32px;
      font-size: 18px;
      border-bottom: solid 1px #00000029
    }
    .theost{
      width: 100%;
      height: 84%;
      margin-top: 12px;
      ul{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        li{
          width: 49%;
          height: 14%;
          background: #FAFAFA;
          display: flex;
          padding: 6px;
          position: relative;
          .IMG{
            width: 46px;
            height: 46px;
            margin-left: 10px;
          }
          i.el-icon-video-play{
            color: #fff;
            position: absolute;
            font-size: 27px;
            left: 44px;
            top: 17px;
          }
        }
        .song{
          margin-left: 10px;
          .series{
            color: #999999;
          }
        }
        .author {
          color: #999999;
        }
        .author:not(:last-child):after {
          color: #999999;
          content: "/";
        }
       li:nth-of-type(even){
         background: #eaeaea;
       }
      li:hover{
        background: rgba(191, 191, 191, 0.77);
      }
      }
    }
  }

  .ULa{
    width: 100%;
    height: 177px;
    border-top: solid 1px #00000029;
    text-align: center;
    color: #888888;
    font-size: 15px;
    li{
      margin-top: 15px;
    }
    li:nth-child(2){
      border: solid 1px #8BC9F8;
      width: 103px;
      padding: 4px 21px;
      border-radius: 6px;
      color: #44AAF8;
      margin: 18px auto;
    }
  }

</style>
