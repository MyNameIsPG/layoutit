<template>
  <div class="dndList">
    <div class="dndList-list">
      <h3>常用</h3>
      <draggable :list="list1" :options="{group:'article', disabled: disabled}"
                 @start="start22"
                 @end="end22"
                 class="dragArea11"
                 style="height: 100px">
        <div v-for="(element, index) in list1" :key="element.id" class="list-complete-item">
          <div class="list-complete-item-handle">{{element.name}}</div>
          <div>
            <i class="el-icon-delete" @click="handleDel(index, element.id)"></i>
          </div>
        </div>
      </draggable>
    </div>
  </div>

</template>
<script>
import draggable from 'vuedraggable'
export default {
  name: 'DndList',
  components: { draggable },
  watch: {
  },
  data () {
    return {
      falgs: 'article',
      disabled: false,
      list1: []
    }
  },
  computed: {
  },
  methods: {
    start22 (event) {
      this.falgs = '222222'
    },
    end22 (ev) {
      this.falgs = 'article'
    },
    handleDel (index, id) {
      this.list1.splice(index, 1)
      let q = this.list2.find((value, index, arr) => {
        return value.id === id
      })
      this.$set(q, 'flag', false)
    }
  }
}
</script>

<style lang="stylus">
  .list-complete-item {
    cursor: pointer;
    position: relative;
    font-size: 14px;
    padding: 5px 12px;
    display: inline-block;
    margin-right: 20px;
    width: 50px;
    height: 50px;
    border: 1px solid #bfcbd9;
    transition: all 1s;
  }

  .list-complete-item.sortable-chosen {
    background: #4AB7BD;
  }

  .list-complete-item.sortable-ghost {
    background: #30B08F;
  }
  .undraggable {
    background-color: red;
  }

  .list-complete-enter,
  .list-complete-leave-active {
    opacity: 0;
  }
</style>
