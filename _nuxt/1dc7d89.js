(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{135:function(t,e,r){var content=r(287);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(17).default)("7388ab72",content,!0,{sourceMap:!1})},178:function(t,e,r){"use strict";e.a=function(t){t.app.router.afterEach((function(t,e){try{var r=t.fullPath,n=e.fullPath;_czc.push(["_trackPageview",r,n])}catch(t){}}))}},253:function(t,e,r){"use strict";var n={data:function(){return{clipped:!0,drawer:!1,items:[{icon:"mdi-home-outline",title:"首页",to:"/"},{icon:"mdi-information-outline",title:"关于呼呼小笼包",href:"https://nzc.me"}],title:"呼呼小笼包的主页"}}},o=r(92),l=r(131),c=r.n(l),v=r(380),d=r(387),f=r(381),_=r(254),m=r(382),h=r(388),V=r(383),w=r(171),x=r(172),C=r(114),k=r(173),y=r(84),I=r(384),N=r(386),A=r(385),E=r(143),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",[r("v-navigation-drawer",{attrs:{clipped:t.clipped,fixed:"",temporary:"",app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[r("v-list",t._l(t.items,(function(e,i){return r("v-list-item",{key:"drawer_nav_item_"+i,attrs:{to:e.to,href:e.href,router:"",exact:""}},[r("v-list-item-action",[r("v-icon",[t._v(t._s(e.icon))])],1),t._v(" "),r("v-list-item-content",[r("v-list-item-title",{domProps:{textContent:t._s(e.title)}})],1)],1)})),1)],1),t._v(" "),r("v-app-bar",{attrs:{"clipped-left":t.clipped,flat:"",app:""}},[r("v-app-bar-nav-icon",{staticClass:"hidden-sm-and-up",on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),t._v(" "),r("v-toolbar-title",{domProps:{textContent:t._s(t.title)}}),t._v(" "),r("v-spacer"),t._v(" "),r("v-toolbar-items",{staticClass:"hidden-xs-only"},[t._l(t.items,(function(e,i){return[r("v-btn",{key:"toolbar_item_"+i+"_btn",attrs:{text:"",to:t.items[i].to,href:t.items[i].href}},[t._v("\n          "+t._s(t.items[i].title)+"\n        ")])]}))],2)],1),t._v(" "),r("v-main",[r("v-container",[r("nuxt")],1)],1),t._v(" "),r("v-footer",{attrs:{absolute:"",app:""}},[r("v-col",{staticClass:"text-center"},[r("span",[t._v("© "+t._s((new Date).getFullYear())+" huhubun")])])],1)],1)}),[],!1,null,null,null);e.a=component.exports;c()(component,{VApp:v.a,VAppBar:d.a,VAppBarNavIcon:f.a,VBtn:_.a,VCol:m.a,VContainer:h.a,VFooter:V.a,VIcon:w.a,VList:x.a,VListItem:C.a,VListItemAction:k.a,VListItemContent:y.a,VListItemTitle:y.b,VMain:I.a,VNavigationDrawer:N.a,VSpacer:A.a,VToolbarItems:E.a,VToolbarTitle:E.b})},262:function(t,e,r){r(263),t.exports=r(264)},286:function(t,e,r){"use strict";var n=r(135);r.n(n).a},287:function(t,e,r){(e=r(16)(!1)).push([t.i,"h1[data-v-bfedb7fe]{font-size:20px}",""]),t.exports=e},75:function(t,e,r){"use strict";var n={layout:"empty",props:{error:{type:Object,default:null}},data:function(){return{pageNotFound:"404 Not Found",otherError:"An error occurred"}},head:function(){return{title:404===this.error.statusCode?this.pageNotFound:this.otherError}}},o=(r(286),r(92)),l=r(131),c=r.n(l),v=r(380),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",{attrs:{dark:""}},[404===t.error.statusCode?r("h1",[t._v("\n    "+t._s(t.pageNotFound)+"\n  ")]):r("h1",[t._v("\n    "+t._s(t.otherError)+"\n  ")]),t._v(" "),r("NuxtLink",{attrs:{to:"/"}},[t._v("\n    Home page\n  ")])],1)}),[],!1,null,"bfedb7fe",null);e.a=component.exports;c()(component,{VApp:v.a})}},[[262,3,1,4]]]);