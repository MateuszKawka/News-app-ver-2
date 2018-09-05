<template>
<div>
    <i class="fas fa-search search-icon"
        @click='searchBind'></i>
    <input class='search'
        type='text'
        placeholder="Search..."
        v-model="query"
        v-on:keyup='setQuery'
        :class="{ 'search--hidden': !showInput }">
</div>
</template>

<script>
import { store } from '@/store.js'

export default {
  name: 'Search',
  props: ['fetchNews'],
  data () {
    return {
      query: '',
      showInput: false
    }
  },
  methods: {
    setQuery () {
      store.commit('setQuery', this.query)
      this.fetchNews()
    },
    searchBind () {
      this.showInput = !this.showInput
    }
  }
}
</script>

<style scoped>
.search-icon {
  position: absolute;
  top: 19px;
  right: 24px;
  z-index: 1;
  font-size: 16px;
  cursor: pointer;
}

.search {
  position: absolute;
  top: 12px;
  right: 12px;
  width: 65%;
  height: 32px;
  border: none;
  background: #f2f2f2;
  border-radius: 12px;
  padding: 1rem;
  transition: 0.1s all ease-in-out;
}

.search--hidden {
  visibility: hidden;
  transform: scale(0);
}

@media only screen and (min-width: 600px) { 
  .search {
    width: 40%;
  }
}

@media only screen and (min-width: 1000px) { 
  .search {
    width: 25%;
  }
}
</style>
