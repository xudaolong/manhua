!function(e,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define([],n):"object"==typeof exports?exports.manhua=n():e.manhua=n()}("undefined"!=typeof self?self:this,(function(){return function(e){var n={};function t(o){if(n[o])return n[o].exports;var d=n[o]={i:o,l:!1,exports:{}};return e[o].call(d.exports,d,d.exports,t),d.l=!0,d.exports}return t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:o})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var d in e)t.d(o,d,function(n){return e[n]}.bind(null,d));return o},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=0)}([function(e,n,t){const o=[{name:"武炼巅峰",id:"12202"},{name:"重生之都市修仙",id:"12214"},{name:"百炼成神",id:"10081"},{name:"我独自升级",id:"15087"}];(async()=>{const e=t(1)(),n=await Promise.all(o.map(async n=>e(`https://www.onemanhua.com/${n.id}/`,"body > div.fed-main-info.fed-min-width > div > div:nth-child(1)",[{name:"div.fed-col-xs12.fed-col-sm8.fed-col-md9 > dl > dd > h1",updated:"div.fed-col-xs12.fed-col-sm8.fed-col-md9 > dl > dd > ul > li:nth-child(3) > a",desc:"div.fed-col-xs12.fed-col-sm8.fed-col-md9 > dl > dd > ul > li:nth-child(4) > a",link:"div.fed-col-xs12.fed-col-sm8.fed-col-md9 > dl > dd > ul > li:nth-child(4) > a@href"}])));console.log(n)})()},function(e,n){e.exports=require("x-ray")}])}));