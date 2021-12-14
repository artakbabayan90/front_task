<template>
  <img class="img1" v-if="currentBrand !== 0" :src="this.brandsInfo[currentBrand].backgroundPicture"
       alt="fwef">
  <div class="imgCont">
    <a-popover trigger="click" v-for="point in currentProduct.points" :key="point.left">
      <template #content>
        <a-card hoverable style="width: 300px">
          <template #cover>
            <img
                alt="example"
                :src="point.picture"
            />
          </template>
          <a-card-meta :title="point.title" :description="point.description">
          </a-card-meta>
        </a-card>
      </template>
      <a-radio :checked="true" :style="{left: point.left + 'px !important', top: point.top+'px'}"></a-radio>
    </a-popover>
    <img class="img2" :src="this.currentProduct.picture" alt="">
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
    },
    currentProduct:{
      type:Object
    }
  },
  name: "CenterContent"
}
</script>

<style scoped>

.img1 {
  width: 100%;
}
.img2 {
  position: relative;
  -o-object-fit: contain;
  width: 100%;
}
.imgCont {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: auto;
  top: -8%;
}
</style>