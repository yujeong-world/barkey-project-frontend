<template>
  <div>
    <div class="listpage-wrap">
      <!-- 상단탭메뉴 -->
      <div class="listpage-topmenu">
  <ul>
    <li :class="{ active: selectedCategory === '' }" @click="showAllItems">전체</li>
    <li :class="{ active: selectedCategory === '베이커리' }" @click="sortBy('베이커리')">베이커리</li>
    <li :class="{ active: selectedCategory === '카페' }" @click="sortBy('카페')">카페</li>
    <li :class="{ active: selectedCategory === '디저트' }" @click="sortBy('디저트')">디저트</li>
  </ul>

  <div class="list-sort">
    <p class="list-sort-relevant" :class="{active: selectedSort === '관련도순'}" @click="listSort('관련도순')">관련도순</p>
    <p class="list-sort-famous" :class="{active: selectedSort === '인기순'}" @click="listSort('인기순')">인기순</p>
  </div>
</div>
      <!-- 중단 내용 -->
      <router-view :breadShop="filteredItems"></router-view>
      <!-- 하단탭메뉴 -->
      <div class="listpage-botmenu">
        <div class="listpage-botmenu-box" :class="{ active: $route.path === '/searchResult/listpage/listcontent1' }">
          <router-link to="/searchResult/listpage/listcontent1">1</router-link>
        </div>
        <div class="listpage-botmenu-box" :class="{ active: $route.path === '/searchResult/listpage/listcontent2' }">
          <router-link to="/searchResult/listpage/listcontent2">2</router-link>
        </div>
        <div class="listpage-botmenu-box" :class="{ active: $route.path === '/searchResult/listpage/listcontent3' }">
          <router-link to="/searchResult/listpage/listcontent3">3</router-link>
        </div>
        <div class="listpage-botmenu-box" :class="{ active: $route.path === '/searchResult/listpage/listcontent4' }">
          <a href="#">4</a>
        </div>
        <div class="storelist-next-btn listpage-botmenu-box"></div>
      </div>
    </div>
  </div>
</template>

<script>
import breadShop from "../assets/json/breadshop.json";

export default {
  data() {
    return {
      breadShop: [],
      selectedCategory: "",
      selectedSort: ""
    };
  },
  mounted() {
    this.breadShop = breadShop;
  },
  computed: {
    filteredItems() {
      if (this.selectedCategory === "베이커리") {
        return this.breadShop.filter(item => item.category === "베이커리").sort((a, b) => a.title.localeCompare(b.title));
      } else if (this.selectedCategory === "카페") {
        return this.breadShop.filter(item => item.category === "카페").sort((a, b) => a.title.localeCompare(b.title));
      } else if (this.selectedCategory === "디저트") {
        return this.breadShop.filter(item => item.category === "디저트").sort((a, b) => a.title.localeCompare(b.title));
      } else {
        return this.breadShop;
      }
    },
  },
  methods: {
    sortBy(category) {
      this.selectedCategory = category;
    },
    showAllItems() {
      this.selectedCategory = "";
    },
    listSort(selectedSort) {
      this.selectedSort = selectedSort;
    },
    
  },
};
</script>

<style>

/* 페이지 전체 규격설정 */
.listpage-wrap{
  width: 1200px;
  margin: 50px auto 0;
  /* overflow: hidden; */
  font-family: 'Noto Sans KR';
  /* margin: auto; */
}

/* 상단 탭메뉴 */
.listpage-topmenu ul{
    display: flex;
    padding: 0 0 15px 0;
    border-bottom: 1px solid #888;
    font-size: 18px;
    margin-bottom: 10px;
}
.listpage-topmenu ul li{
    padding: 0 45px;
    color:#888;
    cursor: pointer;
}
.listpage-topmenu ul li:first-child{
  padding-left: 0;
}
.listpage-topmenu ul li.active {
    color: #FF6600;
    font-weight: bold;
}

.listpage-topmenu ul li:hover{
  color: #FF6600;
}

.list-sort{
  display: flex;
  justify-content: flex-end;
  color: #888;
  cursor: pointer;
  padding: 0;
  line-height: 0;
}
.list-sort .list-sort-relevant.active, .list-sort .list-sort-famous.active{
  color: #FF6600;
  padding: 0;
}
.list-sort .list-sort-relevant::after{
  content: "|";
  color: #ddd;
  margin: 0 10px;
}

/* 중단 내용 */
.listpage-contents{
    clear: both;
    margin: auto;
    margin-top: 45px;
}
.listpage-contents a{
    display: flex;
    flex-wrap: wrap;
}
.listpage-contents-box{
    width: 330px;
    margin-bottom: 55px;
    margin-right: 105px;
}
.listpage-contents-box:nth-child(3n){
  margin-right: 0;
}
.listpage-contents-box-image{
  width: 330px;
  height: 210px;
  background-color: #dfdfdf;
  background-repeat: no-repeat;
  margin-bottom: 10px;
}
.listpage-contents-box span.listpage-contents-box-text1{
  display: inline-block;
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 2px;
}
.listpage-contents-box span.listpage-contents-box-text2{
    font-size: 20px;
    color:#ffa559;
    margin-left: 5px;
}
.listpage-contents-box div.listpage-contents-box-text3{
    font-size: 15px;
    color:#888;
}
.listpage-contents-box img{
    width: 340px;
    height: 210px;
}
.listpage-contents div{
    text-align: left;
}
/* .listpage-contents-array{
    position: absolute;
    right: 0; top: 20px;
    font-size: 15px;
    color: #888;
}
.listpage-contents-array span{
    font-weight: bold;
    margin: 10px;
}
.listpage-contents-array-text1{
    color: #FF6600;
} */
/* 하단탭메뉴 */
.listpage-botmenu{
    margin-top: 70px;
    width: 50%;
    display: flex;
    justify-content: center;
    margin: 0 auto;
    color: #888;
}
.listpage-botmenu-box{
  width: 42px;
  height: 30px;
  border: 1px solid #ddd;
  margin: 0 5px;
  text-align: center;
  line-height: 30px;
  border-radius: 5px;
  font-size: 13px;
}
.listpage-botmenu-box a{
  display: inline-block;
  width: inherit;
  height: inherit;
  /* background-color: #888; */
}
.listpage-botmenu-box:first-child{
    color: #000;
}
.storelist-next-btn{
  width: 35px;
  background: url(../assets/images/store-list/storelist-next-btn.png) no-repeat;
  background-position: center;
  cursor: pointer;
}
/* 하단탭메뉴 클릭시 번호 강조 */
.listpage-botmenu-box.active {
  color: #FF6600;
  font-weight: bold;
}
</style>