<template>
  <a-select :trigger="['click']" :bordered="false" :value="activeValue" @change="changeValue">
    <a-select-option v-for="item in itemList" :key="item.id" :value="item.id">
      {{ item.title }}
    </a-select-option>
  </a-select>
</template>

<script>


export default {
  props: {
    itemList: {
      type: Array
    },
    filterType: {
      type: Number
    }
  },
  data() {
    return {
      activeValue: this.itemList[0].id
    }
  },
  methods: {
    changeValue(selected) {
      this.activeValue = selected
      this.$emit('update:filterType', selected)
    }
  },
  name: "FilterDropDown",
}
</script>

<style scoped>

</style>