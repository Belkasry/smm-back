"use strict";(self["webpackChunkdemo1"]=self["webpackChunkdemo1"]||[]).push([[1196],{79097:function(t,n,e){e.d(n,{O:function(){return o}});var r=e(5080);const o=t=>`media/illustrations/${r.Gv.value}/${t}`},68932:function(t,n,e){e.d(n,{M:function(){return a},V:function(){return i}});var r=e(66450),o=e(15758);const a=(t,n)=>{r.Z.dispatch(o.e.SET_BREADCRUMB_ACTION,{title:t,pageBreadcrumbPath:n})},i=t=>{r.Z.dispatch(o.e.SET_BREADCRUMB_ACTION,{title:t})}},5080:function(t,n,e){e.d(n,{Df:function(){return b},F9:function(){return y},Fh:function(){return l},Gv:function(){return F},K1:function(){return m},Lj:function(){return u},Ne:function(){return d},_T:function(){return g},az:function(){return C},jH:function(){return i},o$:function(){return s},o4:function(){return Z},pD:function(){return p},vc:function(){return a},vj:function(){return h},xV:function(){return c},zK:function(){return f}});var r=e(66252),o=e(66450);const a=(0,r.Fl)((()=>o.Z.getters.layoutConfig())),i=((0,r.Fl)((()=>o.Z.getters.layoutConfig("sidebar.display"))),(0,r.Fl)((()=>"fluid"===o.Z.getters.layoutConfig("footer.width")))),l=(0,r.Fl)((()=>"fluid"===o.Z.getters.layoutConfig("header.width"))),u=(0,r.Fl)((()=>o.Z.getters.layoutConfig("header.left"))),s=(0,r.Fl)((()=>!0===o.Z.getters.layoutConfig("aside.display"))),d=(0,r.Fl)((()=>"fluid"===o.Z.getters.layoutConfig("toolbar.width"))),c=(0,r.Fl)((()=>o.Z.getters.layoutConfig("toolbar.display"))),f=(0,r.Fl)((()=>o.Z.getters.layoutConfig("loader.display"))),g=(0,r.Fl)((()=>"fluid"===o.Z.getters.layoutConfig("content.width"))),p=(0,r.Fl)((()=>""+o.Z.getters.layoutConfig("loader.logo"))),m=(0,r.Fl)((()=>!!o.Z.getters.layoutConfig("aside.display"))),y=(0,r.Fl)((()=>o.Z.getters.layoutConfig("aside.theme"))),C=(0,r.Fl)((()=>o.Z.getters.layoutConfig("toolbar.display"))),Z=(0,r.Fl)((()=>o.Z.getters.layoutConfig("aside.menuIcon"))),b=(0,r.Fl)((()=>o.Z.getters.layoutConfig("main.logo.light"))),h=(0,r.Fl)((()=>o.Z.getters.layoutConfig("main.logo.dark"))),F=((0,r.Fl)((()=>o.Z.getters.layoutConfig("header.menuIcon"))),(0,r.Fl)((()=>o.Z.getters.layoutConfig("illustrations.set"))))},81128:function(t,n,e){e.d(n,{Z:function(){return Z}});var r=e(66252),o=e(3577);const a={class:"card"},i={class:"card-body p-0"},l={class:"card-px text-center py-20 my-10"},u={class:"fs-2x fw-bolder mb-10"},s={class:"text-gray-400 fs-5 fw-bold mb-13"},d=["innerHTML"],c=["data-bs-target"],f={class:"text-center px-5"},g=["src"];function p(t,n,e,p,m,y){return(0,r.wg)(),(0,r.iD)("div",a,[(0,r._)("div",i,[(0,r._)("div",l,[(0,r._)("h2",u,(0,o.zw)(t.title),1),(0,r._)("p",s,[(0,r._)("span",{innerHTML:t.description},null,8,d)]),(0,r._)("button",{type:"button",class:"btn btn-primary er fs-6 px-8 py-4","data-bs-toggle":"modal","data-bs-target":`#${t.modalId}`},(0,o.zw)(t.buttonText),9,c)]),(0,r._)("div",f,[(0,r._)("img",{src:t.image,alt:"",class:"mw-100 mh-300px"},null,8,g)])])])}var m=(0,r.aZ)({name:"modal-card",props:{title:String,description:String,buttonText:String,image:String,modalId:String},components:{}}),y=e(83744);const C=(0,y.Z)(m,[["render",p]]);var Z=C},91196:function(t,n,e){e.r(n),e.d(n,{default:function(){return c}});var r=e(66252);function o(t,n,e,o,a,i){const l=(0,r.up)("KTModalCard");return(0,r.wg)(),(0,r.j4)(l,{title:"Create App Modal Example",description:"Click on the below buttons to launch <br/>create app modal example.",image:t.getIllustrationsPath("15.png"),"button-text":"Create App","modal-id":"kt_modal_create_app"},null,8,["image"])}var a=e(81128),i=e(68932),l=e(79097),u=(0,r.aZ)({name:"create-app",components:{KTModalCard:a.Z},setup(){return(0,r.bv)((()=>{(0,i.M)("Create App",["Modals","Wizards"])})),{getIllustrationsPath:l.O}}}),s=e(83744);const d=(0,s.Z)(u,[["render",o]]);var c=d}}]);
//# sourceMappingURL=1196.06ab30b8.js.map