<template>
<div class='box has-text-centered'>
  <transition name="slide" mode='out-in'>
   <orbit-spinner
  :animation-duration="1000"
  :circles-num="3"
  :circle-size="15"
  :color="'#716A5C'"
  v-if='loading' 
  class='spinner' 
/>
  </transition>
  <transition name="slide" mode='out-in'>
  <section class='section is-centered has-text-left' v-if='!loading'>
    <p class='title'>{{category}}</p>
  <div class='news-container' v-for='(item, index) in newsData' :key='index'>      
      <News
        :imgSrc='item.urlToImage'
        :title='item.title'
        :auth='item.author'
        :date='item.publishedAt'
        :desc='item.description'
        :url='item.url'
      ></News>
  </div>
  </section>
  </transition>
</div>
</template>

<script>
import {
    store
  }  from '@/store.js'
import {OrbitSpinner} from 'epic-spinners'
import News from '@/components/News.vue';

export default {
  name: 'Section',
  components: {
    News,OrbitSpinner
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  computed: {
    category: () => store.state.category,
    newsData: () => store.state.newsData.articles,
    loading: () => store.state.loading

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


.gradient {
  width: 100%;
    height: 100%;
    position: absolute;
    background: -moz-linear-gradient(top, rgba(255,255,255,0) 0%, rgba(255,255,255,0) 1%, rgba(255,255,255,0.35) 47%, rgba(16,12,30,0.61) 81%, rgba(16,12,30,0.76) 100%);
background: -webkit-linear-gradient(top, rgba(255,255,255,0) 0%,rgba(255,255,255,0) 1%,rgba(255,255,255,0.35) 47%,rgba(16,12,30,0.61) 81%,rgba(16,12,30,0.76) 100%);
background: linear-gradient(to bottom, rgba(255,255,255,0) 0%,rgba(255,255,255,0) 1%,rgba(255,255,255,0.35) 47%,rgba(16,12,30,0.61) 81%,rgba(16,12,30,0.76) 100%);
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00ffffff', endColorstr='#c2100c1e',GradientType=0 );
}

.slider-item {
  
}

.slide-enter-active,
  .slide-leave-active {
    transition: all .4s;
  }
  
  .slide-enter,
  .slide-leave-to {
    opacity: 0;
    transform: scale(.7)
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
</style>
