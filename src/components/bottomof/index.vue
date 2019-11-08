<template>
    <div class="bot">
      <div class="bomof">
      </div>
<div class="SWitch">
  <div class="swTC">
    <div>
      <span class="iconfont icon-shangyiqu"></span>
    </div>
 <div>
   <span class="iconfont icon-youjiantou" style="font-size: 25px"></span>
 </div>
    <div>
      <span class="iconfont icon-xiayiqu1"></span>

    </div>
  </div>
  <div class="lengthof">dddddd</div>
  <div class="lyrics">歌词</div>
</div>

    </div>
</template>

<script>
    export default {
        name: "bottomof",
      data(){
          return{

          }
      }
    }
</script>

<style lang="scss" scoped>
.bot{
  width: 100%;
  height: 60px;
  background: #cbf821;
  border: solid 1px black;
  .bomof{
    width: 203px ;
    height: 50px;
    background: #3A71A8;
    position: absolute;
    top: -51px;
  }
  .SWitch{
    width: 100%;
    height: 100%;
    background: #13ce66;
    border: solid 1px black;
    display: flex;
    justify-content: space-between;
    .swTC{
      width: 10.6%;
      height: 80%;
      background: #C03639;
      display: flex;
      justify-content: space-evenly;
      div{
        width: 38px;
        height: 38px;
        border: solid 1px black;
        border-radius: 50%;
        text-align: center;
        line-height: 38px;
        background: #66B7FF;
        color: #ffffff;
        .iconfont{
          font-size: 20px;
        }
      }
    }.lengthof{
      /* width: 70%;*/
       height: 80%;
       background: #c05f72;
     }
    .lyrics{
      width: 14%;
      height: 80%;
      background: #a2ea34;
    }

  }

}
</style>
