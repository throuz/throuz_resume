(function(e){function t(t){for(var a,o,i=t[0],c=t[1],l=t[2],d=0,u=[];d<i.length;d++)o=i[d],Object.prototype.hasOwnProperty.call(s,o)&&s[o]&&u.push(s[o][0]),s[o]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);f&&f(t);while(u.length)u.shift()();return n.push.apply(n,l||[]),r()}function r(){for(var e,t=0;t<n.length;t++){for(var r=n[t],a=!0,i=1;i<r.length;i++){var c=r[i];0!==s[c]&&(a=!1)}a&&(n.splice(t--,1),e=o(o.s=r[0]))}return e}var a={},s={app:0},n=[];function o(t){if(a[t])return a[t].exports;var r=a[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=a,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(r,a,function(t){return e[t]}.bind(null,a));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/throuz_resume/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var f=c;n.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},3124:function(e,t,r){"use strict";var a=r("f148"),s=r.n(a);s.a},4678:function(e,t,r){var a={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function s(e){var t=n(e);return r(t)}function n(e){if(!r.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}s.keys=function(){return Object.keys(a)},s.resolve=n,e.exports=s,s.id="4678"},"4f9b":function(e,t,r){},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var a,s,n,o,i=r("2b0e"),c=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("div",{attrs:{id:"nav"}},[r("router-link",{attrs:{to:"/"},nativeOn:{click:function(t){return e.$scrollToTop(t)}}},[e._v("關於")]),r("router-link",{attrs:{to:"/portfolio"},nativeOn:{click:function(t){return e.$scrollToTop(t)}}},[e._v("作品")])],1),r("router-view"),r("div",{attrs:{id:"footer"}},[r("div",{attrs:{id:"link_gmail"}},[r("a",{attrs:{href:"mailto: zed2786328@gmail.com",target:"_blank",rel:"noopener noreferrer"}},[r("font-awesome-icon",{attrs:{icon:"envelope-square",size:"2x"}}),r("p",[e._v("zed2786328@gmail.com")])],1)]),r("div",{attrs:{id:"link"}},[r("a",{attrs:{href:"https://www.facebook.com/profile.php?id=100001001825337",target:"_blank",rel:"noopener noreferrer"}},[r("font-awesome-icon",{attrs:{icon:["fab","facebook-square"],size:"2x"}})],1),r("a",{attrs:{href:"https://twitter.com/throuz1",target:"_blank",rel:"noopener noreferrer"}},[r("font-awesome-icon",{attrs:{icon:["fab","twitter-square"],size:"2x"}})],1),r("a",{attrs:{href:"https://github.com/throuz",target:"_blank",rel:"noopener noreferrer"}},[r("font-awesome-icon",{attrs:{icon:["fab","github-square"],size:"2x"}})],1),r("a",{attrs:{href:"https://www.linkedin.com/in/%E5%8F%A1%E9%99%9E-%E5%BE%90-059b041aa/",target:"_blank",rel:"noopener noreferrer"}},[r("font-awesome-icon",{attrs:{icon:["fab","linkedin"],size:"2x"}})],1),r("a",{attrs:{href:"https://stackoverflow.com/users/13624245/throuz?tab=profile",target:"_blank",rel:"noopener noreferrer"}},[r("font-awesome-icon",{attrs:{icon:["fab","stack-overflow"],size:"2x"}})],1)]),r("p",[e._v("Copyright © 2020 徐叡陞 版權所有")])])],1)},l=[],f={name:"App"},d=f,u=(r("70b1"),r("2877")),b=Object(u["a"])(d,c,l,!1,null,"134ade86",null),p=b.exports,j=r("8c4f"),h=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"about"}},[e._m(0),e._m(1),r("div",{attrs:{id:"skill_box"}},[e._m(2),r("div",{attrs:{id:"bar_chart_box"}},[r("BarChart")],1),r("div",{attrs:{id:"bar_chart_box_rwd"}},[r("BarChart_rwd")],1)]),r("div",{attrs:{id:"link_pages"}},[r("router-link",{attrs:{to:"/portfolio"},nativeOn:{click:function(t){return e.$scrollToTop(t)}}},[e._v("看作品")])],1)])},m=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"introduction"}},[r("h1",[e._v("關於")]),r("p",[e._v(" 哈囉，我是徐叡陞。 "),r("br"),e._v("剛踏入前端沒多久，喜歡接受新知，對前端技術很感興趣。 "),r("br"),e._v("歡迎來到我的個人網站。 ")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"hr"}},[r("hr")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"expertise"}},[r("h1",[e._v("專長")]),r("p",[e._v(" - 使用 Vue CLI 開發網站 "),r("br"),e._v("- 以 Semantic Elements 建構 HTML 文件 "),r("br"),e._v("- 使用 SCSS 編寫 CSS "),r("br"),e._v("- ES6 與 jQuery 進行DOM操作 "),r("br"),e._v("- 運用 Bootstrap 4 與各種套件製作網頁 "),r("br"),e._v("- 獨立完成 RWD 網頁，且可實作 PWA "),r("br"),e._v("- 串接 API 資料 "),r("br"),e._v("- SEO 優化 "),r("br"),e._v("- GA 與 GSC 網站流量分析 "),r("br"),e._v("- 使用 github 進行版本控制 ")])])}],v=r("1fca"),g={extends:v["a"],mounted:function(){this.renderChart({labels:["HMTL5","CSS3","ES6","jQuery","Boostrap4","Vue.js","Illustrator","Photoshop"],datasets:[{label:"Data One",backgroundColor:"#42b983",data:[96,91,80,74,63,[0,50],49,45],barThickness:15}]},{responsive:!0,maintainAspectRatio:!1,title:{display:!0,text:"技能",fontColor:"#000",fontSize:25,fontFamily:"Microsoft JhengHei"},scales:{xAxes:[{gridLines:{display:!1},ticks:{display:!1}}],yAxes:[{gridLines:{display:!1},ticks:{fontColor:"#000",fontSize:20,fontFamily:"Microsoft JhengHei"}}]},legend:{display:!1},tooltips:{enabled:!1}})}},k=g,w=Object(u["a"])(k,a,s,!1,null,null,null),_=w.exports,y={extends:v["a"],mounted:function(){this.renderChart({labels:["HMTL5","CSS3","ES6","jQuery","Boostrap4","Vue.js","Illustrator","Photoshop"],datasets:[{label:"Data One",backgroundColor:"#42b983",data:[96,91,80,74,63,[0,50],49,45],barThickness:10}]},{responsive:!0,maintainAspectRatio:!1,title:{display:!0,text:"技能",fontColor:"#000",fontSize:20,fontFamily:"Microsoft JhengHei"},scales:{xAxes:[{gridLines:{display:!1},ticks:{display:!1}}],yAxes:[{gridLines:{display:!1},ticks:{fontColor:"#000",fontSize:15,fontFamily:"Microsoft JhengHei"}}]},legend:{display:!1},tooltips:{enabled:!1}})}},z=y,x=Object(u["a"])(z,n,o,!1,null,null,null),S=x.exports,O={name:"About",components:{BarChart:_,BarChart_rwd:S}},C=O,E=(r("fa71"),Object(u["a"])(C,h,m,!1,null,"57f48fd2",null)),A=E.exports,T=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"contact"}},[r("h1",[e._v("聯繫")]),r("div",{attrs:{id:"link_gmail"}},[r("a",{attrs:{href:"mailto: zed2786328@gmail.com",target:"_blank",rel:"noopener noreferrer"}},[r("font-awesome-icon",{attrs:{icon:"envelope-square",size:"3x"}}),r("p",[e._v("zed2786328@gmail.com")])],1)]),r("div",{attrs:{id:"link"}},[r("a",{attrs:{href:"https://www.facebook.com/profile.php?id=100001001825337",target:"_blank",rel:"noopener noreferrer"}},[r("font-awesome-icon",{attrs:{icon:["fab","facebook-square"],size:"3x"}})],1),r("a",{attrs:{href:"https://twitter.com/throuz1",target:"_blank",rel:"noopener noreferrer"}},[r("font-awesome-icon",{attrs:{icon:["fab","twitter-square"],size:"3x"}})],1),r("a",{attrs:{href:"https://github.com/throuz",target:"_blank",rel:"noopener noreferrer"}},[r("font-awesome-icon",{attrs:{icon:["fab","github-square"],size:"3x"}})],1),r("a",{attrs:{href:"https://www.linkedin.com/in/%E5%8F%A1%E9%99%9E-%E5%BE%90-059b041aa/",target:"_blank",rel:"noopener noreferrer"}},[r("font-awesome-icon",{attrs:{icon:["fab","linkedin"],size:"3x"}})],1),r("a",{attrs:{href:"https://stackoverflow.com/users/13624245/throuz?tab=profile",target:"_blank",rel:"noopener noreferrer"}},[r("font-awesome-icon",{attrs:{icon:["fab","stack-overflow"],size:"3x"}})],1)]),r("div",{attrs:{id:"link_pages"}},[r("router-link",{attrs:{to:"/"}},[e._v("關於我")]),r("router-link",{attrs:{to:"/portfolio"}},[e._v("看作品")])],1)])},P=[],$=(r("adb8"),{}),M=Object(u["a"])($,T,P,!1,null,"0c62c689",null),B=M.exports,q=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"portfolio"}},[r("h1",[e._v("作品")]),r("Swiper"),r("div",{attrs:{id:"link_pages"}},[r("router-link",{attrs:{to:"/"},nativeOn:{click:function(t){return e.$scrollToTop(t)}}},[e._v("關於我")])],1)],1)},D=[],H=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"example-3d"},[a("swiper",{staticClass:"swiper",attrs:{options:e.swiperOption}},[a("swiper-slide",[a("a",{attrs:{href:"https://throuz.github.io/group/",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:r("acb4"),alt:"works"}}),a("div",{staticClass:"description"},[a("h3",[e._v("民宿網站 - RWD 與 PWA 實作")]),a("p",[e._v("職訓課程的團體專題，我主要負責程式的編寫，使用 Boostrap 4 、Swiper、Hover.css、Aos 等套件建構網站，並且最後實作出 PWA。")])])])]),a("swiper-slide",[a("a",{attrs:{href:"https://throuz.github.io/group/",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:r("acb4"),alt:"works"}}),a("div",{staticClass:"description"},[a("h3",[e._v("民宿網站 - RWD 與 PWA 實作")]),a("p",[e._v("職訓課程的團體專題，我主要負責程式的編寫，使用 Boostrap 4 、Swiper、Hover.css、Aos 等套件建構網站，並且最後實作出 PWA。")])])])]),a("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],1)],1)},L=[],W=r("7212"),F=(r("a7a3"),{name:"swiper-example-3d-coverflow",title:"3D Coverflow effect",components:{Swiper:W["Swiper"],SwiperSlide:W["SwiperSlide"]},data:function(){return{swiperOption:{loop:!0,effect:"coverflow",grabCursor:!0,centeredSlides:!0,slidesPerView:1,coverflowEffect:{rotate:70,stretch:0,depth:100,modifier:1,slideShadows:!0},pagination:{el:".swiper-pagination"},breakpoints:{560:{slidesPerView:2}}}}}}),J=F,R=(r("3124"),Object(u["a"])(J,H,L,!1,null,"324972ec",null)),V=R.exports,I={name:"Portfolio",components:{Swiper:V}},Q=I,G=(r("7c3d"),Object(u["a"])(Q,q,D,!1,null,"a6fde602",null)),N=G.exports;i["default"].use(j["a"]);var U=[{path:"/",name:"About",component:A},{path:"/contact",name:"Contact",component:B},{path:"/portfolio",name:"Portfolio",component:N}],K=new j["a"]({routes:U}),X=K,Y=r("2f62");i["default"].use(Y["a"]);var Z=new Y["a"].Store({state:{},mutations:{},actions:{},modules:{}}),ee=r("ecee"),te=r("c074"),re=r("f2d1"),ae=r("ad3d");i["default"].config.productionTip=!1,ee["c"].add(te["a"],re["a"],re["e"],re["b"],re["c"],re["d"]),i["default"].component("font-awesome-icon",ae["a"]),i["default"].prototype.$scrollToTop=function(){return window.scrollTo(0,0)},new i["default"]({router:X,store:Z,render:function(e){return e(p)}}).$mount("#app")},"70b1":function(e,t,r){"use strict";var a=r("e767"),s=r.n(a);s.a},"7c3d":function(e,t,r){"use strict";var a=r("a53d"),s=r.n(a);s.a},a53d:function(e,t,r){},acb4:function(e,t,r){e.exports=r.p+"img/the_one.1a3fed79.png"},adb8:function(e,t,r){"use strict";var a=r("4f9b"),s=r.n(a);s.a},b3c0:function(e,t,r){},e767:function(e,t,r){},f148:function(e,t,r){},fa71:function(e,t,r){"use strict";var a=r("b3c0"),s=r.n(a);s.a}});
//# sourceMappingURL=app.7b6a49db.js.map