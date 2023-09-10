import{k as r,r as l,aD as p,b as u}from"./index.23977bc9.js";var f=!1;/*!
 * pinia v2.1.6
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */const h=Symbol();var o;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(o||(o={}));function b(){const t=r(!0),s=t.run(()=>l({}));let i=[],n=[];const a=p({install(e){a._a=e,e.provide(h,a),e.config.globalProperties.$pinia=a,n.forEach(c=>i.push(c)),n=[]},use(e){return!this._a&&!f?n.push(e):i.push(e),this},_p:i,_a:null,_e:t,_s:new Map,state:s});return a}var d=u(({app:t})=>{const s=b();t.use(s)});export{d as default};
