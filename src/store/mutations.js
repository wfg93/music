const mutations = {
  // 用户登录
  USER_SINGIN(state, user) {
    try {
      state.userInfo = user
      sessionStorage.setItem('user', JSON.stringify((user)))
    } catch (e) { }
  },
}

export default mutations
