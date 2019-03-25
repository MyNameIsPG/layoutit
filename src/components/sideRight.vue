<template>
  <div class="" style="padding: 10px;">
    <div class="el-item-content">
      <p>标题：</p>
      <el-input v-model="attribute.title" placeholder="请输入标题"></el-input>
    </div>
    <div class="el-item-content">
      <p>标题：</p>
      <el-input v-model="attribute.title" placeholder="请输入标题"></el-input>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      attribute: {
        title: ''
      }
    }
  },
  computed: {
  },
  methods: {

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
