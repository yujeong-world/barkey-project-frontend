<template>
        <div class="search-result">
        <!-- 검색 결과 -->
        <p class="result-text"><span>'{{ $route.query.searchValue }}'</span> 의 검색 결과입니다.</p>
        </div>
        <router-view></router-view>
</template>

<script>
import listpage from "./listpage-containter.vue"

export default {
    name: "searchResult",
    components: {
        listpage,
    }
}
</script>

<style scoped>
.search-result{
    width: 1200px;
    height: 40px;
    margin: 40px auto 0px;
    text-align: left;
}
.search-result .result-text{
    font-size: 20px;
}
.search-result .result-text span{
    font-size: 30px;
    font-weight: bold;
}
</style>