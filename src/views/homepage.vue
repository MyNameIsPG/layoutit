<template>
  <div class="homepage">
    <el-container class="el-container">
      <el-header>Header</el-header>
      <el-container class="el-container-main">
        <aside class="el-aside">
          <asideForm></asideForm>
        </aside>
        <el-main class="el-main">
          <div class="el-main-container">
            <router-view></router-view>
          </div>
        </el-main>
      </el-container>
      <el-footer>Footer</el-footer>
    </el-container>
  </div>
</template>

<script>
import asideForm from 'src/components/form'
export default {
  components: {
    asideForm
  },
  methods: {

  }
}
</script>

<style lang="stylus">
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
    width: 600px;
    border: 1px solid #95B8E7;
    position: relative;
  }
  .el-main {
    padding: 0px;
    flex: 1;
    background: #fff;
    box-sizing: border-box;
    border-left: 5px solid #E6EEF8;
  }
  .el-main-container {
    width: 100%;
    height: 100%;
    border: 1px solid #95B8E7;
    box-sizing: border-box;
  }
</style>
