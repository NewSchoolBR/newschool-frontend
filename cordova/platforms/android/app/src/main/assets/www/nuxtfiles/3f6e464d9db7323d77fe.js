(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{1023:function(t,M,e){"use strict";e.r(M);e(8);var o=e(3),n=(e(145),e(14),e(36),e(663)),c=e(44),I={components:{CourseCard:n.a},data:function(){return{title:"Bem-vindo",loading:!0,filtro:"",notifications:"",userPoints:""}},computed:{courseList:function(){return this.$store.state.courses.all},user:function(){return this.$store.state.user.data},userName:function(){return this.user.name.split(" ")[0]},filteredList:function(){if(this.filtro){var t=new RegExp(this.filtro.trim(),"i");return this.courseList.filter((function(M){return t.test(M.title)}))}return this.courseList}},mounted:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function M(){return regeneratorRuntime.wrap((function(M){for(;;)switch(M.prev=M.next){case 0:return M.next=2,t.$store.dispatch("courses/refreshAllCourses");case 2:return M.next=4,t.$store.dispatch("courses/refreshMyCourses");case 4:return M.next=6,t.getNotifications();case 6:return M.next=8,t.getUserScore();case 8:t.loading=!1;case 9:case"end":return M.stop()}}),M)})))()},methods:{goTo:function(path){$nuxt._router.push("/aluno/".concat(path))},getNotifications:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function M(){return regeneratorRuntime.wrap((function(M){for(;;)switch(M.prev=M.next){case 0:return M.next=2,c.a.getAll("".concat("api/v1/notification","/user/").concat(t.user.id));case 2:t.notifications=M.sent.data;case 3:case"end":return M.stop()}}),M)})))()},getUserScore:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function M(){return regeneratorRuntime.wrap((function(M){for(;;)switch(M.prev=M.next){case 0:return M.next=2,c.a.getAll("".concat("/api/v1/gamefication/ranking","/user/").concat(t.user.id,"?timeRange=YEAR"));case 2:t.userPoints=M.sent.data.points;case 3:case"end":return M.stop()}}),M)})))()}}},r=(e(872),e(39)),N=e(43),D=e.n(N),j=e(509),x=e(320),d=e(129),A=e(294),l=e(331),component=Object(r.a)(I,(function(){var t=this,M=t.$createElement,o=t._self._c||M;return t.loading?o("div",[o("div",{staticClass:"container-spinner"},[o("v-progress-circular",{attrs:{size:70,width:5,indeterminate:"",color:"#6600cc"}})],1)]):o("div",{attrs:{id:"page"}},[o("v-col",{attrs:{id:"main-col"}},[o("v-row",{attrs:{justify:"end"}},[o("img",{staticClass:"header_img",attrs:{src:e(537)},on:{click:function(M){return t.goTo("ranking")}}}),t._v(" "),o("img",{attrs:{id:"bell",src:e(834)("./"+(t.notifications.length?"bell":"bell-home-colorized")+".svg")},on:{click:function(M){return t.goTo("notificacao")}}}),t._v(" "),o("div",{staticClass:"notification__number__container"},[t.notifications.length?o("div",{staticClass:"notification__number"},[o("p",{class:t.notifications.length<10?"notification__low_text":"notification__text"},[t._v("\n            "+t._s(t.notifications.length)+"\n          ")])]):t._e()])]),t._v(" "),o("v-row",{attrs:{id:"header",align:"center"}},[o("v-avatar",{attrs:{size:"55"}},[t.user.photo?o("img",{staticClass:"user__image",attrs:{src:t.user.photo},on:{click:function(M){return t.goTo("perfil")}}}):o("img",{attrs:{src:e(335)},on:{click:function(M){return t.goTo("perfil")}}})]),t._v(" "),o("v-col",[o("h1",{staticClass:"welcome-title"},[t._v("\n          "+t._s("Salve, "+t.userName+"!")+"\n        ")]),t._v(" "),o("h1",{staticClass:"welcome-subtitle"},[t._v("Seja bem-vindo")])]),t._v(" "),o("h1",{staticClass:"xp"},[t._v(t._s(t.userPoints||0)+" NC")])],1),t._v(" "),o("v-text-field",{staticClass:"search-field",attrs:{label:"Encontre Cursos",outlined:"","prepend-inner-icon":"mdi-magnify",autocomplete:"off"},model:{value:t.filtro,callback:function(M){t.filtro=M},expression:"filtro"}}),t._v(" "),o("p",{attrs:{id:"title"}},[t._v("Cursos")]),t._v(" "),t._l(t.filteredList,(function(t){return o("course-card",{key:t.id,attrs:{course:t}})}))],2)],1)}),[],!1,null,"497dadf6",null);M.default=component.exports;D()(component,{VAvatar:j.a,VCol:x.a,VProgressCircular:d.a,VRow:A.a,VTextField:l.a})},313:function(t,M,e){"use strict";var o=e(4),n=e(2);var c=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"value",M=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"change";return n.default.extend({name:"proxyable",model:{prop:t,event:M},props:Object(o.a)({},t,{required:!1}),data:function(){return{internalLazyValue:this[t]}},computed:{internalValue:{get:function(){return this.internalLazyValue},set:function(t){t!==this.internalLazyValue&&(this.internalLazyValue=t,this.$emit(M,t))}}},watch:Object(o.a)({},t,(function(t){this.internalLazyValue=t}))})}();M.a=c},335:function(t,M){t.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIiByeD0iMTYiIGZpbGw9IiNFMEU3RUMiLz4KPHBhdGggZD0iTTE1Ljg5MjggMTYuMjAyNUMxNy41MzQgMTYuMjAyNSAxOC44NjMzIDE0Ljg3MzIgMTguODYzMyAxMy4yMzIxQzE4Ljg2MzMgMTEuNTkwOSAxNy41MzQgMTAuMjYxNiAxNS44OTI4IDEwLjI2MTZDMTQuMjUxNyAxMC4yNjE2IDEyLjkyMjQgMTEuNTkwOSAxMi45MjI0IDEzLjIzMjFDMTIuOTIyNCAxNC44NzMyIDE0LjI1MTcgMTYuMjAyNSAxNS44OTI4IDE2LjIwMjVaTTE1Ljg5MjggMTcuNjg3OEMxMy45MSAxNy42ODc4IDkuOTUxOSAxOC42ODI5IDkuOTUxOSAyMC42NTgyVjIyLjE0MzVIMjEuODMzOFYyMC42NTgyQzIxLjgzMzggMTguNjgyOSAxNy44NzU2IDE3LjY4NzggMTUuODkyOCAxNy42ODc4WiIgZmlsbD0iIzYyNkQ3NCIvPgo8L3N2Zz4K"},349:function(t,M,e){t.exports=e.p+"img/acfb19d.svg"},353:function(t,M,e){var content=e(539);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(29).default)("d25e6302",content,!0,{sourceMap:!1})},537:function(t,M){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAVCAYAAACpF6WWAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJRSURBVHgBtVTNahNRFP7OzcSYJmg0CCqJTNulCO3GdQb3moULd23xAewb1LxBXkCb6FYQihsX0glU6EIwoJQu/BlJEGmwxCLR/DDXc++YNjO5g63QD84M9/x8c8839x7CBGRrtQTCJgyQ37ch97dNIfiAk3Tgjtck30+QJOdyyNxeOCmp2EMTPXQP12wlNg8SDVCmiTgMDmJDSDCpz/WKh/lEsA3U6QYeIn2rbiwaMuHXHd2nCaM819/n+hHq4512WUfbmO33NaHsNDQhqQYH+CcsNtXygonQbz8D+h29JGUHgeEMh68a2Ai5YKcSFX4vybeR3YoUROEukLoULlSEl2FGAnf46QrW0sWXCx4nb6L/Lhclpsx8yCWzCESLQD7GEr+W2epB+OnNLrbmbPS3nk9lD7j9dAHIzwdiGTS1Wljj1mt4k3ZpBTVLe38mgRfXgR3u6x6LVjx3VJFbhGBSdU79wkdQL0xIe6x2Y6aE1xlgN8WeVqSRT3ngSfg8ktrlZJszEdIHV4BHXLd79tA3rU67r47PCo4BCc77Zk35hSmZrlVrXOEguCEmeOq+Ww7raICIKQIVqy4VqrOafND08KujzqgmSziYnRwgwNG9D5MSVZBILEYTFDl6rkc/+Cftw4uQ/SUUqqvK2DEWpEIbGzpZlssOTgThEDx1K5sSxfKxy9R4lC8h5bp51k59BqcAKy4gP6/aHF3Wi2HTltkPwMW2PXzFI44xEqilHfPpiCVFEusIBjgPER5i2d+Qg7bNra3psNSTzajh/7dPOB8X+gOPaL2miIadfgAAAABJRU5ErkJggg=="},538:function(t,M,e){"use strict";var o=e(353);e.n(o).a},539:function(t,M,e){(M=e(28)(!1)).push([t.i,"@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&display=swap);"]),M.push([t.i,"*[data-v-4254f818]{font-family:Roboto,sans-serif}.footer-card[data-v-4254f818]{display:-webkit-box;display:flex;-webkit-box-pack:justify;justify-content:space-between;-webkit-box-align:end;align-items:flex-end}.v-responsive.v-image[data-v-4254f818]{padding-top:45%;height:150px;position:relative;width:100%;border-radius:5px}.v-card-body[data-v-4254f818]{margin-bottom:20px}.v-card__title[data-v-4254f818]{font-weight:700;font-size:.75rem;padding:8px 0 0;line-height:16px;color:#1a1a1a}.theme--light.v-card .v-card__subtitle[data-v-4254f818]{padding:0;color:#1a1a1a;font-size:10px;line-height:11.72px}",""]),t.exports=M},543:function(t,M,e){t.exports=e.p+"img/3514e81.svg"},548:function(t,M,e){t.exports=e.p+"img/e174f7b.svg"},551:function(t,M,e){t.exports=e.p+"img/9f35d81.svg"},557:function(t,M,e){t.exports=e.p+"img/2b6daa1.svg"},562:function(t,M,e){t.exports=e.p+"img/4fd7b31.svg"},566:function(t,M,e){t.exports=e.p+"img/7857f17.svg"},573:function(t,M,e){t.exports=e.p+"img/06c8dcd.svg"},583:function(t,M,e){t.exports=e.p+"img/1bc8199.svg"},584:function(t,M,e){t.exports=e.p+"img/1cb01ee.svg"},590:function(t,M,e){t.exports=e.p+"img/4c9b9bd.svg"},605:function(t,M,e){t.exports=e.p+"img/e654a82.svg"},607:function(t,M,e){t.exports=e.p+"img/6f8c220.svg"},609:function(t,M,e){t.exports=e.p+"img/957d8eb.svg"},610:function(t,M,e){t.exports=e.p+"img/eec6aee.svg"},611:function(t,M){t.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iOCIgY3k9IjgiIHI9IjgiIGZpbGw9IiM2N0Q0QzciLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMC4yMzcgNS43NjI5M0MxMC4zOTE1IDUuOTE3MzcgMTAuMzkxNSA2LjE2Nzc2IDEwLjIzNyA2LjMyMjJMNi4zMjIwOCAxMC4yMzcxQzYuMTY3NjQgMTAuMzkxNiA1LjkxNzI0IDEwLjM5MTYgNS43NjI4IDEwLjIzNzFDNS42MDgzNiAxMC4wODI3IDUuNjA4MzYgOS44MzIzMSA1Ljc2MjggOS42Nzc4N0w5LjY3Nzc1IDUuNzYyOTJDOS44MzIxOSA1LjYwODQ4IDEwLjA4MjYgNS42MDg0OCAxMC4yMzcgNS43NjI5M1oiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNS43NjI4IDUuNzYyOTNDNS45MTcyNCA1LjYwODQ4IDYuMTY3NjQgNS42MDg0OCA2LjMyMjA4IDUuNzYyOTJMMTAuMjM3IDkuNjc3ODdDMTAuMzkxNSA5LjgzMjMxIDEwLjM5MTUgMTAuMDgyNyAxMC4yMzcgMTAuMjM3MUMxMC4wODI2IDEwLjM5MTYgOS44MzIxOSAxMC4zOTE2IDkuNjc3NzUgMTAuMjM3MUw1Ljc2MjggNi4zMjIyQzUuNjA4MzYgNi4xNjc3NiA1LjYwODM2IDUuOTE3MzcgNS43NjI4IDUuNzYyOTNaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K"},612:function(t,M,e){t.exports=e.p+"img/673fea0.svg"},613:function(t,M,e){t.exports=e.p+"img/26ddc60.svg"},614:function(t,M){t.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjUiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNSAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTIwIC0yLjExMzE1ZS0wN0MyMi43NjE0IC05LjQ2MDllLTA4IDI1IDIuMjM4NTggMjUgNUwyNSAxOUMyNSAyMS43NjE0IDIyLjc2MTQgMjQgMjAgMjRMNS4xNzc1NyAyNEMyLjQxNjE0IDI0IDAuMTc3NTY5IDIxLjc2MTQgMC4xNzc1NjkgMTlMMC4xNzc1NyA1QzAuMTc3NTcgMi4yMzg1NyAyLjQxNjE1IC05LjU0NDY0ZS0wNyA1LjE3NzU3IC04LjM3NzU4ZS0wN0wyMCAtMi4xMTMxNWUtMDdaIiBmaWxsPSIjNjYwMENDIiBmaWxsLW9wYWNpdHk9IjAuMSIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTE2LjcyNiAxMkMxNi43MjYgMTMuMSAxNy42NTY4IDE0IDE4Ljc5NDUgMTRDMTkuOTMyMiAxNCAyMC44NjMgMTMuMSAyMC44NjMgMTJDMjAuODYzIDEwLjkgMTkuOTMyMiAxMCAxOC43OTQ1IDEwQzE3LjY1NjggMTAgMTYuNzI2IDEwLjkgMTYuNzI2IDEyWk0xNC42NTc0IDEyQzE0LjY1NzQgMTAuOSAxMy43MjY2IDEwIDEyLjU4ODkgMTBDMTEuNDUxMiAxMCAxMC41MjA0IDEwLjkgMTAuNTIwNCAxMkMxMC41MjA0IDEzLjEgMTEuNDUxMiAxNCAxMi41ODg5IDE0QzEzLjcyNjYgMTQgMTQuNjU3NCAxMy4xIDE0LjY1NzQgMTJaTTYuMzgzMjkgMTBDNy41MjA5OCAxMCA4LjQ1MTgyIDEwLjkgOC40NTE4MiAxMkM4LjQ1MTgyIDEzLjEgNy41MjA5OCAxNCA2LjM4MzI5IDE0QzUuMjQ1NTkgMTQgNC4zMTQ3NSAxMy4xIDQuMzE0NzUgMTJDNC4zMTQ3NSAxMC45IDUuMjQ1NTkgMTAgNi4zODMyOSAxMFoiIGZpbGw9IiM2NjAwQ0MiLz4KPC9zdmc+Cg=="},615:function(t,M,e){t.exports=e.p+"img/b037bfc.svg"},616:function(t,M,e){var content=e(873);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(29).default)("2f9e2eb2",content,!0,{sourceMap:!1})},663:function(t,M,e){"use strict";e(8);var o=e(3),n=(e(508),{name:"CourseCard",props:{course:{type:Object,required:!0}},computed:{user:function(){return this.$store.state.user}},methods:{openCourse:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function M(){return regeneratorRuntime.wrap((function(M){for(;;)switch(M.prev=M.next){case 0:return M.next=2,t.$store.commit("courses/setCurrent",t.course);case 2:"ADMIN"==t.user.data.role?$nuxt._router.push("/admin/curso/".concat(t.course.slug)):$nuxt._router.push("/aluno/curso/".concat(t.course.slug));case 3:case"end":return M.stop()}}),M)})))()}}}),c=(e(538),e(39)),I=e(43),r=e.n(I),N=e(327),D=e(314),j=e(513),component=Object(c.a)(n,(function(){var t=this,M=t.$createElement,e=t._self._c||M;return e("v-card",{staticClass:"v-card-body",attrs:{elevation:"0",color:"transparent"},on:{click:function(M){return t.openCourse()}}},[e("v-img",{attrs:{src:t.course.capa.url}}),t._v(" "),e("v-card-title",[t._v(t._s(t.course.titulo))]),t._v(" "),e("div",{staticClass:"footer-card"},[e("v-card-subtitle",{staticClass:"mt-0"},[t._v(t._s(t.course.nomeDoAutor))])],1)],1)}),[],!1,null,"4254f818",null);M.a=component.exports;r()(component,{VCard:N.a,VCardSubtitle:D.b,VCardTitle:D.d,VImg:j.a})},834:function(t,M,e){var map={"./Ellipse 7.svg":835,"./Ellipse 8.svg":836,"./Ellipse 9.svg":837,"./NS-Logo-vertical.svg":566,"./OPS.svg":838,"./Vector (1).svg":839,"./add.svg":840,"./arrow_down.svg":841,"./background-fire.svg":842,"./background_signup.svg":607,"./bell-home-active.svg":843,"./bell-home-colorized.svg":844,"./bell-home.svg.svg":845,"./bell.svg":846,"./book.svg":583,"./bronze-medal 1.svg":847,"./bronze.svg":848,"./btn-voltar.svg":849,"./cenografia.svg":850,"./challenge.svg":609,"./congrats.svg":610,"./construction.svg":548,"./contablie.svg":851,"./contact-us.svg":551,"./cross-button.svg":611,"./deleteandupdate.svg":852,"./face-notify.svg":853,"./facebookIcon.svg":854,"./finish_signup.svg":605,"./first-bg.svg":855,"./forgout.svg":557,"./fotografia.svg":856,"./gabs-small.svg":612,"./gabs.svg":857,"./happy.svg":613,"./instagram-purple.svg":858,"./instagramIcon.svg":859,"./linkedin-notify.svg":860,"./logo.svg":562,"./matematica.svg":861,"./medalha-imagem.svg":590,"./more_vert_24px.svg":614,"./page-404.svg":543,"./person.svg":335,"./photo.svg":862,"./purple-logo.svg":573,"./security.svg":349,"./semearLogo.svg":615,"./share.svg":863,"./silver-medal 1.svg":864,"./silver-medal.svg":865,"./snackbar-error.svg":198,"./snackbar-success.svg":197,"./snackbar-warning.svg":199,"./tiktokIcon.svg":866,"./trophy 1.svg":867,"./trophy.svg":584,"./twitter-notify.svg":868,"./twitterIcon.svg":869,"./whats-notify.svg":870,"./winner.svg":871};function o(t){var M=n(t);return e(M)}function n(t){if(!e.o(map,t)){var M=new Error("Cannot find module '"+t+"'");throw M.code="MODULE_NOT_FOUND",M}return map[t]}o.keys=function(){return Object.keys(map)},o.resolve=n,t.exports=o,o.id=834},835:function(t,M,e){t.exports=e.p+"img/8197cad.svg"},836:function(t,M,e){t.exports=e.p+"img/d6286aa.svg"},837:function(t,M,e){t.exports=e.p+"img/115ff2e.svg"},838:function(t,M,e){t.exports=e.p+"img/d71c1fe.svg"},839:function(t,M){t.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNyIgaGVpZ2h0PSIxMSIgdmlld0JveD0iMCAwIDcgMTEiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0zLjE5MTk4IDAuMzg5OTU0QzQuNzU1MTUgMC4zODk5NTQgNi4wNzU4NSAxLjQ1NDYgNi4wNzU4NSAzLjA3MTczQzYuMDc1ODUgNS45NjkwOCAxLjcwOTYxIDYuOTEyMzggMS43MDk2MSA4LjQ2MjEyVjguOTc0MjNINS42NzE1QzUuOTE0MDggOC45NzQyMyA2LjE0MzE4IDkuMjU3MjQgNi4xNDMxOCA5LjU5NDE1QzYuMTQzMTggOS45MzEwNyA1LjkxNDA4IDEwLjI0MSA1LjY3MTUgMTAuMjQxSDAuODc0MDY0QzAuNjA0NTMyIDEwLjI0MSAwLjI0MDcyMyAxMC4wNTI0IDAuMjQwNzIzIDkuNzY5MjlWOC40NjIwNkMwLjI0MDcyMyA2LjI3ODk4IDQuNjQ3NDUgNS4xODc0OSA0LjY0NzQ1IDMuMTEyMUM0LjY0NzQ1IDIuNDUxODEgNC4yMTYyNiAxLjY5NzEyIDMuMTkyMSAxLjY5NzEyQzIuNDM3NDcgMS42OTcxMiAxLjgzMTAyIDIuMTE0ODQgMS44MzEwMiAzLjAzMTI0QzEuODMxMDIgMy4zMDA3NyAxLjU0Nzk1IDMuNTcwMzEgMS4wNzYzOSAzLjU3MDMxQzAuNjk5MDQ0IDMuNTcwMzEgMC40Mjk1NyAzLjM4MTYzIDAuNDI5NTcgMi43NzUyNUMwLjQyOTMzNiAxLjMzMzMxIDEuNzIzMDkgMC4zODk5NTQgMy4xOTE5OCAwLjM4OTk1NFoiIGZpbGw9IiNGOUFDMzAiLz4KPC9zdmc+Cg=="},840:function(t,M,e){t.exports=e.p+"img/777d03a.svg"},841:function(t,M){t.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOCIgaGVpZ2h0PSI2IiB2aWV3Qm94PSIwIDAgOCA2IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBkPSJNNy4wNiAwLjUyOTc4NUw0IDMuNTgzMTJMMC45NCAwLjUyOTc4NUwwIDEuNDY5NzlMNCA1LjQ2OTc5TDggMS40Njk3OUw3LjA2IDAuNTI5Nzg1WiIgZmlsbD0iIzNGM0Q1NiIvPgo8L3N2Zz4K"},842:function(t,M,e){t.exports=e.p+"img/3c6991f.svg"},843:function(t,M){t.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaWRZTWlkIG1lZXQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3R5bGU9Ii1tcy10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7Ij48cGF0aCBkPSJNMTggMTZ2LTVjMC0zLjA3LTEuNjQtNS42NC00LjUtNi4zMlY0YzAtLjgzLS42OC0xLjUtMS41MS0xLjVTMTAuNSAzLjE3IDEwLjUgNHYuNjhDNy42MyA1LjM2IDYgNy45MiA2IDExdjVsLTEuMyAxLjI5Yy0uNjMuNjMtLjE5IDEuNzEuNyAxLjcxaDEzLjE3Yy44OSAwIDEuMzQtMS4wOC43MS0xLjcxTDE4IDE2em0tNi4wMSA2YzEuMSAwIDItLjkgMi0yaC00YTIgMiAwIDAgMCAyIDJ6TTYuNzcgNC43M2MuNDItLjM4LjQzLTEuMDMuMDMtMS40M2ExIDEgMCAwIDAtMS4zOS0uMDJhMTAuNDI0IDEwLjQyNCAwIDAgMC0zLjI3IDYuMDZjLS4wOS42MS4zOCAxLjE2IDEgMS4xNmMuNDggMCAuOS0uMzUuOTgtLjgzYTguNDQgOC40NCAwIDAgMSAyLjY1LTQuOTR6TTE4LjYgMy4yOGMtLjQtLjM3LTEuMDItLjM2LTEuNC4wMmMtLjQuNC0uMzggMS4wNC4wMyAxLjQyYzEuMzggMS4yNyAyLjM1IDMgMi42NSA0Ljk0Yy4wNy40OC40OS44My45OC44M2MuNjEgMCAxLjA5LS41NS45OS0xLjE2Yy0uMzgtMi4zNy0xLjU1LTQuNDgtMy4yNS02LjA1eiIgZmlsbD0icmdiKDEwNCwwLDIwMSkiLz48cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9InJnYmEoMCwgMCwgMCwgMCkiIC8+PC9zdmc+"},844:function(t,M,e){t.exports=e.p+"img/8f8eed7.svg"},845:function(t,M){t.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaWRZTWlkIG1lZXQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3R5bGU9Ii1tcy10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7Ij48cGF0aCBkPSJNMTIgMjJhMi45OCAyLjk4IDAgMCAwIDIuODE4LTJIOS4xODJBMi45OCAyLjk4IDAgMCAwIDEyIDIyem03LTcuNDE0VjEwYzAtMy4yMTctMi4xODUtNS45MjctNS4xNDUtNi43NDJDMTMuNTYyIDIuNTIgMTIuODQ2IDIgMTIgMnMtMS41NjIuNTItMS44NTUgMS4yNThDNy4xODUgNC4wNzQgNSA2Ljc4MyA1IDEwdjQuNTg2bC0xLjcwNyAxLjcwN0EuOTk2Ljk5NiAwIDAgMCAzIDE3djFhMSAxIDAgMCAwIDEgMWgxNmExIDEgMCAwIDAgMS0xdi0xYS45OTYuOTk2IDAgMCAwLS4yOTMtLjcwN0wxOSAxNC41ODZ6IiBmaWxsPSJyZ2IoMTAyLDAsMjA0KSIvPjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0icmdiYSgwLCAwLCAwLCAwKSIgLz48L3N2Zz4="},846:function(t,M,e){t.exports=e.p+"img/54c8df3.svg"},847:function(t,M,e){t.exports=e.p+"img/6e5c022.svg"},848:function(t,M,e){t.exports=e.p+"img/ece4441.svg"},849:function(t,M){t.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE2IDdIMy44M0w5LjQyIDEuNDFMOCAwTDAgOEw4IDE2TDkuNDEgMTQuNTlMMy44MyA5SDE2VjdaIiBmaWxsPSIjNjYwMENDIi8+Cjwvc3ZnPgo="},850:function(t,M,e){t.exports=e.p+"img/82d7401.svg"},851:function(t,M,e){t.exports=e.p+"img/f2ad0d9.svg"},852:function(t,M,e){t.exports=e.p+"img/15491a7.svg"},853:function(t,M){t.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiByeD0iNSIgZmlsbD0iIzE4NzdGMiIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTIwLjcyNTkgMjcuMjMxN1YxOS42MTVIMjIuODI4NUwyMy4xMDcxIDE2Ljk5MDJIMjAuNzI1OUwyMC43Mjk1IDE1LjY3NjVDMjAuNzI5NSAxNC45OTE5IDIwLjc5NDUgMTQuNjI1MSAyMS43Nzc4IDE0LjYyNTFIMjMuMDkyMlYxMkgyMC45ODk0QzE4LjQ2MzUgMTIgMTcuNTc0NSAxMy4yNzMzIDE3LjU3NDUgMTUuNDE0NlYxNi45OTA1SDE2VjE5LjYxNTNIMTcuNTc0NVYyNy4yMzE3SDIwLjcyNTlaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K"},854:function(t,M){t.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTYiIGhlaWdodD0iNTciIHZpZXdCb3g9IjAgMCA1NiA1NyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3QgeT0iMC42NDIzMzQiIHdpZHRoPSI1NS42NDcxIiBoZWlnaHQ9IjU1LjY0NzEiIHJ4PSI1IiBmaWxsPSIjMTg3N0YyIi8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMzEuMjE2MSA1Ni44MzU1VjM1LjA1OTlIMzcuMjI3MUwzOC4wMjM3IDI3LjU1NTlIMzEuMjE2MUwzMS4yMjYzIDIzLjhDMzEuMjI2MyAyMS44NDI5IDMxLjQxMjIgMjAuNzk0MiAzNC4yMjMzIDIwLjc5NDJIMzcuOTgxMlYxMy4yODkzSDMxLjk2OTNDMjQuNzQ4IDEzLjI4OTMgMjIuMjA2MyAxNi45Mjk2IDIyLjIwNjMgMjMuMDUxM1YyNy41NTY3SDE3LjcwNTFWMzUuMDYwN0gyMi4yMDYzVjU2LjgzNTVIMzEuMjE2MVoiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPgo="},855:function(t,M,e){t.exports=e.p+"img/62f0b26.svg"},856:function(t,M,e){t.exports=e.p+"img/2b5db1c.svg"},857:function(t,M,e){t.exports=e.p+"img/340d766.svg"},858:function(t,M){t.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTciIGhlaWdodD0iMTciIHZpZXdCb3g9IjAgMCAxNyAxNyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTExLjk1ODggMUg1LjA0MTJDMi44MDkwOSAxIDEgMi44MDk0MiAxIDUuMDQxMlYxMS45NTg4QzEgMTQuMTkwOSAyLjgwOTQyIDE2IDUuMDQxNTIgMTZIMTEuOTU4NUMxNC4xOTA2IDE2IDE2IDE0LjE5MDYgMTYgMTEuOTU4NVY1LjA0MTJDMTYgMi44MDkwOSAxNC4xOTA5IDEgMTEuOTU4OCAxWiIgc3Ryb2tlPSIjNzAxMENGIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIvPgo8cGF0aCBkPSJNOC40OTk5NCAxMkMxMC40MzI5IDEyIDExLjk5OTkgMTAuNDMzIDExLjk5OTkgOC41MDAwM0MxMS45OTk5IDYuNTY3MDMgMTAuNDMyOSA1LjAwMDAzIDguNDk5OTQgNS4wMDAwM0M2LjU2Njk0IDUuMDAwMDMgNC45OTk5NCA2LjU2NzAzIDQuOTk5OTQgOC41MDAwM0M0Ljk5OTk0IDEwLjQzMyA2LjU2Njk0IDEyIDguNDk5OTQgMTJaIiBzdHJva2U9IiM3MDEwQ0YiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIi8+CjxwYXRoIGQ9Ik0xMi43NTAxIDUuMDAwMDNDMTMuMTY0MyA1LjAwMDAzIDEzLjUwMDEgNC42NjQyNCAxMy41MDAxIDQuMjUwMDNDMTMuNTAwMSAzLjgzNTgyIDEzLjE2NDMgMy41MDAwMyAxMi43NTAxIDMuNTAwMDNDMTIuMzM1OCAzLjUwMDAzIDEyLjAwMDEgMy44MzU4MiAxMi4wMDAxIDQuMjUwMDNDMTIuMDAwMSA0LjY2NDI0IDEyLjMzNTggNS4wMDAwMyAxMi43NTAxIDUuMDAwMDNaIiBmaWxsPSIjNzAxMENGIi8+Cjwvc3ZnPgo="},859:function(t,M,e){t.exports=e.p+"img/5707c88.svg"},860:function(t,M){t.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiByeD0iNSIgZmlsbD0iIzAwNzdCNSIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTE0LjgwMjcgMTYuNTY0MUgxMC4yNzAzVjMwLjE4MjFIMTQuODAyN1YxNi41NjQxWiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNS4wOTkgMTIuMzUyMkMxNS4wNjk2IDExLjAxNyAxNC4xMTQ3IDEwIDEyLjU2NDIgMTBDMTEuMDEzNyAxMCAxMCAxMS4wMTcgMTAgMTIuMzUyMkMxMCAxMy42NTk4IDEwLjk4MzcgMTQuNzA2MSAxMi41MDU0IDE0LjcwNjFIMTIuNTM0M0MxNC4xMTQ3IDE0LjcwNjEgMTUuMDk5IDEzLjY1OTggMTUuMDk5IDEyLjM1MjJaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTMxLjE0NDggMjIuMzc0OEMzMS4xNDQ4IDE4LjE5MTkgMjguOTA4OCAxNi4yNDUxIDI1LjkyNjIgMTYuMjQ1MUMyMy41MTk4IDE2LjI0NTEgMjIuNDQyNCAxNy41NjY5IDIxLjg0MDggMTguNDk0MVYxNi41NjUzSDE3LjMwNzlDMTcuMzY3NiAxNy44NDMxIDE3LjMwNzkgMzAuMTgzMyAxNy4zMDc5IDMwLjE4MzNIMjEuODQwOFYyMi41Nzc5QzIxLjg0MDggMjIuMTcwOSAyMS44NzAzIDIxLjc2NDkgMjEuOTkwMSAyMS40NzM1QzIyLjMxNzcgMjAuNjYwNCAyMy4wNjM1IDE5LjgxODUgMjQuMzE1NyAxOS44MTg1QzI1Ljk1NjUgMTkuODE4NSAyNi42MTIzIDIxLjA2NzMgMjYuNjEyMyAyMi44OTczVjMwLjE4M0gzMS4xNDQ2TDMxLjE0NDggMjIuMzc0OFoiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPgo="},861:function(t,M,e){t.exports=e.p+"img/88185d9.svg"},862:function(t,M,e){t.exports=e.p+"img/b495951.svg"},863:function(t,M,e){t.exports=e.p+"img/8bdaa55.svg"},864:function(t,M,e){t.exports=e.p+"img/58ef3de.svg"},865:function(t,M,e){t.exports=e.p+"img/bdedd6c.svg"},866:function(t,M,e){t.exports=e.p+"img/9a0946f.svg"},867:function(t,M,e){t.exports=e.p+"img/2c7f3eb.svg"},868:function(t,M,e){t.exports=e.p+"img/a4caedf.svg"},869:function(t,M,e){t.exports=e.p+"img/dc2ec1c.svg"},870:function(t,M,e){t.exports=e.p+"img/ce77ead.svg"},871:function(t,M,e){t.exports=e.p+"img/a0363b2.svg"},872:function(t,M,e){"use strict";var o=e(616);e.n(o).a},873:function(t,M,e){(M=e(28)(!1)).push([t.i,"@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&display=swap);"]),M.push([t.i,"*[data-v-497dadf6]{font-family:Roboto,sans-serif}#main-col[data-v-497dadf6]{padding:20px 24px 50px;max-width:700px}[data-v-497dadf6] .row{width:100%;margin:0}.user__image[data-v-497dadf6]{-o-object-fit:cover;object-fit:cover}#title[data-v-497dadf6]{color:var(--primary);line-height:16.4px;font-weight:900;font-size:.9rem;margin-bottom:16px}.header_img[data-v-497dadf6]{width:24px;height:24px;margin-right:20px}.notification__number[data-v-497dadf6]{height:11px;width:11px;border-radius:50px;background:linear-gradient(157.23deg,#d63305 8.86%,#cf3004 38.81%,#bc2602 82.43%,#b72401 90.69%);position:absolute;right:5px;top:13px}.notification__text[data-v-497dadf6]{right:1px}.notification__low_text[data-v-497dadf6],.notification__text[data-v-497dadf6]{color:#fff;font-size:8px;position:absolute;top:.4px}.notification__low_text[data-v-497dadf6]{right:3px}#bell[data-v-497dadf6]{color:#737373;width:24px;height:24px;margin-right:5px}#header[data-v-497dadf6]{height:auto;padding-bottom:20px;border-bottom:1px solid rgba(0,0,0,.05)}.welcome[data-v-497dadf6]{padding-left:1rem;display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-pack:center;justify-content:center}h1[data-v-497dadf6]{font-size:1.5rem;line-height:24px}.xp[data-v-497dadf6],h1[data-v-497dadf6]{font-weight:900}.xp[data-v-497dadf6]{font-size:1rem;color:#1a1a1a;-webkit-box-flex:center;flex:center}.notification__number__container[data-v-497dadf6]{max-width:700px;position:relative}.welcome-title[data-v-497dadf6]{color:#1a1a1a;font-size:.87rem;font-weight:900}.welcome-subtitle[data-v-497dadf6]{line-height:10px;color:var(--primary);font-size:.75rem;font-weight:500;font-family:Montserrat,sans-serif;text-transform:uppercase}.article-container[data-v-497dadf6]{display:-webkit-box;display:flex;max-width:100vw;padding:0 2em 56px 1.5em}.max-content[data-v-497dadf6]{max-height:100vh;width:100%;box-sizing:border-box;margin:0 auto}.title-section[data-v-497dadf6]{font-weight:900;font-size:.9rem;line-height:17px;color:var(--primary);padding:1.25em 0 .5em 1.6em;text-transform:uppercase}@media (min-width:700px){#page[data-v-497dadf6]{display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center}}",""]),t.exports=M}}]);