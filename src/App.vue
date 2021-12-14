<template>
  <a-layout class="main">
    <a-layout>
      <a-layout-content class="content">
        <a-row>
          <a-col :span="14">
            <a-typography-title :level="1" class="title">уникальные бокалы</a-typography-title>
            <a-row>
              <a-col :span="5">
                <volume-list v-if="volumeList.length" v-model:currentVolume="currentVolume" :volumeList="volumeList"></volume-list>
              </a-col>
              <a-col :span="19">
                <filter-drop-down v-if="this.gassingList.length" :itemList="this.gassingList" v-model:filterType="currentGassing">
                </filter-drop-down>
                <filter-drop-down v-if="this.typeList.length"  :itemList="this.typeList" v-model:filterType="currentType">
                </filter-drop-down>
                <filter-drop-down v-if="this.capList.length"  :itemList="this.capList" v-model:filterType="currentCap">
                </filter-drop-down>
                <left-content :currentBrand="this.currentBrand" :brandsInfo="this.brandsInfo"></left-content>
              </a-col>
            </a-row>
          </a-col>
          <a-col :span="8">
           <center-content :currentBrand="this.currentBrand" :currentProduct="this.currentProduct" :brandsInfo="this.brandsInfo"></center-content>
          </a-col>
        </a-row>
      </a-layout-content>
      <a-layout-sider class="sider">
        <Brands v-if="brands.length && currentBrand !== 0" :brands="brands" v-model="currentBrand"></Brands>
      </a-layout-sider>
    </a-layout>
  </a-layout>
</template>

<script>
import axios from "axios";
import Brands from "@/components/Brands";
import VolumeList from "@/components/VolumeList";
import FilterDropDown from "@/components/FilterDropDown";
import LeftContent from "@/components/LeftContent";
import CenterContent from "@/components/CenterContent";

export default {
  components: {
    Brands,
    VolumeList,
    FilterDropDown,
    LeftContent,
    CenterContent
  },
  data() {
    return {
      brands: [],
      brandsInfo: [],
      products: [],
      volumeList: [],
      dropdownList: [],
      currentBrand: 0,
      capList:[],
      gassingList:[],
      typeList:[],
      currentCap: 0,
      currentGassing: 0,
      currentType: 0,
      currentVolume: 0,
      currentProduct: {},
    }
  },
  methods: {
    filterProduct(products) {
      let product = products.filter(product => product.brand === this.currentBrand
          && product.cap === this.currentCap
          && product.gassing === this.currentGassing
          && product.type === this.currentType
          && product.volume === this.currentVolume)[0];
      return product;
    },
    async fetchPosts() {
      try {
        const {data} = await axios.get('https://tests.softmonster.ru/productsData.json', {});
        const {propsInfo, products} = data.data
        this.brands = propsInfo.brandTree
        this.brandsInfo = propsInfo.brandInfo
        this.products = products
        this.volumeList = Object.values(propsInfo.volumeList)
        this.currentBrand = this.brands[0].children ? this.brands[0].children[0].id : this.brands[0].id;
        this.currentCap = Object.values(propsInfo.capList)[0].id
        this.currentGassing = Object.values(propsInfo.gassingList)[0].id
        this.currentType = Object.values(propsInfo.typeList)[0].id
        this.currentVolume = this.volumeList[0].id
        this.capList = Object.values(propsInfo.capList);
        this.gassingList = Object.values(propsInfo.gassingList);
        this.typeList = Object.values(propsInfo.typeList);
        this.currentProduct = this.filterProduct(this.products);
      } catch (e) {
        console.log(e)
      }
    },
  },
  mounted() {
    this.fetchPosts();
  },
  watch: {
    currentBrand() {
      this.currentProduct = this.filterProduct(this.products);
    },
    currentVolume() {
      this.currentProduct = this.filterProduct(this.products);
    },
    currentCap() {
      this.currentProduct = this.filterProduct(this.products);
    },
    currentType() {
      this.currentProduct = this.filterProduct(this.products);
    },
    currentGassing() {
      this.currentProduct = this.filterProduct(this.products);
    },

  }
}
</script>

<style>
.ant-radio-wrapper {
  position: absolute !important;
  z-index: 1 !important;
}

.ant-radio-button-wrapper:not(:first-child)::before {
  display: none !important;
}

.main {
  margin: 120px 120px 0 120px;
  text-transform: uppercase;
}

.ant-layout-content {
  background-color: #fff;
}

.sider {
  background-color: #fff !important;
}
</style>
