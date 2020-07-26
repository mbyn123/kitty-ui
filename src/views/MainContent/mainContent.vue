<template>
  <div class="main" :style="{'left':active==1?'308px':'248px'}">
    <keep-alive>
        <!-- <transition name="el-fade-in-linear" mode="out-in"> -->
            <router-view></router-view>
        <!-- </transition> -->
      </keep-alive>
  </div>
</template>

<script>
import { menuSetting } from '@/utils/mixin'
export default {
   mixins: [menuSetting],
  name: 'Login',
}
</script>

<style lang="scss" scoped>
.main {
    position: fixed;
    top: 50px;
    // left: 248px;
    // left: 180px;
    // border:1px solid red;
    width: 100%;
    height: 100%;
    background: #f0f1f2;
    box-sizing: border-box;
}
</style>