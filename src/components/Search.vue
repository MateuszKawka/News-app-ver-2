<template>
<div>
    <i class="fas fa-search search-icon" @click='searchBind'></i>
    <input type='text' v-model="query"  v-on:keyup='setQuery' class='search' placeholder="Search..." :class="{ 'search--hidden': showInput }">
</div>
</template>


<script>
import {
    store
  }  from '@/store.js'

export default {
  name: "Search",
  components: {},
 props: ['fetchNews'],
  data () {
    return {
      query: '',
      showInput: false
    }
  },
  methods: {
      setQuery() {
        store.commit('setQuery', this.query);
        
   },
   searchBind() {
       this.showInput = !this.showInput
   }
  }
};
</script>

<style>

.search-icon {
    position: absolute;
    top: 19px;
    right: 24px;
    z-index: 1;
    font-size: 14px;
}

.search {
    position: absolute;
    top: 12px;
    right: 12px;
    width: 55%;
    height: 28px;
    border: none;
    background: #f2f2f2;
    border-radius: 12px;
    padding: 1rem;
    transition: .1s all ease-in-out;
}

.search--hidden {
    visibility: hidden;
    transform: translateX(75%)
}

</style>
