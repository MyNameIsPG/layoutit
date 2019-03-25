<template>
  <div class="dndList" style="height: 100%; padding: 30px; box-sizing: border-box;">
    <div class="dndList-list" style="height: 100%;">
      <draggable v-model="list1" :group="{ name: 'people' }" @start="start22" @end="end22" class="dragArea11" style="height: 100%;">
        <div v-for="(element,index) in list1" :key="element.id" @click="draggableClick(index)" :class="{'active':formListModel[index].show==true}" class="list-complete-item-clone">
          <div class="input-box" v-if="element.type==1">
            <span>{{formListModel[index].name}}</span>
            <el-input v-model="formListModel[index].inputModel" :placeholder="formListModel[index].placeholder" :disabled="true"></el-input>
          </div>
          <div class="input-box" v-if="element.type==2">
            <span>{{formListModel[index].name}}</span>
            <el-input type="textarea" v-model="formListModel[index].inputModel" :placeholder="formListModel[index].placeholder" :disabled="true" style="min-height: 80px;"></el-input>
          </div>
        </div>
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
      list1: [],
      formListModel: [],
      clickActive: null
    }
  },
  computed: {
    ...mapState(['editFormList'])
  },
  methods: {
    draggableClick (index) {
      for (let i = 0; i < this.formListModel.length; i++) {
        this.formListModel[i].show = false
      }
      this.clickActive = index
      this.formListModel[index].show = !this.formListModel[index].show
      this.$store.state.editFormList.value = this.formListModel[index].inputModel
      this.$store.state.editFormList.name = this.formListModel[index].name
      this.$store.state.editFormList.placeholder = this.formListModel[index].placeholder
    },
    start22 (event) {
    },
    end22 (ev) {
    }
  },
  watch: {
    list1 (item) {
      let index = item.length - 1
      this.formListModel.push({ inputModel: '', name: item[index].name, placeholder: '请输入内容', show: false })
    },
    editFormList: {
      handler (item) {
        this.formListModel[this.clickActive].inputModel = item.value
        this.formListModel[this.clickActive].name = item.name
        this.formListModel[this.clickActive].placeholder = item.placeholder
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
  .input-box {
    display flex;
    span {
      width 120px;
      font-size: 14px;
      color: #8492a6;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    input {
      flex: 1;
    }
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
