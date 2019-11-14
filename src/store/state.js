export default {
  userInfo: JSON.parse(sessionStorage.getItem("user")) || {} // 用户登录信息
};
