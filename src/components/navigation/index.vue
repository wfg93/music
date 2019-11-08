<template>
  <div class="Header">
    <div class="lefthand">

      <div class="lefth">
        <div class="mark">
          <span class="iconfont icon-wangyiyunyinle"></span>
        </div>
        网易云音乐
      </div>

      <div class="lefthad">
        <ul>
          <li>
            <i class="el-icon-arrow-left"></i>
          </li>
          <li>
            <i class="el-icon-arrow-right"></i>
          </li>
        </ul>
        <ul>
          <input type="text" value="搜索音乐、视频、歌词、电台"/>
          <i class="el-icon-search"></i>
        </ul>

      </div>

    </div>
    <div class="offside">

      <ul>
        <li>
          <span class="longin" @click="Thelogin()">

             <span class="iconfont icon-denglu"></span>
          未登录
          <span class="iconfont icon-xiajiantou"></span>
          </span>

          <span>开通VIP</span>
          <span class="iconfont icon-huanfu"></span>
          <span class="iconfont icon-youxiang"></span>
          <i class="el-icon-setting"></i>
        </li>
        <li>
          <i class="el-icon-crop"></i>
          <i class="el-icon-minus"></i>
          <i class="el-icon-chat-square"></i>
          <i class="el-icon-close"></i>
        </li>
      </ul>
    </div>



    <el-dialog  title="扫码登录更安全" :visible.sync="dialogFormVisible" :modal="modal" width="18.5%">
      <el-form :model="form">
          <el-input v-model="form.name" autocomplete="off"  placeholder="请输入手机号,仅限中国">
            <template slot="prepend"><i class="el-icon-mobile-phone"></i> +86</template>
          </el-input>

          <el-input v-model="form.name" autocomplete="off" prefix-icon="el-icon-lock"  placeholder="请输入密码">
            <template slot="append">重设密码</template>
          </el-input>
      </el-form>


      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogFormVisible = false">登录</el-button>
       <span>注册</span>
      </div>
      <div slot="footer" class="dialog-footer">
        <span>
          <ul class="way">
              <li><span class="iconfont icon-weixin1"></span></li>
              <li><span class="iconfont icon-qq"></span></li>
              <li><span class="iconfont icon-weibo"></span></li>
              <li><span class="iconfont icon-wangyi"></span></li>
          </ul>
        </span>
        <div class="waY"><span :class="[privateSong? 'iconfont icon-xuanze':'iconfont icon-xuanze1']"
                                @click="changeSong()"></span>
          同意《服务条款》《隐私政策》《儿童隐私政策》</div>
      </div>
    </el-dialog>


  </div>
</template>


<script>
  export default {
    name: "index",
    data() {
      return {
        dialogFormVisible: true,
        form: {
          name: '',
        },
        modal:false,
        privateSong: false,
      }
    },
    methods:{
      Thelogin(){
        this.dialogFormVisible = true
      },

      changeSong() {
        this.privateSong = !this.privateSong;
        let msg = this.privateSong ? "设为隐私歌单成功！" : "取消隐私歌单成功！";
        this.$message.success(msg);

      },

    },



  }
</script>

<style lang="scss" scoped>
  .Header {
    width: 100%;
    min-width: 1020px;
    height: 48px;
    background-color: rgb(95, 184, 251);
    display: flex;
    justify-content: space-between;
    position: fixed;
    z-index: 1000;
    top: 0;

    .lefthand {
      width: 476px;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .lefth {
        width: 121px;
        display: flex;
        font-size: 17px;
        color: #fff;
        margin-left: 18px;
        justify-content: space-between;
        .mark {
          width: 22px;
          height: 22px;
          border-radius: 9px;
          background: #fff;
          text-align: center;
          line-height: 19px;
          .icon-wangyiyunyinle {
            font-size: 16px;
            background: #fff;
            color: rgb(95, 184, 251);

          }
        }

      }
    }
    .lefthad {
      width: 278px;
      display: flex;
      justify-content: space-between;
      ul {
        display: flex;
        height: 100%;
        align-items: center;
        position: relative;
        li {
          width: 20px;
          height: 20px;
          border: solid 1px #0000004d;
          i {
            color: #fff;
          }
        }
        input {
          width: 210px;
          height: 21px;
          border: solid 1px #00000033;
          border-radius: 10px;
          color: #b7b7b7;
          background: #3480d2;
          padding-left: 6px;
        }
        i.el-icon-search {
          position: absolute;
          right: 5px;
          color: #ffffffad;
        }
      }
    }
    .offside {
      width: 400px;
      height: 100%;
      ul {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        .iconfont {
          font-size: 20px;
          color: #ffffffc7;
        }
        i {
          font-size: 18px;
          color: #ffffffc7;
        }
        li {
          width: 274px;
          height: 55%;
          border-right: solid 0.5px #00000063;
          font-size: 12px;
          display: flex;
          justify-content: space-around;
          align-items: center;
          color: #fff;
        .longin{
          padding: 5px;
          text-align: center;
          line-height: 10px;
          width: 106px;
          /* border: solid; */
          display: flex;
          justify-content: space-between;
        }

        }
        li:nth-child(2) {
          width: 116px;
          border-right: none;
        }
      }
    }

  }


  .el-dialog{
    height: 54%;
    .dialog-footer{
      display: flex;
      flex-direction: column;
      .el-button{
        width: 100%;
        background: #e64545;
        margin: 0 auto;
      }
      span{
        margin: 19px auto 9px;
      }
    }
    .way{
      height: 44px;
      display: flex;
      width: 309px;
      justify-content: space-between;
      li{
        width: 40px;
        height: 40px;
        border: solid 1px #9e9e9eb3;
        border-radius: 50%;
        text-align: center;
        line-height: 38px;
        span{
          border-bottom: none;
          font-size: 22px;
        }

      }
      li:nth-child(1){
        .icon-weixin1 {
          color: #67B633;
        }

        &:hover {
          background:#67B633;
          .icon-weixin1 {
            color: #fff;
          }
        }
      }
      li:nth-child(2){
        .icon-qq {
          color: #34A0DF;
        }

        &:hover {
          background:#34A0DF;
          .icon-qq {
            color: #fff;
          }
        }
      }
      li:nth-child(3){
        .icon-weibo {
          color:#EA4848;
        }

        &:hover {
          background:#EA4848;
          .icon-weibo {
            color: #fff;
          }
        }
      }
      li:nth-child(4){
        .icon-wangyi {
          color:#D33A31;
        }

        &:hover {
          background:#D33A31;
          .icon-wangyi {
            color: #fff;
          }
        }
      }

    }
    .waY{
      font-size: 13px;
      display: flex;
      justify-content: space-between;
      span{
        margin: 0px;
      }
    }
  }


</style>
