import{u,r as l,j as t,P as m,l as p,B as _}from"./index-Dsy7ntS-.js";import{u as d,I as x}from"./index-DuCGrRJN.js";import{P as g}from"./index-BWzsBEHS.js";import{u as f,F as j}from"./index-BXcqdI-Q.js";import"./index.esm-xnpyvmlM.js";const y="_locations_18s2f_1",P="_locations__button_18s2f_7",a={locations:y,locations__button:P},F=()=>{const o=u(),{useAxiosGet:n}=d(),{getSearchData:r}=f(),[i,c]=l.useState(1),{data:e}=n("location",i,r());return t.jsxs("div",{className:a.locations,children:[t.jsx(m,{}),t.jsx(j,{name:!0,type:!0,dimension:!0}),t.jsx(g,{display:"grid",children:e==null?void 0:e.map(s=>t.jsx(x,{name:s.name,type:"type"in s?s.type:"",onClick:()=>o(`${p.detail}/${s.id}`,{state:{id:s.id,type:"location"}})},s.id))}),t.jsx(_,{size:"xl",className:a.locations__button,onClick:()=>c(s=>s+1),children:"More"})]})};export{F as default};
