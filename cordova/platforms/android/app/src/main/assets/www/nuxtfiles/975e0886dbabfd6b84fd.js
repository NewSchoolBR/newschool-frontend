(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{296:function(t,e,n){var content=n(304);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(29).default)("79745966",content,!0,{sourceMap:!1})},298:function(t,e,n){var content=n(307);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(29).default)("3e471d94",content,!0,{sourceMap:!1})},299:function(t,e,n){var content=n(309);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(29).default)("f0f029ce",content,!0,{sourceMap:!1})},302:function(t,e,n){"use strict";var o={props:["title","backPage","route"],methods:{comeBackPage:function(){this.route?this.$router.push(this.route):this.$router.back()}}},r=(n(303),n(39)),c=n(43),l=n.n(c),h=n(289),d=n(288),component=Object(r.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"head__bar"}},[e("v-btn",{staticClass:"btn-back",attrs:{text:"",icon:""},on:{click:this.comeBackPage}},[e("v-icon",[this._v("mdi-arrow-left")])],1),this._v(" "),e("h1",{staticClass:"h1__theme"},[this._v(this._s(this.title))])],1)}),[],!1,null,"7719e329",null);e.a=component.exports;l()(component,{VBtn:h.a,VIcon:d.a})},303:function(t,e,n){"use strict";var o=n(296);n.n(o).a},304:function(t,e,n){(e=n(28)(!1)).push([t.i,"*[data-v-7719e329]{font-family:Roboto,sans-serif}.h1__theme[data-v-7719e329]{font-size:1rem;line-height:1.2;font-weight:900;text-align:center;padding:0 2.5rem!important}#head__bar[data-v-7719e329]{display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center;padding:1.5rem 0;position:relative;-webkit-box-align:center;align-items:center;background:transparent}[data-v-7719e329] .btn-back .theme--light.v-icon{color:var(--primary);font-size:35px}[data-v-7719e329] .btn-back{position:absolute;left:1rem}",""]),t.exports=e},305:function(t,e,n){"use strict";n(189),n(23),n(11),n(7),n(13),n(36),n(5);var o=n(4),r=n(311),c=n.n(r),l=n(110),h=n(109);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function v(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f={data:function(){return{menu:[{id:1,label:"Meu Perfil",icon:"mdi-account",link:"/aluno/perfil"},{id:2,label:"Meus Cursos",icon:"mdi-library",link:"/aluno/meus-cursos"},{id:3,label:"Meus Certificados",icon:"mdi-school",link:"/aluno/certificados"},{id:4,label:"Ranking",icon:"mdi-trophy",link:"/aluno/ranking"},{id:5,label:"O que é a new school?",icon:"mdi-library-books",link:"/sobre"},{id:6,label:"Cola com Nóix",icon:"mdi-gesture-double-tap",link:"/contribua"},{id:7,label:"Apoie a new school",icon:"mdi-volume-high",link:"/construindo"},{id:8,label:"Fale com a gente",icon:"mdi-phone-message-outline",link:"/contato"}]}},methods:v(v({},Object(l.b)("user",["clearInfoUser"])),{},{closeMenu:function(){document.getElementById("menu-btn").click()},logout:function(){var t=this;this.logoutSocial().then((function(){$nuxt._router.push("/login"),localStorage.clear(),t.clearInfoUser()}))},pushAdminOnlyOptions:function(){"ADMIN"===this.$store.state.user.data.role&&(this.menu[1].link="/admin/listar-cursos",this.menu.push({id:9,label:"Dashboard",icon:"mdi-chart-bar",link:"/admin/dashboard"}))},logoutSocial:function(){return this.$auth.loggedIn?this.$auth.logout():Promise.resolve()}}),computed:{user:function(){return this.$store.state.user.data}},mounted:function(){h.a.isTokenValid().status&&(this.auth=!0,this.pushAdminOnlyOptions())},filters:{simplifyName:function(t){if(!t)return"";return t.split(" ").length>2?/^(\S*\s+\S+).*/.exec(t)[1]:t}},components:{Avatar:c.a}},m=(n(306),n(39)),x=n(43),y=n.n(x),k=n(289),_=n(288),component=Object(m.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container-page",attrs:{id:"page"}},[n("main",[n("section",{attrs:{id:"info"}},[n("div",{attrs:{id:"avatar"}},[n("div",{staticClass:"flex-center border-profile-photo"},[n("div",{staticClass:"flex-center profile-container"},[t.user.photo?n("img",{attrs:{src:t.user.photo}}):n("avatar",{attrs:{username:t._f("simplifyName")(t.user.name),size:90}})],1)])]),t._v(" "),n("div",{staticClass:"flex-center",attrs:{id:"flex-info-user"}},[n("h1",[t._v(t._s(t.user.name))]),t._v(" "),n("p",[t._v(t._s(t.user.type))]),t._v(" "),n("v-btn",{attrs:{id:"btnLogout",small:"",outlined:"",color:"error",width:"80px"},on:{click:t.logout}},[t._v("Sair")])],1),t._v(" "),n("div",{attrs:{id:"close"}},[n("v-icon",{attrs:{id:"close-btn",color:"primary"},on:{click:function(e){return t.closeMenu()}}},[t._v("mdi-close-circle")])],1)])]),t._v(" "),n("section",{staticClass:"menu-list"},t._l(t.menu,(function(e){return n("router-link",{key:e.id,staticClass:"item-menu",attrs:{tag:"div",to:e.link},nativeOn:{click:function(e){return t.closeMenu()}}},[n("div",[n("v-icon",{attrs:{color:"primary"}},[t._v(t._s(e.icon))])],1),t._v(" "),n("p",{staticClass:"text-menu"},[t._v(t._s(e.label))])])})),1)])}),[],!1,null,"373fe020",null),w=component.exports;y()(component,{VBtn:k.a,VIcon:_.a});var O={components:{SideMenu:w},data:function(){return{viewMenu:!1,auth:!1,menu:[{id:1,name:"Início",icon:"mdi-home-outline",link:"/aluno/home"},{id:2,name:"Perfil",icon:"mdi-account-outline",link:"/aluno/perfil"},{id:3,name:"Meus Cursos",icon:"mdi-library",link:"/aluno/meus-cursos"},{id:4,name:"Certificados",icon:"mdi-school-outline",link:"/aluno/certificados",class:""}]}},mounted:function(){h.a.isTokenValid().status&&(this.auth=!0,this.changeRoutingIfAdmin())},methods:{setViewMenu:function(){this.viewMenu=!this.viewMenu},changeRoutingIfAdmin:function(){"ADMIN"===this.$store.state.user.data.role&&(this.menu[0].link="/admin/home",this.menu[1].link="/admin/perfil",this.menu[2].link="/admin/listar-cursos",this.menu[3].link="/admin/certificados")}}},C=(n(308),n(1040)),j=Object(m.a)(O,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.auth?n("div",[n("side-menu",{directives:[{name:"show",rawName:"v-show",value:t.viewMenu,expression:"viewMenu"}],staticClass:"intro-transition"}),t._v(" "),n("v-bottom-navigation",{attrs:{"scroll-target":"#page",fixed:"","scroll-threshold":"500",color:"write",horizontal:""}},[t._l(t.menu,(function(e){return n("v-btn",{key:e.id,staticClass:"btn-fixed menu__bottom",class:e.class,attrs:{to:e.link},on:{click:function(e){t.viewMenu=!1}}},[n("span",[t._v(t._s(e.name))]),t._v(" "),n("v-icon",[t._v(t._s(e.icon))])],1)})),t._v(" "),n("v-btn",{staticClass:"btn-fixed",attrs:{id:"menu-btn"},on:{click:t.setViewMenu}},[n("span",[t._v("Outros")]),t._v(" "),n("v-icon",[t._v("mdi-apps")])],1)],2)],1):t._e()}),[],!1,null,"7d2ee64a",null);e.a=j.exports;y()(j,{VBottomNavigation:C.a,VBtn:k.a,VIcon:_.a})},306:function(t,e,n){"use strict";var o=n(298);n.n(o).a},307:function(t,e,n){(e=n(28)(!1)).push([t.i,".container-page[data-v-373fe020]{z-index:2}#btnLogout[data-v-373fe020]{margin-top:5px}.mdi-close-circle[data-v-373fe020]:before{color:var(--primary);position:absolute;right:22px;top:33px}.container-page>main[data-v-373fe020]{-webkit-box-pack:justify;justify-content:space-between;padding:.5rem;margin-top:1rem;width:100%}#info[data-v-373fe020],.container-page>main[data-v-373fe020]{display:-webkit-box;display:flex}#avatar[data-v-373fe020]{margin-right:1rem}.text-menu[data-v-373fe020]{text-transform:uppercase}.mdi-library-books[data-v-373fe020]:before{content:url(https://api.iconify.design/mdi-library-books.svg?color=rgb%28105%2C0%2C204%29&height=24);vertical-align:-.125em}h1[data-v-373fe020]{font-size:1rem;font-weight:500;color:#000;text-transform:capitalize}.menu-list[data-v-373fe020]{max-width:500px}.container-page[data-v-373fe020]{background-color:#fff;position:fixed;width:100%;height:100%;top:0;left:0}.row[data-v-373fe020]{margin-left:0}#close-btn[data-v-373fe020]{cursor:pointer;font-size:30px}#flex-info-user[data-v-373fe020]{-webkit-box-pack:start;justify-content:flex-start;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-align:baseline;align-items:baseline}.flex-center[data-v-373fe020]{display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center}.border-profile-photo[data-v-373fe020]{height:95px;width:95px;border:1px solid #60c;border-radius:50px}.profile-container[data-v-373fe020]{width:85px;height:85px;border-radius:50px;overflow:hidden}.profile-container img[data-v-373fe020]{width:100%}.item-menu[data-v-373fe020]{width:100%;padding:13px;border-bottom:1px solid #e8e8e8;-webkit-box-align:center;align-items:center;color:var(--primary)!important;cursor:pointer}.item-menu[data-v-373fe020],.item-menu div[data-v-373fe020]{display:-webkit-box;display:flex}.item-menu div[data-v-373fe020]{width:50px;-webkit-box-pack:center;justify-content:center;margin-right:2rem}.item-menu[data-v-373fe020]:hover{background-color:#e8d1ff}.col-flex-center[data-v-373fe020]{display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center;-webkit-box-align:baseline;align-items:baseline}p[data-v-373fe020]{margin-bottom:0!important}h4[data-v-373fe020]{font-weight:600}@media(min-width:600px){#info[data-v-373fe020],.menu-list[data-v-373fe020]{margin:0 auto}}",""]),t.exports=e},308:function(t,e,n){"use strict";var o=n(299);n.n(o).a},309:function(t,e,n){(e=n(28)(!1)).push([t.i,"[data-v-7d2ee64a] .v-item-group.v-bottom-navigation--horizontal .v-btn>.v-btn__content{-webkit-box-orient:vertical!important;-webkit-box-direction:reverse!important;flex-direction:column-reverse!important}.v-icon[data-v-7d2ee64a]{margin-right:0!important;padding-top:5px}#page[data-v-7d2ee64a]{margin-bottom:5rem!important}.btn-fixed[data-v-7d2ee64a]{height:100%!important}.intro-transition[data-v-7d2ee64a]{-webkit-animation-name:intro;animation-name:intro;-webkit-animation-duration:.2s;animation-duration:.2s}[data-v-7d2ee64a] .v-item-group.v-bottom-navigation .v-btn.v-btn--active .v-btn__content{color:var(--primary)}.mdi-library[data-v-7d2ee64a]:before{content:url(https://api.iconify.design/ic:outline-local-library.svg?color=rgb%28112%2C112%2C112%29&height=24);vertical-align:-.125em}[data-v-7d2ee64a] .v-item-group.v-bottom-navigation .v-btn.v-btn--active .v-btn__content .mdi-library:before{content:url(https://api.iconify.design/ic:outline-local-library.svg?color=rgb%28102%2C0%2C204%29&height=24);vertical-align:-.125em}span[data-v-7d2ee64a]{font-size:8px;font-weight:400;color:#737373;margin-top:5px}[data-v-7d2ee64a] .v-item-group.v-bottom-navigation .v-btn.v-btn--active .v-btn__content span{color:var(--primary)}@media (max-width:375px){.v-btn[data-v-7d2ee64a]{min-width:55px!important;font-size:.6rem!important}}@media (max-width:415px){.v-btn[data-v-7d2ee64a]{font-size:.65rem!important}}.remove-certificates[data-v-7d2ee64a]{display:none}",""]),t.exports=e},315:function(t,e,n){"use strict";var o=n(331);e.a=o.a},533:function(t,e,n){"use strict";var o=n(33),r=n(109);e.a={getAll:function(){var t=r.a.getInfoAuth().accessToken;return o.a.get("/api/v1/course",{headers:{Authorization:t}})},getBySlug:function(t){var e=r.a.getInfoAuth().accessToken;return o.a.get("api/v1/course/slug/".concat(t),{headers:{Authorization:"".concat(e)}})},createCourse:function(t){var e=r.a.getInfoAuth().accessToken;return o.a.post("api/v1/course",t,{headers:{Authorization:"".concat(e)}})},getById:function(t){var e=r.a.getInfoAuth().accessToken;return o.a.get("api/v1/course/".concat(t),{headers:{Authorization:e}})}}},582:function(t,e,n){"use strict";n(23),n(11),n(7),n(5),n(13);var o=n(10),r=n(4),c=(n(583),n(47)),l=n(318),h=n(188),d=n(68),v=n(144),f=n(67),m=n(137),x=n(111),y=n(100),k=n(16);function _(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function w(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?_(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):_(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(c.a)(d.a,y.a,x.a,f.a,Object(v.a)("chipGroup"),Object(m.b)("inputValue")).extend({name:"v-chip",props:{active:{type:Boolean,default:!0},activeClass:{type:String,default:function(){return this.chipGroup?this.chipGroup.activeClass:""}},close:Boolean,closeIcon:{type:String,default:"$delete"},disabled:Boolean,draggable:Boolean,filter:Boolean,filterIcon:{type:String,default:"$complete"},label:Boolean,link:Boolean,outlined:Boolean,pill:Boolean,tag:{type:String,default:"span"},textColor:String,value:null},data:function(){return{proxyClass:"v-chip--active"}},computed:{classes:function(){return w(w(w(w({"v-chip":!0},x.a.options.computed.classes.call(this)),{},{"v-chip--clickable":this.isClickable,"v-chip--disabled":this.disabled,"v-chip--draggable":this.draggable,"v-chip--label":this.label,"v-chip--link":this.isLink,"v-chip--no-color":!this.color,"v-chip--outlined":this.outlined,"v-chip--pill":this.pill,"v-chip--removable":this.hasClose},this.themeClasses),this.sizeableClasses),this.groupClasses)},hasClose:function(){return Boolean(this.close)},isClickable:function(){return Boolean(x.a.options.computed.isClickable.call(this)||this.chipGroup)}},created:function(){var t=this;[["outline","outlined"],["selected","input-value"],["value","active"],["@input","@active.sync"]].forEach((function(e){var n=Object(o.a)(e,2),r=n[0],c=n[1];t.$attrs.hasOwnProperty(r)&&Object(k.a)(r,c,t)}))},methods:{click:function(t){this.$emit("click",t),this.chipGroup&&this.toggle()},genFilter:function(){var t=[];return this.isActive&&t.push(this.$createElement(h.a,{staticClass:"v-chip__filter",props:{left:!0}},this.filterIcon)),this.$createElement(l.b,t)},genClose:function(){var t=this;return this.$createElement(h.a,{staticClass:"v-chip__close",props:{right:!0},on:{click:function(e){e.stopPropagation(),e.preventDefault(),t.$emit("click:close"),t.$emit("update:active",!1)}}},this.closeIcon)},genContent:function(){return this.$createElement("span",{staticClass:"v-chip__content"},[this.filter&&this.genFilter(),this.$slots.default,this.hasClose&&this.genClose()])}},render:function(t){var e=[this.genContent()],n=this.generateRouteLink(),o=n.tag,data=n.data;data.attrs=w(w({},data.attrs),{},{draggable:this.draggable?"true":void 0,tabindex:this.chipGroup&&!this.disabled?0:data.attrs.tabindex}),data.directives.push({name:"show",value:this.active}),data=this.setBackgroundColor(this.color,data);var r=this.textColor||this.outlined&&this.color;return t(o,this.setTextColor(r,data),e)}})},583:function(t,e,n){var content=n(584);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(29).default)("197fcea4",content,!0,{sourceMap:!1})},584:function(t,e,n){(e=n(28)(!1)).push([t.i,'.v-chip:not(.v-chip--outlined).accent,.v-chip:not(.v-chip--outlined).error,.v-chip:not(.v-chip--outlined).info,.v-chip:not(.v-chip--outlined).primary,.v-chip:not(.v-chip--outlined).secondary,.v-chip:not(.v-chip--outlined).success,.v-chip:not(.v-chip--outlined).warning{color:#fff}.theme--light.v-chip{border-color:rgba(0,0,0,.12);color:rgba(0,0,0,.87)}.theme--light.v-chip:not(.v-chip--active){background:#e0e0e0}.theme--light.v-chip:hover:before{opacity:.04}.theme--light.v-chip--active:before,.theme--light.v-chip--active:hover:before,.theme--light.v-chip:focus:before{opacity:.12}.theme--light.v-chip--active:focus:before{opacity:.16}.theme--dark.v-chip{border-color:hsla(0,0%,100%,.12);color:#fff}.theme--dark.v-chip:not(.v-chip--active){background:#555}.theme--dark.v-chip:hover:before{opacity:.08}.theme--dark.v-chip--active:before,.theme--dark.v-chip--active:hover:before,.theme--dark.v-chip:focus:before{opacity:.24}.theme--dark.v-chip--active:focus:before{opacity:.32}.v-chip{-webkit-box-align:center;align-items:center;cursor:default;display:-webkit-inline-box;display:inline-flex;line-height:20px;max-width:100%;outline:none;overflow:hidden;padding:0 12px;position:relative;text-decoration:none;-webkit-transition-duration:.28s;transition-duration:.28s;-webkit-transition-property:box-shadow,opacity;transition-property:box-shadow,opacity;-webkit-transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,.2,1);vertical-align:middle;white-space:nowrap}.v-chip:before{background-color:currentColor;bottom:0;border-radius:inherit;content:"";left:0;opacity:0;position:absolute;pointer-events:none;right:0;top:0}.v-chip .v-avatar{height:24px!important;min-width:24px!important;width:24px!important}.v-chip .v-icon{font-size:24px}.v-application--is-ltr .v-chip .v-avatar--left,.v-application--is-ltr .v-chip .v-icon--left{margin-left:-6px;margin-right:8px}.v-application--is-ltr .v-chip .v-avatar--right,.v-application--is-ltr .v-chip .v-icon--right,.v-application--is-rtl .v-chip .v-avatar--left,.v-application--is-rtl .v-chip .v-icon--left{margin-left:8px;margin-right:-6px}.v-application--is-rtl .v-chip .v-avatar--right,.v-application--is-rtl .v-chip .v-icon--right{margin-left:-6px;margin-right:8px}.v-chip:not(.v-chip--no-color) .v-icon{color:inherit}.v-chip .v-chip__close.v-icon{font-size:18px;max-height:18px;max-width:18px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-application--is-ltr .v-chip .v-chip__close.v-icon.v-icon--right{margin-right:-4px}.v-application--is-rtl .v-chip .v-chip__close.v-icon.v-icon--right{margin-left:-4px}.v-chip .v-chip__close.v-icon:active,.v-chip .v-chip__close.v-icon:focus,.v-chip .v-chip__close.v-icon:hover{opacity:.72}.v-chip .v-chip__content{-webkit-box-align:center;align-items:center;display:-webkit-inline-box;display:inline-flex;height:100%;max-width:100%}.v-chip--active .v-icon{color:inherit}.v-chip--link:before{-webkit-transition:opacity .3s cubic-bezier(.25,.8,.5,1);transition:opacity .3s cubic-bezier(.25,.8,.5,1)}.v-chip--link:focus:before{opacity:.32}.v-chip--clickable{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-chip--clickable:active{box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.v-chip--disabled{opacity:.4;pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-chip__filter{max-width:24px}.v-chip__filter.v-icon{color:inherit}.v-chip__filter.expand-x-transition-enter,.v-chip__filter.expand-x-transition-leave-active{margin:0}.v-chip--pill .v-chip__filter{margin-right:0 16px 0 0}.v-chip--pill .v-avatar{height:32px!important;width:32px!important}.v-application--is-ltr .v-chip--pill .v-avatar--left{margin-left:-12px}.v-application--is-ltr .v-chip--pill .v-avatar--right,.v-application--is-rtl .v-chip--pill .v-avatar--left{margin-right:-12px}.v-application--is-rtl .v-chip--pill .v-avatar--right{margin-left:-12px}.v-chip--label{border-radius:4px!important}.v-chip.v-chip--outlined{border-width:thin;border-style:solid}.v-chip.v-chip--outlined:not(.v-chip--active):before{opacity:0}.v-chip.v-chip--outlined.v-chip--active:before{opacity:.08}.v-chip.v-chip--outlined .v-icon{color:inherit}.v-chip.v-chip--outlined.v-chip.v-chip{background-color:transparent!important}.v-chip.v-chip--selected{background:transparent}.v-chip.v-chip--selected:after{opacity:.28}.v-chip.v-size--x-small{border-radius:8px;font-size:10px;height:16px}.v-chip.v-size--small{border-radius:12px;font-size:12px;height:24px}.v-chip.v-size--default{border-radius:16px;font-size:14px;height:32px}.v-chip.v-size--large{border-radius:27px;font-size:16px;height:54px}.v-chip.v-size--x-large{border-radius:33px;font-size:18px;height:66px}',""]),t.exports=e},633:function(t,e,n){var content=n(902);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(29).default)("4b53412d",content,!0,{sourceMap:!1})},634:function(t,e){},901:function(t,e,n){"use strict";var o=n(633);n.n(o).a},902:function(t,e,n){(e=n(28)(!1)).push([t.i,".v-input[data-v-9d1bf748]{width:90%;height:50px}.v-input input[data-v-9d1bf748]{color:none}[data-v-9d1bf748] .v-messages__message{text-align:right;margin-top:-.3em}.hide-form[data-v-9d1bf748]{-webkit-animation:down .3s forwards;animation:down .3s forwards}.error-form[data-v-9d1bf748]{-webkit-animation:nono .3s,intro paused;animation:nono .3s,intro paused}",""]),t.exports=e},903:function(t,e,n){"use strict";var o=n(634),r=n.n(o);e.default=r.a},904:function(t,e,n){var content=n(905);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(29).default)("83ff91dc",content,!0,{sourceMap:!1})},905:function(t,e,n){(e=n(28)(!1)).push([t.i,".theme--light.v-file-input .v-file-input__text{color:rgba(0,0,0,.87)}.theme--light.v-file-input .v-file-input__text--placeholder{color:rgba(0,0,0,.6)}.theme--light.v-file-input.v-input--is-disabled .v-file-input__text,.theme--light.v-file-input.v-input--is-disabled .v-file-input__text .v-file-input__text--placeholder{color:rgba(0,0,0,.38)}.theme--dark.v-file-input .v-file-input__text{color:#fff}.theme--dark.v-file-input .v-file-input__text--placeholder{color:hsla(0,0%,100%,.7)}.theme--dark.v-file-input.v-input--is-disabled .v-file-input__text,.theme--dark.v-file-input.v-input--is-disabled .v-file-input__text .v-file-input__text--placeholder{color:hsla(0,0%,100%,.5)}.v-file-input input[type=file]{left:0;opacity:0;position:absolute;max-width:0;width:0}.v-file-input .v-file-input__text{-webkit-box-align:center;align-items:center;align-self:stretch;display:-webkit-box;display:flex;flex-wrap:wrap;width:100%}.v-file-input .v-file-input__text.v-file-input__text--chips{flex-wrap:wrap}.v-file-input .v-file-input__text .v-chip{margin:4px}.v-file-input .v-text-field__slot{min-height:32px}.v-file-input.v-text-field--filled:not(.v-text-field--single-line) .v-file-input__text{padding-top:22px}.v-file-input.v-text-field--outlined .v-text-field__slot{padding:6px 0}.v-file-input.v-text-field--outlined.v-input--dense .v-text-field__slot{padding:3px 0}",""]),t.exports=e},995:function(t,e,n){"use strict";n.r(e);var o=n(533),r=n(25),c=n(302),l=n(305),h={data:function(){return{title:"Gerenciar meus cursos",sendCourse:!1,status:!0,loading:!1,snackbar:!1,snackbarText:"",snackbarStatus:"",token:"",form:{title:"",description:"",authorName:"",authorDescription:"",workload:"",thumbUrl:"",photo:null},titleRules:[function(t){return!!t||"O título é obrigatório"}],descriptionRules:[function(t){return!!t||"A descrição é obrigatória"}],authorNameRules:[function(t){return!!t||"O professor é obrigatório"}],authorDescriptionRules:[function(t){return!!t||"Campo obrigatório"}],workloadRules:[function(t){return!!t||"A carga horária é obrigatória"}],photoRules:[function(t){return!!t||"A foto de capa é obrigatória"}]}},head:function(){return{title:this.title}},components:{HeaderBar:c.a,NavigationBar:l.a},methods:{submit:function(){var t=this;if(this.$refs.form.validate()){var e=new FormData;e.append("title",this.form.title),e.append("description",this.form.description),e.append("authorName",this.form.authorName),e.append("authorDescription",this.form.authorDescription),e.append("workload",this.form.workload),e.append("photo",this.form.photo),e.append("thumbUrl",this.form.thumbUrl),o.a.createCourse(e).then((function(e){t.loading=!1,t.sendCourse=!0,t.confirmSnackbar("Curso cadastrado com sucesso!","success"),t.$store.commit("courses/setCurrent",e.data),t.gotoAddClass(e.data.id)})).catch((function(e){t.confirmSnackbar("Ocorreu um erro ao cadastrar o curso.","error"),setTimeout((function(){t.loading=!1}),500),console.error(e)}))}else this.animateForm(!1)},animateForm:function(t){var e=this;t?(this.$refs.flex.classList.add("hide-form"),document.querySelector("html").style.overflow="hidden",setTimeout((function(){e.loading=!0}),300)):(this.$refs.flex.classList.add("error-form"),setTimeout((function(){e.$refs.flex.classList.remove("error-form")}),500)),document.querySelector("html").style.overflow="scroll"},gotoAddClass:function(t){this.sendCourse?$nuxt._router.push("/admin/course/".concat(t,"/lesson/new")):this.confirmSnackbar("Você precisa salvar o curso antes de adicionar uma aula","error")},goBack:function(){window.history.length>1?$nuxt._router.go(-1):$nuxt._router.push("/")},confirmSnackbar:function(text,t){this.snackbarText=text,this.snackbarStatus=t,this.snackbar=!0}},mounted:function(){var t=this;localStorage.getItem("current_course"),r.a.getExternalCredentials().then((function(e){var data=e.data;t.token=data.accessToken})).catch((function(t){console.error(t)}))}},d=(n(901),n(39)),v=n(903),f=n(43),m=n.n(f),x=n(289),y=n(320),k=n(321),_=(n(23),n(11),n(7),n(5),n(13),n(112)),w=(n(14),n(4)),O=n(12),C=(n(35),n(40),n(66),n(904),n(315)),j=n(582),S=n(6),$=n(16);function z(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function V(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?z(Object(source),!0).forEach((function(e){Object(w.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):z(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var P=C.a.extend({name:"v-file-input",model:{prop:"value",event:"change"},props:{chips:Boolean,clearable:{type:Boolean,default:!0},counterSizeString:{type:String,default:"$vuetify.fileInput.counterSize"},counterString:{type:String,default:"$vuetify.fileInput.counter"},placeholder:String,prependIcon:{type:String,default:"$file"},readonly:{type:Boolean,default:!1},showSize:{type:[Boolean,Number],default:!1,validator:function(t){return"boolean"==typeof t||[1e3,1024].includes(t)}},smallChips:Boolean,truncateLength:{type:[Number,String],default:22},type:{type:String,default:"file"},value:{default:void 0,validator:function(t){return Object(S.y)(t).every((function(t){return null!=t&&"object"===Object(O.a)(t)}))}}},computed:{classes:function(){return V(V({},C.a.options.computed.classes.call(this)),{},{"v-file-input":!0})},computedCounterValue:function(){var t=this.isMultiple&&this.lazyValue?this.lazyValue.length:this.lazyValue instanceof File?1:0;if(!this.showSize)return this.$vuetify.lang.t(this.counterString,t);var e=this.internalArrayValue.reduce((function(t,e){var n=e.size;return t+(void 0===n?0:n)}),0);return this.$vuetify.lang.t(this.counterSizeString,t,Object(S.q)(e,1024===this.base))},internalArrayValue:function(){return Object(S.y)(this.internalValue)},internalValue:{get:function(){return this.lazyValue},set:function(t){this.lazyValue=t,this.$emit("change",this.lazyValue)}},isDirty:function(){return this.internalArrayValue.length>0},isLabelActive:function(){return this.isDirty},isMultiple:function(){return this.$attrs.hasOwnProperty("multiple")},text:function(){var t=this;return this.isDirty?this.internalArrayValue.map((function(e){var n=e.name,o=void 0===n?"":n,r=e.size,c=void 0===r?0:r,l=t.truncateText(o);return t.showSize?"".concat(l," (").concat(Object(S.q)(c,1024===t.base),")"):l})):[this.placeholder]},base:function(){return"boolean"!=typeof this.showSize?this.showSize:void 0},hasChips:function(){return this.chips||this.smallChips}},watch:{readonly:{handler:function(t){!0===t&&Object($.b)("readonly is not supported on <v-file-input>",this)},immediate:!0},value:function(t){var e=this.isMultiple?t:t?[t]:[];Object(S.i)(e,this.$refs.input.files)||(this.$refs.input.value="")}},methods:{clearableCallback:function(){this.internalValue=this.isMultiple?[]:void 0,this.$refs.input.value=""},genChips:function(){var t=this;return this.isDirty?this.text.map((function(text,e){return t.$createElement(j.a,{props:{small:t.smallChips},on:{"click:close":function(){var n=t.internalValue;n.splice(e,1),t.internalValue=n}}},[text])})):[]},genInput:function(){var input=C.a.options.methods.genInput.call(this);return delete input.data.domProps.value,delete input.data.on.input,input.data.on.change=this.onInput,[this.genSelections(),input]},genPrependSlot:function(){var t=this;if(!this.prependIcon)return null;var e=this.genIcon("prepend",(function(){t.$refs.input.click()}));return this.genSlot("prepend","outer",[e])},genSelectionText:function(){var t=this.text.length;return t<2?this.text:this.showSize&&!this.counter?[this.computedCounterValue]:[this.$vuetify.lang.t(this.counterString,t)]},genSelections:function(){var t=this,e=[];return this.isDirty&&this.$scopedSlots.selection?this.internalArrayValue.forEach((function(n,o){t.$scopedSlots.selection&&e.push(t.$scopedSlots.selection({text:t.text[o],file:n,index:o}))})):e.push(this.hasChips&&this.isDirty?this.genChips():this.genSelectionText()),this.$createElement("div",{staticClass:"v-file-input__text",class:{"v-file-input__text--placeholder":this.placeholder&&!this.isDirty,"v-file-input__text--chips":this.hasChips&&!this.$scopedSlots.selection}},e)},genTextFieldSlot:function(){var t=this,e=C.a.options.methods.genTextFieldSlot.call(this);return e.data.on=V(V({},e.data.on||{}),{},{click:function(){return t.$refs.input.click()}}),e},onInput:function(t){var e=Object(_.a)(t.target.files||[]);this.internalValue=this.isMultiple?e:e[0],this.initialValue=this.internalValue},onKeyDown:function(t){this.$emit("keydown",t)},truncateText:function(t){if(t.length<Number(this.truncateLength))return t;var e=Math.floor((Number(this.truncateLength)-1)/2);return"".concat(t.slice(0,e),"…").concat(t.slice(t.length-e))}}}),D=n(332),I=n(337),B=n(322),M=n(129),A=n(294),T=n(974),N=n(331),component=Object(d.a)(h,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"page"}},[n("HeaderBar",{attrs:{title:"Gerenciar Meus Cursos","back-page":!0}}),t._v(" "),n("v-layout",{attrs:{"align-center":"","justify-center":""}},[n("v-flex",{staticStyle:{"text-align":"-webkit-left"},attrs:{xs10:"",sm8:"",md4:""}},[n("v-container",[n("v-row",[n("v-col",[t.loading?n("v-progress-circular",{attrs:{size:70,width:5,indeterminate:""}}):t._e(),t._v(" "),n("h3",[t._v("Curso")]),t._v(" "),n("v-form",{ref:"form",staticClass:"course-form",attrs:{"lazy-validation":""}},[n("v-text-field",{attrs:{rules:t.titleRules,label:"Título *",name:"title",required:""},model:{value:t.form.title,callback:function(e){t.$set(t.form,"title",e)},expression:"form.title"}}),t._v(" "),n("v-text-field",{attrs:{rules:t.descriptionRules,label:"Descrição *",name:"description",required:""},model:{value:t.form.description,callback:function(e){t.$set(t.form,"description",e)},expression:"form.description"}}),t._v(" "),n("v-text-field",{attrs:{rules:t.authorNameRules,label:"Professor *",name:"authorName",required:""},model:{value:t.form.authorName,callback:function(e){t.$set(t.form,"authorName",e)},expression:"form.authorName"}}),t._v(" "),n("v-text-field",{attrs:{rules:t.authorDescriptionRules,label:"Biografia do Professor *",name:"authorDescription",required:""},model:{value:t.form.authorDescription,callback:function(e){t.$set(t.form,"authorDescription",e)},expression:"form.authorDescription"}}),t._v(" "),n("v-text-field",{attrs:{rules:t.workloadRules,type:"number",label:"Carga Horária *",name:"workload",required:""},model:{value:t.form.workload,callback:function(e){t.$set(t.form,"workload",e)},expression:"form.workload"}}),t._v(" "),n("v-text-field",{attrs:{label:"URL da Imagem do Curso",name:"thumbUrl",required:""},model:{value:t.form.thumbUrl,callback:function(e){t.$set(t.form,"thumbUrl",e)},expression:"form.thumbUrl"}}),t._v(" "),n("v-file-input",{attrs:{rules:t.photoRules,label:"Foto de Capa *",name:"photo","prepend-icon":"",required:""},model:{value:t.form.photo,callback:function(e){t.$set(t.form,"photo",e)},expression:"form.photo"}}),t._v(" "),n("resources-list",{attrs:{name:"Aula",resources:[],redirect:"true",path:"lesson"}}),t._v(" "),n("span",{staticClass:"new-lessons-span"},[t._v("Favor, adicionar uma aula")]),t._v(" "),n("v-btn",{staticClass:"btn-block btn-primary",on:{click:t.submit}},[t._v("\n                Salvar\n              ")])],1)],1)],1)],1)],1),t._v(" "),n("v-snackbar",{attrs:{color:t.snackbarStatus,timeout:5e3,top:!0,right:!0},model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[t._v("\n          "+t._s(t.snackbarText)+"\n          "),n("v-btn",{attrs:{color:"#FFF",text:""},on:{click:function(e){t.snackbar=!1}}},[t._v("Fechar")])],1),t._v(" "),n("client-only",[n("navigation-bar")],1)],1)],1)}),[],!1,null,"9d1bf748",null);"function"==typeof v.default&&Object(v.default)(component);e.default=component.exports;m()(component,{VBtn:x.a,VCol:y.a,VContainer:k.a,VFileInput:P,VFlex:D.a,VForm:I.a,VLayout:B.a,VProgressCircular:M.a,VRow:A.a,VSnackbar:T.a,VTextField:N.a})}}]);