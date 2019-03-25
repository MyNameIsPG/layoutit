<template>
  <div class="dndList" style="height: 100%; padding: 30px; box-sizing: border-box;">
    <div class="dndList-list" style="height: 100%;">
      <draggable :list="list1" :options="{group:'article', disabled: disabled}" @start="start22" @end="end22" class="dragArea11" style="height: 100%;">
        <div v-for="(element, index) in list1" :key="element.id" class="list-complete-item">
          <el-input v-if="element.type==1" v-model="element.model" placeholder="请输入内容"></el-input>
        </div>
      </draggable>
    </div>
  </div>
</template>

<script>
import draggable from 'vuedraggable'
export default {
  components: {
    draggable
  },
  data () {
    return {
      disabled: false,
      list1: []
    }
  },
  computed: {
  },
  methods: {
    start22 (event) {

    },
    end22 (ev) {

    },
    handleDel (index) {
      this.list1.splice(index, 1)
    }
  }
}
</script>

<style lang="stylus">
</style>
