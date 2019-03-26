<template>
  <div class="dndList" style="height: 100%; padding: 30px; box-sizing: border-box;">
    <div class="dndList-list" style="height: 100%;">
      <el-form ref="form" label-width="80px">
        <draggable v-model="list1" :group="{ name: 'people' }" @start="start22" @end="end22" class="dragArea11" style="height: 100%;">
          <div v-for="(element,index) in list1" :id="element.id" :key="index" @click="draggableClick(element,index,$event)" :class="{'active':element.show==true}" class="list-complete-item-clone">
            <el-form-item :label="element.name" v-if="element.type==1">
              <el-input v-model="element.inputModel" :placeholder="element.placeholder" :disabled="true" :clearable="true"></el-input>
            </el-form-item>
            <el-form-item :label="element.name" v-if="element.type==2">
              <el-input type="textarea" v-model="element.inputModel" :placeholder="element.placeholder" :disabled="true" style="min-height: 80px;"></el-input>
            </el-form-item>
            <el-form-item :label="element.name" v-if="element.type==3">
              <el-select v-model="element.inputModel" :placeholder="element.placeholder" :disabled="true">
                <el-option
                  v-for="item in element.options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
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
      list1: [{'id': 1553580799959, 'type': 1, 'name': '1111', 'show': false, 'placeholder': '', 'inputModel': '111'}, {'id': 1553580806441, 'type': 1, 'name': '2222', 'show': false, 'placeholder': '', 'inputModel': '222'}, {'id': 1553580748835, 'type': 1, 'name': '3333', 'show': false, 'placeholder': '', 'inputModel': '333'}, {'id': 1553580756626, 'type': 2, 'name': '4444', 'show': false, 'placeholder': '', 'inputModel': '444'}, {'id': 1553589884662, 'type': 3, 'name': '下拉框', 'show': true, 'placeholder': '请输入内容qqq', 'inputModel': '选项2', 'options': [{'value': '选项1', 'label': '黄金糕'}, {'value': '选项2', 'label': '双皮奶'}, {'value': '选项3', 'label': '蚵仔煎'}, {'value': '选项4', 'label': '龙须面'}, {'value': '选项5', 'label': '北京烤鸭'}]}, {'id': 1553589951678, 'type': 3, 'name': '下拉框', 'show': false, 'placeholder': '请输入内容', 'inputModel': '1', 'options': [{'value': '选项1', 'label': '黄金糕'}, {'value': '选项2', 'label': '双皮奶'}, {'value': '选项3', 'label': '蚵仔煎'}, {'value': '选项4', 'label': '龙须面'}, {'value': '选项5', 'label': '北京烤鸭'}]}],
      clickActive: null
    }
  },
  computed: {
    ...mapState(['editFormList', 'sideRightStatus'])
  },
  methods: {
    draggableClick (element, index, event) {
      for (let i = 0; i < this.list1.length; i++) {
        this.list1[i].show = false
      }
      this.clickActive = index
      this.list1[index].show = !element.show
      this.$store.state.editFormList.value = element.inputModel
      this.$store.state.editFormList.name = element.name
      this.$store.state.editFormList.placeholder = element.placeholder
      if (element.type == 3) {
        this.$store.state.editFormList.options = JSON.stringify(element.options)
      }
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
