import Vue from 'vue'
import Router from 'vue-router'
import axios from 'axios'
import Home from '@/views/Home'
import Login from '@/views/Login'
import NotFound from '@/views/404'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      redirect: '/tally',
      children: [
        { path: '/tally', component: () => import('@/views/pages/tally/tally'), name: '记账', meta: { index: 1 } },
        // { path: 'pages/accountDetail/savingsAccounts', component: () => import('@/views/pages/accountDetail/savingsAccounts'), name: '账目明细', meta: { index: 7 } },
        // { path: 'pages/accountDetail/payments', component: () => import('@/views/pages/accountDetail/payments'), name: '收支明细', meta: { index: 8 } },
        // { path: 'pages/repertory/repertory', component: () => import('@/views/pages/repertory/repertory'), name: '销售出货', meta: { index: 8 } },
        // { path: 'pages/reportForms/index', component: () => import('@/views/pages/reportForms/index'), name: '资产负债表', meta: { index: 8 } },
        // { path: 'pages/setting/index', component: () => import('@/views/pages/setting/index'), name: '客户管理', meta: { index: 8 } },
      ]
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      path: '/NotFound',
      name: 'NotFound',
      component: NotFound
    }
  ]
})

const originalPush = Router.prototype.push
Router.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}

// 动态加载的路由
export const asyncRouters = [
  { path: 'pages/accountDetail/savingsAccounts', component: () => import('@/views/pages/accountDetail/savingsAccounts'), name: '账目明细', meta: { index: 7 } },
  { path: 'pages/accountDetail/payments', component: () => import('@/views/pages/accountDetail/payments'), name: '收支明细', meta: { index: 8 } },
  { path: 'pages/repertory/repertory', component: () => import('@/views/pages/repertory/repertory'), name: '销售出货', meta: { index: 8 } },
  { path: 'pages/reportForms/index', component: () => import('@/views/pages/reportForms/index'), name: '资产负债表', meta: { index: 8 } },
  { path: 'pages/setting/index', component: () => import('@/views/pages/setting/index'), name: '客户管理', meta: { index: 8 } },
]

let data = [
  { id: 2, type: 1, url: 'intro/intro',name: '数据总览', icon: 'el-icon-s-marketing', order_num:  11, children:[] },
  {
    id: 1, type: 0, url: '', name: '数据统计', icon: 'el-icon-s-data', order_num: 10, children: [
      { id: 3, type: 1, url: 'pages/order', name: '订单统计', icon: 'el-icon-s-order', order_num: 12, children: [] },
      { id: 4, type: 1, url: 'pages/product', name: '产品排行', icon: 'el-icon-menu', order_num: 13, children: [] },
      { id: 6, type: 1, url: 'pages/account', name: '推广位排行', icon: 'el-icon-user-solid', order_num: 14, children: [] },
    ]
  },
  {
    id: 20, type: 0, url: '', name: '视频监控', icon: 'el-icon-video-camera-solid', order_num: 20, children: [
      // { id: 23, type: 1, url: 'pages/videos', name: '视频列表', icon: 'el-icon-video-camera', order_num: 23, children: [] },
      { id: 21, type: 1, url: 'pages/video', name: '视频列表', icon: 'el-icon-video-camera', order_num: 21, children: [] },
      { id: 22, type: 1, url: 'pages/comment', name: '评论管理', icon: 'el-icon-s-comment', order_num: 22, children: [] },
    ]
  },
  {
    id: 30, type: 0, url: '', name: '账号管理', icon: 'el-icon-user', order_num: 30, children: [
      { id: 31, type: 1, url: 'pages/alliance', name: '联盟账号管理', icon: 'el-icon-s-unfold', order_num: 31, children: [] },
      { id: 32, type: 1, url: 'pages/thrill', name: '抖音账号管理', icon: 'el-icon-c-scale-to-original', order_num: 32, children: [] },
    ]
  },
  // { id: 13, url: 'pages/user',name: '团队员工管理', icon: 'el-icon-user', order_num:  13, del_flag: 0 },
  {
    id: 40, type: 0, url: '', name: '预警通知总览', icon: 'el-icon-message-solid', order_num: 40, children: [
      { id: 41, type: 1, url: 'pages/warning', name: '预警通知设置', icon: 'el-icon-s-tools', order_num: 41, children: [] },
      { id: 42, type: 1, url: 'pages/wrecord', name: '预警通知记录', icon: 'el-icon-tickets', order_num: 42, children: [] },
    ]
  },
  { id: 50, type: 1, url: 'pages/payment', name: '会员升级续费', icon: 'el-icon-news', order_num: 50, children: [] },
]
// let path = to.path.substr(1);
data.some(item => {
  if (item.type === 0) {
    item.children.some(ele => {
      if (ele.url == path) {
        store.commit('onCollapse', ele.id + '');
        return true;
      }
    })
  } else {
    if (item.url == path) {
      if (item.type == 1) { }
      store.commit('onCollapse', item.id + '');
      return true;
    }
  }
})
console.log(data)