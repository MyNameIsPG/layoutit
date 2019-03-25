<template>
  <div class="dndList">
    <div class="dndList-list">
      <draggable v-model="list2" :group="{ name: 'people', pull: 'clone' }" :clone="cloneLib" @end="end" class="dragArea">
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
      disabled: false,
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
        name: ev.name
      }
    },
    end (ev) {
      if (ev.to.className === 'dragArea11') {
        // this.$set(this.list2[ev.oldIndex], 'flag', false)
      }
    }
  }
}
</script>
<style lang="stylus">
.list-complete-item {
  cursor: pointer;
  position: relative;
  font-size: 14px;
  transition: all 1s;
  li {
    padding: 6px 10px;
    border-bottom 1px solid #ccc;
  }
  li:hover {
    background #ccc
  }
}
</style>
