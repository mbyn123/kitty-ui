import {active,menuItemActive} from '../../utils/storage'

const menu = {
    state: {
        active:active(), // 一级菜单选中
        menuItemActive:menuItemActive() // 二级菜单选中
    },
    mutations: {
        'SET_ACTIVE': (state, active) => {
            state.active = active
            sessionStorage.setItem('active',active)
        },
        'SET_MENUITEMACTIVE':(state, menuItemActive)=>{
            state.menuItemActive = menuItemActive
            sessionStorage.setItem('menuItemActive',menuItemActive)
        }
    }
}

export default menu
