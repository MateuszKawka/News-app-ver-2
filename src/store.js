import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export const categories = [
    { cat: '', display: 'all' },
    { cat: 'Business', display: 'Business' },
    { cat: 'Entertainment', display: 'Entertainment'  },
    { cat: 'General', display: 'General'  },
    { cat: 'Health', display: 'Health'  },
    { cat: 'Science', display: 'Science'  },
    { cat: 'Sports', display: 'Sports'  },
    { cat: 'Technology', display: 'Technology'  }
  ]

export const countries = [{
    short: '',
    full: 'All'
  },
  {
    short: 'de',
    full: 'Germany'
  },
  {
    short: 'gb',
    full: 'United Kingdom'
  },
  {
    short: 'pl',
    full: 'Poland'
  },
  {
    short: 'ru',
    full: 'Russia'
  },
  {
    short: 'hu',
    full: 'Hungary'
  }
]

export const store = new Vuex.Store({
    state: {
      perPage: 20,
      category: 'Business',
      country: 'gb',
      q:'',
      newsData: [], 
      loading: false
    },
    mutations: {
        addNewsData: (state, data) => state.newsData = data,
        setCategory: (state, data) => state.category = data,
        setCountry: (state, data) => state.country = data,
        loadingBind: (state) => state.loading = !state.loading,
        setQuery: (state, data) => state.q = data,
      }
    })
