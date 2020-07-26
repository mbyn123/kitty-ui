<template>
  <div class="Home">
    <HeadBar></HeadBar>
    <NavBar></NavBar>
    <Main></Main>
  </div>
</template>

<script>
import NavBar from './NavBar/navBar'
import HeadBar from './HeadBar/header'
import Main from './MainContent/mainContent'
export default {
  name: 'Login',
  components: {
    NavBar,
    HeadBar,
    Main
  },
}
</script>

<style lang="scss">
.Home {
//   border: 1px solid red;
//   height: 100%;
}
</style>