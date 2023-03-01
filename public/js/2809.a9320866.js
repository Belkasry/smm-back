"use strict";(self["webpackChunkdemo1"]=self["webpackChunkdemo1"]||[]).push([[2809],{68932:function(e,t,s){s.d(t,{M:function(){return l},V:function(){return r}});var i=s(66450),a=s(15758);const l=(e,t)=>{i.Z.dispatch(a.e.SET_BREADCRUMB_ACTION,{title:e,pageBreadcrumbPath:t})},r=e=>{i.Z.dispatch(a.e.SET_BREADCRUMB_ACTION,{title:e})}},15469:function(e,t,s){s.d(t,{Z:function(){return q}});var i=s(66252),a=s(3577);const l={class:"card-body d-flex flex-column"},r={class:"row"},n={class:"col-3 mr-4 d-flex flex-md-column bg-light bg-opacity-5 active rounded border border-primary center-widget"},c=(0,i._)("a",{href:"#",class:"text-white text-hover-primary fw-bolder fs-3 center-widget"},"Impact Résiduel",-1),o=(0,i._)("span",{class:"pulse-ring border-9"},null,-1),d={class:"row col-4 ml-3"},u={class:"col-5 d-flex bg-light bg-opacity-5 mb-2 mx-2 border border-primary"},m={class:"d-flex mb-9 me-2 p-3"},b=(0,i._)("div",{class:"fs-5 text-white fw-bolder lh-1"},"Fréquence",-1),f={class:"fs-8 text-white"},_={class:"col-5 d-flex bg-light bg-opacity-5 mb-2 border border-primary"},g={class:"d-flex mb-9 me-2 p-3"},p=(0,i._)("div",{class:"fs-4 text-white fw-bolder lh-1"},"Etendu",-1),h={class:"fs-8 text-white"},v={class:"col-5 d-flex bg-light bg-opacity-5 mx-2 border border-primary"},w={class:"d-flex mb-9 me-2 p-3"},x=(0,i._)("div",{class:"fs-5 text-white fw-bolder lh-1"},"Persistance",-1),y={class:"fs-8 text-white"},k={class:"col-5 d-flex bg-light bg-opacity-5 border border-primary"},C={class:"d-flex mb-9 me-2 p-3"},R=(0,i._)("div",{class:"fs-5 text-white fw-bolder lh-1"},"Dangerosité",-1),z={class:"fs-8 text-white mt"},B={class:"col-4 d-flex bg-light bg-opacity-5 active rounded border border-primary"},Z={class:"d-flex flex-stack flex-grow-1"},D={class:"fw-bold"},S={class:"fs-5 text-white"},V={href:"#",class:"me-1 fs-2"};function A(e,t,s,A,T,W){return e.data&&e.listValRef?((0,i.wg)(),(0,i.iD)("div",{key:0,class:(0,a.C_)(e.widgetClasses),style:(0,a.j5)(`background-color: ${e.widgetColor}`)},[(0,i._)("div",l,[(0,i._)("div",r,[(0,i._)("div",n,[c,(0,i._)("a",{href:"#",class:(0,a.C_)(["btn btn-icon btn-lg btn-block pulse","pulse-"+e.iae_color])},[(0,i._)("span",{class:(0,a.C_)("fs-2 text-"+e.iae_color)},(0,a.zw)(e.ies?e.ies:0),3),o],2)]),(0,i._)("div",d,[(0,i._)("div",u,[(0,i._)("div",m,[(0,i._)("div",null,[b,(0,i._)("div",f,(0,a.zw)(e.data.frequence_ir?.description),1)])])]),(0,i._)("div",_,[(0,i._)("div",g,[(0,i._)("div",null,[p,(0,i._)("div",h,(0,a.zw)(e.data.gravite_etendu_ir?.description),1)])])]),(0,i._)("div",v,[(0,i._)("div",w,[(0,i._)("div",null,[x,(0,i._)("div",y,(0,a.zw)(e.data.gravite_persistance_ir?.description),1)])])]),(0,i._)("div",k,[(0,i._)("div",C,[(0,i._)("div",null,[R,(0,i._)("div",z,(0,a.zw)(e.data.gravite_dangerosite_ir?.description),1)])])])]),(0,i._)("div",B,[(0,i._)("div",Z,[(0,i._)("div",D,[(0,i._)("div",S,[(0,i._)("p",null,[(0,i._)("a",V,(0,a.zw)(e.niveau?.name),1),(0,i.Uk)(" : "+(0,a.zw)(e.niveau?.action),1)])])])])])])])],6)):(0,i.kq)("",!0)}var T=(0,i.aZ)({name:"widget-14",props:{widgetClasses:String,widgetColor:String,data:Object,listValRef:Object},data(){return{}},computed:{ies(){return this.data?this.data.frequence_ir?.value*(this.data.gravite_dangerosite_ir?.value+this.data.gravite_persistance_ir?.value+this.data.gravite_etendu_ir?.value):0},iae_color(){return this.ies>20?"danger":this.ies>10&&this.ies<=20?"warning":"info"},niveau(){if(this.listValRef){if(this.ies>=0&&this.ies<=10)return this.listValRef.niveau_priorites[2];if(this.ies>10&&this.ies<=20)return this.listValRef.niveau_priorites[1];if(this.ies>20)return this.listValRef.niveau_priorites[0]}return{name:"",action:""}}}}),W=s(83744);const j=(0,W.Z)(T,[["render",A]]);var q=j},78862:function(e,t,s){s.d(t,{Z:function(){return $}});var i=s(66252),a=s(3577),l=s(49963);const r={class:"card-header border-0 pt-5"},n=(0,i._)("h3",{class:"card-title align-items-start flex-column"},[(0,i._)("span",{class:"text-primary card-label fw-bolder fs-3 mb-1"},"Plan d'action"),(0,i._)("span",{class:"text-muted mt-1 fw-bold fs-7"}," 5 plans")],-1),c={class:"card-toolbar","data-bs-toggle":"tooltip","data-bs-placement":"top","data-bs-trigger":"hover",title:"Click to add a user"},o={class:"svg-icon svg-icon-2"},d={class:"card-body py-3"},u={class:"table-responsive"},m={class:"table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4"},b={class:"fw-bolder text-primary"},f={class:"w-25px"},_={class:"form-check form-check-sm form-check-custom form-check-solid"},g=(0,i._)("th",{class:"min-w-150px"},"Nom",-1),p=(0,i._)("th",{class:"min-w-140px"},"Délai",-1),h=(0,i._)("th",{class:"min-w-120px"},"Progres",-1),v=(0,i._)("th",{class:"min-w-100px text-end"},"Actions",-1),w={class:"form-check form-check-sm form-check-custom form-check-solid"},x=["value"],y={class:"d-flex align-items-center"},k={class:"d-flex justify-content-start flex-column"},C={href:"#",class:"text-white fw-bolder text-hover-primary fs-6"},R={class:"text-muted fw-bold text-muted d-block fs-7"},z={class:"text-end"},B={class:"d-flex flex-column w-100 me-2"},Z={class:"d-flex flex-stack mb-2"},D={class:"text-muted me-2 fs-7 fw-bold"},S={class:"progress h-6px w-100"},V=["aria-valuenow"],A={class:"text-end"},T={href:"#",class:"btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1"},W={class:"svg-icon svg-icon-3"},j={class:"svg-icon svg-icon-3 text-white"},q={class:"svg-icon svg-icon-3 text-white"};function I(e,t,s,I,P,E){const N=(0,i.up)("inline-svg"),O=(0,i.up)("router-link"),U=(0,i.up)("v-btn");return e.list?((0,i.wg)(),(0,i.iD)("div",{key:0,class:(0,a.C_)(["card bg-theme-widget",e.widgetClasses])},[(0,i._)("div",r,[n,(0,i._)("div",c,[(0,i.Wm)(O,{to:"/apps/analyse/add-action-analyse/"+e.$route.params.id,class:"btn btn-sm btn-primary btn-hover-secondary text-hover-dark me-3"},{default:(0,i.w5)((()=>[(0,i._)("span",o,[(0,i.Wm)(N,{src:"media/icons/duotune/arrows/arr075.svg"})]),(0,i.Uk)(" Ajouter un Plan d'action ")])),_:1},8,["to"])])]),(0,i._)("div",d,[(0,i._)("div",u,[(0,i._)("table",m,[(0,i._)("thead",null,[(0,i._)("tr",b,[(0,i._)("th",f,[(0,i._)("div",_,[(0,i._)("input",{class:"form-check-input",type:"checkbox",onChange:t[0]||(t[0]=t=>e.checkedRows=6===e.checkedRows.length?[]:[0,1,2,3,4,5])},null,32)])]),g,p,h,v])]),(0,i._)("tbody",null,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(e.list,((s,r)=>((0,i.wg)(),(0,i.iD)("tr",{key:r},[(0,i._)("td",null,[(0,i._)("div",w,[(0,i.wy)((0,i._)("input",{class:"form-check-input widget-9-check",type:"checkbox",value:r,"onUpdate:modelValue":t[1]||(t[1]=t=>e.checkedRows=t)},null,8,x),[[l.e8,e.checkedRows]])])]),(0,i._)("td",null,[(0,i._)("div",y,[(0,i._)("div",k,[(0,i._)("a",C,(0,a.zw)(s.name),1)])])]),(0,i._)("td",null,[(0,i._)("span",R,(0,a.zw)(s.delai),1)]),(0,i._)("td",z,[(0,i._)("div",B,[(0,i._)("div",Z,[(0,i._)("span",D,(0,a.zw)(s.progress)+"% ",1)]),(0,i._)("div",S,[(0,i._)("div",{class:"progress-bar",role:"progressbar",style:(0,a.j5)({width:s.progress+"%"}),"aria-valuenow":s.progress,"aria-valuemin":"0","aria-valuemax":"100"},null,12,V)])])]),(0,i._)("td",A,[(0,i._)("a",T,[(0,i._)("span",W,[(0,i.Wm)(N,{src:"media/icons/duotune/general/gen019.svg"})])]),(0,i.Wm)(O,{to:"/apps/analyse/edit-action-analyse/"+s.id,class:"btn btn-icon btn-bg-warning btn-active-color-primary btn-sm me-1"},{default:(0,i.w5)((()=>[(0,i._)("span",j,[(0,i.Wm)(N,{src:"media/icons/duotune/art/art005.svg"})])])),_:2},1032,["to"]),(0,i.Wm)(U,{onClick:t=>e.deleteItem(s),size:"x-small",class:"btn btn-icon btn-bg-danger btn-active-color-dark py-4"},{default:(0,i.w5)((()=>[(0,i._)("span",q,[(0,i.Wm)(N,{src:"media/icons/duotune/general/gen027.svg"})])])),_:2},1032,["onClick"])])])))),128))])])])])],2)):(0,i.kq)("",!0)}var P=s(2262),E=s(8433),N=s(48542),O=s.n(N),U=(0,i.aZ)({name:"kt-widget-plan",components:{},props:{widgetClasses:String,list:{required:!0,writable:!0,default:[{id:0}]}},data(){return{list_plan:this.list}},computed:{currentRouteName(){return"https://028d-196-217-107-48.eu.ngrok.io"}},methods:{async deleteItem(e){const t=e.id;await E.Z["delete"](this.currentRouteName+"/api/action/"+t).then((e=>{O().fire({text:"Plan Action bien Supprimé",icon:"success",buttonsStyling:!1,confirmButtonText:"Ok",customClass:{confirmButton:"btn fw-bold btn-light-danger"}})})).catch((function(e){O().fire({text:e,icon:"error",buttonsStyling:!1,confirmButtonText:"Try again!",customClass:{confirmButton:"btn fw-bold btn-light-danger"}})}));const s=this.list.findIndex((e=>e.id===t));-1!==s&&this.list.splice(s,1)}},setup(){const e=(0,P.iH)([]);return{checkedRows:e}}}),M=s(83744);const H=(0,M.Z)(U,[["render",I]]);var $=H}}]);
//# sourceMappingURL=2809.a9320866.js.map