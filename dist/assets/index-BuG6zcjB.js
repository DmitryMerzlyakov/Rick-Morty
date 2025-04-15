import{u as m,l as w,j as e,C as y,c as v,B as x,a as N,r as h,A as I}from"./index-Dhj-wekk.js";import{u as D,T as _,S as o,I as A}from"./index-aRqQyh0M.js";import{P as j}from"./index-NItq83n3.js";const C="_detail_59rwn_1",W="_detail__info_59rwn_9",k="_detail__info_button_59rwn_13",B="_detail__info_person_59rwn_21",b="_detail__info_person_fields_59rwn_26",E="_detail__info_person_fields_wrapper_59rwn_30",G="_detail__info_person_title_59rwn_35",S="_detail__info_person_image_59rwn_39",T="_detail__episode_59rwn_43",$="_detail__episode_info_59rwn_50",H="_detail__episode_info_wrapper_59rwn_57",P="_detail__episode_info_fields_59rwn_62",R="_detail__episode_info_fields_img_59rwn_68",L="_detail__episode_subinfo_59rwn_72",O="_img__Alive_59rwn_78",F="_img__Dead_59rwn_82",K="_img__unknown_59rwn_86",n={detail:C,detail__info:W,detail__info_button:k,detail__info_person:B,detail__info_person_fields:b,detail__info_person_fields_wrapper:E,detail__info_person_title:G,detail__info_person_image:S,detail__episode:T,detail__episode_info:$,detail__episode_info_wrapper:H,detail__episode_info_fields:P,detail__episode_info_fields_img:R,detail__episode_subinfo:L,img__Alive:O,img__Dead:F,img__unknown:K},f=()=>{const{useAxiosGetHeroesById:a,useAxiosGetEpisodeById:s,useAxiosGetLocationById:d}=D(),t={hero:a,episode:s,location:d};return{currentData:(i,p)=>{const r=t[i];if(!r)return null;const c=r(p);switch(i){case"hero":return c.heroById;case"episode":return c.episodeById;case"location":return c.locationById}}}},g=()=>{const a=m();return{handleClickDetail:(d,t)=>{a(`/${t}/${w.detail}/${d}`,{state:{id:d,type:`${t==="character"?"hero":t}`},replace:!0})}}},q=({episodeId:a,data:s})=>{const{currentData:d}=f(),{handleClickDetail:t}=g(),l=d("episode",a);return e.jsxs("div",{className:n.detail__episode,children:[e.jsxs("div",{className:n.detail__episode_info,children:[e.jsx(_,{fontWeight:"600",children:"Informations:"}),e.jsxs("div",{className:n.detail__episode_info_fields,children:[e.jsx(_,{fontWeight:"300",children:"Gender"}),"gender"in s&&s.gender&&e.jsx(o,{children:s.gender})]}),e.jsxs("div",{className:n.detail__episode_info_fields,children:[e.jsx(_,{fontWeight:"300",children:"Status"}),"status"in s&&s.status&&e.jsxs("div",{className:n.detail__episode_info_fields_img,children:[e.jsx(o,{children:s.status}),e.jsx(y,{className:v(n[`img__${s.status}`])})]})]}),e.jsxs("div",{className:n.detail__episode_info_fields,children:[e.jsx(_,{fontWeight:"300",children:"Specie"}),"species"in s&&s.species&&e.jsx(o,{children:s.species})]}),e.jsxs("div",{className:n.detail__episode_info_fields,children:[e.jsx(_,{fontWeight:"300",children:"Origin"}),"origin"in s&&s.origin&&e.jsx(o,{children:s.origin.name})]}),"type"in s&&s.type&&e.jsxs("div",{className:n.detail__episode_info_fields,children:[e.jsx(_,{fontWeight:"300",children:"Type"}),e.jsx(o,{children:s.type})]})]}),e.jsxs("div",{className:n.detail__episode_info,children:[e.jsx(_,{fontWeight:"600",children:"Episode:"}),e.jsx("div",{className:n.detail__episode_info_wrapper,children:e.jsx("div",{className:n.detail__episode_subinfo,children:Array.isArray(l)&&l.map(i=>e.jsxs(x,{variant:"text",className:n.detail__episode_info_fields,onClick:()=>t(i.id,"episode"),children:[e.jsx(_,{children:i.name}),e.jsx(o,{children:i.air_date})]},i.id))})})]})]})},z=({heroesId:a,resourse:s})=>{const{currentData:d}=f(),{handleClickDetail:t}=g(),l=d("hero",a);return e.jsxs("div",{children:[e.jsx(o,{fontWeight:"600",children:s==="episode"?"Cast":"Residents"}),e.jsx(j,{display:"grid",children:Array.isArray(l)&&l.map(i=>e.jsx(A,{name:i.name,image:"image"in i?i.image:"",species:"species"in i?i.species:"",onClick:()=>t(i.id,"character")},i.id))})]})},J=()=>{const a=m(),s=N(),{currentData:d}=f(),[t,l]=h.useState([]),i=d(s.state.type,s.state.id),p=(r,c)=>(r.forEach(u=>c.push(Number(u.split("/").at(-1)))),c);return h.useEffect(()=>{const r=[];s.state.type==="hero"&&i&&"episode"in i&&p(i.episode,r),s.state.type==="location"&&i&&"residents"in i&&p(i.residents,r),s.state.type==="episode"&&i&&"characters"in i&&p(i.characters,r),l(r)},[i,s.state.type]),e.jsx(e.Fragment,{children:i&&e.jsxs("div",{className:n.detail,children:[e.jsxs("div",{className:n.detail__info,children:[e.jsxs(x,{onClick:()=>a(-1),variant:"text",className:n.detail__info_button,children:[e.jsx(I,{}),"GO BACK"]}),e.jsxs("div",{className:n.detail__info_person,children:["image"in i&&i.image&&e.jsx("img",{src:i.image,alt:"Hero Image",className:n.detail__info_person_image}),"name"in i&&i.name&&e.jsx(_,{fontWeight:"700",children:i.name}),s.state.type!=="hero"&&e.jsxs("div",{className:n.detail__info_person_fields,children:["episode"in i&&i.episode&&e.jsxs("div",{className:n.detail__info_person_fields_wrapper,children:[e.jsx(_,{fontWeight:"600",children:"Episode:"}),e.jsx(o,{children:i.episode})]}),"type"in i&&i.type&&e.jsxs("div",{className:n.detail__info_person_fields_wrapper,children:[e.jsx(_,{fontWeight:"600",children:"Type:"}),e.jsx(o,{children:i.type})]}),"dimension"in i&&i.dimension&&e.jsxs("div",{className:n.detail__info_person_fields_wrapper,children:[e.jsx(_,{fontWeight:"600",children:"Dimension:"}),e.jsx(o,{children:i.dimension})]}),"air_date"in i&&i.air_date&&e.jsxs("div",{className:n.detail__info_person_fields_wrapper,children:[e.jsx(_,{fontWeight:"600",children:"Created:"}),e.jsx(o,{children:i.air_date})]})]})]})]}),s.state.type==="hero"?e.jsx(q,{data:i,episodeId:t}):e.jsx(z,{heroesId:t,resourse:s.state.type})]})})},V=()=>e.jsx(j,{children:e.jsx(J,{})});export{V as default};
