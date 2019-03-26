<template>
  <div class="dndList">
    <div class="dndList-list">
      <draggable v-model="list2" :group="{ name: 'people', pull: 'clone' }" :clone="cloneLib" class="dragArea">
        <ul v-for="item in list2" :key="item.id" class="list-complete-item">
          <li>{{item.name}}</li>
        </ul>
      </draggable>
    </div>
  </div>
</template>
<script>
import draggable from 'vuedraggable'
import { mapState } from 'vuex'
export default {
  components: {
    draggable
  },
  data () {
    return {
      list2: [
        {id: 1, name: '输入框', type: 1},
        {id: 2, name: '文本域', type: 2}
      ]
    }
  },
  computed: {
    ...mapState(['editFormList'])
  },
  methods: {
    cloneLib (ev) {
      const id = +new Date()
      return {
        id: id,
        type: ev.type,
        name: ev.name,
        show: false,
        placeholder: '请输入内容',
        inputModel: ''
      }
    }
  }
}
</script>
<style lang="stylus">
.list-complete-item {
  cursor: pointer;
  position: relative;
  padding: 0px 4px;
  transition: all 1s;
  li {
    padding: 6px 10px;
    border: 1px solid #dcdfe6;
    color: #606266;
    font-size: 14px;
    border-radius: 4px;
    margin-top: 5px;
  }
  li:hover {
    border: 1px dashed #f00;
  }
}
</style>
