require.config({baseUrl:"/javascript",waitSeconds:0,urlArgs:"bust="+(new Date).getTime(),paths:{jquery:"lib/jquery/jquery.min",underscore:"lib/underscore/underscore-min",nicescroll:"vendor/jquery.nicescroll/jquery.nicescroll.min",store2:"lib/store/dist/store2.min",Q:"lib/q/q",backbone:"lib/backbone/backbone-min",wreqr:"lib/backbone.wreqr/lib/backbone.wreqr.min",tpl:"lib/requirejs-tpl/tpl",text:"lib/requirejs-text/text",marionette:"lib/backbone.marionette/lib/backbone.marionette.min",jquery_ui:"vendor/jquery-ui/jquery-ui.min",easing:"lib/jquery-easing/jquery.easing.min",i18n:"lib/i18next/i18next.amd.withJQuery.min",jquery_event_drag:"lib/slickgrid/lib/jquery.event.drag-2.2",slickgrid_core:"lib/slickgrid/slick.core",slickgrid:"lib/slickgrid/slick.grid",slick_rowselect:"lib/slickgrid/plugins/slick.rowselectionmodel",slick_checkbox:"vendor/plugin/slick.checkboxselectcolumn",moment:"lib/moment/moment","moment-timezone":"lib/moment-timezone/builds/moment-timezone-with-data.min",zeroclipboard:"lib/zeroclipboard/dist/ZeroClipboard.min",daterangepicker:"vendor/bootstrap-daterangepicker/daterangepicker",pnotify:"vendor/pnotify/pnotify.core","pnotify.buttons":"vendor/pnotify/pnotify.buttons","pnotify.nonblock":"vendor/pnotify/pnotify.nonblock","visualcaptcha.jquery":"vendor/visualcaptcha.jquery/visualcaptcha.jquery",validate:"lib/jquery.validation/dist/jquery.validate.min",scrollTo:"lib/jquery.scrollTo/jquery.scrollTo.min",pace:"lib/pace/pace.min","jquery-sortable":"lib/jquery-sortable/source/js/jquery-sortable-min",basic:"core/basic",data:"core/basic/data",event:"core/basic/event",net:"core/basic/net",view:"core/basic/view",other:"core/basic/other",dispatcher:"core/functions/Dispatcher",U:"core/functions/Utils",Storage:"core/functions/Storage",Timezone:"core/functions/Timezone",Cookie:"core/functions/Cookie",Logger:"core/functions/Logger",State:"core/functions/State",app:"core/functions/App",formatter:"core/functions/Formatter",language:"core/functions/Language",UI:"core/functions/UI",layout:"core/layout",container:"core/container",component:"core/component",emptyView:"core/component/empty/view",store:"core/store",extend:"core/extend",Captcha:"core/functions/Captcha",C:"config/Config",API:"config/API",semanticui:"../semanticui/dist/semantic",semanticui_accordion:"../semanticui/dist/components/accordion.min",semanticui_checkbox:"../semanticui/dist/components/checkbox.min",semanticui_dimmer:"../semanticui/dist/components/dimmer.min",semanticui_dropdown:"../semanticui/dist/components/dropdown.min",semanticui_form:"../semanticui/dist/components/form.min",semanticui_modal:"../semanticui/dist/components/modal.min",semanticui_popup:"../semanticui/dist/components/popup.min",semanticui_progress:"../semanticui/dist/components/progress.min",semanticui_search:"../semanticui/dist/components/search.min",semanticui_dropdown2:"../semanticui/dist/components/select2.min",semanticui_site:"../semanticui/dist/components/site.min",semanticui_state:"../semanticui/dist/components/state.min",semanticui_tab:"../semanticui/dist/components/tab.min",semanticui_transition:"../semanticui/dist/components/transition.min",semanticui_visibility:"../semanticui/dist/components/visibility.min",com_fun:"modules/common/function",jsonview:"lib/jquery-jsonview/dist/jquery.jsonview",spinjs:"lib/spinjs/spin"},shim:{main:{deps:[],exports:"main"},jquery:{deps:[],exports:"jQuery"},"pnotify.buttons":{deps:["pnotify"]},"pnotify.nonblock":{deps:["pnotify"]},nicescroll:{deps:["jquery"]},"jquery-sortable":{deps:["jquery"]},jquery_event_drag:{deps:["jquery"]},underscore:{deps:[],exports:"_"},backbone:{deps:["underscore","jquery"],exports:"Backbone"},marionette:{deps:["backbone"],exports:"Marionette"},wreqr:{deps:["backbone"]},easing:{deps:["jquery"],exports:"easing"},i18n:{deps:["jquery"],exports:"i18n"},scrollTo:{deps:["jquery"]},slickgrid_core:{deps:["jquery"],exports:"slickgrid_core"},slickgrid:{deps:["jquery_ui","slickgrid_core","jquery_event_drag"],exports:"Slick"},slick_rowselect:{deps:["slickgrid"]},slick_checkbox:{deps:["slickgrid"]},moment:{exports:"moment",init:function(){return window.moment=this.moment,this.moment}},"moment-timezone":{deps:["moment"],exports:"moment-timezone"},semanticui:{deps:["jquery"]},semanticui_accordion:{deps:["jquery"]},semanticui_api:{deps:["jquery"]},semanticui_checkbox:{deps:["jquery"]},semanticui_dimmer:{deps:["jquery"]},semanticui_dropdown:{deps:["jquery"]},semanticui_form:{deps:["jquery"]},semanticui_nag:{deps:["jquery"]},semanticui_popup:{deps:["jquery"]},semanticui_progress:{deps:["jquery"]},semanticui_rating:{deps:["jquery"]},semanticui_search:{deps:["jquery"]},semanticui_dropdown2:{deps:["jquery"]},semanticui_shape:{deps:["jquery"]},semanticui_sidebar:{deps:["jquery"]},semanticui_site:{deps:["jquery"]},semanticui_state:{deps:["jquery"]},semanticui_tab:{deps:["jquery"]},semanticui_transition:{deps:["jquery"]},semanticui_video:{deps:["jquery"]},semanticui_visibility:{deps:["jquery"]},semanticui_modal:{deps:["semanticui_transition","semanticui_dimmer"],exports:"semanticui_modal"},jsonview:{deps:["jquery"]}}}),define("main",function(e){return function(){var n;return n||e.main}}(this)),define("Storage",["store2"],function(e){return window.store2=e,{get:function(n){return e.local.get(n)},set:function(n,t){e.local.set(n,t)},remove:function(n){e.local.remove(n)},clear:function(){e.local.clearAll()}}}),define("app",["backbone","marionette"],function(e){var n=new e.Marionette.Application;return window.Application=n,n}),define("config/App",[],function(){return{isDebug:!1,isProduct:!0}}),function(e){"function"==typeof define&&define.amd?define("lang/en",["moment"],e):"object"==typeof exports?module.exports=e(require("../moment")):e(window.moment)}(function(e){return e.locale("en",{months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),weekdaysMin:"Su_Mo_Tu_We_Th_Fr_Sa".split("_"),longDateFormat:{LT:"h:mm A",L:"YYYY-MM-DD",LL:"MMM D",LLL:"LL HH:mm",LLLL:"YYYY-MM-DD HH:mm:ss",ll:"MMM D",lll:"LL HH:mm"},calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},ordinal:function(e){var n=e%10,t=1===~~(e%100/10)?"th":1===n?"st":2===n?"nd":3===n?"rd":"th";return e+t}})}),function(e){"function"==typeof define&&define.amd?define("lang/zh",["moment"],e):"object"==typeof exports?module.exports=e(require("../moment")):e(window.moment)}(function(e){return e.locale("zh",{months:"一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),monthsShort:"1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),weekdays:"星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),weekdaysShort:"周日_周一_周二_周三_周四_周五_周六".split("_"),weekdaysMin:"日_一_二_三_四_五_六".split("_"),longDateFormat:{LT:"Ah点mm",L:"YYYY-MM-DD",LL:"YYYY年MMMD日",LLL:"YYYY年MMMD日LT",LLLL:"YYYY-MM-DD HH:mm:ss",l:"YYYY-MM-DD",ll:"MMMD日",lll:"ll HH:mm",llll:"YYYY-MM-DD HH:mm:ss"},meridiem:function(e,n){var t=100*e+n;return 600>t?"凌晨":900>t?"早上":1130>t?"上午":1230>t?"中午":1800>t?"下午":"晚上"},calendar:{sameDay:function(){return 0===this.minutes()?"[今天]Ah[点整]":"[今天]LT"},nextDay:function(){return 0===this.minutes()?"[明天]Ah[点整]":"[明天]LT"},lastDay:function(){return 0===this.minutes()?"[昨天]Ah[点整]":"[昨天]LT"},nextWeek:function(){var n,t;return n=e().startOf("week"),t=this.unix()-n.unix()>=604800?"[下]":"[本]",0===this.minutes()?t+"dddAh点整":t+"dddAh点mm"},lastWeek:function(){var n,t;return n=e().startOf("week"),t=this.unix()<n.unix()?"[上]":"[本]",0===this.minutes()?t+"dddAh点整":t+"dddAh点mm"},sameElse:"LL"},ordinal:function(e,n){switch(n){case"d":case"D":case"DDD":return e+"日";case"M":return e+"月";case"w":case"W":return e+"周";default:return e}},relativeTime:{future:"%s内",past:"%s前",s:"几秒",m:"1分钟",mm:"%d分钟",h:"1小时",hh:"%d小时",d:"1天",dd:"%d天",M:"1个月",MM:"%d个月",y:"1年",yy:"%d年"},week:{dow:1,doy:4}})}),function(e){"function"==typeof define&&define.amd?define("lang/ja",["moment"],e):"object"==typeof exports?module.exports=e(require("../moment")):e(window.moment)}(function(e){return e.locale("ja",{months:"1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),monthsShort:"1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),weekdays:"日曜日_月曜日_火曜日_水曜日_木曜日_金曜日_土曜日".split("_"),weekdaysShort:"日_月_火_水_木_金_土".split("_"),weekdaysMin:"日_月_火_水_木_金_土".split("_"),longDateFormat:{LT:"Ah時m分",L:"YYYY/MM/DD",LL:"M月D日",LLL:"M月D日LT",LLLL:"YYYY年M月D日LT dddd"},meridiem:function(e){return 12>e?"午前":"午後"},calendar:{sameDay:"[今日] LT",nextDay:"[明日] LT",nextWeek:"[来週]dddd LT",lastDay:"[昨日] LT",lastWeek:"[前週]dddd LT",sameElse:"L"},relativeTime:{future:"%s後",past:"%s前",s:"数秒",m:"1分",mm:"%d分",h:"1時間",hh:"%d時間",d:"1日",dd:"%d日",M:"1ヶ月",MM:"%dヶ月",y:"1年",yy:"%d年"}})}),define("language",["moment","jquery","i18n","Storage","config/App","semanticui_dropdown"],function(e,n,t,i,o){var s={zh:"zh",ja:"ja"},r={langCodes:{en:"en",en_US:"en",zh:"zh",zh_CN:"zh",zh_SG:"zh",zh_TW:"zh_TW",zh_HK:"zh_TW",ja:"ja",de:"de",ru:"ru",pt:"pt_PT",pt_PT:"pt_PT",pt_BR:"pt_BR",es:"es",es_ES:"es",es_AR:"es_419",es_BO:"es_419",es_CO:"es_419",es_CL:"es_419",es_CR:"es_419",es_DO:"es_419",es_EC:"es_419",es_GT:"es_419",es_HN:"es_419",es_MX:"es_419",es_NI:"es_419",es_PY:"es_419",es_PA:"es_419",es_PE:"es_419",es_PR:"es_419",es_SV:"es_419",es_UY:"es_419",es_VE:"es_419"},langNames:{en:"English",zh:"中文",zh_CN:"中文简体",zh_TW:"中文繁体",ja:"日本語",de:"Deutsch",ru:"Русский язык",pt:"Português",nl:"Nederlands",it:"Italiano",fr:"Français",es:"Español"},lowercase:{en:"en_us",zh:"zh_cn"},init:function(e){this.setDefaultLanguage("component",e)},i18n:function(e){return t.t(e)||t.t(e+".default")||""},_getCurLangCode:function(){return"undefined"!=typeof window.navigator.language?window.navigator.language:window.navigator.browserLanguage},getCurLangCode:function(){var e=this,n=i.get("language");if(n)return n;var t=e.langCodes,o="en_US",s=e._getCurLangCode().replace("-","_");return"undefined"!=typeof t[s]?o=t[s]:s.indexOf("_")>-1&&(s=s.split("_")[0],"undefined"!=typeof t[s]&&(o=t[s])),o},getLowerCase:function(e){return e=e||"en",this.lowercase[e]||"en_us"},getLangName:function(e){return this.langNames[e]},setLanguage:function(t,r,a){var c="/locales/__lng__/__ns__.json?t="+(new Date).getTime();o.isProduct||(c="/front/locales/__lng__/__ns__.json"),t=t||this.getCurLangCode(),i.set("language",t);var l=s[t]||"en";i.set("moment",l),e.locale(l),n.i18n.init({lng:t,resGetPath:c,parseMissingKey:function(){return""},objectTreeKeyHandler:function(){return""},ns:r||"component"},function(){a&&"function"==typeof a&&require(["lang/en","lang/zh","lang/ja"],function(){n("#language-menu").dropdown({action:"select",onChange:function(e){i.set("language",e),window.location.reload()}}),a()})})},setDefaultLanguage:function(e,n){var t=this.getCurLangCode()||"en";this.setLanguage(t,e,n)}};return r}),function(e){"function"==typeof define&&define.amd?define("pnotify.buttons",["jquery","pnotify"],e):e(jQuery,PNotify)}(function(e,n){n.prototype.options.buttons={closer:!0,closer_hover:!0,sticker:!0,sticker_hover:!0,labels:{close:"Close",stick:"Stick"}},n.prototype.modules.buttons={myOptions:null,closer:null,sticker:null,init:function(n,t){var i=this;this.myOptions=t,n.elem.on({mouseenter:function(){!i.myOptions.sticker||n.options.nonblock&&n.options.nonblock.nonblock||i.sticker.trigger("pnotify_icon").css("visibility","visible"),!i.myOptions.closer||n.options.nonblock&&n.options.nonblock.nonblock||i.closer.css("visibility","visible")},mouseleave:function(){i.myOptions.sticker_hover&&i.sticker.css("visibility","hidden"),i.myOptions.closer_hover&&i.closer.css("visibility","hidden")}}),this.sticker=e("<div />",{"class":"ui-pnotify-sticker",css:{cursor:"pointer",visibility:t.sticker_hover?"hidden":"visible"},click:function(){n.options.hide=!n.options.hide,n.options.hide?n.queueRemove():n.cancelRemove(),e(this).trigger("pnotify_icon")}}).bind("pnotify_icon",function(){e(this).children().removeClass(n.styles.pin_up+" "+n.styles.pin_down).addClass(n.options.hide?n.styles.pin_up:n.styles.pin_down)}).append(e("<span />",{"class":n.styles.pin_up,title:t.labels.stick})).prependTo(n.container),(!t.sticker||n.options.nonblock&&n.options.nonblock.nonblock)&&this.sticker.css("display","none"),this.closer=e("<div />",{"class":"ui-pnotify-closer",css:{cursor:"pointer",visibility:t.closer_hover?"hidden":"visible"},click:function(){n.remove(!1),i.sticker.css("visibility","hidden"),i.closer.css("visibility","hidden")}}).append(e("<i />",{"class":n.styles.closer,title:t.labels.close})).prependTo(n.container),(!t.closer||n.options.nonblock&&n.options.nonblock.nonblock)&&this.closer.css("display","none")},update:function(e,n){this.myOptions=n,!n.closer||e.options.nonblock&&e.options.nonblock.nonblock?this.closer.css("display","none"):n.closer&&this.closer.css("display","block"),!n.sticker||e.options.nonblock&&e.options.nonblock.nonblock?this.sticker.css("display","none"):n.sticker&&this.sticker.css("display","block"),this.sticker.trigger("pnotify_icon"),n.sticker_hover?this.sticker.css("visibility","hidden"):e.options.nonblock&&e.options.nonblock.nonblock||this.sticker.css("visibility","visible"),n.closer_hover?this.closer.css("visibility","hidden"):e.options.nonblock&&e.options.nonblock.nonblock||this.closer.css("visibility","visible")}},e.extend(n.styling.jqueryui,{closer:"ui-icon ui-icon-close",pin_up:"ui-icon ui-icon-pin-w",pin_down:"ui-icon ui-icon-pin-s"}),e.extend(n.styling.bootstrap2,{closer:"icon-remove",pin_up:"icon-pause",pin_down:"icon-play"}),e.extend(n.styling.bootstrap3,{closer:"icon remove",pin_up:"glyphicon glyphicon-pause",pin_down:"glyphicon glyphicon-play"}),e.extend(n.styling.fontawesome,{closer:"fa fa-times",pin_up:"fa fa-pause",pin_down:"fa fa-play"})}),define("Logger",["language","jquery","pnotify","app","Storage","pnotify.buttons"],function(e,n,t,i,o){function s(e){function n(e){return e=e||o.get("language")||"en",/en/i.test(e)?"en_us/index.html":"zh_cn/index.html"}var t=window.location.hostname;window.location.href=/^localhost/.test(t)?"/login":"/"+n(e)+"?error=session-expire"}var r={};return r.info=function(n,i){n=i&&1==i.doI18n?e.i18n(n):n||"Info",new t({text:n,type:"info",delay:1e3})},r.warning=function(n,i){n=i&&1==i.doI18n?e.i18n(n):n||"Warning",new t({text:n,type:"warning",delay:3e3})},r.success=function(n,i){n=i&&1==i.doI18n?e.i18n(n):n||"Success",new t({text:n,type:"success",icon:"icon check circle",delay:3e3,mouse_reset:!1,buttons:{closer:!0,closer_hover:!1}})},r.error=function(n,r){var a,c,l;if(n instanceof Error)c="Error",a=n.message;else if(n.statusText||n.status){if(c=n.status,n.status&&(200==n.status||201==n.status))return!1;if(n.responseText)try{var u=JSON.parse(n.responseText);a=u.errorMessage||e.i18n("error.net."+u.errorCode),401==n.status&&(l=o.get("language"),i.User.clearUserData(),s(l))}catch(d){a=n.statusText}else if(0==n.status&&"timeout"==n.statusText)a=e.i18n("error.net.0");else{if(0==n.status&&"abort"==n.statusText)return!1;a=n.status+" "+n.statusText}}else c="Error",a=r&&1==r.doI18n?e.i18n(n):n;new t({title:"error",text:a,type:"error",icon:"icon warning sign",delay:3e3,mouse_reset:!1,buttons:{closer:!0,closer_hover:!1}})},r}),define("U",["app","Storage","Logger","language","underscore","jquery","moment"],function(e,n,t,i,o,s,r){return{Clone:function(e,n){var t=this;if("object"==typeof e){var i=null!=e&&e.sort?[]:{};for(var o in e)o!=n&&(i[o]=t.Clone(e[o],n));return i}return"function"==typeof e?(new e).constructor:e},UC_First:function(e){var n=e.toLowerCase(),t=n.replace(/\b\w+\b/g,function(e){return e.substring(0,1).toUpperCase()+e.substring(1)});return t},jumpTo:function(e){window.location.href=e},changeHash:function(e){e.hash&&(window.location.hash=e.hash),e.reload&&location.reload()},secToHou:function(e){var n=Math.floor(e),t=Math.floor(n/3600),i=Math.floor((n-3600*t)/60),o=n-3600*t-60*i;return{hour:t,minute:i,second:o}},formatAxis:function(e){var t=[];return r.locale(n.get("moment")),o.forEach(e,function(e){if(/^(\d{4})(\d{2})(\d{2})(\d{2})?$/.test(e)){if(RegExp.$4)var n=r(RegExp.$2+"/"+RegExp.$3+" "+RegExp.$4+":00","MM/DD HH:mm").format("lll");else var n=r(RegExp.$2+"/"+RegExp.$3,"MM/DD").format("ll");t.push(n)}else t.push(/^(\d{2})$/.test(e)?RegExp.$1:e)}),t},getLength:function(e){for(var n=0,t=e.length,i=-1,o=0;t>o;o++)i=e.charCodeAt(o),n+=i>=0&&128>=i?1:3;return n},forceRender:function(){var e=document.body;e.style.cssText+=";-webkit-transform:rotateZ(0deg)",e.offsetHeight,e.style.cssText+=";-webkit-transform:none"},isImage:function(e){return e?/^image\//.test(e.type):!1},parseUrl:function(e){return/^(http|https):\/\//.test(e)?e:"https://"+e},strEllip:function(e,n){var t=e.length;if(n>=2*t)return e;n-=3;for(var i=0;t>i&&n>0;)escape(e.charAt(i)).length>4&&n--,n--,i++;return n>0?e:e.substring(0,i)+"..."},ParseError:function(e,n,o,s,r){if(!e||!o||!n)return t.error(i.i18n("error"));try{var a="{"!=e.responseText.charAt(0)?e:JSON.parse(e.responseText);if(a&&(a.errorCode||a.status)){a.errorCode=a.errorCode?a.errorCode:a.status;var c=n+"."+o+"."+a.errorCode,l=n+".error";400!=e.status&&(a.errorMessage="Sever Error  "+a.errorCode),"function"==typeof s?s(e,r):s&&a.errorCode in s?s[a.errorCode](e,r):s&&s["default"]?s["default"](e,r):t.error(i.i18n(c)?i.i18n(c):a.errorMessage?a.errorMessage:i.i18n(l))}else t.error(text)}catch(u){t.error(i.i18n("error"))}},goTo:function(e,n,t){window.location.hash=e+(n?"/"+n:"")+(t?"/"+t:"")},navigateTo:function(n,t,i){e.Router.navigate(n+(t?"/"+t:"")+(i?"/"+i:""))},normalize:function(e){var n={ios:"iOS",android:"Android","app store":"App Store","google play":"Google Play"};return n[e.toLowerCase()]||e},parseCurrentUrl:function(){var e={origin:window.location.origin,pathname:window.location.pathname,module:"dashboard",appId:"",hash:window.location.hash,url:window.location.href},n=e.pathname.match(/^(.*?)\/(\w+)\/?/);n&&n.length>2&&(e.module=n[2]);var t=e.pathname.match(/\/apps\/(\w+)/);return t&&t.length>1&&(e.appId=t[1]),""==e.appId||/\/apps\/(\w+)/.test(window.location.href)||(e.url=e.url.replace(e.module,e.module+"/apps/"+e.appId)),e},getCreditCardFullType:function(e){var n=!1;return/^5[1-5][0-9]{14}$/.test(e)?n="MasterCard":/^4[0-9]{12}(?:[0-9]{3})?$/.test(e)?n="Visa":/^3[47][0-9]{13}$/.test(e)?n="American Express":/^(?:2131|1800|35\d{3})\d{11}$/.test(e)?n="JCB":/^3(?:0[0-5]|[68][0-9])[0-9]{11}$/.test(e)?n="Diners Club":/^6(?:011|5[0-9]{2})[0-9]{12}$/.test(e)&&(n="Discover"),n},getCreditCardType:function(e){var n=!1;return/^5[1-5]/.test(e)?n="mastercard":/^4/.test(e)?n="visa":/^3[47]/.test(e)?n="ae":/^(?:2131|1800|35)/.test(e)?n="jcb":/^3(?:0[0-5]|[68])/.test(e)?n="dinner":/^6(?:011|5)/.test(e)&&(n="discover"),n},getPixelRatio:function(e){var n=e.backingStorePixelRatio||e.webkitBackingStorePixelRatio||e.mozBackingStorePixelRatio||e.msBackingStorePixelRatio||e.oBackingStorePixelRatio||e.backingStorePixelRatio||1;return(Math.round(window.devicePixelRatio)||1)/n}}}),define("dispatcher",["U","underscore","backbone"],function(e,n,t){var i={};i.on=function(e,n,i,o){var s,r=e.split(".");switch(s=r.length>1?r[0]:"Event"){case"Event":t.Wreqr.radio.channel(o||"global").vent.on(r[1]||r[0],n,i);break;case"Command":t.Wreqr.radio.channel(o||"global").commands.setHandler(r[1],n,i);break;case"Request":t.Wreqr.radio.channel(o||"global").reqres.setHandler(r[1],n,i);break;default:throw new Error("None support Message Type")}};var o=function(e,n){var i,o=n.split(".");switch(i=o.length>1?o[0]:"Event"){case"Event":t.Wreqr.radio.channel(e||"global").vent.off(o[1]||o[0]);break;case"Command":t.Wreqr.radio.channel(e||"global").commands.removeHandler(o[1]);break;case"Request":t.Wreqr.radio.channel(e||"global").reqres.removeHandler(o[1]);break;default:throw new Error("None support Message Type")}};return i.off=function(e,t){n.isArray(t)?n.forEach(t,function(n){o(n,e)}):o(t||"global",e)},i.execute=function(e,i,o){n.isArray(o)?n.forEach(o,function(n){t.Wreqr.radio.channel(n).commands.execute(e,i)}):t.Wreqr.radio.channel(o||"global").commands.execute(e,i)},i.trigger=function(e,i,o){n.isArray(o)?n.forEach(o,function(n){t.Wreqr.radio.channel(n).vent.trigger(e,i)}):t.Wreqr.radio.channel(o||"global").vent.trigger(e,i)},i.request=function(e,n,i){return t.Wreqr.radio.channel(i||"global").reqres.request(e,n)},i}),define("config/User",[],function(){return{AppId:"",SessionToken:"",Timezone:"Asia/Shanghai"}}),define("config/Ajax",[],function(){return{TIMEOUT:2e4,HTTPHEADER:{}}}),define("config/UI",[],function(){return{SlickGrid:{editable:!0,headerRowHeight:46,rowHeight:40,autoEdit:!1,enableCellNavigation:!0,asyncEditorLoading:!1,forceFitColumns:!1},Table:{table_class:"ui single line sortable table",header_class:"",body_class:"",header_cell_class:"",cell_class:"",display_header:!0,row_color:!0}}}),define("config/Filter",[],function(){return{String:[{name:"=",value:"eq"},{name:"!=",value:"ne"},{name:"exists",value:"exists"},{name:"start with",value:"start with"}],Number:[{name:">",value:"gt"},{name:">=",value:"gte"},{name:"<",value:"lt"},{name:"<=",value:"lte"},{name:"=",value:"eq"},{name:"!=",value:"ne"},{name:"exists",value:"exists"},{name:"not exists",value:"not exists"}],Boolean:[{name:"=",value:"eq"},{name:"exists",value:"exists"},{name:"not exists",value:"not exists"}],Date:[{name:"before",value:"before"},{name:"after",value:"after"},{name:"exists",value:"exists"},{name:"not exists",value:"not exists"}],File:[{name:"exists",value:"exists"},{name:"not exists",value:"not exists"}],GeoPoint:[{name:"exists",value:"exists"},{name:"not exists",value:"not exists"}],Array:[{name:"exists",value:"exists"},{name:"not exists",value:"not exists"},{name:"contains value",value:"contains"},{name:"does not contain value",value:"not contains"},{name:"contains one of",value:"in"},{name:"does not contain any of",value:"nin"}],Object:[{name:"exists",value:"exists"},{name:"not exists",value:"not exists"}],Pointer:[{name:"exists",value:"exists"},{name:"not exists",value:"not exists"}],ACL:[{name:"exists",value:"exists"},{name:"not exists",value:"not exists"}]}}),define("C",["config/App","config/User","config/Ajax","config/UI","config/Filter","U"],function(e,n,t,i,o,s){function r(e,n,t){return"undefined"==typeof e[n[t]]?!1:"undefined"!=typeof n[t+1]?r(e[n[t]]||{},n,t+1):e[n[t]]}function a(e,n,t,i){return"undefined"==typeof e[t[i]]&&(e[t[i]]={}),"undefined"==typeof t[i+1]?(e[t[i]]=n,n):void a(e[t[i]]||{},n,t,i+1)}var c={App:e,Ajax:t,User:n,UI:i,Filter:o},l={};return l.set=function(e,n){var t=e.split(".");return a(c,n,t,0)},l.get=function(e,n){var t=e.split("."),i=r(c,t,0);return n?s.Clone(i):i},l}),define("API",["C","U"],function(e){var n={},t=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:""),i="2.0",o={App:t+"/"+i+"/apps",Data:t+"/"+i+"/",Class:t+"/"+i+"/classes",User:t+"/"+i+"/users",Product:t+"/"+i+"/products",Passport:t+"/"+i+"/passport",Installation:t+"/"+i+"/installations",Role:t+"/"+i+"/roles",OrgUsers:t+"/"+i+"/orgUsers",Users:t+"/"+i+"/",Files:t+"/"+i+"/files",Schema:t+"/"+i+"/schemas",Country:t+"/"+i+"/location/country",Lang:t+"/"+i+"/location/lang",captcha:t+"/"+i+"/captcha/",DataIE:t+"/"+i+"/dataie",Pay:t+"/"+i+"/pay",SMS:t+"/"+i+"/sms"},s={EmailTpl:function(){return"apps/"+e.get("User.AppId")+"/emailtemplates"},SingleApp:function(){return"apps/"+e.get("User.AppId")},Schema:function(){return"/schemas/"},Batch:function(){return"/batch/"},Installation:function(){return"/_Installation"},register:function(){return"/register"},requestPasswordReset:function(){return"/requestPasswordReset"},requestEmailVerify:function(){return"/requestEmailVerify"},verifyEmail:function(){return"/verifyEmail"},resetPassword:function(){return"/resetPassword"}};return n.get=function(e){var n=e.split("."),t=o[n[0]];return n[1]?s[n[1]]?t+s[n[1]]():t+"/"+n[1].toLowerCase():t},n}),define("core/functions/UI",["app","dispatcher","U","C","language","i18n","Logger","jquery","underscore","Storage","semanticui_modal","API","semanticui_checkbox"],function(e,n,t,i,o,s,r,a,c,l,u,d){window.requestAnimFrame=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(){return-1}}(),window.cancelRequestAnimFrame=function(){return window.cancelAnimationFrame||window.webkitCancelRequestAnimationFrame||window.mozCancelRequestAnimationFrame||window.oCancelRequestAnimationFrame||window.msCancelRequestAnimationFrame||function(){return-1}}();var m=null;return{showDialog:function(e,t,i){i=i||{},i=a.extend({specialDialogUI:"",btns:{negative:"common.form.cancel",positive:"common.form.apply",others:[]}},i);var o=i.el||a("#app-dialog");o.attr("special-dialog-ui",i.specialDialogUI),o.parent().removeClass("hidden"),o.removeClass("hidden"),o.removeClass("small medium large x-large"),i.size&&o.addClass(i.size);var r=o.find(".header");r.html(e);var l=o.find(".actions");l.html(""),0!=i.footer&&(i.btns.negative&&""!=i.btns.negative&&l.append('<div class="ui button negative">'+s.t(i.btns.negative)+"</div>"),i.btns.positive&&""!=i.btns.positive&&l.append('<div class="ui button primary positive">'+s.t(i.btns.positive)+"</div>"),c.each(i.btns.others,function(e){if("string"==typeof e)l.append('<div class="ui primary button">'+s.t(e)+"</div>");else if("object"==typeof e){var t=s.t(e.name),i=e.className||"",o=a('<div class="ui button">'+t+"</div>");o.addClass(i),e.icon&&o.prepend('<i class="icon '+e.icon+'"></i>'),e.onClick&&o.bind("click",function(){n.trigger("click:"+e.onClick,{},"Component")}),l.append(o)}}));var u=o.find(".content");if(0==u.length&&(r.after('<div class="content"></div>'),u=o.find(".content")),"string"==typeof t)u.html(t);else{var d=new t(c.extend({},{el:o.find(".content")},i));o.data("dialog-view",d),d.init&&d.init(),d.beforeShow&&d.beforeShow(),d.render(i),d.$(".ui.checkbox").length>0&&d.$(".ui.checkbox").checkbox()}var m=c.pick(i,["closable","useCss","transition","duration","easing","allowMultiple","observeChanges","onVisible","onHidden","options"]);m.transition=m.transition||"scale",0==i.closable?(m.closable=!1,o.children(".icon.close").hide()):o.children(".icon.close").show(),m.onApprove=function(){return i&&i.success&&i.success(o.data("dialog-view")),!1},m.onDeny=function(){i&&i.error&&i.error(o.data("dialog-view"))},m.onHidden=function(){o.removeAttr("special-dialog-ui");var e=o.data("dialog-view");e&&(e.$(".ui.checkbox").length>0&&e.$(".ui.checkbox").checkbox("destroy"),e.beforeHide&&e.beforeHide(),e.destroy(),o.data("dialog-view",null)),o.removeClass("hidden"),a(document).off("keyup.dialog")};var p=function(){a(document).on("keyup.dialog",function(e){13==(e.keyCode||e.which)&&m.onApprove()})};if(m.onVisible){var f=m.onVisible;m.onVisible=function(e){f(e),p()}}else m.onVisible=p;i.autofocus||(m.autofocus=!1),o.modal(m).modal("show")},hideDialog:function(e){e=e||{},e.el?e.el.modal("hide").removeClass("hidden"):a("#app-dialog").modal("hide").removeClass("hidden")},bindUploader:function(e,n,i){e.each(function(e,o){var s=a('<input type="file" style="display:none" />').insertAfter(a(o));a(o).on("click",function(){s.trigger("click")}),s.change(n?function(e){var o=new FileReader,s=a(this).get(0).files[0]||{type:""};t.isImage(s)&&(o.readAsDataURL(s),o.onloadend=function(e){a(n).css("opacity",1),a(n).css("background-repeat","no-repeat"),a(n).css("background-image","url("+e.target.result+")")}),i&&i(e)}:function(e){i&&i(e)})})},removeStatus:function(e){a(e).closest(".field").removeClass("success error"),a(e).closest(".field").children(".error-msg").remove()},toggleSuccess:function(e){this.removeStatus(e)},toggleError:function(e,n){this.removeStatus(e),e.closest(".field").addClass("error"),this._showMessage(e,n)},_showMessage:function(e,n){a(e).hasClass("logger-msg")?r.error(s.t(n)):0==a(e).siblings(".error-msg").length?a(e).closest(".field").append('<span class="error-msg"><i class="warning circle icon"></i>'+s.t(n)+"</span>"):a(e).siblings(".error-msg").text(s.t(n))},_visible:function(e){return document.body.scrollTop<e.offset().top},createCaptcha:function(e){function n(){a("body").delegate("#captcha_img","click",function(){var e=a(this);e.attr("src","").css("background","url(images/ajax_loader_mini.gif) no-repeat center center"),t()})}function t(){var n=Math.random();a.ajax({url:d.get("captcha.secret"),type:"get",data:{_:n},dataType:"json"}).done(function(n,t,i){var o=i.getResponseHeader("X-LAS-SECRET");e.find("#captcha_img").attr("src",d.get("captcha")+"?secret="+o).data("HEADER_SECRET",o)}).fail(function(){e.find("#captcha_img").attr("src",""),r.error("prelogin.error.get-captcha",{doI18n:!0})}).always(function(){e.find(".captcha-warpper").show().end().find(".default-text").hide()})}if(e)return t(),n(),{getCaptchaValue:function(){return a("#captcha").val()},getCaptchaHeaderSecret:function(){return a("#captcha_img").data("HEADER_SECRET")},refresh:function(){a("#captcha_img").click()}}},initIconProgress:function(e){var n=a(e).get(0),t=n.getContext("2d");t.save(),t.fillStyle="#000000",t.fillRect(0,0,174,174),t.restore()},startUploadIcon:function(e){var n=a(e).get(0),t=n.getContext("2d");t.save(),t.beginPath(),t.arc(87,87,80,0,2*Math.PI),t.closePath(),t.clip(),t.clearRect(0,0,174,174),t.restore(),this.progressIcon(e,0)},progressIcon:function(e,n){var t=this,i=a(e).data("percent")||0;m&&cancelRequestAnimationFrame(m),t.progressAnimation(e,i,n)},progressAnimation:function(e,n,t){var i=this;n>t&&(n=t);var o=a(e).get(0),s=o.getContext("2d");s.save(),s.beginPath(),s.arc(87,87,80,0,2*Math.PI),s.closePath(),s.clip(),s.clearRect(0,0,174,174),s.restore(),s.fillStyle="#000000",s.beginPath(),s.arc(87,87,80,0,2*Math.PI),s.closePath(),s.stroke(),s.beginPath(),0==n?s.arc(87,87,60,0,2*Math.PI,!0):s.arc(87,87,60,1.5*Math.PI,Math.PI*(2*n/100+1.5),!0),s.lineTo(87,87),s.closePath(),s.fill(),s.restore(),a(e).data("percent",n),t>n?requestAnimationFrame(function(){i.progressAnimation(e,n+1,t)}):100==n&&i.completeIcon(e)},completeIcon:function(e){function n(){o+=2,o>130&&(o=130),i.save(),i.beginPath(),i.arc(87,87,o,0,2*Math.PI),i.closePath(),i.clip(),i.clearRect(0,0,174,174),i.restore(),130>o?requestAnimationFrame(n):a(e).remove()}var t=a(e).get(0),i=t.getContext("2d");m&&cancelRequestAnimationFrame(m);var o=80;requestAnimationFrame(n)},setIntroProps:function(e){a.each(e,function(e,n){n=a.extend(n,{"data-selector":e}),a(e).attr(n)})},initTooltips:function(){a("body").delegate("[data-sem-key]","mouseenter",function(e){a(e.currentTarget).popup(a.extend({},i.get("UI.Popup"),{offset:-10,html:o.i18n(a(e.currentTarget).attr("data-sem-key"))}))})},initScreenNotification:function(){var e=860,n=a("#screen-notification");a(window).bind("resize",function(){a(window).width()<e?n.show():n.hide()}).trigger("resize")},bindLogout:function(){a(".logout").unbind("click.logout").bind("click.logout",function(){e.User.logout()})}}}),define("Captcha",["jquery","API","Logger"],function(e,n,t){var i={};return i.init=function(i){function o(){a.click(function(){a.hasClass("disable")||s()})}function s(){var i=Math.random();a.attr("src",""),a.addClass("disable"),e.ajax({url:n.get("captcha.secret"),type:"get",data:{_:i},dataType:"json"}).done(function(e,t,i){var o=i.getResponseHeader("X-LAS-SECRET");a.attr("src",n.get("captcha")+"?secret="+o).data("HEADER_SECRET",o)}).fail(function(){a.attr({src:"",alt:"error"}),t.error("prelogin.error.get-captcha",{doI18n:!0})}).always(function(){r.find(".captcha-warpper").show().end().find(".default-text").hide(),a.removeClass("disable")})}if(i){var r=i,a=e(r).find(".captcha_img"),c=r.find("input[name=captcha]");return s(),o(),{getCaptcha:function(){return{challenge:getCaptchaValue(),secret:getCaptchaHeaderSecret()}
},getCaptchaValue:function(){return c.val()},getCaptchaHeaderSecret:function(){return a.data("HEADER_SECRET")||""},refresh:function(){s()}}}},i}),define("Cookie",[],function(){return{get:function(e){var n=document.cookie.match(new RegExp("(^| )"+e+"=([^;]*)(;|$)"));return null!=n?JSON.parse(decodeURI(n[2])):null},set:function(e,n,t,i){var o=new Date;o.setTime(o.getTime()+24*("undefined"==typeof t?1:t)*60*60*1e3),document.cookie=e+"="+encodeURI(n)+";expires="+o.toGMTString()+";path="+i||"/"},remove:function(e){this.set(e,"",-1)},clear:function(){var e=document.cookie.match(/[^ =;]+(?=\=)/g);if(e)for(var n=e.length;n--;)document.cookie=e[n]+"=0;domain="+window.location.hostname+";path=/;expires="+new Date(0).toUTCString()}}}),define("modules/common/contact",["jquery","Logger","language"],function(e,n,t){"zh"===t.getCurLangCode()?(window.jsI18nData={formValidation:{user:{loginid:"请输入合法的邮箱",email:"请输入合法的邮箱",username:"用户名不能少于6位",password:"密码不能少于8位",name:"请输入公司名称",phone:"请输入合法电话号码",captcha:"请输入验证码","password-confirm":"请确认您的密码","password-same":"两次输入的密码必须相同"},contact:{email:"请输入合法的邮箱",message:"请输入您的反馈信息"}},aboutus:{"send-success":"谢谢您的反馈，我们已经收到您的信息，会尽快与您联系。","send-fail":"发送失败，请稍后再试。"},updatebrowser:"为了您极致的体验，请使用IE11或其他现代浏览器。","get-captcha-error":"获取验证码失败，请稍后重试。","server-error":"服务器异常，请稍后重试。","signout-success":"注销成功"},window.jsI18nData.module={analytics:"分析",segments:"用户群细分",clouddata:"云数据",cloudconfig:"云配置",cloudcode:"云代码",push:"推送",support:"支持",gamemaster:"管理",devcenter:"开发者中心",dashboard:"概况",marketing:"营销推广",appsettings:"设置",gamesettings:"设置",users:"用户",createapp:"创建应用程序",creategame:"创建应用程序"},e(".side-contact-article-en").remove()):(window.jsI18nData={formValidation:{user:{loginid:"Please enter a valid email",email:"Please enter a valid email",username:"User name cannot less than 6",password:"Password cannot less than 8",name:"Please enter orgnization name",phone:"Please input a valid number",captcha:"Please input a valid captcha","password-confirm":"Please confirm your password","password-same":"Two passwords must be the same"},contact:{email:"Please enter a valid email",message:"Please enter your message"}},aboutus:{"send-success":"Thanks for contacting us. We have received your message. Our support will get back to you as soon as possible.","send-fail":"Send fail, please try again latter."},updatebrowser:"In order to make your experience excellent, please use IE11 or other modern browsers.","get-captcha-error":"Get captcha fail, please try later.","server-error":"Server error.","signout-success":"Sign out success"},window.jsI18nData.module={analytics:"Analytics",segments:"Segments",clouddata:"Cloud Data",cloudconfig:"Cloud Config",cloudcode:"Cloud Code",push:"Push",support:"Support",gamemaster:"Master",devcenter:"Dev Center",dashboard:"Dashboard",marketing:"Marketing",appsettings:"Settings",gamesettings:"Settings",users:"Users",createapp:"Create App",creategame:"Create App"},e(".side-contact-article-zh").remove());var i={EMAIL:{SENDAPI:"/2.0/mails/sendmail",SENDTO:["support@leap.as"],DOMAIN:"mercury-browser.com"}},o=function(){function n(n,t,i){e(".validate_msg",n).remove(),n.removeClass("field-error"),i||(n.append('<div class="validate_msg"><i class="icomoon-attention-circled"></i>'+t+"</div>"),n.addClass("field-error"))}function t(t,i){var o=t.attr("name"),s=e.trim(t.val()),r=t.closest(".field"),a=!0,c="";if(r.hasClass("rpassword")){var l=e.trim(r.closest("form").find(".password input").val()),u=e.trim(t.val());""===u?(c=jsI18nData.formValidation.user["password-confirm"],a=!1):u!==l&&(c=jsI18nData.formValidation.user["password-same"],a=!1)}else{var d=i[o];if(void 0===d)return;c=d.msg;var m=d.rule;a="function"==typeof m?m(s):m.test(s)}n(r,c,a)}function i(n,i){return e("input, textarea",n).each(function(n,o){t(e(o),i)}),0===e(".field-error:visible",n).length?!0:!1}var o={from:{rule:function(e){return e.length?/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(e):!0},msg:jsI18nData.formValidation.contact.email},text:{rule:function(e){return e.length>0},msg:jsI18nData.formValidation.contact.message}};return{contactFormRules:o,validateInput:t,validateForm:i}}(),s=function(){function t(){e(".close",a).bind("click",function(){a.slideOut()})}function s(){c.bind("click",function(){a.slideIn()}),r(e("form",a),e(".send-msg-btn",a)),t()}function r(t,s){t.delegate("input","keypress",function(e){return 13===e.keyCode?!1:void 0}),t.delegate("input, textarea","keyup",function(){o.validateInput(e(this),o.contactFormRules)}),s.bind("click",function(){var r=o.validateForm(t,o.contactFormRules),c={};r&&(e(t.serializeArray()).each(function(n,t){c[t.name]=e.trim(t.value)}),c=e.extend(c,{to:i.EMAIL.SENDTO,domain:i.EMAIL.DOMAIN}),c.from=c.from||"Anonymity",e.ajax({method:"POST",url:i.EMAIL.SENDAPI,data:JSON.stringify(c),contentType:"application/json",dataType:"json",beforeSend:function(){s.addClass("loading")},complete:function(){s.removeClass("loading"),a.slideOut()},success:function(){n.success(jsI18nData.aboutus["send-success"])},error:function(){n.error(jsI18nData.aboutus["send-fail"])}}))})}var a=e("#side-contact-article"),c=e("#side-contact-btn");return a.slideOut=function(){this.removeClass("visible")},a.slideIn=function(){this.addClass("visible")},{initContactBtn:s,initFormOp:r}}();s.initContactBtn()}),require(["main","jquery"],function(){require(["jquery","validate","Storage","U","language","Logger","core/functions/UI","API","Captcha","Cookie","./modules/common/contact"],function(e,n,t,i,o,s,r,a,c,l){function u(){h=c.init(g);e(".prelogin-pannel .options .checkbox");e("#form-forgot").i18n(),p(),e("#common-loader").fadeOut()}function d(){var e=t.get("lastUrl"),n=t.get("vistedIntrosSelector"),i=t.get("language"),o=t.get("timezone");t.clear(),l.clear(),e&&t.set("lastUrl",e),i&&t.set("language",i),o&&t.set("timezone",o),n&&t.set("vistedIntrosSelector",n)}function m(){if(!h)return s.error("Error");var n={email:e("#email").val(),captcha:{challenge:h.getCaptchaValue(),secret:h.getCaptchaHeaderSecret()}};f.attr("disabled","disabled").addClass("loading"),e.ajax({url:a.get("orgUsers.requestPasswordReset"),type:"POST",dataType:"json",data:JSON.stringify(n),contentType:"application/json",success:function(){d(),s.success("prelogin.success.forgot",{doI18n:!0}),i.jumpTo("/resetnotify?send_email_flag=success&reset_email_address="+n.email)},error:function(e){i.ParseError(e,"login","error",{301:function(e){s.error(e,{doI18n:!0})},205:function(e){s.error(e,{doI18n:!0})},"default":function(e){s.error(e),i.jumpTo("/resetnotify?send_email_flag=fail&reset_email_address="+n.email)}})},complete:function(){t.set("requireCaptcha",1),h.refresh(),f.removeAttr("disabled").removeClass("loading")}})}function p(){e("#form-forgot").validate({rules:{email:{required:!0,email:!0},captcha:{required:!0}},messages:{email:{required:o.i18n("prelogin.error.required"),email:o.i18n("prelogin.error.email")},captcha:{required:o.i18n("prelogin.error.required"),minlength:o.i18n("prelogin.error.min-length")}},highlight:function(n){e(n).closest(".control-group").removeClass("success").addClass("error")},errorPlacement:function(e,n){n.next(".error-promote").append(e)},success:function(e){e.closest(".control-group").removeClass("error").addClass("success")},onkeyup:function(e,n){(9!==n.which||""!==this.elementValue(e))&&((e.name in this.submitted||e===this.lastElement)&&this.element(e),this.checkForm(),this.valid()?f.prop("disabled",!1):f.prop("disabled","disabled"))},submitHandler:function(){m()}})}var f=e("#forgotBtn"),g=e(".prelogin-captcha"),h={};o.setDefaultLanguage("prelogin",function(){u()})})}),define("forgotMain",function(){});