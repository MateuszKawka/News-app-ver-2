<template>
  <section class='section slider'>    
    <carousel  :perPage='1' paginationColor = "#A39B8B" paginationActiveColor="#07020D" :autoplay='true'>
  <slide>
      <div class='slider-item'>
          <div class="gradient"></div>
          <img src='http://pcmod.pl/wp-content/uploads/2016/04/enter-the-dungeon-logo.jpg'>
          <p class='slider-item__content'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae, excepturi officiis dolores animi sit quis quidem recusandae autem veniam quaerat ut reiciendis magnam, odio cumque voluptatum quo architecto, inventore magni?</p>
      </div>
  </slide>
  <slide>
  <div class='slider-item'>
          <div class="gradient"></div>
          <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/City_of_London_skyline_from_London_City_Hall_-_Sept_2015_-_Crop_Aligned.jpg/1200px-City_of_London_skyline_from_London_City_Hall_-_Sept_2015_-_Crop_Aligned.jpg'>
          <p class='slider-item__content'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae, excepturi officiis </p>
      </div>
  
  </slide>
  <slide>
    <div class='slider-item'>
          <div class="gradient"></div>
          <img src='https://manwinwin.com/wp-content/uploads/2016/11/breaking-news-.jpg'>
          <p class='slider-item__content'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae, excepturi officiis dolores animi sit quis quidem recusandae autem veniam quaerat ut reiciendis magnam, odio cumque voluptatum quo architecto, inventore magni?</p>
      </div>
  </slide>
  <slide>
    <div class='slider-item'>
          <div class="gradient"></div>
          <img src='https://media3.s-nbcnews.com/i/newscms/2017_28/2067216/170710-money-jar-mn-1355_b73bfd0f28cbfa8b23de3111d07d37da.JPG'>
          <p class='slider-item__content'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae, excepturi officiis dolores animi sit quis quidem recusandae autem veniam quaerat ut reiciendis magnam, odio cumque voluptatum quo architecto, inventore magni?</p>
      </div>
  </slide>
</carousel>
  </section>
</template>

<script>
import News from "@/components/News.vue";

export default {
  name: "Lastest",
  components: {
    News
  }
};
</script>

<style>
.slider {
    width: 100%;
    height: 316px;
    margin-top: 4rem;
}

.slider-item {
    position: relative;
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
}

.gradient {
    width: 100%;
    height: 100%;
    background: -moz-linear-gradient(top, rgba(255,255,255,0) 0%, rgba(131,131,131,0) 61%, rgba(55,55,55,1) 98%, rgba(51,51,51,1) 100%);
background: -webkit-linear-gradient(top, rgba(255,255,255,0) 0%,rgba(131,131,131,0) 61%,rgba(55,55,55,1) 98%,rgba(51,51,51,1) 100%);
background: linear-gradient(to bottom, rgba(255,255,255,0) 0%,rgba(131,131,131,0) 61%,rgba(55,55,55,1) 98%,rgba(51,51,51,1) 100%);
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00ffffff', endColorstr='#333333',GradientType=0 );
    position: absolute
}
</style>
