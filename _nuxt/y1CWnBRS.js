import{av as h,g as y,j as _,k as w,J as C,o,c as p,b as k,w as I,a as f,n,l as r,m as i,C as c,v as B,e as N}from"./17SZZGZI.js";import{_ as T}from"./C2kGb1Y_.js";const j={wrapper:"container flex flex-col rounded-2xl p-4 mx-auto justify-items-center text-center hover:shadow-lg hover:scale-105 duration-300 border-2 bg-golden/[0.4] border-golden/[0.6] hover:border-golden dark:bg-neutral-700 dark:border-neutral-600 dark:hover:border-golden",image:"relative mt-4 w-full h-auto flex shrink mx-auto",icon:"relative mt-4 w-10 h-10 flex shrink-0 mx-auto text-oma-blue-900/[0.7] hover:text-oma-blue-600 dark:text-oma-blue-200",title:"title text-xl font-medium text-black dark:text-white break-words",subtitle:"subtitle text-base font-thin dark:font-thin text-neutral-500 dark:text-gray-400 mt-3 break-words",text:"text font-light text-md text-gray-400 dark:text-gray-600 mt-7 break-words",default:{}};function V(){const l=h("notifications",()=>[]);function u(s){const a={id:new Date().getTime().toString(),...s};return l.value.findIndex(d=>d.id===a.id)===-1&&l.value.push(a),a}function e(s){l.value=l.value.filter(a=>a.id!==s)}return{add:u,remove:e}}const $={class:"relative group"},D=["src","alt"],S={class:"relative"},U={key:2,class:"absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:cursor-pointer transition-opacity duration-300"},J=y({__name:"sh-micro-card",props:{description:{default:""},urlWrapper:{default:""},target:{default:"_self"},urlImage:{default:""},altImage:{default:""},icon:{default:""},altIcon:{default:""},title:{default:""},subtitle:{default:""},text:{default:""},clipboard:{type:Boolean,default:!1},ui:{default:()=>({})}},setup(l){const u=l,{ui:e}=_("sh-micro-card",w(u,"ui"),j),s=V(),a=C(u.title),b=()=>{navigator.clipboard.writeText(a.value)};function d(){alert("Currently copied: "+a.value)}return(t,v)=>{const g=B,m=T,x=N;return o(),p("div",{class:n([r(e).wrapper])},[k(x,{to:t.urlWrapper,class:"not-prose",target:t.target},{default:I(()=>[f("div",$,[t.urlImage?(o(),p("img",{key:0,src:t.urlImage,class:n(r(e).image),alt:t.altImage},null,10,D)):i("",!0),t.icon?(o(),c(g,{key:1,name:t.icon,alt:t.altIcon,dynamic:"",class:n(r(e).icon)},null,8,["name","alt","class"])):i("",!0),f("div",S,[t.title?(o(),c(m,{key:0,class:n([r(e).title,"transition-opacity duration-300",{"group-hover:text-transparent":t.clipboard===!0}]),value:t.title},null,8,["class","value"])):i("",!0),t.subtitle?(o(),c(m,{key:1,class:n([r(e).subtitle,"transition-opacity duration-300"]),value:t.subtitle},null,8,["class","value"])):i("",!0),t.text?(o(),c(m,{key:2,class:n([r(e).text,"transition-opacity duration-300"]),value:t.text},null,8,["class","value"])):i("",!0)]),t.clipboard?(o(),p("div",U,[f("button",{onClick:v[0]||(v[0]=W=>r(s).add({title:"Copied! Click here to check clipboard!",click:d}))},[k(g,{onClick:b,name:"i-line-md:clipboard-arrow",alt:"cliboard-icon",dynamic:"",class:"text-5xl text-black"})])])):i("",!0)])]),_:1},8,["to","target"])],2)}}});export{J as _};