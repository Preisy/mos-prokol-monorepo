import{a as ie,w as I,o as Ae,d as ye,n as ze,l as Le,f as ne,r as g,i as Oe,j as h,a1 as X,a0 as ke,O as De,p as Be,aA as Se,h as z,aq as Fe,ad as B,ar as Re,as as Y,at as G,ab as ue,ae as J,au as oe,av as ee,Z as je,a6 as Qe,a9 as Ve,aa as We,aE as ce,y as R,t as P,u as A,v as T,C as q,F as we,D as Ce,A as w,x as Xe,s as b,z as M,B as F,_ as de,H as $e}from"./index.f457c5b5.js";import{g as Ye,a as Ne,b as Ue,d as te,Q as K,e as ve,s as fe,f as Ie,u as Ke,h as Ze,i as re,j as he,k as Ge,S as Je,l as et,_ as tt,m as rt,W as lt,n as at,o as ot,p as it,q as nt,r as st,t as ut,v as ct}from"./WStats.0898c257.js";import{_ as dt}from"./plugin-vue_export-helper.21dcd24c.js";const{passive:me}=Le,vt=["both","horizontal","vertical"];var qe=ie({name:"QScrollObserver",props:{axis:{type:String,validator:l=>vt.includes(l),default:"vertical"},debounce:[String,Number],scrollTarget:{default:void 0}},emits:["scroll"],setup(l,{emit:n}){const i={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let c=null,e,r;I(()=>l.scrollTarget,()=>{d(),t()});function a(){c!==null&&c();const _=Math.max(0,Ne(e)),p=Ue(e),m={top:_-i.position.top,left:p-i.position.left};if(l.axis==="vertical"&&m.top===0||l.axis==="horizontal"&&m.left===0)return;const C=Math.abs(m.top)>=Math.abs(m.left)?m.top<0?"up":"down":m.left<0?"left":"right";i.position={top:_,left:p},i.directionChanged=i.direction!==C,i.delta=m,i.directionChanged===!0&&(i.direction=C,i.inflectionPoint=i.position),n("scroll",{...i})}function t(){e=Ye(r,l.scrollTarget),e.addEventListener("scroll",s,me),s(!0)}function d(){e!==void 0&&(e.removeEventListener("scroll",s,me),e=void 0)}function s(_){if(_===!0||l.debounce===0||l.debounce==="0")a();else if(c===null){const[p,m]=l.debounce?[setTimeout(a,l.debounce),clearTimeout]:[requestAnimationFrame(a),cancelAnimationFrame];c=()=>{m(p),c=null}}}const{proxy:S}=ne();return I(()=>S.$q.lang.rtl,a),Ae(()=>{r=S.$el.parentNode,t()}),ye(()=>{c!==null&&c(),d()}),Object.assign(S,{trigger:s,getPosition:()=>i}),ze}}),ft=ie({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:l=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(l.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(l,{slots:n,emit:i}){const{proxy:{$q:c}}=ne(),e=g(null),r=g(c.screen.height),a=g(l.container===!0?0:c.screen.width),t=g({position:0,direction:"down",inflectionPoint:0}),d=g(0),s=g(Oe.value===!0?0:te()),S=h(()=>"q-layout q-layout--"+(l.container===!0?"containerized":"standard")),_=h(()=>l.container===!1?{minHeight:c.screen.height+"px"}:null),p=h(()=>s.value!==0?{[c.lang.rtl===!0?"left":"right"]:`${s.value}px`}:null),m=h(()=>s.value!==0?{[c.lang.rtl===!0?"right":"left"]:0,[c.lang.rtl===!0?"left":"right"]:`-${s.value}px`,width:`calc(100% + ${s.value}px)`}:null);function C(v){if(l.container===!0||document.qScrollPrevented!==!0){const y={position:v.position.top,direction:v.direction,directionChanged:v.directionChanged,inflectionPoint:v.inflectionPoint.top,delta:v.delta.top};t.value=y,l.onScroll!==void 0&&i("scroll",y)}}function L(v){const{height:y,width:$}=v;let x=!1;r.value!==y&&(x=!0,r.value=y,l.onScrollHeight!==void 0&&i("scrollHeight",y),k()),a.value!==$&&(x=!0,a.value=$),x===!0&&l.onResize!==void 0&&i("resize",v)}function Z({height:v}){d.value!==v&&(d.value=v,k())}function k(){if(l.container===!0){const v=r.value>d.value?te():0;s.value!==v&&(s.value=v)}}let E=null;const D={instances:{},view:h(()=>l.view),isContainer:h(()=>l.container),rootRef:e,height:r,containerHeight:d,scrollbarWidth:s,totalWidth:h(()=>a.value+s.value),rows:h(()=>{const v=l.view.toLowerCase().split(" ");return{top:v[0].split(""),middle:v[1].split(""),bottom:v[2].split("")}}),header:X({size:0,offset:0,space:!1}),right:X({size:300,offset:0,space:!1}),footer:X({size:0,offset:0,space:!1}),left:X({size:300,offset:0,space:!1}),scroll:t,animate(){E!==null?clearTimeout(E):document.body.classList.add("q-body--layout-animate"),E=setTimeout(()=>{E=null,document.body.classList.remove("q-body--layout-animate")},155)},update(v,y,$){D[v][y]=$}};if(ke(De,D),te()>0){let $=function(){v=null,y.classList.remove("hide-scrollbar")},x=function(){if(v===null){if(y.scrollHeight>c.screen.height)return;y.classList.add("hide-scrollbar")}else clearTimeout(v);v=setTimeout($,300)},O=function(j){v!==null&&j==="remove"&&(clearTimeout(v),$()),window[`${j}EventListener`]("resize",x)},v=null;const y=document.body;I(()=>l.container!==!0?"add":"remove",O),l.container!==!0&&O("add"),Be(()=>{O("remove")})}return()=>{const v=Se(n.default,[z(qe,{onScroll:C}),z(K,{onResize:L})]),y=z("div",{class:S.value,style:_.value,ref:l.container===!0?void 0:e,tabindex:-1},v);return l.container===!0?z("div",{class:"q-layout-container overflow-hidden",ref:e},[z(K,{onResize:Z}),z("div",{class:"absolute-full",style:p.value},[z("div",{class:"scroll",style:m.value},[y])])]):y}}});function le(l,n,i){const c=oe(l);let e,r=c.left-n.event.x,a=c.top-n.event.y,t=Math.abs(r),d=Math.abs(a);const s=n.direction;s.horizontal===!0&&s.vertical!==!0?e=r<0?"left":"right":s.horizontal!==!0&&s.vertical===!0?e=a<0?"up":"down":s.up===!0&&a<0?(e="up",t>d&&(s.left===!0&&r<0?e="left":s.right===!0&&r>0&&(e="right"))):s.down===!0&&a>0?(e="down",t>d&&(s.left===!0&&r<0?e="left":s.right===!0&&r>0&&(e="right"))):s.left===!0&&r<0?(e="left",t<d&&(s.up===!0&&a<0?e="up":s.down===!0&&a>0&&(e="down"))):s.right===!0&&r>0&&(e="right",t<d&&(s.up===!0&&a<0?e="up":s.down===!0&&a>0&&(e="down")));let S=!1;if(e===void 0&&i===!1){if(n.event.isFirst===!0||n.event.lastDir===void 0)return{};e=n.event.lastDir,S=!0,e==="left"||e==="right"?(c.left-=r,t=0,r=0):(c.top-=a,d=0,a=0)}return{synthetic:S,payload:{evt:l,touch:n.event.mouse!==!0,mouse:n.event.mouse===!0,position:c,direction:e,isFirst:n.event.isFirst,isFinal:i===!0,duration:Date.now()-n.event.time,distance:{x:t,y:d},offset:{x:r,y:a},delta:{x:c.left-n.event.lastX,y:c.top-n.event.lastY}}}}let ht=0;var pe=Fe({name:"touch-pan",beforeMount(l,{value:n,modifiers:i}){if(i.mouse!==!0&&B.has.touch!==!0)return;function c(r,a){i.mouse===!0&&a===!0?je(r):(i.stop===!0&&J(r),i.prevent===!0&&ue(r))}const e={uid:"qvtp_"+ht++,handler:n,modifiers:i,direction:ve(i),noop:ze,mouseStart(r){fe(r,e)&&Re(r)&&(Y(e,"temp",[[document,"mousemove","move","notPassiveCapture"],[document,"mouseup","end","passiveCapture"]]),e.start(r,!0))},touchStart(r){if(fe(r,e)){const a=r.target;Y(e,"temp",[[a,"touchmove","move","notPassiveCapture"],[a,"touchcancel","end","passiveCapture"],[a,"touchend","end","passiveCapture"]]),e.start(r)}},start(r,a){if(B.is.firefox===!0&&G(l,!0),e.lastEvt=r,a===!0||i.stop===!0){if(e.direction.all!==!0&&(a!==!0||e.modifiers.mouseAllDir!==!0&&e.modifiers.mousealldir!==!0)){const s=r.type.indexOf("mouse")>-1?new MouseEvent(r.type,r):new TouchEvent(r.type,r);r.defaultPrevented===!0&&ue(s),r.cancelBubble===!0&&J(s),Object.assign(s,{qKeyEvent:r.qKeyEvent,qClickOutside:r.qClickOutside,qAnchorHandled:r.qAnchorHandled,qClonedBy:r.qClonedBy===void 0?[e.uid]:r.qClonedBy.concat(e.uid)}),e.initialEvent={target:r.target,event:s}}J(r)}const{left:t,top:d}=oe(r);e.event={x:t,y:d,time:Date.now(),mouse:a===!0,detected:!1,isFirst:!0,isFinal:!1,lastX:t,lastY:d}},move(r){if(e.event===void 0)return;const a=oe(r),t=a.left-e.event.x,d=a.top-e.event.y;if(t===0&&d===0)return;e.lastEvt=r;const s=e.event.mouse===!0,S=()=>{c(r,s);let m;i.preserveCursor!==!0&&i.preservecursor!==!0&&(m=document.documentElement.style.cursor||"",document.documentElement.style.cursor="grabbing"),s===!0&&document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),Ie(),e.styleCleanup=C=>{if(e.styleCleanup=void 0,m!==void 0&&(document.documentElement.style.cursor=m),document.body.classList.remove("non-selectable"),s===!0){const L=()=>{document.body.classList.remove("no-pointer-events--children")};C!==void 0?setTimeout(()=>{L(),C()},50):L()}else C!==void 0&&C()}};if(e.event.detected===!0){e.event.isFirst!==!0&&c(r,e.event.mouse);const{payload:m,synthetic:C}=le(r,e,!1);m!==void 0&&(e.handler(m)===!1?e.end(r):(e.styleCleanup===void 0&&e.event.isFirst===!0&&S(),e.event.lastX=m.position.left,e.event.lastY=m.position.top,e.event.lastDir=C===!0?void 0:m.direction,e.event.isFirst=!1));return}if(e.direction.all===!0||s===!0&&(e.modifiers.mouseAllDir===!0||e.modifiers.mousealldir===!0)){S(),e.event.detected=!0,e.move(r);return}const _=Math.abs(t),p=Math.abs(d);_!==p&&(e.direction.horizontal===!0&&_>p||e.direction.vertical===!0&&_<p||e.direction.up===!0&&_<p&&d<0||e.direction.down===!0&&_<p&&d>0||e.direction.left===!0&&_>p&&t<0||e.direction.right===!0&&_>p&&t>0?(e.event.detected=!0,e.move(r)):e.end(r,!0))},end(r,a){if(e.event!==void 0){if(ee(e,"temp"),B.is.firefox===!0&&G(l,!1),a===!0)e.styleCleanup!==void 0&&e.styleCleanup(),e.event.detected!==!0&&e.initialEvent!==void 0&&e.initialEvent.target.dispatchEvent(e.initialEvent.event);else if(e.event.detected===!0){e.event.isFirst===!0&&e.handler(le(r===void 0?e.lastEvt:r,e).payload);const{payload:t}=le(r===void 0?e.lastEvt:r,e,!0),d=()=>{e.handler(t)};e.styleCleanup!==void 0?e.styleCleanup(d):d()}e.event=void 0,e.initialEvent=void 0,e.lastEvt=void 0}}};if(l.__qtouchpan=e,i.mouse===!0){const r=i.mouseCapture===!0||i.mousecapture===!0?"Capture":"";Y(e,"main",[[l,"mousedown","mouseStart",`passive${r}`]])}B.has.touch===!0&&Y(e,"main",[[l,"touchstart","touchStart",`passive${i.capture===!0?"Capture":""}`],[l,"touchmove","noop","notPassiveCapture"]])},updated(l,n){const i=l.__qtouchpan;i!==void 0&&(n.oldValue!==n.value&&(typeof value!="function"&&i.end(),i.handler=n.value),i.direction=ve(n.modifiers))},beforeUnmount(l){const n=l.__qtouchpan;n!==void 0&&(n.event!==void 0&&n.end(),ee(n,"main"),ee(n,"temp"),B.is.firefox===!0&&G(l,!1),n.styleCleanup!==void 0&&n.styleCleanup(),delete l.__qtouchpan)}});function N(l,n,i){return i<=n?n:Math.min(i,Math.max(n,l))}const be=["vertical","horizontal"],ae={vertical:{offset:"offsetY",scroll:"scrollTop",dir:"down",dist:"y"},horizontal:{offset:"offsetX",scroll:"scrollLeft",dir:"right",dist:"x"}},ge={prevent:!0,mouse:!0,mouseAllDir:!0},_e=l=>l>=250?50:Math.ceil(l/5);var mt=ie({name:"QScrollArea",props:{...Ke,thumbStyle:Object,verticalThumbStyle:Object,horizontalThumbStyle:Object,barStyle:[Array,String,Object],verticalBarStyle:[Array,String,Object],horizontalBarStyle:[Array,String,Object],contentStyle:[Array,String,Object],contentActiveStyle:[Array,String,Object],delay:{type:[String,Number],default:1e3},visible:{type:Boolean,default:null},tabindex:[String,Number],onScroll:Function},setup(l,{slots:n,emit:i}){const c=g(!1),e=g(!1),r=g(!1),a={vertical:g(0),horizontal:g(0)},t={vertical:{ref:g(null),position:g(0),size:g(0)},horizontal:{ref:g(null),position:g(0),size:g(0)}},{proxy:d}=ne(),s=Ze(l,d.$q);let S=null,_;const p=g(null),m=h(()=>"q-scrollarea"+(s.value===!0?" q-scrollarea--dark":""));t.vertical.percentage=h(()=>{const o=t.vertical.size.value-a.vertical.value;if(o<=0)return 0;const u=N(t.vertical.position.value/o,0,1);return Math.round(u*1e4)/1e4}),t.vertical.thumbHidden=h(()=>(l.visible===null?r.value:l.visible)!==!0&&c.value===!1&&e.value===!1||t.vertical.size.value<=a.vertical.value+1),t.vertical.thumbStart=h(()=>t.vertical.percentage.value*(a.vertical.value-t.vertical.thumbSize.value)),t.vertical.thumbSize=h(()=>Math.round(N(a.vertical.value*a.vertical.value/t.vertical.size.value,_e(a.vertical.value),a.vertical.value))),t.vertical.style=h(()=>({...l.thumbStyle,...l.verticalThumbStyle,top:`${t.vertical.thumbStart.value}px`,height:`${t.vertical.thumbSize.value}px`})),t.vertical.thumbClass=h(()=>"q-scrollarea__thumb q-scrollarea__thumb--v absolute-right"+(t.vertical.thumbHidden.value===!0?" q-scrollarea__thumb--invisible":"")),t.vertical.barClass=h(()=>"q-scrollarea__bar q-scrollarea__bar--v absolute-right"+(t.vertical.thumbHidden.value===!0?" q-scrollarea__bar--invisible":"")),t.horizontal.percentage=h(()=>{const o=t.horizontal.size.value-a.horizontal.value;if(o<=0)return 0;const u=N(Math.abs(t.horizontal.position.value)/o,0,1);return Math.round(u*1e4)/1e4}),t.horizontal.thumbHidden=h(()=>(l.visible===null?r.value:l.visible)!==!0&&c.value===!1&&e.value===!1||t.horizontal.size.value<=a.horizontal.value+1),t.horizontal.thumbStart=h(()=>t.horizontal.percentage.value*(a.horizontal.value-t.horizontal.thumbSize.value)),t.horizontal.thumbSize=h(()=>Math.round(N(a.horizontal.value*a.horizontal.value/t.horizontal.size.value,_e(a.horizontal.value),a.horizontal.value))),t.horizontal.style=h(()=>({...l.thumbStyle,...l.horizontalThumbStyle,[d.$q.lang.rtl===!0?"right":"left"]:`${t.horizontal.thumbStart.value}px`,width:`${t.horizontal.thumbSize.value}px`})),t.horizontal.thumbClass=h(()=>"q-scrollarea__thumb q-scrollarea__thumb--h absolute-bottom"+(t.horizontal.thumbHidden.value===!0?" q-scrollarea__thumb--invisible":"")),t.horizontal.barClass=h(()=>"q-scrollarea__bar q-scrollarea__bar--h absolute-bottom"+(t.horizontal.thumbHidden.value===!0?" q-scrollarea__bar--invisible":""));const C=h(()=>t.vertical.thumbHidden.value===!0&&t.horizontal.thumbHidden.value===!0?l.contentStyle:l.contentActiveStyle),L=[[pe,o=>{x(o,"vertical")},void 0,{vertical:!0,...ge}]],Z=[[pe,o=>{x(o,"horizontal")},void 0,{horizontal:!0,...ge}]];function k(){const o={};return be.forEach(u=>{const f=t[u];o[u+"Position"]=f.position.value,o[u+"Percentage"]=f.percentage.value,o[u+"Size"]=f.size.value,o[u+"ContainerSize"]=a[u].value}),o}const E=Qe(()=>{const o=k();o.ref=d,i("scroll",o)},0);function D(o,u,f){if(be.includes(o)===!1){console.error("[QScrollArea]: wrong first param of setScrollPosition (vertical/horizontal)");return}(o==="vertical"?he:re)(p.value,u,f)}function v({height:o,width:u}){let f=!1;a.vertical.value!==o&&(a.vertical.value=o,f=!0),a.horizontal.value!==u&&(a.horizontal.value=u,f=!0),f===!0&&Q()}function y({position:o}){let u=!1;t.vertical.position.value!==o.top&&(t.vertical.position.value=o.top,u=!0),t.horizontal.position.value!==o.left&&(t.horizontal.position.value=o.left,u=!0),u===!0&&Q()}function $({height:o,width:u}){t.horizontal.size.value!==u&&(t.horizontal.size.value=u,Q()),t.vertical.size.value!==o&&(t.vertical.size.value=o,Q())}function x(o,u){const f=t[u];if(o.isFirst===!0){if(f.thumbHidden.value===!0)return;_=f.position.value,e.value=!0}else if(e.value!==!0)return;o.isFinal===!0&&(e.value=!1);const H=ae[u],W=a[u].value,Te=(f.size.value-W)/(W-f.thumbSize.value),Ee=o.distance[H.dist],He=_+(o.direction===H.dir?1:-1)*Ee*Te;se(He,u)}function O(o,u){const f=t[u];if(f.thumbHidden.value!==!0){const H=o[ae[u].offset];if(H<f.thumbStart.value||H>f.thumbStart.value+f.thumbSize.value){const W=H-f.thumbSize.value/2;se(W/a[u].value*f.size.value,u)}f.ref.value!==null&&f.ref.value.dispatchEvent(new MouseEvent(o.type,o))}}function j(o){O(o,"vertical")}function Pe(o){O(o,"horizontal")}function Q(){c.value=!0,S!==null&&clearTimeout(S),S=setTimeout(()=>{S=null,c.value=!1},l.delay),l.onScroll!==void 0&&E()}function se(o,u){p.value[ae[u].scroll]=o}function xe(){r.value=!0}function Me(){r.value=!1}let V=null;return I(()=>d.$q.lang.rtl,o=>{p.value!==null&&re(p.value,Math.abs(t.horizontal.position.value)*(o===!0?-1:1))}),Ve(()=>{V={top:t.vertical.position.value,left:t.horizontal.position.value}}),We(()=>{if(V===null)return;const o=p.value;o!==null&&(re(o,V.left),he(o,V.top))}),ye(E.cancel),Object.assign(d,{getScrollTarget:()=>p.value,getScroll:k,getScrollPosition:()=>({top:t.vertical.position.value,left:t.horizontal.position.value}),getScrollPercentage:()=>({top:t.vertical.percentage.value,left:t.horizontal.percentage.value}),setScrollPosition:D,setScrollPercentage(o,u,f){D(o,u*(t[o].size.value-a[o].value)*(o==="horizontal"&&d.$q.lang.rtl===!0?-1:1),f)}}),()=>z("div",{class:m.value,onMouseenter:xe,onMouseleave:Me},[z("div",{ref:p,class:"q-scrollarea__container scroll relative-position fit hide-scrollbar",tabindex:l.tabindex!==void 0?l.tabindex:void 0},[z("div",{class:"q-scrollarea__content absolute",style:C.value},Se(n.default,[z(K,{debounce:0,onResize:$})])),z(qe,{axis:"both",onScroll:y})]),z(K,{debounce:0,onResize:v}),z("div",{class:t.vertical.barClass.value,style:[l.barStyle,l.verticalBarStyle],"aria-hidden":"true",onMousedown:j}),z("div",{class:t.horizontal.barClass.value,style:[l.barStyle,l.horizontalBarStyle],"aria-hidden":"true",onMousedown:Pe}),ce(z("div",{ref:t.vertical.ref,class:t.vertical.thumbClass.value,style:t.vertical.style.value,"aria-hidden":"true"}),L),ce(z("div",{ref:t.horizontal.ref,class:t.horizontal.thumbClass.value,style:t.horizontal.style.value,"aria-hidden":"true"}),Z)])}});const pt={"m-0":""},bt={grid:"","grid-rows-4":"","sm:grid-rows-2":"","sm:grid-cols-2":"","mx-1":"","sm:mx-2":"","md:mx-8":"","gap-x-10":""},gt=R({__name:"PriceDescList",setup(l){const{tm:n}=Ge(),i=n("price.list.points");return(c,e)=>(P(),A("div",null,[T("p",pt,q(c.$t("price.list.title")),1),T("div",bt,[(P(!0),A(we,null,Ce(w(i),r=>(P(),A("li",{key:r,"marker:text-attractive2":""},q(r),1))),128))])]))}}),_t={},yt={"p-1":"","border-1":"","border-attractive2":"","border-solid":""};function zt(l,n){return P(),A("td",yt,[Xe(l.$slots,"default")])}var U=dt(_t,[["render",zt]]);const St={"bg-primary":"",flex:"","flex-col":"","box-border":"","w-fit":"","sm:w-min":"","rounded-3.6":"","mx-auto":"","p-3.4":"",class:"md:py-8 md:px-16"},wt={"text-center":"","w-fit":"","border-collapse":"",uppercase:"","sm:whitespace-nowrap":""},Ct={"text-lgx":"",bg:"attractive2/10","font-600":""},$t=R({__name:"PriceSpreadsheet",setup(l){const n=[{diameter:32,price:1100},{diameter:63,price:1350},{diameter:110,price:1500},{diameter:160,price:2070},{diameter:225,price:2600}];return(i,c)=>(P(),A("div",St,[b(w(Je),{class:"[&>.main]:text-12 [&>.main]:text-black [&>.secondary]:text-white","mx-auto":"",block:""},{default:M(()=>[F(q(i.$t("price.spreadsheet.header")),1)]),_:1}),T("table",wt,[T("tr",Ct,[b(U,{class:"border-l-0! border-t-0!"},{default:M(()=>[F(q(i.$t("price.spreadsheet.firstRow.diameter")),1)]),_:1}),b(U,{class:"border-r-0! border-t-0!"},{default:M(()=>[F(q(i.$t("price.spreadsheet.firstRow.price")),1)]),_:1})]),(P(),A(we,null,Ce(n,(e,r)=>T("tr",{key:r,"font-500":"","text-lgs":""},[b(U,{class:de(["border-l-0!",{"border-b-0!":r===n.length-1}])},{default:M(()=>[F(q(e.diameter),1)]),_:2},1032,["class"]),b(U,{class:de(["border-r-0!",{"border-b-0!":r===n.length-1}])},{default:M(()=>[F(q(i.$t("price.spreadsheet.pretext"))+" "+q(e.price),1)]),_:2},1032,["class"])])),64))])]))}}),qt={class:"w-price","overflow-hidden":"",relative:""},Pt={relative:"","z-1":"","text-primary":"","font-600":"","text-base":"","mx-4":"","mt-7":""},xt=T("img",{src:"/mos-prokol-monorepo/widgets/WPrice/background.png",absolute:"",w:"15/10","top-0":"",left:"-25/100","z-0":"","select-none":"","pointer-events-none":""},null,-1),Mt=R({__name:"WPrice",setup(l){return(n,i)=>(P(),A("div",qt,[b(w(et),{"md:py-30":"","pt-3.5rem":"","pb-2rem":"",w:"fit!","sm:w":"min!","sm:mx-auto":"",relative:""},{default:M(()=>[b($t,{relative:"","z-1":""}),T("div",Pt,[T("p",null,q(n.$t("price.description")),1),b(gt)]),xt]),_:1})]))}}),Tt=R({__name:"PLanding",setup(l){return(n,i)=>(P(),$e(mt,{"bg-secondary5":"","h-100vh":"","vertical-thumb-style":{mixBlendMode:"difference",opacity:"1",zIndex:"2",background:"rgba(255,255,255,0.6)"}},{default:M(()=>[b(w(tt)),b(w(rt)),b(w(lt)),b(w(at)),b(w(Mt)),b(w(ot)),b(w(it)),b(w(nt)),b(w(st)),b(w(ut)),b(w(ct))]),_:1},8,["vertical-thumb-style"]))}}),Lt=R({__name:"LHome",setup(l){return(n,i)=>(P(),$e(ft,{view:"hHh lpr fFf"},{default:M(()=>[b(Tt)]),_:1}))}});export{Lt as default};