import{g as D,h as G,i as T,j as q,k as E,o as s,c as a,a as i,l as e,F as U,r as j,n as b,b as h,w as N,t as C,m as u,e as Z,q as at,s as V,_ as tt,v as K,x as et,y as ot,z as Y,A as nt,B as L,C as O,D as M,d as z,E as R,G as J,H,I as st,J as rt,K as lt,L as it,M as ct,N as P,O as dt}from"./B74-zNAC.js";import ut from"./DvPp9EkI.js";import"./DK508dXZ.js";import"./DdEflKYf.js";import"./C-v3KzvZ.js";const pt={wrapper:"w-full relative overflow-hidden",inner:"w-0 flex-1",title:"text-sm font-medium",description:"mt-1 text-sm leading-4 opacity-90",actions:"flex items-center gap-2 mt-3 flex-shrink-0",shadow:"",rounded:"rounded-lg",padding:"p-4",gap:"gap-3",icon:{base:"flex-shrink-0 w-5 h-5"},avatar:{base:"flex-shrink-0 self-center",size:"md"},color:{white:{solid:"text-gray-900 dark:text-white bg-white dark:bg-gray-900 ring-1 ring-gray-200 dark:ring-gray-800"}},variant:{solid:"bg-{color}-500 dark:bg-{color}-400 text-white dark:text-gray-900",outline:"text-{color}-500 dark:text-{color}-400 ring-1 ring-inset ring-{color}-500 dark:ring-{color}-400",soft:"bg-{color}-50 dark:bg-{color}-400 dark:bg-opacity-10 text-{color}-500 dark:text-{color}-400",subtle:"bg-{color}-50 dark:bg-{color}-400 dark:bg-opacity-10 text-{color}-500 dark:text-{color}-400 ring-1 ring-inset ring-{color}-500 dark:ring-{color}-400 ring-opacity-25 dark:ring-opacity-25"},default:{color:"white",variant:"solid",icon:null,closeButton:null,actionButton:{size:"xs",color:"primary",variant:"link"}}},mt={class:"not-prose text-wrap"},ht={key:0,class:""},gt={class:""},ft=D({__name:"side-menu",props:{ui:{default:()=>({})},class:{default:void 0},items:{default:void 0}},setup(t){const r=G(),p={wrapper:"",shadow:"hover:bg-primary-200/[0.7] dark:hover:bg-primary-600",active:"block border-l-4 dark:border-oma-blue-200 border-oma-blue-400 bg-primary-200 dark:bg-primary-600/[0.7]",normal:"block border-l-2 dark:border-neutral-700 border-gray-100-ml-px w-full",link:{active:"text-oma-blue-500 dark:text-oma-blue-200 font-bold",normal:"w-full block text-black dark:text-golden"}},x=(d,m,B,y)=>{d.length>0&&m<4&&d.forEach(n=>{var k,c;B!=n._path&&y.push({to:n._path,title:n.title,depth:m,children:((k=n.children)==null?void 0:k.length)>0}),((c=n.children)==null?void 0:c.length)>0&&x(n.children,m+1,n._path,y)})},A=T(()=>{var m;const d=[];return((m=l.items)==null?void 0:m.length)>0&&x(l.items,0,null,d),d}),l=t,{ui:o,attrs:w}=q("SideMenu",E(l,"ui"),p,E(l,"class"),!0),$=d=>r.path===d,g=["pl-2","pl-4","pl-8","pl-12"],v=d=>g[d];return(d,m)=>{const B=Z;return s(),a("div",{class:b(e(o).wrapper)},[i("aside",mt,[e(A)?(s(),a("nav",ht,[i("ul",gt,[(s(!0),a(U,null,j(e(A),(y,n)=>(s(),a("li",{key:n},[i("div",{class:b([e(o).shadow,$(y.to)?e(o).active:e(o).normal])},[h(B,{to:y.to,class:b([$(y.to)?e(o).link.active:e(o).link.normal,"hover:text-black dark:hover:text-oma-blue-100"])},{default:N(()=>[i("span",{class:b([v(y.depth),"text-nowrap w-full dark:hover:text-oma-blue-100"])},C(y.title),3)]),_:2},1032,["to","class"])],2)]))),128))])])):u("",!0)])],2)}}}),S=at(V.ui.strategy,V.ui.alert,pt),yt=D({components:{UIcon:K,UAvatar:et,UButton:ot},inheritAttrs:!1,props:{title:{type:String,default:null},description:{type:String,default:null},icon:{type:String,default:()=>S.default.icon},avatar:{type:Object,default:null},closeButton:{type:Object,default:()=>S.default.closeButton},actions:{type:Array,default:()=>[]},color:{type:String,default:()=>S.default.color,validator(t){return[...V.ui.colors,...Object.keys(S.color)].includes(t)}},variant:{type:String,default:()=>S.default.variant,validator(t){return[...Object.keys(S.variant),...Object.values(S.color).flatMap(r=>Object.keys(r))].includes(t)}},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},emits:["close"],setup(t){const{ui:r,attrs:p}=q("alert",E(t,"ui"),S),x=T(()=>{var o,w;const l=((w=(o=r.value.color)==null?void 0:o[t.color])==null?void 0:w[t.variant])||r.value.variant[t.variant];return Y(nt(r.value.wrapper,r.value.rounded,r.value.shadow,r.value.padding,l==null?void 0:l.replaceAll("{color}",t.color)),t.class)});function A(l){l.click&&l.click()}return{ui:r,attrs:p,alertClass:x,onAction:A,twMerge:Y}}});function kt(t,r,p,x,A,l){const o=K,w=et,$=ot;return s(),a("div",M({class:t.alertClass},t.attrs),[i("div",{class:b(["flex",[t.ui.gap,{"items-start":t.description||t.$slots.description,"items-center":!t.description&&!t.$slots.description}]])},[L(t.$slots,"icon",{icon:t.icon},()=>[t.icon?(s(),O(o,{key:0,name:t.icon,ui:t.ui.icon.base},null,8,["name","ui"])):u("",!0)]),L(t.$slots,"avatar",{avatar:t.avatar},()=>[t.avatar?(s(),O(w,M({key:0},{size:t.ui.avatar.size,...t.avatar},{class:t.ui.avatar.base}),null,16,["class"])):u("",!0)]),i("div",{class:b(t.ui.inner)},[t.title||t.$slots.title?(s(),a("p",{key:0,class:b(t.ui.title)},[L(t.$slots,"title",{title:t.title},()=>[z(C(t.title),1)])],2)):u("",!0),t.description||t.$slots.description?(s(),a("p",{key:1,class:b(t.twMerge(t.ui.description,!(t.title&&t.$slots.title)&&"mt-0 leading-5"))},[L(t.$slots,"description",{description:t.description},()=>[z(C(t.description),1)])],2)):u("",!0),(t.description||t.$slots.description)&&t.actions.length?(s(),a("div",{key:2,class:b(t.ui.actions)},[(s(!0),a(U,null,j(t.actions,(g,v)=>(s(),O($,M({key:v,ref_for:!0},{...t.ui.default.actionButton||{},...g},{onClick:R(d=>t.onAction(g),["stop"])}),null,16,["onClick"]))),128))],2)):u("",!0)],2),t.closeButton||!t.description&&!t.$slots.description&&t.actions.length?(s(),a("div",{key:0,class:b(t.twMerge(t.ui.actions,"mt-0"))},[!t.description&&!t.$slots.description&&t.actions.length?(s(!0),a(U,{key:0},j(t.actions,(g,v)=>(s(),O($,M({key:v,ref_for:!0},{...t.ui.default.actionButton||{},...g},{onClick:R(d=>t.onAction(g),["stop"])}),null,16,["onClick"]))),128)):u("",!0),t.closeButton?(s(),O($,M({key:1,"aria-label":"Close"},{...t.ui.default.closeButton||{},...t.closeButton},{onClick:r[0]||(r[0]=R(g=>t.$emit("close"),["stop"]))}),null,16)):u("",!0)],2)):u("",!0)],2)],16)}const _t=tt(yt,[["render",kt]]),bt={key:0,class:""},vt=i("button",{class:"flex sticky top-0 backdrop-blur items-center gap-1.5 lg:cursor-text lg:select-text w-full group"},[i("span",{class:"font-semibold text-sm/6 truncate dark:text-white/80"},[i("b",{class:"dark:text-golden"},"Table of Contents")])],-1),xt={class:"space-y-1 lg:block -ml-2"},wt={key:0,class:"space-y-1 hidden lg:block"},$t=i("hr",{class:"w-1/2 mx-auto"},null,-1),Ct=D({__name:"toc",props:{ui:{default:()=>({})}},async setup(t){let r,p;const x={shadow:"hover:bg-primary-200/[0.7] dark:hover:bg-primary-600 dark:hover:text-oma-blue-100",active:"bg-primary-200 dark:bg-primary-600 p-2",normal:"w-full p-2",link:{active:"text-oma-blue-500 dark:text-oma-blue-200 font-bold",normal:"w-full block text-black dark:text-golden hover:text-black dark:hover:text-golden"}},A=t,{ui:l}=q("toc",E(A,"ui"),x),o=G(),{data:w}=([r,p]=J(()=>H(()=>st(o.path).findOne(),"$mRaHnBkTJj")),r=await r,p(),r),$=rt(null);lt(()=>{const v=new IntersectionObserver(d=>{d.forEach(m=>{m.isIntersecting&&($.value=m.target.id)})},{rootMargin:"-10%"});w.value.body.toc.links.forEach(d=>{const m=document.getElementById(d.id);m&&v.observe(m),d.children&&d.children.forEach(B=>{const y=document.getElementById(B.id);y&&v.observe(y)})})});const g=v=>$.value===v;return(v,d)=>{var B,y,n,k;const m=it;return((k=(n=(y=(B=e(w))==null?void 0:B.body)==null?void 0:y.toc)==null?void 0:n.links)==null?void 0:k.length)>0?(s(),a("div",bt,[i("nav",null,[vt,i("ul",xt,[(s(!0),a(U,null,j(e(w).body.toc.links,(c,f)=>{var _;return s(),a("li",{key:f,class:b(["space-y-1 lg:block",[g(c.id)?e(l).active:e(l).normal]])},[h(m,{id:`toc-${c.id}`,to:`${e(w)._path}#${c.id}`,class:b([[e(l).shadow,g(c.id)?e(l).link.active:e(l).link.normal],"not-prose pl-1 pr-1 text-black dark:text-golden"])},{default:N(()=>[z(C(c.text),1)]),_:2},1032,["id","to","class"]),((_=c.children)==null?void 0:_.length)>0?(s(),a("ul",wt,[(s(!0),a(U,null,j(c.children,(I,F)=>(s(),a("li",{key:F,class:b(["space-y-1 lg:block",[g(I.id)?e(l).active:e(l).normal]])},[h(m,{id:`toc-${I.id}`,to:`${e(w)._path}#${I.id}`,class:b([[e(l).shadow,g(I.id)?e(l).link.active:e(l).link.normal],"not-prose pl-1 pr-1 text-black dark:text-golden"])},{default:N(()=>[z(C(I.text),1)]),_:2},1032,["id","to","class"])],2))),128))])):u("",!0)],2)}),128))])]),$t])):u("",!0)}}}),Bt={},At={class:"w-full group"},It=i("p",{class:"dark:text-golden"},[i("b",null,"Useful links")],-1),St={class:""};function Nt(t,r){const p=K,x=Z;return s(),a("div",At,[It,i("ul",St,[h(x,{to:"/newsletter",class:"not-prose flex mb-3 text-black dark:text-golden"},{default:N(()=>[h(p,{name:"iconamoon:news-thin",dynamic:"",class:"mr-2 text-2xl"}),z(" Newsletter "),h(p,{name:"ph:arrow-up-right",dynamic:"",class:"ml-1"})]),_:1}),h(x,{to:"/faq",class:"not-prose flex mb-3 text-black dark:text-golden"},{default:N(()=>[h(p,{name:"icons8:question-mark",dynamic:"",class:"mr-2 text-2xl"}),z(" F.A.Q "),h(p,{name:"ph:arrow-up-right",dynamic:"",class:"ml-1"})]),_:1}),h(x,{to:"/contact-us",class:"not-prose flex mb-3 text-black dark:text-golden"},{default:N(()=>[h(p,{name:"streamline:send-email",dynamic:"",class:"mr-3 mt-1 text-xl"}),z(" Contact Us "),h(p,{name:"ph:arrow-up-right",dynamic:"",class:"ml-1"})]),_:1})])])}const zt=tt(Bt,[["render",Nt]]),Ot={class:""},Ut={class:"prose w-fit max-w-full mt-16"},jt={key:0,class:"grid grid-cols-12 relative"},Mt={class:"col-start-1 col-span-2 hidden lg:block overflow-auto h-screen sticky top-48"},Et={class:""},Lt={class:"col-start-12 col-span-1 hidden lg:block sticky top-48 h-screen overflow-auto sm:-ml-16"},Tt={key:1,class:"w-screen -mt-16 xl:mx-32 2xl:mx-64"},Dt={class:"container flex mx-auto"},qt=["src"],Ft={class:"text-center"},Rt={class:"text-oma-300 text-start text-4xl text-primary dark:text-primary"},Pt={key:0,class:"text-start text-3xl text-primary-700 dark:text-primary-700"},Vt={key:1,class:"text-center text-2xl"},Jt={class:"flex items-center justify-center"},Ht={key:0,class:"mr-2 text-2xl"},Gt={key:1,class:"text-end text-gray-500 dark:text-gray-400 text-2xl"},Kt={key:2,class:"mx-2 text-2xl"},Qt={key:3,class:"text-start text-gray-500 text-2xl dark:text-gray-400"},Wt=i("br",null,null,-1),Xt={key:2,class:"grid grid-cols-12"},se=D({__name:"[...slug]",props:{ui:{default:()=>({})}},async setup(t){let r,p;const x={shadow:"hover:bg-primary-500 focus:bg-primary-200/[0.6] hover:focus:bg-primary-100 dark:hover:bg-neutral-500 dark:focus:bg-primary-600[0.6] dark:hover:focus:bg-neutral-500 rounded-lg"};q("[...slug]",E(t,"ui"),x);const l=G(),{data:o}=([r,p]=J(()=>H(`docs-${l.path}`,()=>st(l.path).findOne())),r=await r,p(),r),{data:w}=([r,p]=J(()=>H("navigation",()=>dt())),r=await r,p(),r),$=ct().main,g=l.path.split("/").length,v=g-4>0?g-4:0,d=T(()=>{var n,k,c;return(o==null?void 0:o.value.layout)==="doc"&&((c=(k=(n=o.value.body)==null?void 0:n.toc)==null?void 0:k.links)==null?void 0:c.length)>0?"mr-64":""}),m=(n,k)=>{const c=n.split("/"),f=k.split("/");if(c.length<f.length)return!1;for(let _=0;_<f.length;_++)if(c[_]!==f[_])return!1;return!0},B=(n,k)=>(n==null?void 0:n.length)>0?n.reduce((f,_)=>(m(k,_._path)&&f.push(_),f),[]):n,y=T(()=>{var k;let n=B(w.value,o.value._path);if(v>0){let c=v;for(;c>0;){let f=[];c-=1,((k=n[0].children)==null?void 0:k.length)>0&&(f=B(n[0].children,o.value._path),f=f.filter(_=>_._path.split("/").length>=g-1),n=f.length>0?f:n)}}return n});return(n,k)=>{var Q,W;const c=ft,f=_t,_=ut,I=Ct,F=zt;return s(),a("main",Ot,[i("article",Ut,[((Q=e(o))==null?void 0:Q.layout)==="doc"?(s(),a("div",jt,[i("div",Mt,[h(c,{items:e(y),class:"overflow-auto"},null,8,["items"])]),i("section",{class:b([e(d),"col-start-1 col-span-12 lg:col-start-3 lg:col-span-9 lg:ml-9 lg:mr-24 w-full lg:w-fit overflow-auto"])},[i("h1",Et,C(e(o).title),1),e(o).body?(s(),O(_,{key:0,value:e(o),style:P({fontSize:e($).font.size}),class:"par mt-8 pb-10"},{"not-found":N(()=>[h(f,{title:"File not found!",description:"The requested resource cannot be found.",icon:"i-heroicons-exclamation-triangle"})]),_:1},8,["value","style"])):u("",!0)],2),i("div",Lt,[h(I,{class:"mb-4"}),h(F,{class:""})])])):((W=e(o))==null?void 0:W.layout)==="articles"?(s(),a("div",Tt,[i("div",Dt,[e(o).urlImage?(s(),a("img",{key:0,src:e(o).urlImage,alt:"Image",class:"mx-auto object-contain h-fit w-screen"},null,8,qt)):u("",!0)]),i("div",Ft,[i("h2",Rt,C(e(o).title),1),e(o).subtitle?(s(),a("h3",Pt,C(e(o).subtitle),1)):u("",!0),e(o).tags&&e(o).tags.length?(s(),a("div",Vt,[z(" Tags: "),(s(!0),a(U,null,j(e(o).tags,X=>(s(),a("span",{key:X,class:"border rounded-3xl p-2 mx-2 text-white bg-primary border-primary-600 dark:bg-primary dark:border-primary-400 text-xl"},C(X),1))),128))])):u("",!0),i("div",Jt,[e(o).rightLabel?(s(),a("p",Ht,C("By:"))):u("",!0),e(o).rightLabel?(s(),a("p",Gt,C(e(o).rightLabel),1)):u("",!0),e(o).leftLabel?(s(),a("p",Kt,C("|"))):u("",!0),e(o).leftLabel?(s(),a("p",Qt,C(e(o).leftLabel),1)):u("",!0)]),e(o).body?(s(),O(_,{key:2,value:e(o),style:P({fontSize:e($).font.size}),class:"par text-left dark:text-white"},null,8,["value","style"])):u("",!0),Wt])])):(s(),a("div",Xt,[h(_,{value:e(o),style:P({fontSize:e($).font.size}),class:"col-start-1 col-span-12 w-full lg:w-fit par mt-8 pb-24"},{"not-found":N(()=>[h(f,{title:"File not found!",description:"The requested resource cannot be found.",icon:"i-heroicons-exclamation-triangle"})]),_:1},8,["value","style"])]))])])}}});export{se as default};