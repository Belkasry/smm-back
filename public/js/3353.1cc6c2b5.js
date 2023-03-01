"use strict";(self["webpackChunkdemo1"]=self["webpackChunkdemo1"]||[]).push([[3353],{79097:function(a,e,t){t.d(e,{O:function(){return s}});var n=t(5080);const s=a=>`media/illustrations/${n.Gv.value}/${a}`},68932:function(a,e,t){t.d(e,{M:function(){return i},V:function(){return l}});var n=t(66450),s=t(15758);const i=(a,e)=>{n.Z.dispatch(s.e.SET_BREADCRUMB_ACTION,{title:a,pageBreadcrumbPath:e})},l=a=>{n.Z.dispatch(s.e.SET_BREADCRUMB_ACTION,{title:a})}},5080:function(a,e,t){t.d(e,{Df:function(){return h},F9:function(){return p},Fh:function(){return o},Gv:function(){return w},K1:function(){return v},Lj:function(){return r},Ne:function(){return d},_T:function(){return f},az:function(){return b},jH:function(){return l},o$:function(){return c},o4:function(){return y},pD:function(){return g},vc:function(){return i},vj:function(){return x},xV:function(){return m},zK:function(){return u}});var n=t(66252),s=t(66450);const i=(0,n.Fl)((()=>s.Z.getters.layoutConfig())),l=((0,n.Fl)((()=>s.Z.getters.layoutConfig("sidebar.display"))),(0,n.Fl)((()=>"fluid"===s.Z.getters.layoutConfig("footer.width")))),o=(0,n.Fl)((()=>"fluid"===s.Z.getters.layoutConfig("header.width"))),r=(0,n.Fl)((()=>s.Z.getters.layoutConfig("header.left"))),c=(0,n.Fl)((()=>!0===s.Z.getters.layoutConfig("aside.display"))),d=(0,n.Fl)((()=>"fluid"===s.Z.getters.layoutConfig("toolbar.width"))),m=(0,n.Fl)((()=>s.Z.getters.layoutConfig("toolbar.display"))),u=(0,n.Fl)((()=>s.Z.getters.layoutConfig("loader.display"))),f=(0,n.Fl)((()=>"fluid"===s.Z.getters.layoutConfig("content.width"))),g=(0,n.Fl)((()=>""+s.Z.getters.layoutConfig("loader.logo"))),v=(0,n.Fl)((()=>!!s.Z.getters.layoutConfig("aside.display"))),p=(0,n.Fl)((()=>s.Z.getters.layoutConfig("aside.theme"))),b=(0,n.Fl)((()=>s.Z.getters.layoutConfig("toolbar.display"))),y=(0,n.Fl)((()=>s.Z.getters.layoutConfig("aside.menuIcon"))),h=(0,n.Fl)((()=>s.Z.getters.layoutConfig("main.logo.light"))),x=(0,n.Fl)((()=>s.Z.getters.layoutConfig("main.logo.dark"))),w=((0,n.Fl)((()=>s.Z.getters.layoutConfig("header.menuIcon"))),(0,n.Fl)((()=>s.Z.getters.layoutConfig("illustrations.set"))))},81128:function(a,e,t){t.d(e,{Z:function(){return y}});var n=t(66252),s=t(3577);const i={class:"card"},l={class:"card-body p-0"},o={class:"card-px text-center py-20 my-10"},r={class:"fs-2x fw-bolder mb-10"},c={class:"text-gray-400 fs-5 fw-bold mb-13"},d=["innerHTML"],m=["data-bs-target"],u={class:"text-center px-5"},f=["src"];function g(a,e,t,g,v,p){return(0,n.wg)(),(0,n.iD)("div",i,[(0,n._)("div",l,[(0,n._)("div",o,[(0,n._)("h2",r,(0,s.zw)(a.title),1),(0,n._)("p",c,[(0,n._)("span",{innerHTML:a.description},null,8,d)]),(0,n._)("button",{type:"button",class:"btn btn-primary er fs-6 px-8 py-4","data-bs-toggle":"modal","data-bs-target":`#${a.modalId}`},(0,s.zw)(a.buttonText),9,m)]),(0,n._)("div",u,[(0,n._)("img",{src:a.image,alt:"",class:"mw-100 mh-300px"},null,8,f)])])])}var v=(0,n.aZ)({name:"modal-card",props:{title:String,description:String,buttonText:String,image:String,modalId:String},components:{}}),p=t(83744);const b=(0,p.Z)(v,[["render",g]]);var y=b},67184:function(a,e,t){t.d(e,{Z:function(){return S}});var n=t(66252),s=t(3577),i=t(49963);const l={class:"modal fade",id:"kt_modal_invite_friends",tabindex:"-1","aria-hidden":"true"},o={class:"modal-dialog mw-650px"},r={class:"modal-content"},c={class:"modal-header pb-0 border-0 justify-content-end"},d={class:"btn btn-sm btn-icon btn-active-color-primary","data-bs-dismiss":"modal"},m={class:"svg-icon svg-icon-1"},u={class:"modal-body scroll-y mx-5 mx-xl-18 pt-0 pb-15"},f=(0,n.uE)('<div class="text-center mb-13"><h1 class="mb-3">Invite a Friend</h1><div class="text-gray-400 fw-bold fs-5"> If you need more info, please check out <a href="#" class="link-primary fw-bolder">FAQ Page</a>. </div></div><div class="btn btn-light-primary fw-bolder w-100 mb-8"><img alt="Logo" src="media/svg/brand-logos/google-icon.svg" class="h-20px me-3"> Invite Gmail Contacts </div><div class="separator d-flex flex-center mb-8"><span class="text-uppercase bg-white fs-7 fw-bold text-gray-400 px-3">or</span></div><textarea class="form-control form-control-solid mb-8" rows="3" placeholder="Type or paste emails here">\r\n          </textarea>',4),g={class:"mb-10"},v=(0,n._)("div",{class:"fs-6 fw-bold mb-2"},"Your Invitations",-1),p={class:"mh-300px scroll-y me-n7 pe-7"},b={class:"d-flex align-items-center"},y={class:"symbol symbol-35px symbol-circle"},h=["src"],x={class:"ms-5"},w={href:"#",class:"fs-5 fw-bolder text-gray-900 text-hover-primary mb-2"},_={class:"fw-bold text-gray-400"},C={class:"ms-2 w-100px"},Z=["onUpdate:modelValue"],k=(0,n._)("option",{value:"1"},"Guest",-1),F=(0,n._)("option",{value:"2"},"Owner",-1),M=(0,n._)("option",{value:"3"},"Can Edit",-1),I=[k,F,M],T=(0,n.uE)('<div class="d-flex flex-stack"><div class="me-5 fw-bold"><label class="fs-6">Adding Users by Team Members</label><div class="fs-7 text-gray-400"> If you need more info, please check budget planning </div></div><label class="form-check form-switch form-check-custom form-check-solid"><input class="form-check-input" type="checkbox" value="1" checked="checked"><span class="form-check-label fw-bold text-gray-400"> Allowed </span></label></div>',1);function j(a,e,t,k,F,M){const j=(0,n.up)("inline-svg");return(0,n.wg)(),(0,n.iD)("div",l,[(0,n._)("div",o,[(0,n._)("div",r,[(0,n._)("div",c,[(0,n._)("div",d,[(0,n._)("span",m,[(0,n.Wm)(j,{src:"media/icons/duotune/arrows/arr061.svg"})])])]),(0,n._)("div",u,[f,(0,n._)("div",g,[v,(0,n._)("div",p,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(a.users,((a,e)=>((0,n.wg)(),(0,n.iD)("div",{key:e,class:"d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed"},[(0,n._)("div",b,[(0,n._)("div",y,[a.avatar?((0,n.wg)(),(0,n.iD)("img",{key:0,alt:"Pic",src:a.avatar},null,8,h)):((0,n.wg)(),(0,n.iD)("span",{key:1,class:(0,s.C_)([`bg-light-${a.state} text-${a.state}`,"symbol-label fw-bold"])},(0,s.zw)(a.name.charAt(0)),3))]),(0,n._)("div",x,[(0,n._)("a",w,(0,s.zw)(a.name),1),(0,n._)("div",_,(0,s.zw)(a.email),1)])]),(0,n._)("div",C,[(0,n.wy)((0,n._)("select",{"onUpdate:modelValue":e=>a.access=e,class:"form-select form-select-solid form-select-sm","data-control":"select2","data-hide-search":"true"},I,8,Z),[[i.bM,a.access]])])])))),128))])]),T])])])])}var D=(0,n.aZ)({name:"invite-friends-modal",components:{},setup(){const a=[{avatar:"media/avatars/300-6.jpg",name:"Emma Smith",email:"e.smith@kpmg.com.au",access:"1"},{state:"danger",name:"Melody Macy",email:"melody@altbox.com",access:"1"},{avatar:"media/avatars/300-1.jpg",name:"Max Smith",email:"max@kt.com",access:"3"},{avatar:"media/avatars/300-1.jpg",name:"Sean Bean",email:"sean@dellito.com",access:"2"},{avatar:"media/avatars/300-25.jpg",name:"Brian Cox",email:"brian@exchange.com",access:"3"},{state:"warning",name:"Mikaela Collins",email:"mikaela@pexcom.com",access:"2"},{avatar:"media/avatars/300-9.jpg",name:"Francis Mitcham",email:"f.mitcham@kpmg.com.au",access:"3"},{state:"danger",name:"Olivia Wild",email:"olivia@corpmail.com",access:"2"},{state:"info",name:"Neil Owen",email:"owen.neil@gmail.com",access:"1"},{avatar:"media/avatars/300-23.jpg",name:"Dan Wilson",email:"dam@consilting.com",access:"3"},{state:"danger",name:"Emma Bold",email:"emma@intenso.com",access:"2"},{avatar:"media/avatars/300-12.jpg",name:"Ana Crown",email:"ana.cf@limtel.com",access:"1"},{state:"primary",name:"Robert Doe",email:"robert@benko.com",access:"3"},{avatar:"media/avatars/300-13.jpg",name:"John Miller",email:"miller@mapple.com",access:"3"},{state:"success",name:"Lucy Kunic",email:"lucy.m@fentech.com",access:"2"},{state:"media/avatars/300-21.jpg",name:"Ethan Wilder",email:"ethan@loop.com.au",access:"1"},{state:"media/avatars/300-12.jpg",name:"Ana Crown",email:"ana.cf@limtel.com",access:"3"}];return{users:a}}}),E=t(83744);const A=(0,E.Z)(D,[["render",j]]);var S=A},23353:function(a,e,t){t.r(e),t.d(e,{default:function(){return u}});var n=t(66252);function s(a,e,t,s,i,l){const o=(0,n.up)("KTModalCard"),r=(0,n.up)("KTInviteFriendsModal");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n.Wm)(o,{title:"Invite Friends Modal Example",description:"Click on the below buttons\r\n  to launch <br />\r\n  a friend invitation example.",image:a.getIllustrationsPath("1.png"),"button-text":"Invite Friends","modal-id":"kt_modal_invite_friends"},null,8,["image"]),(0,n.Wm)(r)],64)}var i=t(81128),l=t(67184),o=t(68932),r=t(79097),c=(0,n.aZ)({name:"invite-friends",components:{KTModalCard:i.Z,KTInviteFriendsModal:l.Z},setup(){return(0,n.bv)((()=>{(0,o.M)("Invite Friends",["Modals","General"])})),{getIllustrationsPath:r.O}}}),d=t(83744);const m=(0,d.Z)(c,[["render",s]]);var u=m}}]);
//# sourceMappingURL=3353.1cc6c2b5.js.map