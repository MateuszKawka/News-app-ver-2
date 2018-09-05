<template>
<a 
    :href='url'
    target="_blank"
    class='news-container'>
    <div class="news">
        <div 
            v-lazy:background-image='imageSource' class='news__image'></div>
        <div class="news-content">
            <p class='news-content__title'>{{shortTitle}}</p>
            <p class='news-content__auth'
                v-if='auth'>{{`By ${author},`}} <span>{{`on ${dateTransform}`}}</span>
            </p>
            <p class='news-content__source'>{{source}}</p>
        </div>
  </div>
</a>
</template>

<script scoped>
export default {
  name: "News",
  components: {},
  props: {
    imgSrc: String,
    title: String,
    desc: String,
    auth: String,
    source: String,
    date: String,
    url: String
  },
  computed: {
    imageSource() {
      let placeholder = `https://images.vexels.com/media/users/3/144609/raw/26930bcc86d4e5962ffe712cae931fc8-world-breaking-news-banner-header.jpg`;
      return this.imgSrc === null ? placeholder : this.imgSrc;
    },
    dateTransform() {
      return this.date.slice(0, -10).replace(/T/, " ");
    },
    backgroundImage() {
      return `background: url('${
        this.imageSource
      }') center no-repeat;background-size: cover`;
    },
    author() {
      let placeholder = `Unknown`
      let regExp = /^htt/gm
      return regExp.test(this.auth) ? placeholder : this.auth
    },
    shortTitle(){
      return this.title.length > 62 ? `${this.title.slice(0,70)}...` : this.title
    }
  }
};
</script>

<style>
.news {
  width: 100%;
  height: auto;
  padding: 0 1rem 2rem 2.5rem;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-flow: row;
  margin: 1rem 0;
  color: #080808;
  border-bottom: 1px solid #f1f1f1
}

.news__image {
  width: 112px;
  height: 112px;

  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}
.news__image[lazy=loading] {
  background-size: 64px;
  background-position: 47% 47%;
}

.news-content {
  width: 60%;
  height: 100%;
  padding-left: 2.5rem;

  display: flex;
  justify-content: flex-start;
  flex-flow: row wrap;
  align-items: center;
}

.news-content__title {
  width: 100%;
  font-size: 1.4rem;
  font-weight: 700;
  font-family: "Roboto";
  line-height: 1.8rem;
}

.news-content__auth {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-flow: column;
  font-size: 1.1rem;
  font-weight: 700;
  font-family: "Roboto";
}

.news-content__auth span {
  display: flex;
}

.news-container{
  border: 1px solid rgba(0,0,0,0);
  transition: .15s all ease-in-out;
}

.news-container:hover{
  border: 1px solid #f2f2f2;
}

a {
  text-decoration: none;
}

.news-content__source {
  width: 100%;
  margin: .5rem 0;
}


@media only screen and (min-width: 600px) {
    .news__image{
        width: 164px;
        height: 164px;
    }

    .news {
      height: 192px;
    }

    .news-content {
      width: 75%;
      padding-right: 1.5rem;
    }
    .news-content__title {
      font-size: 1.6rem;
    }
    
    .news-content__auth {
font-size: 1.3rem;
    }

}


@media only screen and (min-width: 1000px) {
  .news {
    width: 100%;
  }

  .news-container {
  width: 40%;

  display: flex;
}

.news-content {
      width: 65%;

    }
}

@media only screen and (min-width: 1200px) {

}
</style>
