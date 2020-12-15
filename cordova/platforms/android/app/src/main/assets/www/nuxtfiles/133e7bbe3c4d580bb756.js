/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[92],{1047:function(t,e,n){"use strict";n.r(e);var r=n(333);n(514);var o=function(){return(o=Object.assign||function(t){for(var s,i=1,e=arguments.length;i<e;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t}).apply(this,arguments)};function c(){for(var s=0,i=0,t=arguments.length;i<t;i++)s+=arguments[i].length;var e=Array(s),n=0;for(i=0;i<t;i++)for(var a=arguments[i],r=0,o=a.length;r<o;r++,n++)e[n]=a[r];return e}var f,l,m,h=n(338),d=n(360),v=n(339),_=((f={})["trace started"]="Trace {$traceName} was started before.",f["trace stopped"]="Trace {$traceName} is not running.",f["nonpositive trace startTime"]="Trace {$traceName} startTime should be positive.",f["nonpositive trace duration"]="Trace {$traceName} duration should be positive.",f["no window"]="Window is not available.",f["no app id"]="App id is not available.",f["no project id"]="Project id is not available.",f["no api key"]="Api key is not available.",f["invalid cc log"]="Attempted to queue invalid cc event",f["FB not default"]="Performance can only start when Firebase app instance is the default one.",f["RC response not ok"]="RC response is not ok",f["invalid attribute name"]="Attribute name {$attributeName} is invalid.",f["invalid attribute value"]="Attribute value {$attributeValue} is invalid.",f["invalid custom metric name"]="Custom metric name {$customMetricName} is invalid",f["invalid String merger input"]="Input for String merger is invalid, contact support team to resolve.",f),y=new h.b("performance","Performance",_),I=new d.b("Performance");I.logLevel=d.a.INFO;var T,w=function(){function t(t){if(this.window=t,!t)throw y.create("no window");this.performance=t.performance,this.PerformanceObserver=t.PerformanceObserver,this.windowLocation=t.location,this.navigator=t.navigator,this.document=t.document,this.navigator&&this.navigator.cookieEnabled&&(this.localStorage=t.localStorage),t.perfMetrics&&t.perfMetrics.onFirstInputDelay&&(this.onFirstInputDelay=t.perfMetrics.onFirstInputDelay)}return t.prototype.getUrl=function(){return this.windowLocation.href.split("?")[0]},t.prototype.mark=function(t){this.performance&&this.performance.mark&&this.performance.mark(t)},t.prototype.measure=function(t,e,n){this.performance&&this.performance.measure&&this.performance.measure(t,e,n)},t.prototype.getEntriesByType=function(t){return this.performance&&this.performance.getEntriesByType?this.performance.getEntriesByType(t):[]},t.prototype.getEntriesByName=function(t){return this.performance&&this.performance.getEntriesByName?this.performance.getEntriesByName(t):[]},t.prototype.getTimeOrigin=function(){return this.performance&&(this.performance.timeOrigin||this.performance.timing.navigationStart)},t.prototype.requiredApisAvailable=function(){return fetch&&Promise&&this.navigator&&this.navigator.cookieEnabled?!!Object(h.w)()||(I.info("IndexedDB is not supported by current browswer"),!1):(I.info("Firebase Performance cannot start if browser does not support fetch and Promise or cookie is disabled."),!1)},t.prototype.setupObserver=function(t,e){this.PerformanceObserver&&new this.PerformanceObserver((function(t){for(var n=0,r=t.getEntries();n<r.length;n++){var o=r[n];e(o)}})).observe({entryTypes:[t]})},t.getInstance=function(){return void 0===l&&(l=new t(m)),l},t}();function E(t,e){var n=t.length-e.length;if(n<0||n>1)throw y.create("invalid String merger input");for(var r=[],i=0;i<t.length;i++)r.push(t.charAt(i)),e.length>i&&r.push(e.charAt(i));return r.join("")}var A,S,M=function(){function t(){this.instrumentationEnabled=!0,this.dataCollectionEnabled=!0,this.loggingEnabled=!1,this.tracesSamplingRate=1,this.networkRequestsSamplingRate=1,this.logEndPointUrl="https://firebaselogging.googleapis.com/v0cc/log?format=json_proto",this.flTransportEndpointUrl=E("hts/frbslgigp.ogepscmv/ieo/eaylg","tp:/ieaeogn-agolai.o/1frlglgc/o"),this.transportKey=E("AzSC8r6ReiGqFMyfvgow","Iayx0u-XT3vksVM-pIV"),this.logSource=462,this.logTraceAfterSampling=!1,this.logNetworkAfterSampling=!1,this.configTimeToLive=12}return t.prototype.getAppId=function(){var t=this.firebaseAppInstance&&this.firebaseAppInstance.options&&this.firebaseAppInstance.options.appId;if(!t)throw y.create("no app id");return t},t.prototype.getProjectId=function(){var t=this.firebaseAppInstance&&this.firebaseAppInstance.options&&this.firebaseAppInstance.options.projectId;if(!t)throw y.create("no project id");return t},t.prototype.getApiKey=function(){var t=this.firebaseAppInstance&&this.firebaseAppInstance.options&&this.firebaseAppInstance.options.apiKey;if(!t)throw y.create("no api key");return t},t.prototype.getFlTransportFullUrl=function(){return this.flTransportEndpointUrl.concat("?key=",this.transportKey)},t.getInstance=function(){return void 0===T&&(T=new t),T},t}();function N(){return A}!function(t){t[t.UNKNOWN=0]="UNKNOWN",t[t.VISIBLE=1]="VISIBLE",t[t.HIDDEN=2]="HIDDEN"}(S||(S={}));var k=["firebase_","google_","ga_"],R=new RegExp("^[a-zA-Z]\\w*$");function O(){switch(w.getInstance().document.visibilityState){case"visible":return S.VISIBLE;case"hidden":return S.HIDDEN;default:return S.UNKNOWN}}function U(){var t=w.getInstance().navigator.connection;switch(t&&t.effectiveType){case"slow-2g":return 1;case"2g":return 2;case"3g":return 3;case"4g":return 4;default:return 0}}var P=!0;function B(t){var e=function(){var t=w.getInstance().localStorage;if(!t)return;var e=t.getItem("@firebase/performance/configexpire");if(!(e&&(n=e,Number(n)>Date.now())))return;var n;var r=t.getItem("@firebase/performance/config");if(!r)return;try{return JSON.parse(r)}catch(t){return}}();return e?(F(e),Promise.resolve()):function(t){return(e=M.getInstance().installationsService.getToken(),e.then((function(t){})),e).then((function(e){var n="https://firebaseremoteconfig.googleapis.com/v1/projects/"+M.getInstance().getProjectId()+"/namespaces/fireperf:fetch?key="+M.getInstance().getApiKey(),r=new Request(n,{method:"POST",headers:{Authorization:"FIREBASE_INSTALLATIONS_AUTH "+e},body:JSON.stringify({app_instance_id:t,app_instance_id_token:e,app_id:M.getInstance().getAppId(),app_version:"0.4.4",sdk_version:"0.0.1"})});return fetch(r).then((function(t){if(t.ok)return t.json();throw y.create("RC response not ok")}))})).catch((function(){I.info("Could not fetch config, will use default configs")}));var e}(t).then(F).then((function(t){return function(t){var e=w.getInstance().localStorage;if(!t||!e)return;e.setItem("@firebase/performance/config",JSON.stringify(t)),e.setItem("@firebase/performance/configexpire",String(Date.now()+60*M.getInstance().configTimeToLive*60*1e3))}(t)}),(function(){}))}function F(t){if(!t)return t;var e=M.getInstance(),n=t.entries||{};return void 0!==n.fpr_enabled?e.loggingEnabled="true"===String(n.fpr_enabled):e.loggingEnabled=P,n.fpr_log_source&&(e.logSource=Number(n.fpr_log_source)),n.fpr_log_endpoint_url&&(e.logEndPointUrl=n.fpr_log_endpoint_url),n.fpr_log_transport_key&&(e.transportKey=n.fpr_log_transport_key),void 0!==n.fpr_vc_network_request_sampling_rate&&(e.networkRequestsSamplingRate=Number(n.fpr_vc_network_request_sampling_rate)),void 0!==n.fpr_vc_trace_sampling_rate&&(e.tracesSamplingRate=Number(n.fpr_vc_trace_sampling_rate)),e.logTraceAfterSampling=C(e.tracesSamplingRate),e.logNetworkAfterSampling=C(e.networkRequestsSamplingRate),t}function C(t){return Math.random()<=t}var j,D=1;function L(){var t;return D=2,j=j||(t=w.getInstance().document,new Promise((function(e){if(t&&"complete"!==t.readyState){var n=function(){"complete"===t.readyState&&(t.removeEventListener("readystatechange",n),e())};t.addEventListener("readystatechange",n)}else e()}))).then((function(){return(t=M.getInstance().installationsService.getId()).then((function(t){A=t})),t;var t})).then((function(t){return B(t)})).then((function(){return x()}),(function(){return x()}))}function x(){D=3}var W,K=3,V=[],J=!1;function $(t){setTimeout((function(){if(0!==K)return V.length?void function(){var t=c(V);V=[];var e=t.map((function(t){return{source_extension_json_proto3:t.message,event_time_ms:String(t.eventTime)}}));(function(data,t){return function(data){var t=M.getInstance().getFlTransportFullUrl();return fetch(t,{method:"POST",body:JSON.stringify(data)})}(data).then((function(t){return t.ok||I.info("Call to Firebase backend failed."),t.json()})).then((function(e){var n=Number(e.nextRequestWaitMillis),r=1e4;isNaN(n)||(r=Math.max(n,r));var o=e.logResponseDetails;Array.isArray(o)&&o.length>0&&"RETRY_REQUEST_LATER"===o[0].responseAction&&(V=c(t,V),I.info("Retry transport request later.")),K=3,$(r)}))})({request_time_ms:String(Date.now()),client_info:{client_type:1,js_client_info:{}},log_source:M.getInstance().logSource,log_event:e},t).catch((function(){V=c(t,V),K--,I.info("Tries left: "+K+"."),$(1e4)}))}():$(1e4)}),t)}function z(t){if(!t.eventTime||!t.message)throw y.create("invalid cc log");V=c(V,[t])}function H(t,e){W||(W=function(t){return function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];var r=t.apply(void 0,e);z({message:r,eventTime:Date.now()})}}(X)),W(t,e)}function G(t){var e=M.getInstance();!e.instrumentationEnabled&&t.isAuto||(e.dataCollectionEnabled||t.isAuto)&&w.getInstance().requiredApisAvailable()&&(t.isAuto&&O()!==S.VISIBLE||(3===D?Q(t):L().then((function(){return Q(t)}),(function(){return Q(t)}))))}function Q(t){if(N()){var e=M.getInstance();e.loggingEnabled&&e.logTraceAfterSampling&&setTimeout((function(){return H(t,1)}),0)}}function X(t,e){return 0===e?(r={url:(n=t).url,http_method:n.httpMethod||0,http_response_code:200,response_payload_bytes:n.responsePayloadBytes,client_start_time_us:n.startTimeUs,time_to_response_initiated_us:n.timeToResponseInitiatedUs,time_to_response_completed_us:n.timeToResponseCompletedUs},o={application_info:Y(),network_request_metric:r},JSON.stringify(o)):function(t){var e={name:t.name,is_auto:t.isAuto,client_start_time_us:t.startTimeUs,duration_us:t.durationUs};0!==Object.keys(t.counters).length&&(e.counters=t.counters);var n=t.getAttributes();0!==Object.keys(n).length&&(e.custom_attributes=n);var r={application_info:Y(),trace_metric:e};return JSON.stringify(r)}(t);var n,r,o}function Y(){return{google_app_id:M.getInstance().getAppId(),app_instance_id:N(),web_app_info:{sdk_version:"0.4.4",page_url:w.getInstance().getUrl(),service_worker_status:(t=w.getInstance().navigator,"serviceWorker"in t?t.serviceWorker.controller?2:3:1),visibility_state:O(),effective_connection_type:U()},application_process_state:0};var t}var Z=["_fp","_fcp","_fid"];var tt=function(){function t(t,e,n){void 0===e&&(e=!1),this.name=t,this.isAuto=e,this.state=1,this.customAttributes={},this.counters={},this.api=w.getInstance(),this.randomId=Math.floor(1e6*Math.random()),this.isAuto||(this.traceStartMark="FB-PERF-TRACE-START-"+this.randomId+"-"+this.name,this.traceStopMark="FB-PERF-TRACE-STOP-"+this.randomId+"-"+this.name,this.traceMeasure=n||"FB-PERF-TRACE-MEASURE-"+this.randomId+"-"+this.name,n&&this.calculateTraceMetrics())}return t.prototype.start=function(){if(1!==this.state)throw y.create("trace started",{traceName:this.name});this.api.mark(this.traceStartMark),this.state=2},t.prototype.stop=function(){if(2!==this.state)throw y.create("trace stopped",{traceName:this.name});this.state=3,this.api.mark(this.traceStopMark),this.api.measure(this.traceMeasure,this.traceStartMark,this.traceStopMark),this.calculateTraceMetrics(),G(this)},t.prototype.record=function(t,e,n){if(t<=0)throw y.create("nonpositive trace startTime",{traceName:this.name});if(e<=0)throw y.create("nonpositive trace duration",{traceName:this.name});if(this.durationUs=Math.floor(1e3*e),this.startTimeUs=Math.floor(1e3*t),n&&n.attributes&&(this.customAttributes=o({},n.attributes)),n&&n.metrics)for(var r=0,c=Object.keys(n.metrics);r<c.length;r++){var f=c[r];isNaN(Number(n.metrics[f]))||(this.counters[f]=Number(Math.floor(n.metrics[f])))}G(this)},t.prototype.incrementMetric=function(t,e){void 0===e&&(e=1),void 0===this.counters[t]?this.putMetric(t,e):this.putMetric(t,this.counters[t]+e)},t.prototype.putMetric=function(t,e){if(o=t,c=this.name,0===o.length||o.length>100||!(c&&c.startsWith("_wt_")&&Z.indexOf(o)>-1)&&o.startsWith("_"))throw y.create("invalid custom metric name",{customMetricName:t});var n,r,o,c;this.counters[t]=(n=e,(r=Math.floor(n))<n&&I.info("Metric value should be an Integer, setting the value as : "+r+"."),r)},t.prototype.getMetric=function(t){return this.counters[t]||0},t.prototype.putAttribute=function(t,e){var n,r=!(0===(n=t).length||n.length>40||k.some((function(t){return n.startsWith(t)}))||!n.match(R)),o=function(t){return 0!==t.length&&t.length<=100}(e);if(r&&o)this.customAttributes[t]=e;else{if(!r)throw y.create("invalid attribute name",{attributeName:t});if(!o)throw y.create("invalid attribute value",{attributeValue:e})}},t.prototype.getAttribute=function(t){return this.customAttributes[t]},t.prototype.removeAttribute=function(t){void 0!==this.customAttributes[t]&&delete this.customAttributes[t]},t.prototype.getAttributes=function(){return o({},this.customAttributes)},t.prototype.setStartTime=function(t){this.startTimeUs=t},t.prototype.setDuration=function(t){this.durationUs=t},t.prototype.calculateTraceMetrics=function(){var t=this.api.getEntriesByName(this.traceMeasure),e=t&&t[0];e&&(this.durationUs=Math.floor(1e3*e.duration),this.startTimeUs=Math.floor(1e3*(e.startTime+this.api.getTimeOrigin())))},t.createOobTrace=function(e,n,r){var o=w.getInstance().getUrl();if(o){var c=new t("_wt_"+o,!0),f=Math.floor(1e3*w.getInstance().getTimeOrigin());c.setStartTime(f),e&&e[0]&&(c.setDuration(Math.floor(1e3*e[0].duration)),c.putMetric("domInteractive",Math.floor(1e3*e[0].domInteractive)),c.putMetric("domContentLoadedEventEnd",Math.floor(1e3*e[0].domContentLoadedEventEnd)),c.putMetric("loadEventEnd",Math.floor(1e3*e[0].loadEventEnd)));if(n){var l=n.find((function(t){return"first-paint"===t.name}));l&&l.startTime&&c.putMetric("_fp",Math.floor(1e3*l.startTime));var m=n.find((function(t){return"first-contentful-paint"===t.name}));m&&m.startTime&&c.putMetric("_fcp",Math.floor(1e3*m.startTime)),r&&c.putMetric("_fid",Math.floor(1e3*r))}G(c)}},t.createUserTimingTrace=function(e){G(new t(e,!1,e))},t}();function et(t){var e=t;if(e&&void 0!==e.responseStart){var n=w.getInstance().getTimeOrigin(),r=Math.floor(1e3*(e.startTime+n)),o=e.responseStart?Math.floor(1e3*(e.responseStart-e.startTime)):void 0,c=Math.floor(1e3*(e.responseEnd-e.startTime));!function(t){var e=M.getInstance();if(e.instrumentationEnabled){var n=t.url,r=e.logEndPointUrl.split("?")[0],o=e.flTransportEndpointUrl.split("?")[0];n!==r&&n!==o&&e.loggingEnabled&&e.logNetworkAfterSampling&&setTimeout((function(){return H(t,0)}),0)}}({url:e.name&&e.name.split("?")[0],responsePayloadBytes:e.transferSize,startTimeUs:r,timeToResponseInitiatedUs:o,timeToResponseCompletedUs:c})}}function nt(){N()&&(setTimeout((function(){return function(){var t=w.getInstance(),e=t.getEntriesByType("navigation"),n=t.getEntriesByType("paint");if(t.onFirstInputDelay){var r=setTimeout((function(){tt.createOobTrace(e,n),r=void 0}),5e3);t.onFirstInputDelay((function(t){r&&(clearTimeout(r),tt.createOobTrace(e,n,t))}))}else tt.createOobTrace(e,n)}()}),0),setTimeout((function(){return function(){for(var t=w.getInstance(),e=t.getEntriesByType("resource"),n=0,r=e;n<r.length;n++){et(r[n])}t.setupObserver("resource",et)}()}),0),setTimeout((function(){return function(){for(var t=w.getInstance(),e=t.getEntriesByType("measure"),n=0,r=e;n<r.length;n++){it(r[n])}t.setupObserver("measure",it)}()}),0))}function it(t){var e=t.name;"FB-PERF-TRACE-MEASURE"!==e.substring(0,"FB-PERF-TRACE-MEASURE".length)&&tt.createUserTimingTrace(e)}var ot,at,st=function(){function t(t){this.app=t,w.getInstance().requiredApisAvailable()&&Object(h.N)().then((function(t){t&&(J||($(5500),J=!0),L().then(nt,nt))})).catch((function(t){I.info("Environment doesn't support IndexedDB: "+t)}))}return t.prototype.trace=function(t){return new tt(t)},Object.defineProperty(t.prototype,"instrumentationEnabled",{get:function(){return M.getInstance().instrumentationEnabled},set:function(t){M.getInstance().instrumentationEnabled=t},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"dataCollectionEnabled",{get:function(){return M.getInstance().dataCollectionEnabled},set:function(t){M.getInstance().dataCollectionEnabled=t},enumerable:!1,configurable:!0}),t}();ot=r.a,at=function(t,e){if("[DEFAULT]"!==t.name)throw y.create("FB not default");if("undefined"==typeof window)throw y.create("no window");return function(t){m=t}(window),M.getInstance().firebaseAppInstance=t,M.getInstance().installationsService=e,new st(t)},ot.INTERNAL.registerComponent(new v.a("performance",(function(t){var e=t.getProvider("app").getImmediate(),n=t.getProvider("installations").getImmediate();return at(e,n)}),"PUBLIC")),ot.registerVersion("@firebase/performance","0.4.4")}}]);