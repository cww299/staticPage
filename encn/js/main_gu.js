(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var d=this||self;function e(a,v){a=a.split(".");var b=d;a[0]in b||"undefined"==typeof b.execScript||b.execScript("var "+a[0]);for(var c;a.length&&(c=a.shift());)a.length||void 0===v?b[c]&&b[c]!==Object.prototype[c]?b=b[c]:b=b[c]={}:b[c]=v};var f={0:"\u0a85\u0aa8\u0ac1\u0ab5\u0abe\u0aa6 \u0a95\u0ab0\u0acb",1:"\u0ab0\u0aa6 \u0a95\u0ab0\u0acb",2:"\u0aac\u0a82\u0aa7 \u0a95\u0ab0\u0acb",3:function(a){return"Google \u0a8f \u0a86\u0aaa\u0aae\u0ac7\u0ab3\u0ac7 \u0a86 \u0aaa\u0ac3\u0ab7\u0acd\u0aa0\u0aa8\u0ac7 \u0a86\u0aae\u0abe\u0a82 \u0a85\u0aa8\u0ac1\u0ab5\u0abe\u0aa6\u0abf\u0aa4 \u0a95\u0ab0\u0acd\u0aaf\u0ac1\u0a82 \u0a9b\u0ac7: "+a},4:function(a){return"\u0a86\u0aae\u0abe\u0a82 \u0a85\u0aa8\u0ac1\u0ab5\u0abe\u0aa6\u0abf\u0aa4: "+a},5:"\u0aad\u0ac2\u0ab2: \u0ab8\u0ab0\u0acd\u0ab5\u0ab0 \u0aa4\u0aae\u0abe\u0ab0\u0ac0 \u0ab5\u0abf\u0aa8\u0a82\u0aa4\u0ac0\u0aa8\u0ac7 \u0aaa\u0ac2\u0ab0\u0acd\u0aa3 \u0a95\u0ab0\u0ac0 \u0ab6\u0a95\u0acd\u0aaf\u0ac1\u0a82 \u0aa8\u0aa5\u0ac0. \u0aaa\u0a9b\u0ac0 \u0aab\u0ab0\u0ac0\u0aa5\u0ac0 \u0aaa\u0acd\u0ab0\u0aaf\u0abe\u0ab8 \u0a95\u0ab0\u0acb.",
6:"\u0ab5\u0aa7\u0ac1 \u0a9c\u0abe\u0aa3\u0acb",7:function(a){return a+" \u0aa6\u0acd\u0ab5\u0abe\u0ab0\u0abe \u0ab8\u0a82\u0a9a\u0abe\u0ab2\u0abf\u0aa4"},8:"\u0a85\u0aa8\u0ac1\u0ab5\u0abe\u0aa6",9:"\u0aad\u0abe\u0ab7\u0abe\u0a82\u0aa4\u0ab0\u0aa8\u0ac0 \u0aaa\u0acd\u0ab0\u0a95\u0acd\u0ab0\u0abf\u0aaf\u0abe \u0a9a\u0abe\u0ab2\u0ac1 \u0a9b\u0ac7 ",10:function(a){return"\u0a86 \u0aaa\u0ac3\u0ab7\u0acd\u0aa0\u0aa8\u0ac7 Google \u0a85\u0aa8\u0ac1\u0ab5\u0abe\u0aa6 \u0aa8\u0acb \u0a89\u0aaa\u0aaf\u0acb\u0a97 \u0a95\u0ab0\u0ac0\u0aa8\u0ac7 "+
(a+" \u0aae\u0abe\u0a82 \u0a85\u0aa8\u0ac1\u0ab5\u0abe\u0aa6\u0abf\u0aa4 \u0a95\u0ab0\u0ac0\u0a8f?")},11:function(a){return"\u0a86 \u0aaa\u0ac3\u0ab7\u0acd\u0aa0\u0aa8\u0ac7 \u0a86\u0aae\u0abe\u0a82 \u0a9c\u0ac1\u0a93: "+a},12:"\u0aae\u0ac2\u0ab3 \u0aac\u0aa4\u0abe\u0ab5\u0acb",13:"\u0a86 \u0ab8\u0acd\u0aa5\u0abe\u0aa8\u0abf\u0a95 \u0aab\u0abe\u0a87\u0ab2\u0aa8\u0ac0 \u0ab8\u0abe\u0aae\u0a97\u0acd\u0ab0\u0ac0 \u0a8f\u0a95 \u0ab8\u0ac1\u0ab0\u0a95\u0acd\u0ab7\u0abf\u0aa4 \u0a95\u0aa8\u0ac7\u0a95\u0acd\u0ab6\u0aa8\u0aa8\u0acb \u0a89\u0aaa\u0aaf\u0acb\u0a97 \u0a95\u0ab0\u0ac0\u0aa8\u0ac7 \u0a85\u0aa8\u0ac1\u0ab5\u0abe\u0aa6 \u0aae\u0abe\u0a9f\u0ac7 Google\u0aa8\u0ac7 \u0aae\u0acb\u0a95\u0ab2\u0ab5\u0abe\u0aae\u0abe\u0a82 \u0a86\u0ab5\u0ab6\u0ac7.",
14:"\u0a86 \u0ab8\u0ac1\u0ab0\u0a95\u0acd\u0ab7\u0abf\u0aa4 \u0aaa\u0ac3\u0ab7\u0acd\u0aa0\u0aa8\u0ac0 \u0ab8\u0abe\u0aae\u0a97\u0acd\u0ab0\u0ac0 \u0a8f\u0a95 \u0ab8\u0ac1\u0ab0\u0a95\u0acd\u0ab7\u0abf\u0aa4 \u0a95\u0aa8\u0ac7\u0a95\u0acd\u0ab6\u0aa8\u0aa8\u0acb \u0a89\u0aaa\u0aaf\u0acb\u0a97 \u0a95\u0ab0\u0ac0\u0aa8\u0ac7 \u0a85\u0aa8\u0ac1\u0ab5\u0abe\u0aa6 \u0aae\u0abe\u0a9f\u0ac7 Google\u0aa8\u0ac7 \u0aae\u0acb\u0a95\u0ab2\u0ab5\u0abe\u0aae\u0abe\u0a82 \u0a86\u0ab5\u0ab6\u0ac7.",15:"prenatal",
16:"\u0aad\u0abe\u0ab7\u0abe \u0aaa\u0ab8\u0a82\u0aa6 \u0a95\u0ab0\u0acb",17:function(a){return a+" \u0a85\u0aa8\u0ac1\u0ab5\u0abe\u0aa6 \u0aac\u0a82\u0aa7 \u0a95\u0ab0\u0acb"},18:function(a){return"\u0a86 \u0aae\u0abe\u0a9f\u0ac7 \u0aac\u0a82\u0aa7 \u0a95\u0ab0\u0acb: "+a},19:"\u0ab9\u0a82\u0aae\u0ac7\u0ab6\u0abe \u0a9b\u0ac1\u0aaa\u0abe\u0ab5\u0acb",20:"\u0aae\u0ac2\u0ab3 \u0a9f\u0ac7\u0a95\u0acd\u0ab8\u0acd\u0a9f:",21:"\u0a8f\u0a95 \u0ab8\u0abe\u0ab0\u0abe \u0aad\u0abe\u0ab7\u0abe\u0a82\u0aa4\u0ab0\u0aa8\u0ac1\u0a82 \u0aaf\u0acb\u0a97\u0aa6\u0abe\u0aa8 \u0a95\u0ab0\u0acb:",
22:"\u0aaf\u0acb\u0a97\u0aa6\u0abe\u0aa8 \u0a86\u0aaa\u0acb",23:"\u0aa4\u0aae\u0abe\u0aae\u0aa8\u0ac7 \u0a85\u0aa8\u0ac1\u0ab5\u0abe\u0aa6\u0abf\u0aa4 \u0a95\u0ab0\u0acb",24:"\u0aac\u0aa7\u0ac1 \u0aaa\u0ac1\u0aa8\u0ab0\u0acd\u0aaa\u0acd\u0ab0\u0abe\u0aaa\u0acd\u0aa4 \u0a95\u0ab0\u0acb",25:"\u0aac\u0aa7\u0ac1\u0a82 \u0ab0\u0aa6 \u0a95\u0ab0\u0acb",26:"\u0ab5\u0abf\u0aad\u0abe\u0a97\u0acb\u0aa8\u0ac7 \u0aae\u0abe\u0ab0\u0ac0 \u0aad\u0abe\u0ab7\u0abe\u0aae\u0abe\u0a82 \u0a85\u0aa8\u0ac1\u0ab5\u0abe\u0aa6\u0abf\u0aa4 \u0a95\u0ab0\u0acb ",
27:function(a){return"\u0aa6\u0ab0\u0ac7\u0a95 \u0ab5\u0ab8\u0acd\u0aa4\u0ac1\u0aa8\u0ac7 "+(a+" \u0aae\u0abe\u0a82 \u0a85\u0aa8\u0ac1\u0ab5\u0abe\u0aa6\u0abf\u0aa4 \u0a95\u0ab0\u0acb")},28:"\u0aae\u0ac2\u0ab3 \u0aad\u0abe\u0ab7\u0abe\u0a93 \u0aac\u0aa4\u0abe\u0ab5\u0acb",29:"\u0ab5\u0abf\u0a95\u0ab2\u0acd\u0aaa\u0acb",30:"\u0a86 \u0ab8\u0abe\u0a87\u0a9f \u0aae\u0abe\u0a9f\u0ac7 \u0a85\u0aa8\u0ac1\u0ab5\u0abe\u0aa6 \u0aac\u0a82\u0aa7 \u0a95\u0ab0\u0acb",31:null,32:"\u0ab5\u0ac8\u0a95\u0ab2\u0acd\u0aaa\u0abf\u0a95 \u0a85\u0aa8\u0ac1\u0ab5\u0abe\u0aa6\u0acb \u0aac\u0aa4\u0abe\u0ab5\u0acb.",
33:"\u0ab5\u0ac8\u0a95\u0ab2\u0acd\u0aaa\u0abf\u0a95 \u0a85\u0aa8\u0ac1\u0ab5\u0abe\u0aa6\u0acb \u0aae\u0ac7\u0ab3\u0ab5\u0ab5\u0abe \u0a89\u0aaa\u0ab0\u0aa8\u0abe \u0ab6\u0aac\u0acd\u0aa6\u0acb \u0aaa\u0ab0 \u0a95\u0acd\u0ab2\u0abf\u0a95 \u0a95\u0ab0\u0acb.",34:"\u0a89\u0aaa\u0aaf\u0acb\u0a97 \u0a95\u0ab0\u0acb",35:"\u0aaa\u0ac2\u0aa8\u0a83\u0a95\u0acd\u0ab0\u0aae\u0aac\u0aa6\u0acd\u0aa7 \u0a95\u0ab0\u0ab5\u0abe shift \u0a95\u0ac0 \u0ab8\u0abe\u0aa5\u0ac7 \u0aa1\u0acd\u0ab0\u0ac7\u0a97 \u0a95\u0ab0\u0acb",
36:"\u0ab5\u0ac8\u0a95\u0ab2\u0acd\u0aaa\u0abf\u0a95 \u0a85\u0aa8\u0ac1\u0ab5\u0abe\u0aa6\u0acb \u0aae\u0abe\u0a9f\u0ac7 \u0a95\u0acd\u0ab2\u0abf\u0a95 \u0a95\u0ab0\u0acb",37:"\u0aaa\u0ac1\u0aa8\u0a83 \u0a95\u0acd\u0ab0\u0aae\u0abe\u0a82\u0a95\u0ac0\u0aa4 \u0a95\u0ab0\u0ab5\u0abe shift key\u0aa8\u0ac7 \u0aaa\u0a95\u0aa1\u0acb, \u0a95\u0acd\u0ab2\u0abf\u0a95 \u0a95\u0ab0\u0acb \u0a85\u0aa8\u0ac7 \u0a89\u0aaa\u0ab0 \u0ab6\u0aac\u0acd\u0aa6\u0acb\u0aa8\u0ac7 \u0aa1\u0acd\u0ab0\u0ac7\u0a97 \u0a95\u0ab0\u0acb.",
38:"Google \u0a85\u0aa8\u0ac1\u0ab5\u0abe\u0aa6 \u0aaa\u0ab0 \u0aa4\u0aae\u0abe\u0ab0\u0abe \u0a85\u0aa8\u0ac1\u0ab5\u0abe\u0aa6 \u0ab8\u0ac2\u0a9a\u0aa8\u0aa8\u0ac7 \u0aab\u0abe\u0ab3\u0ab5\u0ab5\u0abe \u0aac\u0aa6\u0ab2 \u0a86\u0aaa\u0aa8\u0acb \u0a86\u0aad\u0abe\u0ab0.",39:"\u0a86 \u0ab8\u0abe\u0a87\u0a9f \u0aae\u0abe\u0a9f\u0ac7 \u0a85\u0aa8\u0ac1\u0ab5\u0abe\u0aa6 \u0aae\u0ac7\u0aa8\u0ac7\u0a9c \u0a95\u0ab0\u0acb",40:"\u0ab5\u0ac8\u0a95\u0ab2\u0acd\u0aaa\u0abf\u0a95 \u0a85\u0aa8\u0ac1\u0ab5\u0abe\u0aa6\u0acb \u0aae\u0abe\u0a9f\u0ac7 \u0ab6\u0aac\u0acd\u0aa6 \u0aaa\u0ab0 \u0a95\u0acd\u0ab2\u0abf\u0a95 \u0a95\u0ab0\u0acb, \u0a85\u0aa5\u0ab5\u0abe \u0ab8\u0ac0\u0aa7\u0ac1\u0a82 \u0aab\u0ac7\u0ab0\u0aab\u0abe\u0ab0 \u0a95\u0ab0\u0ab5\u0abe \u0aa1\u0aac\u0ab2 \u0a95\u0acd\u0ab2\u0abf\u0a95 \u0a95\u0ab0\u0acb",
41:"\u0aae\u0ac1\u0ab3 \u0a9f\u0ac7\u0a95\u0acd\u0ab8\u0acd\u0a9f",42:"\u0a85\u0aa8\u0ac1\u0ab5\u0abe\u0aa6",43:"\u0a85\u0aa8\u0ac1\u0ab5\u0abe\u0aa6 \u0a95\u0ab0\u0acb",44:"\u0aa4\u0aae\u0abe\u0ab0\u0abe \u0ab8\u0ac1\u0aa7\u0abe\u0ab0\u0abe \u0ab8\u0aac\u0aae\u0abf\u0a9f \u0a95\u0ab0\u0ab5\u0abe\u0aae\u0abe\u0a82 \u0a86\u0ab5\u0acd\u0aaf\u0abe\u0a82 \u0a9b\u0ac7.",45:"\u0aad\u0ac2\u0ab2: \u0ab5\u0ac7\u0aac\u0aaa\u0ac3\u0ab7\u0acd\u0aa0\u0aa8\u0ac0 \u0aad\u0abe\u0ab7\u0abe\u0aa8\u0ac7 \u0ab8\u0aae\u0ab0\u0acd\u0aa5\u0aa8 \u0aa8\u0aa5\u0ac0.",
46:"\u0aad\u0abe\u0ab7\u0abe \u0a85\u0aa8\u0ac1\u0ab5\u0abe\u0aa6 \u0ab5\u0abf\u0a9c\u0ac7\u0a9f"};var g=window.google&&google.translate&&google.translate._const;
if(g){var h;a:{for(var k=[],l=[""],m=0;m<l.length;++m){var n=l[m].split(","),p=n[0];if(p){var q=Number(n[1]);if(!(!q||.1<q||0>q)){var r=Number(n[2]),t=new Date,u=1E4*t.getFullYear()+100*(t.getMonth()+1)+t.getDate();!r||r<u||k.push({version:p,ratio:q,a:r})}}}var w=0,x=window.location.href.match(/google\.translate\.element\.random=([\d\.]+)/),y=Number(x&&x[1])||Math.random();for(m=0;m<k.length;++m){var z=k[m];w+=z.ratio;if(1<=w)break;if(y<w){h=z.version;break a}}h="TE_20200210_00"}var A="/element/%s/e/js/element/element_main.js".replace("%s",
h);if("0"==h){var B=" element %s e js element element_main.js".split(" ");B[B.length-1]="main_gu.js";A=B.join("/").replace("%s",h)}if(g._cjlc)g._cjlc(g._pas+g._pah+A);else{var C=g._pas+g._pah+A,D=document.createElement("script");D.type="text/javascript";D.charset="UTF-8";D.src=resourcesUrl+"/js/element_main.js";var E=document.getElementsByTagName("head")[0];E||(E=document.body.parentNode.appendChild(document.createElement("head")));E.appendChild(D)}e("google.translate.m",f);e("google.translate.v",h)};}).call(window)