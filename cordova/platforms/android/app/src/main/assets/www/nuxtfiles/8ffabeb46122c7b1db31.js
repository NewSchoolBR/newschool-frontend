(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{279:function(t,e,o){var content=o(287);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(24).default)("5866f0f6",content,!0,{sourceMap:!1})},285:function(t,e,o){"use strict";var r={props:["title","backPage","route"],methods:{comeBackPage:function(){this.route?this.$router.push(this.route):this.$router.back()}}},n=(o(286),o(39)),c=o(43),l=o.n(c),d=o(272),h=o(267),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"head__bar"}},[t.backPage?o("v-btn",{staticClass:"btn-back",attrs:{text:"",icon:""},on:{click:t.comeBackPage}},[o("v-icon",[t._v("mdi-arrow-left")])],1):t._e(),t._v(" "),o("h1",{staticClass:"h1__theme"},[t._v(t._s(t.title))])],1)}),[],!1,null,"7bac864e",null);e.a=component.exports;l()(component,{VBtn:d.a,VIcon:h.a})},286:function(t,e,o){"use strict";var r=o(279);o.n(r).a},287:function(t,e,o){(e=o(23)(!1)).push([t.i,".h1__theme[data-v-7bac864e]{font-size:1.4444rem}#head__bar[data-v-7bac864e]{display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center;padding:1.2rem;position:relative;-webkit-box-align:center;align-items:center;background:transparent}[data-v-7bac864e] .btn-back .theme--light.v-icon{color:#60c;font-size:35px}[data-v-7bac864e] .btn-back{position:absolute;left:1rem}",""]),t.exports=e},316:function(t,e,o){var content=o(370);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(24).default)("c13e98ec",content,!0,{sourceMap:!1})},369:function(t,e,o){"use strict";var r=o(316);o.n(r).a},370:function(t,e,o){(e=o(23)(!1)).push([t.i,".wrapper__without__content[data-v-4ae53446]{opacity:.5;text-align:center}.wrapper__without__content .text__without__content[data-v-4ae53446]{color:#60c;text-transform:uppercase;font-size:3.5em;font-weight:400}.full__width[data-v-4ae53446]{width:100%}.full__height[data-v-4ae53446]{height:90%}",""]),t.exports=e},379:function(t,e,o){var content=o(673);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(24).default)("db89df38",content,!0,{sourceMap:!1})},409:function(t,e,o){"use strict";var r={name:"NothingToShow",props:{title:String,message:String}},n=(o(369),o(39)),c=o(43),l=o.n(c),d=o(728),h=o(412),_=o(730),component=Object(n.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"full__height"},[e("v-container",{staticClass:"wrapper__without__content full__height",attrs:{fluid:""}},[e("v-row",{staticClass:"full__height"},[e("v-col",{attrs:{cols:"12"}},[e("h1",{staticClass:"full__width text__without__content"},[this._v(this._s(this.title))]),this._v(" "),e("p",{staticClass:"full__width"},[this._v(this._s(this.message))])])],1)],1)],1)}),[],!1,null,"4ae53446",null);e.a=component.exports;l()(component,{VCol:d.a,VContainer:h.a,VRow:_.a})},672:function(t,e,o){"use strict";var r=o(379);o.n(r).a},673:function(t,e,o){(e=o(23)(!1)).push([t.i,"#page[data-v-60a56c6e]{height:100%}h1[data-v-60a56c6e]{font-size:.8rem;font-weight:600;width:55%}.container__list[data-v-60a56c6e]{margin-bottom:5rem}.card[data-v-60a56c6e]{height:8rem;margin:1.3rem;padding:.9rem;background:#fff;box-shadow:0 12px 20px 0 rgba(0,0,0,.14902);border-radius:5px;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column}.card[data-v-60a56c6e],.header__info[data-v-60a56c6e]{display:-webkit-box;display:flex;-webkit-box-pack:justify;justify-content:space-between}.header__info[data-v-60a56c6e]{-webkit-box-align:start;align-items:flex-start}[data-v-60a56c6e] .v-btn--icon.v-size--default{height:unset;color:#60c}.text__success[data-v-60a56c6e]{font-weight:400;color:#35de63;font-size:13px}.progress-linear[data-v-60a56c6e]{height:6px;border-radius:50px}#value__progress[data-v-60a56c6e]{color:#a9a9a9;padding-bottom:5px}#continue__text[data-v-60a56c6e]{font-size:smaller}",""]),t.exports=e},760:function(t,e,o){"use strict";o.r(e);o(129),o(34);var r=o(285),n=o(123),c=o(409),l={data:function(){return{loading:!0}},methods:{continueCourse:function(t){var e=this;this.loading=!0,n.a.getAll("".concat("api/v1/course-taken","/user/").concat(this.user.id,"/course/").concat(t.id)).then((function(o){e.$store.commit("courses/setCurrent",o.data.course),delete o.data.user,delete o.data.course,e.$store.commit("courses/setCurrentState",o.data),n.a.getAll("".concat("/api/v1/course-taken/current-step","/user/").concat(e.user.id,"/course/").concat(t.id)).then((function(o){"NEW_TEST"===o.data.type?(e.$store.commit("courses/setCurrentTest",o.data.data),$nuxt._router.push("/aluno/curso/".concat(t.id,"/aula/parte/teste"))):(e.$store.commit("courses/setCurrentPart",o.data.data),$nuxt._router.push("/aluno/curso/".concat(t.id,"/aula/parte")))}))}))},goToCourse:function(t){if("COMPLETED"===t.status){var e=t.course.slug?t.course.slug:this.convertToSlug(t.course.title);$nuxt._router.push("/aluno/curso/".concat(e))}else this.continueCourse(t.course)},convertToSlug:function(t){t=(t=t.replace(/^\s+|\s+$/g,"")).toLowerCase();for(var e="ãàáäâẽèéëêìíïîõòóöôùúüûñç·/_,:;",i=0,o=e.length;i<o;i++)t=t.replace(new RegExp(e.charAt(i),"g"),"aaaaaeeeeeiiiiooooouuuunc------".charAt(i));return t=t.replace(/[^a-z0-9 -]/g,"").replace(/\s+/g,"-").replace(/-+/g,"-")}},computed:{courses:function(){return this.$store.state.courses.list},user:function(){return this.$store.state.user.data}},mounted:function(){var t=this;setTimeout((function(){t.loading=!1}),400)},components:{HeaderBar:r.a,NothingToShow:c.a},asyncData:function(t){var e=t.store;t.data,t.params,t.$axios;return n.a.getAll("".concat("api/v1/course-taken/user/").concat(e.state.user.data.id)).then((function(t){return e.commit("courses/set",t.data)}))}},d=(o(672),o(39)),h=o(43),_=o.n(h),v=o(272),f=o(267),m=o(117),x=o(298),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("div",{directives:[{name:"show",rawName:"v-show",value:!t.loading,expression:"!loading"}],attrs:{id:"page"}},[o("HeaderBar",{attrs:{title:"Meus Cursos",backPage:!0}}),t._v(" "),t.courses.length?o("div",{staticClass:"container__list"},t._l(t.courses,(function(e){return o("div",{key:e.course.id,staticClass:"card",on:{click:function(o){return t.goToCourse(e)}}},[o("div",{staticClass:"header__info"},[o("h1",[t._v(t._s(e.course.title))]),t._v(" "),"TAKEN"===e.status?o("v-btn",{staticClass:"btn-back",attrs:{text:"",icon:""},on:{click:function(o){return t.continueCourse(e.course)}}},[o("p",{attrs:{id:"continue__text"}},[t._v("\n              CONTINUAR\n              "),o("v-icon",[t._v("mdi-arrow-right")])],1)]):o("p",{staticClass:"text__success"},[t._v("CONCLUÍDO")])],1),t._v(" "),o("div",{staticClass:"progress"},[o("p",{attrs:{id:"value__progress"}},[t._v(t._s(e.completion)+"%")]),t._v(" "),o("v-progress-linear",{attrs:{value:e.completion,height:"7",rounded:"true"}})],1)])})),0):o("NothingToShow",{attrs:{title:"Vixe :/",message:"Você não começou nenhum curso."}})],1),t._v(" "),t.loading?o("div",[o("div",{staticClass:"container-spinner"},[o("v-progress-circular",{attrs:{size:70,width:5,indeterminate:"",color:"#6600cc"}})],1)]):t._e()])}),[],!1,null,"60a56c6e",null);e.default=component.exports;_()(component,{VBtn:v.a,VIcon:f.a,VProgressCircular:m.a,VProgressLinear:x.a})}}]);