import{g as r,j as p,k as e,i as h,o as u,c as m,a as g,n as f,l as o,D as v}from"./17SZZGZI.js";import{r as z}from"./B_hFeTE4.js";import"./BneCoJRQ.js";const s={wrapper:"bg-golden/[0.2] dark:bg-neutral-800 shadow-md rounded-2xl p-7",default:{size:"L",gap:"gap-4"}},_=r({__name:"sh-two-columns",props:{ui:{default:()=>({})},description:{default:""},size:{default:()=>s.default.size},gap:{default:()=>s.default.gap},class:{default:()=>{}}},setup(n){const c={"2XS":"md:grid-cols-10 [&>*:nth-child(odd)]:col-span-1 [&>*:nth-child(even)]:col-span-9",XS:"md:grid-cols-5 [&>*:nth-child(odd)]:col-span-1 [&>*:nth-child(even)]:col-span-4",S:"md:grid-cols-4 [&>*:nth-child(odd)]:col-span-1 [&>*:nth-child(even)]:col-span-3",M:"md:grid-cols-3 [&>*:nth-child(odd)]:col-span-1 [&>*:nth-child(even)]:col-span-2",L:"md:grid-cols-2 [&>*:nth-child(odd)]:col-span-1 [&>*:nth-child(even)]:col-span-1",XL:"md:grid-cols-3 [&>*:nth-child(odd)]:col-span-2 [&>*:nth-child(even)]:col-span-1","2XL":"md:grid-cols-4 [&>*:nth-child(odd)]:col-span-3 [&>*:nth-child(even)]:col-span-1","3XL":"md:grid-cols-5 [&>*:nth-child(odd)]:col-span-4 [&>*:nth-child(even)]:col-span-1","4XL":"md:grid-cols-10 [&>*:nth-child(odd)]:col-span-9 [&>*:nth-child(even)]:col-span-1"},d=n,{ui:a,attrs:t}=p("sh-two-columns",e(d,"ui"),s,e(d,"class")),i=h(()=>{const l=d.size!=null?d.size:s.default.size;return["flex flex-col md:grid",c[l],d.gap].join(" ")});return(l,L)=>(u(),m("div",v({class:o(a).wrapper},o(t)),[g("div",{class:f(o(i))},[z(l.$slots,"default",{unwrap:""})],2)],16))}});export{_ as default};