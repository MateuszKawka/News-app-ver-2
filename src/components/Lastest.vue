<template>
  <section class='slider'>    
    <carousel  
        :perPage='1'
        paginationColor = "#f2f2f2"
        paginationActiveColor="#07020D"
        :autoplay='true'
        :autoplayTimeout='7000'>
    <slide 
    v-for='(item, index) in lastestNews' 
     :key='index'>
    <a :href='item.url' target='_blank'>
    <div class='slider-item'>
        <div class="gradient"></div>
        <img 
            v-lazy='imageSrc[index]'
            alt='no info'>
        <p class='slider-item__content'>{{item.title}}</p>
    </div>
    </a>
  </slide>
</carousel>
  </section>
</template>

<script>
import News from "@/components/News.vue";
import { store } from "@/store.js";

export default {
  name: "Lastest",
  components: {
    News
  },
  data(){
    return {
      lastestNews: Array
    }
  },
  computed: {
    imageSrc() {
      return this.lastestNews.map(function(item) {
        let imageUrl = item.urlToImage;
        let placeholder =
          "https://images.vexels.com/media/users/3/144609/raw/26930bcc86d4e5962ffe712cae931fc8-world-breaking-news-banner-header.jpg";
        return imageUrl === null ? placeholder : imageUrl;
      });
    }
  },
  methods: {
    getNews() {
      fetch(
        `https://newsapi.org/v2/top-headlines?pagesize=5&country=us&apiKey=c70c6b881578467e8d65672d0783c383`
      )
        .then(resp => {
          return resp.json();
        })
        .then(resp => {
          this.lastestNews = resp.articles
        });
    }
  },
  mounted() {
    this.getNews()
  }
};
</script>

<style scoped>
.slider {
  width: 100%;
  margin-top: 6rem;
}

.slider-item {
  position: relative;
  height: 212px;
  cursor: pointer;
}

.slider-item__content {
  position: absolute;
  bottom: 12px;
  width: 100%;
  padding: 1rem 3rem;
  font-size: 1.4rem;
  font-weight: 700;
  color: #fff;
}

.slider-item img {
  width: 100%;
  height: 100%;
}

.gradient {
  width: 100%;
  height: 100%;
  background: -moz-linear-gradient(
    top,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.65) 100%
  );
  background: -webkit-linear-gradient(
    top,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.65) 100%
  );
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.65) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00000000', endColorstr='#a6000000',GradientType=0 );
  position: absolute;
}


@media only screen and (min-width: 420px) {
    .slider-item {
        height: 25vh;
    }
    .slider-item__content {
      font-size: 2rem;
    }
}

@media only screen and (min-width: 600px) {
    .slider-item {
        height: 40vh;
    }

    .slider-item__content {
      font-size: 2.4rem;
    }
}

@media only screen and (min-width: 1000px) {
.slider-item {
        height: 95vh;
    }
    .slider-item__content {
      font-size: 3.5rem;
      bottom: 32px;
    }
}
</style>
