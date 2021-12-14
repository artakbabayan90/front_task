<template>
  <div v-if="currentBrand !== 0">
    <a-typography-title :level="3" class="title">{{ this.brandsInfo[currentBrand].promoTitle }}</a-typography-title>
    <p class="text">{{ this.brandsInfo[currentBrand].promoDescription }}</p>
  </div>
</template>

<script>
export default {
  props:{
    currentBrand: {
      type:Number
    },
    brandsInfo:{
      type:Object
    }
  },
name: "LeftContent"
}
</script>

<style scoped>
.text{
  color: #8E98B9;
}
.title {
  color: #001489 !important;
}

</style>