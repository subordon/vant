import{c as m}from"./use-translate.33b17133.js";import{m as g,t as $,c as d,w as h,n as y}from"./with-install.d00852e2.js";import{z as v,B as p,e as w}from"./vue-libs.7d3cdfcb.js";import{u as N}from"./useChildren.0ca62895.js";import{u as R}from"./useParent.9724c87d.js";const[P,S]=m("row"),b=Symbol(P),E={tag:g("div"),wrap:$,align:String,gutter:d(0),justify:String};var k=v({name:P,props:E,setup(o,{slots:s}){const{children:u,linkChildren:c}=N(b),l=p(()=>{const e=[[]];let t=0;return u.forEach((r,n)=>{t+=Number(r.span),t>24?(e.push([n]),t-=24):e[e.length-1].push(n)}),e}),a=p(()=>{const e=Number(o.gutter),t=[];return e&&l.value.forEach(r=>{const n=e*(r.length-1)/r.length;r.forEach((i,j)=>{if(j===0)t.push({right:n});else{const f=e-t[i-1].right,C=n-f;t.push({left:f,right:C})}})}),t});return c({spaces:a}),()=>{const{tag:e,wrap:t,align:r,justify:n}=o;return w(e,{class:S({[`align-${r}`]:r,[`justify-${n}`]:n,nowrap:!t})},{default:()=>{var i;return[(i=s.default)==null?void 0:i.call(s)]}})}}});const W=h(k),[x,_]=m("col"),z={tag:g("div"),span:d(0),offset:y};var B=v({name:x,props:z,setup(o,{slots:s}){const{parent:u,index:c}=R(b),l=p(()=>{if(!u)return;const{spaces:a}=u;if(a&&a.value&&a.value[c.value]){const{left:e,right:t}=a.value[c.value];return{paddingLeft:e?`${e}px`:null,paddingRight:t?`${t}px`:null}}});return()=>{const{tag:a,span:e,offset:t}=o;return w(a,{style:l.value,class:_({[e]:e,[`offset-${t}`]:t})},{default:()=>{var r;return[(r=s.default)==null?void 0:r.call(s)]}})}}});const Y=h(B);export{Y as C,W as R};
