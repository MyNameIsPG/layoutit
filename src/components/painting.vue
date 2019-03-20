<template>
  <div id="right" class="painting" name="drog">
    <div v-for="(item, index) in formData" :key="index" class="demo-input-suffix">
      {{item.name}}：
      <el-input v-model="formModel[index]" placeholder="请输入内容"></el-input>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      formData: [
        {type: 1, name: 'test1'},
        {type: 1, name: 'test1'}
      ],
      formModel: {
        input1: '',
        input2: ''
      }
    }
  },
  methods: {

  }
}
</script>

<style lang="stylus">
  .painting {
    padding 10px;
    box-sizing: border-box;
    height: 100%;
  }
</style>
