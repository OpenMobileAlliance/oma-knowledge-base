import{_ as Qe}from"./Dk_0Tfpo.js";import{_ as Je}from"./Cw02s5l4.js";import{g as R,J,Z as me,$ as ke,a0 as Z,U as $e,a1 as We,i as I,a2 as ue,a3 as ge,K as be,X as De,a4 as Xe,a5 as Ye,a6 as Ze,a7 as we,S as Oe,a8 as ae,q as te,s as E,_ as ce,v as fe,x as Se,j as ne,k as D,z as ze,A as ie,o as c,c as y,a as z,n as C,F as M,B as q,t as ee,C as N,D as L,m as U,a9 as et,d as de,aa as Ie,y as se,ab as Pe,ac as tt,ad as at,ae as pe,r as W,w as _,b as H,af as Ce,ag as nt,ah as st,ai as rt,T as ot,aj as lt,ak as it,al as Be,am as Y,G as ut,l as v}from"./B74-zNAC.js";import"./DdEflKYf.js";import"./C-v3KzvZ.js";import"./BneCoJRQ.js";const dt={base:"inline-flex items-center",rounded:"rounded-md",font:"font-medium",size:{xs:"text-xs px-1.5 py-0.5",sm:"text-xs px-2 py-1",md:"text-sm px-2 py-1",lg:"text-sm px-2.5 py-1.5"},color:{white:{solid:"ring-1 ring-inset ring-gray-300 dark:ring-gray-700 text-gray-900 dark:text-white bg-white dark:bg-gray-900"},gray:{solid:"ring-1 ring-inset ring-gray-300 dark:ring-gray-700 text-gray-700 dark:text-gray-200 bg-gray-50 dark:bg-gray-800"},black:{solid:"text-white dark:text-gray-900 bg-gray-900 dark:bg-white"}},variant:{solid:"bg-{color}-500 dark:bg-{color}-400 text-white dark:text-gray-900",outline:"text-{color}-500 dark:text-{color}-400 ring-1 ring-inset ring-{color}-500 dark:ring-{color}-400",soft:"bg-{color}-50 dark:bg-{color}-400 dark:bg-opacity-10 text-{color}-500 dark:text-{color}-400",subtle:"bg-{color}-50 dark:bg-{color}-400 dark:bg-opacity-10 text-{color}-500 dark:text-{color}-400 ring-1 ring-inset ring-{color}-500 dark:ring-{color}-400 ring-opacity-25 dark:ring-opacity-25"},default:{size:"sm",variant:"solid",color:"primary"}},ct={wrapper:"w-full flex flex-col",container:"w-full flex flex-col",item:{base:"",size:"text-sm",color:"text-gray-500 dark:text-gray-400",padding:"pt-1.5 pb-3",icon:"ms-auto transform transition-transform duration-200"},transition:{enterActiveClass:"overflow-hidden transition-[height] duration-200 ease-out",leaveActiveClass:"overflow-hidden transition-[height] duration-200 ease-out"},default:{openIcon:"i-heroicons-chevron-down-20-solid",closeIcon:"",class:"mb-1.5 w-full",variant:"soft"}},ft={wrapper:{base:"flex items-center align-center text-center",horizontal:"w-full flex-row",vertical:"flex-col"},container:{base:"font-medium text-gray-700 dark:text-gray-200 flex",horizontal:"mx-3 whitespace-nowrap",vertical:"my-2"},border:{base:"flex border-gray-200 dark:border-gray-800",horizontal:"w-full",vertical:"h-full",size:{horizontal:{"2xs":"border-t",xs:"border-t-[2px]",sm:"border-t-[3px]",md:"border-t-[4px]",lg:"border-t-[5px]",xl:"border-t-[6px]"},vertical:{"2xs":"border-s",xs:"border-s-[2px]",sm:"border-s-[3px]",md:"border-s-[4px]",lg:"border-s-[5px]",xl:"border-s-[6px]"}},type:{solid:"border-solid",dotted:"border-dotted",dashed:"border-dashed"}},icon:{base:"flex-shrink-0 w-5 h-5"},avatar:{base:"flex-shrink-0",size:"2xs"},label:"text-sm",default:{size:"2xs"}},pt={wrapper:"flex items-center -space-x-px",base:"",rounded:"first:rounded-s-md last:rounded-e-md",default:{size:"sm",activeButton:{color:"primary"},inactiveButton:{color:"white"},firstButton:{color:"white",class:"rtl:[&_span:first-child]:rotate-180",icon:"i-heroicons-chevron-double-left-20-solid"},lastButton:{color:"white",class:"rtl:[&_span:last-child]:rotate-180",icon:"i-heroicons-chevron-double-right-20-solid"},prevButton:{color:"white",class:"rtl:[&_span:first-child]:rotate-180",icon:"i-heroicons-chevron-left-20-solid"},nextButton:{color:"white",class:"rtl:[&_span:last-child]:rotate-180",icon:"i-heroicons-chevron-right-20-solid"}}};var vt=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(vt||{});let je=Symbol("DisclosureContext");function ye(e){let d=Oe(je,null);if(d===null){let k=new Error(`<${e} /> is missing a parent <Disclosure /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(k,ye),k}return d}let Ae=Symbol("DisclosurePanelContext");function gt(){return Oe(Ae,null)}let bt=R({name:"Disclosure",props:{as:{type:[Object,String],default:"template"},defaultOpen:{type:[Boolean],default:!1}},setup(e,{slots:d,attrs:k}){let h=J(e.defaultOpen?0:1),r=J(null),g=J(null),s={buttonId:J(`headlessui-disclosure-button-${me()}`),panelId:J(`headlessui-disclosure-panel-${me()}`),disclosureState:h,panel:r,button:g,toggleDisclosure(){h.value=ke(h.value,{0:1,1:0})},closeDisclosure(){h.value!==1&&(h.value=1)},close(n){s.closeDisclosure();let m=n?n instanceof HTMLElement?n:n.value instanceof HTMLElement?Z(n):Z(s.button):Z(s.button);m==null||m.focus()}};return $e(je,s),We(I(()=>ke(h.value,{0:ue.Open,1:ue.Closed}))),()=>{let{defaultOpen:n,...m}=e,O={open:h.value===0,close:s.close};return ge({theirProps:m,ourProps:{},slot:O,slots:d,attrs:k,name:"Disclosure"})}}}),yt=R({name:"DisclosureButton",props:{as:{type:[Object,String],default:"button"},disabled:{type:[Boolean],default:!1},id:{type:String,default:null}},setup(e,{attrs:d,slots:k,expose:h}){let r=ye("DisclosureButton"),g=gt(),s=I(()=>g===null?!1:g.value===r.panelId.value);be(()=>{s.value||e.id!==null&&(r.buttonId.value=e.id)}),De(()=>{s.value||(r.buttonId.value=null)});let n=J(null);h({el:n,$el:n}),s.value||Xe(()=>{r.button.value=n.value});let m=Ye(I(()=>({as:e.as,type:d.type})),n);function O(){var o;e.disabled||(s.value?(r.toggleDisclosure(),(o=Z(r.button))==null||o.focus()):r.toggleDisclosure())}function j(o){var p;if(!e.disabled)if(s.value)switch(o.key){case ae.Space:case ae.Enter:o.preventDefault(),o.stopPropagation(),r.toggleDisclosure(),(p=Z(r.button))==null||p.focus();break}else switch(o.key){case ae.Space:case ae.Enter:o.preventDefault(),o.stopPropagation(),r.toggleDisclosure();break}}function w(o){switch(o.key){case ae.Space:o.preventDefault();break}}return()=>{var o;let p={open:r.disclosureState.value===0},{id:u,...b}=e,S=s.value?{ref:n,type:m.value,onClick:O,onKeydown:j}:{id:(o=r.buttonId.value)!=null?o:u,ref:n,type:m.value,"aria-expanded":r.disclosureState.value===0,"aria-controls":r.disclosureState.value===0||Z(r.panel)?r.panelId.value:void 0,disabled:e.disabled?!0:void 0,onClick:O,onKeydown:j,onKeyup:w};return ge({ourProps:S,theirProps:b,slot:p,attrs:d,slots:k,name:"DisclosureButton"})}}}),ht=R({name:"DisclosurePanel",props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},id:{type:String,default:null}},setup(e,{attrs:d,slots:k,expose:h}){let r=ye("DisclosurePanel");be(()=>{e.id!==null&&(r.panelId.value=e.id)}),De(()=>{r.panelId.value=null}),h({el:r.panel,$el:r.panel}),$e(Ae,r.panelId);let g=Ze(),s=I(()=>g!==null?(g.value&ue.Open)===ue.Open:r.disclosureState.value===0);return()=>{var n;let m={open:r.disclosureState.value===0,close:r.close},{id:O,...j}=e,w={id:(n=r.panelId.value)!=null?n:O,ref:r.panel};return ge({ourProps:w,theirProps:j,slot:m,attrs:d,slots:k,features:we.RenderStrategy|we.Static,visible:s.value,name:"DisclosurePanel"})}}});const Q={wrapper:"bg-gray-50 dark:bg-inherit border-2 border-neutral-200 dark:border-neutral-500 rounded-2xl p-5",header:"font-semibold text-center bg-slate-200 dark:bg-slate-700 dark:text-slate-200",footer:"font-semibold text-center bg-slate-200 dark:bg-slate-700 dark:text-slate-200",search:"pb-4",filter:"",table:"min-w-full divide-y divide-gray-300 dark:divide-gray-700",tbody:"divide-y divide-gray-300 dark:divide-gray-700",tr:{base:"",selected:"bg-gray-300 dark:bg-gray-500",active:"hover:bg-gray-200 dark:hover:bg-gray-300 cursor-pointer"},th:{base:"text-left rtl:text-right",padding:"px-4 py-3.5",color:"text-gray-900 dark:text-white",font:"font-semibold",size:"text-sm"},td:{base:"whitespace-nowrap text-pretty ",padding:"px-4 py-4",color:"text-gray-500 dark:text-gray-400",font:"",size:"text-sm"},pagination:"",perPage:[10,25,50,100],default:{perPage:10,sortAscIcon:"i-heroicons-bars-arrow-up-20-solid",sortDescIcon:"i-heroicons-bars-arrow-down-20-solid",sortButton:{icon:"i-heroicons-arrows-up-down-20-solid",trailing:!0,square:!0,color:"gray",variant:"ghost",class:"-m-1.5"}}},le=te(E.ui.strategy,E.ui.divider,ft),mt=R({components:{UIcon:fe,UAvatar:Se},inheritAttrs:!1,props:{label:{type:String,default:null},icon:{type:String,default:null},avatar:{type:Object,default:null},size:{type:String,default:()=>le.default.size,validator(e){return Object.keys(le.border.size.horizontal).includes(e)||Object.keys(le.border.size.vertical).includes(e)}},orientation:{type:String,default:"horizontal",validator:e=>["horizontal","vertical"].includes(e)},type:{type:String,default:"solid",validator:e=>["solid","dotted","dashed"].includes(e)},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},setup(e){const{ui:d,attrs:k}=ne("divider",D(e,"ui"),le),h=I(()=>ze(ie(d.value.wrapper.base,d.value.wrapper[e.orientation]),e.class)),r=I(()=>ie(d.value.container.base,d.value.container[e.orientation])),g=I(()=>ie(d.value.border.base,d.value.border[e.orientation],d.value.border.size[e.orientation][e.size],d.value.border.type[e.type]));return{ui:d,attrs:k,wrapperClass:h,containerClass:r,borderClass:g}}});function kt(e,d,k,h,r,g){const s=fe,n=Se;return c(),y("div",L({class:e.wrapperClass},e.attrs),[z("div",{class:C(e.borderClass)},null,2),e.label||e.icon||e.avatar||e.$slots.default?(c(),y(M,{key:0},[z("div",{class:C(e.containerClass)},[q(e.$slots,"default",{},()=>[e.label?(c(),y("span",{key:0,class:C(e.ui.label)},ee(e.label),3)):e.icon?(c(),N(s,{key:1,name:e.icon,class:C(e.ui.icon.base)},null,8,["name","class"])):e.avatar?(c(),N(n,L({key:2},{size:e.ui.avatar.size,...e.avatar},{class:e.ui.avatar.base}),null,16,["class"])):U("",!0)])],2),z("div",{class:C(e.borderClass)},null,2)],64)):U("",!0)],16)}const wt=ce(mt,[["render",kt]]),x=te(E.ui.strategy,E.ui.badge,dt),Ct=R({inheritAttrs:!1,props:{size:{type:String,default:()=>x.default.size,validator(e){return Object.keys(x.size).includes(e)}},color:{type:String,default:()=>x.default.color,validator(e){return[...E.ui.colors,...Object.keys(x.color)].includes(e)}},variant:{type:String,default:()=>x.default.variant,validator(e){return[...Object.keys(x.variant),...Object.values(x.color).flatMap(d=>Object.keys(d))].includes(e)}},label:{type:[String,Number],default:null},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},setup(e){const{ui:d,attrs:k}=ne("badge",D(e,"ui"),x),{size:h,rounded:r}=et({ui:d,props:e}),g=I(()=>{var n,m;const s=((m=(n=d.value.color)==null?void 0:n[e.color])==null?void 0:m[e.variant])||d.value.variant[e.variant];return ze(ie(d.value.base,d.value.font,r.value,d.value.size[h.value],s==null?void 0:s.replaceAll("{color}",e.color)),e.class)});return{attrs:k,badgeClass:g}}});function Bt(e,d,k,h,r,g){return c(),y("span",L({class:e.badgeClass},e.attrs),[q(e.$slots,"default",{},()=>[de(ee(e.label),1)])],16)}const $t=ce(Ct,[["render",Bt]]),ve=te(E.ui.strategy,E.ui.accordion,ct),Dt=te(E.ui.strategy,E.ui.button,Ie),Ot=R({components:{HDisclosure:bt,HDisclosureButton:yt,HDisclosurePanel:ht,UIcon:fe,UButton:se},inheritAttrs:!1,props:{items:{type:Array,default:()=>[]},defaultOpen:{type:Boolean,default:!1},openIcon:{type:String,default:()=>ve.default.openIcon},unmount:{type:Boolean,default:!1},closeIcon:{type:String,default:()=>ve.default.closeIcon},multiple:{type:Boolean,default:!1},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},emits:["open"],setup(e,{emit:d}){const{ui:k,attrs:h}=ne("accordion",D(e,"ui"),ve,D(e,"class")),r=I(()=>Dt),g=J([]),s=I(()=>g.value.map(({open:o})=>o));Pe(s,(o,p)=>{for(const u in o){const b=p[u],S=o[u];!b&&S&&d("open",u)}},{immediate:!0});function n(o,p){!e.items[o].closeOthers&&e.multiple||g.value.forEach(u=>{u.open&&u.close(p.target)})}function m(o,p){const u=o;u.style.height="0",u.offsetHeight,u.style.height=u.scrollHeight+"px",u.addEventListener("transitionend",p,{once:!0})}function O(o){const p=o;p.style.height=p.scrollHeight+"px",p.offsetHeight}function j(o){const p=o;p.style.height="auto"}function w(o,p){const u=o;u.style.height="0",u.addEventListener("transitionend",p,{once:!0})}return tt(()=>ot("$SZ7s8siktv")),{ui:k,uiButton:r,attrs:h,buttonRefs:g,closeOthers:n,omit:at,onEnter:m,onBeforeLeave:O,onAfterEnter:j,onLeave:w}}}),St={key:1};function zt(e,d,k,h,r,g){const s=fe,n=se,m=pe("HDisclosureButton"),O=pe("HDisclosurePanel"),j=pe("HDisclosure");return c(),y("div",{class:C(e.ui.wrapper)},[(c(!0),y(M,null,W(e.items,(w,o)=>(c(),N(j,{key:o,as:"div",class:C(e.ui.container),"default-open":e.defaultOpen||w.defaultOpen},{default:_(({open:p,close:u})=>[H(m,{ref_for:!0,ref:()=>e.buttonRefs[o]={open:p,close:u},as:"template",disabled:w.disabled,onClick:b=>e.closeOthers(o,b),onKeydown:[Ce(b=>e.closeOthers(o,b),["enter"]),Ce(b=>e.closeOthers(o,b),["space"])]},{default:_(()=>[q(e.$slots,"default",{item:w,index:o,open:p,close:u},()=>[H(n,L({ref_for:!0},{...e.omit(e.ui.default,["openIcon","closeIcon"]),...e.attrs,...e.omit(w,["slot","disabled","content","defaultOpen"])}),{trailing:_(()=>[H(s,{name:p&&e.closeIcon?e.closeIcon:e.openIcon,class:C([p&&!e.closeIcon?"-rotate-180":"",e.uiButton.icon.size[w.size||e.uiButton.default.size],e.ui.item.icon])},null,8,["name","class"])]),_:2},1040)])]),_:2},1032,["disabled","onClick","onKeydown"]),H(nt,L({ref_for:!0},e.ui.transition,{onEnter:e.onEnter,onAfterEnter:e.onAfterEnter,onBeforeLeave:e.onBeforeLeave,onLeave:e.onLeave}),{default:_(()=>[e.unmount?(c(),N(O,{key:0,class:C([e.ui.item.base,e.ui.item.size,e.ui.item.color,e.ui.item.padding]),unmount:""},{default:_(()=>[q(e.$slots,w.slot||"item",{item:w,index:o,open:p,close:u},()=>[de(ee(w.content),1)])]),_:2},1032,["class"])):st((c(),y("div",St,[H(O,{class:C([e.ui.item.base,e.ui.item.size,e.ui.item.color,e.ui.item.padding]),static:""},{default:_(()=>[q(e.$slots,w.slot||"item",{item:w,index:o,open:p,close:u},()=>[de(ee(w.content),1)])]),_:2},1032,["class"])],512)),[[rt,p]])]),_:2},1040,["onEnter","onAfterEnter","onBeforeLeave","onLeave"])]),_:2},1032,["class","default-open"]))),128))],2)}const It=ce(Ot,[["render",zt]]),K=te(E.ui.strategy,E.ui.pagination,pt),Pt=te(E.ui.strategy,E.ui.button,Ie),jt=R({components:{UButton:se},inheritAttrs:!1,props:{modelValue:{type:Number,required:!0},pageCount:{type:Number,default:10},total:{type:Number,required:!0},max:{type:Number,default:7,validate(e){return e>=5&&e<Number.MAX_VALUE}},disabled:{type:Boolean,default:!1},size:{type:String,default:()=>K.default.size,validator(e){return Object.keys(Pt.size).includes(e)}},activeButton:{type:Object,default:()=>K.default.activeButton},inactiveButton:{type:Object,default:()=>K.default.inactiveButton},showFirst:{type:Boolean,default:!1},showLast:{type:Boolean,default:!1},firstButton:{type:Object,default:()=>K.default.firstButton},lastButton:{type:Object,default:()=>K.default.lastButton},prevButton:{type:Object,default:()=>K.default.prevButton},nextButton:{type:Object,default:()=>K.default.nextButton},divider:{type:String,default:"…"},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},emits:["update:modelValue"],setup(e,{emit:d}){const{ui:k,attrs:h}=ne("pagination",D(e,"ui"),K,D(e,"class")),r=I({get(){return e.modelValue},set(u){d("update:modelValue",u)}}),g=I(()=>Array.from({length:Math.ceil(e.total/e.pageCount)},(u,b)=>b+1)),s=I(()=>{const u=g.value.length,b=r.value,S=Math.max(e.max,5),P=Math.floor((Math.min(S,u)-5)/2),G=b-P,F=b+P,X=G-1>1,re=F+1<u,f=[];if(u<=S){for(let A=1;A<=u;A++)f.push(A);return f}if(f.push(1),X&&f.push(e.divider),!re){const A=b+P+2-u;for(let T=b-P-A;T<=b-P-1;T++)f.push(T)}for(let A=Math.max(2,G);A<=Math.min(u,F);A++)f.push(A);if(!X){const A=1-(b-P-2);for(let T=b+P+1;T<=b+P+A;T++)f.push(T)}return re&&f.push(e.divider),F<u&&f.push(u),f.length>=3&&f[1]===e.divider&&f[2]===3&&(f[1]=2),f.length>=3&&f[f.length-2]===e.divider&&f[f.length-1]===f.length&&(f[f.length-2]=f.length-1),f}),n=I(()=>r.value>1),m=I(()=>r.value<g.value.length);function O(){n.value&&(r.value=1)}function j(){m.value&&(r.value=g.value.length)}function w(u){typeof u!="string"&&(r.value=u)}function o(){n.value&&r.value--}function p(){m.value&&r.value++}return{ui:k,attrs:h,currentPage:r,pages:g,displayedPages:s,canGoLastOrNext:m,canGoFirstOrPrev:n,onClickPrev:o,onClickNext:p,onClickPage:w,onClickFirst:O,onClickLast:j}}});function At(e,d,k,h,r,g){const s=se;return c(),y("div",L({class:e.ui.wrapper},e.attrs),[q(e.$slots,"first",{onClick:e.onClickFirst},()=>[e.firstButton&&e.showFirst?(c(),N(s,L({key:0,size:e.size,disabled:!e.canGoFirstOrPrev||e.disabled,class:[e.ui.base,e.ui.rounded]},{...e.ui.default.firstButton||{},...e.firstButton},{ui:{rounded:""},"aria-label":"First",onClick:e.onClickFirst}),null,16,["size","disabled","class","onClick"])):U("",!0)]),q(e.$slots,"prev",{onClick:e.onClickPrev},()=>[e.prevButton?(c(),N(s,L({key:0,size:e.size,disabled:!e.canGoFirstOrPrev||e.disabled,class:[e.ui.base,e.ui.rounded]},{...e.ui.default.prevButton||{},...e.prevButton},{ui:{rounded:""},"aria-label":"Prev",onClick:e.onClickPrev}),null,16,["size","disabled","class","onClick"])):U("",!0)]),(c(!0),y(M,null,W(e.displayedPages,(n,m)=>(c(),N(s,L({key:`${n}-${m}`,size:e.size,disabled:e.disabled,label:`${n}`,ref_for:!0},n===e.currentPage?{...e.ui.default.activeButton||{},...e.activeButton}:{...e.ui.default.inactiveButton||{},...e.inactiveButton},{class:[{"pointer-events-none":typeof n=="string","z-[1]":n===e.currentPage},e.ui.base,e.ui.rounded],ui:{rounded:""},onClick:()=>e.onClickPage(n)}),null,16,["size","disabled","label","class","onClick"]))),128)),q(e.$slots,"next",{onClick:e.onClickNext},()=>[e.nextButton?(c(),N(s,L({key:0,size:e.size,disabled:!e.canGoLastOrNext||e.disabled,class:[e.ui.base,e.ui.rounded]},{...e.ui.default.nextButton||{},...e.nextButton},{ui:{rounded:""},"aria-label":"Next",onClick:e.onClickNext}),null,16,["size","disabled","class","onClick"])):U("",!0)]),q(e.$slots,"last",{onClick:e.onClickLast},()=>[e.lastButton&&e.showLast?(c(),N(s,L({key:0,size:e.size,disabled:!e.canGoLastOrNext||e.disabled,class:[e.ui.base,e.ui.rounded]},{...e.ui.default.lastButton||{},...e.lastButton},{ui:{rounded:""},"aria-label":"Last",onClick:e.onClickLast}),null,16,["size","disabled","class","onClick"])):U("",!0)])],16)}const Lt=ce(jt,[["render",At]]),Et={key:0,class:"rounded-lg border"},Ut={class:"max-h-36 overflow-auto"},Ft=["data-filter-key","data-filter-value"],Mt=["calss"],Ht=["ui"],Nt=["innerHTML"],Vt=["innerHTML"],Tt=["calss"],_t=["id","calss"],qt=["innerHTML","id"],Xt=R({__name:"sh-dynamic-table",props:lt({dataUrl:{default:""},dataField:{default:()=>{}},columns:{default:()=>[]},ui:{default:()=>({})},header:{default:""},footer:{default:""},perPage:{default:Q.default.perPage},transformRawData:{default:()=>null},class:{default:()=>{}}},{page:{type:Number,default:1},pageModifiers:{},q:{type:String,default:""},qModifiers:{}}),emits:["update:page","update:q"],async setup(e){let d,k;const{$filterDDFObjects:h,$filterCommonObjects:r,$filterOmaEnablers:g}=it();Q.perPage;const s=e,{ui:n,attrs:m}=ne("sh-dynamic-table",D(s,"ui"),Q,D(s,"class")),O=async()=>{try{u.value=[],p.value=[],Y();let t=await $fetch(s.dataUrl);return s.transformRawData&&(s.transformRawData==="filterDDFObjects"?t=h(t):s.transformRawData==="filterCommonObjects"?t=r(t):s.transformRawData==="filterOmaEnablers"&&(t=g(t))),Y(),s.dataField?j(t[s.dataField]):j(t)}catch(t){return console.log(t),[]}},j=t=>{var a;for(let l=0;l<t.length;l++)(a=s.columns)==null||a.forEach(i=>{if(i.name&&i.formatColumValue&&i.formatColumValue==="DY"&&t[l][i.name])try{let B=new Date(t[l][i.name]);B=B.getFullYear().toString(),t[l][i.name]=B}catch(B){console.log(B)}});return t},w=async()=>{p.value=await O(),Y(),o()},o=()=>{let t=A(p.value);t=T(t),t=Le(t),X.value=He(t),G.value=(t==null?void 0:t.length)>0?t.length:0;let a=b.value*P.value-P.value,l=a+P.value>G.value?G.value:a+P.value;u.value=[],Y();for(let i=a;i<l;i++)u.value.push(t[i]);Y()},p=D([]),u=D([]),b=Be(e,"page"),S=Be(e,"q"),P=D(s.perPage),G=D(0),F=D([]),X=D([]),re=D([{label:"Quick Filters",icon:"i-heroicons-eye-dropper",slot:"quick-filters",defaultOpen:!0}]),f=D({}),A=t=>{const a=s.columns.filter(l=>l.query).map(l=>l.name);return S.value.length>0?t.filter(l=>{var B;let i=!1;for(name of a)if(name==="Undefined"){if(S.value===""){i=!0;break}}else if((B=l[name])!=null&&B.toString().toLowerCase().includes(S.value.toLowerCase())){i=!0;break}return i}):t},T=t=>F.value.length>0?F.value.reduce((a,l)=>(a.length>0?a=a.filter(i=>i[l.name]&&l.value?i[l.name].toString()===l.value.toString():!1):a=t.filter(i=>i[l.name]&&l.value?i[l.name].toString()===l.value.toString():!1),a),[]):t,Le=t=>Object.keys(f).length>0&&t&&typeof t.sort=="function"?t.sort((a,l)=>_e(a[f.value.name],l[f.value.name],f.value.direction)):t,Ee=(t,a)=>F.value.filter(i=>i.name===t&&i.value===a).length>0,he=t=>t!=null&&t.title?t.title:"",Ue=(t,a)=>{let l="";if(a.type==="url"){const i=t[a==null?void 0:a.name]?t[a.name]:"";l=`<a href="${t[a==null?void 0:a.typeData]?t[a.typeData[0]]:""}" target="_blank">${i}</a>`}else if(a.type==="subs")l=t[a==null?void 0:a.typeData]?t[a.typeData]:"";else{const i=t[a.name];l=(i==null?void 0:i.length)>0?i.toString():""}return l},Fe=t=>{var a;return((a=f.value)==null?void 0:a.name)===t.name?f.value.direction==="asc"?Q.default.sortAscIcon:Q.default.sortDescIcon:Q.default.sortButton.icon},Me=()=>{const t=s.columns.reduce((a,l)=>l.filter?a+1:a,0);return t<2?"grid grid-cols-1 gap-4 min-h-48":t<3?"grid grid-cols-2 gap-2 min-h-48":t<4?"grid grid-cols-3 gap-1 min-h-48":t<5?"grid grid-cols-4 gap-1 min-h-48":"grid grid-cols-5 gap-1 min-h-48"},He=t=>{const a={};return s.columns.forEach(l=>{l.filter&&(a[l.name]={})}),t&&typeof t.forEach=="function"&&t.forEach(l=>{s.columns.forEach(i=>{if(Object.keys(l).includes(i.name)&&Object.keys(a).includes(i.name)){const B=l[i.name]?l[i.name]:"Undefined";a[i.name][B]=a[i.name][B]?a[i.name][B]+1:1}})}),a},Ne=t=>{o()},Ve=t=>{b.value=1,S.value=S.value.trim(),o()},Te=t=>{const a=t.currentTarget.getAttribute("data-filter-key"),l=t.currentTarget.getAttribute("data-filter-value"),i=F.value.filter(B=>B.name===a&&B.value===l);i.length>0?F.value=F.value.filter(B=>B!=i[0]):F.value.push({name:a,value:l}),b.value=1,S.value="",o()},_e=(t,a,l)=>(t==null&&(t=""),a==null&&(a=""),t===a?0:l==="asc"?t<a?-1:1:t>a?-1:1),qe=t=>{f.value.name===t.name?f.value.direction=f.value.direction==="asc"?"desc":"asc":f.value={name:t.name,direction:"asc"},o()};return be(()=>{w()}),Pe(p,(t,a)=>{o(),Y()},{immediate:!0}),[d,k]=ut(()=>w()),await d,k(),(t,a)=>{const l=Qe,i=Je,B=wt,xe=$t,Ke=It,Re=se,Ge=Lt;return c(),y("div",L({class:[v(n).wrapper,s.class]},v(m)),[s.header?(c(),y("div",{key:0,class:C(v(n).header)},[s.header?(c(),N(l,{key:0,value:s.header},null,8,["value"])):U("",!0)],2)):U("",!0),z("div",{class:C(v(n).base)},[z("div",{class:C(v(n).search)},[H(i,{modelValue:S.value,"onUpdate:modelValue":a[0]||(a[0]=$=>S.value=$),type:"text",onKeyup:Ve,placeholder:"type a token to search for"},null,8,["modelValue"])],2),z("div",{class:C(v(n).filter)},[H(Ke,{items:v(re),color:"primary",variant:"solid",size:"sm",class:"not-prose"},{"quick-filters":_(()=>[z("div",{class:C(Me())},[(c(!0),y(M,null,W(s.columns,$=>(c(),y(M,null,[$.filter?(c(),y("div",Et,[H(B,{label:$.title,class:"py-4"},null,8,["label"]),z("ul",Ut,[(c(!0),y(M,null,W(Object.keys(v(X)[$.name]),V=>(c(),y("li",{"data-filter-key":$.name,"data-filter-value":V,onClick:Te,class:C(["list-none flex justify-between p-2 hover:cursor-pointer",[Ee($.name,V)?v(n).tr.selected:"",v(n).tr.active]])},[z("span",null,ee(V),1),H(xe,null,{default:_(()=>[de(ee(v(X)[$.name][V]),1)]),_:2},1024)],10,Ft))),256))])])):U("",!0)],64))),256))],2)]),_:1},8,["items"])],2),z("table",{class:C(v(n).table)},[z("thead",{calss:v(n).thead},[z("tr",{ui:v(n)},[(c(!0),y(M,null,W(s.columns,$=>(c(),y(M,null,[$.hide!==!0?(c(),y("th",{key:0,class:C([v(n).th.base,v(n).th.padding,v(n).th.color,v(n).th.font,v(n).th.size])},[$.sortable?(c(),N(Re,L({key:0,ref_for:!0},{...v(Q).default.sortButton},{icon:Fe($),onClick:V=>qe($)}),{default:_(()=>[z("span",{innerHTML:he($),class:"not-prose"},null,8,Nt)]),_:2},1040,["icon","onClick"])):(c(),y("span",{key:1,innerHTML:he($),class:"not-prose"},null,8,Vt))],2)):U("",!0)],64))),256))],8,Ht)],8,Mt),z("tbody",{calss:v(n).tbody},[(c(!0),y(M,null,W(v(u),($,V)=>(c(),y("tr",{key:`${V}-${Date.now()}`,id:`${V}-${Date.now()}`,calss:v(n).tr.base},[(c(!0),y(M,null,W(s.columns,(oe,xt)=>(c(),y(M,{key:`${oe.name}-${V}-${Date.now()}`},[oe.hide?U("",!0):(c(),y("td",{key:0,innerHTML:Ue($,oe),id:`${oe.name}-${V}-${Date.now()}`,class:C([[v(n).td.base,v(n).td.padding,v(n).td.color,v(n).td.font,v(n).td.size],"not-prose"])},null,10,qt))],64))),128))],8,_t))),128))],8,Tt)],2),z("div",{class:C(v(n).pagination)},[H(Ge,{modelValue:b.value,"onUpdate:modelValue":a[1]||(a[1]=$=>b.value=$),"page-count":v(P),total:v(G),max:10,onClick:Ne,"show-last":"","show-first":""},null,8,["modelValue","page-count","total"])],2)],2),s.footer?(c(),y("div",{key:1,class:C(v(n).footer)},[H(l,{value:s.footer},null,8,["value"])],2)):U("",!0)],16)}}});export{Xt as default};