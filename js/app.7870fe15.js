(function(t){function e(e){for(var i,a,r=e[0],l=e[1],c=e[2],u=0,f=[];u<r.length;u++)a=r[u],n[a]&&f.push(n[a][0]),n[a]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(t[i]=l[i]);d&&d(e);while(f.length)f.shift()();return o.push.apply(o,c||[]),s()}function s(){for(var t,e=0;e<o.length;e++){for(var s=o[e],i=!0,r=1;r<s.length;r++){var l=s[r];0!==n[l]&&(i=!1)}i&&(o.splice(e--,1),t=a(a.s=s[0]))}return t}var i={},n={app:0},o=[];function a(e){if(i[e])return i[e].exports;var s=i[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,a),s.l=!0,s.exports}a.m=t,a.c=i,a.d=function(t,e,s){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(a.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)a.d(s,i,function(e){return t[e]}.bind(null,i));return s},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=e,r=r.slice();for(var c=0;c<r.length;c++)e(r[c]);var d=l;o.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("cd49")},"30a4":function(t,e,s){t.exports=s.p+"img/black-and-white.9d65767a.jpg"},"7faf":function(t,e,s){"use strict";var i=s("dc71"),n=s.n(i);n.a},"84c3":function(t,e,s){},"862e":function(t,e,s){t.exports=s.p+"img/onenorth.f59e1894.png"},a513:function(t,e,s){t.exports=s.p+"img/burnsmcd.5e4ec0a6.png"},b7db:function(t,e,s){t.exports=s.p+"img/youth-indicators-2.fe3acd27.png"},c219:function(t,e,s){"use strict";var i=s("84c3"),n=s.n(i);n.a},ca43:function(t,e,s){t.exports=s.p+"img/api-highways.02c98997.png"},cd49:function(t,e,s){"use strict";s.r(e);s("cadf"),s("551c"),s("f751"),s("097d");var i=s("2b0e"),n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{class:{"is-dark":t.isDark},attrs:{id:"app"}},[s("button",{staticClass:"toggle-dark",attrs:{title:"toggle dark mode"},on:{click:t.toggleDark}},[s("i",{staticClass:"material-icons"},[t._v("invert_colors")])]),s("router-view")],1)},o=[],a=s("d225"),r=s("b0b4"),l=s("308d"),c=s("6bb5"),d=s("4e2b"),u=s("9ab4"),f=s("60a3"),p=function(t){function e(){var t;return Object(a["a"])(this,e),t=Object(l["a"])(this,Object(c["a"])(e).apply(this,arguments)),t.isDark=!1,t}return Object(d["a"])(e,t),Object(r["a"])(e,[{key:"toggleDark",value:function(){this.isDark=!this.isDark}}]),e}(f["c"]);p=u["a"]([Object(f["a"])({})],p);var h=p,v=h,m=(s("7faf"),s("2877")),g=Object(m["a"])(v,n,o,!1,null,null,null),b=g.exports,_=s("0a89"),k=s.n(_),y=s("8c4f"),w=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"home",class:{loaded:t.loaded,compressed:t.compressed}},[t._m(0),s("div",{ref:"rightSide",staticClass:"right-panel",on:{scroll:t.handleScroll}},[s("div",{staticClass:"small-about slide",attrs:{id:"about"}},[s("p",[t._v("I build and create things. ")]),s("br"),s("p",[t._v(" Mainly websites. Some mobile apps. Data visualizations. Gardens. Music. Wood crafts. But I primarily concern myself with digital.")]),s("br"),s("p",[t._v("Front-end (Primarily Vuejs these days), Node, and .NET are my areas of expertise.")]),s("div",{staticClass:"small-about__next"},[s("button",{on:{click:function(e){return t.scrollTo(t.scrollLinks[1])}}},[t._v("View projects ")]),s("br"),s("i",{staticClass:"material-icons"},[t._v("arrow_downward")])])]),t._l(t.slides,function(t,e){return s("slide-component",{key:e,attrs:{slide:t}})}),s("div",{ref:"contact",staticClass:"project slide",attrs:{id:"contact"}},[s("h2",{staticClass:"slide__title"},[t._v("Contact")]),t._m(1)]),s("div",{staticClass:"scroll-buttons"},t._l(t.scrollLinks,function(e,i){return s("a",{key:i,class:{active:e.active},attrs:{href:"#"},on:{click:function(s){return t.scrollTo(e)}}})}),0)],2)])},j=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"left-panel"},[i("h1",{staticClass:"name"},[i("span",{staticClass:"first-name"},[t._v("E")]),i("span",{staticClass:"last-name"},[t._v("N")])]),i("img",{staticClass:"home-image",attrs:{src:s("30a4")}}),i("div",{staticClass:"social-links"},[i("a",{staticClass:"social-links_link",attrs:{target:"_blank",href:"https://github.com/manuelnelson/"}},[t._v("Github")]),i("a",{staticClass:"social-links_link",attrs:{target:"_blank",href:"https://www.linkedin.com/in/emmanuelnelson/"}},[t._v("LinkedIn")]),i("a",{staticClass:"social-links_link",attrs:{target:"_blank",href:"https://twitter.com/manuelnelson"}},[t._v("Twitter")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"slide__contact"},[s("p",[t._v("If you need software development help and would like to contact me, please contact me at:")]),s("a",{attrs:{href:"mailto:info@emmanuelnelson.com"}},[t._v("info@emmanuelnelson.com")])])}],T=(s("ac6a"),s("20d6"),function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{ref:t.slide.id,staticClass:"project slide",attrs:{id:t.slide.id}},[s("h2",{staticClass:"slide__title"},[t._v(t._s(t.slide.title))]),s("span",{staticClass:"slide__sub-title"},[t._v(t._s(t.slide.subTitle))]),s("div",{staticClass:"slide__images"},[s("div",{staticClass:"left"},[s("img",{staticClass:"gs",attrs:{src:t.slide.imageOne,alt:"youth indicators"}})]),s("div",{staticClass:"right"},[s("img",{staticClass:"gs",attrs:{src:t.slide.imageTwo,alt:"youth indicators"}})]),t.slide.link?s("a",{staticClass:"btn-primary slide__link",attrs:{target:"_blank",href:t.slide.link}},[t._v("View Site")]):t._e(),t.slide.links?s("div",{staticClass:"slide__links"},t._l(t.slide.links,function(e,i){return s("a",{key:i,staticClass:"btn-primary slide__link",attrs:{target:"_blank",href:e.url}},[t._v(t._s(e.text))])}),0):t._e()]),s("div",{staticClass:"slide__description"},[s("span",{staticClass:"slide__role"},[t._v(t._s(t.slide.role))]),s("p",[s("ul",{staticClass:"tools"},t._l(t.slide.tools,function(e,i){return s("li",{key:i},[t._v(t._s(e))])}),0)]),s("p",{domProps:{innerHTML:t._s(t.slide.description)}})])])}),O=[],C=function(t){function e(){return Object(a["a"])(this,e),Object(l["a"])(this,Object(c["a"])(e).apply(this,arguments))}return Object(d["a"])(e,t),Object(r["a"])(e,[{key:"mounted",value:function(){this.slide&&this.slide.id&&(this.slide.offsetTop=this.$refs[this.slide.id].offsetTop)}}]),e}(f["c"]);u["a"]([Object(f["b"])()],C.prototype,"slide",void 0),C=u["a"]([f["a"]],C);var S=C,x=S,N=Object(m["a"])(x,T,O,!1,null,"1005827a",null),A=N.exports,D=s("f13c"),M=s("f8c3"),E=s("b7db"),L=s("ca43"),I=s("f4d8"),P=s("a513"),$=s("862e"),V=function(t){function e(){var t;return Object(a["a"])(this,e),t=Object(l["a"])(this,Object(c["a"])(e).apply(this,arguments)),t.loaded=!1,t.compressed=!1,t.prevScrollTop=0,t.cancelScroll=!1,t.options={container:".right-panel",offset:-80},t.scrollLinks=[{id:"#about",active:!0,collapse:!0},{id:"#youth-indicators",active:!1,collapse:!1},{id:"#united-nations",active:!1,collapse:!1},{id:"#one-north",active:!1,collapse:!1},{id:"#contact",active:!1,collapse:!1}],t.slides=[{id:"youth-indicators",title:"U.N. Youth Indicators Application",subTitle:"Made in accordance with United Nations OSGEY",imageOne:M,imageTwo:E,role:"Architect, Designer, Developer",link:"https://youthindicators.herokuapp.com",tools:["Vuejs/Nuxtjs","UN Stats API","MongoDB backend"],description:"Entire project designed and developed by myself with guidance from UN OSGEY"},{id:"united-nations",title:"UN Foundation - APIHighways",subTitle:"Made in accordance with Global Partnership for Sustainable Development Data",imageOne:L,imageTwo:I,role:"Developer",link:"https://apihighways",tools:["Vuejs","Microservice Architecture","Kubernetes","MongoDB backend"],description:"Project originally started by Vizzuality, I took over as a solo developer to add new features and fix bugs"},{id:"one-north",title:"One North Interactive Websites",subTitle:"Made for One North",imageOne:$,imageTwo:P,links:[{url:"https://onenorth.com",text:"One North"},{url:"https://burnsmcd.com",text:"Burns McDonell"},{url:"https://taftlaw.com",text:"Taft Law"},{url:"https://plantemoran.com",text:"Plante Moran Website"},{url:"https://torys.com",text:"Torys Website"}],role:"Senior Developer",tools:["Vuejs/Angular","Sitecore","KeystoneJs",".NET","Azure"],description:"A sampling of projects developed entirely on my own (design and strategy not my own), other times on a team of developers.  Front-end and Back-end development"}],t}return Object(d["a"])(e,t),Object(r["a"])(e,[{key:"mounted",value:function(){var t=this;setTimeout(function(){t.loaded=!0},200)}},{key:"scrollTo",value:function(t){var e=this;if(!this.cancelScroll){this.cancelScroll=!0,this.compressed=!t.collapse,D.scrollTo(t.id,500,this.options);setTimeout(function(){e.cancelScroll=!1},900)}}},{key:"getActiveScrollNdx",value:function(){return this.scrollLinks.findIndex(function(t){return t.active})}},{key:"clearActiveScroll",value:function(){this.scrollLinks.forEach(function(t){t.active=!1})}},{key:"handleScroll",value:function(t){var e=this.getActiveScrollNdx(),s=this.slides[e],i=100;if(e!=this.scrollLinks.length-1)if(s&&s.offsetTop){if(t.target.scrollTop>s.offsetTop-i)return this.clearActiveScroll(),void(this.scrollLinks[e+1].active=!0)}else if(t.target.scrollTop>this.$refs.contact.offsetTop-i)return this.clearActiveScroll(),void(this.scrollLinks[e+1].active=!0);if(0!=e){var n=this.slides[e-1];n&&n.offsetTop&&t.target.scrollTop<n.offsetTop-i?(this.clearActiveScroll(),this.scrollLinks[e-1].active=!0):n||(n=this.$refs.contact,n&&n.offsetTop&&t.target.scrollTop<n.offsetTop-i&&(this.clearActiveScroll(),this.scrollLinks[e-1].active=!0))}!this.compressed&&t.target.scrollTop>40&&this.scrollTo(this.scrollLinks[1]),this.compressed&&t.target.scrollTop<40&&(this.compressed=!1)}},{key:"track",value:function(){this.$ga.page("/")}}]),e}(f["c"]);V=u["a"]([Object(f["a"])({components:{SlideComponent:A},metaInfo:function(){return{title:"Emmanuel Nelson | Home"}}})],V);var B=V,U=B,F=(s("c219"),Object(m["a"])(U,w,j,!1,null,null,null)),G=F.exports;i["default"].use(y["a"]);var z=new y["a"]({routes:[{path:"/",name:"home",component:G,meta:{title:"Test"}}]}),W=s("2f62");i["default"].use(W["a"]);var H=new W["a"].Store({state:{},mutations:{},actions:{}}),J=s("9483");Object(J["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});var K=s("0284").default;i["default"].use(K,{id:"UA-16657366-3"}),i["default"].config.productionTip=!1,i["default"].use(k.a,{keyName:"metaInfo",attribute:"data-vue-meta",ssrAttribute:"data-vue-meta-ssr",tagIDKeyName:"vmid"}),new i["default"]({router:z,store:H,render:function(t){return t(b)}}).$mount("#app")},dc71:function(t,e,s){},f4d8:function(t,e,s){t.exports=s.p+"img/api-highways-2.404744bf.png"},f8c3:function(t,e,s){t.exports=s.p+"img/youth-indicators.4c22ca12.png"}});
//# sourceMappingURL=app.7870fe15.js.map