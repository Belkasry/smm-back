"use strict";(self["webpackChunkdemo1"]=self["webpackChunkdemo1"]||[]).push([[2134],{2440:function(e,a,t){t.d(a,{O:function(){return n}});var s=t(5080);const n=e=>`media/illustrations/${s.Gv.value}/${e}`},8932:function(e,a,t){t.d(a,{M:function(){return r},V:function(){return l}});var s=t(6450),n=t(5758);const r=(e,a)=>{s.Z.dispatch(n.e.SET_BREADCRUMB_ACTION,{title:e,pageBreadcrumbPath:a})},l=e=>{s.Z.dispatch(n.e.SET_BREADCRUMB_ACTION,{title:e})}},1128:function(e,a,t){t.d(a,{Z:function(){return h}});var s=t(6252),n=t(3577);const r={class:"card"},l={class:"card-body p-0"},o={class:"card-px text-center py-20 my-10"},c={class:"fs-2x fw-bolder mb-10"},i={class:"text-gray-400 fs-5 fw-bold mb-13"},d=["innerHTML"],u=["data-bs-target"],m={class:"text-center px-5"},b=["src"];function p(e,a,t,p,f,g){return(0,s.wg)(),(0,s.iD)("div",r,[(0,s._)("div",l,[(0,s._)("div",o,[(0,s._)("h2",c,(0,n.zw)(e.title),1),(0,s._)("p",i,[(0,s._)("span",{innerHTML:e.description},null,8,d)]),(0,s._)("button",{type:"button",class:"btn btn-primary er fs-6 px-8 py-4","data-bs-toggle":"modal","data-bs-target":`#${e.modalId}`},(0,n.zw)(e.buttonText),9,u)]),(0,s._)("div",m,[(0,s._)("img",{src:e.image,alt:"",class:"mw-100 mh-300px"},null,8,b)])])])}var f=(0,s.aZ)({name:"modal-card",props:{title:String,description:String,buttonText:String,image:String,modalId:String},components:{}}),g=t(3744);const v=(0,g.Z)(f,[["render",p]]);var h=v},2134:function(e,a,t){t.r(a),t.d(a,{default:function(){return H}});var s=t(6252);function n(e,a,t,n,r,l){const o=(0,s.up)("KTModalsCard"),c=(0,s.up)("KTShareAndEarnModal");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s.Wm)(o,{title:"Share & Earn Modal Example",description:"Click on the below buttons to launch <br/>a share & earn example.",image:e.getIllustrationsPath("9.png"),"button-text":"Share & Earn","modal-id":"kt_modal_share_earn"},null,8,["image"]),(0,s.Wm)(c)],64)}var r=t(1128);const l={class:"modal fade",id:"kt_modal_share_earn",tabindex:"-1","aria-hidden":"true"},o={class:"modal-dialog modal-dialog-centered mw-800px"},c={class:"modal-content"},i={class:"modal-header pb-0 border-0 justify-content-end"},d={class:"btn btn-sm btn-icon btn-active-color-primary","data-bs-dismiss":"modal"},u={class:"svg-icon svg-icon-1"},m={class:"modal-body scroll-y pt-0 pb-15"},b={class:"mw-lg-600px mx-auto"},p=(0,s._)("div",{class:"mb-13 text-center"},[(0,s._)("h1",{class:"mb-3"},"Share & Earn"),(0,s._)("div",{class:"text-gray-400 fw-bold fs-5"},[(0,s.Uk)(" If you need more info, please check "),(0,s._)("a",{href:"#",class:"link-primary fw-bolder"},"Author Commision"),(0,s.Uk)(". ")])],-1),f={class:"mb-10"},g=(0,s._)("h4",{class:"fs-5 fw-bold text-gray-800"}," Share my referral link with friends ",-1),v={class:"d-flex"},h={ref:"inputRef",id:"kt_share_earn_link_input",type:"text",class:"form-control form-control-solid me-3 flex-grow-1",name:"search",value:"https://keenthemes.com/?ref=skitechnology"},_={ref:"copyButtonRef",id:"kt_share_earn_link_copy_button",class:"btn btn-light fw-bolder flex-shrink-0","data-clipboard-target":"#kt_share_earn_link_input"},x=(0,s.uE)('<div class="d-flex"><a href="#" class="btn btn-light-primary w-100"><img alt="Logo" src="media/svg/brand-logos/google-icon.svg" class="h-15px me-3"> Import Contacts </a><a href="#" class="btn btn-icon btn-facebook w-100 mx-6"><img alt="Logo" src="media/svg/brand-logos/facebook-2.svg" class="h-20px me-3"> Facebook </a><a href="#" class="btn btn-icon btn-twitter w-100"><img alt="Logo" src="media/svg/brand-logos/twitter.svg" class="h-20px me-3"> Twitter </a></div><div class="d-flex align-items-center mt-10"><div class="flex-grow-1"><span class="fs-6 fw-bold text-gray-800 d-block">Adding Users by Team Members</span><span class="fs-7 fw-bold text-gray-400">If you need more info, please check budget planning</span></div><label class="form-check form-switch form-check-custom form-check-solid"><input class="form-check-input" type="checkbox" value="1" checked="checked"><span class="form-check-label"> Allowed </span></label></div>',2);function k(e,a,t,n,r,k){const w=(0,s.up)("inline-svg");return(0,s.wg)(),(0,s.iD)("div",l,[(0,s._)("div",o,[(0,s._)("div",c,[(0,s._)("div",i,[(0,s._)("div",d,[(0,s._)("span",u,[(0,s.Wm)(w,{src:"media/icons/duotune/arrows/arr061.svg"})])])]),(0,s._)("div",m,[(0,s._)("div",b,[p,(0,s._)("div",f,[g,(0,s._)("div",v,[(0,s._)("input",h,null,512),(0,s._)("button",_," Copy Link ",512)])]),x])])])])])}var w=t(2262),y=t(2152),T=t.n(y),M=(0,s.aZ)({name:"share-and-earn-modal",components:{},setup(){const e=(0,w.iH)(null),a=(0,w.iH)(null);return(0,s.bv)((()=>{const t=new(T())(e.value);t.on("success",(function(t){const s=e.value?.innerHTML;a.value?.classList.add("bg-success"),a.value?.classList.add("text-inverse-success"),e.value&&(e.value.innerHTML="Copied!"),setTimeout((function(){e.value&&s&&(e.value.innerHTML=s),a.value?.classList.remove("bg-success"),a.value?.classList.remove("text-inverse-success")}),3e3),t.clearSelection()}))})),{copyButtonRef:e,inputRef:a}}}),S=t(3744);const C=(0,S.Z)(M,[["render",k]]);var L=C,E=t(8932),Z=t(2440),A=(0,s.aZ)({name:"share-and-earn",components:{KTModalsCard:r.Z,KTShareAndEarnModal:L},setup(){return(0,s.bv)((()=>{(0,E.M)("Share & Earn",["Modals","General"])})),{getIllustrationsPath:Z.O}}});const I=(0,S.Z)(A,[["render",n]]);var H=I}}]);
//# sourceMappingURL=2134.cbf82c7b.js.map