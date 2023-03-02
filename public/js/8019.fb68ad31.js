"use strict";(self["webpackChunkdemo1"]=self["webpackChunkdemo1"]||[]).push([[8019],{2440:function(t,e,n){n.d(e,{O:function(){return l}});var a=n(5080);const l=t=>`media/illustrations/${a.Gv.value}/${t}`},8932:function(t,e,n){n.d(e,{M:function(){return s},V:function(){return o}});var a=n(6450),l=n(5758);const s=(t,e)=>{a.Z.dispatch(l.e.SET_BREADCRUMB_ACTION,{title:t,pageBreadcrumbPath:e})},o=t=>{a.Z.dispatch(l.e.SET_BREADCRUMB_ACTION,{title:t})}},5080:function(t,e,n){n.d(e,{Df:function(){return y},F9:function(){return b},Fh:function(){return i},Gv:function(){return h},K1:function(){return m},Lj:function(){return r},Ne:function(){return d},_T:function(){return g},az:function(){return v},jH:function(){return o},o$:function(){return c},o4:function(){return _},pD:function(){return f},vc:function(){return s},vj:function(){return w},xV:function(){return u},zK:function(){return p}});var a=n(6252),l=n(6450);const s=(0,a.Fl)((()=>l.Z.getters.layoutConfig())),o=((0,a.Fl)((()=>l.Z.getters.layoutConfig("sidebar.display"))),(0,a.Fl)((()=>"fluid"===l.Z.getters.layoutConfig("footer.width")))),i=(0,a.Fl)((()=>"fluid"===l.Z.getters.layoutConfig("header.width"))),r=(0,a.Fl)((()=>l.Z.getters.layoutConfig("header.left"))),c=(0,a.Fl)((()=>!0===l.Z.getters.layoutConfig("aside.display"))),d=(0,a.Fl)((()=>"fluid"===l.Z.getters.layoutConfig("toolbar.width"))),u=(0,a.Fl)((()=>l.Z.getters.layoutConfig("toolbar.display"))),p=(0,a.Fl)((()=>l.Z.getters.layoutConfig("loader.display"))),g=(0,a.Fl)((()=>"fluid"===l.Z.getters.layoutConfig("content.width"))),f=(0,a.Fl)((()=>""+l.Z.getters.layoutConfig("loader.logo"))),m=(0,a.Fl)((()=>!!l.Z.getters.layoutConfig("aside.display"))),b=(0,a.Fl)((()=>l.Z.getters.layoutConfig("aside.theme"))),v=(0,a.Fl)((()=>l.Z.getters.layoutConfig("toolbar.display"))),_=(0,a.Fl)((()=>l.Z.getters.layoutConfig("aside.menuIcon"))),y=(0,a.Fl)((()=>l.Z.getters.layoutConfig("main.logo.light"))),w=(0,a.Fl)((()=>l.Z.getters.layoutConfig("main.logo.dark"))),h=((0,a.Fl)((()=>l.Z.getters.layoutConfig("header.menuIcon"))),(0,a.Fl)((()=>l.Z.getters.layoutConfig("illustrations.set"))))},1128:function(t,e,n){n.d(e,{Z:function(){return _}});var a=n(6252),l=n(3577);const s={class:"card"},o={class:"card-body p-0"},i={class:"card-px text-center py-20 my-10"},r={class:"fs-2x fw-bolder mb-10"},c={class:"text-gray-400 fs-5 fw-bold mb-13"},d=["innerHTML"],u=["data-bs-target"],p={class:"text-center px-5"},g=["src"];function f(t,e,n,f,m,b){return(0,a.wg)(),(0,a.iD)("div",s,[(0,a._)("div",o,[(0,a._)("div",i,[(0,a._)("h2",r,(0,l.zw)(t.title),1),(0,a._)("p",c,[(0,a._)("span",{innerHTML:t.description},null,8,d)]),(0,a._)("button",{type:"button",class:"btn btn-primary er fs-6 px-8 py-4","data-bs-toggle":"modal","data-bs-target":`#${t.modalId}`},(0,l.zw)(t.buttonText),9,u)]),(0,a._)("div",p,[(0,a._)("img",{src:t.image,alt:"",class:"mw-100 mh-300px"},null,8,g)])])])}var m=(0,a.aZ)({name:"modal-card",props:{title:String,description:String,buttonText:String,image:String,modalId:String},components:{}}),b=n(3744);const v=(0,b.Z)(m,[["render",f]]);var _=v},8019:function(t,e,n){n.r(e),n.d(e,{default:function(){return et}});var a=n(6252);function l(t,e,n,l,s,o){const i=(0,a.up)("KTModalCard"),r=(0,a.up)("KTUpgradePlanModal");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)(i,{title:"Upgrade Plan Modal Example",description:"Click on the below buttons to launch <br/>a upgrade plan example.",image:t.getIllustrationsPath("8.png"),"button-text":"Upgrade Plan","modal-id":"kt_modal_upgrade_plan"},null,8,["image"]),(0,a.Wm)(r)],64)}var s=n(1128),o=n(3577);const i={class:"modal fade",id:"kt_modal_upgrade_plan",tabindex:"-1","aria-hidden":"true"},r={class:"modal-dialog modal-xl"},c={class:"modal-content rounded"},d={class:"modal-header justify-content-end border-0 pb-0"},u={class:"btn btn-sm btn-icon btn-active-color-primary","data-bs-dismiss":"modal"},p={class:"svg-icon svg-icon-1"},g={class:"modal-body pt-0 pb-15 px-5 px-xl-20"},f=(0,a._)("div",{class:"mb-13 text-center"},[(0,a._)("h1",{class:"mb-3"},"Upgrade a Plan"),(0,a._)("div",{class:"text-gray-400 fw-bold fs-5"},[(0,a.Uk)(" If you need more info, please check "),(0,a._)("a",{href:"#",class:"link-primary fw-bolder"},"Pricing Guidelines"),(0,a.Uk)(". ")])],-1),m={class:"d-flex flex-column"},b={class:"nav-group nav-group-outline mx-auto","data-kt-buttons":"true"},v={class:"row mt-10"},_={class:"col-lg-6 mb-10 mb-lg-0"},y={class:"nav flex-column"},w=["onClick","data-bs-target"],h={class:"d-flex align-items-center me-2"},k={class:"form-check form-check-custom form-check-solid form-check-success me-6"},x=["value","checked"],C={class:"flex-grow-1"},Z={class:"d-flex align-items-center fs-2 fw-bolder flex-wrap"},M={key:0,class:"badge badge-light-success ms-2 fs-7"},U={class:"fw-bold opacity-50"},F={class:"ms-5"},A={key:0,class:"btn btn-sm btn-primary"},D=(0,a._)("span",{class:"mb-2"},"$",-1),P={class:"fs-3x fw-bolder"},T=(0,a._)("span",{class:"fs-7 opacity-50"},[(0,a.Uk)("/ "),(0,a._)("span",{"data-kt-element":"period"},"Mon")],-1),z={class:"col-lg-6"},H={class:"tab-content rounded h-100 bg-light p-10"},S=["id"],I={class:"pb-5"},K=(0,a._)("h2",{class:"fw-bolder text-dark"}," What’s in Startup Plan? ",-1),B={class:"text-gray-400 fw-bold"},Y={class:"pt-1"},j={class:"fw-bold fs-5 text-gray-700 flex-grow-1"},O={class:"svg-icon svg-icon-1 svg-icon-success"},$={class:"fw-bold fs-5 text-gray-400 flex-grow-1"},E={class:"svg-icon svg-icon-1"},N=(0,a._)("div",{class:"d-flex flex-center flex-row-fluid pt-12"},[(0,a._)("button",{type:"reset",class:"btn btn-white me-3","data-bs-dismiss":"modal"}," Cancel "),(0,a._)("button",{type:"submit",class:"btn btn-primary"},"Upgrade Plan")],-1);function W(t,e,n,l,s,W){const R=(0,a.up)("inline-svg");return(0,a.wg)(),(0,a.iD)("div",i,[(0,a._)("div",r,[(0,a._)("div",c,[(0,a._)("div",d,[(0,a._)("div",u,[(0,a._)("span",p,[(0,a.Wm)(R,{src:"media/icons/duotune/arrows/arr061.svg"})])])]),(0,a._)("div",g,[f,(0,a._)("div",m,[(0,a._)("div",b,[(0,a._)("button",{onClick:e[0]||(e[0]=e=>t.current="month"),class:(0,o.C_)([["month"===t.current&&"active"],"btn btn-color-gray-400 btn-active btn-active-secondary px-6 py-3 me-2"])}," Monthly ",2),(0,a._)("button",{onClick:e[1]||(e[1]=e=>t.current="annual"),class:(0,o.C_)([["annual"===t.current&&"active"],"btn btn-color-gray-400 btn-active btn-active-secondary px-6 py-3"])}," Annual ",2)]),(0,a._)("div",v,[(0,a._)("div",_,[(0,a._)("div",y,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(t.plans,((e,n)=>((0,a.wg)(),(0,a.iD)("div",{key:n,onClick:n=>t.selected=e.title,class:(0,o.C_)(["nav-link btn btn-outline btn-outline-dashed btn-color-dark d-flex flex-stack text-start p-6",[n!==t.plans.length-1&&"mb-6",e.default&&"active",!e.custom&&"btn-active btn-active-primary"]]),"data-bs-toggle":"tab","data-bs-target":`#kt_upgrade_plan_${n}`},[(0,a._)("div",h,[(0,a._)("div",k,[(0,a._)("input",{class:"form-check-input",type:"radio",name:"plan",value:e.title,checked:t.selected===e.title},null,8,x)]),(0,a._)("div",C,[(0,a._)("h2",Z,[(0,a.Uk)((0,o.zw)(e.title)+" ",1),e.label?((0,a.wg)(),(0,a.iD)("span",M,(0,o.zw)(e.label),1)):(0,a.kq)("",!0)]),(0,a._)("div",U,(0,o.zw)(e.subTitle),1)])]),(0,a._)("div",F,[e.custom?((0,a.wg)(),(0,a.iD)("button",A," Contact Us ")):((0,a.wg)(),(0,a.iD)(a.HY,{key:1},[D,(0,a._)("span",P,(0,o.zw)("month"===t.current?e.priceMonth:e.priceAnnual),1),T],64))])],10,w)))),128))])]),(0,a._)("div",z,[(0,a._)("div",H,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(t.plans,((t,e)=>((0,a.wg)(),(0,a.iD)(a.HY,{key:e},[t.custom?(0,a.kq)("",!0):((0,a.wg)(),(0,a.iD)("div",{key:0,class:(0,o.C_)([[t.default&&"show active"],"tab-pane fade"]),id:`kt_upgrade_plan_${e}`},[(0,a._)("div",I,[K,(0,a._)("div",B,(0,o.zw)(t.description),1)]),(0,a._)("div",Y,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(t.features,((e,n)=>((0,a.wg)(),(0,a.iD)("div",{key:n,class:(0,o.C_)([[n!==t.features-1&&"mb-7"],"d-flex align-items-center"])},[e.supported?((0,a.wg)(),(0,a.iD)(a.HY,{key:0},[(0,a._)("span",j,(0,o.zw)(e.title),1),(0,a._)("span",O,[(0,a.Wm)(R,{src:"media/icons/duotune/general/gen043.svg"})])],64)):((0,a.wg)(),(0,a.iD)(a.HY,{key:1},[(0,a._)("span",$,(0,o.zw)(e.title),1),(0,a._)("span",E,[(0,a.Wm)(R,{src:"media/icons/duotune/general/gen040.svg"})])],64))],2)))),128))])],10,S))],64)))),128))])])])]),N])])])])}var R=n(2262),G=(0,a.aZ)({name:"upgrade-plan-modal",components:{},setup(){const t=(0,R.iH)("month"),e=(0,R.iH)("Startup"),n=[{title:"Startup",subTitle:"Best for startups",description:"Optimal for 10+ team size and new startup",priceMonth:"39",priceAnnual:"399",default:!0,custom:!1,features:[{title:"Up to 10 Active Users",supported:!0},{title:"Up to 30 Project Integrations",supported:!0},{title:"Analytics Module",supported:!0},{title:"Finance Module",supported:!1},{title:"Accounting Module",supported:!1},{title:"Network Platform",supported:!1},{title:"Unlimited Cloud Space",supported:!1}]},{title:"Advanced",subTitle:"Best for 100+ team size",description:"Optimal for 100+ team size and grown company",priceMonth:"339",priceAnnual:"3399",default:!1,custom:!1,features:[{title:"Up to 10 Active Users",supported:!0},{title:"Up to 30 Project Integrations",supported:!0},{title:"Analytics Module",supported:!0},{title:"Finance Module",supported:!0},{title:"Accounting Module",supported:!0},{title:"Network Platform",supported:!1},{title:"Unlimited Cloud Space",supported:!1}]},{title:"Enterprise",subTitle:"Best value for 1000+ team",description:"Optimal for 1000+ team and enterpise",priceMonth:"999",priceAnnual:"9999",label:"Most popular",default:!1,custom:!1,features:[{title:"Up to 10 Active Users",supported:!0},{title:"Up to 30 Project Integrations",supported:!0},{title:"Analytics Module",supported:!0},{title:"Finance Module",supported:!0},{title:"Accounting Module",supported:!0},{title:"Network Platform",supported:!0},{title:"Unlimited Cloud Space",supported:!0}]},{title:"Custom",subTitle:"Requet a custom license",default:!1,custom:!0}];return{plans:n,current:t,selected:e}}}),q=n(3744);const L=(0,q.Z)(G,[["render",W]]);var V=L,J=n(8932),Q=n(2440),X=(0,a.aZ)({name:"upgrade-plan",components:{KTModalCard:s.Z,KTUpgradePlanModal:V},setup(){return(0,a.bv)((()=>{(0,J.M)("Upgrade Plan",["Modals","General"])})),{getIllustrationsPath:Q.O}}});const tt=(0,q.Z)(X,[["render",l]]);var et=tt}}]);
//# sourceMappingURL=8019.fb68ad31.js.map