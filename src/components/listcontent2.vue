<template>
  <div>
    <div class="listpage-contents">
        <router-link to="/storeDetail/:id">
        <div class="listpage-contents-box" v-for="(breadShop,i) in breadShop.slice(6,12)" :key="i">
            <div class="listpage-contents-box-image" :style="{ backgroundImage: `url(${breadShop.image})` }"></div>
            <div><span class="listpage-contents-box-text1">{{breadShop.title}}</span> <span class="listpage-contents-box-text2">{{breadShop.score}}</span></div>
            <div class="listpage-contents-box-text3">{{breadShop.addr1}} {{breadShop.addr2}} - {{breadShop.category}} </div>
        </div>
        </router-link>
      </div>
  </div>
</template>


<script>


export default {
    props:{
        breadShop:Object,
    }
}
</script>

<style>

</style>