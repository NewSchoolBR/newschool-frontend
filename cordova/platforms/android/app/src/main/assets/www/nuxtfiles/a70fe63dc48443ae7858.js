(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{1033:function(t,e,n){"use strict";n.r(e);var o={components:{HeaderBar:n(302).a},computed:{slug:function(){return this.$route.params.courseSlug}},methods:{goToChallenge:function(){this.$router.push("/aluno/curso/".concat(this.slug,"/challenge"))}}},c=(n(926),n(39)),r=n(928),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"challenge__content"},[o("HeaderBar",{attrs:{route:"/aluno/curso/"+t.slug}}),t._v(" "),o("h1",{staticClass:"congratulations__text"},[t._v("Parabéns!!!")]),t._v(" "),t._m(0),t._v(" "),o("div",{staticClass:"challenge"},[o("img",{staticClass:"challenge__image",attrs:{src:n(609),alt:""}})]),t._v(" "),o("div",{staticClass:"btn__container"},[o("button",{staticClass:"btn-block btn-primary",on:{click:t.goToChallenge}},[t._v("\n      SO VAMO!\n    ")])])],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"share__achievement"},[e("p",[this._v("\n      Parça... Da hora que você chegou até aqui. Agora a gente tem um desafio\n      pra você! Tá preparado?.\n    ")])])}],!1,null,"16bcfed1",null);"function"==typeof r.default&&Object(r.default)(component);e.default=component.exports},297:function(t,e,n){var content=n(304);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(29).default)("79745966",content,!0,{sourceMap:!1})},302:function(t,e,n){"use strict";var o={props:["title","backPage","route"],methods:{comeBackPage:function(){this.route?this.$router.push(this.route):this.$router.back()}}},c=(n(303),n(39)),r=n(43),l=n.n(r),d=n(289),h=n(288),component=Object(c.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"head__bar"}},[e("v-btn",{staticClass:"btn-back",attrs:{text:"",icon:""},on:{click:this.comeBackPage}},[e("v-icon",[this._v("mdi-arrow-left")])],1),this._v(" "),e("h1",{staticClass:"h1__theme"},[this._v(this._s(this.title))])],1)}),[],!1,null,"7719e329",null);e.a=component.exports;l()(component,{VBtn:d.a,VIcon:h.a})},303:function(t,e,n){"use strict";var o=n(297);n.n(o).a},304:function(t,e,n){(e=n(28)(!1)).push([t.i,"*[data-v-7719e329]{font-family:Roboto,sans-serif}.h1__theme[data-v-7719e329]{font-size:1rem;line-height:1.2;font-weight:900;text-align:center;padding:0 2.5rem!important}#head__bar[data-v-7719e329]{display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center;padding:1.5rem 0;position:relative;-webkit-box-align:center;align-items:center;background:transparent}[data-v-7719e329] .btn-back .theme--light.v-icon{color:var(--primary);font-size:35px}[data-v-7719e329] .btn-back{position:absolute;left:1rem}",""]),t.exports=e},609:function(t,e,n){t.exports=n.p+"img/957d8eb.svg"},644:function(t,e,n){var content=n(927);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(29).default)("51dfee95",content,!0,{sourceMap:!1})},645:function(t,e){},926:function(t,e,n){"use strict";var o=n(644);n.n(o).a},927:function(t,e,n){(e=n(28)(!1)).push([t.i,"@import url(https://fonts.googleapis.com/css2?family=Lato&display=swap);"]),e.push([t.i,"#close-btn[data-v-16bcfed1]{position:absolute;right:20px;top:50px;cursor:pointer;font-size:30px}.mdi-close-circle[data-v-16bcfed1]:before{color:var(--primary);width:20px;height:20px;z-index:9999999}.congratulations__text[data-v-16bcfed1]{font-weight:900;font-size:32px;text-align:center;color:#8c40d9}.share__achievement[data-v-16bcfed1]{margin:40px auto 60px}.share__achievement p[data-v-16bcfed1]{font-size:16px;line-height:19px;padding:0 30px;text-align:center;letter-spacing:.08em;color:#1a1a1a}.btn__container[data-v-16bcfed1]{text-align:center}.btn-block[data-v-16bcfed1]{width:90%;padding:10px auto;font-size:16px;font-weight:700;position:absolute;bottom:40px;right:5%;left:5%}h3[data-v-16bcfed1]{font-weight:900;font-size:1em;line-height:normal;color:var(--primary)}h3[data-v-16bcfed1],h4[data-v-16bcfed1]{text-align:center}h4[data-v-16bcfed1]{font-weight:500;padding-top:1em;color:#656565;font-size:14px}.challenge[data-v-16bcfed1]{text-align:center}.challenge__image[data-v-16bcfed1]{width:139px;height:139px;margin:0 auto}@media (min-width:480px){.challenge__content[data-v-16bcfed1]{top:0;height:100vh}.messages[data-v-16bcfed1]{margin-top:-12%}.btn-block[data-v-16bcfed1]{width:96%;padding:5px auto}#page[data-v-16bcfed1]{height:100vh;overflow:hidden}}",""]),t.exports=e},928:function(t,e,n){"use strict";var o=n(645),c=n.n(o);e.default=c.a}}]);