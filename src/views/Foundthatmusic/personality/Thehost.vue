<template>
    <div class="Thehost">
      <ul class="UL">
        <li>主播电台</li>
        <li>更多<span class="iconfont icon-jiantouyou"></span></li>
      </ul>
      <div class="theost">
        <ul>
          <li v-for="(item,index) in lista" :key="index">
          <div class="IMG">
            <img :src="item.picUrl"/>
            <div class="wenzi">{{item.program.dj.brand}}</div>
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
        name: "thehost",
      data(){
          return{
            lista:[]
          }
      },
      methods:{

       async djprogram(){
          try {
            let res =await personality.djprogram({})
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
        justify-content: space-between;
        li{
          width: 15.6%;
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
              transition: 1s transform;
              transform: scale(1.1);
            }

            .wenzi{
              width: 100%;
              border: solid 1px #00000012;
              background: #ffffff24;
              position: absolute;
              bottom: -1px;
              overflow: hidden;
              white-space: nowrap;
              text-overflow: ellipsis;
              color: #fff;
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
            font-size: 14px;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            overflow: hidden;

          }
        }
      }
    }
  }
</style>
