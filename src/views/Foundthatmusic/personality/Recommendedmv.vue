<template>
  <div class="Thehost">
    <ul class="UL">
      <li>推荐MV</li>
      <li>更多<span class="iconfont icon-jiantouyou"></span></li>
    </ul>
    <div class="theost">
      <ul>
        <li v-for="(item,index) in lista" :key="index" class="THeo">
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
          let res =await personality.mv({})
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
  @import '../../../page/css/mall.scss';

</style>
