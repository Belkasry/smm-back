"use strict";(self["webpackChunkdemo1"]=self["webpackChunkdemo1"]||[]).push([[2012],{34699:function(e,t,i){i.d(t,{Z:function(){return _}});var s=i(66252),n=i(3577);const a={class:"card-header border-0 pt-5"},l=(0,s._)("h3",{class:"card-title align-items-start flex-column"},[(0,s._)("span",{class:"card-label fw-bolder text-white"},"Tasks Overview"),(0,s._)("span",{class:"text-muted mt-1 fw-bold fs-7"},"Pending 10 tasks")],-1),r={class:"card-toolbar"},o={type:"button",class:"btn btn-sm btn-icon btn-color-primary btn-active-light-primary","data-kt-menu-trigger":"click","data-kt-menu-placement":"bottom-end","data-kt-menu-flip":"top-end"},c={class:"svg-icon svg-icon-2"},d={class:"card-body pt-5"},m={class:"symbol symbol-50px me-5"},g={class:"d-flex flex-column"},v={href:"#",class:"text-primary text-hover-primary fs-6 fw-bolder"},p={class:"text-muted fw-bold"};function u(e,t,i,u,b,f){const w=(0,s.up)("inline-svg"),x=(0,s.up)("Dropdown1");return(0,s.wg)(),(0,s.iD)("div",{class:(0,n.C_)(["card",e.widgetClasses])},[(0,s._)("div",a,[l,(0,s._)("div",r,[(0,s._)("button",o,[(0,s._)("span",c,[(0,s.Wm)(w,{src:"media/icons/duotune/general/gen024.svg"})])]),(0,s.Wm)(x)])]),(0,s._)("div",d,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(e.items,((t,i)=>((0,s.wg)(),(0,s.iD)("div",{key:i,class:(0,n.C_)([{"mb-7":e.items.length-1!==i},"d-flex align-items-center"])},[(0,s._)("div",m,[(0,s._)("span",{class:(0,n.C_)([`bg-light-${t.color}`,"symbol-label"])},[(0,s._)("span",{class:(0,n.C_)([`svg-icon-${t.color}`,"svg-icon svg-icon-2x"])},[(0,s.Wm)(w,{src:t.icon},null,8,["src"])],2)],2)]),(0,s._)("div",g,[(0,s._)("a",v,(0,n.zw)(t.title),1),(0,s._)("span",p,(0,n.zw)(t.description),1)])],2)))),128))])],2)}var b=i(68130),f=(0,s.aZ)({name:"kt-widget-1",components:{Dropdown1:b.Z},props:{widgetClasses:String},setup(){const e=[{icon:"media/icons/duotune/abstract/abs027.svg",color:"success",title:"Project Briefing",description:"Project Manager"},{icon:"media/icons/duotune/art/art005.svg",color:"warning",title:"Concept Design",description:"Art Director"},{icon:"media/icons/duotune/communication/com012.svg",color:"primary",title:"Functional Logics",description:"Lead Developer"},{icon:"media/icons/duotune/coding/cod008.svg",color:"danger",title:"Development",description:"DevOps"},{icon:"media/icons/duotune/general/gen049.svg",color:"info",title:"Testing",description:"QA Managers"}];return{items:e}}}),w=i(83744);const x=(0,w.Z)(f,[["render",u]]);var _=x},57570:function(e,t,i){i.d(t,{Z:function(){return k}});var s=i(66252),n=i(3577);const a={class:"card-header border-0"},l=(0,s._)("h3",{class:"card-title fw-bolder text-white"},"Equipe",-1),r={class:"card-toolbar"},o={type:"button",class:"btn btn-sm btn-icon btn-color-primary btn-active-light-primary","data-kt-menu-trigger":"click","data-kt-menu-placement":"bottom-end","data-kt-menu-flip":"top-end"},c={class:"svg-icon svg-icon-2"},d={class:"card-body pt-2"},m={class:"symbol symbol-50px me-5"},g=["src"],v={class:"flex-grow-1"},p={href:"#",class:"text-primary fw-bolder text-hover-primary fs-6"},u={class:"text-muted d-block fw-bold"};function b(e,t,i,b,f,w){const x=(0,s.up)("inline-svg"),_=(0,s.up)("Dropdown2");return(0,s.wg)(),(0,s.iD)("div",{class:(0,n.C_)(["card",e.widgetClasses])},[(0,s._)("div",a,[l,(0,s._)("div",r,[(0,s._)("button",o,[(0,s._)("span",c,[(0,s.Wm)(x,{src:"media/icons/duotune/general/gen024.svg"})])]),(0,s.Wm)(_)])]),(0,s._)("div",d,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(e.list,((t,i)=>((0,s.wg)(),(0,s.iD)("div",{key:i,class:(0,n.C_)([{"mb-7":e.list.length-1!==i},"d-flex align-items-center"])},[(0,s._)("div",m,[(0,s._)("img",{src:t.avatar,class:"",alt:""},null,8,g)]),(0,s._)("div",v,[(0,s._)("a",p,(0,n.zw)(t.name),1),(0,s._)("span",u,(0,n.zw)(t.service?.name),1)])],2)))),128))])],2)}var f=i(2262),w=i(92586),x=i(8433),_=(0,s.aZ)({name:"kt-widget-2",components:{Dropdown2:w.Z},props:{widgetClasses:String},computed:{currentRouteName(){return window.location.origin}},setup(){const e=(0,f.iH)([]),t=async()=>{try{const t=await x.Z.get(window.location.origin+"/api/users"),i=t.data;i.forEach((e=>{const t=Math.floor(100*Math.random())+1;e.avatar=`https://picsum.photos/id/${t}/300`})),e.value=i}catch(t){console.error(t)}};return(0,s.bv)(t),{list:e}}}),y=i(83744);const h=(0,y.Z)(_,[["render",b]]);var k=h},39005:function(e,t,i){i.d(t,{Z:function(){return x}});var s=i(66252),n=i(3577);const a={class:"card-header border-0"},l=(0,s._)("h3",{class:"card-title fw-bolder text-white"},"Todo",-1),r={class:"card-toolbar"},o={type:"button",class:"btn btn-sm btn-icon btn-color-primary btn-active-light-primary","data-kt-menu-trigger":"click","data-kt-menu-placement":"bottom-end","data-kt-menu-flip":"top-end"},c={class:"svg-icon svg-icon-2"},d={class:"card-body pt-2"},m=(0,s._)("div",{class:"mx-1"},null,-1),g={class:"flex-grow-1"},v={class:"text-hover-primary text-white fw-bolder fs-8"};function p(e,t,i,p,u,b){const f=(0,s.up)("inline-svg");return(0,s.wg)(),(0,s.iD)("div",{class:(0,n.C_)(["card",e.widgetClasses]),style:{"background-color":"#235d61"}},[(0,s._)("div",a,[l,(0,s._)("div",r,[(0,s._)("button",o,[(0,s._)("span",c,[(0,s.Wm)(f,{src:"media/icons/duotune/general/gen024.svg"})])])])]),(0,s._)("div",d,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(e.list,((t,i)=>((0,s.wg)(),(0,s.iD)("div",{key:i,class:(0,n.C_)([{"mb-8":e.list.length-1!==i},"d-flex align-items-center"])},[(0,s._)("span",{class:(0,n.C_)(["bullet bullet-vertical h-60px","bg-info"])}),m,(0,s._)("div",g,[(0,s._)("p",v,(0,n.zw)(t.title),1)])],2)))),128))])],2)}var u=i(2262),b=(0,s.aZ)({name:"kt-widget-3",components:{},props:{widgetClasses:String},setup(){const e=(0,u.iH)([{title:"Create FireStone LogoCreate FireStone LogoCreate FireStone LogoCreate FireStone Logo"},{title:"Stakeholder Meeting"},{title:"Scoping & Estimations"},{title:"KPI App Showcase"},{title:"Project Meeting"},{title:"Customers Update"}]);return{list:e}}}),f=i(83744);const w=(0,f.Z)(b,[["render",p]]);var x=w},29140:function(e,t,i){i.d(t,{Z:function(){return b}});var s=i(66252),n=i(3577);const a={class:"card-header align-items-center border-0 mt-4"},l=(0,s._)("h3",{class:"card-title align-items-start flex-column"},[(0,s._)("span",{class:"fw-bolder mb-2 text-white"},"Activities"),(0,s._)("span",{class:"text-muted fw-bold fs-7"},"890,344 Sales")],-1),r={class:"card-toolbar"},o={type:"button",class:"btn btn-sm btn-icon btn-color-primary btn-active-light-primary","data-kt-menu-trigger":"click","data-kt-menu-placement":"bottom-end","data-kt-menu-flip":"top-end"},c={class:"svg-icon svg-icon-2"},d=(0,s.uE)('<div class="card-body pt-5 text-white"><div class="timeline-label"><div class="timeline-item"><div class="text-primary timeline-label fw-bolder fs-6 text-whitee"> 08:42 </div><div class="timeline-badge"><i class="fa fa-genderless text-warning fs-1"></i></div><div class="fw-mormal timeline-content text-muted ps-3"> Outlines keep you honest. And keep structure </div></div><div class="timeline-item"><div class="text-primary timeline-label fw-bolder fs-6 text-whitee"> 10:00 </div><div class="timeline-badge"><i class="fa fa-genderless text-success fs-1"></i></div><div class="timeline-content d-flex"><span class="fw-bolder ps-3">AEOL meeting</span></div></div><div class="timeline-item"><div class="text-primary timeline-label fw-bolder fs-6 text-whitee"> 14:37 </div><div class="timeline-badge"><i class="fa fa-genderless text-danger fs-1"></i></div><div class="timeline-content fw-bolder ps-3"> Make deposit <a href="#" class="text-primary">USD 700</a>. to ESL </div></div><div class="timeline-item"><div class="text-primary timeline-label fw-bolder fs-6 text-whitee"> 16:50 </div><div class="timeline-badge"><i class="fa fa-genderless text-primary fs-1"></i></div><div class="timeline-content fw-mormal text-muted ps-3"> Indulging in poorly driving and keep structure keep great </div></div><div class="timeline-item"><div class="text-primary timeline-label fw-bolder fs-6 text-whitee"> 21:03 </div><div class="timeline-badge"><i class="fa fa-genderless text-danger fs-1"></i></div><div class="timeline-content fw-bold ps-3"> New order placed <a href="#" class="text-primary">#XF-2356</a>. </div></div><div class="timeline-item"><div class="text-primary timeline-label fw-bolder fs-6 text-whitee"> 16:50 </div><div class="timeline-badge"><i class="fa fa-genderless text-primary fs-1"></i></div><div class="timeline-content fw-mormal text-muted ps-3"> Indulging in poorly driving and keep structure keep great </div></div><div class="timeline-item"><div class="text-primary timeline-label fw-bolder fs-6 text-whitee"> 21:03 </div><div class="timeline-badge"><i class="fa fa-genderless text-danger fs-1"></i></div><div class="timeline-content fw-bold ps-3"> New order placed <a href="#" class="text-primary">#XF-2356</a>. </div></div><div class="timeline-item"><div class="text-primary timeline-label fw-bolder fs-6 text-whitee"> 10:30 </div><div class="timeline-badge"><i class="fa fa-genderless text-success fs-1"></i></div><div class="timeline-content fw-mormal text-muted ps-3"> Finance KPI Mobile app launch preparion meeting </div></div></div></div>',1);function m(e,t,i,m,g,v){const p=(0,s.up)("inline-svg"),u=(0,s.up)("Dropdown1");return(0,s.wg)(),(0,s.iD)("div",{class:(0,n.C_)(["card",e.widgetClasses])},[(0,s._)("div",a,[l,(0,s._)("div",r,[(0,s._)("button",o,[(0,s._)("span",c,[(0,s.Wm)(p,{src:"media/icons/duotune/general/gen024.svg"})])]),(0,s.Wm)(u)])]),d],2)}var g=i(68130),v=(0,s.aZ)({name:"kt-widget-5",props:{widgetClasses:String},components:{Dropdown1:g.Z}}),p=i(83744);const u=(0,p.Z)(v,[["render",m]]);var b=u},26384:function(e,t,i){i.d(t,{Z:function(){return y}});var s=i(66252),n=i(3577);const a={class:"card-header border-0"},l=(0,s._)("h3",{class:"card-title fw-bolder text-white"},"Notifications",-1),r={class:"card-toolbar"},o={type:"button",class:"btn btn-sm btn-icon btn-color-primary btn-active-light-primary","data-kt-menu-trigger":"click","data-kt-menu-placement":"bottom-end","data-kt-menu-flip":"top-end"},c={class:"svg-icon svg-icon-2"},d={class:"card-body pt-0"},m={class:"svg-icon svg-icon-1"},g={class:"flex-grow-1 me-2"},v={href:"#",class:"fw-bolder text-gray-800 text-hover-primary fs-6"},p={class:"text-muted fw-bold d-block"};function u(e,t,i,u,b,f){const w=(0,s.up)("inline-svg"),x=(0,s.up)("Dropdown3");return(0,s.wg)(),(0,s.iD)("div",{class:(0,n.C_)(["card",e.widgetClasses])},[(0,s._)("div",a,[l,(0,s._)("div",r,[(0,s._)("button",o,[(0,s._)("span",c,[(0,s.Wm)(w,{src:"media/icons/duotune/general/gen024.svg"})])]),(0,s.Wm)(x)])]),(0,s._)("div",d,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(e.list,((t,i)=>((0,s.wg)(),(0,s.iD)("div",{key:i,class:(0,n.C_)([[e.list.length-1!==i,`bg-light-${t.color}`],"d-flex align-items-center rounded p-5 mb-7"])},[(0,s._)("span",{class:(0,n.C_)([`svg-icon-${t.color}`,"svg-icon me-5"])},[(0,s._)("span",m,[(0,s.Wm)(w,{src:"media/icons/duotune/abstract/abs027.svg"})])],2),(0,s._)("div",g,[(0,s._)("a",v,(0,n.zw)(t.title),1),(0,s._)("span",p,(0,n.zw)(t.text),1)]),(0,s._)("span",{class:(0,n.C_)([`text-${t.color}`,"fw-bolder py-1"])},(0,n.zw)(t.number),3)],2)))),128))])],2)}var b=i(2262),f=i(78627),w=(0,s.aZ)({name:"kt-widget-6",components:{Dropdown3:f.Z},props:{widgetClasses:String},setup(){const e=(0,b.iH)([{color:"warning",icon:"media/icons/duotune/abstract/abs027.svg",title:"Group lunch celebration",text:"Due in 2 Days",number:"+28%"},{color:"success",icon:"media/icons/duotune/art/art005.svg",title:"Navigation optimization",text:"Due in 2 Days",number:"+50%"},{color:"danger",icon:"media/icons/duotune/communication/com012.svg",title:"Rebrand strategy planning",text:"Due in 5 Days",number:"-27%"},{color:"info",icon:"media/icons/duotune/communication/com012.svg",title:"Product goals strategy",text:"Due in 7 Days",number:"+8%"}]);return{list:e}}}),x=i(83744);const _=(0,x.Z)(w,[["render",u]]);var y=_}}]);
//# sourceMappingURL=2012.c8188a52.js.map