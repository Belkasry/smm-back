"use strict";(self["webpackChunkdemo1"]=self["webpackChunkdemo1"]||[]).push([[7340],{2440:function(e,a,t){t.d(a,{O:function(){return o}});var l=t(5080);const o=e=>`media/illustrations/${l.Gv.value}/${e}`},5080:function(e,a,t){t.d(a,{Df:function(){return y},F9:function(){return _},Fh:function(){return i},Gv:function(){return k},K1:function(){return g},Lj:function(){return n},Ne:function(){return c},_T:function(){return f},az:function(){return b},jH:function(){return s},o$:function(){return d},o4:function(){return v},pD:function(){return p},vc:function(){return r},vj:function(){return h},xV:function(){return u},zK:function(){return m}});var l=t(6252),o=t(6450);const r=(0,l.Fl)((()=>o.Z.getters.layoutConfig())),s=((0,l.Fl)((()=>o.Z.getters.layoutConfig("sidebar.display"))),(0,l.Fl)((()=>"fluid"===o.Z.getters.layoutConfig("footer.width")))),i=(0,l.Fl)((()=>"fluid"===o.Z.getters.layoutConfig("header.width"))),n=(0,l.Fl)((()=>o.Z.getters.layoutConfig("header.left"))),d=(0,l.Fl)((()=>!0===o.Z.getters.layoutConfig("aside.display"))),c=(0,l.Fl)((()=>"fluid"===o.Z.getters.layoutConfig("toolbar.width"))),u=(0,l.Fl)((()=>o.Z.getters.layoutConfig("toolbar.display"))),m=(0,l.Fl)((()=>o.Z.getters.layoutConfig("loader.display"))),f=(0,l.Fl)((()=>"fluid"===o.Z.getters.layoutConfig("content.width"))),p=(0,l.Fl)((()=>""+o.Z.getters.layoutConfig("loader.logo"))),g=(0,l.Fl)((()=>!!o.Z.getters.layoutConfig("aside.display"))),_=(0,l.Fl)((()=>o.Z.getters.layoutConfig("aside.theme"))),b=(0,l.Fl)((()=>o.Z.getters.layoutConfig("toolbar.display"))),v=(0,l.Fl)((()=>o.Z.getters.layoutConfig("aside.menuIcon"))),y=(0,l.Fl)((()=>o.Z.getters.layoutConfig("main.logo.light"))),h=(0,l.Fl)((()=>o.Z.getters.layoutConfig("main.logo.dark"))),k=((0,l.Fl)((()=>o.Z.getters.layoutConfig("header.menuIcon"))),(0,l.Fl)((()=>o.Z.getters.layoutConfig("illustrations.set"))))},1128:function(e,a,t){t.d(a,{Z:function(){return v}});var l=t(6252),o=t(3577);const r={class:"card"},s={class:"card-body p-0"},i={class:"card-px text-center py-20 my-10"},n={class:"fs-2x fw-bolder mb-10"},d={class:"text-gray-400 fs-5 fw-bold mb-13"},c=["innerHTML"],u=["data-bs-target"],m={class:"text-center px-5"},f=["src"];function p(e,a,t,p,g,_){return(0,l.wg)(),(0,l.iD)("div",r,[(0,l._)("div",s,[(0,l._)("div",i,[(0,l._)("h2",n,(0,o.zw)(e.title),1),(0,l._)("p",d,[(0,l._)("span",{innerHTML:e.description},null,8,c)]),(0,l._)("button",{type:"button",class:"btn btn-primary er fs-6 px-8 py-4","data-bs-toggle":"modal","data-bs-target":`#${e.modalId}`},(0,o.zw)(e.buttonText),9,u)]),(0,l._)("div",m,[(0,l._)("img",{src:e.image,alt:"",class:"mw-100 mh-300px"},null,8,f)])])])}var g=(0,l.aZ)({name:"modal-card",props:{title:String,description:String,buttonText:String,image:String,modalId:String},components:{}}),_=t(3744);const b=(0,_.Z)(g,[["render",p]]);var v=b},7340:function(e,a,t){t.r(a),t.d(a,{default:function(){return me}});var l=t(6252);function o(e,a,t,o,r,s){const i=(0,l.up)("KTModalCard"),n=(0,l.up)("KTCreateAPIKeyModal");return(0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l.Wm)(i,{title:"Create API Key Modal Example",description:"Click on the below buttons to launch <br/>a new API Key creation example.",image:e.getIllustrationsPath("16.png"),"button-text":"Create API Key","modal-id":"kt_modal_create_api_key"},null,8,["image"]),(0,l.Wm)(n)],64)}var r=t(1128);const s={class:"modal fade",id:"kt_modal_create_api_key",ref:"createAPIKeyModalRef",tabindex:"-1","aria-hidden":"true"},i={class:"modal-dialog modal-dialog-centered mw-650px"},n={class:"modal-content"},d={class:"modal-header",id:"kt_modal_create_api_key_header"},c=(0,l._)("h2",null,"Create API Key",-1),u={class:"btn btn-sm btn-icon btn-active-color-primary","data-bs-dismiss":"modal"},m={class:"svg-icon svg-icon-1"},f={class:"modal-body py-10 px-lg-17"},p={class:"scroll-y me-n7 pe-7",id:"kt_modal_create_api_key_scroll","data-kt-scroll":"true","data-kt-scroll-activate":"{default: false, lg: true}","data-kt-scroll-max-height":"auto","data-kt-scroll-dependencies":"#kt_modal_create_api_key_header","data-kt-scroll-wrappers":"#kt_modal_create_api_key_scroll","data-kt-scroll-offset":"300px"},g={class:"notice d-flex bg-light-warning rounded border-warning border border-dashed mb-10 p-6"},_={class:"svg-icon svg-icon-2tx svg-icon-warning me-4"},b=(0,l._)("div",{class:"d-flex flex-stack flex-grow-1"},[(0,l._)("div",{class:"fw-bold"},[(0,l._)("h4",{class:"text-gray-800 fw-bolder"},"Please Note!"),(0,l._)("div",{class:"fs-6 text-gray-600"},[(0,l.Uk)(" Adding new API key may afftect to your "),(0,l._)("a",{href:"#"},"Affiliate Income")])])],-1),v={class:"mb-5 fv-row"},y=(0,l._)("label",{class:"required fs-5 fw-bold mb-2"},"API Name",-1),h={class:"fv-plugins-message-container"},k={class:"fv-help-block"},w={class:"d-flex flex-column mb-5 fv-row"},x=(0,l._)("label",{class:"required fs-5 fw-bold mb-2"},"Short Description",-1),C={class:"fv-plugins-message-container"},Z={class:"fv-help-block"},I={class:"d-flex flex-column mb-10 fv-row"},F=(0,l._)("label",{class:"required fs-5 fw-bold mb-2"},"Category",-1),D=(0,l._)("option",{value:""},"Select a Category...",-1),A=(0,l._)("option",{value:"1"},"CRM",-1),P=(0,l._)("option",{value:"2"},"Project Alice",-1),M=(0,l._)("option",{value:"3"},"Keenthemes",-1),S=(0,l._)("option",{value:"4"},"General",-1),K={class:"fv-plugins-message-container"},V={class:"fv-help-block"},W={class:"mb-10"},N=(0,l._)("div",{class:"mb-3"},[(0,l._)("label",{class:"d-flex align-items-center fs-5 fw-bold"},[(0,l._)("span",{class:"required"},"Specify Your API Method"),(0,l._)("i",{class:"fas fa-exclamation-circle ms-2 fs-7","data-bs-toggle":"tooltip",title:"Your billing numbers will be calculated based on your API method"})]),(0,l._)("div",{class:"fs-7 fw-bold text-gray-400"}," If you need more info, please check budget planning ")],-1),T={class:"fv-row"},q=(0,l._)("option",{value:""},"Select a API method...",-1),H=(0,l._)("option",{value:"1"},"Open API",-1),U=(0,l._)("option",{value:"2"},"SQL Call",-1),R=(0,l._)("option",{value:"3"},"UI/UX",-1),B=(0,l._)("option",{value:"4"},"Docs",-1),j={class:"fv-plugins-message-container"},z={class:"fv-help-block"},L={class:"modal-footer flex-center"},O=(0,l._)("button",{type:"reset",id:"kt_modal_create_api_key_cancel",class:"btn btn-white me-3"}," Discard ",-1),Y={ref:"submitButtonRef",type:"submit",id:"kt_modal_create_api_key_submit",class:"btn btn-primary"},$=(0,l._)("span",{class:"indicator-label"}," Submit ",-1),E=(0,l._)("span",{class:"indicator-progress"},[(0,l.Uk)(" Please wait... "),(0,l._)("span",{class:"spinner-border spinner-border-sm align-middle ms-2"})],-1),G=[$,E];function Q(e,a,t,o,r,$){const E=(0,l.up)("inline-svg"),Q=(0,l.up)("Field"),X=(0,l.up)("ErrorMessage"),J=(0,l.up)("Form");return(0,l.wg)(),(0,l.iD)("div",s,[(0,l._)("div",i,[(0,l._)("div",n,[(0,l._)("div",d,[c,(0,l._)("div",u,[(0,l._)("span",m,[(0,l.Wm)(E,{src:"media/icons/duotune/arrows/arr061.svg"})])])]),(0,l.Wm)(J,{id:"kt_modal_create_api_key_form",class:"form",onSubmit:e.submit,"validation-schema":e.validationSchema},{default:(0,l.w5)((()=>[(0,l._)("div",f,[(0,l._)("div",p,[(0,l._)("div",g,[(0,l._)("span",_,[(0,l.Wm)(E,{src:"media/icons/duotune/general/gen044.svg"})]),b]),(0,l._)("div",v,[y,(0,l.Wm)(Q,{type:"text",class:"form-control form-control-solid",placeholder:"Your API Name",name:"apiName",modelValue:e.apiData.apiName,"onUpdate:modelValue":a[0]||(a[0]=a=>e.apiData.apiName=a)},null,8,["modelValue"]),(0,l._)("div",h,[(0,l._)("div",k,[(0,l.Wm)(X,{name:"apiName"})])])]),(0,l._)("div",w,[x,(0,l.Wm)(Q,{type:"text",class:"form-control form-control-solid",rows:"3",name:"shortDescription",placeholder:"Describe your API",modelValue:e.apiData.shortDescription,"onUpdate:modelValue":a[1]||(a[1]=a=>e.apiData.shortDescription=a)},null,8,["modelValue"]),(0,l._)("div",C,[(0,l._)("div",Z,[(0,l.Wm)(X,{name:"shortDescription"})])])]),(0,l._)("div",I,[F,(0,l.Wm)(Q,{name:"category","data-control":"select2","data-hide-search":"true","data-placeholder":"Select a Category...",class:"form-select form-select-solid",as:"select",modelValue:e.apiData.category,"onUpdate:modelValue":a[2]||(a[2]=a=>e.apiData.category=a)},{default:(0,l.w5)((()=>[D,A,P,M,S])),_:1},8,["modelValue"]),(0,l._)("div",K,[(0,l._)("div",V,[(0,l.Wm)(X,{name:"category"})])])]),(0,l._)("div",W,[N,(0,l._)("div",T,[(0,l.Wm)(Q,{name:"apiMethod","data-control":"select2","data-hide-search":"true","data-placeholder":"Select a Category...",class:"form-select form-select-solid",as:"select",modelValue:e.apiData.apiMethod,"onUpdate:modelValue":a[3]||(a[3]=a=>e.apiData.apiMethod=a)},{default:(0,l.w5)((()=>[q,H,U,R,B])),_:1},8,["modelValue"]),(0,l._)("div",j,[(0,l._)("div",z,[(0,l.Wm)(X,{name:"apiMethod"})])])])])])]),(0,l._)("div",L,[O,(0,l._)("button",Y,G,512)])])),_:1},8,["onSubmit","validation-schema"])])])],512)}var X=t(2262),J=t(8837),ee=t(2954),ae=t(4231),te=t(8764),le=t.n(te),oe=(0,l.aZ)({name:"create-api-key-modal",components:{ErrorMessage:ee.Bc,Field:ee.gN,Form:ee.l0},setup(){const e=(0,X.iH)(null),a=(0,X.iH)(null),t=(0,X.iH)(null),l=(0,X.iH)({apiName:"",shortDescription:"",category:"",apiMethod:""}),o=ae.Ry().shape({apiName:ae.Z_().required().label("API name"),shortDescription:ae.Z_().required().label("Description"),category:ae.Z_().required().label("Category"),apiMethod:ae.Z_().required().label("API method")}),r=()=>{e.value&&(e.value.disabled=!0,e.value.setAttribute("data-kt-indicator","on"),setTimeout((()=>{e.value&&(e.value.disabled=!1,e.value?.removeAttribute("data-kt-indicator")),le().fire({text:"Form has been successfully submitted!",icon:"success",buttonsStyling:!1,confirmButtonText:"Ok !",customClass:{confirmButton:"btn btn-primary"}}).then((()=>{(0,J.V)(t.value)}))}),2e3))};return{apiData:l,validationSchema:o,submit:r,submitButtonRef:e,modalRef:a,createAPIKeyModalRef:t}}}),re=t(3744);const se=(0,re.Z)(oe,[["render",Q]]);var ie=se,ne=t(8932),de=t(2440),ce=(0,l.aZ)({name:"create-api-key",components:{KTModalCard:r.Z,KTCreateAPIKeyModal:ie},setup(){return(0,l.bv)((()=>{(0,ne.M)("Create API Key",["Modals","Forms"])})),{getIllustrationsPath:de.O}}});const ue=(0,re.Z)(ce,[["render",o]]);var me=ue}}]);
//# sourceMappingURL=7340.a9dec7ab.js.map