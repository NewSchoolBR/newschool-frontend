(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{297:function(e,t,n){var content=n(304);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(29).default)("79745966",content,!0,{sourceMap:!1})},298:function(e,t,n){var content=n(307);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(29).default)("9a59d33c",content,!0,{sourceMap:!1})},299:function(e,t,n){var content=n(309);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(29).default)("f0f029ce",content,!0,{sourceMap:!1})},302:function(e,t,n){"use strict";var o={props:["title","backPage","route"],methods:{comeBackPage:function(){this.route?this.$router.push(this.route):this.$router.back()}}},r=(n(303),n(39)),c=n(43),l=n.n(c),d=n(289),m=n(288),component=Object(r.a)(o,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"head__bar"}},[t("v-btn",{staticClass:"btn-back",attrs:{text:"",icon:""},on:{click:this.comeBackPage}},[t("v-icon",[this._v("mdi-arrow-left")])],1),this._v(" "),t("h1",{staticClass:"h1__theme"},[this._v(this._s(this.title))])],1)}),[],!1,null,"7719e329",null);t.a=component.exports;l()(component,{VBtn:d.a,VIcon:m.a})},303:function(e,t,n){"use strict";var o=n(297);n.n(o).a},304:function(e,t,n){(t=n(28)(!1)).push([e.i,"*[data-v-7719e329]{font-family:Roboto,sans-serif}.h1__theme[data-v-7719e329]{font-size:1rem;line-height:1.2;font-weight:900;text-align:center;padding:0 2.5rem!important}#head__bar[data-v-7719e329]{display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center;padding:1.5rem 0;position:relative;-webkit-box-align:center;align-items:center;background:transparent}[data-v-7719e329] .btn-back .theme--light.v-icon{color:var(--primary);font-size:35px}[data-v-7719e329] .btn-back{position:absolute;left:1rem}",""]),e.exports=t},305:function(e,t,n){"use strict";n(189),n(23),n(11),n(7),n(13),n(36),n(5);var o=n(4),r=n(311),c=n.n(r),l=n(110),d=n(109);function m(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function f(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var v={data:function(){return{menu:[{id:1,label:"Meu Perfil",icon:"mdi-account",link:"/aluno/perfil"},{id:2,label:"Meus Cursos",icon:"mdi-library",link:"/aluno/meus-cursos"},{id:3,label:"Meus Certificados",icon:"mdi-school",link:"/aluno/certificados"},{id:4,label:"Ranking",icon:"mdi-trophy",link:"/aluno/ranking"},{id:5,label:"O que é a new school?",icon:"mdi-library-books",link:"/sobre"},{id:6,label:"Cola com Nóix",icon:"mdi-gesture-double-tap",link:"/contribua"},{id:7,label:"Apoie a new school",icon:"mdi-volume-high",link:"/construindo"},{id:8,label:"Fale com a gente",icon:"mdi-phone-message-outline",link:"/contato"}]}},methods:f(f({},Object(l.b)("user",["clearInfoUser"])),{},{closeMenu:function(){document.getElementById("menu-btn").click()},logout:function(){var e=this;this.logoutSocial().then((function(){$nuxt._router.push("/login"),localStorage.clear(),e.clearInfoUser()}))},pushAdminOnlyOptions:function(){"ADMIN"===this.$store.state.user.data.role&&(this.menu[1].link="/admin/listar-cursos",this.menu.push({id:9,label:"Dashboard",icon:"mdi-chart-bar",link:"/admin/dashboard"}))},logoutSocial:function(){return this.$auth.loggedIn?this.$auth.logout():Promise.resolve()}}),computed:{user:function(){return this.$store.state.user.data}},mounted:function(){d.a.isTokenValid().status&&(this.auth=!0,this.pushAdminOnlyOptions())},filters:{simplifyName:function(e){if(!e)return"";return e.split(" ").length>2?/^(\S*\s+\S+).*/.exec(e)[1]:e}},components:{Avatar:c.a}},h=(n(306),n(39)),x=n(43),k=n.n(x),w=n(289),y=n(288),component=Object(h.a)(v,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container-page",attrs:{id:"page"}},[n("main",[n("section",{attrs:{id:"info"}},[n("div",{attrs:{id:"avatar"}},[n("div",{staticClass:"flex-center border-profile-photo"},[n("div",{staticClass:"flex-center profile-container"},[e.user.photo?n("img",{attrs:{src:e.user.photo}}):n("avatar",{attrs:{username:e._f("simplifyName")(e.user.name),size:90}})],1)])]),e._v(" "),n("div",{staticClass:"flex-center",attrs:{id:"flex-info-user"}},[n("h1",[e._v(e._s(e.user.name))]),e._v(" "),n("p",[e._v(e._s(e.user.type))]),e._v(" "),n("v-btn",{attrs:{id:"btnLogout",small:"",outlined:"",color:"error",width:"80px"},on:{click:e.logout}},[e._v("Sair")])],1),e._v(" "),n("div",{attrs:{id:"close"}},[n("v-icon",{attrs:{id:"close-btn",color:"primary"},on:{click:function(t){return e.closeMenu()}}},[e._v("mdi-close-circle")])],1)])]),e._v(" "),n("section",{staticClass:"menu-list"},e._l(e.menu,(function(t){return n("router-link",{key:t.id,staticClass:"item-menu",attrs:{tag:"div",to:t.link},nativeOn:{click:function(t){return e.closeMenu()}}},[n("div",[n("v-icon",{attrs:{color:"primary"}},[e._v(e._s(t.icon))])],1),e._v(" "),n("p",{staticClass:"text-menu"},[e._v(e._s(t.label))])])})),1)])}),[],!1,null,"0ed9528c",null),_=component.exports;k()(component,{VBtn:w.a,VIcon:y.a});var C={components:{SideMenu:_},data:function(){return{viewMenu:!1,auth:!1,menu:[{id:1,name:"Início",icon:"mdi-home-outline",link:"/aluno/home"},{id:2,name:"Perfil",icon:"mdi-account-outline",link:"/aluno/perfil"},{id:3,name:"Meus Cursos",icon:"mdi-library",link:"/aluno/meus-cursos"},{id:4,name:"Certificados",icon:"mdi-school-outline",link:"/aluno/certificados",class:""}]}},mounted:function(){d.a.isTokenValid().status&&(this.auth=!0,this.changeRoutingIfAdmin())},methods:{setViewMenu:function(){this.viewMenu=!this.viewMenu},changeRoutingIfAdmin:function(){"ADMIN"===this.$store.state.user.data.role&&(this.menu[0].link="/admin/home",this.menu[1].link="/admin/perfil",this.menu[2].link="/admin/listar-cursos",this.menu[3].link="/admin/certificados")}}},O=(n(308),n(1042)),j=Object(h.a)(C,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.auth?n("div",[n("side-menu",{directives:[{name:"show",rawName:"v-show",value:e.viewMenu,expression:"viewMenu"}],staticClass:"intro-transition"}),e._v(" "),n("v-bottom-navigation",{attrs:{"scroll-target":"#page",fixed:"","scroll-threshold":"500",color:"write",horizontal:""}},[e._l(e.menu,(function(t){return n("v-btn",{key:t.id,staticClass:"btn-fixed menu__bottom",class:t.class,attrs:{to:t.link},on:{click:function(t){e.viewMenu=!1}}},[n("span",[e._v(e._s(t.name))]),e._v(" "),n("v-icon",[e._v(e._s(t.icon))])],1)})),e._v(" "),n("v-btn",{staticClass:"btn-fixed",attrs:{id:"menu-btn"},on:{click:e.setViewMenu}},[n("span",[e._v("Outros")]),e._v(" "),n("v-icon",[e._v("mdi-apps")])],1)],2)],1):e._e()}),[],!1,null,"7d2ee64a",null);t.a=j.exports;k()(j,{VBottomNavigation:O.a,VBtn:w.a,VIcon:y.a})},306:function(e,t,n){"use strict";var o=n(298);n.n(o).a},307:function(e,t,n){(t=n(28)(!1)).push([e.i,".container-page[data-v-0ed9528c]{z-index:2}#btnLogout[data-v-0ed9528c]{margin-top:5px}.mdi-close-circle[data-v-0ed9528c]:before{color:var(--primary);position:absolute;right:22px;top:33px}.container-page>main[data-v-0ed9528c]{-webkit-box-pack:justify;justify-content:space-between;padding:.5rem;margin-top:1rem;width:100%}#info[data-v-0ed9528c],.container-page>main[data-v-0ed9528c]{display:-webkit-box;display:flex}#avatar[data-v-0ed9528c]{margin-right:1rem}.text-menu[data-v-0ed9528c]{text-transform:uppercase}.mdi-library-books[data-v-0ed9528c]:before{content:url(https://api.iconify.design/mdi-library-books.svg?color=rgb%28105%2C0%2C204%29&height=24);vertical-align:-.125em}h1[data-v-0ed9528c]{font-size:1rem;font-weight:500;color:#000;text-transform:capitalize}.menu-list[data-v-0ed9528c]{max-width:500px}.container-page[data-v-0ed9528c]{background-color:#fff;position:fixed;width:100%;height:100%;top:0;left:0}.row[data-v-0ed9528c]{margin-left:0}#close-btn[data-v-0ed9528c]{cursor:pointer;font-size:30px}#flex-info-user[data-v-0ed9528c]{-webkit-box-pack:start;justify-content:flex-start;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-align:baseline;align-items:baseline}.flex-center[data-v-0ed9528c]{display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center}.border-profile-photo[data-v-0ed9528c]{height:95px;width:95px;border:1px solid #60c;border-radius:50px}.profile-container[data-v-0ed9528c]{width:85px;height:85px;border-radius:50px;overflow:hidden}.profile-container img[data-v-0ed9528c]{width:100%}.item-menu[data-v-0ed9528c]{width:100%;padding:13px;border-bottom:1px solid #e8e8e8;-webkit-box-align:center;align-items:center;color:var(--primary)!important;cursor:pointer}.item-menu[data-v-0ed9528c],.item-menu div[data-v-0ed9528c]{display:-webkit-box;display:flex}.item-menu div[data-v-0ed9528c]{width:50px;-webkit-box-pack:center;justify-content:center;margin-right:2rem}.item-menu[data-v-0ed9528c]:hover{background-color:#e8d1ff}.col-flex-center[data-v-0ed9528c]{display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center;-webkit-box-align:baseline;align-items:baseline}p[data-v-0ed9528c]{margin-bottom:0!important}h4[data-v-0ed9528c]{font-weight:600}@media(min-width:600px){#info[data-v-0ed9528c],.menu-list[data-v-0ed9528c]{margin:0 auto}}",""]),e.exports=t},308:function(e,t,n){"use strict";var o=n(299);n.n(o).a},309:function(e,t,n){(t=n(28)(!1)).push([e.i,"[data-v-7d2ee64a] .v-item-group.v-bottom-navigation--horizontal .v-btn>.v-btn__content{-webkit-box-orient:vertical!important;-webkit-box-direction:reverse!important;flex-direction:column-reverse!important}.v-icon[data-v-7d2ee64a]{margin-right:0!important;padding-top:5px}#page[data-v-7d2ee64a]{margin-bottom:5rem!important}.btn-fixed[data-v-7d2ee64a]{height:100%!important}.intro-transition[data-v-7d2ee64a]{-webkit-animation-name:intro;animation-name:intro;-webkit-animation-duration:.2s;animation-duration:.2s}[data-v-7d2ee64a] .v-item-group.v-bottom-navigation .v-btn.v-btn--active .v-btn__content{color:var(--primary)}.mdi-library[data-v-7d2ee64a]:before{content:url(https://api.iconify.design/ic:outline-local-library.svg?color=rgb%28112%2C112%2C112%29&height=24);vertical-align:-.125em}[data-v-7d2ee64a] .v-item-group.v-bottom-navigation .v-btn.v-btn--active .v-btn__content .mdi-library:before{content:url(https://api.iconify.design/ic:outline-local-library.svg?color=rgb%28102%2C0%2C204%29&height=24);vertical-align:-.125em}span[data-v-7d2ee64a]{font-size:8px;font-weight:400;color:#737373;margin-top:5px}[data-v-7d2ee64a] .v-item-group.v-bottom-navigation .v-btn.v-btn--active .v-btn__content span{color:var(--primary)}@media (max-width:375px){.v-btn[data-v-7d2ee64a]{min-width:55px!important;font-size:.6rem!important}}@media (max-width:415px){.v-btn[data-v-7d2ee64a]{font-size:.65rem!important}}.remove-certificates[data-v-7d2ee64a]{display:none}",""]),e.exports=t},551:function(e,t,n){e.exports=n.p+"img/9f35d81.svg"},553:function(e,t,n){var content=n(728);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(29).default)("308060d4",content,!0,{sourceMap:!1})},554:function(e,t){},727:function(e,t,n){"use strict";var o=n(553);n.n(o).a},728:function(e,t,n){(t=n(28)(!1)).push([e.i,".align-global[data-v-0eebd082]{width:100%;max-width:400px;-webkit-box-pack:center;justify-content:center;background:#fff;padding-bottom:50px}@media (min-width:400px){.align-global[data-v-0eebd082]{margin:0 auto}}@media (max-width:320px){.container[data-v-0eebd082]{padding:0 12px!important}[data-v-0eebd082] .h1__theme{font-size:20px}}.container-spinner[data-v-0eebd082],.flex[data-v-0eebd082]{z-index:1;text-align:center;margin-top:-55px}.container[data-v-0eebd082]{z-index:-1;padding:20px 12px 0}.banner[data-v-0eebd082]{width:90%;margin:5% 5% -5%}[data-v-0eebd082] .v-form{width:100%;margin:0 4%}",""]),e.exports=t},729:function(e,t,n){"use strict";var o=n(554),r=n.n(o);t.default=r.a},994:function(e,t,n){"use strict";n.r(t);n(14);var o=n(552),r=(n(109),n(33)),c=function(form,e){return r.a.post("api/v1/message/email/contactus",form,{headers:{Authorization:"Bearer ".concat(e)}})},l=n(302),d=n(305),m=n(25),f={components:{HeaderBar:l.a,NavigationBar:d.a},directives:{mask:o.mask},transition:"bounce",data:function(){return{status:!0,loading:!1,token:"",form:{name:"",message:"",cellphone:""},nameRules:[function(e){return!!e||"Digite seu nome"}],messageRules:[function(e){return!!e||"Digite uma mensagem"}],cellphoneRules:[function(e){return!!e||"Digite seu celular com o DDD"},function(e){return/^\(\d{2}\) \d{5}-\d{3,4}$/.test(e)||"Complete seu celular com o DDD"}]}},mounted:function(){var e=this;m.a.getExternalCredentials().then((function(t){var data=t.data;e.token=data.accessToken})).catch((function(e){console.error(e)}))},methods:{submit:function(){var e=this;this.$refs.form.validate()?(this.animateForm(!0),c(this.form,this.token).then((function(t){e.loading=!1,e.$notifier.showMessage({type:"success"}),setTimeout((function(){e.gotoHome()}),4e3)})).catch((function(t){e.$notifier.showMessage({type:"error"}),setTimeout((function(){e.loading=!1}),800),console.error(t)}))):this.animateForm(!1)},focusName:function(data){data||this.$refs.name.focus()},focusCellphone:function(data){data||this.$refs.cellphone.focus()},focusMessage:function(data){data||this.$refs.message.focus()},animateForm:function(e){var t=this;e?(this.$refs.flex.classList.add("hide-form"),document.querySelector("html").style.overflow="hidden",setTimeout((function(){t.loading=!0}),300)):(this.$refs.flex.classList.add("error-form"),setTimeout((function(){t.$refs.flex.classList.remove("error-form")}),500)),document.querySelector("html").style.overflow="scroll"},gotoHome:function(){$nuxt._router.push("/aluno/home")}}},v=(n(727),n(39)),h=n(729),x=n(43),k=n.n(x),w=n(289),y=n(320),_=n(321),C=n(332),O=n(337),j=n(322),M=n(129),$=n(294),V=n(331),z=n(354),component=Object(v.a)(f,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("HeaderBar",{attrs:{title:"Fale com a gente","back-page":!0}}),e._v(" "),o("div",{staticClass:"align-global"},[e.loading?o("div",[o("div",{staticClass:"container-spinner",staticStyle:{"z-index":"9999999"}},[o("v-progress-circular",{attrs:{size:70,width:5,indeterminate:"",color:"#000"}})],1)]):e._e(),e._v(" "),o("v-layout",{staticClass:"container",attrs:{"mt-1":"",flat:""}},[o("v-flex",{ref:"flex"},[o("v-container",{attrs:{flat:""}},[o("v-row",[o("v-col",{attrs:{cols:"12","mt-5":""}},[o("v-row",[o("img",{staticClass:"banner",attrs:{src:n(551),alt:"imagem contato"}})])],1)],1),e._v(" "),o("v-row",[o("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:e.status,callback:function(t){e.status=t},expression:"status"}},[o("v-col",{attrs:{cols:"12"}},[o("v-text-field",{ref:"name",attrs:{autofocus:"",rules:e.nameRules,label:"Nome",name:"name","requiredv-model":"form.name"},on:{blur:function(t){return e.focusName(t.target.value)}},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}}),e._v(" "),o("v-text-field",{directives:[{name:"mask",rawName:"v-mask",value:"(##) #####-####",expression:"'(##) #####-####'"}],ref:"cellphone",attrs:{type:"tel",rules:e.cellphoneRules,label:"Whatsapp",name:"cellphone",required:""},on:{blur:function(t){return e.focusCellphone(t.target.value)}},model:{value:e.form.cellphone,callback:function(t){e.$set(e.form,"cellphone",t)},expression:"form.cellphone"}}),e._v(" "),o("v-textarea",{ref:"message",attrs:{rules:e.messageRules,label:"Passa a visão!",name:"message",rows:"3",required:""},on:{blur:function(t){return e.focusMessage(t.target.value)}},model:{value:e.form.message,callback:function(t){e.$set(e.form,"message",t)},expression:"form.message"}}),e._v(" "),o("v-btn",{staticClass:"btn-block btn-primary",on:{click:e.submit}},[e._v("\n                  Enviar\n                ")])],1)],1),e._v(" "),o("navigation-bar")],1)],1)],1)],1)],1)],1)}),[],!1,null,"0eebd082",null);"function"==typeof h.default&&Object(h.default)(component);t.default=component.exports;k()(component,{VBtn:w.a,VCol:y.a,VContainer:_.a,VFlex:C.a,VForm:O.a,VLayout:j.a,VProgressCircular:M.a,VRow:$.a,VTextField:V.a,VTextarea:z.a})}}]);