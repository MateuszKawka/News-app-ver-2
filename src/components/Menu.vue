<template>
<transition name="slide" mode='out-in'>
  <div class='menu-container'>
  <i class="fas fa-bars menu-button fa-lg" @click='menuBind'></i>
  <nav class="menu" :class="{ 'menu--hide': menuShow}">
    
  
  <ul class="menu-list">
    <p class="menu-label">
    Categories
  </p>
    <li v-for='(item, index) in categories' 
    :key='index'
    @click='categoryBind'
    class='item'
    >
      <a :data-item="item.cat" class='item__link'>{{item.display}}</a>
    </li>
  </ul>
  
  <ul class="menu-list">
    <p class="menu-label">
    Countries
  </p>
    <li v-for='(item, index) in countries' 
    :key='index'
    class='item'
    @click='countryBind'>
      <a :data-item="item.short" class='item__link' >{{item.full}}</a>
    </li>
  </ul>
</nav>
  </div>
</transition>
</template>

<script>
import {
    store,categories,countries
  }  from '@/store.js'

export default {
  name: 'Menu',
 components: {
   
 },
 props: ['fetchNews'],
  data () {
    return {
      category: '',
      country: '',
      categories: categories,
      countries: countries,
      menuShow: false
    }
  },
 methods: {
   categoryBind(el) {
    this.category = el.target.dataset.item;
    this.menuBind()
    this.setCategory();
    this.fetchNews();
   },
   countryBind(el) {
    this.country = el.target.dataset.item;
    this.menuBind()
    this.setCountry();
    this.fetchNews()
   },
   setCategory() {
  store.commit('setCategory', this.category)
   },
   setCountry() {
     store.commit('setCountry', this.country)
   },
   menuBind() {
     this.menuShow = !this.menuShow
   }
 }
}
</script>

<style>


.menu-button {
  position: absolute;
  top: 19px;
  left: 12px;
  font-size: 14px;
  z-index: 3;
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
  flex-flow: column wrap;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  background: #fff;
  transition: .25s all ease-in-out;
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
  padding: .5rem;

  cursor: pointer;
  transition: .2s all ease-in-out
}

.item:hover{
  background: #f2f2f2;
}

.item__link {

}

.menu--hide {
 visibility: hidden;

 transform: translateY(-100%)
}
</style>


