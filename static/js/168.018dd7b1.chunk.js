"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[168],{168:function(e,n,t){t.r(n),t.d(n,{default:function(){return h}});var r=t(861),o=t(439),a=t(757),s=t.n(a),i=t(791),c=t(689),u={reviewsContainer:"Reviews_reviewsContainer__bHfUv",review:"Reviews_review__sHbuN",author:"Reviews_author__CqYAZ",content:"Reviews_content__13k0w"},v=t(184),h=function(){var e=(0,c.UO)().id,n=(0,i.useState)([]),t=(0,o.Z)(n,2),a=t[0],h=t[1],f=(0,i.useState)(!1),l=(0,o.Z)(f,2),w=l[0],d=l[1];return(0,i.useEffect)((function(){var n=function(){var n=(0,r.Z)(s().mark((function n(){var t,r,o;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return d(!0),n.prev=1,t="".concat("https://api.themoviedb.org/3","/movie/").concat(e,"/reviews?api_key=").concat("35a34ce8f38b4fede9b5661b8e9c4e2f","&language=en-US"),n.next=5,fetch(t);case 5:if((r=n.sent).ok){n.next=8;break}throw new Error("Network response was not ok");case 8:return n.next=10,r.json();case 10:o=n.sent,h(o.results),n.next=17;break;case 14:n.prev=14,n.t0=n.catch(1),console.error("Error:",n.t0);case 17:return n.prev=17,d(!1),n.finish(17);case 20:case"end":return n.stop()}}),n,null,[[1,14,17,20]])})));return function(){return n.apply(this,arguments)}}();n()}),[e]),w?(0,v.jsx)("div",{children:"Loading..."}):a.length?(0,v.jsx)("div",{className:u.reviewsContainer,children:a.map((function(e){return(0,v.jsxs)("div",{className:u.review,children:[(0,v.jsxs)("h4",{className:u.author,children:["Author: ",e.author]}),(0,v.jsx)("p",{className:u.content,children:e.content})]},e.id)}))}):(0,v.jsx)("div",{className:u.noReviews,children:"We don't have any reviews for this movie."})}},861:function(e,n,t){function r(e,n,t,r,o,a,s){try{var i=e[a](s),c=i.value}catch(u){return void t(u)}i.done?n(c):Promise.resolve(c).then(r,o)}function o(e){return function(){var n=this,t=arguments;return new Promise((function(o,a){var s=e.apply(n,t);function i(e){r(s,o,a,i,c,"next",e)}function c(e){r(s,o,a,i,c,"throw",e)}i(void 0)}))}}t.d(n,{Z:function(){return o}})}}]);
//# sourceMappingURL=168.018dd7b1.chunk.js.map