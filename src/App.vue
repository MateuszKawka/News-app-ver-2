<template>
  <div id="app">
    <div class='loading' v-if='loading'>
      <half-circle-spinner class='main-spinner'
        :animation-duration="1000"
        :size="60"
        :color="'#080808'"
        v-if='loading'/>
    </div>
    <div>
      <div>
      <header class='header'>
        <Menu 
          :fetchNews='getNews'></Menu>
        <Search 
          :fetchNews='getNews'></Search>
      </header>
      </div>
      <div>
        <main>
          <Lastest></Lastest>
          <div class='container'>
          <Section></Section>
          </div>
        </main>
      </div>
    </div>
  </div>
</template>

<script>
import { store } from "@/store.js";

import Section from "@/components/Section.vue";
import Menu from "@/components/Menu.vue";
import Lastest from "@/components/Lastest.vue";
import Search from "@/components/Search.vue";
import { HalfCircleSpinner } from "epic-spinners";
export default {
  name: "App",
  components: {
    Section,
    Menu,
    Lastest,
    Search,
    HalfCircleSpinner
  },
  store,
  methods: {
    getNews() {
      store.commit("loadingBind");
      fetch(
        `https://newsapi.org/v2/top-headlines?country=${
          this.$store.state.country
        }&pagesize=${this.$store.state.perPage}&category=${
          this.$store.state.category
        }&q=${this.$store.state.q}&apiKey=c70c6b881578467e8d65672d0783c383`
      )
        .then(resp => {
          return resp.json();
        })
        .then(resp => {
          store.commit("addNewsData", resp.articles);
          store.commit("loadingBind");
        });
    }
  },
  data() {
    return {
      loading: true
    };
  },
  mounted() {
    this.getNews();
    this.loading = false;
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Roboto";
  color: #080808;
}

html {
  font-size: 62.5%;
}

.header {
  width: 100%;
  height: 56px;
  background: #fff;
  display: flex;
  justify-content: center;

  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  -webkit-backface-visibility: hidden;
}

body {
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  position: relative;
}

.loading {
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;

  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  z-index: 20;
  background: #fff;
  transition: 0.1s all ease-in-out;
}

.main-spinner {
  margin: 3rem;
}

.container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  flex-flow: column wrap;
}
</style>
