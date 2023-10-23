(function(){"use strict";var t={3446:function(t,e,n){var r=n(9242),o=n(3396);function i(t,e,n,r,i,l){const a=(0,o.up)("LifeGame");return(0,o.wg)(),(0,o.j4)(a)}var l=n(7139);const a=(0,o._)("h1",null,"LifeGame",-1),u=["textContent"],s={id:"board"},c=["onClick","onMouseenter"],f={class:"buttons"},h=["disabled"],p=["disabled"];function m(t,e,n,r,i,m){return(0,o.wg)(),(0,o.iD)(o.HY,null,[a,(0,o._)("p",null,[(0,o.Uk)("第 "),(0,o._)("span",{textContent:(0,l.zw)(i.generation)},null,8,u),(0,o.Uk)(" 世代")]),(0,o._)("table",s,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(i.rowNum,(t=>((0,o.wg)(),(0,o.iD)("tr",{key:"row-"+t},[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(i.colNum,(e=>((0,o.wg)(),(0,o.iD)("td",{key:"cell"+t*i.colNum+e,onClick:n=>m.toggleState((t-1)*i.colNum+e-1),onMouseenter:n=>m.mouseEnter(n,(t-1)*i.colNum+e-1),class:(0,l.C_)(i.cellState[(t-1)*i.colNum+e-1]?"live":"")},null,42,c)))),128))])))),128))]),(0,o._)("div",f,[(0,o._)("button",{type:"button",class:"btn btn-primary",onClick:e[0]||(e[0]=(...t)=>m.start&&m.start(...t)),disabled:i.isStarted},"Start",8,h),(0,o._)("button",{type:"button",class:"btn btn-primary",onClick:e[1]||(e[1]=(...t)=>m.stop&&m.stop(...t)),disabled:!i.isStarted},"Stop",8,p),(0,o._)("button",{type:"button",class:"btn btn-primary",onClick:e[2]||(e[2]=(...t)=>m.clear&&m.clear(...t))},"clear")])],64)}var d={name:"LifeGame",data(){return{generation:0,rowNum:20,colNum:50,intervalVar:null,cellState:new Array(1e3).fill(!1),isStarted:!1}},mounted(){},methods:{start(){this.isStarted=!0,this.intervalVar=setInterval(this.check,100)},stop(){clearInterval(this.intervalVar),this.isStarted=!1},clear(){this.stop(),this.generation=0,this.cellState=new Array(1e3).fill(!1)},toggleState(t){this.cellState[t]=!this.cellState[t]},mouseEnter(t,e){1==t.buttons&&(this.cellState[e]=!0)},check(){const t=this.cellState.slice();for(var e=1;e<=this.rowNum;e++)for(var n=1;n<=this.colNum;n++){for(var r=0,o=-1;o<=1;o++)for(var i=-1;i<=1;i++)0==o&&0==i||e+o<1||e+o>this.rowNum||n+i<1||n+i>this.colNum||this.cellState[(e+o-1)*this.colNum+n+i-1]&&r++;3==r?t[(e-1)*this.colNum+n-1]=!0:2!=r&&(t[(e-1)*this.colNum+n-1]=!1)}t.toString()==this.cellState.toString()&&this.stop(),this.cellState=t,this.generation++}}},v=n(89);const b=(0,v.Z)(d,[["render",m]]);var g=b,w={name:"App",components:{LifeGame:g}};const S=(0,v.Z)(w,[["render",i]]);var y=S;(0,r.ri)(y).mount("#app")}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={exports:{}};return t[r].call(i.exports,i,i.exports,n),i.exports}n.m=t,function(){var t=[];n.O=function(e,r,o,i){if(!r){var l=1/0;for(c=0;c<t.length;c++){r=t[c][0],o=t[c][1],i=t[c][2];for(var a=!0,u=0;u<r.length;u++)(!1&i||l>=i)&&Object.keys(n.O).every((function(t){return n.O[t](r[u])}))?r.splice(u--,1):(a=!1,i<l&&(l=i));if(a){t.splice(c--,1);var s=o();void 0!==s&&(e=s)}}return e}i=i||0;for(var c=t.length;c>0&&t[c-1][2]>i;c--)t[c]=t[c-1];t[c]=[r,o,i]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,r){var o,i,l=r[0],a=r[1],u=r[2],s=0;if(l.some((function(e){return 0!==t[e]}))){for(o in a)n.o(a,o)&&(n.m[o]=a[o]);if(u)var c=u(n)}for(e&&e(r);s<l.length;s++)i=l[s],n.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return n.O(c)},r=self["webpackChunklifegame"]=self["webpackChunklifegame"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(3446)}));r=n.O(r)})();
//# sourceMappingURL=app.4a2d3398.js.map