<template>
  <div class="recom">
    <!--表头-->
    <div class="recoend">
      <div class="IMG">
        <span class="weEk">星期{{trmm}}</span>
        <!-- <br /> -->
        <span class="Theda">{{ITem}}</span>
      </div>
      <div class="ecomend">
        <span>
          <b>每日歌曲推荐</b>
        </span>
        <br />
        <span>根据你的音乐口味生成，每天6:00更新</span>
      </div>
    </div>
    <div class="complete">
      <ul>
        <li>
          <div class="entire">
            <span>
              <i class="el-icon-video-play"></i> 播放全部
            </span>
            <span>
              <i class="el-icon-plus"></i>
            </span>
          </div>
          <div>
            <i class="el-icon-folder-add"></i>
            收藏全部
          </div>
        </li>
        <li>
          <div></div>
          <div>操作</div>
          <div>音乐标题</div>
          <div>歌手</div>
          <div>专辑</div>
          <div>时长</div>
        </li>
        <li v-for="(item,index) in datalist" :key="index">
          <div>{{index+1}}</div>
          <div>
            <span
              :class="[privateSong? 'iconfont icon-xihuan-wangyiicon':'iconfont icon-xihuan-kongpt']"
              @click="changeSong()"></span>
            <span class="iconfont icon-xiazai"></span>
          </div>
          <div>{{item.name}}</div>

          <div>

            <template v-if="item.artists.length">
              <span class="author" v-for="(item2,index2) in item.artists" :key="index2">
                {{item2.name}}
              </span>

            </template>
            <!--{{item.artists[0].name}}-->

          </div>

          <div>{{item.album.name}}

            <!--({{item.album.alias[0]}})-->

            <template v-if="item.album.alias.length">
              <span> ({{...item.album.alias}})</span>
            </template>

          </div>


          <div>{{getSongTime(item.duration)}}</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { personality } from "../../api/interface/personality";
import sayMsg from "../../page/time";
export default {
  name: "recommend",
  data() {
    return {
      ITem: "",
      trmm: 0,
      privateSong: false,
      datalist: []
    };
  },
  methods: {
    async songS() {
      try {
        let res = await personality.songs({});
        if (res.code == 200) {
          this.datalist = res.data.dailySongs;
        }
      } catch (e) {
        this.$message.error("服务器异常");
      }
    },

    //是否选择对匡内对勾
    changeSong() {
      this.privateSong = !this.privateSong;
      this.msg = this.privateSong ? "0" : "1";
    },
    getSongTime(duration) {
      return sayMsg.myDatE(duration)
    },
    //从里面取出来 放到另一个里面 这里面的东西不动一会就自动销毁了 他登录时候 自己就存了

  },
  mounted() {
    this.ITem = sayMsg.myDate();
    this.trmm = sayMsg.tamun();
    this.songS();
  }
};
</script>

<style lang='scss' scoped>
.recom {
  margin: -10px 0px;
  background: #f9f8fa;
  border: solid 1px #0000001f;
  .recoend {
    display: flex;
    margin: 33px 0px 0px 37px;
    .IMG {
      width: 115px;
      height: 113px;
      position: relative;
      background-color: #fff;
      .weEk {
        font-size: 21px;
        position: absolute;
        top: 5%;
        left: 22%;
      }
      .Theda {
        font-size: 66px;
        color: #44aaf8;
        position: absolute;
        top: 22%;
        left: 14%;
      }
    }
    .ecomend {
      width: 349px;
      height: 68px;
      line-height: 35px;
      margin: 15px 0px 0px 17px;
      font-size: 13px;
      span:nth-child(1) {
        font-size: 23px;
      }
    }
  }
  .complete {
    height: 1007px;
    border: solid 1px #00000017;
    margin-top: 30px;
    width: 97%;
    margin: 23px 0px 88px 34px;
    ul {
      width: 100%;
      height: 100%;
      li:nth-child(1) {
        width: 100%;
        height: 44px;
        display: flex;
        justify-content: space-between;
        .entire {
          width: 123px;
          height: 26px;
          margin: 8px 0px 4px 8px;
          span {
            background: #44aaf8;
            color: #fff;
            margin-left: 0.6px;
            padding: 4px;
            border-radius: 3px;
          }
        }
        div:nth-child(2) {
          background: #fff;
          border-radius: 4px;
          width: 106px;
          height: 24px;
          margin: 5px 8px 0px 0px;
          line-height: 24px;
          i.el-icon-folder-add {
            margin: 3px -15px 0px 0px;
            font-size: 17px;
          }
        }
      }
      li:nth-child(2) {
        display: flex;
        justify-content: space-between;
        border: solid 1px #0000002e;
        div:nth-child(1) {
          width: 4%;
        }
        div:nth-child(2) {
          width: 5%;
          text-indent: 12px;
          border-left: solid 1px #0000002e;
          line-height: 30px;
        }
        div:nth-child(3) {
          width: 28%;
          text-indent: 12px;
          border-left: solid 1px #0000002e;
        }
        div:nth-child(4) {
          width: 25%;
          text-indent: 12px;
          border-left: solid 1px #0000002e;
        }
        div:nth-child(5) {
          width: 20%;
          text-indent: 12px;
          border-left: solid 1px #0000002e;
        }
        div:nth-child(6) {
          width: 15%;
          text-indent: 12px;
          border-left: solid 1px #0000002e;
        }
      }
    li{
      display: flex;
      justify-content: space-between;
      height: 31px;
      line-height: 31px;
      div:nth-child(1) {
        width: 2%;
        text-align: center;
      }
      div:nth-child(2) {
        width: 4%;
        text-align: center;
        display: flex;
        justify-content: space-around;
        line-height: 19px;
        .icon-xihuan-wangyiicon {
          color: red;
        }
      }
      div:nth-child(3) {
        width: 26%;
      }
      div:nth-child(4) {
        width: 22%;
        .author:not(:last-child):after {
          color: #999999;
          content: "/";
        }
      }
      div:nth-child(5) {
        width: 20%;
      }
      div:nth-child(6) {
        width: 15%;
      }
    }
      li:nth-of-type(odd){
        background: #0000000f;
      }
      /*li:nth-of-type(even){*/
        /*background: #a6a6a6;*/
      /*}*/
    }
  }
}
</style>
