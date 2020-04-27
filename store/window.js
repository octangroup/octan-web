export const state = () => ({
  width: null,
  isMobile: false
})

export const mutations = {
  _setWidth(state, value) {
    state.width = value
  },
  _setIsMobile(state, value) {
    state.isMobile = value
  }
}

export const actions = {
  updateWidth({ commit }, value) {
    commit('_setWidth', value)
    if (value < 992) {
      return commit('_setIsMobile', true)
    }
    return commit('_setIsMobile', false)
  }
}
