import Vue from 'vue'
import vuex from 'vuex'
import menu from './modules/menu'
import actions from './actions'
import getters from './getters'

Vue.use(vuex);

const store = new vuex.Store({
    modules: {
        menu: menu
    },
    actions,
    getters
})

export default store