import { EData } from "../api.axios";
//个性推荐
export const personality = {
  //个性推荐轮播图
  banners: EData("/banner"),
  //个性推荐电台主播
  djprogram: EData("/personalized/djprogram"),
  //个性推荐独家放送
  privatecontent: EData("/personalized/privatecontent"),
  //推荐mv
  mv: EData("/personalized/mv"),
  //推荐歌单
  personalized: EData("/personalized?limit=9"),
  //推荐最新音乐
  newsong: EData("/personalized/newsong"),
  //登录
  logIn: EData("/login/cellphone"),
  //登录状态
  status: EData("/login/status"),
  //每日歌曲推荐
  songs: EData("/recommend/songs")
};
