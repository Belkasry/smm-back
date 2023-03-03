"use strict";(self["webpackChunkdemo1"]=self["webpackChunkdemo1"]||[]).push([[1409],{8932:function(e,s,t){t.d(s,{M:function(){return l},V:function(){return r}});var a=t(6450),i=t(5758);const l=(e,s)=>{a.Z.dispatch(i.e.SET_BREADCRUMB_ACTION,{title:e,pageBreadcrumbPath:s})},r=e=>{a.Z.dispatch(i.e.SET_BREADCRUMB_ACTION,{title:e})}},5886:function(e,s,t){t.d(s,{Z:function(){return I}});var a=t(6252),i=t(3577);const l={class:"card-body d-flex flex-column"},r={class:"row"},c={class:"col-3 mr-4 d-flex flex-md-column bg-light bg-opacity-5 active rounded border border-primary center-widget"},d=(0,a._)("a",{href:"#",class:"text-white text-hover-primary fw-bolder fs-3 center-widget"},"Impact Résiduel",-1),n=(0,a._)("span",{class:"pulse-ring border-9"},null,-1),o={class:"row col-4 ml-3"},m={class:"col-5 d-flex bg-light bg-opacity-5 mb-2 mx-2 border border-primary"},_={class:"d-flex mb-9 me-2 p-3"},u=(0,a._)("div",{class:"fs-5 text-white fw-bolder lh-1"},"Fréquence",-1),p={class:"fs-8 text-white"},f={class:"col-5 d-flex bg-light bg-opacity-5 mb-2 border border-primary"},v={class:"d-flex mb-9 me-2 p-3"},g=(0,a._)("div",{class:"fs-4 text-white fw-bolder lh-1"},"Étendu",-1),b={class:"fs-8 text-white"},w={class:"col-5 d-flex bg-light bg-opacity-5 mx-2 border border-primary"},h={class:"d-flex mb-9 me-2 p-3"},x=(0,a._)("div",{class:"fs-5 text-white fw-bolder lh-1"},"Persistance",-1),y={class:"fs-8 text-white"},k={class:"col-5 d-flex bg-light bg-opacity-5 border border-primary"},W={class:"d-flex mb-9 me-2 p-3"},z=(0,a._)("div",{class:"fs-5 text-white fw-bolder lh-1"},"Dangerosité",-1),C={class:"fs-8 text-white mt"},R={class:"col-4 d-flex bg-light bg-opacity-5 active rounded border border-primary"},U={class:"d-flex flex-stack flex-grow-1"},q={class:"fw-bold"},Z={class:"fs-5 text-white"},S={href:"#",class:"me-1 fs-2"};function D(e,s,t,D,V,A){return e.data&&e.listValRef?((0,a.wg)(),(0,a.iD)("div",{key:0,class:(0,i.C_)(e.widgetClasses),style:(0,i.j5)(`background-color: ${e.widgetColor}`)},[(0,a._)("div",l,[(0,a._)("div",r,[(0,a._)("div",c,[d,(0,a._)("a",{href:"#",class:(0,i.C_)(["btn btn-icon btn-lg btn-block pulse","pulse-"+e.iae_color])},[(0,a._)("span",{class:(0,i.C_)("fs-2 text-"+e.iae_color)},(0,i.zw)(e.ies?e.ies:0),3),n],2)]),(0,a._)("div",o,[(0,a._)("div",m,[(0,a._)("div",_,[(0,a._)("div",null,[u,(0,a._)("div",p,(0,i.zw)(e.data.frequence_ir?.description),1)])])]),(0,a._)("div",f,[(0,a._)("div",v,[(0,a._)("div",null,[g,(0,a._)("div",b,(0,i.zw)(e.data.gravite_etendu_ir?.description),1)])])]),(0,a._)("div",w,[(0,a._)("div",h,[(0,a._)("div",null,[x,(0,a._)("div",y,(0,i.zw)(e.data.gravite_persistance_ir?.description),1)])])]),(0,a._)("div",k,[(0,a._)("div",W,[(0,a._)("div",null,[z,(0,a._)("div",C,(0,i.zw)(e.data.gravite_dangerosite_ir?.description),1)])])])]),(0,a._)("div",R,[(0,a._)("div",U,[(0,a._)("div",q,[(0,a._)("div",Z,[(0,a._)("p",null,[(0,a._)("a",S,(0,i.zw)(e.niveau?.name),1),(0,a.Uk)(" : "+(0,i.zw)(e.niveau?.action),1)])])])])])])])],6)):(0,a.kq)("",!0)}var V=(0,a.aZ)({name:"widget-14",props:{widgetClasses:String,widgetColor:String,data:Object,listValRef:Object},data(){return{}},computed:{ies(){return this.data?this.data.frequence_ir?.value*(this.data.gravite_dangerosite_ir?.value+this.data.gravite_persistance_ir?.value+this.data.gravite_etendu_ir?.value):0},iae_color(){return this.ies>20?"danger":this.ies>10&&this.ies<=20?"warning":"info"},niveau(){if(this.listValRef){if(this.ies>=0&&this.ies<=10)return this.listValRef.niveau_priorites[2];if(this.ies>10&&this.ies<=20)return this.listValRef.niveau_priorites[1];if(this.ies>20)return this.listValRef.niveau_priorites[0]}return{name:"",action:""}}}}),A=t(3744);const M=(0,A.Z)(V,[["render",D]]);var I=M},2973:function(e,s,t){t.d(s,{Z:function(){return E}});var a=t(6252),i=t(3577),l=t(9963);const r={class:"card-header border-0 pt-5"},c=(0,a._)("h3",{class:"card-title align-items-start flex-column"},[(0,a._)("span",{class:"text-primary card-label fw-bolder fs-3 mb-1"},"Plan d'action"),(0,a._)("span",{class:"text-muted mt-1 fw-bold fs-7"}," 6 plans")],-1),d={class:"card-toolbar","data-bs-toggle":"tooltip","data-bs-placement":"top","data-bs-trigger":"hover",title:"Click to add a user"},n={class:"svg-icon svg-icon-2"},o={class:"card-body py-3"},m={class:"table-responsive"},_={class:"table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4"},u={class:"fw-bolder text-primary"},p={class:"w-25px"},f={class:"form-check form-check-sm form-check-custom form-check-solid"},v=(0,a._)("th",{class:"min-w-150px"},"Nom",-1),g=(0,a._)("th",{class:"min-w-140px"},"Délai",-1),b=(0,a._)("th",{class:"min-w-120px"},"Progres",-1),w=(0,a._)("th",{class:"min-w-100px text-end"},"Actions",-1),h={class:"form-check form-check-sm form-check-custom form-check-solid"},x=["value"],y={class:"d-flex align-items-center"},k={class:"d-flex justify-content-start flex-column"},W={href:"#",class:"text-white fw-bolder text-hover-primary fs-6"},z={class:"text-muted fw-bold text-muted d-block fs-7"},C={class:"text-end"},R={class:"d-flex flex-column w-100 me-2"},U={class:"d-flex flex-stack mb-2"},q={class:"text-muted me-2 fs-7 fw-bold"},Z={class:"progress h-6px w-100"},S=["aria-valuenow"],D={class:"text-end"},V={href:"#",class:"btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1"},A={class:"svg-icon svg-icon-3"},M={class:"svg-icon svg-icon-3 text-white"},I={class:"svg-icon svg-icon-3 text-white"};function T(e,s,t,T,j,B){const P=(0,a.up)("inline-svg"),N=(0,a.up)("router-link"),O=(0,a.up)("v-btn");return e.list?((0,a.wg)(),(0,a.iD)("div",{key:0,class:(0,i.C_)(["card bg-theme-widget",e.widgetClasses])},[(0,a._)("div",r,[c,(0,a._)("div",d,[(0,a.Wm)(N,{to:"/apps/analyse/add-action-analyse/"+e.$route.params.id,class:"btn btn-sm btn-primary btn-hover-secondary text-hover-dark me-3"},{default:(0,a.w5)((()=>[(0,a._)("span",n,[(0,a.Wm)(P,{src:"media/icons/duotune/arrows/arr075.svg"})]),(0,a.Uk)(" Ajouter un Plan d'action ")])),_:1},8,["to"])])]),(0,a._)("div",o,[(0,a._)("div",m,[(0,a._)("table",_,[(0,a._)("thead",null,[(0,a._)("tr",u,[(0,a._)("th",p,[(0,a._)("div",f,[(0,a._)("input",{class:"form-check-input",type:"checkbox",onChange:s[0]||(s[0]=s=>e.checkedRows=6===e.checkedRows.length?[]:[0,1,2,3,4,5])},null,32)])]),v,g,b,w])]),(0,a._)("tbody",null,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.list,((t,r)=>((0,a.wg)(),(0,a.iD)("tr",{key:r},[(0,a._)("td",null,[(0,a._)("div",h,[(0,a.wy)((0,a._)("input",{class:"form-check-input widget-9-check",type:"checkbox",value:r,"onUpdate:modelValue":s[1]||(s[1]=s=>e.checkedRows=s)},null,8,x),[[l.e8,e.checkedRows]])])]),(0,a._)("td",null,[(0,a._)("div",y,[(0,a._)("div",k,[(0,a._)("a",W,(0,i.zw)(t.name),1)])])]),(0,a._)("td",null,[(0,a._)("span",z,(0,i.zw)(t.delai),1)]),(0,a._)("td",C,[(0,a._)("div",R,[(0,a._)("div",U,[(0,a._)("span",q,(0,i.zw)(t.progress)+"% ",1)]),(0,a._)("div",Z,[(0,a._)("div",{class:"progress-bar",role:"progressbar",style:(0,i.j5)({width:t.progress+"%"}),"aria-valuenow":t.progress,"aria-valuemin":"0","aria-valuemax":"100"},null,12,S)])])]),(0,a._)("td",D,[(0,a._)("a",V,[(0,a._)("span",A,[(0,a.Wm)(P,{src:"media/icons/duotune/general/gen019.svg"})])]),(0,a.Wm)(N,{to:"/apps/analyse/edit-action-analyse/"+t.id,class:"btn btn-icon btn-bg-warning btn-active-color-primary btn-sm me-1"},{default:(0,a.w5)((()=>[(0,a._)("span",M,[(0,a.Wm)(P,{src:"media/icons/duotune/art/art005.svg"})])])),_:2},1032,["to"]),(0,a.Wm)(O,{onClick:s=>e.deleteItem(t),size:"x-small",class:"btn btn-icon btn-bg-danger btn-active-color-dark py-4"},{default:(0,a.w5)((()=>[(0,a._)("span",I,[(0,a.Wm)(P,{src:"media/icons/duotune/general/gen027.svg"})])])),_:2},1032,["onClick"])])])))),128))])])])])],2)):(0,a.kq)("",!0)}var j=t(2262),B=t(8433),P=t(8542),N=t.n(P),O=(0,a.aZ)({name:"kt-widget-plan",components:{},props:{widgetClasses:String,list:{required:!0,writable:!0,default:[{id:0}]}},data(){return{list_plan:this.list}},computed:{currentRouteName(){return window.location.origin}},methods:{async deleteItem(e){const s=e.id;await B.Z["delete"](this.currentRouteName+"/api/action/"+s).then((e=>{N().fire({text:"Plan Action bien Supprimé",icon:"success",buttonsStyling:!1,confirmButtonText:"Ok",customClass:{confirmButton:"btn fw-bold btn-light-danger"}})})).catch((function(e){N().fire({text:e,icon:"error",buttonsStyling:!1,confirmButtonText:"Réessayer!",customClass:{confirmButton:"btn fw-bold btn-light-danger"}})}));const t=this.list.findIndex((e=>e.id===s));-1!==t&&this.list.splice(t,1)}},setup(){const e=(0,j.iH)([]);return{checkedRows:e}}}),G=t(3744);const $=(0,G.Z)(O,[["render",T]]);var E=$},1409:function(e,s,t){t.r(s),t.d(s,{default:function(){return es}});var a=t(6252),i=t(3577);const l={class:"card mb-5 mb-xl-10 bg-theme-smm"},r={class:"card-body"},c={class:"card-header mb-2 px-0 cursor-pointer",role:"button","data-bs-toggle":"collapse","data-bs-target":"#kt_form1","aria-expanded":"true","aria-controls":"kt_form1"},d={class:"card-title"},n={class:"d-flex align-items-center"},o=(0,a._)("div",{class:"ml-2 flex-grow-1"},[(0,a._)("h2",{class:"text-white text-hover-primary fw-bolder"}," Informations Générales ")],-1),m={id:"kt_form1",class:"collapse show"},_={class:"w-100"},u={id:"kt_account_profile_details container",class:"collapse show"},p={class:"text-white fw-bold fs-2"},f={class:"d-flex flex-wrap"},v={class:"mb-3 fs-5"},g=(0,a._)("span",{class:"text-primary mr-2"},"Service : ",-1),b={class:"mb-3 fs-5"},w=(0,a._)("span",{class:"text-primary mr-2"},"Activité : ",-1),h={class:"mb-3 fs-5"},x=(0,a._)("span",{class:"text-primary mr-2"},"Zone : ",-1),y={class:"mb-3 fs-5"},k=(0,a._)("span",{class:"text-primary mr-2"},"Poste de travail : ",-1),W={class:"mb-3 fs-5"},z=(0,a._)("span",{class:"text-primary mr-2"},"Date de création : ",-1),C={class:"card-header mb-2 px-0 cursor-pointer",role:"button","data-bs-toggle":"collapse","data-bs-target":"#kt_form2","aria-expanded":"true","aria-controls":"kt_form2"},R={class:"card-title"},U={class:"d-flex align-items-center"},q=(0,a._)("div",{class:"ml-2 flex-grow-1"},[(0,a._)("h2",{class:"text-white text-hover-primary fw-bolder"}," Description Général ")],-1),Z={id:"kt_form2",class:"collapse show"},S={class:"w-100"},D={id:"kt_description_details container",class:"collapse show"},V={class:"text-white fw-bold fs-7"},A={class:"d-flex flex-wrap"},M={class:"mb-3 fs-5"},I=(0,a._)("span",{class:"text-primary mr-2"},"Aspect : ",-1),T={class:"mb-3 fs-5"},j=(0,a._)("span",{class:"text-primary mr-2"},"Impact : ",-1),B={class:"mb-3 fs-5"},P=(0,a._)("span",{class:"text-primary mr-2"},"Theme : ",-1),N={class:"d-flex flex-wrap"},O={class:"bg-light bg-opacity-5 active p-5 mt-4 mb-7 stretch-block"},G={class:"mb-3 fs-5"},$=(0,a._)("span",{class:"text-primary mr-2"},"Situation : ",-1),E={class:"bg-light bg-opacity-5 active p-5 mt-4 mb-7 d-flex flex-column stretch-block"},H={class:"mb-3 fs-5"},F=(0,a._)("span",{class:"text-primary mr-2"},"Fréquence : ",-1),K={class:"bg-light bg-opacity-5 active p-5 mt-4 mb-7 d-flex flex-column stretch-block"},L={class:"mb-3 fs-5"},Y=(0,a._)("span",{class:"text-primary mr-2"},"Gravité étendu : ",-1),J={class:"bg-light bg-opacity-5 active p-5 mt-4 mb-7 d-flex flex-column stretch-block"},Q={class:"mb-3 fs-5"},X=(0,a._)("span",{class:"text-primary mr-2"},"Gravité persistance : ",-1),ee={class:"bg-light bg-opacity-5 active p-5 mt-4 mb-7 d-flex flex-column stretch-block"},se={class:"mb-3 fs-5"},te=(0,a._)("span",{class:"text-primary mr-2"},"Gravité dangerosite : ",-1),ae={class:"bg-light bg-opacity-5 active rounded border border-dashed d-flex rounded mt-4 mb-7 stretch-block"},ie={class:"m-auto text-primary"},le={class:"svg-icon text-primary svg-icon-1 mr-2"},re={class:"fw-bolder text-primary text-hover-primary fs-2 ml-2"},ce={class:"text-muted fw-bold text-warning`"},de={class:"card-header mb-2 px-0 cursor-pointer",role:"button","data-bs-toggle":"collapse","data-bs-target":"#kt_form3","aria-expanded":"true","aria-controls":"kt_form3"},ne={class:"card-title"},oe={class:"d-flex align-items-center"},me=(0,a._)("div",{class:"ml-2 flex-grow-1"},[(0,a._)("h2",{class:"text-white text-hover-primary fw-bolder"}," Maîtrise ")],-1),_e={id:"kt_form3",class:"collapse show"},ue={class:"w-100"},pe={id:"kt_description_details container",class:"collapse show"},fe={class:"text-white fw-bold fs-7"},ve={class:"d-flex flex-wrap"},ge={class:"d-flex bg-light bg-opacity-5 active rounded border border-dashed mb-9 p-6"},be={class:"svg-icon svg-icon-2tx svg-icon-light me-4"},we={class:"d-flex flex-stack flex-grow-1"},he={class:"fw-bold"},xe={class:"fs-5 text-white"},ye={class:"mb-3 fs-5"},ke=(0,a._)("span",{class:"text-primary mr-2"},"Niveau de maitrise : ",-1),We={class:"card-header mb-2 px-0 cursor-pointer",role:"button","data-bs-toggle":"collapse","data-bs-target":"#kt_form4","aria-expanded":"true","aria-controls":"kt_form4"},ze={class:"card-title"},Ce={class:"d-flex align-items-center"},Re=(0,a._)("div",{class:"ml-2 flex-grow-1"},[(0,a._)("h2",{class:"text-white text-hover-primary fw-bolder"}," Impact Résiduel ")],-1),Ue={id:"kt_form4",class:"collapse show"},qe={class:"w-100"},Ze={id:"kt_plan_action container",class:"collapse show"},Se={class:"text-white fw-bold fs-7"},De={class:"d-flex flex-wrap"},Ve={class:"card-footer d-flex justify-content-end py-6 px-9"},Ae={class:"svg-icon svg-icon-3 text-white"};function Me(e,s,t,Me,Ie,Te){const je=(0,a.up)("v-col"),Be=(0,a.up)("v-card"),Pe=(0,a.up)("inline-svg"),Ne=(0,a.up)("List"),Oe=(0,a.up)("MixedWidget14"),Ge=(0,a.up)("TableWidgetPlan"),$e=(0,a.up)("router-link");return(0,a.wg)(),(0,a.iD)("div",l,[(0,a._)("div",r,[(0,a.Wm)(Be,{class:"my-4"},{default:(0,a.w5)((()=>[(0,a._)("div",c,[(0,a._)("div",d,[(0,a._)("div",n,[(0,a._)("span",{class:(0,i.C_)(["bullet bullet-vertical h-50px","bg-yellow-smm"])}),o])])]),(0,a._)("div",m,[(0,a._)("div",_,[(0,a._)("div",u,[(0,a._)("div",p,[(0,a._)("div",f,[(0,a.Wm)(je,{cols:"12",sm:"6",md:"4"},{default:(0,a.w5)((()=>[(0,a._)("p",v,[g,(0,a.Uk)(" "+(0,i.zw)(e.data.service?.name),1)])])),_:1}),(0,a.Wm)(je,{cols:"12",sm:"6",md:"4"},{default:(0,a.w5)((()=>[(0,a._)("p",b,[w,(0,a.Uk)(" "+(0,i.zw)(e.data.activite?.name),1)])])),_:1}),(0,a.Wm)(je,{cols:"12",sm:"6",md:"4"},{default:(0,a.w5)((()=>[(0,a._)("p",h,[x,(0,a.Uk)(" "+(0,i.zw)(e.data.zone?.name),1)])])),_:1}),(0,a.Wm)(je,{cols:"12",sm:"6",md:"4"},{default:(0,a.w5)((()=>[(0,a._)("p",y,[k,(0,a.Uk)((0,i.zw)(e.data.poste_travail?.name),1)])])),_:1}),(0,a.Wm)(je,{cols:"12",sm:"6",md:"4"},{default:(0,a.w5)((()=>[(0,a._)("p",W,[z,(0,a.Uk)(" "+(0,i.zw)(e.data.delai),1)])])),_:1})])])])])])])),_:1}),(0,a.Wm)(Be,{class:"my-4"},{default:(0,a.w5)((()=>[(0,a._)("div",C,[(0,a._)("div",R,[(0,a._)("div",U,[(0,a._)("span",{class:(0,i.C_)(["bullet bullet-vertical h-50px","bg-yellow-smm"])}),q])])]),(0,a._)("div",Z,[(0,a._)("div",S,[(0,a._)("div",D,[(0,a._)("div",V,[(0,a._)("div",A,[(0,a.Wm)(je,{cols:"12",sm:"6",md:"4"},{default:(0,a.w5)((()=>[(0,a._)("p",M,[I,(0,a.Uk)((0,i.zw)(e.data.aspect?.name),1)])])),_:1}),(0,a.Wm)(je,{cols:"12",sm:"6",md:"4"},{default:(0,a.w5)((()=>[(0,a._)("p",T,[j,(0,a.Uk)((0,i.zw)(e.data.impact?.name),1)])])),_:1}),(0,a.Wm)(je,{cols:"12",sm:"6",md:"4"},{default:(0,a.w5)((()=>[(0,a._)("p",B,[P,(0,a.Uk)((0,i.zw)(e.data.theme?.name),1)])])),_:1})]),(0,a._)("div",N,[(0,a.Wm)(je,{cols:"12",sm:"6",md:"4",class:"d-flex"},{default:(0,a.w5)((()=>[(0,a._)("div",O,[(0,a._)("p",G,[$,(0,a.Uk)((0,i.zw)(e.data.situation?.name),1)])])])),_:1}),(0,a.Wm)(je,{cols:"12",sm:"6",md:"4",class:"d-flex"},{default:(0,a.w5)((()=>[(0,a._)("div",E,[(0,a._)("p",H,[F,(0,a.Uk)((0,i.zw)(e.data.frequence?.value),1)]),(0,a._)("p",null,"* "+(0,i.zw)(e.data.frequence?.description),1)])])),_:1}),(0,a.Wm)(je,{cols:"12",sm:"6",md:"4",class:"d-flex"},{default:(0,a.w5)((()=>[(0,a._)("div",K,[(0,a._)("p",L,[Y,(0,a.Uk)((0,i.zw)(e.data.gravite_etendu?.value),1)]),(0,a._)("p",null,"* "+(0,i.zw)(e.data.gravite_etendu?.description),1)])])),_:1}),(0,a.Wm)(je,{cols:"12",sm:"6",md:"4",class:"d-flex"},{default:(0,a.w5)((()=>[(0,a._)("div",J,[(0,a._)("p",Q,[X,(0,a.Uk)((0,i.zw)(e.data.gravite_persistance?.value),1)]),(0,a._)("p",null,"* "+(0,i.zw)(e.data.gravite_persistance?.description),1)])])),_:1}),(0,a.Wm)(je,{cols:"12",sm:"6",md:"4",class:"d-flex"},{default:(0,a.w5)((()=>[(0,a._)("div",ee,[(0,a._)("p",se,[te,(0,a.Uk)((0,i.zw)(e.data.gravite_dangerosite?.value),1)]),(0,a._)("p",null,"* "+(0,i.zw)(e.data.gravite_dangerosite?.description),1)])])),_:1}),(0,a.Wm)(je,{class:"d-flex",cols:"12",sm:"6",md:"4",set:e.f_g=e.data.frequence?.value*(e.data.gravite_dangerosite?.value+e.data.gravite_persistance?.value+e.data.gravite_etendu?.value)},{default:(0,a.w5)((()=>[(0,a._)("div",ae,[(0,a._)("div",ie,[(0,a._)("span",le,[(0,a.Wm)(Pe,{src:"media/icons/duotune/abstract/abs027.svg"})]),(0,a._)("a",re,[(0,a.Uk)("F * G = "),(0,a._)("span",ce,(0,i.zw)(e.f_g),1)]),(0,a._)("p",{class:(0,i.C_)(["text-",e.data.s_ns?"danger":"info"])},(0,i.zw)(e.data.s_ns?"Significatif":"Non Significatif"),3)])])])),_:1},8,["set"])])])])])])])),_:1}),(0,a.Wm)(Be,{class:"my-4"},{default:(0,a.w5)((()=>[(0,a._)("div",de,[(0,a._)("div",ne,[(0,a._)("div",oe,[(0,a._)("span",{class:(0,i.C_)(["bullet bullet-vertical h-50px","bg-yellow-smm"])}),me])])]),(0,a._)("div",_e,[(0,a._)("div",ue,[(0,a._)("div",pe,[(0,a._)("div",fe,[(0,a._)("div",ve,[(0,a.Wm)(je,{cols:"12",sm:"6",md:"6"},{default:(0,a.w5)((()=>[(0,a._)("div",ge,[(0,a._)("span",be,[(0,a.Wm)(Pe,{src:"/media/icons/duotune/abstract/abs021.svg"})]),(0,a._)("div",we,[(0,a._)("div",he,[(0,a._)("div",xe,[(0,a._)("p",ye,[ke,(0,a.Uk)((0,i.zw)(e.data.niveau_maitrise?.niveau),1)]),(0,a.Uk)(" "+(0,i.zw)(e.data.niveau_maitrise?.name),1)])])])])])),_:1}),(0,a.Wm)(je,{cols:"12",sm:"6",md:"6"}),(0,a.Wm)(je,{cols:"12",sm:"6",md:"4"},{default:(0,a.w5)((()=>[(0,a.Wm)(Ne,{title:"Moyens de maîtrise Humain",bg:"info","widget-classes":"card-xxl-stretch mb-xl-3 bg-smm",list:e.data.moyen_maitrise_humains},null,8,["list"])])),_:1}),(0,a.Wm)(je,{cols:"12",sm:"6",md:"4"},{default:(0,a.w5)((()=>[(0,a.Wm)(Ne,{title:"Moyens de maîtrise Technique",bg:"secondary","widget-classes":"card-xxl-stretch mb-xl-3 bg-smm",list:e.data.moyen_maitrise_techniques},null,8,["list"])])),_:1}),(0,a.Wm)(je,{cols:"12",sm:"6",md:"4"},{default:(0,a.w5)((()=>[(0,a.Wm)(Ne,{title:"Moyens de maîtrise Organisation",bg:"danger","widget-classes":"card-xxl-stretch mb-xl-3 bg-smm",list:e.data.moyen_maitrise_organisations},null,8,["list"])])),_:1})])])])])])])),_:1}),(0,a.Wm)(Be,{class:"my-4"},{default:(0,a.w5)((()=>[(0,a._)("div",We,[(0,a._)("div",ze,[(0,a._)("div",Ce,[(0,a._)("span",{class:(0,i.C_)(["bullet bullet-vertical h-50px","bg-yellow-smm"])}),Re])])]),(0,a._)("div",Ue,[(0,a._)("div",qe,[(0,a._)("div",Ze,[(0,a._)("div",Se,[(0,a._)("div",De,[(0,a.Wm)(je,{cols:"12",sm:"6",md:"12"},{default:(0,a.w5)((()=>[(0,a.Wm)(Oe,{data:e.data,listValRef:e.listValRef,"widget-classes":"card-xxl-stretch mb-5 mb-xl-8","widget-color":"#23716f"},null,8,["data","listValRef"])])),_:1})])])])])])])),_:1}),e.$route.params.id?((0,a.wg)(),(0,a.j4)(Ge,{key:0,list:e.data.plan_actions,"widget-classes":"card-xxl-stretch mb-5 mb-xl-8 bg-smm"},null,8,["list"])):(0,a.kq)("",!0)]),(0,a._)("div",Ve,[(0,a.Wm)($e,{to:"/apps/analyse/edit-analyse/"+e.$route.params.id,class:"btn btn-md btn-info me-3 p-4"},{default:(0,a.w5)((()=>[(0,a._)("span",Ae,[(0,a.Wm)(Pe,{src:"media/icons/duotune/art/art005.svg"})]),(0,a.Uk)(" Modifier ")])),_:1},8,["to"])])])}var Ie=t(8932);const Te={class:"card-header border-0"},je={class:"card-title fw-bolder text-white"},Be=(0,a._)("div",{class:"card-toolbar"},null,-1),Pe={class:"card-body pt-2"},Ne=(0,a._)("div",{class:"mx-1"},null,-1),Oe={class:"flex-grow-1"},Ge={class:"text-hover-primary text-white fw-bolder fs-8"};function $e(e,s,t,l,r,c){return(0,a.wg)(),(0,a.iD)("div",{class:(0,i.C_)(["card",e.widgetClasses]),style:{"background-color":"#235d61"}},[(0,a._)("div",Te,[(0,a._)("h3",je,(0,i.zw)(e.title),1),Be]),(0,a._)("div",Pe,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.list,((s,t)=>((0,a.wg)(),(0,a.iD)("div",{key:t,class:(0,i.C_)([{"mb-3":e.list.length-1!==t},"d-flex align-items-center"])},[(0,a._)("span",{class:(0,i.C_)(["bullet bullet-vertical h-20px mb-2",`bg-${e.bg}`])},null,2),Ne,(0,a._)("div",Oe,[(0,a._)("p",Ge,(0,i.zw)(s.name),1)])],2)))),128))])],2)}var Ee=(0,a.aZ)({name:"kt-widget-list",components:{},props:{title:String,bg:String,widgetClasses:String,list:[]}}),He=t(3744);const Fe=(0,He.Z)(Ee,[["render",$e]]);var Ke=Fe,Le=t(8433),Ye=t(5886),Je=t(2973),Qe=(0,a.aZ)({components:{List:Ke,MixedWidget14:Ye.Z,TableWidgetPlan:Je.Z},name:"customer-details",data(){return{listValRef:{activites:[],services:[],zones:[],poste_travails:[],themes:[],aspects:[],impacts:[],situations:[],frequences:[],gravite_etendus:[],gravite_dangerosites:[],gravite_persistances:[],moyen_maitrise_humains:[],moyen_maitrise_techniques:[],moyen_maitrise_organisations:[],niveau_priorites:[],niveau_maitrises:[],plan_actions:[]},activites:[],zones:[],poste_travails:[],gravite_dangerosites:[],gravite_dangerosite_irs:[],data:{moyen_maitrise_humains:[],moyen_maitrise_techniques:[],moyen_maitrise_organisations:[],plan_actions:[],niveau_priorite:1,niveau_maitrise:0,service:null,activite:null,zone:null,poste_travail:null,aspect:null,impact:null,situation:null,delai:(new Date).toISOString().substr(0,10),menu2:!1,s_ns:!1,theme:null,frequence:null,gravite_etendu:null,gravite_dangerosite:null,gravite_persistance:null,frequence_ir:null,gravite_etendu_ir:null,gravite_dangerosite_ir:null,gravite_persistance_ir:null,impact_residuel:0}}},mounted(){this.fetch()},methods:{async fetch(){const e=await Le.Z.get(window.location.origin+"/api/valeur-ref");this.listValRef=e.data;const s=await Le.Z.get(window.location.origin+"/api/analyse/"+this.$route.params.id);this.data=s.data}},setup(){return(0,a.bv)((()=>{(0,Ie.M)("Ajouter une AE",["Analyse environnementale"])})),{}}});const Xe=(0,He.Z)(Qe,[["render",Me]]);var es=Xe}}]);
//# sourceMappingURL=1409.348079c9.js.map