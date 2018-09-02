<template>
  <div id="app">
    <div class="columns ">
  <!-- All other tile elemnts -->
    <div class="column is-12">
    <header class='header'>
      <Menu :fetchNews='getNews'></Menu>
      <Search :fetchNews='getNews'></Search>
    </header>
    </div>
    
    <div class="column is-11 is-offset-right-1 ">
    <main>
      <Lastest></Lastest>
      <Section></Section>

    </main>
    
    </div>
    </div>
    
  </div>
</template>

<script>
import {
    store
  }  from '@/store.js'

import Section from "@/components/Section.vue";
import Menu from "@/components/Menu.vue";
import Lastest from "@/components/Lastest.vue";
import Search from "@/components/Search.vue";
export default {
  name: "App",
  components: {
    Section,
    Menu,
    Lastest,
    Search
  },
  store,
  methods: {
    getNews() {
      store.commit('loadingBind')
            fetch(`https://newsapi.org/v2/top-headlines?country=${this.$store.state.country}&pagesize=${this.$store.state.perPage}&category=${this.$store.state.category}&q=${this.$store.state.q}&apiKey=c70c6b881578467e8d65672d0783c383`)
              .then(resp => {

                return resp.json()
              })
              .then(resp => {
                console.log(resp)
                store.commit('addNewsData', resp)
               store.commit('loadingBind')
              })
          }
  },
  mounted() {
    this.getNews()
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Roboto';
  color: #080808;
}

html {
  font-size: 62.5%;
}

.header {
  width: 100%;
  height: 52px;

  display: flex;
  justify-content: center;
 
  position: relative;
}
</style>
