import{D as x,y as d,ad as b,d as f,f as l,g as t,Q as w,H as m,I as _,j as n,h as u,w as p,k as g,l as r,n as y,e as i}from"./index-9444415c.js";import{d as k,b as V,a as N,_ as C,c as h}from"./icon-light-c17ef52a.js";const S="/smart-fermentation-tank-demo/assets/user-9ddc9f4e.svg",B={class:"page main-signin-wrapper"},D={class:"row signpages text-center"},M={class:"col-md-12 my-auto"},P={class:"card"},T={class:"row row-sm"},U=y('<div class="col-lg-6 col-xl-5 d-none d-lg-block text-center bg-primary details"><div class="mt-5 pt-4 p-2 pos-absolute"><img src="'+V+'" class="header-brand-img mb-4" alt="logo"><div class="clearfix"></div><img src="'+S+'" class="ht-100 mb-0" alt="user"><h5 class="mt-4 text-white">智慧醱酵槽管理系統</h5><span class="tx-white-6 tx-13 mb-5 mt-xl-0 opacity-0">Signup to create, discover and connect with the global community</span></div></div>',1),H={class:"col-lg-6 col-xl-7 col-xs-12 col-sm-12 login_form"},j={class:"main-container container-fluid"},E={class:"row row-sm"},F={class:"card-body mt-2 mb-2"},I=t("img",{src:N,class:"d-lg-none header-brand-img text-start float-start mb-4 error-logo-light",alt:"logo"},null,-1),L=t("img",{src:C,class:"d-lg-none header-brand-img text-start float-start mb-4 error-logo",alt:"logo"},null,-1),O=t("div",{class:"clearfix"},null,-1),Q=t("h5",{class:"text-start mb-2"},null,-1),R=t("p",{class:"mb-4 text-muted tx-13 ms-0 text-start opacity-0"}," Signin to create, discover and connect with the global community ",-1),$={class:"form-group text-start"},q=t("label",null,"帳號",-1),z={class:"form-group text-start"},A=t("label",null,"密碼",-1),G={class:"text-start mt-5 ms-0"},J={key:0,class:"mb-1"},K={key:1},tt={__name:"Login",setup(W){x(k);const e=d(""),a=d(""),{login:v}=b();return(X,s)=>{const c=f("router-link");return i(),l("div",B,[t("div",D,[t("div",M,[t("div",P,[t("div",T,[U,t("div",H,[t("div",j,[t("div",E,[t("div",F,[I,L,O,t("form",{onSubmit:s[3]||(s[3]=w(()=>{},["prevent"]))},[Q,R,t("div",$,[q,m(t("input",{"onUpdate:modelValue":s[0]||(s[0]=o=>e.value=o),class:"form-control",placeholder:"請輸入帳號",type:"text"},null,512),[[_,e.value]])]),t("div",z,[A,m(t("input",{"onUpdate:modelValue":s[1]||(s[1]=o=>a.value=o),class:"form-control",placeholder:"請輸入密碼",type:"password"},null,512),[[_,a.value]])]),t("button",{class:"btn ripple btn-primary btn-block",onClick:s[2]||(s[2]=o=>n(v)(e.value,a.value))}," 登入 ")],32),t("div",G,[n(h).extraPage.forgotPassword?(i(),l("div",J,[u(c,{to:"forgotpassword"},{default:p(()=>[r("Forgot password?")]),_:1})])):g("",!0),n(h).extraPage.signup?(i(),l("div",K,[r(" Don't have an account? "),u(c,{to:"sign-up"},{default:p(()=>[r("Register Here")]),_:1})])):g("",!0)])])])])])])])])])])}}};export{tt as default};
