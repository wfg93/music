<template>
  <div class="Thehost">
    <ul class="UL">
      <li>推荐歌单</li>
      <li>更多<span class="iconfont icon-jiantouyou"></span></li>
    </ul>
    <div class="theost">
      <ul>
       <li class="tiME" @click="desongs()">
          <div class="IMG">

            <span class="weEk">星期{{trmm}}</span><br/>

            <span class="Theda">{{ITem}}</span>

          </div>
          <div class="WZ">每日歌曲推荐</div>
        </li>
        <li v-for="(item,index) in lista" :key="index">
          <div class="IMG">
            <img :src="item.picUrl"/>
            <div class="wenzi"><i class="el-icon-video-camera"> {{item.playCount}}</i></div>
          </div>
          <div class="WZ">{{item.name}}<br>{{item.artistName}}</div>

        </li>

      </ul>
    </div>
  </div>
</template>

<script>
  import {personality} from '../../../api/interface/personality'
  import sayMsg from "../../../page/time";

  export default {
    name: "Recommendtheplaylist",
    data(){
      return{
        lista:[],
        ITem:'',
        trmm:0
      }
    },
    methods:{

      async djprogram(){
        try {
          let res =await personality.personalized({})
          if(res.code === 200){

            let zai = JSON.parse(JSON.stringify(res.result));
            for(var i =0;i<zai.length;i++){
              zai[i].playCount = sayMsg.exchangeNumber(zai[i].playCount);
            }

            this.lista = zai;
          }

        }catch (e){
          this.$message.error('服务器异常')
        }

      },

       //推荐歌单
      desongs(){
        this.$router.push({path:'/recommendsongs'})
         }

    },
    mounted(){
      this.djprogram()
      this.ITem = sayMsg.myDate();
      this.trmm = sayMsg.tamun();
    }

  }
</script>

<style lang="scss" scoped>
  .Thehost{
    width: 95%;
    height: 530px;
    min-width:780px;
    max-width: 1034px;
    margin: 45px auto;
    .UL{
      width: 100%;
      height: 34px;
      display: flex;
      justify-content: space-between;
      line-height: 32px;
      font-size: 18px;
      border-bottom: solid 1px #00000029;
    }
    .theost{
      width: 100%;
      height: 90%;
      margin-top: 12px;
      ul {
        width: 100%;
        height: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        li {
          width: 18.6%;
          height: 47%;
          .IMG {
            overflow: hidden;
            cursor: pointer;
            width: 100%;
            height: 80%;
            display: flex;
            align-items: flex-end;
            position: relative;
            img {
              width: 100%;
              height: 100%;
              transition: 2s transform;
              transform: scale(1.1);

            }
            .wenzi {
              width: 100%;
              height: 24px;
              position: absolute;
              top: 0px;
              line-height: 26px;
              text-align: right;
              background: #0000001c;
              font-size: 17px;
              i.el-icon-video-camera {
                color: #fff;
              }
            }
          }

          .IMG:hover {

            .wenzi {
              display: none;
            }
            img {
              transition: 1s transform;
              transform: scale(1.3);
            }
          }

          .WZ {
            width: 100%;
            height: 20%;
            font-size: 13px;
            line-height: 25px;
          }
        }
        .tiME {
          width: 19%;
          height: 47%;
          .IMG {
            width: 100%;
            height: 80%;
            position: relative;
            background-color: #FAFAFA;
            .weEk{
              font-size: 30px;
              position: absolute;
              top: 12%;
              left: 29%;
            }
            .Theda{
              font-size: 102px;
              margin: -6px auto;
              color: #44AAF8;
            }
            .WZ {
              width: 100%;
              height: 20%;
              font-size: 13px;
              display: -webkit-box;
              -webkit-box-orient: vertical;
              -webkit-line-clamp: 1;
              overflow: hidden;
              line-height: 25px;

            }
          }
        }
      }
    }
  }

</style>
