webpackJsonp([0],{"++vR":function(t,i,e){"use strict";var n={name:"FulfillingSquareSpinner",props:{animationDuration:{type:Number,default:4e3},size:{type:Number,default:50},color:{type:String,default:"#fff"}},computed:{spinnerStyle:function(){return{height:this.size+"px",width:this.size+"px",borderColor:this.color}},spinnerInnerStyle:function(){return{backgroundColor:this.color}}}},s={render:function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"fulfilling-square-spinner",style:this.spinnerStyle},[i("div",{staticClass:"spinner-inner",style:this.spinnerInnerStyle})])},staticRenderFns:[]};e("VU/8")(n,s,!1,function(t){e("3mkf")},"data-v-96d5104c",null).exports},"+C3w":function(t,i){},"+efy":function(t,i){},"2kAG":function(t,i){},"3mkf":function(t,i){},"4bUk":function(t,i,e){"use strict";var n={name:"FulfillingBouncingCircleSpinner",props:{animationDuration:{type:Number,default:4e3},size:{type:Number,default:60},color:{type:String,default:"#fff"}},computed:{spinnerStyle:function(){return{height:this.size+"px",width:this.size+"px",animationDuration:this.animationDuration+"ms"}},orbitStyle:function(){return{height:this.size+"px",width:this.size+"px",borderColor:this.color,borderWidth:.03*this.size+"px",animationDuration:this.animationDuration+"ms"}},circleStyle:function(){return{height:this.size+"px",width:this.size+"px",borderColor:this.color,color:this.color,borderWidth:.1*this.size+"px",animationDuration:this.animationDuration+"ms"}}}},s={render:function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"fulfilling-bouncing-circle-spinner",style:this.spinnerStyle},[i("div",{staticClass:"circle",style:this.circleStyle}),this._v(" "),i("div",{staticClass:"orbit",style:this.orbitStyle})])},staticRenderFns:[]};e("VU/8")(n,s,!1,function(t){e("bGmX")},"data-v-44939cec",null).exports},AO3m:function(t,i,e){"use strict";var n={name:"OrbitSpinner",props:{animationDuration:{type:Number,default:1e3},size:{type:Number,default:50},color:{type:String,default:"#fff"}},computed:{spinnerStyle:function(){return{height:this.size+"px",width:this.size+"px"}},orbitStyle:function(){return{borderColor:this.color,animationDuration:this.animationDuration+"ms"}}}},s={render:function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"orbit-spinner",style:this.spinnerStyle},[i("div",{staticClass:"orbit one",style:this.orbitStyle}),this._v(" "),i("div",{staticClass:"orbit two",style:this.orbitStyle}),this._v(" "),i("div",{staticClass:"orbit three",style:this.orbitStyle})])},staticRenderFns:[]};e("VU/8")(n,s,!1,function(t){e("gJdE")},"data-v-325a6afe",null).exports},AyHC:function(t,i,e){"use strict";var n=e("woOf"),s=e.n(n),r={name:"FingerprintSpinner",props:{animationDuration:{type:Number,default:1500},size:{type:Number,default:60},color:{type:String,default:"#fff"}},data:function(){return{ringsNum:9,containerPadding:2}},computed:{outerRingSize:function(){return this.size-2*this.containerPadding},spinnerStyle:function(){return{height:this.size+"px",width:this.size+"px",padding:this.containerPadding+"px"}},ringStyle:function(){return{borderTopColor:this.color,animationDuration:this.animationDuration+"ms"}},ringsStyles:function(){for(var t=[],i=this.outerRingSize/this.ringsNum,e=i,n=1;n<=this.ringsNum;n++){var r=s()({animationDelay:50*n+"ms",height:i+(n-1)*e+"px",width:i+(n-1)*e+"px"},this.ringStyle);t.push(r)}return t}}},a={render:function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"fingerprint-spinner",style:this.spinnerStyle},this._l(this.ringsStyles,function(t,e){return i("div",{key:e,staticClass:"spinner-ring",style:t})}))},staticRenderFns:[]};e("VU/8")(r,a,!1,function(t){e("n9/I")},"data-v-f115833a",null).exports},"B+eG":function(t,i){},"BKK/":function(t,i,e){"use strict";var n=e("woOf"),s=e.n(n),r={name:"SelfBuildingSquareSpinner",props:{animationDuration:{type:Number,default:6e3},size:{type:Number,default:40},color:{type:String,default:"#fff"}},data:function(){return{squaresNum:9}},computed:{squareSize:function(){return this.size/4},initialTopPosition:function(){return 2*-this.squareSize/3},spinnerStyle:function(){return{top:-this.initialTopPosition+"px",height:this.size+"px",width:this.size+"px"}},squareStyle:function(){return{height:this.squareSize+"px",width:this.squareSize+"px",top:this.initialTopPosition+"px",marginRight:this.squareSize/3+"px",marginTop:this.squareSize/3+"px",animationDuration:this.animationDuration+"ms",background:this.color}},squaresStyles:function(){for(var t=[],i=[6,7,8,3,4,5,0,1,2],e=.05*this.animationDuration,n=0;n<this.squaresNum;n++)t.push(s()({animationDelay:e*i[n]+"ms"},this.squareStyle));return t}}},a={render:function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"self-building-square-spinner",style:this.spinnerStyle},this._l(this.squaresStyles,function(t,e){return i("div",{key:e,staticClass:"square",class:{clear:e&&e%3==0},style:t})}))},staticRenderFns:[]};e("VU/8")(r,a,!1,function(t){e("fkE1")},"data-v-2543d096",null).exports},BiGw:function(t,i){},DPDD:function(t,i){},HRM0:function(t,i){},"Hp/t":function(t,i){},"IXU+":function(t,i){},JT6S:function(t,i,e){"use strict";var n=e("woOf"),s=e.n(n),r={name:"CirclesToRhombusesSpinner",props:{animationDuration:{type:Number,default:1200},circleSize:{type:Number,default:15},color:{type:String,default:"#fff"},circlesNum:{type:Number,default:3}},computed:{circleMarginLeft:function(){return 1.125*this.circleSize},spinnertStyle:function(){return{height:this.circleSize+"px",width:(this.circleSize+this.circleMarginLeft)*this.circlesNum+"px"}},circleStyle:function(){return{borderColor:this.color,animationDuration:this.animationDuration+"ms",height:this.circleSize+"px",width:this.circleSize+"px",marginLeft:this.circleMarginLeft+"px"}},circlesStyles:function(){for(var t=[],i=1;i<=this.circlesNum;i++){var e=s()({animationDelay:150*i+"ms"},this.circleStyle);1===i&&(e.marginLeft=0),t.push(e)}return t}}},a={render:function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"circles-to-rhombuses-spinner",style:this.spinnertStyle},this._l(this.circlesStyles,function(t,e){return i("div",{key:e,staticClass:"circle",style:t})}))},staticRenderFns:[]};e("VU/8")(r,a,!1,function(t){e("B+eG")},"data-v-91571d3e",null).exports},KbxY:function(t,i){},Kf76:function(t,i){},NHnr:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var n=e("7+uW"),s=e("NYxO");n.a.use(s.a);var r=[{cat:"",display:"all"},{cat:"Business",display:"Business"},{cat:"Entertainment",display:"Entertainment"},{cat:"General",display:"General"},{cat:"Health",display:"Health"},{cat:"Science",display:"Science"},{cat:"Sports",display:"Sports"},{cat:"Technology",display:"Technology"}],a=[{short:"",full:"All"},{short:"de",full:"Germany"},{short:"gb",full:"United Kingdom"},{short:"pl",full:"Poland"},{short:"ru",full:"Russia"},{short:"hu",full:"Hungary"}],o=new s.a.Store({state:{perPage:20,category:"Business",country:"gb",q:"",newsData:[],loading:!1},mutations:{addNewsData:function(t,i){return t.newsData=i},setCategory:function(t,i){return t.category=i},setCountry:function(t,i){return t.country=i},loadingBind:function(t){return t.loading=!t.loading},setQuery:function(t,i){return t.q=i}},getters:{getFiveNewestNews:function(t){if(t.newsData.length>0)return t.newsData.slice(0,5)}}}),l=e("pyJd"),c={name:"News",components:{},props:{imgSrc:String,title:String,desc:String,auth:String,date:String,url:String},computed:{imageSource:function(){return null===this.imgSrc?"https://images.vexels.com/media/users/3/144609/raw/26930bcc86d4e5962ffe712cae931fc8-world-breaking-news-banner-header.jpg":this.imgSrc},dateTransform:function(){return this.date.slice(0,-10).replace(/T/," ")},backgroundImage:function(){return"background: url('"+this.imageSource+"') center no-repeat;background-size: cover"}}},u={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("a",{attrs:{href:t.url,target:"_blank"}},[e("div",{staticClass:"news"},[e("div",{staticClass:"news__image",style:t.backgroundImage}),t._v(" "),e("div",{staticClass:"news-content"},[e("p",{staticClass:"news-content__title"},[t._v(t._s(t.title))]),t._v(" "),t.auth?e("p",{staticClass:"news-content__auth"},[t._v(t._s("By "+t.auth+",")+"\r\n          "),e("span",[t._v(t._s("on "+t.dateTransform))])]):t._e()])])])},staticRenderFns:[]};var h=e("VU/8")(c,u,!1,function(t){e("+efy")},null,null).exports,p={name:"Section",components:{News:h,HalfCircleSpinner:l.a},data:function(){return{msg:"Welcome to Your Vue.js App"}},computed:{category:function(){return o.state.category},newsData:function(){return o.state.newsData},loading:function(){return o.state.loading}}},d={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"box has-text-centered"},[e("transition",{attrs:{name:"slide",mode:"out-in"}},[t.loading?e("half-circle-spinner",{staticClass:"spinner",attrs:{"animation-duration":1e3,size:60,color:"#080808"}}):t._e()],1),t._v(" "),e("transition",{attrs:{name:"slide",mode:"out-in"}},[t.loading?t._e():e("section",{staticClass:"section is-centered has-text-left"},[e("p",{staticClass:"title"},[t._v(t._s(t.category))]),t._v(" "),t._l(t.newsData,function(t,i){return e("div",{key:i,staticClass:"news-container"},[e("News",{attrs:{imgSrc:t.urlToImage,title:t.title,auth:t.author,date:t.publishedAt,desc:t.description,url:t.url}})],1)})],2)])],1)},staticRenderFns:[]};var m={name:"Menu",components:{},props:["fetchNews"],data:function(){return{category:"",country:"",categories:r,countries:a,menuShow:!0}},methods:{categoryBind:function(t){this.category=t.target.dataset.item,this.menuBind(),this.setCategory(),this.fetchNews()},countryBind:function(t){this.country=t.target.dataset.item,console.log(t.target),this.menuBind(),this.setCountry(),this.fetchNews()},setCategory:function(){o.commit("setCategory",this.category)},setCountry:function(){o.commit("setCountry",this.country)},menuBind:function(){this.menuShow=!this.menuShow}}},f={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("transition",{attrs:{name:"slide",mode:"out-in"}},[e("div",{staticClass:"menu-container"},[e("i",{staticClass:"fas fa-bars menu-button fa-lg",class:{"fa-times":!t.menuShow},on:{click:t.menuBind}}),t._v(" "),e("nav",{staticClass:"menu",class:{"menu--hide":t.menuShow}},[e("ul",{staticClass:"menu-list"},[e("p",{staticClass:"menu-label"},[t._v("\r\n    Categories\r\n  ")]),t._v(" "),t._l(t.categories,function(i,n){return e("li",{key:n,staticClass:"item",on:{click:t.categoryBind}},[e("a",{staticClass:"item__link",attrs:{"data-item":i.cat}},[t._v(t._s(i.display))])])})],2),t._v(" "),e("ul",{staticClass:"menu-list"},[e("p",{staticClass:"menu-label"},[t._v("\r\n    Countries\r\n  ")]),t._v(" "),t._l(t.countries,function(i,n){return e("li",{key:n,staticClass:"item",on:{click:t.countryBind}},[e("a",{staticClass:"item__link",attrs:{"data-item":i.short}},[t._v(t._s(i.full))])])})],2)])])])},staticRenderFns:[]};var y={name:"Lastest",components:{News:h},computed:{newsData:function(){if(console.log(o.state.newsData),o.state.newsData.length>0)return o.getters.getFiveNewestNews},imageSrc:function(){return this.newsData.map(function(t){var i=t.urlToImage;return null===i?"https://images.vexels.com/media/users/3/144609/raw/26930bcc86d4e5962ffe712cae931fc8-world-breaking-news-banner-header.jpg":i})}}},S={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("section",{staticClass:"section slider"},[e("carousel",{attrs:{perPage:1,paginationColor:"#f2f2f2",paginationActiveColor:"#07020D",autoplay:!0}},t._l(t.newsData,function(i,n){return e("slide",{key:n},[e("div",{staticClass:"slider-item"},[e("div",{staticClass:"gradient"}),t._v(" "),e("img",{attrs:{src:t.imageSrc[n]}}),t._v(" "),e("p",{staticClass:"slider-item__content"},[t._v(t._s(i.title))])])])}))],1)},staticRenderFns:[]};var g={name:"Search",components:{},props:["fetchNews"],data:function(){return{query:"",showInput:!1}},methods:{setQuery:function(){o.commit("setQuery",this.query),this.fetchNews()},searchBind:function(){this.showInput=!this.showInput}}},x={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",[e("i",{staticClass:"fas fa-search search-icon",on:{click:t.searchBind}}),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.query,expression:"query"}],staticClass:"search",class:{"search--hidden":!t.showInput},attrs:{type:"text",placeholder:"Search..."},domProps:{value:t.query},on:{keyup:t.setQuery,input:function(i){i.target.composing||(t.query=i.target.value)}}})])},staticRenderFns:[]};var z={name:"App",components:{Section:e("VU/8")(p,d,!1,function(t){e("IXU+")},"data-v-70df43ba",null).exports,Menu:e("VU/8")(m,f,!1,function(t){e("2kAG")},null,null).exports,Lastest:e("VU/8")(y,S,!1,function(t){e("Yt8M")},null,null).exports,Search:e("VU/8")(g,x,!1,function(t){e("tXM3")},null,null).exports,HalfCircleSpinner:l.a},store:o,methods:{getNews:function(){o.commit("loadingBind"),fetch("https://newsapi.org/v2/top-headlines?country="+this.$store.state.country+"&pagesize="+this.$store.state.perPage+"&category="+this.$store.state.category+"&q="+this.$store.state.q+"&apiKey=c70c6b881578467e8d65672d0783c383").then(function(t){return t.json()}).then(function(t){console.log(t),o.commit("addNewsData",t.articles),o.commit("loadingBind")})}},data:function(){return{loading:!0}},mounted:function(){this.getNews(),this.loading=!1}},v={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{attrs:{id:"app"}},[t.loading?e("div",{staticClass:"loading"},[t.loading?e("half-circle-spinner",{staticClass:"main-spinner",attrs:{"animation-duration":1e3,size:60,color:"#080808"}}):t._e()],1):t._e(),t._v(" "),e("div",{staticClass:"columns "},[e("div",{staticClass:"column is-12"},[e("header",{staticClass:"header"},[e("Menu",{attrs:{fetchNews:t.getNews}}),t._v(" "),e("Search",{attrs:{fetchNews:t.getNews}})],1)]),t._v(" "),e("div",{staticClass:"column is-11 is-offset-right-1 "},[e("main",[e("Lastest"),t._v(" "),e("Section")],1)])])])},staticRenderFns:[]};var b=e("VU/8")(z,v,!1,function(t){e("DPDD")},null,null).exports,w=e("/kJX"),C=e.n(w);n.a.use(s.a),n.a.use(C.a),n.a.config.productionTip=!1,new n.a({el:"#app",components:{App:b},template:"<App/>"})},NPbT:function(t,i,e){"use strict";var n=e("woOf"),s=e.n(n),r={name:"ScalingSquaresSpinner",props:{animationDuration:{type:Number,default:1250},size:{type:Number,default:65},color:{type:String,default:"#fff"}},data:function(){return{squaresNum:4}},computed:{spinnerStyle:function(){return{height:this.size+"px",width:this.size+"px",animationDuration:this.animationDuration+"ms"}},squareStyle:function(){return{height:.25*this.size/1.3+"px",width:.25*this.size/1.3+"px",animationDuration:this.animationDuration+"ms",borderWidth:.04*this.size/1.3+"px",borderColor:this.color}},squaresStyles:function(){for(var t=[],i=1;i<=this.squaresNum;i++)t.push(s()({},this.squareStyle));return t}}},a={render:function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"scaling-squares-spinner",style:this.spinnerStyle},this._l(this.squaresStyles,function(t,e){return i("div",{key:e,staticClass:"square",class:"square-"+(e+1),style:t})}))},staticRenderFns:[]};e("VU/8")(r,a,!1,function(t){e("zwmd")},"data-v-43f67b6f",null).exports},Oti5:function(t,i){},RLg3:function(t,i,e){"use strict";var n={name:"AtomSpinner",props:{animationDuration:{type:Number,default:1e3},size:{type:Number,default:60},color:{type:String,default:"red"}},computed:{spinnerStyle:function(){return{height:this.size+"px",width:this.size+"px"}},circleStyle:function(){return{color:this.color,fontSize:.24*this.size+"px"}},lineStyle:function(){return{animationDuration:this.animationDuration+"ms",borderLeftWidth:this.size/25+"px",borderTopWidth:this.size/25+"px",borderLeftColor:this.color}}}},s={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"atom-spinner",style:t.spinnerStyle},[e("div",{staticClass:"spinner-inner"},[e("div",{staticClass:"spinner-line",style:t.lineStyle}),t._v(" "),e("div",{staticClass:"spinner-line",style:t.lineStyle}),t._v(" "),e("div",{staticClass:"spinner-line",style:t.lineStyle}),t._v(" "),e("div",{staticClass:"spinner-circle",style:t.circleStyle},[t._v("\n      ●\n    ")])])])},staticRenderFns:[]};e("VU/8")(n,s,!1,function(t){e("dj1o")},"data-v-59f49670",null).exports},T1Pv:function(t,i){},T7Ne:function(t,i,e){"use strict";var n=e("woOf"),s=e.n(n),r={name:"BreedingRhombusSpinner",props:{animationDuration:{type:Number,default:2e3},size:{type:Number,default:150},color:{type:String,default:"#fff"}},data:function(){return{animationBaseName:"breeding-rhombus-spinner-animation-child",rhombusesNum:8}},computed:{spinnerStyle:function(){return{height:this.size+"px",width:this.size+"px"}},rhombusStyle:function(){return{height:this.size/7.5+"px",width:this.size/7.5+"px",animationDuration:this.animationDuration+"ms",top:this.size/2.3077+"px",left:this.size/2.3077+"px",backgroundColor:this.color}},rhombusesStyles:function(){for(var t=[],i=.05*this.animationDuration,e=1;e<=this.rhombusesNum;e++)t.push(s()({animationDelay:i*(e+1)+"ms"},this.rhombusStyle));return t},bigRhombusStyle:function(){return{height:this.size/3+"px",width:this.size/3+"px",animationDuration:""+this.animationDuration,top:this.size/3+"px",left:this.size/3+"px",backgroundColor:this.color}}}},a={render:function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"breeding-rhombus-spinner",style:this.spinnerStyle},[this._l(this.rhombusesStyles,function(t,e){return i("div",{key:e,staticClass:"rhombus",class:"child-"+(e+1),style:t})}),this._v(" "),i("div",{staticClass:"rhombus big",style:this.bigRhombusStyle})],2)},staticRenderFns:[]};e("VU/8")(r,a,!1,function(t){e("HRM0")},"data-v-7c827517",null).exports},UW5G:function(t,i,e){"use strict";var n=e("woOf"),s=e.n(n),r={name:"RadarSpinner",props:{animationDuration:{type:Number,default:2e3},size:{type:Number,default:110},color:{type:String,default:"#fff"}},data:function(){return{circlesNum:4}},computed:{borderWidth:function(){return 5*this.size/110},spinnerStyle:function(){return{height:this.size+"px",width:this.size+"px"}},circleStyle:function(){return{animationDuration:this.animationDuration+"ms"}},circleInnerContainerStyle:function(){return{borderWidth:this.borderWidth+"px"}},circleInnerStyle:function(){return{borderLeftColor:this.color,borderRightColor:this.color,borderWidth:this.borderWidth+"px"}},circlesStyles:function(){for(var t=[],i=.15*this.animationDuration,e=0;e<this.circlesNum;e++)t.push(s()({padding:2*this.borderWidth*e+"px",animationDelay:(e===this.circlesNum-1?0:i)+"ms"},this.circleStyle));return t}}},a={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"radar-spinner",style:t.spinnerStyle},t._l(t.circlesStyles,function(i,n){return e("div",{key:n,staticClass:"circle",style:i},[e("div",{staticClass:"circle-inner-container",style:t.circleInnerContainerStyle},[e("div",{staticClass:"circle-inner",style:t.circleInnerStyle})])])}))},staticRenderFns:[]};e("VU/8")(r,a,!1,function(t){e("xmE8")},"data-v-7ca7cfc9",null).exports},W5Az:function(t,i){},Wzot:function(t,i,e){"use strict";var n=e("Ht5Q"),s={name:"FlowerSpinner",props:{animationDuration:{type:Number,default:2500},size:{type:Number,default:70},color:{type:String,default:"#fff"}},data:function(){return{smallerDotAnimationBaseName:"flower-spinner-smaller-dot-animation",biggerDotAnimationBaseName:"flower-spinner-bigger-dot-animation",currentSmallerDotAnimationBaseName:"",currentBiggerDotAnimationBaseName:""}},computed:{dotSize:function(){return this.size/7},spinnerStyle:function(){return{width:this.size+"px",height:this.size+"px"}},dotsContainerStyle:function(){return{width:this.dotSize+"px",height:this.dotSize+"px"}},smallerDotStyle:function(){return{background:this.color,animationDuration:this.animationDuration+"ms",animationName:this.currentSmallerDotAnimationBaseName}},biggerDotStyle:function(){return{background:this.color,animationDuration:this.animationDuration+"ms",animationName:this.currentBiggerDotAnimationBaseName}}},watch:{$props:{handler:function(){this.updateAnimation()},deep:!0}},mounted:function(){this.updateAnimation()},methods:{updateAnimation:function(){this.updateAnimationName(),n.a.appendKeyframes(this.currentSmallerDotAnimationBaseName,this.generateSmallerDotKeyframes()),n.a.appendKeyframes(this.currentBiggerDotAnimationBaseName,this.generateBiggerDotKeyframes())},updateAnimationName:function(){this.currentSmallerDotAnimationBaseName=this.smallerDotAnimationBaseName+"-"+Date.now(),this.currentBiggerDotAnimationBaseName=this.biggerDotAnimationBaseName+"-"+Date.now()},generateSmallerDotKeyframes:function(){return"0%, 100% {\n                  box-shadow: 0 0 0 "+this.color+",\n                              0 0 0 "+this.color+",\n                              0 0 0 "+this.color+",\n                              0 0 0 "+this.color+",\n                              0 0 0 "+this.color+",\n                              0 0 0 "+this.color+",\n                              0 0 0 "+this.color+",\n                              0 0 0 "+this.color+";\n                }\n                25%, 75% {\n                  box-shadow: "+1.4*this.dotSize+"px 0 0 "+this.color+",\n                              -"+1.4*this.dotSize+"px 0 0 "+this.color+",\n                              0 "+1.4*this.dotSize+"px 0 "+this.color+",\n                              0 -"+1.4*this.dotSize+"px 0 "+this.color+",\n                              "+this.dotSize+"px -"+this.dotSize+"px 0 "+this.color+",\n                              "+this.dotSize+"px "+this.dotSize+"px 0 "+this.color+",\n                              -"+this.dotSize+"px -"+this.dotSize+"px 0 "+this.color+",\n                              -"+this.dotSize+"px "+this.dotSize+"px 0 "+this.color+";\n\n                }\n                100% {\n                  box-shadow: 0 0 0 "+this.color+",\n                              0 0 0 "+this.color+",\n                              0 0 0 "+this.color+",\n                              0 0 0 "+this.color+",\n                              0 0 0 "+this.color+",\n                              0 0 0 "+this.color+",\n                              0 0 0 "+this.color+",\n                              0 0 0 "+this.color+";\n                }"},generateBiggerDotKeyframes:function(){return"0%, 100% {\n                  box-shadow: 0 0 0 "+this.color+",\n                              0 0 0 "+this.color+",\n                              0 0 0 "+this.color+",\n                              0 0 0 "+this.color+",\n                              0 0 0 "+this.color+",\n                              0 0 0 "+this.color+",\n                              0 0 0 "+this.color+",\n                              0 0 0 "+this.color+";\n                }\n                50% {\n                  transform: rotate(180deg);\n                }\n                25%, 75% {\n                  box-shadow: "+2.6*this.dotSize+"px 0 0 "+this.color+",\n                              -"+2.6*this.dotSize+"px 0 0 "+this.color+",\n                              0 "+2.6*this.dotSize+"px 0 "+this.color+",\n                              0 -"+2.6*this.dotSize+"px 0 "+this.color+",\n                              "+1.9*this.dotSize+"px -"+1.9*this.dotSize+"px 0 "+this.color+",\n                              "+1.9*this.dotSize+"px "+1.9*this.dotSize+"px 0 "+this.color+",\n                              -"+1.9*this.dotSize+"px -"+1.9*this.dotSize+"px 0 "+this.color+",\n                              -"+1.9*this.dotSize+"px "+1.9*this.dotSize+"px 0 "+this.color+";\n\n                }\n                100% {\n                  transform: rotate(360deg);\n                  box-shadow: 0 0 0 "+this.color+",\n                              0 0 0 "+this.color+",\n                              0 0 0 "+this.color+",\n                              0 0 0 "+this.color+",\n                              0 0 0 "+this.color+",\n                              0 0 0 "+this.color+",\n                              0 0 0 "+this.color+",\n                              0 0 0 "+this.color+";\n                }"}}},r={render:function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"flower-spinner",style:this.spinnerStyle},[i("div",{staticClass:"dots-container",style:this.dotsContainerStyle},[i("div",{staticClass:"bigger-dot",style:this.biggerDotStyle},[i("div",{staticClass:"smaller-dot",style:this.smallerDotStyle})])])])},staticRenderFns:[]};e("VU/8")(s,r,!1,function(t){e("Kf76")},"data-v-7b1ad6b5",null).exports},YHML:function(t,i,e){"use strict";var n=e("woOf"),s=e.n(n),r={name:"HalfCircleSpinner",props:{animationDuration:{type:Number,default:1e3},size:{type:Number,default:60},color:{type:String,default:"#fff"}},computed:{spinnerStyle:function(){return{height:this.size+"px",width:this.size+"px"}},circleStyle:function(){return{borderWidth:this.size/10+"px",animationDuration:this.animationDuration+"ms"}},circle1Style:function(){return s()({borderTopColor:this.color},this.circleStyle)},circle2Style:function(){return s()({borderBottomColor:this.color},this.circleStyle)}}},a={render:function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"half-circle-spinner",style:this.spinnerStyle},[i("div",{staticClass:"circle circle-1",style:this.circle1Style}),this._v(" "),i("div",{staticClass:"circle circle-2",style:this.circle2Style})])},staticRenderFns:[]};var o=e("VU/8")(r,a,!1,function(t){e("Hp/t")},"data-v-31ad46aa",null);i.a=o.exports},YUx5:function(t,i,e){"use strict";var n=e("woOf"),s=e.n(n),r={name:"LoopingRhombusesSpinner",props:{animationDuration:{type:Number,default:2500},rhombusSize:{type:Number,default:15},color:{type:String,default:"#fff"}},data:function(){return{rhombusesNum:3}},computed:{spinnerStyle:function(){return{height:this.rhombusSize+"px",width:4*this.rhombusSize+"px"}},rhombusStyle:function(){return{height:this.rhombusSize+"px",width:this.rhombusSize+"px",backgroundColor:this.color,animationDuration:this.animationDuration+"ms",left:4*this.rhombusSize+"px"}},rhombusesStyles:function(){for(var t=[],i=-this.animationDuration/1.5,e=1;e<=this.rhombusesNum;e++){var n=s()({animationDelay:e*i+"ms"},this.rhombusStyle);t.push(n)}return t}}},a={render:function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"looping-rhombuses-spinner",style:this.spinnerStyle},this._l(this.rhombusesStyles,function(t,e){return i("div",{staticClass:"rhombus",style:t,attrs:{ikey:e}})}))},staticRenderFns:[]};e("VU/8")(r,a,!1,function(t){e("+C3w")},"data-v-0458ce94",null).exports},YeH7:function(t,i,e){"use strict";var n={name:"TrinityRingsSpinner",props:{animationDuration:{type:Number,default:1500},size:{type:Number,default:60},color:{type:String,default:"#fff"}},data:function(){return{containerPadding:3}},computed:{outerRingSize:function(){return this.size-2*this.containerPadding},spinnerStyle:function(){return{height:this.size+"px",width:this.size+"px",padding:this.containerPadding+"px"}},ring1Style:function(){return{height:this.outerRingSize+"px",width:this.outerRingSize+"px",borderColor:this.color,animationDuration:this.animationDuration+"ms"}},ring2Style:function(){return{height:.65*this.outerRingSize+"px",width:.65*this.outerRingSize+"px",borderColor:this.color,animationDuration:this.animationDuration+"ms"}},ring3Style:function(){return{height:.1*this.outerRingSize+"px",width:.1*this.outerRingSize+"px",borderColor:this.color,animationDuration:this.animationDuration+"ms"}}}},s={render:function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"trinity-rings-spinner",style:this.spinnerStyle},[i("div",{staticClass:"circle circle1",style:this.ring1Style}),this._v(" "),i("div",{staticClass:"circle circle2",style:this.ring2Style}),this._v(" "),i("div",{staticClass:"circle circle3",style:this.ring3Style})])},staticRenderFns:[]};e("VU/8")(n,s,!1,function(t){e("KbxY")},"data-v-65918846",null).exports},Yt8M:function(t,i){},bDSB:function(t,i){},bGmX:function(t,i){},dj1o:function(t,i){},eBYp:function(t,i,e){"use strict";var n=e("woOf"),s=e.n(n),r={name:"HollowDotsSpinner",props:{animationDuration:{type:Number,default:1e3},dotSize:{type:Number,default:15},dotsNum:{type:Number,default:3},color:{type:String,default:"#fff"}},computed:{horizontalMargin:function(){return this.dotSize/2},spinnerStyle:function(){return{height:this.dotSize+"px",width:(this.dotSize+2*this.horizontalMargin)*this.dotsNum+"px"}},dotStyle:function(){return{animationDuration:this.animationDuration+"ms",width:this.dotSize+"px",height:this.dotSize+"px",margin:"0 "+this.horizontalMargin+"px",borderWidth:this.dotSize/5+"px",borderColor:this.color}},dotsStyles:function(){for(var t=[],i=1;i<=this.dotsNum;i++){var e=s()({animationDelay:1e3*i*.3+"ms"},this.dotStyle);t.push(e)}return t}}},a={render:function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"hollow-dots-spinner",style:this.spinnerStyle},this._l(this.dotsStyles,function(t,e){return i("div",{key:e,staticClass:"dot",style:t})}))},staticRenderFns:[]};e("VU/8")(r,a,!1,function(t){e("T1Pv")},"data-v-6a541738",null).exports},fkE1:function(t,i){},gJdE:function(t,i){},kH5s:function(t,i,e){"use strict";var n=e("woOf"),s=e.n(n),r={name:"SemipolarSpinner",props:{animationDuration:{type:Number,default:2e3},size:{type:Number,default:65},color:{type:String,default:"#fff"}},data:function(){return{ringsNum:5}},computed:{spinnerStyle:function(){return{height:this.size+"px",width:this.size+"px"}},ringStyle:function(){return{animationDuration:this.animationDuration+"ms",borderTopColor:this.color,borderLeftColor:this.color}},ringsStyles:function(){for(var t=[],i=.05*this.size,e=2*i,n=.2*this.size,r=0;r<this.ringsNum;r++){var a=this.size-n*r+"px",o=e*r+"px",l=s()({animationDelay:.1*this.animationDuration*(this.ringsNum-r-1)+"ms",height:a,width:a,left:o,top:o,borderWidth:i+"px"},this.ringStyle);t.push(l)}return t}}},a={render:function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"semipolar-spinner",style:this.spinnerStyle},this._l(this.ringsStyles,function(t,e){return i("div",{key:e,staticClass:"ring",style:t})}))},staticRenderFns:[]};e("VU/8")(r,a,!1,function(t){e("BiGw")},"data-v-0f568b7c",null).exports},lhlx:function(t,i,e){"use strict";var n=e("Ht5Q"),s={name:"SpringSpinner",props:{animationDuration:{type:Number,default:3e3},size:{type:Number,default:70},color:{type:String,default:"#fff"}},data:function(){return{animationBaseName:"spring-spinner-animation",currentAnimationName:""}},computed:{spinnerStyle:function(){return{height:this.size+"px",width:this.size+"px"}},spinnerPartStyle:function(){return{height:this.size/2+"px",width:this.size+"px"}},rotatorStyle:function(){return{height:this.size+"px",width:this.size+"px",borderRightColor:this.color,borderTopColor:this.color,borderWidth:this.size/7+"px",animationDuration:this.animationDuration+"ms",animationName:this.currentAnimationName}}},watch:{$props:{handler:function(){this.updateAnimation()},deep:!0}},mounted:function(){this.updateAnimation()},methods:{updateAnimation:function(){this.updateAnimationName(),n.a.appendKeyframes(this.currentAnimationName,this.generateKeyframes())},updateAnimationName:function(){this.currentAnimationName=this.animationBaseName+"-"+Date.now()},generateKeyframes:function(){return"\n        0% {\n          border-width: "+this.size/7+"px;\n        }\n        25% {\n          border-width: "+this.size/23.33+"px;\n        }\n        50% {\n          transform: rotate(115deg);\n          border-width: "+this.size/7+"px;\n        }\n        75% {\n          border-width: "+this.size/23.33+"px;\n         }\n        100% {\n         border-width: "+this.size/7+"px;\n        }"}}},r={render:function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"spring-spinner",style:this.spinnerStyle},[i("div",{staticClass:"spring-spinner-part top",style:this.spinnerPartStyle},[i("div",{staticClass:"spring-spinner-rotator",style:this.rotatorStyle})]),this._v(" "),i("div",{staticClass:"spring-spinner-part bottom",style:this.spinnerPartStyle},[i("div",{staticClass:"spring-spinner-rotator",style:this.rotatorStyle})])])},staticRenderFns:[]};e("VU/8")(s,r,!1,function(t){e("qe+E")},"data-v-10ac9285",null).exports},"n9/I":function(t,i){},qHzf:function(t,i,e){"use strict";var n=e("woOf"),s=e.n(n),r={name:"SwappingSquaresSpinner",props:{animationDuration:{type:Number,default:1e3},size:{type:Number,default:65},color:{type:String,default:"#fff"}},data:function(){return{animationBaseName:"swapping-squares-animation-child",squaresNum:4}},computed:{spinnerStyle:function(){return{height:this.size+"px",width:this.size+"px"}},squareStyle:function(){return{height:.25*this.size/1.3+"px",width:.25*this.size/1.3+"px",animationDuration:this.animationDuration+"ms",borderWidth:.04*this.size/1.3+"px",borderColor:this.color}},squaresStyles:function(){for(var t=[],i=.5*this.animationDuration,e=1;e<=this.squaresNum;e++)t.push(s()({animationDelay:(e%2==0?i:0)+"ms"},this.squareStyle));return t}}},a={render:function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"swapping-squares-spinner",style:this.spinnerStyle},this._l(this.squaresStyles,function(t,e){return i("div",{key:e,staticClass:"square",class:"square-"+(e+1),style:t})}))},staticRenderFns:[]};e("VU/8")(r,a,!1,function(t){e("Oti5")},"data-v-b85b25de",null).exports},"qe+E":function(t,i){},tXM3:function(t,i){},vW50:function(t,i,e){"use strict";var n=e("woOf"),s=e.n(n),r={name:"IntersectingCirclesSpinner",props:{animationDuration:{type:Number,default:1200},size:{type:Number,default:70},color:{type:String,default:"#fff"}},computed:{circleSize:function(){return this.size/2},spinnerStyle:function(){return{width:this.size+"px",height:this.size+"px"}},spinnerBlockStyle:function(){return{animationDuration:this.animationDuration+"ms",width:this.circleSize+"px",height:this.circleSize+"px"}},circleStyle:function(){return{borderColor:this.color}},circleStyles:function(){var t=this;return[{top:0,left:0},{left:-.36*this.circleSize+"px",top:.2*this.circleSize+"px"},{left:-.36*this.circleSize+"px",top:-.2*this.circleSize+"px"},{left:0,top:-.36*this.circleSize+"px"},{left:.36*this.circleSize+"px",top:-.2*this.circleSize+"px"},{left:.36*this.circleSize+"px",top:.2*this.circleSize+"px"},{left:0,top:.36*this.circleSize+"px"}].map(function(i){return s()(i,t.circleStyle)})}}},a={render:function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"intersecting-circles-spinner",style:this.spinnerStyle},[i("div",{staticClass:"spinnerBlock",style:this.spinnerBlockStyle},this._l(this.circleStyles,function(t,e){return i("span",{key:e,staticClass:"circle",style:t})}))])},staticRenderFns:[]};e("VU/8")(r,a,!1,function(t){e("bDSB")},"data-v-72b5f8a9",null).exports},xmE8:function(t,i){},xrBC:function(t,i,e){"use strict";var n=e("Ht5Q"),s={name:"PixelSpinner",props:{animationDuration:{type:Number,default:1500},size:{type:Number,default:70},color:{type:String,default:"#fff"}},data:function(){return{animationBaseName:"pixel-spinner-animation",currentAnimationName:""}},computed:{pixelSize:function(){return this.size/7},spinnerStyle:function(){return{width:this.size+"px",height:this.size+"px"}},spinnerInnerStyle:function(){return{animationDuration:this.animationDuration+"ms",animationName:this.currentAnimationName,width:this.pixelSize+"px",height:this.pixelSize+"px",backgroundColor:this.color,color:this.color,boxShadow:"\n                      "+1.5*this.pixelSize+"px "+1.5*this.pixelSize+"px 0 0,\n                      "+-1.5*this.pixelSize+"px "+-1.5*this.pixelSize+"px 0 0,\n                      "+1.5*this.pixelSize+"px "+-1.5*this.pixelSize+"px 0 0,\n                      "+-1.5*this.pixelSize+"px "+1.5*this.pixelSize+"px 0 0,\n                      0 "+1.5*this.pixelSize+"px 0 0,\n                      "+1.5*this.pixelSize+"px 0 0 0,\n                      "+-1.5*this.pixelSize+"px 0 0 0,\n                      0 "+-1.5*this.pixelSize+"px 0 0\n                    "}}},watch:{$props:{handler:function(){this.updateAnimation()},deep:!0}},mounted:function(){this.updateAnimation()},methods:{updateAnimation:function(){this.updateAnimationName(),n.a.appendKeyframes(this.currentAnimationName,this.generateKeyframes())},updateAnimationName:function(){this.currentAnimationName=this.animationBaseName+"-"+Date.now()},generateKeyframes:function(){return"\n      50% {\n        box-shadow:  "+2*this.pixelSize+"px "+2*this.pixelSize+"px 0 0,\n                     "+-2*this.pixelSize+"px "+-2*this.pixelSize+"px 0 0,\n                     "+2*this.pixelSize+"px "+-2*this.pixelSize+"px 0 0,\n                     "+-2*this.pixelSize+"px "+2*this.pixelSize+"px 0 0,\n                     0 "+this.pixelSize+"px 0 0,\n                     "+this.pixelSize+"px 0 0 0,\n                     "+-1*this.pixelSize+"px 0 0 0,\n                     0 "+-1*this.pixelSize+"px 0 0;\n      }\n\n\n      75% {\n        box-shadow:  "+2*this.pixelSize+"px "+2*this.pixelSize+"px 0 0,\n                     "+-2*this.pixelSize+"px "+-2*this.pixelSize+"px 0 0,\n                     "+2*this.pixelSize+"px "+-2*this.pixelSize+"px 0 0,\n                     "+-2*this.pixelSize+"px "+2*this.pixelSize+"px 0 0,\n                     0 "+this.pixelSize+"px 0 0,\n                     "+this.pixelSize+"px 0 0 0,\n                     "+-1*this.pixelSize+"px 0 0 0,\n                     0 "+-1*this.pixelSize+"px 0 0;\n      }\n\n      100% {\n        transform: rotate(360deg);\n      }"}}},r={render:function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"pixel-spinner",style:this.spinnerStyle},[i("div",{staticClass:"pixel-spinner-inner",style:this.spinnerInnerStyle})])},staticRenderFns:[]};e("VU/8")(s,r,!1,function(t){e("W5Az")},"data-v-eeed2fb8",null).exports},zwmd:function(t,i){}},["NHnr"]);
//# sourceMappingURL=app.46ae932f65317cfbaa12.js.map