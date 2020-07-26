<template>
  <div class="headBar">
    <div class="logo">财务管理系统</div>
    <div class="user">
      <div class="headPortrait"></div>
      <div class="userName">demo</div>
      <i class="el-icon-arrow-down"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
}
</script>

<style lang="scss" scoped>
.headBar {
  background: #fff;
  height: 48px;
  // border:1px solid red;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding:0 20px;
  -webkit-box-shadow: -1px 8px 4px -7px rgba(184, 173, 184, 0.71);
  -moz-box-shadow: -1px 8px 4px -7px rgba(184, 173, 184, 0.71);
  box-shadow: -1px 8px 4px -7px rgba(184, 173, 184, 0.71);
  .logo{
      font-size: 20px;
      font-weight: bolder;
  }
  .user {
    display: flex;
    align-items: center;
    // border:1px solid red;
    cursor: pointer;
    &:hover {
      i {
        color: #409eff;
      }
    }
    .headPortrait {
      width: 35px;
      height: 35px;
      border-radius: 50%;
      background: #eeee;
    }
    .userName {
      margin: 0 10px;
    }
    i {
      font-size: 20px;
    }
  }
}
</style>