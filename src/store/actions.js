const actions = {
    setActive: ({ commit }, active) => {
      return commit('SET_ACTIVE', active)
    },
    setMenuItemActive: ({ commit }, active) => {
      return commit('SET_MENUITEMACTIVE', active)
    },
   }
   export default actions
   