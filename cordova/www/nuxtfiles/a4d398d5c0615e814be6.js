(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{330:function(t,e,o){var content=o(425);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(21).default)("0181dc4e",content,!0,{sourceMap:!1})},331:function(t,e){},423:function(t,e,o){t.exports=o.p+"img/06c8dcd.svg"},424:function(t,e,o){"use strict";var n=o(330);o.n(n).a},425:function(t,e,o){(e=o(20)(!1)).push([t.i,"@import url(https://fonts.googleapis.com/css?family=Montserrat:400,500,900&display=swap);"]),e.push([t.i,"*[data-v-0faf4556]{font-family:Montserrat,Helvetica,Arial,sans-serif!important}.flex[data-v-0faf4556]{-webkit-animation:intro .3s backwards;animation:intro .3s backwards;-webkit-animation-delay:.35s;animation-delay:.35s}.layout[data-v-0faf4556]{background:#fff!important}.page-title[data-v-0faf4556]{font-size:20px;font-weight:900;line-height:24px;text-transform:uppercase;color:#60c;width:90%;margin-left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}.logo-container[data-v-0faf4556]{display:-webkit-box;display:flex;-webkit-box-pack:start;justify-content:flex-start;-webkit-box-align:start;align-items:flex-start}.logo-container img[data-v-0faf4556]{width:48px}[data-v-0faf4556] .theme--light.v-text-field{margin-top:0}[data-v-0faf4556] .v-input{width:90%;margin-left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}[data-v-0faf4556] .theme--light.v-input:not(.v-input--is-disabled) input{font-size:12px;color:#60c}[data-v-0faf4556] .theme--light.v-text-field:not(.v-input--has-state)>.v-input__control>.v-input__slot:hover:before{border-color:#60c}[data-v-0faf4556] .theme--light.v-icon,[data-v-0faf4556] .theme--light.v-label{font-size:12px;font-weight:600;line-height:15px;color:#aa56ff}[data-v-0faf4556] .theme--light.v-icon{font-size:20px}[data-v-0faf4556] .v-btn{margin-top:15px}[data-v-0faf4556] .v-btn__content{color:#fff;font-size:12px;font-weight:900;line-height:15px}[data-v-0faf4556] .theme--light.v-text-field>.v-input__control>.v-input__slot:before{border-color:#aa56ff}[data-v-0faf4556] .v-text-field.v-input--has-state>.v-input__control>.v-input__slot:before{border-color:#ff5252}[data-v-0faf4556] .v-messages__message{color:#ff5252;font-size:12px;margin-left:5px}.login-link[data-v-0faf4556]{font-size:12px;color:#60c}.hide-form[data-v-0faf4556]{-webkit-animation:down .3s forwards;animation:down .3s forwards}.error-form[data-v-0faf4556]{-webkit-animation:nono .3s,intro paused;animation:nono .3s,intro paused}",""]),t.exports=e},426:function(t,e,o){"use strict";var n=o(331),r=o.n(n);e.default=r.a},500:function(t,e,o){"use strict";o.r(e);var n=o(92),r=o(31),l={data:function(){return{title:"Cadastro",status:!0,loading:!1,showPass:String,showConfirmPass:String,snackbar:!1,snackbarText:"",snackbarStatus:"",token:"",form:{name:"",email:"",password:"",confirmPassword:"",urlFacebook:"",urlInstagram:""},nameRules:[function(t){return!!t||"Digite seu nome"}],passwordRules:[function(t){return!!t||"Digite a senha"},function(t){return t&&t.length>=6||"A senha deve ter no mínimo 6 caractéres"}],emailRules:[function(t){return!!t||"Digite o e-mail"},function(t){return/.+@.+\..+/.test(t)||"E-mail inválido"}]}},head:function(){return{title:this.title,meta:[{hid:"description",name:"description",content:"Cadastra-se no aplicativo da New School - Levamos educação de qualidade na linguagem da quebrada para as periferias do Brasil, através da tecnologia e da curadoria de conteúdos baseados nas habilidades do futuro."}]}},methods:{submit:function(){var t=this;if(this.$refs.form.validate()){var e=Object.assign({},this.form);delete e.confirmPassword,this.animateForm(!0),n.a.signUp(e,this.token).then((function(e){t.loading=!1,t.confirmSnackbar("Cadastro efetuado! ;)","success"),setTimeout((function(){t.gotoLogin()}),2500)})).catch((function(e){t.confirmSnackbar("Ocorreu um erro.","error"),setTimeout((function(){t.loading=!1}),500),console.error(e)}))}else this.animateForm(!1)},animateForm:function(t){var e=this;t?(this.$refs.flex.classList.add("hide-form"),document.querySelector("html").style.overflow="hidden",setTimeout((function(){e.loading=!0}),300)):(this.$refs.flex.classList.add("error-form"),setTimeout((function(){e.$refs.flex.classList.remove("error-form")}),500)),document.querySelector("html").style.overflow="scroll"},showPassword:function(){"mdi-eye"===this.eyeIcon?this.eyeIcon="mdi-eye-off":this.eyeIcon="mdi-eye"},showConfirmPassword:function(){"mdi-eye"===this.eyeIcon2?this.eyeIcon2="mdi-eye-off":this.eyeIcon2="mdi-eye"},gotoLogin:function(){$nuxt._router.push("/login")},confirmSnackbar:function(text,t){this.snackbarText=text,this.snackbarStatus=t,this.snackbar=!0},loadClientCredentials:function(){var t=this;r.a.getExternalCredentials().then((function(e){console.log(e),t.token=e.data.accessToken})).catch((function(){$nuxt._router.push("/login")}))}},mounted:function(){this.loadClientCredentials()},computed:{confirmPasswordRules:function(){var t=this;return[function(t){return!!t||"Confirme a senha"},function(){return t.form.password===t.form.confirmPassword||"As senhas devem ser idênticas."}]}}},c=(o(424),o(32)),f=o(426),d=o(36),m=o.n(d),v=o(256),h=o(300),w=o(295),x=o(357),k=o(487),y=o(314),_=o(106),C=o(301),P=o(304),F=o(296),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-layout",{attrs:{"align-center":"","justify-center":""}},[t.loading?n("v-progress-circular",{attrs:{size:70,width:5,indeterminate:""}}):n("v-flex",{ref:"flex",attrs:{xs10:"",sm8:"",md6:""}},[n("v-container",[n("v-row",[n("v-col",{attrs:{cols:"12"}},[n("div",{staticClass:"logo-container"},[n("img",{attrs:{src:o(423),alt:"castor"}})])])],1),t._v(" "),n("v-row",[n("v-col",{attrs:{cols:"12"}},[n("h1",{staticClass:"page-title"},[t._v("Cadastro")])])],1),t._v(" "),n("v-row",[n("v-col",{attrs:{cols:"12"}},[n("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:t.status,callback:function(e){t.status=e},expression:"status"}},[n("v-text-field",{attrs:{color:"#60c",label:"Nome *",name:"name",required:""},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}}),t._v(" "),n("v-text-field",{attrs:{color:"#60c",rules:t.emailRules,label:"Email *",name:"email",required:""},model:{value:t.form.email,callback:function(e){t.$set(t.form,"email",e)},expression:"form.email"}}),t._v(" "),n("v-text-field",{attrs:{color:"#60c",label:"Senha *",name:"password",rules:t.passwordRules,type:t.showPass?"password":"text","append-icon":t.showPass?"mdi-eye-off":"mdi-eye",required:""},on:{"click:append":function(){return t.showPass=!t.showPass}},model:{value:t.form.password,callback:function(e){t.$set(t.form,"password",e)},expression:"form.password"}}),t._v(" "),n("v-text-field",{attrs:{color:"#60c",label:"Confirmar senha *",rules:t.confirmPasswordRules,type:t.showConfirmPass?"password":"text","append-icon":t.showConfirmPass?"mdi-eye-off":"mdi-eye",required:""},on:{"click:append":function(){return t.showConfirmPass=!t.showConfirmPass}},model:{value:t.form.confirmPassword,callback:function(e){t.$set(t.form,"confirmPassword",e)},expression:"form.confirmPassword"}}),t._v(" "),n("v-text-field",{attrs:{color:"#60c",label:"URL do Facebook",name:"urlFacebook",required:""},model:{value:t.form.urlFacebook,callback:function(e){t.$set(t.form,"urlFacebook",e)},expression:"form.urlFacebook"}}),t._v(" "),n("v-text-field",{attrs:{color:"#60c",type:"text",label:"URL do Instagram",name:"urlInstagram",required:""},model:{value:t.form.urlInstagram,callback:function(e){t.$set(t.form,"urlInstagram",e)},expression:"form.urlInstagram"}}),t._v(" "),n("v-btn",{attrs:{color:"#60c",dark:"",block:"",depressed:"",large:""},on:{click:t.submit}},[t._v("Cadastrar")])],1)],1),t._v(" "),n("v-col",{staticClass:"text-center",attrs:{cols:"12"}},[n("a",{staticClass:"login-link",on:{click:t.gotoLogin}},[t._v("Ops, já tenho conta")])]),t._v(" "),n("v-snackbar",{attrs:{color:t.snackbarStatus,timeout:5e3,top:!0,right:!0},model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[t._v("\n          "+t._s(t.snackbarText)+"\n          "),n("v-btn",{attrs:{color:"#FFF",text:""},on:{click:function(e){t.snackbar=!1}}},[t._v("Fechar")])],1)],1)],1)],1)],1)}),[],!1,null,"0faf4556",null);"function"==typeof f.default&&Object(f.default)(component);e.default=component.exports;m()(component,{VBtn:v.a,VCol:h.a,VContainer:w.a,VFlex:x.a,VForm:k.a,VLayout:y.a,VProgressCircular:_.a,VRow:C.a,VSnackbar:P.a,VTextField:F.a})}}]);