!function(e){var t={};function n(o){if(t[o])return t[o].exports;var i=t[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(o,i,function(t){return e[t]}.bind(null,i));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=3)}([function(e,t,n){},function(e,t,n){e.exports={popup:"src-component-popup-popup__popup--2C0vv","popup-title":"src-component-popup-popup__popup-title--El493","popup-content":"src-component-popup-popup__popup-content--3j_ID",mask:"src-component-popup-popup__mask--1f6Iq"}},function(e,t,n){e.exports={video:"src-component-video-video__video--F6CZD","video-content":"src-component-video-video__video-content--1m2Aq","video-controls":"src-component-video-video__video-controls--KhXmJ","video-progress":"src-component-video-video__video-progress--3Pnp8","video-progress-now":"src-component-video-video__video-progress-now--2xSPE","video-progress-suc":"src-component-video-video__video-progress-suc--2UkAG","video-progress-bar":"src-component-video-video__video-progress-bar--4HFQE","video-play":"src-component-video-video__video-play--3CMFK","video-time":"src-component-video-video__video-time--165Us","video-full":"src-component-video-video__video-full--osPMx","video-volume":"src-component-video-video__video-volume--2zzhZ","video-volprogress":"src-component-video-video__video-volprogress--gXA5p","video-volprogress-now":"src-component-video-video__video-volprogress-now--3F_5z","video-volprogress-bar":"src-component-video-video__video-volprogress-bar--2GhTK"}},function(e,t,n){"use strict";n.r(t);n(0);var o=n(1);var i=function(){function e(e){this.settings=e,this.settings=Object.assign({width:"100%",height:"100%",title:"",position:"center",mask:!0,content:function(){}},this.settings),this.init()}return e.prototype.init=function(){this.template(),this.settings.mask&&this.createMask(),this.handle(),this.contentCallBack()},e.prototype.template=function(){this.tempContainer=document.createElement("div"),this.tempContainer.style.width=this.settings.width,this.tempContainer.style.height=this.settings.height,this.tempContainer.className=o.popup,this.tempContainer.innerHTML='\n        <div class="'+o["popup-title"]+'">\n          <h3>'+this.settings.title+'<h3>\n          <i class="iconfont icon-guanbi"></i>\n        </div>\n        <div class="'+o["popup-content"]+'"></div>\n      ',document.body.appendChild(this.tempContainer),"left"===this.settings.postion?(this.tempContainer.style.left="0px",this.tempContainer.style.top=window.innerHeight-this.tempContainer.offsetHeight+"px"):"right"===this.settings.postion?(this.tempContainer.style.right="0px",this.tempContainer.style.top=window.innerHeight-this.tempContainer.offsetHeight+"px"):(this.tempContainer.style.left=(window.innerWidth-this.tempContainer.offsetWidth)/2+"px",this.tempContainer.style.top=(window.innerHeight-this.tempContainer.offsetHeight)/2+"px")},e.prototype.handle=function(){var e=this;this.tempContainer.querySelector("."+o["popup-title"]+" i").addEventListener("click",(function(){document.body.removeChild(e.tempContainer),e.settings.mask&&document.body.removeChild(e.mask)}))},e.prototype.createMask=function(){this.mask=document.createElement("div"),this.mask.className=o.mask,this.mask.style.width="100%",this.mask.style.height=document.body.offsetHeight+"px",document.body.appendChild(this.mask)},e.prototype.contentCallBack=function(){var e=this.tempContainer.querySelector("."+o["popup-content"]);this.settings.content(e)},e}(),s=function(e){return new i(e)},r=n(2);for(var p=function(){function e(e){this.settings=e,this.settings=Object.assign({width:"100%",height:"100%",autoplay:!1},this.settings),this.init()}return e.prototype.init=function(){this.template(),this.handle()},e.prototype.template=function(){this.tempContainer=document.createElement("div"),this.tempContainer.className=r.video,this.tempContainer.style.width=this.settings.width,this.tempContainer.style.height=this.settings.height,this.tempContainer.innerHTML='\n      <video class="'+r["video-content"]+'" src="'+this.settings.url+'"></video>\n      <div class="'+r["video-controls"]+'">\n        <div class="'+r["video-progress"]+'">\n          <div class="'+r["video-progress-now"]+'"></div>\n          <div class="'+r["video-progress-suc"]+'"></div>\n          <div class="'+r["video-progress-bar"]+'"></div>\n        </div>\n        <div class="'+r["video-play"]+'">\n          <i class="iconfont icon-bofang"></i>\n        </div>\n        <div class="'+r["video-time"]+'">\n          <span>00:00</span> / <span>00:00</span>\n        </div>\n        <div class="'+r["video-full"]+'">\n          <i class="iconfont icon-quanpingzuidahua"></i>\n        </div>\n        <div class="'+r["video-volume"]+'">\n          <i class="iconfont icon-yinliang"></i>\n          <div class="'+r["video-volprogress"]+'">\n            <div class="'+r["video-volprogress-now"]+'"></div>\n            <div class="'+r["video-volprogress-bar"]+'"></div>\n          </div>\n        </div>\n      </div> \n    ',"object"==typeof this.settings.elem?this.settings.elem.appendChild(this.tempContainer):document.querySelector(""+this.settings.elem).appendChild(this.tempContainer)},e.prototype.handle=function(){var e,t=this.tempContainer.querySelector("."+r["video-content"]),n=this.tempContainer.querySelector("."+r["video-controls"]),o=this.tempContainer.querySelector("."+r["video-play"]+" i"),i=this.tempContainer.querySelectorAll("."+r["video-time"]+" span"),s=this.tempContainer.querySelector("."+r["video-full"]+" i"),p=this.tempContainer.querySelectorAll("."+r["video-progress"]+" div"),d=this.tempContainer.querySelectorAll("."+r["video-volprogress"]+" div");function c(){var e=t.currentTime/t.duration,n=t.buffered.end(0)/t.duration;i[0].innerHTML=a(t.currentTime),p[0].style.width=100*e+"%",p[1].style.width=100*n+"%",p[2].style.left=100*e+"%"}function a(e){e=Math.round(e);var t=Math.floor(e/60),n=Math.floor(e%60);return l(t)+":"+l(n)}function l(e){return e<10?"0"+e:""+e}t.volume=.5,this.settings.autoplay&&(e=setInterval(c,1e3),t.play()),this.tempContainer.addEventListener("mouseenter",(function(){n.style.bottom=0})),this.tempContainer.addEventListener("mouseleave",(function(){n.style.bottom="-50px"})),t.addEventListener("canplay",(function(){o.style.fontSize="icon icon-bofang"===o.className?"20px":"24px",i[1].innerHTML=a(t.duration)})),t.addEventListener("play",(function(){o.style.fontSize="24px",o.className="iconfont icon-zanting",e=setInterval(c,1e3)})),t.addEventListener("pause",(function(){o.style.fontSize="20px",o.className="iconfont icon-bofang",clearInterval(e)})),o.addEventListener("click",(function(){t.paused?t.play():t.pause()})),s.addEventListener("click",(function(){t.requestFullscreen()})),p[2].addEventListener("mousedown",(function(e){var n=this,i=e.pageX,s=this.offsetLeft;document.onmousemove=function(e){var o=(e.pageX-i+s+8)/n.parentNode.offsetWidth;o<0&&(o=0),o>1&&(o=1),p[0].style.width=100*o+"%",p[1].style.width=100*o+"%",n.style.left=100*o+"%",t.currentTime=o*t.duration},document.onmouseup=function(){console.info("抬起时",o.className),document.onmousemove=document.onmouseup=null},e.preventDefault()})),d[1].addEventListener("mousedown",(function(e){var n=this,i=e.pageX,s=this.offsetLeft;document.onmousemove=function(e){var o=(e.pageX-i+s+8)/n.parentNode.offsetWidth;o<0&&(o=0),o>1&&(o=1),d[0].style.width=100*o+"%",n.style.left=100*o+"%",t.volume=o},document.onmouseup=function(){console.info("抬起时",o.className),document.onmousemove=document.onmouseup=null},e.preventDefault()}))},e}(),d=function(e){return new p(e)},c=document.querySelectorAll("#list li"),a=0;a<c.length;a++)c[a].addEventListener("click",(function(){var e=this.dataset.url;this.dataset.title;s({width:"880px",height:"556px",title:this.dataset.title,postion:"center",mask:!0,content:function(t){console.info("e",t),d({url:e,elem:t,autoplay:!0})}})}))}]);