<template>
  <div class="dndList" style="height: 100%; padding: 30px; box-sizing: border-box;">
    <div class="dndList-list" style="height: 100%;">
      <el-form ref="form" label-width="80px">
        <draggable v-model="list1" :group="{ name: 'people' }" @start="start22" @end="end22" class="dragArea11" style="height: 100%;">
          <div v-for="(element,index) in list1" :key="index" @click="draggableClick(element,index)" :class="{'active':element.show==true}" class="list-complete-item-clone">
            <el-form-item :label="element.name" v-if="element.type==1">
              <el-input v-model="element.inputModel" :placeholder="element.placeholder" :disabled="true" :clearable="true"></el-input>
            </el-form-item>
            <el-form-item :label="element.name" v-if="element.type==2">
              <el-input type="textarea" v-model="element.inputModel" :placeholder="element.placeholder" :disabled="true" style="min-height: 80px;"></el-input>
            </el-form-item>
          </div>
        </draggable>
      </el-form>
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
      list1: [{'id': 1553580799959, 'type': 1, 'name': '1111', 'show': true, 'placeholder': '', 'inputModel': '111'}, {'id': 1553580806441, 'type': 1, 'name': '2222', 'show': false, 'placeholder': '', 'inputModel': '222'}, {'id': 1553580748835, 'type': 1, 'name': '3333', 'show': false, 'placeholder': '', 'inputModel': '333'}, {'id': 1553580756626, 'type': 2, 'name': '4444', 'show': false, 'placeholder': '', 'inputModel': '444'}],
      clickActive: null
    }
  },
  computed: {
    ...mapState(['editFormList'])
  },
  methods: {
    draggableClick (element, index) {
      for (let i = 0; i < this.list1.length; i++) {
        this.list1[i].show = false
      }
      this.clickActive = index
      this.list1[index].show = !element.show
      this.$store.state.editFormList.value = element.inputModel
      this.$store.state.editFormList.name = element.name
      this.$store.state.editFormList.placeholder = element.placeholder
    },
    start22 (event) {
    },
    end22 (ev) {
    }
  },
  watch: {
    editFormList: {
      handler (item) {
        this.list1[this.clickActive].inputModel = item.value
        this.list1[this.clickActive].name = item.name
        this.list1[this.clickActive].placeholder = item.placeholder
      },
      deep: true
    }
  }
}
</script>

<style lang="stylus">
  textarea {
    min-height 90px !important
  }
  .el-form-item {
    margin-bottom 0px;
  }
  .list-complete-item-clone {
    padding: 10px;
    border: 1px solid #eee;
    margin-bottom: 10px;
    &:last-child {
      margin-bottom 0px;
    }
  }
  .list-complete-item-clone.sortable-chosen {
    border: 1px dashed red
  }
  .list-complete-item-clone.active {
    border: 1px dashed red
  }
  .list-complete-item-clone.sortable-ghost {
    border: 1px dashed red
  }
  .undraggable {
    background-color: red;
  }

  .list-complete-enter,
  .list-complete-leave-active {
    opacity: 0;
  }
</style>
