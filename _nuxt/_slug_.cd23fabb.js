import{_ as c}from"./ArchiveList.vue.51e79359.js";import{d as i,u as p,a as f,b as _,c as d,e as g,o as h,f as B,g as v,h as x,i as k,j as w}from"./entry.1e10fd68.js";import{u}from"./useBackground.9f6df856.js";import"./SortByDropdown.vue.66ccd386.js";import"./FormDropdown.vue.39244f01.js";import"./TitleList.vue.b133fad1.js";import"./TitleFrame.34bd10b4.js";import"./TitleFrameUserlist.vue.d3a7b9eb.js";import"./ContentPop-v2.vue.b1331422.js";import"./useArchiveIcon.18656aa1.js";const $={class:"flex min-h-full w-full flex-col"},R=i({__name:"[slug]",setup(b){var n;const o=p(),r=f(),{t:l}=_(),s=d(()=>r.params.slug);g({title:()=>{var e;return`${l("seo.30nama")} | ${(e=o.genres.find(a=>a.slug===s.value))==null?void 0:e.name}`}});const t=(n=o.genres.find(e=>e.slug===s.value))==null?void 0:n.image.webp.full;return h(()=>{t&&u(t)}),B(()=>u("")),(e,a)=>{const m=c;return v(),x("div",$,[k(m,{slug:w(s)},null,8,["slug"])])}}});export{R as default};
