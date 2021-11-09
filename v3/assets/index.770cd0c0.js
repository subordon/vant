import{i as f}from"./utils.45a8bdb5.js";import{W as Q,q as b,z as j,r as $,U as B,o as L,a as _,e as y,w,F as E,b as A,j as z,d as C,A as I}from"./vue-libs.7d3cdfcb.js";import{g as D}from"./index.71250a43.js";import{u as W}from"./use-translate.33b17133.js";var x=f&&"IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"intersectionRatio"in window.IntersectionObserverEntry.prototype,v={event:"event",observer:"observer"};function m(i,t){if(!!i.length){var e=i.indexOf(t);if(e>-1)return i.splice(e,1)}}function O(i,t){if(!(i.tagName!=="IMG"||!i.getAttribute("data-srcset"))){var e=i.getAttribute("data-srcset"),r=i.parentNode,s=r.offsetWidth*t,n,a,o;e=e.trim().split(",");var d=e.map(l=>(l=l.trim(),n=l.lastIndexOf(" "),n===-1?(a=l,o=999998):(a=l.substr(0,n),o=parseInt(l.substr(n+1,l.length-n-2),10)),[o,a]));d.sort((l,p)=>{if(l[0]<p[0])return 1;if(l[0]>p[0])return-1;if(l[0]===p[0]){if(p[1].indexOf(".webp",p[1].length-5)!==-1)return 1;if(l[1].indexOf(".webp",l[1].length-5)!==-1)return-1}return 0});for(var u="",h,c=0;c<d.length;c++){h=d[c],u=h[1];var g=d[c+1];if(g&&g[0]<s){u=h[1];break}else if(!g){u=h[1];break}}return u}}var k=function(i){return i===void 0&&(i=1),f&&window.devicePixelRatio||i};function N(){if(!f)return!1;var i=!0;try{var t=document.createElement("canvas");t.getContext&&t.getContext("2d")&&(i=t.toDataURL("image/webp").indexOf("data:image/webp")===0)}catch{i=!1}return i}function U(i,t){var e=null,r=0;return function(){for(var s=arguments.length,n=new Array(s),a=0;a<s;a++)n[a]=arguments[a];if(!e){var o=Date.now()-r,d=()=>{r=Date.now(),e=!1,i.apply(this,n)};o>=t?d():e=setTimeout(d,t)}}}function q(i,t,e){i.addEventListener(t,e,{capture:!1,passive:!0})}function F(i,t,e){i.removeEventListener(t,e,!1)}var T=(i,t,e)=>{var r=new Image;if(!i||!i.src){var s=new Error("image src is required");return e(s)}r.src=i.src,i.cors&&(r.crossOrigin=i.cors),r.onload=()=>t({naturalHeight:r.naturalHeight,naturalWidth:r.naturalWidth,src:r.src}),r.onerror=n=>e(n)};function V(i){return i!==null&&typeof i=="object"}function S(){}class P{constructor(t){var{max:e}=t;this.options={max:e||100},this._caches=[]}has(t){return this._caches.indexOf(t)>-1}add(t){this.has(t)||(this._caches.push(t),this._caches.length>this.options.max&&this.free())}free(){this._caches.shift()}}class G{constructor(t){var{el:e,src:r,error:s,loading:n,bindType:a,$parent:o,options:d,cors:u,elRenderer:h,imageCache:c}=t;this.el=e,this.src=r,this.error=s,this.loading=n,this.bindType=a,this.attempt=0,this.cors=u,this.naturalHeight=0,this.naturalWidth=0,this.options=d,this.rect=null,this.$parent=o,this.elRenderer=h,this._imageCache=c,this.performanceData={loadStart:0,loadEnd:0},this.filter(),this.initState(),this.render("loading",!1)}initState(){"dataset"in this.el?this.el.dataset.src=this.src:this.el.setAttribute("data-src",this.src),this.state={loading:!1,error:!1,loaded:!1,rendered:!1}}record(t){this.performanceData[t]=Date.now()}update(t){var{src:e,loading:r,error:s}=t,n=this.src;this.src=e,this.loading=r,this.error=s,this.filter(),n!==this.src&&(this.attempt=0,this.initState())}getRect(){this.rect=this.el.getBoundingClientRect()}checkInView(){return this.getRect(),this.rect.top<window.innerHeight*this.options.preLoad&&this.rect.bottom>this.options.preLoadTop&&this.rect.left<window.innerWidth*this.options.preLoad&&this.rect.right>0}filter(){Object.keys(this.options.filter).forEach(t=>{this.options.filter[t](this,this.options)})}renderLoading(t){this.state.loading=!0,T({src:this.loading,cors:this.cors},()=>{this.render("loading",!1),this.state.loading=!1,t()},()=>{t(),this.state.loading=!1})}load(t){if(t===void 0&&(t=S),this.attempt>this.options.attempt-1&&this.state.error){t();return}if(!(this.state.rendered&&this.state.loaded)){if(this._imageCache.has(this.src))return this.state.loaded=!0,this.render("loaded",!0),this.state.rendered=!0,t();this.renderLoading(()=>{var e,r;this.attempt++,(e=(r=this.options.adapter).beforeLoad)==null||e.call(r,this,this.options),this.record("loadStart"),T({src:this.src,cors:this.cors},s=>{this.naturalHeight=s.naturalHeight,this.naturalWidth=s.naturalWidth,this.state.loaded=!0,this.state.error=!1,this.record("loadEnd"),this.render("loaded",!1),this.state.rendered=!0,this._imageCache.add(this.src),t()},s=>{!this.options.silent&&console.error(s),this.state.error=!0,this.state.loaded=!1,this.render("error",!1)})})}}render(t,e){this.elRenderer(this,t,e)}performance(){var t="loading",e=0;return this.state.loaded&&(t="loaded",e=(this.performanceData.loadEnd-this.performanceData.loadStart)/1e3),this.state.error&&(t="error"),{src:this.src,state:t,time:e}}$destroy(){this.el=null,this.src=null,this.error=null,this.loading=null,this.bindType=null,this.attempt=0}}var R="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",J=["scroll","wheel","mousewheel","resize","animationend","transitionend","touchmove"],K={rootMargin:"0px",threshold:0};function X(){return class{constructor(t){var{preLoad:e,error:r,throttleWait:s,preLoadTop:n,dispatchEvent:a,loading:o,attempt:d,silent:u=!0,scale:h,listenEvents:c,filter:g,adapter:l,observer:p,observerOptions:H}=t;this.mode=v.event,this.ListenerQueue=[],this.TargetIndex=0,this.TargetQueue=[],this.options={silent:u,dispatchEvent:!!a,throttleWait:s||200,preLoad:e||1.3,preLoadTop:n||0,error:r||R,loading:o||R,attempt:d||3,scale:h||k(h),ListenEvents:c||J,hasbind:!1,supportWebp:N(),filter:g||{},adapter:l||{},observer:!!p,observerOptions:H||K},this._initEvent(),this._imageCache=new P({max:200}),this.lazyLoadHandler=U(this._lazyLoadHandler.bind(this),this.options.throttleWait),this.setMode(this.options.observer?v.observer:v.event)}config(t){t===void 0&&(t={}),Object.assign(this.options,t)}performance(){return this.ListenerQueue.map(t=>t.performance())}addLazyBox(t){this.ListenerQueue.push(t),f&&(this._addListenerTarget(window),this._observer&&this._observer.observe(t.el),t.$el&&t.$el.parentNode&&this._addListenerTarget(t.$el.parentNode))}add(t,e,r){if(this.ListenerQueue.some(a=>a.el===t))return this.update(t,e),b(this.lazyLoadHandler);var s=this._valueFormatter(e.value),{src:n}=s;b(()=>{n=O(t,this.options.scale)||n,this._observer&&this._observer.observe(t);var a=Object.keys(e.modifiers)[0],o;a&&(o=r.context.$refs[a],o=o?o.$el||o:document.getElementById(a)),o||(o=D(t));var d=new G({bindType:e.arg,$parent:o,el:t,src:n,loading:s.loading,error:s.error,cors:s.cors,elRenderer:this._elRenderer.bind(this),options:this.options,imageCache:this._imageCache});this.ListenerQueue.push(d),f&&(this._addListenerTarget(window),this._addListenerTarget(o)),this.lazyLoadHandler(),b(()=>this.lazyLoadHandler())})}update(t,e,r){var s=this._valueFormatter(e.value),{src:n}=s;n=O(t,this.options.scale)||n;var a=this.ListenerQueue.find(o=>o.el===t);a?a.update({src:n,error:s.error,loading:s.loading}):this.add(t,e,r),this._observer&&(this._observer.unobserve(t),this._observer.observe(t)),this.lazyLoadHandler(),b(()=>this.lazyLoadHandler())}remove(t){if(!!t){this._observer&&this._observer.unobserve(t);var e=this.ListenerQueue.find(r=>r.el===t);e&&(this._removeListenerTarget(e.$parent),this._removeListenerTarget(window),m(this.ListenerQueue,e),e.$destroy())}}removeComponent(t){!t||(m(this.ListenerQueue,t),this._observer&&this._observer.unobserve(t.el),t.$parent&&t.$el.parentNode&&this._removeListenerTarget(t.$el.parentNode),this._removeListenerTarget(window))}setMode(t){!x&&t===v.observer&&(t=v.event),this.mode=t,t===v.event?(this._observer&&(this.ListenerQueue.forEach(e=>{this._observer.unobserve(e.el)}),this._observer=null),this.TargetQueue.forEach(e=>{this._initListen(e.el,!0)})):(this.TargetQueue.forEach(e=>{this._initListen(e.el,!1)}),this._initIntersectionObserver())}_addListenerTarget(t){if(!!t){var e=this.TargetQueue.find(r=>r.el===t);return e?e.childrenCount++:(e={el:t,id:++this.TargetIndex,childrenCount:1,listened:!0},this.mode===v.event&&this._initListen(e.el,!0),this.TargetQueue.push(e)),this.TargetIndex}}_removeListenerTarget(t){this.TargetQueue.forEach((e,r)=>{e.el===t&&(e.childrenCount--,e.childrenCount||(this._initListen(e.el,!1),this.TargetQueue.splice(r,1),e=null))})}_initListen(t,e){this.options.ListenEvents.forEach(r=>(e?q:F)(t,r,this.lazyLoadHandler))}_initEvent(){var t=this;this.Event={listeners:{loading:[],loaded:[],error:[]}},this.$on=(e,r)=>{this.Event.listeners[e]||(this.Event.listeners[e]=[]),this.Event.listeners[e].push(r)},this.$once=(e,r)=>{var s=function(){t.$off(e,s);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];r.apply(t,a)};this.$on(e,s)},this.$off=(e,r)=>{if(!r){if(!this.Event.listeners[e])return;this.Event.listeners[e].length=0;return}m(this.Event.listeners[e],r)},this.$emit=(e,r,s)=>{!this.Event.listeners[e]||this.Event.listeners[e].forEach(n=>n(r,s))}}_lazyLoadHandler(){var t=[];this.ListenerQueue.forEach(e=>{(!e.el||!e.el.parentNode)&&t.push(e);var r=e.checkInView();!r||e.load()}),t.forEach(e=>{m(this.ListenerQueue,e),e.$destroy()})}_initIntersectionObserver(){!x||(this._observer=new IntersectionObserver(this._observerHandler.bind(this),this.options.observerOptions),this.ListenerQueue.length&&this.ListenerQueue.forEach(t=>{this._observer.observe(t.el)}))}_observerHandler(t){t.forEach(e=>{e.isIntersecting&&this.ListenerQueue.forEach(r=>{if(r.el===e.target){if(r.state.loaded)return this._observer.unobserve(r.el);r.load()}})})}_elRenderer(t,e,r){if(!!t.el){var{el:s,bindType:n}=t,a;switch(e){case"loading":a=t.loading;break;case"error":a=t.error;break;default:({src:a}=t);break}if(n?s.style[n]='url("'+a+'")':s.getAttribute("src")!==a&&s.setAttribute("src",a),s.setAttribute("lazy",e),this.$emit(e,t,r),this.options.adapter[e]&&this.options.adapter[e](t,this.options),this.options.dispatchEvent){var o=new CustomEvent(e,{detail:t});s.dispatchEvent(o)}}}_valueFormatter(t){var e=t,{loading:r,error:s}=this.options;return V(t)&&({src:e}=t,r=t.loading||this.options.loading,s=t.error||this.options.error),{src:e,loading:r,error:s}}}}var Y=i=>({props:{tag:{type:String,default:"div"}},emits:["show"],render(){return Q(this.tag,this.show&&this.$slots.default?this.$slots.default():null)},data(){return{el:null,state:{loaded:!1},rect:{},show:!1}},mounted(){this.el=this.$el,i.addLazyBox(this),i.lazyLoadHandler()},beforeUnmount(){i.removeComponent(this)},methods:{getRect(){this.rect=this.$el.getBoundingClientRect()},checkInView(){return this.getRect(),f&&this.rect.top<window.innerHeight*i.options.preLoad&&this.rect.bottom>0&&this.rect.left<window.innerWidth*i.options.preLoad&&this.rect.right>0},load(){this.show=!0,this.state.loaded=!0,this.$emit("show",this)},destroy(){return this.$destroy}}}),Z={selector:"img"};class M{constructor(t){var{el:e,binding:r,vnode:s,lazy:n}=t;this.el=null,this.vnode=s,this.binding=r,this.options={},this.lazy=n,this._queue=[],this.update({el:e,binding:r})}update(t){var{el:e,binding:r}=t;this.el=e,this.options=Object.assign({},Z,r.value);var s=this.getImgs();s.forEach(n=>{this.lazy.add(n,Object.assign({},this.binding,{value:{src:"dataset"in n?n.dataset.src:n.getAttribute("data-src"),error:("dataset"in n?n.dataset.error:n.getAttribute("data-error"))||this.options.error,loading:("dataset"in n?n.dataset.loading:n.getAttribute("data-loading"))||this.options.loading}}),this.vnode)})}getImgs(){return Array.from(this.el.querySelectorAll(this.options.selector))}clear(){var t=this.getImgs();t.forEach(e=>this.lazy.remove(e)),this.vnode=null,this.binding=null,this.lazy=null}}class tt{constructor(t){var{lazy:e}=t;this.lazy=e,this._queue=[]}bind(t,e,r){var s=new M({el:t,binding:e,vnode:r,lazy:this.lazy});this._queue.push(s)}update(t,e,r){var s=this._queue.find(n=>n.el===t);!s||s.update({el:t,binding:e,vnode:r})}unbind(t){var e=this._queue.find(r=>r.el===t);!e||(e.clear(),m(this._queue,e))}}var et=i=>({props:{src:[String,Object],tag:{type:String,default:"img"}},render(t){return t(this.tag,{attrs:{src:this.renderSrc}},this.$slots.default)},data(){return{el:null,options:{src:"",error:"",loading:"",attempt:i.options.attempt},state:{loaded:!1,error:!1,attempt:0},rect:{},renderSrc:""}},watch:{src(){this.init(),i.addLazyBox(this),i.lazyLoadHandler()}},created(){this.init(),this.renderSrc=this.options.loading},mounted(){this.el=this.$el,i.addLazyBox(this),i.lazyLoadHandler()},beforeUnmount(){i.removeComponent(this)},methods:{init(){var{src:t,loading:e,error:r}=i._valueFormatter(this.src);this.state.loaded=!1,this.options.src=t,this.options.error=r,this.options.loading=e,this.renderSrc=this.options.loading},getRect(){this.rect=this.$el.getBoundingClientRect()},checkInView(){return this.getRect(),f&&this.rect.top<window.innerHeight*i.options.preLoad&&this.rect.bottom>0&&this.rect.left<window.innerWidth*i.options.preLoad&&this.rect.right>0},load(t){if(t===void 0&&(t=S),this.state.attempt>this.options.attempt-1&&this.state.error){t();return}var{src:e}=this.options;T({src:e},r=>{var{src:s}=r;this.renderSrc=s,this.state.loaded=!0},()=>{this.state.attempt++,this.renderSrc=this.options.error,this.state.error=!0})}}}),rt={install(i,t){t===void 0&&(t={});var e=X(),r=new e(t),s=new tt({lazy:r});i.config.globalProperties.$Lazyload=r,t.lazyComponent&&i.component("LazyComponent",Y(r)),t.lazyImage&&i.component("LazyImage",et(r)),i.directive("lazy",{beforeMount:r.add.bind(r),updated:r.update.bind(r),unmounted:r.remove.bind(r)}),i.directive("lazy-container",{beforeMount:s.bind.bind(s),updated:s.update.bind(s),unmounted:s.unbind.bind(s)})}};const ht=j({setup(i){window.app&&window.app.use(rt,{lazyComponent:!0});const t=W({"zh-CN":{title2:"\u80CC\u666F\u56FE\u61D2\u52A0\u8F7D",title3:"\u61D2\u52A0\u8F7D\u6A21\u5757"},"en-US":{title2:"Lazyload Background Image",title3:"Lazyload Component"}}),e=["https://img.yzcdn.cn/vant/apple-1.jpg","https://img.yzcdn.cn/vant/apple-2.jpg","https://img.yzcdn.cn/vant/apple-3.jpg","https://img.yzcdn.cn/vant/apple-4.jpg"],r=["https://img.yzcdn.cn/vant/apple-5.jpg","https://img.yzcdn.cn/vant/apple-6.jpg"],s=["https://img.yzcdn.cn/vant/apple-8.jpg","https://img.yzcdn.cn/vant/apple-7.jpg"];return(n,a)=>{const o=$("demo-block"),d=$("lazy-component"),u=B("lazy");return L(),_(E,null,[y(o,{title:I(t)("basicUsage")},{default:w(()=>[(L(),_(E,null,A(e,h=>z(C("img",{key:h},null,512),[[u,h]])),64))]),_:1},8,["title"]),y(o,{title:I(t)("title2")},{default:w(()=>[(L(),_(E,null,A(r,h=>z(C("div",{key:h},null,512),[[u,h,"background-image"]])),64))]),_:1},8,["title"]),y(o,{title:I(t)("title3")},{default:w(()=>[y(d,null,{default:w(()=>[(L(),_(E,null,A(s,h=>z(C("img",{key:h},null,512),[[u,h]])),64))]),_:1})]),_:1},8,["title"])],64)}}});export{ht as default};
