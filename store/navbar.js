export const state = () => ({
  transparent: false,
  fixed: true,
  showSidebar: false,
})

export const mutations = {
  _setBackground(state, value) {
    state.transparent = value
  },
  _setPosition(state, value) {
    state.fixed = value
  },
  _setSidebarVisibility(state, value) {
    state.showSidebar = value
  },
}

export const actions = {
  setTransparentBackground({ commit }, value) {
    commit('_setBackground', value)
  },
  setFixedPosition({ commit }, value) {
    commit('_setPosition', value)
  },
  toggleSidebar({ commit }, value) {
    commit('_setSidebarVisibility', value)
  },
}
