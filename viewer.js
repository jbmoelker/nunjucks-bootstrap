/* Riot v2.5.0, @license MIT */
!function(e,t){"use strict";function n(e,t,n){var r={};return r[e.key]=t,e.pos&&(r[e.pos]=n),r}function r(e,t){for(var n,r=t.length,o=e.length;r>o;)n=t[--r],t.splice(r,1),n.unmount()}function o(e,t){Object.keys(e.tags).forEach(function(n){var r=e.tags[n];R(r)?g(r,function(e){T(e,n,t)}):T(r,n,t)})}function i(e,t,n){var r,o=e._root;for(e._virts=[];o;)r=o.nextSibling,n?t.insertBefore(o,n._root):t.appendChild(o),e._virts.push(o),o=r}function a(e,t,n,r){for(var o,i=e._root,a=0;a<r;a++)o=i.nextSibling,t.insertBefore(i,n._root),i=o}function u(e,t,u){x(e,"each");var f,s=typeof _(e,"no-reorder")!==te||x(e,"no-reorder"),l=S(e),p=W[l]||{tmpl:m(e)},d=ie.test(l),g=e.parentNode,h=document.createTextNode(""),v=C(e),y="option"===l.toLowerCase(),b=[],w=[],N="VIRTUAL"==e.tagName;u=le.loopKeys(u),g.insertBefore(h,e),t.one("before-mount",function(){e.parentNode.removeChild(e),g.stub&&(g=t.root)}).on("update",function(){var m=le(u.val,t),x=document.createDocumentFragment();R(m)||(f=m||!1,m=f?Object.keys(m).map(function(e){return n(u,e,m[e])}):[]);for(var _=0,C=m.length;_<C;_++){var L=m[_],T=s&&typeof L==ne&&!f,E=w.indexOf(L),M=~E&&T?E:_,S=b[M];L=!f&&u.key?n(u,L,_):L,!T&&!S||T&&!~E||!S?(S=new c(p,{parent:t,isLoop:!0,hasImpl:!!W[l],root:d?g:e.cloneNode(),item:L},e.innerHTML),S.mount(),N&&(S._root=S.root.firstChild),_!=b.length&&b[_]?(N?i(S,g,b[_]):g.insertBefore(S.root,b[_].root),w.splice(_,0,L)):N?i(S,x):x.appendChild(S.root),b.splice(_,0,S),M=_):S.update(L,!0),M!==_&&T&&b[_]&&(N?a(S,g,b[_],e.childNodes.length):g.insertBefore(S.root,b[_].root),u.pos&&(S[u.pos]=_),b.splice(_,0,b.splice(M,1)[0]),w.splice(_,0,w.splice(M,1)[0]),!v&&S.tags&&o(S,_)),S._item=L,O(S,"_parent",t)}if(r(m,b),g.insertBefore(x,h),y&&se&&!g.multiple)for(var A=0;A<g.length;A++)if(g[A].__riot1374){g.selectedIndex=A,delete g[A].__riot1374;break}v&&(t.tags[l]=b),w=m.slice()})}function f(e,t,n,r){k(e,function(e){if(1==e.nodeType){if(e.isLoop=e.isLoop||e.parentNode&&e.parentNode.isLoop||_(e,"each")?1:0,n){var o=C(e);o&&!e.isLoop&&n.push(E(o,{root:e,parent:t},e.innerHTML,t))}e.isLoop&&!r||G(e,t,[])}})}function s(e,t,n){function r(e,t,r){le.hasExpr(t)&&n.push(A({dom:e,expr:t},r))}k(e,function(e){var n,o=e.nodeType;if(3==o&&"STYLE"!=e.parentNode.tagName&&r(e,e.nodeValue),1==o)return(n=_(e,"each"))?(u(e,t,n),!1):(g(e.attributes,function(t){var n=t.name,o=n.split("__")[1];if(r(e,t.value,{attr:o||n,bool:o}),o)return x(e,n),!1}),!C(e)&&void 0)})}function c(e,n,r){function o(){var e=_&&y?p:v||p;g(E.attributes,function(t){var n=t.value;m[w(t.name)]=le.hasExpr(n)?le(n,e):n}),g(Object.keys(k),function(t){m[w(t)]=le(k[t],e)})}function i(e){for(var t in C)typeof p[t]!==re&&$(p,t)&&(p[t]=e[t])}function a(){p.parent&&y&&g(Object.keys(p.parent),function(e){var t=!ae.test(e)&&j(F,e);(typeof p[e]===re||t)&&(t||F.push(e),p[e]=p.parent[e])})}function u(e){p.update(e,!0)}function c(e){if(g(T,function(t){t[e?"mount":"unmount"]()}),v){var t=e?"on":"off";y?v[t]("unmount",p.unmount):v[t]("update",u)[t]("unmount",p.unmount)}}var l,p=z.observable(this),m=K(n.opts)||{},v=n.parent,y=n.isLoop,_=n.hasImpl,C=I(n.item),L=[],T=[],E=n.root,S=E.tagName.toLowerCase(),k={},F=[];e.name&&E._tag&&E._tag.unmount(!0),this.isMounted=!1,E.isLoop=y,E._tag=this,O(this,"_riot_id",++Z),A(this,{parent:v,root:E,opts:m},C),O(this,"tags",{}),g(E.attributes,function(e){var t=e.value;le.hasExpr(t)&&(k[e.name]=t)}),l=pe(e.tmpl,r),O(this,"update",function(e,t){return e=I(e),a(),e&&b(C)&&(i(e),C=e),A(p,e),o(),p.trigger("update",e),d(L,p),t&&p.parent?p.parent.one("updated",function(){p.trigger("updated")}):ge(function(){p.trigger("updated")}),this}),O(this,"mixin",function(){return g(arguments,function(e){var t,n,r=[];e=typeof e===te?z.mixin(e):e,t=h(e)?new e:e;do r=r.concat(Object.getOwnPropertyNames(n||t));while(n=Object.getPrototypeOf(n||t));g(r,function(e){"init"==e||p[e]||(p[e]=h(t[e])?t[e].bind(p):t[e])}),t.init&&t.init.bind(p)()}),this}),O(this,"mount",function(){o();var t=z.mixin(X);if(t)for(var n in t)t.hasOwnProperty(n)&&p.mixin(t[n]);if(e.fn&&e.fn.call(p,m),s(l,p,L),c(!0),e.attrs&&H(e.attrs,function(e,t){N(E,e,t)}),(e.attrs||_)&&s(p.root,p,L),p.parent&&!y||p.update(C),p.trigger("before-mount"),y&&!_)E=l.firstChild;else{for(;l.firstChild;)E.appendChild(l.firstChild);E.stub&&(E=v.root)}O(p,"root",E),y&&f(p.root,p.parent,null,!0),!p.parent||p.parent.isMounted?(p.isMounted=!0,p.trigger("mount")):p.parent.one("mount",function(){P(p.root)||(p.parent.isMounted=p.isMounted=!0,p.trigger("mount"))})}),O(this,"unmount",function(e){var n,r=E,o=r.parentNode,i=Q.indexOf(p);if(p.trigger("before-unmount"),~i&&Q.splice(i,1),o){if(v)n=M(v),R(n.tags[S])?g(n.tags[S],function(e,t){e._riot_id==p._riot_id&&n.tags[S].splice(t,1)}):n.tags[S]=t;else for(;r.firstChild;)r.removeChild(r.firstChild);e?(x(o,ee),x(o,J)):o.removeChild(r)}this._virts&&g(this._virts,function(e){e.parentNode&&e.parentNode.removeChild(e)}),p.trigger("unmount"),c(),p.off("*"),p.isMounted=!1,delete E._tag}),f(l,this,T)}function l(t,n,r,o){r[t]=function(t){var i,a=o._parent,u=o._item;if(!u)for(;a&&!u;)u=a._item,a=a._parent;t=t||e.event,$(t,"currentTarget")&&(t.currentTarget=r),$(t,"target")&&(t.target=t.srcElement),$(t,"which")&&(t.which=t.charCode||t.keyCode),t.item=u,n.call(o,t)===!0||/radio|check/.test(r.type)||(t.preventDefault&&t.preventDefault(),t.returnValue=!1),t.preventUpdate||(i=u?M(a):o,i.update())}}function p(e,t,n){e&&(e.insertBefore(n,t),e.removeChild(t))}function d(e,t){g(e,function(e,n){var r=e.dom,o=e.attr,i=le(e.expr,t),a=e.dom.parentNode;if(e.bool?i=!!i:null==i&&(i=""),e.value!==i){if(e.value=i,!o)return i+="",void(a&&("TEXTAREA"===a.tagName?(a.value=i,fe||(r.nodeValue=i)):r.nodeValue=i));if("value"===o)return void(r.value=i);if(x(r,o),h(i))l(o,i,r,t);else if("if"==o){var u=e.stub,f=function(){p(u.parentNode,u,r)},s=function(){p(r.parentNode,r,u)};i?u&&(f(),r.inStub=!1,P(r)||k(r,function(e){e._tag&&!e._tag.isMounted&&(e._tag.isMounted=!!e._tag.trigger("mount"))})):(u=e.stub=u||document.createTextNode(""),r.parentNode?s():(t.parent||t).one("updated",s),r.inStub=!0)}else"show"===o?r.style.display=i?"":"none":"hide"===o?r.style.display=i?"none":"":e.bool?(r[o]=i,i&&N(r,o,o),se&&"selected"===o&&"OPTION"===r.tagName&&(r.__riot1374=i)):(0===i||i&&typeof i!==ne)&&(U(o,Y)&&o!=J&&(o=o.slice(Y.length)),N(r,o,i))}})}function g(e,t){for(var n,r=e?e.length:0,o=0;o<r;o++)n=e[o],null!=n&&t(n,o)===!1&&o--;return e}function h(e){return typeof e===oe||!1}function m(e){if(e.outerHTML)return e.outerHTML;var t=F("div");return t.appendChild(e.cloneNode(!0)),t.innerHTML}function v(e,t){if(typeof e.innerHTML!=re)e.innerHTML=t;else{var n=(new DOMParser).parseFromString(t,"application/xml");e.appendChild(e.ownerDocument.importNode(n.documentElement,!0))}}function y(e){return~ue.indexOf(e)}function b(e){return e&&typeof e===ne}function x(e,t){e.removeAttribute(t)}function w(e){return e.replace(/-(\w)/g,function(e,t){return t.toUpperCase()})}function _(e,t){return e.getAttribute(t)}function N(e,t,n){e.setAttribute(t,n)}function C(e){return e.tagName&&W[_(e,ee)||_(e,J)||e.tagName.toLowerCase()]}function L(e,t,n){var r=n.tags[t];r?(R(r)||r!==e&&(n.tags[t]=[r]),j(n.tags[t],e)||n.tags[t].push(e)):n.tags[t]=e}function T(e,t,n){var r,o=e.parent;o&&(r=o.tags[t],R(r)?r.splice(n,0,r.splice(r.indexOf(e),1)[0]):L(e,t,o))}function E(e,t,n,r){var o=new c(e,t,n),i=S(t.root),a=M(r);return o.parent=a,o._parent=r,L(o,i,a),a!==r&&L(o,i,r),t.root.innerHTML="",o}function M(e){for(var t=e;!C(t.root)&&t.parent;)t=t.parent;return t}function O(e,t,n,r){return Object.defineProperty(e,t,A({value:n,enumerable:!1,writable:!1,configurable:!0},r)),e}function S(e){var t=C(e),n=_(e,"name"),r=n&&!le.hasExpr(n)?n:t?t.name:e.tagName.toLowerCase();return r}function A(e){for(var t,n=arguments,r=1;r<n.length;++r)if(t=n[r])for(var o in t)$(e,o)&&(e[o]=t[o]);return e}function j(e,t){return~e.indexOf(t)}function R(e){return Array.isArray(e)||e instanceof Array}function $(e,t){var n=Object.getOwnPropertyDescriptor(e,t);return typeof e[t]===re||n&&n.writable}function I(e){if(!(e instanceof c||e&&typeof e.trigger==oe))return e;var t={};for(var n in e)ae.test(n)||(t[n]=e[n]);return t}function k(e,t){if(e){if(t(e)===!1)return;for(e=e.firstChild;e;)k(e,t),e=e.nextSibling}}function H(e,t){for(var n,r=/([-\w]+) ?= ?(?:"([^"]*)|'([^']*)|({[^}]*}))/g;n=r.exec(e);)t(n[1].toLowerCase(),n[2]||n[3]||n[4])}function P(e){for(;e;){if(e.inStub)return!0;e=e.parentNode}return!1}function F(e,t){return t?document.createElementNS("http://www.w3.org/2000/svg","svg"):document.createElement(e)}function B(e,t){return(t||document).querySelectorAll(e)}function D(e,t){return(t||document).querySelector(e)}function K(e){function t(){}return t.prototype=e,new t}function q(e){return _(e,"id")||_(e,"name")}function G(e,t,n){var r,o=q(e),i=function(i){j(n,o)||(r=R(i),i?(!r||r&&!j(i,e))&&(r?i.push(e):t[o]=[i,e]):t[o]=e)};o&&(le.hasExpr(o)?t.one("mount",function(){o=q(e),i(t[o])}):i(t[o]))}function U(e,t){return e.slice(0,t.length)===t}function V(e,t,n){var r=W[t],o=e._innerHTML=e._innerHTML||e.innerHTML;return e.innerHTML="",r&&e&&(r=new c(r,{root:e,opts:n},o)),r&&r.mount&&(r.mount(),j(Q,r)||Q.push(r)),r}var z={version:"v2.5.0",settings:{}},Z=0,Q=[],W={},X="__global_mixin",Y="riot-",J=Y+"tag",ee="data-is",te="string",ne="object",re="undefined",oe="function",ie=/^(?:t(?:body|head|foot|[rhd])|caption|col(?:group)?|opt(?:ion|group))$/,ae=/^(?:_(?:item|id|parent)|update|root|(?:un)?mount|mixin|is(?:Mounted|Loop)|tags|parent|opts|trigger|o(?:n|ff|ne))$/,ue=["altGlyph","animate","animateColor","circle","clipPath","defs","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feFlood","feGaussianBlur","feImage","feMerge","feMorphology","feOffset","feSpecularLighting","feTile","feTurbulence","filter","font","foreignObject","g","glyph","glyphRef","image","line","linearGradient","marker","mask","missing-glyph","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","switch","symbol","text","textPath","tref","tspan","use"],fe=0|(e&&e.document||{}).documentMode,se=e&&!!e.InstallTrigger;z.observable=function(e){function t(e,t){for(var n,r,o=e.split(" "),i=o.length,a=0;a<i;a++)n=o[a],r=n.indexOf("."),n&&t(~r?n.substring(0,r):n,a,~r?n.slice(r+1):null)}e=e||{};var n={},r=Array.prototype.slice;return Object.defineProperties(e,{on:{value:function(r,o){return"function"!=typeof o?e:(t(r,function(e,t,r){(n[e]=n[e]||[]).push(o),o.typed=t>0,o.ns=r}),e)},enumerable:!1,writable:!1,configurable:!1},off:{value:function(r,o){return"*"!=r||o?t(r,function(e,t,r){if(o||r)for(var i,a=n[e],u=0;i=a&&a[u];++u)(i==o||r&&i.ns==r)&&a.splice(u--,1);else delete n[e]}):n={},e},enumerable:!1,writable:!1,configurable:!1},one:{value:function(t,n){function r(){e.off(t,r),n.apply(e,arguments)}return e.on(t,r)},enumerable:!1,writable:!1,configurable:!1},trigger:{value:function(o){for(var i,a=arguments.length-1,u=new Array(a),f=0;f<a;f++)u[f]=arguments[f+1];return t(o,function(t,o,a){i=r.call(n[t]||[],0);for(var f,s=0;f=i[s];++s)f.busy||(f.busy=1,a&&f.ns!=a||f.apply(e,f.typed?[t].concat(u):u),i[s]!==f&&s--,f.busy=0);n["*"]&&"*"!=t&&e.trigger.apply(e,["*",t].concat(u))}),e},enumerable:!1,writable:!1,configurable:!1}}),e},function(t){function n(e){return e.split(/[\/?#]/)}function r(e,t){var n=new RegExp("^"+t[C](/\*/g,"([^/?#]+?)")[C](/\.\./,".*")+"$"),r=e.match(n);if(r)return r.slice(1)}function o(e,t){var n;return function(){clearTimeout(n),n=setTimeout(e,t)}}function i(e){g=o(l,1),O[_](L,g),O[_](T,g),S[_]($,p),e&&l(!0)}function a(){this.$=[],t.observable(this),k.on("stop",this.s.bind(this)),k.on("emit",this.e.bind(this))}function u(e){return e[C](/^\/|\/$/,"")}function f(e){return"string"==typeof e}function s(e){return(e||j.href)[C](b,"")}function c(e){return"#"==h[0]?(e||j.href||"").split(h)[1]||"":(j?s(e):e||"")[C](h,"")}function l(e){var t=0==F;if(!(M<=F)&&(F++,P.push(function(){var t=c();(e||t!=m)&&(k[E]("emit",t),m=t)}),t)){for(;P.length;)P[0](),P.shift();F=0}}function p(e){if(!(1!=e.which||e.metaKey||e.ctrlKey||e.shiftKey||e.defaultPrevented)){for(var t=e.target;t&&"A"!=t.nodeName;)t=t.parentNode;!t||"A"!=t.nodeName||t[N]("download")||!t[N]("href")||t.target&&"_self"!=t.target||t.href.indexOf(j.href.match(b)[0])==-1||(t.href==j.href||t.href.split("#")[0]!=j.href.split("#")[0]&&("#"==h||0===s(t.href).indexOf(h))&&d(c(t.href),t.title||S.title))&&e.preventDefault()}}function d(e,t,n){return A?(e=h+u(e),t=t||S.title,n?A.replaceState(null,t,e):A.pushState(null,t,e),S.title=t,H=!1,l(),H):k[E]("emit",c(e))}var g,h,m,v,y,b=/^.+?\/\/+[^\/]+/,x="EventListener",w="remove"+x,_="add"+x,N="hasAttribute",C="replace",L="popstate",T="hashchange",E="trigger",M=3,O="undefined"!=typeof e&&e,S="undefined"!=typeof document&&document,A=O&&history,j=O&&(A.location||O.location),R=a.prototype,$=S&&S.ontouchstart?"touchstart":"click",I=!1,k=t.observable(),H=!1,P=[],F=0;R.m=function(e,t,n){!f(e)||t&&!f(t)?t?this.r(e,t):this.r("@",e):d(e,t,n||!1)},R.s=function(){this.off("*"),this.$=[]},R.e=function(e){this.$.concat("@").some(function(t){var n=("@"==t?v:y)(u(e),u(t));if("undefined"!=typeof n)return this[E].apply(null,[t].concat(n)),H=!0},this)},R.r=function(e,t){"@"!=e&&(e="/"+u(e),this.$.push(e)),this.on(e,t)};var B=new a,D=B.m.bind(B);D.create=function(){var e=new a,t=e.m.bind(e);return t.stop=e.s.bind(e),t},D.base=function(e){h=e||"#",m=c()},D.exec=function(){l(!0)},D.parser=function(e,t){e||t||(v=n,y=r),e&&(v=e),t&&(y=t)},D.query=function(){var e={},t=j.href||m;return t[C](/[?&](.+?)=([^&]*)/g,function(t,n,r){e[n]=r}),e},D.stop=function(){I&&(O&&(O[w](L,g),O[w](T,g),S[w]($,p)),k[E]("stop"),I=!1)},D.start=function(e){I||(O&&("complete"==document.readyState?i(e):O[_]("load",function(){setTimeout(function(){i(e)},1)})),I=!0)},D.base(),D.parser(),t.route=D}(z);var ce=function(e){function t(e){return e}function n(e,t){return t||(t=v),new RegExp(e.source.replace(/{/g,t[2]).replace(/}/g,t[3]),e.global?s:"")}function r(e){if(e===g)return h;var t=e.split(" ");if(2!==t.length||/[\x00-\x1F<>a-zA-Z0-9'",;\\]/.test(e))throw new Error('Unsupported brackets "'+e+'"');return t=t.concat(e.replace(/(?=[[\]()*+?.^$|])/g,"\\").split(" ")),t[4]=n(t[1].length>1?/{[\S\s]*?}/:h[4],t),t[5]=n(e.length>3?/\\({|})/g:h[5],t),t[6]=n(h[6],t),t[7]=RegExp("\\\\("+t[3]+")|([[({])|("+t[3]+")|"+p,s),t[8]=e,t}function o(e){return e instanceof RegExp?u(e):v[e]}function i(e){(e||(e=g))!==v[8]&&(v=r(e),u=e===g?t:n,v[9]=u(h[9])),m=e}function a(e){var t;e=e||{},t=e.brackets,Object.defineProperty(e,"brackets",{set:i,get:function(){return m},enumerable:!0}),f=e,i(t)}var u,f,s="g",c=/\/\*[^*]*\*+(?:[^*\/][^*]*\*+)*\//g,l=/"[^"\\]*(?:\\[\S\s][^"\\]*)*"|'[^'\\]*(?:\\[\S\s][^'\\]*)*'/g,p=l.source+"|"+/(?:\breturn\s+|(?:[$\w\)\]]|\+\+|--)\s*(\/)(?![*\/]))/.source+"|"+/\/(?=[^*\/])[^[\/\\]*(?:(?:\[(?:\\.|[^\]\\]*)*\]|\\.)[^[\/\\]*)*?(\/)[gim]*/.source,d={"(":RegExp("([()])|"+p,s),"[":RegExp("([[\\]])|"+p,s),"{":RegExp("([{}])|"+p,s)},g="{ }",h=["{","}","{","}",/{[^}]*}/,/\\([{}])/g,/\\({)|{/g,RegExp("\\\\(})|([[({])|(})|"+p,s),g,/^\s*{\^?\s*([$\w]+)(?:\s*,\s*(\S+))?\s+in\s+(\S.*)\s*}/,/(^|[^\\]){=[\S\s]*?}/],m=e,v=[];return o.split=function(e,t,n){function r(e){t||a?s.push(e&&e.replace(n[5],"$1")):s.push(e)}function o(e,t,n){var r,o=d[t];for(o.lastIndex=n,n=1;(r=o.exec(e))&&(!r[1]||(r[1]===t?++n:--n)););return n?e.length:o.lastIndex}n||(n=v);var i,a,u,f,s=[],c=n[6];for(a=u=c.lastIndex=0;i=c.exec(e);){if(f=i.index,a){if(i[2]){c.lastIndex=o(e,i[2],c.lastIndex);continue}if(!i[3])continue}i[1]||(r(e.slice(u,f)),u=c.lastIndex,c=n[6+(a^=1)],c.lastIndex=u)}return e&&u<e.length&&r(e.slice(u)),s},o.hasExpr=function(e){return v[4].test(e)},o.loopKeys=function(e){var t=e.match(v[9]);return t?{key:t[1],pos:t[2],val:v[0]+t[3].trim()+v[1]}:{val:e.trim()}},o.array=function(e){return e?r(e):v},Object.defineProperty(o,"settings",{set:a,get:function(){return f}}),o.settings="undefined"!=typeof z&&z.settings||{},o.set=i,o.R_STRINGS=l,o.R_MLCOMMS=c,o.S_QBLOCKS=p,o}(),le=function(){function t(e,t){return e?(u[e]||(u[e]=r(e))).call(t,n):e}function n(e,n){t.errorHandler&&(e.riotData={tagName:n&&n.root&&n.root.tagName,_riot_id:n&&n._riot_id},t.errorHandler(e))}function r(e){var t=o(e);return"try{return "!==t.slice(0,11)&&(t="return "+t),new Function("E",t+";")}function o(e){var t,n=[],r=ce.split(e.replace(l,'"'),1);if(r.length>2||r[0]){var o,a,u=[];for(o=a=0;o<r.length;++o)t=r[o],t&&(t=1&o?i(t,1,n):'"'+t.replace(/\\/g,"\\\\").replace(/\r\n?|\n/g,"\\n").replace(/"/g,'\\"')+'"')&&(u[a++]=t);t=a<2?u[0]:"["+u.join(",")+'].join("")'}else t=i(r[1],0,n);return n[0]&&(t=t.replace(p,function(e,t){return n[t].replace(/\r/g,"\\r").replace(/\n/g,"\\n")})),t}function i(e,t,n){function r(t,n){var r,o=1,i=d[t];for(i.lastIndex=n.lastIndex;r=i.exec(e);)if(r[0]===t)++o;else if(!--o)break;n.lastIndex=o?e.length:i.lastIndex}if(e=e.replace(c,function(e,t){return e.length>2&&!t?f+(n.push(e)-1)+"~":e}).replace(/\s+/g," ").trim().replace(/\ ?([[\({},?\.:])\ ?/g,"$1")){for(var o,i=[],u=0;e&&(o=e.match(s))&&!o.index;){var l,p,g=/,|([[{(])|$/g;for(e=RegExp.rightContext,l=o[2]?n[o[2]].slice(1,-1).trim().replace(/\s+/g," "):o[1];p=(o=g.exec(e))[1];)r(p,g);p=e.slice(0,o.index),e=RegExp.rightContext,i[u++]=a(p,1,l)}e=u?u>1?"["+i.join(",")+'].join(" ").trim()':i[0]:a(e,t)}return e}function a(e,t,n){var r;return e=e.replace(h,function(e,t,n,o,i){return n&&(o=r?0:o+e.length,"this"!==n&&"global"!==n&&"window"!==n?(e=t+'("'+n+g+n,o&&(r="."===(i=i[o])||"("===i||"["===i)):o&&(r=!m.test(i.slice(o)))),e}),r&&(e="try{return "+e+"}catch(e){E(e,this)}"),n?e=(r?"function(){"+e+"}.call(this)":"("+e+")")+'?"'+n+'":""':t&&(e="function(v){"+(r?e.replace("return ","v="):"v=("+e+")")+';return v||v===0?v:""}.call(this)'),e}var u={};t.haveRaw=ce.hasRaw,t.hasExpr=ce.hasExpr,t.loopKeys=ce.loopKeys,t.errorHandler=null;var f="⁗",s=/^(?:(-?[_A-Za-z\xA0-\xFF][-\w\xA0-\xFF]*)|\u2057(\d+)~):/,c=RegExp(ce.S_QBLOCKS,"g"),l=/\u2057/g,p=/\u2057(\d+)~/g,d={"(":/[()]/g,"[":/[[\]]/g,"{":/[{}]/g},g='"in this?this:'+("object"!=typeof e?"global":"window")+").",h=/[,{][$\w]+:|(^ *|[^$\w\.])(?!(?:typeof|true|false|null|undefined|in|instanceof|is(?:Finite|NaN)|void|NaN|new|Date|RegExp|Math)(?![$\w]))([$_A-Za-z][$\w]*)/g,m=/^(?=(\.[$\w]+))\1(?:[^.[(]|$)/;return t.parse=function(e){return e},t.version=ce.version="v2.4.0",t}(),pe=function e(){function e(e,r){var o=e&&e.match(/^\s*<([-\w]+)/),i=o&&o[1].toLowerCase(),a=F("div",y(i));return e=n(e,r),f.test(i)?a=t(a,e,i):v(a,e),a.stub=!0,a}function t(e,t,n){var r="o"===n[0],o=r?"select>":"table>";if(e.innerHTML="<"+o+t.trim()+"</"+o,o=e.firstChild,r)o.selectedIndex=-1;else{var i=u[n];i&&1===o.childElementCount&&(o=D(i,o))}return o}function n(e,t){if(!r.test(e))return e;var n={};return t=t&&t.replace(i,function(e,t,r){return n[t]=n[t]||r,""}).trim(),e.replace(a,function(e,t,r){return n[t]||r||""}).replace(o,function(e,n){return t||n||""})}var r=/<yield\b/i,o=/<yield\s*(?:\/>|>([\S\s]*?)<\/yield\s*>|>)/gi,i=/<yield\s+to=['"]([^'">]*)['"]\s*>([\S\s]*?)<\/yield\s*>/gi,a=/<yield\s+from=['"]?([-\w]+)['"]?\s*(?:\/>|>([\S\s]*?)<\/yield\s*>)/gi,u={tr:"tbody",th:"tr",td:"tr",col:"colgroup"},f=fe&&fe<10?ie:/^(?:t(?:body|head|foot|[rhd])|caption|col(?:group)?)$/;return e}(),de=function(t){if(!e)return{add:function(){},inject:function(){}};var n=function(){var e=F("style");N(e,"type","text/css");var t=D("style[type=riot]");return t?(t.id&&(e.id=t.id),t.parentNode.replaceChild(e,t)):document.getElementsByTagName("head")[0].appendChild(e),e}(),r=n.styleSheet,o="";return Object.defineProperty(t,"styleNode",{value:n,writable:!0}),{add:function(e){o+=e},inject:function(){o&&(r?r.cssText+=o:n.innerHTML+=o,o="")}}}(z),ge=function(e){var t=e.requestAnimationFrame||e.mozRequestAnimationFrame||e.webkitRequestAnimationFrame;if(!t||/iP(ad|hone|od).*OS 6/.test(e.navigator.userAgent)){var n=0;t=function(e){var t=Date.now(),r=Math.max(16-(t-n),0);setTimeout(function(){e(n=t+r)},r)}}return t}(e||{});z.util={brackets:ce,tmpl:le},z.mixin=function(){var e={},t=e[X]={},n=0;return function(r,o,i){if(b(r))return void z.mixin("__unnamed_"+n++,r,!0);var a=i?t:e;if(!o){if(typeof a[r]===re)throw new Error("Unregistered mixin: "+r);return a[r]}h(o)?(A(o.prototype,a[r]||{}),a[r]=o):a[r]=A(a[r]||{},o)}}(),z.tag=function(e,t,n,r,o){return h(r)&&(o=r,/^[\w\-]+\s?=/.test(n)?(r=n,n=""):r=""),n&&(h(n)?o=n:de.add(n)),e=e.toLowerCase(),W[e]={name:e,tmpl:t,attrs:r,fn:o},e},z.tag2=function(e,t,n,r,o){return n&&de.add(n),W[e]={name:e,tmpl:t,attrs:r,fn:o},e},z.mount=function(e,t,n){function r(e){var t="";return g(e,function(e){/[^-\w]/.test(e)||(e=e.trim().toLowerCase(),t+=",["+ee+'="'+e+'"],['+J+'="'+e+'"]')}),t}function o(){var e=Object.keys(W);return e+r(e)}function i(e){if(e.tagName){var r=_(e,ee)||_(e,J);t&&r!==t&&(r=t,N(e,ee,t),N(e,J,t));var o=V(e,r||e.tagName.toLowerCase(),n);o&&f.push(o)}else e.length&&g(e,i)}var a,u,f=[];if(de.inject(),b(t)&&(n=t,t=0),typeof e===te?("*"===e?e=u=o():e+=r(e.split(/, */)),a=e?B(e):[]):a=e,"*"===t){if(t=u||o(),a.tagName)a=B(t,a);else{var s=[];g(a,function(e){s.push(B(t,e))}),a=s}t=0}return i(a),f},z.update=function(){return g(Q,function(e){e.update()})},z.vdom=Q,z.Tag=c,typeof exports===ne?module.exports=z:typeof define===oe&&typeof define.amd!==re?define(function(){return z}):e.riot=z}("undefined"!=typeof window?window:void 0);
riot.tag2('app', '<header class="app-header clearfix"> <module-selector modules="{opts.modules}" logo="{opts.logo}" default-module="{opts.defaultModule}" on-select="{setModule}"> <yield></yield> </module-selector> <button class="button {\'is-active\': infoIsOpen}" title="Toggle source" __disabled="{!activeModule.info}" aria-controls="info-panel" onclick="{toggleInfo}"> <span class="icon-info-outline"></span> <span class="a11y-sr-only">Toggle source</span> </button> <button class="button" title="Toggle annotations" disabled> <span class="icon-label"></span> <span class="a11y-sr-only">Toggle annotations</span> </button> <size-controls on-resize="{setSize}" sizes="{opts.sizes}"></size-controls> </header> <main> <info-panel if="{infoIsOpen}" id="info-panel" sections="{activeModule.info}" on-close="{closeInfo}" aria-expanded="{infoIsOpen}"></info-panel> <iframe class="app-frame" frameborder="0" sandbox="allow-same-origin allow-scripts allow-forms allow-popups" riot-src="{activeModule.url}" width="{width}" height="{height}"></iframe> </main>', '', '', function(opts) {
        var tag = this;
        tag.activeModule = undefined;
        tag.width = window.outerWidth;
        tag.height = window.outerHeight;
        tag.infoIsOpen = false;
        tag.setModule = setModule;
        tag.setSize = setSize;
        tag.closeInfo = closeInfo;
        tag.toggleInfo = toggleInfo;

        function setModule(module) {
            tag.update({ activeModule: module });
        }

        function setSize(width) {
            tag.update({ width: width });
        }

        function closeInfo() {
            tag.update({ infoIsOpen: false });
        }

        function toggleInfo() {
            tag.update({ infoIsOpen: !tag.infoIsOpen });
        }
});
riot.tag2('info-panel', '<header class="info-panel-header clearfix"> <nav class="info-panel-navigation" role="tablist"> <button each="{section in sections}" class="button {\'is-active\': section == activeSection}" role="tab" aria-controls="info-content" aria-selected="{section == activeSection}" onclick="{onSelectSection}"> {section} </button> </nav> <div class="info-panel-control"> <button class="button" title="Toggle maximize" onclick="{toggleMaximize}"> <span class="icon-align-top"></span> <span class="a11y-sr-only">Toggle maximize</span> </button> <button class="button" title="Close" onclick="{opts.onClose}"> <span class="icon-clear"></span> <span class="a11y-sr-only">Close</span> </button> </div> </header> <iframe if="{activeSection}" id="info-content" class="info-panel-section" riot-src="{sections[activeSection]}" width="100%" role="tabpanel" aria-labelledby="{activeSection}"></iframe>', '', 'class="{\'is-maximized\': isMaximized}"', function(opts) {
        var tag = this;
        tag.activeSection = undefined;
        tag.isMaximized = false;
        opts.sections = {};
        tag.onSelectSection = onSelectSection;
        tag.onClose = onClose;
        tag.toggleMaximize = toggleMaximize;
        tag.on('update', onUpdate);

        function onSelectSection(event) {
            tag.update({ activeSection: event.item.section });
        }

        function onUpdate() {
            if(tag.sections !== opts.sections) {
                tag.sections = opts.sections || {};
                tag.activeSection = Object.keys(tag.sections)[0];
            }
        }

        function toggleMaximize() {
            tag.isMaximized = !tag.isMaximized;
        }

        function onClose() {
            opts.onClose();
            tag.isMaximized = false;
        }
});
riot.tag2('module-selector', '<img class="module-selector-logo" if="{opts.logo}" riot-src="{opts.logo}" alt=""> <label class="module-selector-label" for="selector"> <span class="a11y-sr-only">Module</span> <select class="module-selector-select" id="selector" name="selector" onchange="{onModuleSelect}"> <yield></yield> <optgroup each="{groupName, modules in moduleGroups}" label="{groupName}"> <option each="{module in modules}" value="{module.url}" __selected="{module.url == activeModule.url}"> {module.name} </option> </optgroup> </select> <span class="icon-expand-more"></span> </label> <a class="button" href="{activeModule.url}" target="_blank" rel="noopener noreferrer" title="Open module in new tab"> <span class="icon-launch"></span> <span class="a11y-sr-only">Open in new tab</span> </a>', '', '', function(opts) {
        var tag = this;
        tag.activeModule = undefined;
        tag.onModuleSelect = onModuleSelect;
        tag.modulesByUrl = {};
        tag.moduleGroups = {};

        tag.on('mount', onMount);
        tag.on('update', onUpdate);

        function onMount() {
            selectFromHash();
            window.addEventListener('hashchange', selectFromHash);
        }

        function onUpdate() {
            tag.modulesByUrl = indexModulesByUrl(opts.modules || []);
            tag.moduleGroups = groupModules(opts.modules || []);
        }

        function groupModules(modules) {
            return modules.reduce(function(groups, module){
                var groupName = module.group || '';
                groups[groupName] = groups[groupName] || [];
                groups[groupName].push(module);
                return groups;
            }, {});
        }

        function indexModulesByUrl(modules) {
            return modules.reduce(function(map, module){
                map[module.url] = module;
                return map;
            }, {});
        }

        function onModuleSelect(event) {
            selectByUrl(event.target.value);
        }

        function selectByUrl(url) {
            url = url || opts.defaultModule;
            var activeModule = tag.modulesByUrl[url];

            if(!activeModule) {
                var firstGroup = Object.keys(tag.moduleGroups)[0];
                activeModule = tag.moduleGroups[firstGroup][0];
                url = activeModule.url;
            }

            tag.selector.value = url;
            tag.update({ activeModule: activeModule });
            if(opts.onSelect) { opts.onSelect(activeModule); }

            window.location.hash = url;
        }

        function selectFromHash() {
            var url = window.location.hash.substr(1);
            selectByUrl(url);
        }
});
riot.tag2('size-controls', '<button each="{size in opts.sizes}" class="button {\'is-active\': size.width == width}" onclick="{onSelectSize}">{size.name}</button> <button class="button {\'is-active\': autoWidth}" onclick="{toggleAutoWidth}">FULL</button> <fieldset class="size-controls-fieldset"> <input class="size-controls-input" id="input-width" min="240" step="10" required="true" value="{width}" oninput="{onSizeInput}" type="{\'number\'}"> <label class="size-controls-label" for="input-width">px</label> </fieldset>', '', '', function(opts) {
        var tag = this;
        var STORAGE_KEY_AUTO = 'demoViewerAuto';
        var STORAGE_KEY_WIDTH = 'demoViewerWidth';
        tag.autoWidth = getSetting(STORAGE_KEY_AUTO);
        tag.onSizeInput = onSizeInput;
        tag.onSelectSize = onSelectSize;
        tag.toggleAutoWidth = toggleAutoWidth;
        tag.width;

        restoreWidth();
        window.addEventListener('resize', onResize, false);

        function onResize() {
            if (tag.autoWidth) { setFullWidth(); }
        }

        function onSizeInput(event) {
            disableAutoWidth();
            setWidth(event.target.value);
        }

        function onSelectSize(event) {
            disableAutoWidth();
            setWidth(event.item.size.width);
        }

        function setWidth(width) {
            tag.update({ width: width });
            if(opts.onResize) {
                opts.onResize(width);
            }
            saveSetting(STORAGE_KEY_WIDTH, width);
        }

        function setFullWidth() {
            setWidth(document.documentElement.clientWidth);
        }

        function toggleAutoWidth() {
            tag.autoWidth = !tag.autoWidth;
            if (tag.autoWidth) { setFullWidth(); }
            saveSetting(STORAGE_KEY_AUTO, tag.autoWidth);
        }

        function disableAutoWidth() {
            tag.autoWidth = false;
            saveSetting(STORAGE_KEY_AUTO, false);
        }

        function restoreWidth() {
            var width = getSetting(STORAGE_KEY_WIDTH);
            (width && !tag.autoWidth) ? setWidth(width) : setFullWidth();
        }

        function saveSetting(key, value) {
            localStorage.setItem(key, JSON.stringify(value));
        }
        function getSetting(key) {
            return JSON.parse(localStorage.getItem(key));
        }
});// wrap Riot implementation into generic API.
window.demoViewer = function(config){
    'use strict';
    var element = document.querySelector('demo-viewer');
    var app = document.createElement('app');
    app.innerHTML = element.innerHTML;
    element.innerHTML = '';
    element.appendChild(app);

    if (typeof config.modules === 'string') {
        getJson(config.modules, function(err, modules) {
            if (err) { window.console.log('error fetching modules', err); }
            window.riot.mount(app, { modules: modules, logo: config.logo, sizes: config.sizes });
        });
    } else {
        window.riot.mount(app, config);
    }


    /**
     * Get JSON from URL.
     *
     * @param {String} url
     * @param {Function} callback   - called with (err, json)
     */
    function getJson(url, callback) {
        var request = new XMLHttpRequest();
        request.open('GET', url, true);
        request.onload = function() {
            if (request.status >= 200 && request.status < 400) {
                try {
                    var json = JSON.parse(request.responseText);
                    callback(null, json);
                } catch (err) {
                    callback(err);
                }
            } else {
                callback(request);
            }
        };
        request.onerror = function() {
            callback(request);
        };
        request.send();
    }
};