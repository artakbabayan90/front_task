<template>
  <a-radio-group v-model:value="value1" button-style="solid" @change="changeVolume">
    <a-radio-button v-for="volume in volumeList" :key="volume.id" :value="volume.id">{{ volume.title }}</a-radio-button>
  </a-radio-group>
</template>

<script>
export default {
  name: "VolumeList",
  props: {
    volumeList: {
      type: Array
    },
    currentVolume: {
      type: Number
    }
  },
  data() {
    return {
      value1: this.volumeList[0].id
    }
  },
  methods: {
    changeVolume(checked) {
      this.$emit('update:currentVolume', checked.target.value);
    }
  }

}
</script>

<style scoped>
.ant-radio-button-wrapper {
  margin-bottom: 24px !important;
  border: 1px solid #2BD6DC !important;
  border-radius: 30px !important;
  width: 90px !important;
  text-align: center;
}

.ant-radio-button-wrapper-checked {
  background: #2BD6DC !important;
}
</style>