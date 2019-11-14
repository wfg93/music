<template>
  <div class="Header">
    <div class="lefthand">
      <div class="lefth">
        <div class="mark">
          <span class="iconfont icon-wangyiyunyinle"></span>
        </div>网易云音乐
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
          <input type="text" value="搜索音乐、视频、歌词、电台" />
          <i class="el-icon-search"></i>
        </ul>
      </div>
    </div>
    <div class="offside">
      <ul>
        <li>
          <span class="longin" @click="Thelogin()">
            <span v-if="!isLogin">
              <img :src="imgurl" />
              {{register}}
            </span>
            <span v-else>
              <img :src="changePeople.avatarUrl" />
              {{changePeople.nickname}}
            </span>
            <span></span>
            <span class="iconfont icon-xiajiantou"></span>
          </span>
          <!--<span>-->
          <!--<img :src="changePeople.avatarUrl" alt="">-->
          <!--</span>-->
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

    <el-dialog title="扫码登录更安全" :visible.sync="dialogFormVisible" :modal="modal" width="351px">
      <el-form :model="form">
        <el-input v-model="form.phone" autocomplete="off" placeholder="请输入手机号,仅限中国">
          <template slot="prepend">
            <i class="el-icon-mobile-phone"></i> +86
          </template>
        </el-input>

        <el-input
          v-model="form.password"
          autocomplete="off"
          prefix-icon="el-icon-lock"
          placeholder="请输入密码"
        >
          <template slot="append">重设密码</template>
        </el-input>
      </el-form>

      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="TheloGin()">登录</el-button>
        <span>注册</span>
      </div>
      <div slot="footer" class="dialog-footer">
        <span>
          <ul class="way">
            <li>
              <span class="iconfont icon-weixin1"></span>
            </li>
            <li>
              <span class="iconfont icon-qq"></span>
            </li>
            <li>
              <span class="iconfont icon-weibo"></span>
            </li>
            <li>
              <span class="iconfont icon-wangyi"></span>
            </li>
          </ul>
        </span>
        <div class="waY">
          <span
            :class="[privateSong? 'iconfont icon-xuanze':'iconfont icon-xuanze1']"
            @click="changeSong()"
          ></span>
          同意《服务条款》《隐私政策》《儿童隐私政策》
        </div>
      </div>
    </el-dialog>
  </div>
</template>


<script>
import { personality } from "../../api/interface/personality";
// import {mapGetters} from 'vuex'
export default {
  name: "index",
  data() {
    return {
      dialogFormVisible: false,
      form: {
        phone: "",
        password: ""
      },
      register: "未登录",
      modal: false,
      privateSong: false,
      msg: null,
      timer: null,
      imgurl: require("../../page/img/denglu.png")
    };
  },
  computed: {
    changePeople() {
      return this.$store.getters.changePeople;
    },
    isLogin() {
      return JSON.stringify(this.$store.getters.changePeople) !== "{}";
    }
    // ...mapGetters(['changePeople'])
  },
  methods: {
    Thelogin() {
      this.dialogFormVisible = true;
    },
    //15511396949
    //wfg931124
    //登录接口
    async logIN() {
      try {
        let res = await personality.logIn({
          phone: this.form.phone,
          password: this.form.password
        });
        if (res.code == 200) {
          this.$store.commit("USER_SINGIN", res.profile);
          // sessionStorage.setItem('user',JSON.stringify(res.profile))
          this.dialogFormVisible = false;
        }
      } catch (e) {
        if (e.response.data.msg && e) {
          this.$message.error(e.response.data.msg);
        } else {
          this.$message.error("用户名密码错误");
        }
      }
    },

    //是否选择对匡内对勾
    changeSong() {
      this.privateSong = !this.privateSong;
      this.msg = this.privateSong ? "0" : "1";
    },

    //登录按钮
    TheloGin() {
      this.msg = parseInt(this.msg);
      if (this.msg === 0) {
        this.logIN();
      } else {
        var mgs = document.getElementsByClassName("waY")[0];
        mgs.className = "waY animated shake redfont";
        this.timer = setTimeout(() => {
          mgs.className = "waY";
        }, 1000);

        this.$message({
          message: "请在选择条框内打对勾",
          type: "error"
        });
      }
    },

  },
  mounted() {},
  beforeDestroy() {
    clearTimeout(this.timer);
    this.timer = null;
  }
};
</script>

<style lang="scss" scoped>
@import "../../page/css/navigation.scss";
</style>
