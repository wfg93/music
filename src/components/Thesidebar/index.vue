<template>
  <div class="thesi">
    <div class="mmend">
      <div class="tjia">推荐</div>
      <ul>
        <router-link to="/"> <li @click="discovery(cuor = 0)" :class="{active: cuor == 0}"><span class="iconfont icon-yinyue"></span> 发现音乐</li></router-link>
        <router-link to="/PrivateFM"><li @click="discovery(cuor = 1)" :class="{active: cuor == 1}"><span class="iconfont icon-FM"></span> 私人FM</li></router-link>
        <router-link to="/Looklive"><li @click="discovery(cuor = 2)" :class="{active: cuor == 2}"><span class="iconfont icon-zhiboguankanliangbofangsheyingshexiangjixianxing"></span> LOOK直播</li></router-link>
        <router-link to="/videoMV"><li @click="discovery(cuor = 3)" :class="{active: cuor == 3}"><span class="iconfont icon-zhiboguankanliangbofangsheyingshexiangjixianxing"></span> 视频</li></router-link>
        <router-link to="/Afriend"><li @click="discovery(cuor = 4)" :class="{active: cuor == 4}"><span class="iconfont icon-pengyou"></span> 朋友</li></router-link>
      </ul>

      <div class="tjia">我的音乐</div>
      <ul>
        <router-link to="/Localmusic"><li @click="discovery(cuor = 5)" :class="{active: cuor == 5}"><span class="iconfont icon-yinle"></span> 本地音乐</li></router-link>
        <router-link to="/Downloadmanager"> <li @click="discovery(cuor = 6)" :class="{active: cuor == 6}" ><span class="iconfont icon-xiazai"></span> 下载管理</li></router-link>
      </ul>


      <div class="tjiao">
        <span>创建的歌单</span>
        <span>

            <el-popover
              placement="right"
              width="250"
              v-model="showPrivate"
              trigger="click">
  <div class="playlist">

<div>新建歌单</div>
    <div><input type="text" class="Theinput" placeholder="请输入歌单"></div>

    <div><span :class="[privateSong? 'iconfont icon-xuanze':'iconfont icon-xuanze1']"
               @click="changePrivateSong()"></span> 设为隐私歌单</div>

 <div>
   <el-button size="small">创建</el-button>
   <el-button size="small" @click="showPrivate = false">取消</el-button>
</div>


  </div>

  <span class="iconfont icon-plus-circle" slot="reference"></span>

</el-popover>
          <span class="iconfont icon-jiantouyou"></span>
          </span>
      </div>

    </div>

  </div>
</template>

<script>
  export default {
    name: "index",
    data() {
      return {
        showPrivate: false,
        privateSong: false,
        cuor: 0
      }
    },
    mounted() {
      /*接口。数据库获取你是否选过隐私歌单*/
    },
    methods: {
      //创建歌单
      changePrivateSong() {
        this.privateSong = !this.privateSong;
        /*请求接口 以前不是应该有个东西返给后面吗  我选中之后会有个东西的 那我应该给啥 相当于一个参数  不不 他就是穿件的单名 不是歌词*/
        let msg = this.privateSong ? "设为隐私歌单成功！" : "取消隐私歌单成功！";
        this.$message.success(msg);
        //当选择时候 不应该给我个值吗
      },

      discovery(value){
        console.log(value)
      }

    },

    watch: {
      showPrivate: {
        handler(val, tuo) {
          if (val) {
            this.privateSong = false;
          }
        },
        deep: true
      }
    }

  }
</script>

<style lang="scss" scoped>

  .thesi {
    float: left;
    width: 202px;
    height: 100%;
    min-height: 920px;
    border-right: solid 1px #0000001a;
    background: rgb(245, 245, 247);
    font-size: 14px;
    position: fixed;
    top: 46px;
    .mmend {
      text-indent: 15px;
      .tjia {
        width: 89%;
        height: 34px;
        line-height: 34px;
      }
      .tjiao {
        width: 89%;
        height: 34px;
        line-height: 34px;
        display: flex;
        justify-content: space-between;
      }
      .tjiao:hover {
        background: #d6d6d6;
      }
      ul {
        text-indent: 35px;
        li {
          width: 100%;
          height: 34px;
          line-height: 34px;
          font-size: 15px;
        }
        .active{
          background: rgb(214,214,214);
        }
        li:hover {
          background: #E6E7EA;
        }
      }
    }

  }
  a{
    text-decoration: none;
    color: #000;
  }
  a:active{
    color: #000;
    text-decoration: none;
  }
  .playlist {
    width: 92%;
    height: 180px;
    /* border: solid 1px black; */
    padding-left: 14px;
    div {
      margin-bottom: 14px;
      font-size: 15px;
      .Theinput {
        width: 86%;
        height: 26px;
      }
      .el-button--small:nth-child(1) {
        background: #96C0E1;
        color: #fff;
      }
    }
    div:nth-child(1) {
      color: black;
      font-size: 18px;
      margin-top: 11px;
      font-weight: 600;
      font-family: serif;

    }
    div:nth-child(4) {
      display: flex;
      justify-content: space-evenly;
      width: 67%;
      margin: 28px 32px;
    }
  }

</style>
