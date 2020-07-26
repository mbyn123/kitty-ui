<template>
  <div class="subMenuList">
    <div
      class="subMenu"
      v-for="item in subMenuList"
      :key="item.id"
    >
      <div class="title">{{item.title}}</div>
      <div
        v-for="i in item.menuList"
        :key="i.id"
      >
        <div
          :class="['menuItem',menuItemActive == i.path?'active':'']"
          @click="setMenuItem(i)"
        >{{i.name}}</div>
      </div>

    </div>
  </div>
</template>

<script>
import { menuSetting } from '@/utils/mixin'
export default {
  mixins: [menuSetting],
  props:{
    subMenuList:{
      type:Array
    }
  },
  data() {
    return {
     
    }
  },
  methods: {
    setMenuItem(row) {
      console.log(row)
      this.$router.push(row.path)
      this.setMenuItemActive(row.path)
    },
  },
}
</script>

<style lang="scss" scoped>
.subMenuList {
  .subMenu {
    padding: 10px;
    font-size: 14px;
    // border:1px solid red;
    position: relative;
    .title {
      font-weight: bolder;
      padding-left: 5px;
      padding-bottom: 5px;
    }
    .menuItem {
      // border:1px solid green;
      padding: 5px 0;
      padding-left: 5px;
      cursor: pointer;
      &:hover {
        background: #ebecf0;
        color: #0486fe;
      }

    }
    &::after {
      position: absolute;
      bottom: 0;
      left: 6%;
      display: block;
      content: '';
      width: calc(100% - 20px);
      height: 2px;
      background: #edeef0;
    }
    &:last-child::after {
      display: none;
    }
    .active{
       background: #ebecf0;
        color: #0486fe;
    }
  }
}
</style>
