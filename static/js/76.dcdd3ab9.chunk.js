"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[76],{76:function(e,t,r){r.r(t),r.d(t,{default:function(){return d}});var n=r(861),a=r(439),c=r(757),s=r.n(c),o=r(791),i=r(689),u="Cast_castContainer__NIXqj",f="Cast_castMember__RY3Nk",h="Cast_castImage__d8bQP",l="Cast_castInfo__fGvyp",p="Cast_castName__-i08u",_="Cast_castCharacter__Rliw1",m=r(184),d=function(){var e=(0,i.UO)().id,t=(0,o.useState)([]),r=(0,a.Z)(t,2),c=r[0],d=r[1];return(0,o.useEffect)((function(){var t=function(){var t=(0,n.Z)(s().mark((function t(){var r,n,a;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r="".concat("https://api.themoviedb.org/3","/movie/").concat(e,"/credits?api_key=").concat("35a34ce8f38b4fede9b5661b8e9c4e2f"),t.next=4,fetch(r);case 4:if((n=t.sent).ok){t.next=7;break}throw new Error("Network response was not ok");case 7:return t.next=9,n.json();case 9:a=t.sent,d(a.cast),t.next=16;break;case 13:t.prev=13,t.t0=t.catch(0),console.error("Error:",t.t0);case 16:case"end":return t.stop()}}),t,null,[[0,13]])})));return function(){return t.apply(this,arguments)}}();t()}),[e]),(0,m.jsx)("div",{className:u,children:c.map((function(e){return(0,m.jsxs)("div",{className:f,children:[(0,m.jsx)("img",{className:h,src:"https://image.tmdb.org/t/p/w500/".concat(e.profile_path),alt:e.name}),(0,m.jsxs)("div",{className:l,children:[(0,m.jsx)("p",{className:p,children:e.name}),(0,m.jsxs)("p",{className:_,children:["Character: ",e.character]})]})]},e.cast_id)}))})}},861:function(e,t,r){function n(e,t,r,n,a,c,s){try{var o=e[c](s),i=o.value}catch(u){return void r(u)}o.done?t(i):Promise.resolve(i).then(n,a)}function a(e){return function(){var t=this,r=arguments;return new Promise((function(a,c){var s=e.apply(t,r);function o(e){n(s,a,c,o,i,"next",e)}function i(e){n(s,a,c,o,i,"throw",e)}o(void 0)}))}}r.d(t,{Z:function(){return a}})}}]);
//# sourceMappingURL=76.dcdd3ab9.chunk.js.map