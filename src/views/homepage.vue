<template>
  <div class="homepage" @click="eventTarget($event)">
    <el-container class="el-container">
      <el-header>Header</el-header>
      <el-container class="el-container-main">
        <aside class="el-aside">
          <asideLeft rel="asideLeft"></asideLeft>
        </aside>
        <el-main class="el-main">
          <div class="el-main-container">
            <painting rel="painting"></painting>
          </div>
        </el-main>
        <transition name="fade">
          <aside class="el-aside" v-if="sideRightStatus">
            <sideRight rel="sideRight"></sideRight>
          </aside>
        </transition>
      </el-container>
      <el-footer>Footer</el-footer>
    </el-container>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import asideLeft from 'src/components/sideleft'
import sideRight from 'src/components/sideRight'
import painting from 'src/components/painting'
export default {
  data () {
    return {
      show: false
    }
  },
  components: {
    asideLeft,
    sideRight,
    painting
  },
  computed: {
    ...mapState(['sideRightStatus'])
  },
  methods: {
    eventTarget (event) {

    }
  }
}
</script>

<style lang="stylus">
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
  .homepage, .el-container {
    width: 100%;
    height: 100%;
  }
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  .el-container-main {
    background-color: #fff;
    height: calc(100% - 120px);
    padding: 5px;
    box-sizing: border-box;
    display: flex;
  }
  .el-aside {
    border: 1px solid #95B8E7;
    position: relative;
    &:first-child {
      width 120px;
    }
    &:last-child {
      width: 400px;
    }
  }
  .el-main {
    padding: 0px;
    flex: 1;
    background: #fff;
    box-sizing: border-box;
    border-left: 5px solid #E6EEF8;
    border-right: 5px solid #E6EEF8;
  }
  .el-main-container {
    width: 100%;
    height: 100%;
    border: 1px solid #95B8E7;
    box-sizing: border-box;
  }
</style>
