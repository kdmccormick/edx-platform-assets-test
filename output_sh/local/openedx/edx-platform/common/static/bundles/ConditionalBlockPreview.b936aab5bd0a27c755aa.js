!function(e,t){for(var n in t)e[n]=t[n]}(window,webpackJsonp([32],{"./common/static/xmodule/modules/js/001-879b5ca9f0c8ae80045af7486d8d310d.js":function(e,t,n){(function(e,t,n){(function(){(function(){this.Conditional=function(){function o(t,n,o){var l;this.el=e(t).find(".conditional-wrapper"),this.callerElId=o,void 0!==o&&"string"==typeof(l=this.el.data("depends"))&&l.length>0&&-1===l.indexOf(o)||(this.url=this.el.data("url"),this.url&&this.render(t))}return o.prototype.render=function(t){return e.postWithPrefix(this.url+"/conditional_get",function(n){return function(o){var l,r,i,s=[];for(n.el.html(""),fragments=o.fragments,l=0,r=fragments.length;l<r;l++)s.push(n.renderXBlockFragment(fragments[l])),console.log("Started fragment loading",fragments[l]);i=e(t).parent(),i.attr("id"),!1===o.message?i.hasClass("vert")?i.hide():e(t).hide():i.hasClass("vert")?i.show():e(t).show(),e.when.apply(null,s).done(function(){console.log("All fragments loaded, initializing blocks"),XBlock.initializeBlocks(n.el)})}}(this))},o.prototype.renderXBlockFragment=function(t){var n=t.content,o=t.resources||[],l=this.el;try{return this.addXBlockFragmentResources(o).done(function(){console.log("Fragment resources loaded, appending HTML"),l.append(n)})}catch(t){return console.error(t,t.stack),e.Deferred().resolve()}},o.prototype.addXBlockFragmentResources=function(n){var o,l,r,i=this,l=n.length,r=e.Deferred();return o=function(e){var s,c;if(e>=l)return void r.resolve();s=n[e],window.loadedXBlockResources=window.loadedXBlockResources||[],t.indexOf(loadedXBlockResources,s)<0?(c=i.loadResource(s),loadedXBlockResources.push(s),c.done(function(){o(e+1)}).fail(function(){r.reject()})):o(e+1)},o(0),r.promise()},o.prototype.loadResource=function(t){var o,l=e("head"),r=t.mimetype,i=t.kind,s=t.placement,c=t.data;if("text/css"===r)"text"===i?l.append("<style type='text/css'>"+c+"</style>"):"url"===i&&l.append("<link rel='stylesheet' href='"+c+"' type='text/css'>");else if("application/javascript"===r){if("text"===i)l.append("<script>"+c+"<\/script>");else if("url"===i)return o=e.Deferred(),n(c,c,function(){o.resolve()}),o.promise()}else"text/html"===r&&"head"===s&&l.append(c);return e.Deferred().resolve().promise()},o}()}).call(this)}).call(window)}).call(t,n(0),n(1),n("./node_modules/scriptjs/dist/script.js"))},"./common/static/xmodule/modules/js/002-3918b2d4f383c04fed8227cc9f523d6e.js":function(e,t,n){(function(e){(function(){(function(){"use strict";this.JavascriptLoader=function(){function t(){}return t.executeModuleScripts=function(t,n){var o,l,r,i,s;return n||(n=null),s=t.find(".script_placeholder"),0===s.length?(null!==n&&n(),[]):(l=function(){var e,t,n;for(n=[],e=1,t=s.length;t>=1?e<=t:e>=t;t>=1?++e:--e)n.push(!1);return n}(),o=!1,r=function(e){return function(){var t,r,i;for(t=!0,l[e]=!0,r=0,i=l.length;r<i;r++)if(!l[r]){t=!1;break}if(t&&!o&&(o=!0,null!==n))return n()}},i={},s.each(function(t,n){var o,l;return l=e(n).attr("data-src"),l in i?r(t)():(i[l]=!0,o=document.createElement("script"),o.setAttribute("src",l),o.setAttribute("type","text/javascript"),o.onload=r(t),e("head")[0].appendChild(o)),e(n).remove()}))},t}()}).call(this)}).call(window)}).call(t,n(0))},"./common/static/xmodule/modules/js/003-b3206f2283964743c4772b9d72c67d64.js":function(e,t,n){(function(e,t){(function(){(function(n){"use strict";function o(n){var o,l,r;l='<a href="#" class="full full-top">See full output</a>',o='<a href="#" class="full full-bottom">See full output</a>',n.find(".longform").hide(),n.find(".shortform").append(l,o),r=n.find(".shortform-custom"),r.each(function(n,o){var l,r;r=e(o).data("open-text"),l=e(o).data("close-text"),t.append(e(o),t.joinHtml(t.HTML("<a href='#' class='full-custom'>"),gettext(r),t.HTML("</a>"))),e(o).find(".full-custom").click(function(e){Collapsible.toggleFull(e,r,l)})}),n.find(".collapsible header + section").hide(),n.find(".full").click(function(e){Collapsible.toggleFull(e,"See full output","Hide output")}),n.find(".collapsible header a").click(Collapsible.toggleHint)}function l(t,n,o){var l,r,i;t.preventDefault(),i=e(t.target).parent(),i.siblings().slideToggle(),i.parent().toggleClass("open"),r=e(t.target).text()===n?o:n,l=e(t.target).hasClass("full")?i.find(".full"):e(t.target),l.text(r)}function r(t){t.preventDefault(),e(t.target).parent().siblings().slideToggle(),e(t.target).parent().parent().toggleClass("open")}this.Collapsible={setCollapsibles:o,toggleFull:l,toggleHint:r}}).call(this)}).call(window)}).call(t,n(0),n("./node_modules/edx-ui-toolkit/src/js/utils/html-utils.js"))},"./node_modules/scriptjs/dist/script.js":function(e,t,n){var o,l;/*!
  * $script.js JS loader & dependency manager
  * https://github.com/ded/script.js
  * (c) Dustin Diaz 2014 | License MIT
  */
!function(r,i){void 0!==e&&e.exports?e.exports=i():(o=i,void 0!==(l="function"==typeof o?o.call(t,n,t,e):o)&&(e.exports=l))}(0,function(){function e(e,t){for(var n=0,o=e.length;n<o;++n)if(!t(e[n]))return c;return 1}function t(t,n){e(t,function(e){return!n(e)})}function n(r,i,s){function c(e){return e.call?e():f[e]}function u(){if(!--x){f[v]=1,g&&g();for(var n in m)e(n.split("|"),c)&&!t(m[n],c)&&(m[n]=[])}}r=r[a]?r:[r];var d=i&&i.call,g=d?i:s,v=d?r.join(""):i,x=r.length;return setTimeout(function(){t(r,function e(t,n){return null===t?u():(n||/^https?:\/\//.test(t)||!l||(t=-1===t.indexOf(".js")?l+t+".js":l+t),h[t]?(v&&(p[v]=1),2==h[t]?u():setTimeout(function(){e(t,!0)},0)):(h[t]=1,v&&(p[v]=1),void o(t,u)))})},0),n}function o(e,t){var n,o=i.createElement("script");o.onload=o.onerror=o[d]=function(){o[u]&&!/^c|loade/.test(o[u])||n||(o.onload=o[d]=null,n=1,h[e]=2,t())},o.async=1,o.src=r?e+(-1===e.indexOf("?")?"?":"&")+r:e,s.insertBefore(o,s.lastChild)}var l,r,i=document,s=i.getElementsByTagName("head")[0],c=!1,a="push",u="readyState",d="onreadystatechange",f={},p={},m={},h={};return n.get=o,n.order=function(e,t,o){!function l(r){r=e.shift(),e.length?n(r,l):n(r,t,o)}()},n.path=function(e){l=e},n.urlArgs=function(e){r=e},n.ready=function(o,l,r){o=o[a]?o:[o];var i=[];return!t(o,function(e){f[e]||i[a](e)})&&e(o,function(e){return f[e]})?l():function(e){m[e]=m[e]||[],m[e][a](l),r&&r(i)}(o.join("|")),n},n.done=function(e){n([null],e)},n})},19:function(e,t,n){n("./common/static/xmodule/modules/js/000-b82f6c436159f6bc7ca2513e29e82503.js"),n("./common/static/xmodule/modules/js/001-879b5ca9f0c8ae80045af7486d8d310d.js"),n("./common/static/xmodule/modules/js/002-3918b2d4f383c04fed8227cc9f523d6e.js"),e.exports=n("./common/static/xmodule/modules/js/003-b3206f2283964743c4772b9d72c67d64.js")}},[19]));