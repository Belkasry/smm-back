"use strict";(self["webpackChunkdemo1"]=self["webpackChunkdemo1"]||[]).push([[3306],{9945:function(e,t){const a={};t["Z"]=a},8932:function(e,t,a){a.d(t,{M:function(){return o},V:function(){return n}});var l=a(6450),s=a(5758);const o=(e,t)=>{l.Z.dispatch(s.e.SET_BREADCRUMB_ACTION,{title:e,pageBreadcrumbPath:t})},n=e=>{l.Z.dispatch(s.e.SET_BREADCRUMB_ACTION,{title:e})}},3306:function(e,t,a){a.r(t),a.d(t,{default:function(){return R}});var l=a(6252),s=a(3577),o=a(9963);const n={class:"card-header mb-2 px-0 cursor-pointer",role:"button","data-bs-toggle":"collapse","data-bs-target":"#kt_form1","aria-expanded":"true","aria-controls":"kt_form1"},d={class:"card-title"},i={class:"d-flex align-items-center"},r={class:"ml-2 flex-grow-1"},u={class:"text-white text-hover-primary fw-bolder"},m={id:"kt_form1",class:"pt-3 mx-4 collapse show"},c={class:"w-100"},p={id:"kt_account_profile_details container",class:"collapse show"},b={class:"text-white fw-bold fs-2"},f={class:"d-flex flex-wrap"},_={class:"bg-light bg-opacity-5 p-4 text-primary"},h={class:"bg-light bg-opacity-5 mb-3"},w={class:"svg-icon svg-icon-3 text-white"};function v(e,t,a,v,g,y){const V=(0,l.up)("router-link"),W=(0,l.up)("v-col"),x=(0,l.up)("v-text-field"),k=(0,l.up)("v-label"),U=(0,l.up)("v-slider"),R=(0,l.up)("v-textarea"),C=(0,l.up)("v-select"),O=(0,l.up)("inline-svg"),B=(0,l.up)("v-btn"),N=(0,l.up)("v-row"),M=(0,l.up)("v-form"),P=(0,l.up)("v-card"),T=(0,l.up)("v-container");return e.$route.params.id?((0,l.wg)(),(0,l.j4)(T,{key:0,class:"bg-theme-smm"},{default:(0,l.w5)((()=>[(0,l.Wm)(P,null,{default:(0,l.w5)((()=>[(0,l._)("div",n,[(0,l._)("div",d,[(0,l._)("div",i,[(0,l._)("span",{class:(0,s.C_)(["bullet bullet-vertical h-50px","bg-yellow-smm"])}),(0,l._)("div",r,[(0,l._)("h2",u," Plan d'action "+(0,s.zw)(g.data.name),1)])])])]),(0,l._)("div",m,[(0,l._)("div",c,[(0,l._)("div",p,[(0,l._)("div",b,[(0,l._)("div",f,[(0,l.Wm)(M,{onSubmit:(0,o.iM)(y.submitForm,["prevent"])},{default:(0,l.w5)((()=>[(0,l.Wm)(N,null,{default:(0,l.w5)((()=>[g.data.analyse_env?((0,l.wg)(),(0,l.j4)(W,{key:0,md:"6"},{default:(0,l.w5)((()=>[(0,l.Wm)(V,{to:"/apps/analyse/show-analyse/"+g.data.analyse_env.id},{default:(0,l.w5)((()=>[(0,l._)("p",_,(0,s.zw)("kt-"+g.data.analyse_env.id+" Impact Résiduel : "+g.data.analyse_env.impact_residuel),1)])),_:1},8,["to"])])),_:1})):(0,l.kq)("",!0),(0,l.Wm)(W,{md:"6"},{default:(0,l.w5)((()=>[(0,l.Wm)(x,{modelValue:g.data.name,"onUpdate:modelValue":t[0]||(t[0]=e=>g.data.name=e),label:"Name",required:""},null,8,["modelValue"])])),_:1}),(0,l.Wm)(W,{md:"6",class:"d-none"},{default:(0,l.w5)((()=>[(0,l.Wm)(x,{modelValue:g.data.ordre_priorite,"onUpdate:modelValue":t[1]||(t[1]=e=>g.data.ordre_priorite=e),label:"Priority",type:"number"},null,8,["modelValue"])])),_:1}),(0,l.Wm)(W,{md:"6"},{default:(0,l.w5)((()=>[(0,l.Wm)(x,{modelValue:g.data.delai,"onUpdate:modelValue":t[2]||(t[2]=e=>g.data.delai=e),label:"Delai",type:"date"},null,8,["modelValue"]),(0,l._)("div",h,[(0,l.Wm)(k,{class:"ml-3 my-4"},{default:(0,l.w5)((()=>[(0,l.Uk)("Progrés")])),_:1}),(0,l.Wm)(U,{step:"5","show-ticks":"",class:"p-3",modelValue:g.data.progress,"onUpdate:modelValue":t[3]||(t[3]=e=>g.data.progress=e),color:g.data.progress<30?"info":g.data.progress<60?"primary":"success","thumb-label":"always"},null,8,["modelValue","color"])])])),_:1}),(0,l.Wm)(W,{md:"6"},{default:(0,l.w5)((()=>[(0,l.Wm)(R,{modelValue:g.data.description,"onUpdate:modelValue":t[4]||(t[4]=e=>g.data.description=e),label:"Description",required:""},null,8,["modelValue"])])),_:1}),(0,l.Wm)(W,{md:"6",class:"d-none"},{default:(0,l.w5)((()=>[(0,l.Wm)(R,{modelValue:g.data.notes,"onUpdate:modelValue":t[5]||(t[5]=e=>g.data.notes=e),label:"Notes"},null,8,["modelValue"])])),_:1}),(0,l.Wm)(W,{md:"6"},{default:(0,l.w5)((()=>[(0,l.Wm)(C,{modelValue:g.data.responsables,"onUpdate:modelValue":t[6]||(t[6]=e=>g.data.responsables=e),items:g.userOptions,"items-label":g.userOptions,label:"Responsables","item-title":"name","return-object":"",multiple:"",chips:""},null,8,["modelValue","items","items-label"])])),_:1}),(0,l.Wm)(W,{md:"6",class:"d-none"},{default:(0,l.w5)((()=>[(0,l.Wm)(x,{modelValue:g.data.cout,"onUpdate:modelValue":t[7]||(t[7]=e=>g.data.cout=e),label:"COÙT",type:"number"},null,8,["modelValue"])])),_:1}),(0,l.Wm)(W,{md:"12"},{default:(0,l.w5)((()=>[(0,l.Wm)(B,{type:"submit",class:"float-right btn-info btn m-4"},{default:(0,l.w5)((()=>[(0,l._)("span",w,[(0,l.Wm)(O,{src:"media/icons/duotune/art/art005.svg"})]),(0,l.Uk)(" Modifier")])),_:1})])),_:1})])),_:1})])),_:1},8,["onSubmit"])])])])])])])),_:1})])),_:1})):(0,l.kq)("",!0)}var g=a(8433),y=(a(9945),a(8542)),V=a.n(y),W=a(8932),x={setup(){return(0,l.bv)((()=>{(0,W.M)("Modifier un PAE",["Plan d'action"])})),{}},computed:{currentRouteName(){return window.location.origin}},data(){return{data:{analyse_env:{},name:"",description:"",progress:0,delai:null,ordre_priorite:0,status:"planned",notes:"",documents:"",cout:null},statusOptions:["planned","in progress","completed"],userOptions:[],envOptions:[]}},async created(){this.fetch()},methods:{async fetch(){if(this.$route.params.id){const e=await g.Z.get(this.currentRouteName+"/api/action/"+this.$route.params.id);this.data=e.data;const t=await g.Z.get(this.currentRouteName+"/api/users");this.userOptions=t.data}},submitForm(){const e={name:this.data.name,description:this.data.description,progress:this.data.progress,delai:this.data.delai,notes:this.data.notes,cout:this.data.cout,responsables:this.data.responsables.map((e=>e.id))};g.Z.put(this.currentRouteName+"/api/action/"+this.$route.params.id,e).then((e=>{V().fire({text:"Plan d'action bien Ajouté",icon:"success",buttonsStyling:!1,confirmButtonText:"Ok",customClass:{confirmButton:"btn fw-bold btn-light-success"}}).then((e=>{this.$router.push({name:"apps-analyse-list-action"})}))})).catch((function(e){V().fire({text:e,icon:"error",buttonsStyling:!1,confirmButtonText:"Réessayer!",customClass:{confirmButton:"btn fw-bold btn-light-danger"}})}))}}},k=a(3744);const U=(0,k.Z)(x,[["render",v]]);var R=U}}]);
//# sourceMappingURL=3306.4dd70952.js.map