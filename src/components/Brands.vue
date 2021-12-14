<template>
  <div>

    <a-menu
        style="width: 256px"
        :openKeys="openKeys"
        :selectedKeys="selectedKeys"
        mode="inline"
        @click="changeMenuItem"
    >
      <div v-for="brand in brands" @click="activeItem" :key="brand.title">
        <a-menu-item v-if="!brand.children" :key="brand.id">{{ brand.title }}</a-menu-item>
        <a-sub-menu v-else :key="brand.title">
          <template #title>{{ brand.title }}</template>
          <a-menu-item v-for="child in brand.children" :key="child.id">{{ child.title }}</a-menu-item>
        </a-sub-menu>
      </div>
    </a-menu>
  </div>

</template>

<script>
export default {
  name: "Brands",
  props: {
    brands: {
      type: Array
    },
    modelValue: {
      type: Number
    }

  },
  data() {
    return {
      selectedKeys:[this.modelValue],
      openKeys:[this.brands[0].children && this.brands[0].title]
    }
  },
  methods: {
    changeMenuItem(checked) {
      this.selectedKeys = [checked.key]
      this.$emit('update:modelValue', checked.key)
    }
  }

}
</script>

<style scoped>

</style>