"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[433],{11:function(e,t,n){n.r(t),n.d(t,{default:function(){return _}});var r=n(861),a=n(439),o=n(757),c=n.n(o),s=n(791),i=n(87),u="Home_container__MGYYT",f="Home_title__XLxL1",m="Home_movieList__dew6t",l="Home_movieItem__yfa+9",p="Home_movieImage__F3Uf2",h="Home_movieTitle__Zx60k",v=n(110),d=n(184),_=function(e){e.onNavigate;var t=(0,s.useState)([]),n=(0,a.Z)(t,2),o=n[0],_=n[1],w=(0,v.H)().updateReferrer;return(0,s.useEffect)((function(){w("home")}),[w]),(0,s.useEffect)((function(){var e=function(){var e=(0,r.Z)(c().mark((function e(t){var n,r,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n="".concat("https://api.themoviedb.org/3").concat(t,"?api_key=").concat("35a34ce8f38b4fede9b5661b8e9c4e2f"),e.next=4,fetch(n);case 4:if((r=e.sent).ok){e.next=7;break}throw new Error("Network response was not ok");case 7:return e.next=9,r.json();case 9:return a=e.sent,e.abrupt("return",a);case 13:e.prev=13,e.t0=e.catch(0),console.error("Error:",e.t0);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(t){return e.apply(this,arguments)}}(),t=function(){var t=(0,r.Z)(c().mark((function t(){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e("/trending/movie/day");case 2:n=t.sent,_(n.results||[]);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();t()}),[]),(0,d.jsxs)("div",{className:u,children:[(0,d.jsx)("h2",{className:f,children:"Trending today"}),(0,d.jsx)("ul",{className:m,children:o.map((function(e){return(0,d.jsx)("li",{className:l,children:(0,d.jsxs)(i.rU,{to:"/movies/".concat(e.id),children:[(0,d.jsx)("img",{className:p,src:"https://image.tmdb.org/t/p/w500/".concat(e.poster_path),alt:e.title||e.name}),(0,d.jsx)("span",{className:h,children:e.title||e.name})]})},e.id)}))})]})}},861:function(e,t,n){function r(e,t,n,r,a,o,c){try{var s=e[o](c),i=s.value}catch(u){return void n(u)}s.done?t(i):Promise.resolve(i).then(r,a)}function a(e){return function(){var t=this,n=arguments;return new Promise((function(a,o){var c=e.apply(t,n);function s(e){r(c,a,o,s,i,"next",e)}function i(e){r(c,a,o,s,i,"throw",e)}s(void 0)}))}}n.d(t,{Z:function(){return a}})}}]);
//# sourceMappingURL=433.c2cdc900.chunk.js.map