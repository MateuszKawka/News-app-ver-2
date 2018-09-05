<template>
<div class='box has-text-centered'>
  <transition name="slide" mode='out-in'>
    <half-circle-spinner class='spinner'
      :animation-duration="1000"
      :size="60"
      :color="'#080808'"
      v-if='loading'/>
  </transition>
  <transition name="slide" mode='out-in'>
    <section v-if='!loading' class='section'>
      <p class='title'>{{category}}</p>
        <News
          v-for='(item, index) in newsData'
          :key='index'
          :imgSrc='item.urlToImage'
          :title='item.title'
          :auth='item.author'
          :source='item.source.name'
          :date='item.publishedAt'
          :desc='item.description'
          :url='item.url'
        ></News>
    </section>
  </transition>
</div>
</template>

<script>
import { store } from "@/store.js";
import { HalfCircleSpinner } from "epic-spinners";
import News from "@/components/News.vue";

export default {
  name: "Section",
  components: {
    News,
    HalfCircleSpinner
  },
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },
  computed: {
    newsData: () => store.state.newsData,
    loading: () => store.state.loading,
    category() {
      if (this.newsData.length === 0) {
        return "None results";
      } else {
        return store.state.category;
      }
    }
  }
};
</script>

<style scoped>
.gradient {
  width: 100%;
  height: 100%;
  position: absolute;
  background: -moz-linear-gradient(
    top,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0) 1%,
    rgba(255, 255, 255, 0.35) 47%,
    rgba(16, 12, 30, 0.61) 81%,
    rgba(16, 12, 30, 0.76) 100%
  );
  background: -webkit-linear-gradient(
    top,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0) 1%,
    rgba(255, 255, 255, 0.35) 47%,
    rgba(16, 12, 30, 0.61) 81%,
    rgba(16, 12, 30, 0.76) 100%
  );
  background: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0) 1%,
    rgba(255, 255, 255, 0.35) 47%,
    rgba(16, 12, 30, 0.61) 81%,
    rgba(16, 12, 30, 0.76) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00ffffff', endColorstr='#c2100c1e',GradientType=0 );
}

.slide-enter-active,
.slide-leave-active {
  transition: all 0.1s;
}
.slide-enter,
.slide-leave-to {
  opacity: 0;
  transform: scale(0);
}

.box {
  justify-content: center;
  position: relative;
  border: none !important;
  box-shadow: none;
}

.spinner {
  position: absolute;
  top: 12px;
  left: 12px;
}

.title {
  font-size: 3rem;
  padding-left: 1.5rem;
  font-weight: 700;
  margin-top: 2rem;
  width: 100%;
}

.section {
  width: 100%;
  height: 100%;
}

@media only screen and (min-width: 1000px) {
  .section {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
  }
}
</style>
