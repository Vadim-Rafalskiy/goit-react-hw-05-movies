"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[524],{524:function(e,r,t){t.r(r),t.d(r,{default:function(){return w}});var n=t(433),a=t(861),u=t(439),c=t(757),s=t.n(c),o=t(791),i=t(87),p=t(689),f="SearchBar_searchbar__WBxpT",h="SearchBar_searchForm__12jPt",m="SearchBar_searchFormButton__8tA0F",l="SearchBar_searchFormButtonLabel__urVAc",v="SearchBar_searchFormInput__BzAfu",d=t(184),x=function(e){var r=e.onSubmit,t=(0,o.useState)(""),n=(0,u.Z)(t,2),a=n[0],c=n[1];return(0,d.jsx)("header",{className:f,children:(0,d.jsxs)("form",{onSubmit:function(e){e.preventDefault(),r(a),c("")},className:h,children:[(0,d.jsx)("input",{onChange:function(e){var r=e.target.value;c(r)},value:a,className:v,name:"search",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search",required:!0}),(0,d.jsx)("button",{type:"submit",className:m,children:(0,d.jsx)("span",{className:l,children:(0,d.jsx)("img",{src:"./images/serch.png",alt:"search"})})})]})})},_=(0,o.memo)(x),g=t(793),b="Movies_link__C+Lv0",w=function(){var e=(0,o.useState)([]),r=(0,u.Z)(e,2),t=r[0],c=r[1],f=(0,i.lr)(),h=(0,u.Z)(f,2),m=h[0],l=h[1],v=m.get("search");(0,o.useEffect)((function(){if(v){var e=function(){var e=(0,a.Z)(s().mark((function e(){var r,t,a;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,g.ZO)(v);case 3:r=e.sent,t=r.results,c((0,n.Z)(t)),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),a=e.t0.response,console.log(a.data.message);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();e()}}),[v]);var x=(0,p.TH)(),w=t.map((function(e){var r=e.id,t=e.name;return(0,d.jsx)(i.rU,{className:b,to:"/movies/".concat(r),state:{from:x},children:(0,d.jsx)("li",{children:t})},r)}));return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(_,{onSubmit:function(e){l({search:e}),c([])}}),(0,d.jsx)("ul",{children:w})]})}},793:function(e,r,t){t.d(r,{Df:function(){return o},TP:function(){return i},ZO:function(){return s},tx:function(){return f},zv:function(){return p}});var n=t(861),a=t(757),u=t.n(a),c=t(243).Z.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"707c1f9314db773250e6b474a61bb845"}}),s=function(){var e=(0,n.Z)(u().mark((function e(r){var t,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("/search/keyword",{params:{query:r}});case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),o=function(){var e=(0,n.Z)(u().mark((function e(){var r,t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("/trending/movie/week");case 2:return r=e.sent,t=r.data,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),i=function(){var e=(0,n.Z)(u().mark((function e(r){var t,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("/movie/".concat(r),{params:{language:"en-US"}});case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(u().mark((function e(r){var t,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("/movie/".concat(r,"/credits"),{params:{language:"en-US"}});case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(u().mark((function e(r){var t,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("/movie/".concat(r,"/reviews"),{params:{language:"en-US"}});case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=524.f89cf417.chunk.js.map