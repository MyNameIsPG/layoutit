<template>
  <div class="" style="padding: 10px;">
    <div class="el-item-content">
      <p>value：</p>
      <el-input v-model="editFormList.value" placeholder="请输入value"></el-input>
    </div>
    <div class="el-item-content">
      <p>name：</p>
      <el-input v-model="editFormList.name" placeholder="请输入name"></el-input>
    </div>
    <div class="el-item-content">
      <p>placeholder：</p>
      <el-input v-model="editFormList.placeholder" placeholder="请输入placeholder"></el-input>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  data () {
    return {

    }
  },
  computed: {
    ...mapState(['editFormList'])
  },
  methods: {

  },
  watch: {
    editFormList: {
      handler (ee) {

      },
      deep: true
    }
  }
}
</script>
<style lang="stylus">
.el-item-content {
  margin-bottom 10px;
  p {
    font-size: 14px;
    color: #606266;
    margin-bottom: 5px;
  }
}
</style>
