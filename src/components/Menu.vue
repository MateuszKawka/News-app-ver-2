<template>
<transition name="slide" mode='out-in'>
  <div class='menu-container'>
    <i class="fas fa-bars menu-button fa-lg"
      @click='menuBind' 
      :class="{ 'fa-times': !menuShow}"></i>
    <nav class="menu" 
      :class="{ 'menu--hide': menuShow}">
    <ul class="menu-list">
      <p class="menu-label">Categories</p>
      <li class='item'
        v-for='(item, index) in categories' 
        :key='index'
        @click='categoryBind'>
        <a class='item__link'
          :data-item="item.cat">{{item.display}}</a>
      </li>
    </ul>
    <ul class="menu-list">
      <p class="menu-label">Countries</p>
      <li class='item'
        v-for='(item, index) in countries' 
        :key='index'
        @click='countryBind'>
        <a class='item__link'
          :data-item="item.short">{{item.full}}</a>
      </li>
    </ul>
  </nav>
  </div>
</transition>
</template>

<script>
import { store, categories, countries } from "@/store.js";

export default {
  name: "Menu",
  props: ["fetchNews"],
  data() {
    return {
      category: "",
      country: "",
      categories: categories,
      countries: countries,
      menuShow: true
    };
  },
  methods: {
    categoryBind(el) {
      this.category = el.target.dataset.item;
      this.menuBind();
      this.setCategory();
      this.fetchNews();
    },
    countryBind(el) {
      this.country = el.target.dataset.item;
      this.menuBind();
      this.setCountry();
      this.fetchNews();
    },  
    setCategory() {
      store.commit("setCategory", this.category);
    },
    setCountry() {
      store.commit("setCountry", this.country);
    },
    menuBind() {
      this.menuShow = !this.menuShow;
    }
  }
};
</script>

<style scoped>
.menu-button {
  position: absolute;
  top: 19px;
  left: 12px;
  font-size: 18px;
  z-index: 3;
  transition: 0.5s all ease-in-out;
  cursor: pointer;
}
.menu-container {
  width: 100%;
  height: 100%;
  position: relative;
}

.menu-label {
  font-size: 1.6rem;
  font-weight: 700;
}

.menu {
  width: 100%;
  height: 100%;
  padding-top: 3rem;
  padding-left: 2rem;
  min-height: 100vh;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-flow: column;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  background: #fff;
  transition: 0.2s all ease-in-out;
}

.menu-list {
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  margin: 2rem 0;
}

.item {
  list-style-type: none;
  font-size: 1.6rem;

  width: 100%;
  text-align: left;

  cursor: pointer;
  transition: 0.2s all ease-in-out;
}

.item:hover {
  background: #f2f2f2;
}

.item__link {
  display: flex;
  height: 100%;
  padding: 0.5rem;
}

.menu--hide {
  visibility: hidden;

  transform: scale(0);
}
</style>
