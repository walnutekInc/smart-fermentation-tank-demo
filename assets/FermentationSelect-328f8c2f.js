import{y as s,A as m,e as f,f as p,g as n,l as b,t as c,H as S,N as g,h as v,w as y,O as h,j as i,C as V,K as B}from"./index-9444415c.js";import{s as k}from"./multiselect-cea8a812.js";import{_ as x}from"./plugin-vueexport-helper-c27b6911.js";const F={class:"mg-b-10"},C={class:"text-danger"},w={class:"invalid-feedback"},N={__name:"FermentationSelect",props:{modelValue:[String,Number,Array,Boolean],error:String,disabled:Boolean,label:String,placeholder:String,required:Boolean,options:[Array,Function],trackBy:[String],valueProp:[String],selectLabel:[String],select:Function,onCreate:Function,createOption:{type:Boolean,default:!1},searchable:{type:Boolean,default:!1},mode:{type:String,default:"single"}},emits:["update:modelValue"],setup(e,{emit:d}){const r=e,l=s(r.modelValue);m(()=>r.modelValue,o=>{l.value=o});const u=s(null);return(o,a)=>(f(),p("div",{class:V(["form-group",{"has-error":!i(B)(e.error)}])},[n("p",F,[b(c(e.label)+" ",1),S(n("span",C,"*",512),[[g,e.required]])]),v(i(k),{class:"ps-3",ref_key:"multiSelectRef",ref:u,modelValue:l.value,"onUpdate:modelValue":a[0]||(a[0]=t=>l.value=t),onChange:a[1]||(a[1]=t=>d("update:modelValue",t)),onSelect:e.select,"track-by":e.trackBy,options:e.options,label:e.selectLabel,"value-prop":e.valueProp,placeholder:e.placeholder,mode:e.mode,searchable:e.searchable,"create-option":e.createOption,"on-create":e.onCreate,disabled:e.disabled},{option:y(({option:t})=>[h(o.$slots,"option",{option:t},void 0,!0)]),_:3},8,["modelValue","onSelect","track-by","options","label","value-prop","placeholder","mode","searchable","create-option","on-create","disabled"]),n("div",w,c(e.error),1)],2))}},q=x(N,[["__scopeId","data-v-26972910"]]);export{q as F};
