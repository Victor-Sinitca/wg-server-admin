var be=Object.defineProperty,Fe=Object.defineProperties;var Pe=Object.getOwnPropertyDescriptors;var M=Object.getOwnPropertySymbols;var Ce=Object.prototype.hasOwnProperty,Ne=Object.prototype.propertyIsEnumerable;var G=(t,n,i)=>n in t?be(t,n,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[n]=i,l=(t,n)=>{for(var i in n||(n={}))Ce.call(n,i)&&G(t,i,n[i]);if(M)for(var i of M(n))Ne.call(n,i)&&G(t,i,n[i]);return t},d=(t,n)=>Fe(t,Pe(n));import{j as x,N as _,a as q,r as F,F as I,b as O,c as h,R as _e,d as C,e as Te,f as Se,B as De}from"./vendor.221ac829.js";const xe=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const c of r)if(c.type==="childList")for(const p of c.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&o(p)}).observe(document,{childList:!0,subtree:!0});function i(r){const c={};return r.integrity&&(c.integrity=r.integrity),r.referrerpolicy&&(c.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?c.credentials="include":r.crossorigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function o(r){if(r.ep)return;r.ep=!0;const c=i(r);fetch(r.href,c)}};xe();const Ae="_displayNav_ahgn2_1",ke="_displayFriend_ahgn2_13",$e="_displayHeaderFriend_ahgn2_35",we="_nav_ahgn2_43",Ee="_item_ahgn2_65",Be="_active_ahgn2_77",Me="_friendsList_ahgn2_83",Ge="_displayUser_ahgn2_97";var v={displayNav:Ae,displayFriend:ke,displayHeaderFriend:$e,nav:we,item:Ee,active:Be,friendsList:Me,displayUser:Ge};const e=x.exports.jsx,a=x.exports.jsxs,qe=x.exports.Fragment,Ie=()=>e("div",{className:"navPanel",children:a("nav",{className:v.nav,children:[e("div",{className:`${v.item} ${v.active}`,children:e(_,{className:({isActive:t})=>`${v.item} ${t?v.active:""}`,to:"/gold",children:"Gold"})}),e("div",{className:`${v.item} ${v.active}`,children:e(_,{className:({isActive:t})=>`${v.item} ${t?v.active:""}`,to:"/tech",children:"Tech"})}),e("div",{className:`${v.item} ${v.active}`,children:e(_,{className:({isActive:t})=>`${v.item} ${t?v.active:""}`,to:"/premium",children:"Premium"})}),e("div",{className:`${v.item} ${v.active}`,children:e(_,{className:({isActive:t})=>`${v.item} ${t?v.active:""}`,to:"/provisions",children:"Provisions"})}),e("div",{className:`${v.item} ${v.active}`,children:e(_,{className:({isActive:t})=>`${v.item} ${t?v.active:""}`,to:"/addProduct",children:"add Product"})})]})}),Oe=()=>e("div",{className:"header"}),He="_tableStyle_b8d03_3",Le="_nameProduct_b8d03_15",Re="_rowContainer_b8d03_27",je="_productContainer_b8d03_37",Ue="_changeProductContainer_b8d03_45",ze="_firstContainer_b8d03_61",Ve="_descriptionContainer_b8d03_71",We="_filterTechContainer_b8d03_77",Je="_descriptionStyl_b8d03_87",Ke="_imgContainer_b8d03_93",Qe="_isSelect_b8d03_101",Xe="_tableBody_b8d03_107",Ye="_tableHead_b8d03_113";var f={tableStyle:He,nameProduct:Le,rowContainer:Re,productContainer:je,changeProductContainer:Ue,firstContainer:ze,descriptionContainer:Ve,filterTechContainer:We,descriptionStyl:Je,imgContainer:Ke,isSelect:Qe,tableBody:Xe,tableHead:Ye};const Ze=()=>a("tr",{className:f.container,children:[e("th",{children:"\u0422\u0438\u043F"}),e("th",{children:"\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435"}),e("th",{children:"\u0424\u0438\u043B\u044C\u0442\u0440"}),e("th",{children:"\u041F\u0440\u0438\u043E\u0440\u0438\u0442\u0435\u0442"}),e("th",{children:"\u0420\u0430\u0437\u043C\u0435\u0440"}),e("th",{children:"\u0411\u0430\u0437\u043E\u0432\u0430\u044F \u0446\u0435\u043D\u0430"}),e("th",{children:"\u0426\u0435\u043D\u0430"}),e("th",{children:"\u0422\u0438\u043F \u0441\u043A\u0438\u0434\u043A\u0438"}),e("th",{})]}),et=({product:t,setChanged:n,isSelect:i,hasBenHanged:o,sendNewProductData:r})=>{const c=t.filter.map((m,y)=>a("div",{children:[" ",m," "]},m));return a("tr",{onClick:n,style:i?{backgroundColor:"#a3d4a3"}:{},className:`${f.rowContainer}`,children:[e("td",{children:e("span",{children:t.type})}),e("td",{children:e("span",{children:t.name})}),e("td",{children:e("span",{children:c})}),e("td",{children:e("span",{children:t.priority})}),e("td",{children:e("span",{children:t.span})}),e("td",{children:e("span",{children:t.data.price.basic.cost})}),e("td",{children:e("span",{children:t.data.price.actual.cost})}),e("td",{children:e("span",{children:t.data.price.actual.discountType})}),e("td",{children:o?e("button",{onClick:r,children:"\u0438\u0437\u043C\u0435\u043D\u0438\u0442\u044C"}):"actual"})]})},tt="https://wg-force3-backend.herokuapp.com/api/",g=q.create({baseURL:tt,withCredentials:!1});var H;(function(t){t[t.Success=0]="Success",t[t.Error=1]="Error"})(H||(H={}));const P={getProductByID(t){return g.get(`/product?id=${t}`).then(n=>n.data)},deleteProductByID(t){return g.get(`/deleteProduct?id=${t}`).then(n=>n.data)},getProductsByFilter(t){return g.get(`/product/filter?filter=${t}`).then(n=>n.data)},getProductsByType(t){return g.get(`/product/type?filter=${t}`).then(n=>n.data)},getProductsByList(t){return g.post("/products",{listProductsId:t}).then(n=>n.data)},addProductsByTech(t,n){return g.post("/addProductsTech",{data:t,type:n}).then(i=>i.data)},addOneProduct(t){return g.post("/productAdmin",{data:t.data,filterData:t.filterModel}).then(n=>n.data)},changedProductById(t){return g.post("/changeProduct",{data:t}).then(n=>n.data)}},it=(t,n)=>JSON.stringify(t)!==JSON.stringify(n),at=({product:t,handlerChangedProduct:n})=>{var A,k,$,w,E,B;const[i,o]=F.exports.useState(t),[r,c]=F.exports.useState(!1),[p,m]=F.exports.useState(!1),y=()=>{c(s=>!s)},b=s=>{o(u=>d(l({},u),{span:+s.target.value}))},D=s=>{o(u=>d(l({},u),{data:d(l({},u.data),{price:d(l({},u.data.price),{actual:d(l({},u.data.price.actual),{discountType:s.target.value})})})}))},W=s=>{o(u=>d(l({},u),{priority:+s.target.value}))},J=s=>{o(u=>d(l({},u),{data:d(l({},u.data),{description:s.target.value})}))},K=s=>{o(u=>d(l({},u),{data:d(l({},u.data),{filter:d(l({},u.data.filter),{nation:s.target.value})})}))},Q=s=>{o(u=>d(l({},u),{data:d(l({},u.data),{filter:d(l({},u.data.filter),{type:s.target.value})})}))},X=s=>{o(u=>d(l({},u),{data:d(l({},u.data),{filter:d(l({},u.data.filter),{tier:s.target.value})})}))},Y=s=>{o(u=>d(l({},u),{data:d(l({},u.data),{images:d(l({},u.data.images),{span_1x1:s.target.value})})}))},Z=s=>{o(u=>d(l({},u),{data:d(l({},u.data),{images:d(l({},u.data.images),{span_2x1:s.target.value})})}))},ee=s=>{o(u=>d(l({},u),{data:d(l({},u.data),{price:d(l({},u.data.price),{basic:d(l({},u.data.price.basic),{cost:s.target.value})})})}))},te=s=>{o(u=>d(l({},u),{data:d(l({},u.data),{price:d(l({},u.data.price),{actual:d(l({},u.data.price.actual),{cost:s.target.value})})})}))},ie=s=>{o(u=>d(l({},u),{name:s.target.value,data:d(l({},u.data),{name:s.target.value})}))},T=s=>{const u=s.currentTarget.defaultValue;s.currentTarget.checked?o(N=>d(l({},N),{filter:[...N.filter,u]})):o(N=>d(l({},N),{filter:[...N.filter.filter(ge=>ge!==u)]}))},ae=i.name!==t.name,ne=i.priority!==t.priority,re=i.span!==t.span,ue=i.data.price.actual.discountType!==t.data.price.actual.discountType,le=i.data.price.basic.cost!==t.data.price.basic.cost,ce=i.data.price.actual.cost!==t.data.price.actual.cost,de=JSON.stringify(i.filter)!==JSON.stringify(t.filter),oe=i.data.description!==t.data.description,se=((A=i.data.filter)==null?void 0:A.nation)!==((k=t.data.filter)==null?void 0:k.nation),he=(($=i.data.filter)==null?void 0:$.type)!==((w=t.data.filter)==null?void 0:w.type),pe=((E=i.data.filter)==null?void 0:E.tier)!==((B=t.data.filter)==null?void 0:B.tier),me=i.data.images.span_1x1!==t.data.images.span_1x1,fe=i.data.images.span_2x1!==t.data.images.span_2x1,ve=async()=>{const s=await P.changedProductById(i);s&&n(s.data)},ye=async()=>{await P.deleteProductByID(i.data.id)};return F.exports.useEffect(()=>{m(it(i,t))},[i,t]),a(qe,{children:[e(et,{product:t,setChanged:y,isSelect:r,hasBenHanged:p,sendNewProductData:ve}),r&&e("tr",{children:e("td",{colSpan:9,children:a("div",{className:f.changeProductContainer,children:[a("div",{className:f.firstContainer,children:[a("div",{className:`${f.nameProduct} ${ae?f.isSelect:""}`,children:[e("label",{children:"\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435:"}),e("textarea",{placeholder:"\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435",value:i.name,onChange:ie}),p?e("button",{onClick:()=>o(t),children:"resetAll"}):""]}),a("div",{children:[a("div",{className:ne?f.isSelect:"",children:[e("label",{children:"\u041F\u0440\u0438\u043E\u0440\u0438\u0442\u0435\u0442:"}),e("input",{type:"number",min:0,max:100,value:i.priority,onChange:W})]}),a("div",{className:re?f.isSelect:"",children:[e("label",{htmlFor:"size",children:"\u0420\u0430\u0437\u043C\u0435\u0440:"}),a("select",{id:"size",name:"size",value:i.span,onChange:b,children:[e("option",{value:"1",children:"1"}),e("option",{value:"2",children:"2"})]})]})]}),a("div",{className:ue?f.isSelect:"",children:[e("label",{htmlFor:"typeDiscount",children:"\u0422\u0438\u043F \u0441\u043A\u0438\u0434\u043A\u0438"}),a("select",{id:"typeDiscount",name:"discountType",value:i.data.price.actual.discountType,onChange:D,children:[e("option",{value:"percent",children:"\u043F\u0440\u043E\u0446\u0435\u043D\u0442"}),e("option",{value:"fixed",children:"\u0444\u0438\u043A\u0441\u0438\u0440\u043E\u0432\u0430\u043D\u043E"}),e("option",{value:"",children:"\u043D\u0435\u0442"})]})]}),a("div",{className:le?f.isSelect:"",children:[e("label",{htmlFor:"basicPrice",children:"\u0411\u0430\u0437\u043E\u0432\u0430\u044F \u0446\u0435\u043D\u0430"}),e("input",{value:i.data.price.basic.cost,onChange:ee})]}),a("div",{className:ce?f.isSelect:"",children:[e("label",{htmlFor:"actualPrice",children:"\u0410\u043A\u0442\u0443\u0430\u043B\u044C\u043D\u0430\u044F \u0446\u0435\u043D\u0430"}),e("input",{value:i.data.price.actual.cost,onChange:te})]})]}),a("div",{className:de?f.isSelect:"",children:[e("label",{htmlFor:"actualPrice",children:"\u0424\u0438\u043B\u044C\u0442\u0440"}),a("div",{children:[a("div",{children:[e("label",{children:"\u0422\u0435\u0445\u043D\u0438\u043A\u0430"}),e("input",{type:"checkbox",value:"Technique",checked:i.filter.includes("Technique"),onChange:T})]}),a("div",{children:[e("label",{children:"\u0413\u043E\u043B\u0434\u0430"}),e("input",{type:"checkbox",value:"Gold",checked:i.filter.includes("Gold"),onChange:T})]}),a("div",{children:[e("label",{children:"\u041F\u0440\u0435\u043C\u0438\u0443\u043C"}),e("input",{type:"checkbox",value:"Premium",checked:i.filter.includes("Premium"),onChange:T})]}),a("div",{children:[e("label",{children:"\u0420\u0430\u0441\u0445\u043E\u0434\u043D\u0438\u043A\u0438"}),e("input",{type:"checkbox",value:"Provisions",checked:i.filter.includes("Provisions"),onChange:T})]})]})]}),i.data.filter&&a("div",{className:f.filterTechContainer,children:[a("div",{className:se?f.isSelect:"",children:[e("label",{htmlFor:"nation",children:"\u041D\u0430\u0446\u0438\u044F"}),a("select",{id:"nation",name:"nation",value:i.data.filter.nation,onChange:K,children:[e("option",{value:"china",children:"\u043A\u0438\u0442\u0430\u0439"}),e("option",{value:"czech",children:"\u0447\u0435\u0445\u0438\u044F"}),e("option",{value:"france",children:"\u0444\u0440\u0430\u043D\u0446\u0438\u044F"}),e("option",{value:"germany",children:"\u0433\u0435\u0440\u043C\u0430\u043D\u0438\u044F"}),e("option",{value:"italy",children:"\u0438\u0442\u0430\u043B\u0438\u044F"}),e("option",{value:"japan",children:"\u044F\u043F\u043E\u043D\u0438\u044F"}),e("option",{value:"poland",children:"\u043F\u043E\u043B\u044C\u0448\u0430"}),e("option",{value:"sweden",children:"\u0448\u0432\u0435\u0446\u0438\u044F"}),e("option",{value:"uk",children:"\u0430\u043D\u0433\u043B\u0438\u044F"}),e("option",{value:"usa",children:"\u0430\u043C\u0435\u043D\u0440\u0438\u044F"}),e("option",{value:"ussr",children:"\u0441\u0441\u0441\u0440"})]})]}),a("div",{className:he?f.isSelect:"",children:[e("label",{htmlFor:"typeTech",children:"\u0422\u0438\u043F"}),a("select",{id:"typeTech",name:"type",value:i.data.filter.type,onChange:Q,children:[e("option",{value:"AT-SPG",children:"\u043F\u0442"}),e("option",{value:"heavyTank",children:"\u0442\u0442"}),e("option",{value:"lightTank",children:"\u043B\u0442"}),e("option",{value:"mediumTank",children:"\u0441\u0442"}),e("option",{value:"SPG",children:"\u0430\u0440\u0442\u0430"})]})]}),a("div",{className:pe?f.isSelect:"",children:[e("label",{id:"tierTech",children:"\u0423\u0440\u043E\u0432\u0435\u043D\u044C"}),a("select",{id:"tierTech",name:"tier",value:i.data.filter.tier,onChange:X,children:[e("option",{value:"1",children:"1"}),e("option",{value:"2",children:"2"}),e("option",{value:"3",children:"3"}),e("option",{value:"4",children:"4"}),e("option",{value:"5",children:"5"}),e("option",{value:"6",children:"6"}),e("option",{value:"7",children:"7"}),e("option",{value:"8",children:"8"}),e("option",{value:"9",children:"9"}),e("option",{value:"10",children:"10"})]})]})]}),a("div",{className:f.descriptionContainer,children:[a("div",{className:`${f.imgContainer} ${oe?f.isSelect:""}`,children:[e("label",{children:"\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435"}),e("textarea",{className:f.descriptionStyl,value:i.data.description,onChange:J})]}),a("div",{className:f.imgContainer,children:[e("label",{children:"\u0418\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435 1*1"}),e("textarea",{className:me?f.isSelect:"",value:i.data.images.span_1x1,onChange:Y}),e("label",{children:"\u0418\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435 1*2"}),e("textarea",{className:fe?f.isSelect:"",value:i.data.images.span_2x1,onChange:Z})]})]}),e("div",{children:e("button",{onClick:ye,children:"!!!!\u0423\u0414\u0410\u041B\u0418\u0422\u042C \u041F\u0420\u041E\u0414\u0423\u041A\u0422!!!"})})]})})})]})},S=({filter:t})=>{const[n,i]=F.exports.useState(null),o=c=>{i(p=>{if(p){const m=[...p];return m.forEach((y,b)=>{y.data.id===c.data.id&&(m[b]=l({},c))}),m}else return null})},r=n==null?void 0:n.map(c=>e(at,{product:c,handlerChangedProduct:o},c.data.id));return F.exports.useEffect(()=>{async function c(){try{const p=await P.getProductsByType(t);i(p.data)}catch(p){console.log(`fetchMyProductData error: ${p}`)}}c()},[t]),e("div",{className:f.productContainer,children:a("table",{className:f.tableStyle,children:[e("caption",{children:t}),e("thead",{className:f.tableHead,children:e(Ze,{})}),e("tbody",{className:f.tableBody,children:r})]})})},nt="https://wg-force3-backend.herokuapp.com/api/",L=q.create({baseURL:nt,withCredentials:!1});var R;(function(t){t[t.Success=0]="Success",t[t.Error=1]="Error"})(R||(R={}));var j;(function(t){t[t.CaptchaIsRequired=10]="CaptchaIsRequired"})(j||(j={}));const U={getProductsTech(t,n){return L.get(`https://api.worldoftanks.ru/wot/encyclopedia/vehicles/?application_id=7e52e1d7641fd33d809e4104e369ecf2&limit=${t}&fields=description%2C+tank_id%2Cname%2Cnation%2Ctype%2Ctier%2Cimages%2Cis_wheeled%2Cshort_name&page_no=${n}`,{}).then(i=>i.data.data)},getProductsProv(t,n){return L.get(`https://api.worldoftanks.ru/wot/encyclopedia/provisions/?application_id=7e52e1d7641fd33d809e4104e369ecf2&limit=${t}&page_no=${n}`,{}).then(i=>i.data.data)}};function z(t){return Math.floor(Math.random()*t*100)/100}const rt=()=>a("div",{className:"container",children:[e("div",{className:"product",style:{padding:40},children:e("button",{onClick:async()=>{const i=await U.getProductsTech("100","4"),o=[];for(let c in i)if(i.hasOwnProperty(c)){const p=i[c],m={value:""+z(100),currency:"$"},y={name:p.name,description:p.description,price:{basic:{cost:m.value,currency:"$"},actual:{cost:m.value,discountType:""}},filter:{nation:p.nation,type:p.type,tier:""+p.tier,is_wheeled:p.is_wheeled},images:{span_1x1:p.images.big_icon,span_2x1:p.images.big_icon}};o.push(y)}const r=await P.addProductsByTech(o,"Technique");console.log(r)},children:"addTechToDB"})}),e("div",{className:"product",style:{padding:40},children:e("button",{onClick:async()=>{const i=await U.getProductsProv("100","4"),o=[];for(let m in i)i.hasOwnProperty(m)&&o.push(i[m]);const r=[];function c(m){m[0]&&r.push(m[0]);const y=m.filter((b,D)=>D>1&&m[0].name!==b.name);y&&y.length>0&&c(y)}c(o);const p=[];r.forEach(m=>{const y={value:""+z(20),currency:"$"},b={name:m.name,description:m.description,price:{basic:{cost:y.value,currency:"$"},actual:{cost:y.value,discountType:""}},images:{span_1x1:m.image,span_2x1:m.image}};p.push(b)}),await P.addProductsByTech(p,"Provisions")},children:"addProvisionsToDB"})})]}),ut="_formStyle_snf17_1";var V={formStyle:ut};const lt=({})=>e("div",{children:e(I,{initialValues:{filterModel:{filter:{Gold:!1,Premium:!0,Provisions:!1,Technique:!1},priority:0,span:1,type:"Premium"},data:{name:"\u041A\u0430\u043A\u043E\u0439-\u0442\u043E \u043F\u0440\u043E\u0434\u0443\u043A\u0442",description:"\u0422\u0443\u0442 \u0431\u0443\u0434\u0435\u0442 \u043E\u043F\u0438\u0441\u0430\u043D\u0438\u0435",price:{basic:{cost:"10"},actual:{cost:"10",discountType:""}},images:{span_1x1:"1111111",span_2x1:"2222222"}}},onSubmit:async(n,i)=>{const o=l({},n),r=[];for(let c in n.filterModel.filter)n.filterModel.filter.hasOwnProperty(c)&&n.filterModel.filter[c]&&r.push(c);o.filterModel.filter=r,console.log(o),await P.addOneProduct(o),i.resetForm(),i.setSubmitting(!1)},children:a(O,{className:V.formStyle,children:[a("div",{children:[a("div",{children:[e("label",{htmlFor:"type",children:"\u0422\u0438\u043F \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u0430"}),a(h,{as:"select",id:"type",name:"filterModel.type",children:[e("option",{value:"Premium",children:"Premium"}),e("option",{value:"Gold",children:"Gold"}),e("option",{value:"Provisions",children:"Provisions"})]})]}),a("div",{children:[e("label",{htmlFor:"priority",children:"\u041F\u0440\u0438\u043E\u0440\u0438\u0442\u0435\u0442"}),e(h,{as:"input",type:"number",id:"priority",name:"filterModel.priority"})]}),a("div",{children:[e("label",{htmlFor:"span",children:"\u0420\u0430\u0437\u043C\u0435\u0440"}),a(h,{as:"select",id:"span",name:"filterModel.span",children:[e("option",{value:1,children:"1"}),e("option",{value:2,children:"2"})]})]}),a("div",{children:[e("label",{htmlFor:"Gold",children:"Gold"}),e(h,{type:"checkbox",id:"Gold",name:"filterModel.filter.Gold"}),e("label",{htmlFor:"Premium",children:"Premium"}),e(h,{type:"checkbox",id:"Premium",name:"filterModel.filter.Premium"}),e("label",{htmlFor:"Provisions",children:"Provisions"}),e(h,{type:"checkbox",id:"Provisions",name:"filterModel.filter.Provisions"}),e("label",{htmlFor:"Technique",children:"Technique"}),e(h,{type:"checkbox",id:"Technique",name:"filterModel.filter.Technique"})]})]}),a("div",{children:[a("div",{children:[e("label",{htmlFor:"firstName",children:"\u0418\u043C\u044F"}),e(h,{id:"firstName",name:"data.name",placeholder:"First Name"})]}),a("div",{children:[e("label",{htmlFor:"firstName",children:"\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435"}),e(h,{id:"firstName",name:"data.description",placeholder:"First Name"})]}),a("div",{children:[e("label",{htmlFor:"firstName",children:"\u0411\u0430\u0437\u043E\u0432\u0430\u044F \u0446\u0435\u043D\u0430"}),e(h,{id:"firstName",name:"data.price.basic.cost",placeholder:"First Name"})]}),a("div",{children:[e("label",{htmlFor:"firstName",children:"\u0410\u043A\u0442\u0443\u043B\u044C\u043D\u0430\u044F \u0446\u0435\u043D\u0430"}),e(h,{id:"firstName",name:"data.price.actual.cost",placeholder:"First Name"})]}),a("div",{children:[e("label",{htmlFor:"firstName",children:"\u0422\u0438\u043F \u0441\u043A\u0438\u0434\u043A\u0438"}),e(h,{id:"firstName",name:"data.price.actual.discountType",placeholder:"First Name"})]}),a("div",{children:[e("label",{htmlFor:"firstName",children:"\u043A\u0430\u0440\u0442\u0438\u043D\u043A\u0430 1"}),e(h,{id:"firstName",name:"data.images.span_1x1",placeholder:"First Name"})]}),a("div",{children:[e("label",{htmlFor:"firstName",children:"\u043A\u0430\u0440\u0442\u0438\u043D\u043A\u0430 2"}),e(h,{id:"firstName",name:"data.images.span_2x1",placeholder:"First Name"})]}),e("div",{children:e("button",{type:"submit",children:"Submit"})})]})]})})}),ct=["china","czech","france","germany","italy","japan","poland","sweden","uk","usa","ussr"],dt=["1","2","3","4","5","6","7","8","9","10"],ot=["AT-SPG","heavyTank","lightTank","mediumTank","SPG"],st=({})=>{const t={filterModel:{filter:{Gold:!1,Premium:!1,Provisions:!1,Technique:!0},priority:0,span:1,type:"Technique"},data:{name:"\u041A\u0430\u043A\u0430\u044F-\u0442\u043E \u0442\u0435\u0445\u043D\u0438\u043A\u0430",description:"\u0422\u0443\u0442 \u0431\u0443\u0434\u0435\u0442 \u043E\u043F\u0438\u0441\u0430\u043D\u0438\u0435",filter:{nation:"ussr",tier:"1",type:"lightTank"},price:{basic:{cost:"10"},actual:{cost:"10",discountType:""}},images:{span_1x1:"111",span_2x1:"111"}}},n=ct.map(r=>e("option",{value:r,children:r},r)),i=dt.map(r=>e("option",{value:r,children:r},r)),o=ot.map(r=>e("option",{value:r,children:r},r));return e("div",{children:e(I,{initialValues:t,onSubmit:async(r,c)=>{const p=l({},r),m=[];for(let y in r.filterModel.filter)r.filterModel.filter.hasOwnProperty(y)&&r.filterModel.filter[y]&&m.push(y);p.filterModel.filter=m,console.log(p),await P.addOneProduct(p),c.resetForm(),c.setSubmitting(!1)},children:a(O,{className:V.formStyle,children:[a("div",{children:[a("div",{children:[e("label",{htmlFor:"type",children:"\u0422\u0438\u043F \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u0430"}),e(h,{as:"select",id:"type",name:"filterModel.type",children:e("option",{value:"Technique",children:"Technique"})})]}),a("div",{children:[e("label",{htmlFor:"priority",children:"\u041F\u0440\u0438\u043E\u0440\u0438\u0442\u0435\u0442"}),e(h,{as:"input",type:"number",id:"priority",name:"filterModel.priority"})]}),a("div",{children:[e("label",{htmlFor:"span",children:"\u0420\u0430\u0437\u043C\u0435\u0440"}),a(h,{as:"select",id:"span",name:"filterModel.span",children:[e("option",{value:1,children:"1"}),e("option",{value:2,children:"2"})]})]}),a("div",{children:[e("label",{htmlFor:"Gold",children:"Gold"}),e(h,{type:"checkbox",id:"Gold",name:"filterModel.filter.Gold"}),e("label",{htmlFor:"Premium",children:"Premium"}),e(h,{type:"checkbox",id:"Premium",name:"filterModel.filter.Premium"}),e("label",{htmlFor:"Provisions",children:"Provisions"}),e(h,{type:"checkbox",id:"Provisions",name:"filterModel.filter.Provisions"}),e("label",{htmlFor:"Technique",children:"Technique"}),e(h,{type:"checkbox",id:"Technique",name:"filterModel.filter.Technique"})]})]}),a("div",{children:[a("div",{children:[e("label",{htmlFor:"nation",children:"\u0421\u0442\u0440\u0430\u043D\u0430"}),e(h,{as:"select",id:"nation",name:"data.filter.nation",children:n})]}),a("div",{children:[e("label",{htmlFor:"tier",children:"\u0423\u0440\u043E\u0432\u0435\u043D\u044C"}),e(h,{as:"select",id:"tier",name:"data.filter.tier",children:i})]}),a("div",{children:[e("label",{htmlFor:"type",children:"\u0422\u0438\u043F"}),e(h,{as:"select",id:"type",name:"data.filter.type",children:o})]})]}),a("div",{children:[a("div",{children:[e("label",{htmlFor:"firstName",children:"\u0418\u043C\u044F"}),e(h,{id:"firstName",name:"data.name",placeholder:"First Name"})]}),a("div",{children:[e("label",{htmlFor:"firstName",children:"\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435"}),e(h,{id:"firstName",name:"data.description",placeholder:"First Name"})]}),a("div",{children:[e("label",{htmlFor:"firstName",children:"\u0411\u0430\u0437\u043E\u0432\u0430\u044F \u0446\u0435\u043D\u0430"}),e(h,{id:"firstName",name:"data.price.basic.cost",placeholder:"First Name"})]}),a("div",{children:[e("label",{htmlFor:"firstName",children:"\u0410\u043A\u0442\u0443\u043B\u044C\u043D\u0430\u044F \u0446\u0435\u043D\u0430"}),e(h,{id:"firstName",name:"data.price.actual.cost",placeholder:"First Name"})]}),a("div",{children:[e("label",{htmlFor:"firstName",children:"\u0422\u0438\u043F \u0441\u043A\u0438\u0434\u043A\u0438"}),e(h,{id:"firstName",name:"data.price.actual.discountType",placeholder:"First Name"})]}),a("div",{children:[e("label",{htmlFor:"firstName",children:"\u043A\u0430\u0440\u0442\u0438\u043D\u043A\u0430 1"}),e(h,{id:"firstName",name:"data.images.span_1x1",placeholder:"First Name"})]}),a("div",{children:[e("label",{htmlFor:"firstName",children:"\u043A\u0430\u0440\u0442\u0438\u043D\u043A\u0430 2"}),e(h,{id:"firstName",name:"data.images.span_2x1",placeholder:"First Name"})]}),e("div",{children:e("button",{type:"submit",children:"Submit"})})]})]})})})},ht=({})=>{const[t,n]=F.exports.useState(!0);return a("div",{children:[e("button",{onClick:()=>n(i=>!i),children:"\u0421\u043C\u0435\u043D\u0438\u0442\u044C \u0442\u0438\u043F \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u0430"}),t?e(lt,{}):e(st,{})]})},pt=()=>e("div",{children:a(_e,{children:[e(C,{path:"/gold",element:e(S,{filter:"Gold"})}),e(C,{path:"/premium",element:e(S,{filter:"Premium"})}),e(C,{path:"/provisions",element:e(S,{filter:"Provisions"})}),e(C,{path:"/tech",element:e(S,{filter:"Technique"})}),e(C,{path:"/productsAdd",element:e(rt,{})}),e(C,{path:"/addProduct",element:e(ht,{})})]})});function mt(){return a("div",{className:"app",children:[e(Oe,{}),e(Ie,{}),e(pt,{})]})}Te.render(e(Se.StrictMode,{children:e(De,{basename:"/wg-server-admin",children:e(mt,{})})}),document.getElementById("root"));
