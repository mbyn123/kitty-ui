<template>
  <div class="navBar">
    <div class="submenu">
      <div
        :class="['menuItem',active==item.id?'activeItem':'']"
        v-for="item in menuList"
        :key="item.id"
        @click="pageturns(item)"
      >
        <i :class="item.icon"></i>
        <div>{{item.title}}</div>

      </div>
    </div>
    <div
      class="sublevelMenu"
      :style="{'width':active==1?'248px':'188px'}"
    >
      <div v-if="active==1">
        <HomeNavigation></HomeNavigation>
      </div>
      <div v-else>
        <subnavigation :subMenuList="menuList[active-1].subMenuList"></subnavigation>
      </div>
    </div>
  </div>
</template>

<script>
import { menuSetting } from '@/utils/mixin'
import HomeNavigation from '../navigations/homeNavigation'
import subnavigation from '@/components/subnavigation'
export default {
  mixins: [menuSetting],
  data() {
    return {
      menuList: [
        {
          title: '记账',
          icon: 'el-icon-notebook-2',
          path: '/tally',
          id: 1,
        },
        {
          title: '看账',
          icon: 'el-icon-notebook-1',
          id: 2,
          subMenuList: [
            {
              id: 1,
              title: '账目明细',
              menuList: [
                {
                  name: '账目明细',
                  id: 7,
                  path: '/pages/accountDetail/savingsAccounts',
                },
                {
                  name: '收支明细',
                  id: 8,
                  path: '/pages/accountDetail/payments',
                },
              ],
            },
            {
              id: 2,
              title: '往来账款',
              menuList: [
                {
                  name: '应收明细账',
                  id: 1,
                },
                {
                  name: '应付明细账',
                  id: 2,
                },
                {
                  name: '预收明细账',
                  id: 3,
                },
                {
                  name: '预付明细账',
                  id: 4,
                },
                {
                  name: '客户往来款对账',
                  id: 5,
                },
                {
                  name: '供应商往来款对账',
                  id: 6,
                },
              ],
            },
          ],
        },
        {
          title: '库存',
          icon: 'el-icon-coin',
          id: 3,
          subMenuList: [
            {
              id: 1,
              title: '销售采购',
              menuList: [
                {
                  name: '销售出货',
                  id: 9,
                  path: '/pages/repertory/repertory',
                },
                {
                  name: '销售退货',
                  id: 10,
                  //   path: '/pages/accountDetail/payments',
                },
                {
                  name: '采购进货',
                  id: 11,
                  //   path: '/pages/accountDetail/payments',
                },
                {
                  name: '采购退货',
                  id: 12,
                  //   path: '/pages/accountDetail/payments',
                },
              ],
            },
            {
              id: 2,
              title: '产品信息',
              menuList: [
                {
                  name: '产品管理',
                  id: 13,
                  //   path: '/pages/accountDetail/payments',
                },
                {
                  name: '库存余额',
                  id: 14,
                  //   path: '/pages/accountDetail/payments',
                },
                {
                  name: '库存流水',
                  id: 15,
                  //   path: '/pages/accountDetail/payments',
                },
              ],
            },
            {
              id: 3,
              title: '库存管理',
              menuList: [
                {
                  name: '产品管理',
                  id: 16,
                  //   path: '/pages/accountDetail/payments',
                },
                {
                  name: '库存余额',
                  id: 17,
                  //   path: '/pages/accountDetail/payments',
                },
                {
                  name: '库存流水',
                  id: 18,
                  //   path: '/pages/accountDetail/payments',
                },
              ],
            },
          ],
        },
        {
          title: '报表',
          icon: 'el-icon-office-building',
          id: 4,
          subMenuList: [
            {
              id: 1,
              title: '资产负债',
              menuList: [
                {
                  name: '资产负债表',
                  id: 19,
                  path: '/pages/reportForms/index',
                },
                {
                  name: '账户余额表',
                  id: 20,
                  //   path: '/pages/accountDetail/payments',
                },
                {
                  name: '应收账龄表',
                  id: 21,
                  //   path: '/pages/accountDetail/payments',
                },
                {
                  name: '应付账龄表',
                  id: 22,
                  //   path: '/pages/accountDetail/payments',
                },
              ],
            },
          ],
        },
        {
          title: '设置',
          icon: 'el-icon-setting',
          id: 5,
          subMenuList: [
            {
              id: 1,
              title: '基础资料',
              menuList: [
                {
                  name: '客户管理',
                  id: 23,
                  path: '/pages/setting/index',
                },
                {
                  name: '项目管理',
                  id: 24,
                  //   path: '/pages/accountDetail/payments',
                },
                {
                  name: '记事',
                  id: 25,
                  //   path: '/pages/accountDetail/payments',
                },
              ],
            },
          ],
        },
      ],
    }
  },
  mounted(){
    
  },
  components: {
    HomeNavigation,
    subnavigation,
  },
  methods: {
    pageturns(row) {
      if (row.id == 1) {
        this.$router.push(row.path)
        this.setActive(row.id)
        this.setMenuItemActive(row.path)
        return
      }
      let path = row.subMenuList[0].menuList[0].path
      this.$router.push(path)
      this.setActive(row.id)
      this.setMenuItemActive(path)
    },
  },
}
</script>

<style lang="scss" scoped>
.navBar {
  position: fixed;
  left: 0;
  top: 50px;
  height: 100%;
  .submenu {
    width: 60px;
    height: 100%;
    background: #3c4145;
    .menuItem {
      // border: 1px solid red;
      color: #909399;
      font-size: 13px;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 20px 0;
      cursor: pointer;
      i {
        font-size: 23px;
        margin-bottom: 5px;
      }
      &:hover {
        background: #25292c;
        color: #409eff;
      }
    }
    .activeItem {
      background: #25292c;
      color: #409eff;
    }
  }
  .sublevelMenu {
    box-sizing: border-box;
    // border: 1px solid red;
    position: fixed;
    left: 60px;
    top: 50px;
    // width: 188px;
    height: 100%;
    background: #f5f6f7;
    // background: green;
  }
}
</style>