<template>
<a :href='url' target="_blank">
    <div class="news">
        
        <div :style='backgroundImage' class='news__image'></div>
  <div class="news-content">
     
      <p class='news-content__title'>{{title}}</p>
      <p class='news-content__auth' v-if='auth'>
          {{`By ${auth}, on ${dateTransform}`}}
      </p>
      
    </div>
  </div>
</a>
</template>

<script>
export default {
  name: "News",
  components: {},
  props: {
      imgSrc: String,
      title: String,
      desc: String,
      auth: String,
      date: String,
      url: String
},
computed: {
    imageSource() {
        if(this.imgSrc === null) {
            return `https://images.vexels.com/media/users/3/144609/raw/26930bcc86d4e5962ffe712cae931fc8-world-breaking-news-banner-header.jpg`
        }else {
            return this.imgSrc
        }
    },
      dateTransform() {
          return this.date.slice(0, -10).replace(/T/, ' ')
      },
      backgroundImage() {
          return `background: url('${this.imageSource}') center no-repeat;background-size: cover`
      }
}
}
</script>

<style>
.news {
    width: 100%;
    height: 132px;
    padding: 0 1rem 0 2.5rem;

    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-flow: row;
    margin: 3rem 0;
    color: #080808;
    
}

.news__image {
    width: 112px;
    height: 112px;

    background-size: cover;
}

.news-content {
    width: 60%;
    height: 100%;
    padding: 2rem 0 2rem 2.5rem;

   display: flex;
    justify-content: space-between;
    flex-flow: column wrap;
    align-items: flex-start
}

.news-content__title {
    width: 100%;
    font-size: 1.4rem;
    font-weight: 700;
    font-family: 'Roboto';
    line-height: 1.8rem;
}

.news-content__auth {
    font-size: 1.1rem;
    font-weight: 700;
     font-family: 'Roboto';
}

a {
    text-decoration: none;
}
</style>
