"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[433],{11:function(e,n,t){t.r(n),t.d(n,{default:function(){return d}});var r=t(861),o=t(439),c=t(757),a=t.n(c),i=t(791),s=t(87),u="Home_container__MGYYT",f="Home_title__XLxL1",l="Home_movieList__dew6t",m="Home_movieItem__yfa+9",p="Home_movieLink__Vy9G5",v=t(110),h=t(184),d=function(e){e.onNavigate;var n=(0,i.useState)([]),t=(0,o.Z)(n,2),c=t[0],d=t[1],_=(0,v.H)().updateReferrer;return(0,i.useEffect)((function(){_("home")}),[_]),(0,i.useEffect)((function(){var e=function(){var e=(0,r.Z)(a().mark((function e(n){var t,r,o;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t="".concat("https://api.themoviedb.org/3").concat(n,"?api_key=").concat("35a34ce8f38b4fede9b5661b8e9c4e2f"),e.next=4,fetch(t);case 4:if((r=e.sent).ok){e.next=7;break}throw new Error("Network response was not ok");case 7:return e.next=9,r.json();case 9:return o=e.sent,e.abrupt("return",o);case 13:e.prev=13,e.t0=e.catch(0),console.error("Error:",e.t0);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(n){return e.apply(this,arguments)}}(),n=function(){var n=(0,r.Z)(a().mark((function n(){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e("/trending/movie/day");case 2:t=n.sent,d(t.results||[]);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();n()}),[]),(0,h.jsxs)("div",{className:u,children:[(0,h.jsx)("h2",{className:f,children:"Trending today"}),(0,h.jsx)("ul",{className:l,children:c.map((function(e){return(0,h.jsx)("li",{className:m,children:(0,h.jsx)(s.rU,{className:p,to:"/movies/".concat(e.id),children:e.title||e.name})},e.id)}))})]})}},861:function(e,n,t){function r(e,n,t,r,o,c,a){try{var i=e[c](a),s=i.value}catch(u){return void t(u)}i.done?n(s):Promise.resolve(s).then(r,o)}function o(e){return function(){var n=this,t=arguments;return new Promise((function(o,c){var a=e.apply(n,t);function i(e){r(a,o,c,i,s,"next",e)}function s(e){r(a,o,c,i,s,"throw",e)}i(void 0)}))}}t.d(n,{Z:function(){return o}})}}]);
//# sourceMappingURL=433.2670ade0.chunk.js.map