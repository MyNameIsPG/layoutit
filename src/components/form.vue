<template>
  <div class="drag-container" v-drag-and-drop:options="options">
    <ul class="drag-list">
      <li class="drag-column" v-for="group in groups" :key="group.id">
        <span class="drag-column-header">
          <h2>{{ group.name }}</h2>
          <feather-icon type="more-vertical"></feather-icon>
        </span>

        <ul class="drag-inner-list" :data-id="group.id">
          <li
            class="drag-item"
            v-for="item in filteredItems(group.id)"
            :key="item.id"
            :data-id="item.id"
          >
            <div class="drag-item-text">{{ item.name }}</div>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    const updateItemsWithNewGroupId = this.updateItemsWithNewGroupId
    return {
      groups: [
        { id: 1, name: 'To Do' },
        { id: 2, name: 'In Progress' },
        { id: 3, name: 'Done' }
      ],
      items: [
        { id: 1, name: 'Item 1', groupId: 1 },
        { id: 2, name: 'Item 2', groupId: 1 },
        { id: 3, name: 'Item 3', groupId: 1 },
        { id: 4, name: 'Item 4', groupId: 2 },
        { id: 5, name: 'Item 5', groupId: 2 },
        { id: 6, name: 'Item 6', groupId: 2 },
        { id: 7, name: 'Item 7', groupId: 3 },
        { id: 8, name: 'Item 8', groupId: 3 },
        { id: 9, name: 'Item 9', groupId: 3 },
        { id: 10, name: 'Item 10', groupId: 3 }
      ],
      options: {
        dropzoneSelector: '.drag-inner-list',
        draggableSelector: '.drag-item',
        onDrop (e) {
          const targetGroupId = parseInt(e.droptarget.dataset.id)
          const itemIds = e.items.map(item => parseInt(item.dataset.id))
          updateItemsWithNewGroupId(itemIds, targetGroupId)
        }
      }
    }
  },
  computed: {
    filteredItems () {
      return groupId => this.items.filter(item => item.groupId === groupId)
    }
  },
  methods: {
    updateItemsWithNewGroupId (itemsIds, groupId) {
      this.items
        .filter(item => itemsIds.indexOf(item.id) >= 0)
        .forEach(item => {
          item.groupId = groupId
        })
    }
  }
}
</script>

<style lang="stylus">


  * {
    box-sizing: border-box;
  }

  body {
    background: #33363d;
    color: white;
    font-family: "Roboto Mono", serif;
    font-weight: 300;
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
  }

  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  .drag-container {
    max-width: 1000px;
    margin: 20px auto;
  }

  .drag-list {
    display: flex;
    align-items: flex-start;

    @media (max-width: 690px) {
      display: block;
    }
  }

  .drag-column {
    flex: 1;
    margin: 0 10px;
    position: relative;
    background: rgba(black, 0.2);
    overflow: hidden;

    @media (max-width: 690px) {
      margin-bottom: 30px;
    }

    h2 {
      font-size: 0.8rem;
      margin: 0;
      font-weight: 600;
    }

    &-to-do {
      .drag-column-header,
      .drag-options {
      }
    }

    &-in-progress {
      .drag-column-header,
      .drag-options {
      }
    }

    &-approved {
      .drag-column-header,
      .drag-options {
      }
    }
  }

  .drag-column-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    user-select: none;
  }

  .drag-inner-list {
    height: 85vh;
    overflow: auto;
  }

  .drag-item {
    margin: 10px;
    height: 100px;
    background: rgba(black, 0.4);

    /* items grabbed state */
    &[aria-grabbed="true"] {
      background: #5cc1a6;
      color: #fff;
    }

    .drag-item-text {
      font-size: 1rem;
      padding-left: 1rem;
      padding-top: 1rem;
    }
  }

  .drag-header-more {
    cursor: pointer;
  }

  @keyframes nodeInserted {
    from {
      opacity: 0.2;
    }
    to {
      opacity: 0.8;
    }
  }

  .item-dropzone-area {
    height: 6rem;
    background: #888;
    opacity: 0.8;
    animation-duration: 0.5s;
    margin-left: 0.6rem;
    margin-right: 0.6rem;
  }
</style>
