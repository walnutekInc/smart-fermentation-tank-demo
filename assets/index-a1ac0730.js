import{b as r,a as w,e as h,n as C,E as U,w as f,h as e,j as d,k as q,f as M,l as A,m as R,t as j,G as B,H as E,I as F,J as N,F as K,K as V}from"./index-c112ead2.js";import{a as D,_ as S,b as T}from"./Modal-5399b28b.js";import{_ as k}from"./FermentationInput-414570ec.js";import{F as $}from"./FermentationSelect-af0b9c8a.js";import{a as I,u as L}from"./useMember-31ca8bf7.js";import{c as x}from"./cloneDeep-a5069fb6.js";import"./menu-45865aa9.js";import"./multiselect-db74e711.js";import"./plugin-vueexport-helper-c27b6911.js";const O={class:"row"},z={class:"col-lg-6 col-sm-12"},G={class:"col-lg-6 col-sm-12"},H={key:0,class:"col-lg-6 col-sm-12"},J={class:"col-lg-6 col-sm-12"},P={class:"col-lg-6 col-sm-12"},Q={class:"col-12"},W={__name:"FormModal",setup(g,{expose:c}){const{permissionOptions:u}=I(),{laborators:m}=L(),n=r(null),t=r("create"),p=w(()=>{let i="";switch(t.value){case"create":i="新增帳號資料";break;case"update":i="更新帳號資料";break;case"view":i="檢視帳號資料";break}return i}),v=w(()=>m.value.map(i=>({value:i.name,label:i.name}))),y={account:"",name:"",email:"",password:"",permissions:"",laboratory:[]},_=()=>x(y),l=r(_()),o=w(()=>t.value=="view");return c({show:(i,a)=>{t.value=i,l.value=_(),a&&(l.value=x(a)),n.value.show()}}),(i,a)=>(h(),C(D,{ref_key:"modalRef",ref:n,"dialog-class":"modal-content-demo",title:p.value},U({default:f(()=>[e("div",O,[e("div",z,[d($,{modelValue:l.value.permissions,"onUpdate:modelValue":a[0]||(a[0]=s=>l.value.permissions=s),options:q(u),label:"權限",disabled:o.value,required:"",placeholder:"請選擇權限"},null,8,["modelValue","options","disabled"])]),e("div",G,[d(k,{modelValue:l.value.name,"onUpdate:modelValue":a[1]||(a[1]=s=>l.value.name=s),label:"帳號",disabled:o.value,required:"",placeholder:"請輸入帳號"},null,8,["modelValue","disabled"])]),t.value!=="view"?(h(),M("div",H,[d(k,{modelValue:l.value.password,"onUpdate:modelValue":a[2]||(a[2]=s=>l.value.password=s),label:"密碼",disabled:o.value,required:"",placeholder:"請輸入密碼"},null,8,["modelValue","disabled"])])):A("",!0),e("div",J,[d(k,{modelValue:l.value.name,"onUpdate:modelValue":a[3]||(a[3]=s=>l.value.name=s),label:"使用者名稱",disabled:o.value,required:"",placeholder:"請輸入使用者名稱"},null,8,["modelValue","disabled"])]),e("div",P,[d(k,{modelValue:l.value.email,"onUpdate:modelValue":a[4]||(a[4]=s=>l.value.email=s),label:"Email",disabled:o.value,required:"",placeholder:"請輸入Email"},null,8,["modelValue","disabled"])]),e("div",Q,[d($,{modelValue:l.value.laboratory,"onUpdate:modelValue":a[5]||(a[5]=s=>l.value.laboratory=s),options:v.value,label:"所屬實驗室",disabled:o.value,required:"",placeholder:"請選擇實驗室",mode:"tags"},null,8,["modelValue","options","disabled"])])])]),_:2},[o.value?void 0:{name:"footer",fn:f(()=>[e("button",{href:"javascript:;",class:"btn btn-md btn-info",onClick:a[6]||(a[6]=s=>n.value.hide())}," 取消 "),e("button",{href:"javascript:;",class:"btn btn-md btn-danger",onClick:a[7]||(a[7]=s=>n.value.hide())}," 送出 ")]),key:"0"}]),1032,["title"]))}},X={__name:"DeleteModal",setup(g,{expose:c}){const u=r(null),m=r("");return c({show:n=>{var t;m.value=n,(t=u.value)==null||t.show()}}),(n,t)=>(h(),C(D,{ref_key:"modalRef",ref:u,"body-class":"text-center","dialog-class":"modal-dialog-centered",title:"刪除帳號"},{footer:f(()=>[e("button",{href:"javascript:;",class:"btn btn-md btn-info",onClick:t[0]||(t[0]=p=>u.value.hide())}," 取消 "),e("button",{href:"javascript:;",class:"btn btn-md btn-danger",onClick:t[1]||(t[1]=p=>u.value.hide())}," 確定 ")]),default:f(()=>[R(" 確認是否刪除"+j(m.value)+" ",1)]),_:1},512))}},Y={class:"row row-sm"},Z={class:"col-sm-12 col-md-12 col-lg-12 col-xl-12 grid-margin"},ee={class:"card custom-card"},le={class:"card-header border-bottom-0 pb-0"},oe={class:"row"},ae={class:"col-12"},te={class:"d-flex flex-column flex-lg-row justify-content-between"},se={class:"input-group wd-lg-25p"},ne={class:"input-group-append"},ie={class:"card-body"},de=["onClick"],re=e("i",{class:"fe fe-search"},null,-1),ue=[re],ce=["onClick"],me=e("i",{class:"fe fe-edit-2"},null,-1),pe=[me],be=["onClick"],ve=e("i",{class:"fe fe-trash"},null,-1),fe=[ve],_e="帳號管理",Me={__name:"index",setup(g){const c=B({keyword:""}),u=[{label:"權限",key:"permissions"},{label:"帳號",key:"account"},{label:"使用者名稱",key:"name"},{label:"Email",key:"email"},{label:"所屬實驗室",key:"laboratory"},{label:"操作",key:"action",tdClassName:"btn-list"}],m=r({total:10,size:10,page:1}),n=[{id:"1",account:"A123456",name:"userA",permissions:"超級管理者",laboratory:["實驗室A"],email:"123456@gmail.com"},{id:"2",account:"A1234567",name:"userB",permissions:"實驗室管理者",laboratory:["實驗室A","實驗室B"],email:"A1234567@gmail.com"}],t=r(n),p=(_=1,l=10)=>{const o={...c,page:_,limit:l};V(o.keyword)?V(o.keyword)&&(t.value=n):t.value=t.value.filter(b=>b.name.includes(o.keyword)|b.email.includes(o.keyword)|b.account.includes(o.keyword)),m.value.total=t.value.length},v=r(null),y=r(null);return(_,l)=>(h(),M(K,null,[d(T,{title:_e}),e("div",Y,[e("div",Z,[e("div",ee,[e("div",le,[e("div",oe,[e("div",ae,[e("div",te,[e("button",{type:"button",class:"btn btn-primary mb-2 mb-lg-0",onClick:l[0]||(l[0]=o=>v.value.show("create"))},"新增帳號"),e("div",se,[E(e("input",{type:"text",class:"form-control","onUpdate:modelValue":l[1]||(l[1]=o=>c.keyword=o),placeholder:"搜尋帳號、名稱、email",onKeyup:l[2]||(l[2]=N(o=>p(1),["enter"]))},null,544),[[F,c.keyword]]),e("span",ne,[e("button",{class:"btn btn-primary",type:"button",onClick:l[3]||(l[3]=o=>p(1))}," 搜尋 ")])])])])])]),e("div",ie,[d(S,{header:u,items:t.value,"page-change":p,pagination:m.value},{laboratory:f(({value:o})=>[R(j(o.join("、")),1)]),action:f(({item:o})=>[e("button",{class:"btn btn-sm btn-primary",onClick:b=>v.value.show("view",o)},ue,8,de),e("button",{class:"btn btn-sm btn-danger",onClick:b=>v.value.show("update",o)},pe,8,ce),e("button",{class:"btn btn-sm btn-info",onClick:b=>y.value.show(o.name)},fe,8,be)]),_:1},8,["items","pagination"])])])]),d(W,{ref_key:"formModalRef",ref:v},null,512),d(X,{ref_key:"deleteModalRef",ref:y},null,512)])],64))}};export{Me as default};
