(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{258:function(t,e,n){var content=n(265);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(21).default)("f1d567f6",content,!0,{sourceMap:!1})},259:function(t,e,n){var content=n(267);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(21).default)("15a8a648",content,!0,{sourceMap:!1})},263:function(t,e,n){"use strict";n(161),n(37);var o=n(6),r=(n(16),n(7),n(5),n(4),n(11),n(47),n(2)),c=n(274),l=n.n(c),d=n(93);function m(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var f={data:function(){return{menu:[{id:1,label:"Meu Perfil",icon:"mdi-account",link:"/aluno/perfil"},{id:2,label:"Meus Cursos",icon:"mdi-library",link:"/aluno/meus-cursos"},{id:3,label:"Meus Certificados",icon:"mdi-school",link:"/aluno/certificados"},{id:4,label:"Contribua",icon:"mdi-source-fork",link:"/contribua"},{id:5,label:"Sobre",icon:"mdi-file-document-box",link:"/sobre"},{id:6,label:"Ajuda",icon:"mdi-help-circle",link:"/ajuda"},{id:7,label:"Contato",icon:"mdi-cellphone",link:"/contato"},{id:8,label:"Imprensa",icon:"mdi-camcorder",link:"/imprensa"},{id:9,label:"Investidores",icon:"mdi-coin",link:"/investidores"}]}},methods:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(d.b)("user",["clearInfoUser"]),{closeMenu:function(){document.getElementById("menu-btn").click()},logout:function(){localStorage.clear(),$nuxt._router.push("/login"),this.clearInfoUser()}}),computed:{user:function(){return this.$store.state.user.data}},filters:{simplifyName:function(t){if(t.split(" ").length>2)return/^(\S*\s+\S+).*/.exec(t)[1]}},components:{Avatar:l.a}},v=(n(264),n(32)),h=n(35),x=n.n(h),w=n(256),k=n(252),component=Object(v.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container-page"},[n("main",[n("section",{attrs:{id:"info"}},[n("div",{attrs:{id:"avatar"}},[n("div",{staticClass:"flex-center border-profile-photo"},[n("div",{staticClass:"flex-center profile-container"},[n("avatar",{attrs:{username:t.user.name||t.simplifyName,size:90}})],1)])]),t._v(" "),n("div",{staticClass:"flex-center",attrs:{id:"flex-info-user"}},[n("h1",[t._v(t._s(t.user.name))]),t._v(" "),n("p",[t._v(t._s(t.user.type))]),t._v(" "),n("v-btn",{attrs:{id:"btnLogout",small:"",outlined:"",color:"error",width:"80px"},on:{click:t.logout}},[t._v("Sair")])],1)]),t._v(" "),n("div",{attrs:{id:"close"}},[n("v-icon",{attrs:{id:"close-btn",color:"primary"},on:{click:function(e){return t.closeMenu()}}},[t._v("mdi-close-circle")])],1)]),t._v(" "),n("section",{staticClass:"menu-list"},t._l(t.menu,(function(e){return n("router-link",{key:e.id,staticClass:"item-menu",attrs:{tag:"div",to:e.link}},[n("div",[n("v-icon",{attrs:{color:"primary"}},[t._v(t._s(e.icon))])],1),t._v(" "),n("p",[t._v(t._s(e.label))])])})),1)])}),[],!1,null,null,null),y=component.exports;x()(component,{VBtn:w.a,VIcon:k.a});n(92);var _,j={data:function(){return{viewMenu:!1,menu:[{id:1,name:"Home",icon:"mdi-home",link:"/aluno/home"},{id:2,name:"Perfil",icon:"mdi-account",link:"/aluno/perfil"},{id:3,name:"Meus Cursos",icon:"mdi-library",link:"/aluno/meus-cursos"},{id:4,name:"Certificados",icon:"mdi-school",link:"/aluno/certificados"}]}},components:{SideMenu:y},mounted:function(){this.changeRoutingIfAdmin()},methods:{setViewMenu:function(){this.viewMenu=!this.viewMenu},changeRoutingIfAdmin:(_=Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:"ADMIN"==this.$store.state.user.data.role&&(this.menu[0].link="/admin/home",this.menu[2].link="/admin/meus-cursos");case 2:case"end":return t.stop()}}),t,this)}))),function(){return _.apply(this,arguments)})}},O=(n(266),n(513)),M=Object(v.a)(j,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("side-menu",{directives:[{name:"show",rawName:"v-show",value:t.viewMenu,expression:"viewMenu"}],staticClass:"intro-transition"}),t._v(" "),n("v-bottom-navigation",{attrs:{"scroll-target":"#page",fixed:"","scroll-threshold":"500",color:"write",horizontal:""}},[t._l(t.menu,(function(e){return n("v-btn",{key:e.id,staticClass:"btn-fixed",attrs:{to:e.link}},[n("span",[t._v(t._s(e.name))]),t._v(" "),n("v-icon",[t._v(t._s(e.icon))])],1)})),t._v(" "),n("v-btn",{staticClass:"btn-fixed",attrs:{id:"menu-btn"},on:{click:t.setViewMenu}},[n("span",[t._v("Outros")]),t._v(" "),n("v-icon",[t._v("mdi-apps")])],1)],2)],1)}),[],!1,null,null,null);e.a=M.exports;x()(M,{VBottomNavigation:O.a,VBtn:w.a,VIcon:k.a})},264:function(t,e,n){"use strict";var o=n(258);n.n(o).a},265:function(t,e,n){(e=n(20)(!1)).push([t.i,"#btnLogout{margin-top:5px}.container-page>main{-webkit-box-pack:justify;justify-content:space-between;padding:.5rem;margin-top:1rem;width:100%}#info,.container-page>main{display:-webkit-box;display:flex}#avatar{margin-right:1rem}h1{font-size:1.4rem;font-weight:600;text-transform:capitalize}.container-page{background-color:#fff;position:fixed;width:100%;height:100%;top:0;left:0}.row{margin-left:0}#close-btn{cursor:pointer;font-size:30px}#flex-info-user{-webkit-box-pack:start;justify-content:flex-start;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-align:baseline;align-items:baseline}.flex-center{display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center}.border-profile-photo{height:95px;width:95px;border:1px solid #60c;border-radius:50px}.profile-container{width:85px;height:85px;border-radius:50px;overflow:hidden}.profile-container img{width:100%}.item-menu{width:100%;padding:13px;border-bottom:1px solid #e8e8e8;-webkit-box-align:center;align-items:center;color:#60c!important;cursor:pointer}.item-menu,.item-menu div{display:-webkit-box;display:flex}.item-menu div{width:50px;-webkit-box-pack:center;justify-content:center;margin-right:2rem}.item-menu:hover{background-color:#e8d1ff}.col-flex-center{display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center;-webkit-box-align:baseline;align-items:baseline}p{margin-bottom:0!important}h4{font-weight:600}@media(max-width:320px){.item-menu{height:42px}}",""]),t.exports=e},266:function(t,e,n){"use strict";var o=n(259);n.n(o).a},267:function(t,e,n){(e=n(20)(!1)).push([t.i,".v-btn__content{-webkit-box-orient:vertical!important;-webkit-box-direction:reverse!important;flex-direction:column-reverse!important}.v-icon{margin-right:0!important}#page{margin-bottom:5rem!important}.btn-fixed{height:100%!important}.intro-transition{-webkit-animation-name:intro;animation-name:intro;-webkit-animation-duration:.2s;animation-duration:.2s}.v-item-group.v-bottom-navigation .v-btn.v-btn--active .v-btn__content{color:#60c}@media (max-width:375px){.v-btn{min-width:55px!important;font-size:.6rem!important}}",""]),t.exports=e},332:function(t,e){},427:function(t,e,n){"use strict";var o=n(332),r=n.n(o);e.default=r.a},501:function(t,e,n){"use strict";n.r(e);var o={components:{NavigationBar:n(263).a}},r=n(32),c=n(427),component=Object(r.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("div",{attrs:{id:"page"}}),this._v(" "),e("client-only",[e("navigation-bar")],1)],1)}),[],!1,null,"1bd28302",null);"function"==typeof c.default&&Object(c.default)(component);e.default=component.exports}}]);