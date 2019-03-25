<template>
  <div>
    <el-input v-model="value[index].inputModel" placeholder="请输入内容"></el-input>
  </div>
</template>

<script>
export default {
  name: 'input',
  props: ['value', 'index']
}
</script>

<style scoped>

</style>
