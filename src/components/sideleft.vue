<template>
  <div class="dndList">
    <div class="dndList-list">
      <draggable :list="list2" :options="{ group:{ name: 'article', pull:'clone' }, filter: '.undraggable', sort: false}" @end="end" class="dragArea">
        <ul v-for="element in list2" :key="element.id"
             :class="{undraggable : element.flag}"
             class="list-complete-item">
          <li>{{element.name}}</li>
        </ul>
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
      list2: [
        {id: 1, name: '输入框', type: 1, model: 'type1'}
      ]
    }
  },
  computed: {
  },
  methods: {
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
