(this.webpackJsonptemplete=this.webpackJsonptemplete||[]).push([[0],{65:function(e,n,t){"use strict";t.r(n);var r,a,c,i,s,o,l,u,b=t(0),p=t.n(b),d=t(34),f=t.n(d),j=t(6),x=t(14),m=t(2),h=t(8),g=t(12),O=t.n(g),y=t(18),v=t(16),k=t.n(v),w=t(4),S=t(5),C=S.b.div(r||(r=Object(w.a)(["\n  max-width: 1000px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]))),E=S.b.ul(a||(a=Object(w.a)(["\n  max-width: 1000px;\n  width: 100vw;\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(220px, auto));\n  gap: 15px;\n  margin-bottom: 30px;\n"]))),z=S.b.input(c||(c=Object(w.a)(["\n  width: 400px;\n  height: 38px;\n  outline: none;\n  border: none;\n  border-radius: 3px;\n  margin-bottom: 40px;\n  padding: 5px 10px;\n  font-size: 12px;\n  font-family: 'Press Start 2P', cursive;\n"]))),P=t(1),F=function(){var e=Object(b.useRef)(),n=Object(m.f)();Object(b.useEffect)((function(){e.current.focus()}),[]);return Object(P.jsx)(z,{type:"search",placeholder:"Input pokemon name or number",ref:e,onKeyUp:function(t){var r=e.current.value;""!==e.current.value&&"Enter"===t.key&&n("/details/".concat(r))}})},_=S.b.section(i||(i=Object(w.a)(["\n  max-width: 1000px;\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  margin-bottom: 20px;\n"]))),I=S.b.button(s||(s=Object(w.a)(["\n  outline: none;\n  border: none;\n  background-color: ",";\n  padding: 10px;\n  border-radius: 3px;\n  margin: 5px;\n  font-size: 12px;\n  font-family: 'Press Start 2P', cursive;\n  transition: all 250ms linear;\n  cursor: pointer;\n\n  &:hover {\n    transform: scale(0.95);\n  }\n"])),(function(e){return e.type})),M=function(e){switch(e){case"grass":return"rgb(120,200,79)";case"ghost":return"rgb(112,88,152)";case"ice":return"rgb(152,216,216)";case"ground":return"rgb(224,192,104)";case"electric":return"rgb(248,207,48)";case"poison":return"rgb(159,64,159)";case"dragon":return"rgb(112,56,248)";case"normal":return"rgb(168,168,119)";case"steel":return"rgb(184,184,208)";case"flying":return"rgb(168,144,240)";case"fairy":return"rgb(238,153,172)";case"fire":return"rgb(239,128,48)";case"water":return"rgb(103,144,240)";case"bug":return"rgb(168,183,32)";case"dark":return"rgb(112,88,72)";case"rock":return"rgb(184,160,56)";case"psychic":return"rgb(248,87,135)";case"fighting":return"rgb(192,48,40)";default:return"white"}},N=function(e){var n=e.pokemonList,t=e.setFilteredPokemonList;return Object(P.jsxs)(_,{children:[Object(P.jsx)(I,{onClick:function(){t(null)},children:"reset"}),["grass","ghost","ice","ground","electric","poison","dragon","normal","steel","flying","fairy","fire","water","bug","dark","rock","psychic","fighting"].map((function(e){return Object(P.jsx)(I,{type:M(e),onClick:function(e){return function(e){var r=e.target.textContent,a=n.filter((function(e){var n;return e.types[0].type.name===r||(null===(n=e.types[1])||void 0===n?void 0:n.type.name)===r}));t(a)}(e)},children:e},e)}))]})},D=S.b.section(o||(o=Object(w.a)(["\n  width: 100%;\n  display: flex;\n  margin: 0 0 20px 40px;\n"]))),L=S.b.div(l||(l=Object(w.a)(["\n  margin-right: 12px;\n  position: relative;\n  cursor: pointer;\n  "]))),B=S.b.div(u||(u=Object(w.a)(["\n  position: relative;\n  display: inline-block;\n  transition: all 250ms linear;\n  cursor: pointer;\n\n  .description {\n    display: none;\n    position: absolute;\n    padding: 10px;\n    font-size: 12px;\n    line-height: 1.6em;\n    color: white;\n    border-radius: 5px;\n    background: black;\n    width: fit-content;\n  }\n\n  &:hover {\n    transform: scale(1.2);\n  }\n\n  &:hover .description {\n    display: inline-block;\n    top: 40px;\n    left: 0px;\n  }\n"])));function H(){return(H=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function J(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var R=b.createElement("style",{type:"text/css"},"\n\t.st0{fill:#FFFFFF;}\n\t.st1{fill:#DFDFDF;}\n\t.st2{fill:#FF1C1C;}\n\t.st3{fill:#DF1818;}\n"),U=b.createElement("g",{id:"Pok\\xE9ball_1_"},b.createElement("g",{id:"Colours"},b.createElement("path",{id:"Down",className:"st0",d:"M297.6,380.9c-40.4,0-74.1-28.6-82.1-66.6H81.1c9.5,110.5,102.2,197.2,215.1,197.2 s205.7-86.7,215.1-197.2H379.7C371.7,352.4,338,380.9,297.6,380.9z"}),b.createElement("path",{id:"Shadow_Down",className:"st1",d:"M345.6,505.9c89.6-21,157.7-97.7,165.7-191.6h-53C453,399.5,408.3,471.7,345.6,505.9z"}),b.createElement("path",{id:"Center",className:"st0",d:"M347.1,297L347.1,297C347,297,347,297,347.1,297c-0.1-6.1-1.2-11.9-3.2-17.3 c-7-18.8-25.1-32.1-46.3-32.1s-39.3,13.4-46.3,32.1c-2,5.4-3.1,11.2-3.1,17.3c0,0,0,0,0,0h0.1c0,0,0,0,0,0 c0,6.1,1.1,11.9,3.1,17.3c7,18.8,25.1,32.1,46.3,32.1c21.2,0,39.3-13.4,46.3-32.1C346,309,347.1,303.1,347.1,297 C347.1,297,347.1,297,347.1,297z"}),b.createElement("path",{id:"Up",className:"st2",d:"M297.7,213.2c40.4,0,74.1,28.6,82.1,66.6h134.4C504.7,169.2,412,82.5,299,82.5S93.4,169.2,83.9,279.7 h131.7C223.6,241.7,257.3,213.2,297.7,213.2z"}),b.createElement("path",{id:"Shadow_Up",className:"st3",d:"M458.3,279.7h55.8c-8.2-95.5-78.6-173.3-170.5-192.6C407.4,120.8,452.9,193.7,458.3,279.7z"})),b.createElement("path",{id:"Line",d:"M299,82.5c113,0,205.7,86.7,215.1,197.2H379.7c-8-38-41.7-66.6-82.1-66.6c-40.4,0-74.1,28.6-82.1,66.6H83.9 C93.4,169.2,186.1,82.5,299,82.5z M343.9,279.7c2,5.4,3.1,11.2,3.1,17.3c0,0,0,0,0,0h0.1c0,0,0,0,0,0c0,6.1-1.1,11.9-3.1,17.3 c-7,18.8-25.1,32.1-46.3,32.1c-21.2,0-39.3-13.4-46.3-32.1c-2-5.4-3.1-11.2-3.1-17.3c0,0,0,0,0,0h-0.1c0,0,0,0,0,0 c0-6.1,1.1-11.9,3.1-17.3c7-18.8,25.1-32.1,46.3-32.1S336.9,261,343.9,279.7z M296.2,511.6c-113,0-205.7-86.7-215.1-197.2h134.4 c8,38,41.7,66.6,82.1,66.6s74.1-28.6,82.1-66.6h131.7C501.9,424.8,409.2,511.6,296.2,511.6z M297.6,41.3 C156.4,41.3,41.9,155.8,41.9,297s114.5,255.7,255.7,255.7S553.4,438.3,553.4,297S438.9,41.3,297.6,41.3z"}));function A(e,n){var t=e.title,r=e.titleId,a=J(e,["title","titleId"]);return b.createElement("svg",H({id:"Pok\\xE9ball",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 595.3 594.1",style:{enableBackground:"new 0 0 595.3 594.1"},xmlSpace:"preserve",ref:n,"aria-labelledby":r},a),t?b.createElement("title",{id:r},t):null,R,U)}var Y,K,X,q,G,Q,T,V,W,Z,$,ee,ne,te,re,ae,ce,ie=b.forwardRef(A),se=(t.p,function(e){var n=e.party,t=Object(m.f)();return Object(P.jsx)(D,{children:n.map((function(e){return Object(P.jsxs)(B,{children:[Object(P.jsx)(L,{onClick:function(){return t("/details/".concat(e))},children:Object(P.jsx)(ie,{width:35,height:35})}),Object(P.jsx)("div",{className:"description",children:e})]},e)}))})}),oe=S.b.div(Y||(Y=Object(w.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding: 20px;\n  border-radius: 2px;\n  background-color: ",";\n  cursor: pointer;\n  transition: all 250ms linear;\n\n  &:hover {\n    img {\n      animation-name: jump;\n      animation-duration: 500ms;\n      animation-iteration-count: infinite;\n      animation-direction: reverse;\n    }\n\n    @keyframes jump {\n      from {\n        transform: translateY(0px);\n      }\n\n      to {\n        transform: translateY(8px);\n      }\n    }\n  }\n"])),(function(e){return e.type})),le=S.b.div(K||(K=Object(w.a)(["\n  display: flex;\n"]))),ue=S.b.h3(X||(X=Object(w.a)(["\n  font-size: 12px;\n"]))),be=p.a.forwardRef((function(e,n){var t=e.data,r=Object(m.f)();return Object(P.jsxs)(oe,{ref:n,type:M(t.types[0].type.name),onClick:function(){return r("/details/".concat(t.name))},children:[Object(P.jsxs)(le,{children:[Object(P.jsx)("img",{src:t.sprites.front_default,alt:t.name}),Object(P.jsx)("img",{src:t.sprites.back_default,alt:t.name})]}),Object(P.jsx)(ue,{children:t.name})]})})),pe=function(e){var n=e.party,t=Object(b.useState)("https://pokeapi.co/api/v2/pokemon/"),r=Object(j.a)(t,2),a=r[0],c=r[1],i=Object(b.useState)([]),s=Object(j.a)(i,2),o=s[0],l=s[1],u=Object(b.useState)(null),p=Object(j.a)(u,2),d=p[0],f=p[1],x=Object(b.useRef)(null),m=function(){var e=Object(y.a)(O.a.mark((function e(n){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,k.a.get(n).then((function(e){return e.data}));case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),g=function(){var e=Object(y.a)(O.a.mark((function e(n){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",n.map(function(){var e=Object(y.a)(O.a.mark((function e(n){var t;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.a.get(n.url);case 2:t=e.sent,l((function(e){return e=[].concat(Object(h.a)(e),[t.data])}));case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()));case 1:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();Object(b.useEffect)((function(){m(a).then((function(e){g(e.results),c(e.next)}))}),[]);var v=Object(b.useCallback)(function(){var e=Object(y.a)(O.a.mark((function e(n){var t;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=Object(j.a)(n,1),t[0].isIntersecting&&m(a).then((function(e){g(e.results),c(e.next)}));case 2:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),[x.current]);return Object(b.useEffect)((function(){if(x.current){var e=new IntersectionObserver(v);return e.observe(x.current),function(){return e.disconnect()}}})),Object(P.jsx)(P.Fragment,{children:Object(P.jsxs)(C,{children:[Object(P.jsx)(F,{}),Object(P.jsx)(N,{pokemonList:o,setFilteredPokemonList:f}),Object(P.jsx)(se,{party:n}),Object(P.jsx)(E,{children:d?d.map((function(e){return Object(P.jsx)(be,{data:e},e.id)})):o.map((function(e,n){return Object(P.jsx)(be,{data:e,ref:n===o.length-1?x:null},e.id)}))})]})})},de=t(38),fe=t(39),je=(t(64),function(e){var n=e.details,t=n&&n.stats[0].base_stat,r=n&&n.stats[1].base_stat,a=n&&n.stats[2].base_stat,c=n&&n.stats[3].base_stat,i=n&&n.stats[4].base_stat,s=n&&n.stats[5].base_stat,o={labels:["HP","Attack","Defense","Special Attack","Special Defense","Speed"],datasets:[{label:"".concat(n&&n.name),data:[t,r,a,c,i,s],backgroundColor:"rgba(34, 202, 236, .2)",borderColor:"rgba(34, 202, 236, 1)",pointBackgroundColor:"rgba(34, 202, 236, 1)",pointHoverBackgroundColor:"red",pointHoverBorderColor:"rgba(34, 202, 236, 1)"}]};return Object(P.jsx)(fe.a,{data:o,options:{scale:{pointLabels:{fontSize:20},ticks:{min:0,max:100,stepSize:10,showLabelBackdrop:!0,backdropColor:"rgba(203, 197, 11, 1)"}}}})}),xe=S.b.div(q||(q=Object(w.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 600px;\n  width: 1000px;\n"]))),me=S.b.div(G||(G=Object(w.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  flex-grow: 1;\n"]))),he=S.b.img(Q||(Q=Object(w.a)(["\n  width: 350px;\n  height: 350px;\n  margin-bottom: 20px;\n"]))),ge=S.b.div(T||(T=Object(w.a)(["\n  display: flex;\n"]))),Oe=S.b.div(V||(V=Object(w.a)(["\n  font-size: 30px;\n  height: 30px;\n  color: ",";\n  margin-right: 10px;\n  cursor: pointer;\n"])),(function(e){return e.like?"red":"gray"})),ye=S.b.h3(W||(W=Object(w.a)(["\n  font-size: 30px;\n  color: white;\n  margin-bottom: 20px;\n"]))),ve=S.b.ul(Z||(Z=Object(w.a)(["\n  display: flex;\n  flex-direction: column;\n  color: white;\n  margin-bottom: 20px;\n"]))),ke=S.b.li($||($=Object(w.a)(["\n  margin-bottom: 8px;\n"]))),we=S.b.ul(ee||(ee=Object(w.a)(["\n  display: flex;\n"]))),Se=S.b.li(ne||(ne=Object(w.a)(["\n  background-color: ",";\n  margin-right: ",";\n  padding: 10px 15px;\n  border-radius: 5px;\n  font-size: 13px;\n"])),(function(e){return e.type}),(function(e){return 0===e.index&&"15px"})),Ce=S.b.div(te||(te=Object(w.a)(["\n  flex-grow: 2;\n  width: 50px;\n  background-color: white;\n"]))),Ee=function(e){var n=e.party,t=e.setParty,r=Object(m.g)().pokemon,a=Object(b.useState)(null),c=Object(j.a)(a,2),i=c[0],s=c[1],o=Object(b.useState)(!1),l=Object(j.a)(o,2),u=l[0],p=l[1];Object(b.useEffect)((function(){(function(e){return k.a.get("https://pokeapi.co/api/v2/pokemon/".concat(e,"/"))})(r).then((function(e){var t=e.data;s(t),p(n.includes(t.name))}))}),[]);return Object(P.jsx)(P.Fragment,{children:i&&Object(P.jsxs)(xe,{children:[Object(P.jsxs)(me,{children:[Object(P.jsx)(he,{src:i.sprites.other.dream_world.front_default}),Object(P.jsxs)(ge,{children:[Object(P.jsx)(Oe,{like:u,onClick:function(){var e=i.name;if(u){p(!1);var r=n.indexOf(e);n.splice(r,1),t(n)}else{if(n.length>=6)return void alert("\ud3ec\ucf13\ubaac\uc740 6\ub9c8\ub9ac\uae4c\uc9c0 \uc800\uc7a5\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.");p(!0);var a=[].concat(Object(h.a)(n),[e]);t(a)}},children:Object(P.jsx)(de.a,{})}),Object(P.jsx)(ye,{children:i.name})]}),Object(P.jsx)(ve,{children:i.abilities.map((function(e){return Object(P.jsx)(ke,{children:e.ability.name},e.ability.name)}))}),Object(P.jsx)(we,{children:i&&i.types.map((function(e,n){return Object(P.jsx)(Se,{index:n,type:M(e.type.name),children:e.type.name},e.type.name)}))})]}),Object(P.jsx)(Ce,{children:Object(P.jsx)(je,{details:i})})]})})},ze=Object(S.a)(re||(re=Object(w.a)(["\n  * {\n    margin: 0;\n    padding : 0;\n  }\n\n  html {\n    font-family: 'Press Start 2P', cursive;\n  }\n\n  body {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: #202020;\n  }\n\n  ul {\n  list-style: none;\n  }\n"]))),Pe=S.b.header(ae||(ae=Object(w.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 40px;\n  color: white;\n  cursor: pointer;\n"]))),Fe=S.b.h1(ce||(ce=Object(w.a)(["\n  font-size: 40px;\n"]))),_e=function(){var e=Object(m.f)();return Object(P.jsx)(Pe,{onClick:function(){return e("/")},children:Object(P.jsx)(Fe,{children:"Pokedex"})})},Ie=function(e,n){var t=Object(b.useState)((function(){return function(){try{var t=localStorage.getItem(e);return t?JSON.parse(t):n}catch(r){return console.error(r),n}}()})),r=Object(j.a)(t,2),a=r[0],c=r[1];return[a,function(t){try{if(!t)return;localStorage.setItem(e,JSON.stringify(t)),c(t)}catch(r){console.error(r),localStorage.setItem(e,JSON.stringify(n)),c(n)}}]},Me=function(){var e=Ie("party",[]),n=Object(j.a)(e,2),t=n[0],r=n[1];return Object(P.jsxs)(P.Fragment,{children:[Object(P.jsx)(ze,{}),Object(P.jsxs)(x.a,{basename:"/Pokedex",children:[Object(P.jsx)(_e,{}),Object(P.jsxs)(m.c,{children:[Object(P.jsx)(m.a,{path:"/",element:Object(P.jsx)(pe,{party:t})}),Object(P.jsx)(m.a,{path:"/details/:pokemon",element:Object(P.jsx)(Ee,{party:t,setParty:r})})]})]})]})};f.a.render(Object(P.jsx)(p.a.StrictMode,{children:Object(P.jsx)(Me,{})}),document.getElementById("root"))}},[[65,1,2]]]);
//# sourceMappingURL=main.3becc557.chunk.js.map