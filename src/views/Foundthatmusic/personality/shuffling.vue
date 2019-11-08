<template>
    <div>
      <!--轮播图-->
      <div class="shuffling">

        <template>
          <el-carousel :interval="3000" type="card" height="200px">
            <el-carousel-item v-for="(item,index) in lista" :key="index">
              <img :src="item.imageUrl"/>
              <div class="exclusive" :style="{backgroundColor:item.titleColor}">{{item.typeTitle}}</div>
            </el-carousel-item>
          </el-carousel>
        </template>

      </div>
    </div>
</template>

<script>
  import {personality} from '../../../api/interface/personality'
  import {ERR_OK} from "../../../api/api.axios";

  export default {
        name: "shuffling",
      data(){
          return{
            lista:[]
        }
      },

      methods:{
          //轮播图
         async banner(){
            try {
              let res = await personality.banners({});
              if(res.code === ERR_OK){
                let datalist = res.banners
                this.lista = datalist
              }
            }catch (e){
              this.$message.error('服务器异常稍后再试')
            }
          }
      },
      mounted(){
          this.banner()
      }

    }
</script>

<style scoped>

  .shuffling{
    width: 95%;
    height: 220px;
    max-width: 1034px;
    margin: 16px auto;
  }
  .el-carousel--horizontal{
    width: 100%;
  }
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  img{
    width: 100%;
    height: 100%;
  }

  .el-carousel__item .is-active .el-carousel__item--card .is-in-stage{
    position: relative;
  }
  .exclusive{
    position: absolute;
    z-index: 1;
    color: #fff;
    right: -8px;
    bottom: 10px;
    font-size: 11px;
    padding: 0px 11px 3px 9px;
    border-radius: 15px;
    text-align: center;
    line-height: 14px;
  }
</style>
