<template>
  <div class="Thehost">
    <ul class="UL">
      <li>独家放送</li>
      <li>更多<span class="iconfont icon-jiantouyou"></span></li>
    </ul>
    <div class="theost">
      <ul>
        <li v-for="(item,index) in lista" :key="index">
          <div class="IMG">
            <img :src="item.sPicUrl"/>
            <div class="wenzi"><i class="el-icon-video-camera"></i></div>
          </div>
          <div class="WZ">{{item.name}}</div>

        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import {personality} from '../../../api/interface/personality'
  export default {
    name: "exclusive",
    data(){
      return{
        lista:[]
      }
    },
    methods:{

      async djprogram(){
        try {
          let res =await personality.privatecontent({})
          if(res.code === 200){
            this.lista = res.result
          }

        }catch (e){
          this.$message.error('服务器异常')
        }


      }

    },
    mounted(){
      this.djprogram()
    }

  }
</script>

<style lang="scss" scoped>
  .Thehost{
    width: 95%;
    height: 286px;
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
      height: 84%;
      margin-top: 12px;
      ul{
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-between;
        li{
          width: 32%;
          height: 100%;
          .IMG{
            overflow: hidden;
            cursor: pointer;
            width: 100%;
            height: 82%;
            display: flex;
            align-items: flex-end;
            position: relative;
            img{
              width: 100%;
              height: 100%;
              transition: 2s transform;
              transform: scale(1.1);
            }

            .wenzi{
              width: 35px;
              height: 31px;
              border: solid 1px #ffffffb8;
              border-radius: 50%;
              position: absolute;
              top: 10px;
              left: 5px;
              line-height: 31px;
              text-align: center;
              background: #00000070;
              i.el-icon-video-camera {
                font-size: 20px;
                color: #fff;
              }
            }
          }
          .IMG:hover{

            img{
              transition: 1s transform;
              transform: scale(1.3);
            }
          }

          .WZ{
            width: 100%;
            height: 16%;
            font-size: 13px;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            overflow: hidden;
            line-height: 25px;

          }
        }
      }
    }
  }
</style>
