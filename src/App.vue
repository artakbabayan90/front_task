<template>
<div>art</div>
</template>

<script>
import axios from "axios";
export default {

  methods:{
    async fetchPosts() {
      try {
        const response = await axios.get('https://tests.softmonster.ru/productsData.json', {

        });
        console.log(response)
      } catch (e) {
        console.log(e)
      }
    },
  },
  mounted() {
    this.fetchPosts();
  },
}
</script>

<style>
</style>
