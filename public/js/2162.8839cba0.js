"use strict";(self["webpackChunkdemo1"]=self["webpackChunkdemo1"]||[]).push([[2162],{1097:function(e,t,a){a.r(t),a.d(t,{default:function(){return U}});var s=a(66252),n=a(49963),l=a(3577);const i={class:"d-flex align-items-center position-relative mt-2"},o={class:"svg-icon svg-icon-1 position-absolute ms-6"},r={class:"d-flex pt-3 px-6 w-75","data-kt-subscription-table-toolbar":"base"},c={class:"d-flex justify-content-end","data-kt-subscription-table-toolbar":"base"},d={class:"d-flex my-4"},u={class:"svg-icon svg-icon-2"},m={class:"svg-icon svg-icon-2"},p={class:"text-white text-hover-primary fw-bolder fs-8"},f={class:"d-flex flex-column w-100 me-2"},v={class:"d-flex flex-stack mb-2"},w={class:"text-muted me-2 fs-7 fw-bold"},g={class:"progress h-6px w-100"},h=["aria-valuenow"],b={class:"text-center pt-2"};function _(e,t,a,_,y,x){const k=(0,s.up)("inline-svg"),W=(0,s.up)("v-autocomplete"),A=(0,s.up)("v-btn"),P=(0,s.up)("router-link"),C=(0,s.up)("v-card-title"),V=(0,s.up)("v-spacer"),U=(0,s.up)("v-icon"),I=(0,s.up)("v-row"),R=(0,s.up)("v-data-table"),j=(0,s.up)("v-pagination"),z=(0,s.up)("v-text-field"),B=(0,s.up)("v-card-text"),D=(0,s.up)("v-card");return(0,s.wg)(),(0,s.iD)("div",null,[(0,s.Wm)(D,null,{default:(0,s.w5)((()=>[(0,s.Wm)(C,{class:"d-flex justify-content-between"},{default:(0,s.w5)((()=>[(0,s._)("div",null,[(0,s._)("div",i,[(0,s._)("span",o,[(0,s.Wm)(k,{src:"media/icons/duotune/general/gen021.svg"})]),(0,s.wy)((0,s._)("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=e=>y.search=e),class:"form-control form-control-solid w-250px ps-15",placeholder:"Rechercher"},null,512),[[n.nr,y.search]])])]),(0,s._)("div",r,[(0,s.Wm)(W,{clearable:"",color:"yellow",modelValue:y.analyse,"onUpdate:modelValue":t[1]||(t[1]=e=>y.analyse=e),items:y.analyses,"item-title":e=>"kt-"+e.id+" Activité : "+e.activite.name+" F*G : "+e.F_G+" Impact Résiduel : "+e.impact_residuel,density:"compact","return-object":"",label:"Environemmentale Analyse Associé",class:"fs-10"},null,8,["modelValue","items","item-title"])]),(0,s._)("div",c,[(0,s._)("div",d,[(0,s.Wm)(A,{onClick:e.exportToExcel,class:"btn btn-sm btn-light me-2",id:"kt_user_follow_button"},{default:(0,s.w5)((()=>[(0,s._)("span",u,[(0,s.Wm)(k,{src:"media/icons/duotune/arrows/arr078.svg"})]),(0,s.Uk)(" Exporter ")])),_:1},8,["onClick"]),(0,s.Wm)(P,{to:"/apps/analyse/add-action",class:"btn btn-sm btn-primary btn-hover-secondary text-hover-dark me-3 pb-0"},{default:(0,s.w5)((()=>[(0,s._)("span",m,[(0,s.Wm)(k,{src:"media/icons/duotune/arrows/arr075.svg"})]),(0,s.Uk)(" Ajouter un Plan d'action ")])),_:1})])])])),_:1}),(0,s.Wm)(V),(0,s.Wm)(B,null,{default:(0,s.w5)((()=>[(0,s.Wm)(R,{search:y.search,headers:y.headers,items:x.filteredPlanActions,"hide-default-footer":"","show-group-by":"",expanded:""},{["item.analyse_env_id"]:(0,s.w5)((({item:e})=>[(0,s._)("p",p," kt- "+(0,l.zw)(e.columns.analyse_env_id),1)])),["item.actions"]:(0,s.w5)((({item:e})=>[(0,s.Wm)(I,{class:"text-center d-flex"},{default:(0,s.w5)((()=>[(0,s.Wm)(P,{class:"m-2",to:`/apps/analyse/edit-action-analyse/${e.raw.id}`},{default:(0,s.w5)((()=>[(0,s.Wm)(A,{color:"info",size:"x-small"},{default:(0,s.w5)((()=>[(0,s.Wm)(U,{class:"text-white"},{default:(0,s.w5)((()=>[(0,s.Uk)("mdi-eye")])),_:1})])),_:1})])),_:2},1032,["to"]),(0,s.Wm)(P,{class:"m-2",to:`/apps/analyse/edit-action-analyse/${e.raw.id}`},{default:(0,s.w5)((()=>[(0,s.Wm)(A,{color:"warning",size:"x-small"},{default:(0,s.w5)((()=>[(0,s.Wm)(U,{class:"text-white"},{default:(0,s.w5)((()=>[(0,s.Uk)("mdi-pencil")])),_:1})])),_:1})])),_:2},1032,["to"]),(0,s.Wm)(A,{color:"danger",size:"x-small",onClick:t=>x.deleteItem(e),class:"m-2"},{default:(0,s.w5)((()=>[(0,s.Wm)(U,{class:"text-white"},{default:(0,s.w5)((()=>[(0,s.Uk)("mdi-delete")])),_:1})])),_:2},1032,["onClick"])])),_:2},1024)])),["item.progress"]:(0,s.w5)((({item:e})=>[(0,s._)("div",f,[(0,s._)("div",v,[(0,s._)("span",w,(0,l.zw)(e.columns.progress)+"% ",1)]),(0,s._)("div",g,[(0,s._)("div",{class:(0,l.C_)(["progress-bar","bg-warning"]),role:"progressbar",style:(0,l.j5)({width:e.columns.progress+"%"}),"aria-valuenow":e.columns.progress,"aria-valuemin":"0","aria-valuemax":"100"},null,12,h)])])])),_:2},1032,["search","headers","items"]),(0,s._)("div",b,[(0,s.Wm)(j,{modelValue:y.page,"onUpdate:modelValue":t[2]||(t[2]=e=>y.page=e),length:y.pageCount},null,8,["modelValue","length"]),(0,s.Wm)(z,{class:"d-none",value:y.itemsPerPage,label:"Items per page",type:"number",min:"-1",max:"15",onInput:t[3]||(t[3]=e=>y.itemsPerPage=parseInt(e,10))},null,8,["value"])])])),_:1})])),_:1})])}var y=a(8433),x=a(17677),k=a(12793),W=a(48542),A=a.n(W),P={components:{VDataTable:x.y,VPagination:k.k},computed:{currentRouteName(){return window.location.origin},filteredPlanActions(){return this.analyse?this.planActions.filter((e=>e.analyse_env_id===this.analyse.id)):this.planActions}},data(){return{page:1,pageCount:0,itemsPerPage:10,headers:[{title:"Analyse",key:"analyse_env_id"},{title:"Action",value:"name"},{title:"Description",value:"description"},{title:"Progrés",value:"progress",key:"progress"},{title:"Delai",value:"delai"},{title:"Actions",key:"actions"}],planActions:[],analyses:[],analyse:null,search:"",initialPlans:[]}},mounted(){this.fetch()},methods:{async deleteItem(e){const t=e.raw.id;await y.Z["delete"](this.currentRouteName+"/api/action/"+t).then((e=>{A().fire({text:"Plan Action bien Supprimé",icon:"success",buttonsStyling:!1,confirmButtonText:"Ok",customClass:{confirmButton:"btn fw-bold btn-light-danger"}})})).catch((function(e){A().fire({text:e,icon:"error",buttonsStyling:!1,confirmButtonText:"Réessayer!",customClass:{confirmButton:"btn fw-bold btn-light-danger"}})}));const a=this.filteredPlanActions.findIndex((e=>e.id===t));-1!==a&&this.filteredPlanActions.splice(a,1)},async fetch(){const e=await y.Z.get(this.currentRouteName+"/api/action");this.initialPlans=e.data,this.planActions=e.data;const t=await y.Z.get(this.currentRouteName+"/api/analyse");this.analyses=t.data}}},C=a(83744);const V=(0,C.Z)(P,[["render",_]]);var U=V}}]);
//# sourceMappingURL=2162.8839cba0.js.map