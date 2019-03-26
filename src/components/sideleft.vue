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
        {id: 2, name: '文本域', type: 2},
        {id: 3, name: '下拉框', type: 3}
      ]
    }
  },
  computed: {
    ...mapState(['editFormList'])
  },
  methods: {
    cloneLib (ev) {
      const id = +new Date()
      if (ev == 1 || ev == 2) {
        return {
          id: id,
          type: ev.type,
          name: ev.name,
          show: false,
          placeholder: '请输入内容',
          inputModel: ''
        }
      } else {
        return {
          id: id,
          type: ev.type,
          name: ev.name,
          show: false,
          placeholder: '请输入内容',
          inputModel: '',
          options: [{
            value: '选项1',
            label: '黄金糕'
          }, {
            value: '选项2',
            label: '双皮奶'
          }, {
            value: '选项3',
            label: '蚵仔煎'
          }, {
            value: '选项4',
            label: '龙须面'
          }, {
            value: '选项5',
            label: '北京烤鸭'
          }]
        }
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
