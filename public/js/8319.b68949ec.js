"use strict";(self["webpackChunkdemo1"]=self["webpackChunkdemo1"]||[]).push([[8319],{68932:function(e,l,t){t.d(l,{M:function(){return n},V:function(){return r}});var a=t(66450),o=t(15758);const n=(e,l)=>{a.Z.dispatch(o.e.SET_BREADCRUMB_ACTION,{title:e,pageBreadcrumbPath:l})},r=e=>{a.Z.dispatch(o.e.SET_BREADCRUMB_ACTION,{title:e})}},84801:function(e,l,t){t.d(l,{Z:function(){return f}});var a=t(66252),o=t(3577);const n=(0,a._)("p",null,"Cumulative by year:",-1),r={class:"card-header border-0 pt-5"},u={class:"card-title align-items-start flex-column"},s={class:"card-label text-white fw-bolder fs-5 mb-1"},i={class:"card-toolbar"},d={class:"card-body"};function h(e,l,t,h,m,c){const p=(0,a.up)("v-card-title"),v=(0,a.up)("v-card-text"),w=(0,a.up)("v-card"),f=(0,a.up)("v-list-subheader"),y=(0,a.up)("v-list-item-title"),g=(0,a.up)("v-list-item-subtitle"),_=(0,a.up)("v-list-item"),b=(0,a.up)("v-list"),k=(0,a.up)("v-col"),W=(0,a.up)("v-btn"),C=(0,a.up)("v-text-field"),V=(0,a.up)("v-row"),x=(0,a.up)("v-card-actions"),U=(0,a.up)("v-dialog"),z=(0,a.up)("apexchart");return(0,a.wg)(),(0,a.j4)(V,{class:"mt-4"},{default:(0,a.w5)((()=>[(0,a.Wm)(k,{md:"4",class:"d-none"},{default:(0,a.w5)((()=>[(0,a._)("div",null,[(0,a.Wm)(w,null,{default:(0,a.w5)((()=>[(0,a.Wm)(p,{style:(0,o.j5)("color:"+e.chart.barColor)},{default:(0,a.w5)((()=>[(0,a.Uk)((0,o.zw)(e.chart.theme)+" - "+(0,o.zw)(e.chart.chartName),1)])),_:1},8,["style"]),(0,a.Wm)(v,null,{default:(0,a.w5)((()=>[n])),_:1})])),_:1}),(0,a.Wm)(b,null,{default:(0,a.w5)((()=>[(0,a.Wm)(f,null,{default:(0,a.w5)((()=>[(0,a.Uk)("Valeurs mensuelles:")])),_:1}),((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.chart.month_values,(e=>((0,a.wg)(),(0,a.j4)(_,{key:e.id},{default:(0,a.w5)((()=>[(0,a.Wm)(y,null,{default:(0,a.w5)((()=>[(0,a.Wm)(y,null,{default:(0,a.w5)((()=>[(0,a.Uk)((0,o.zw)(e.month)+" - "+(0,o.zw)(e.value),1)])),_:2},1024),(0,a.Wm)(g,null,{default:(0,a.w5)((()=>[(0,a.Uk)((0,o.zw)(e.year),1)])),_:2},1024)])),_:2},1024)])),_:2},1024)))),128))])),_:1})])])),_:1}),(0,a.Wm)(k,{md:"12"},{default:(0,a.w5)((()=>[e.chart?((0,a.wg)(),(0,a.iD)("div",{key:0,class:(0,o.C_)(["card",e.widgetClasses]),style:{"background-color":"#235153"}},[(0,a._)("div",r,[(0,a._)("h3",u,[(0,a._)("span",s,(0,o.zw)(e.chart.chartName),1),(0,a._)("span",{class:"text-muted fw-bold fs-7",style:(0,o.j5)("color:"+e.chart.barColor)},(0,o.zw)(e.chart.theme),5)]),(0,a._)("div",i,[(0,a._)("div",null,[(0,a.Wm)(W,{onClick:l[0]||(l[0]=l=>e.dialog=!0),style:(0,o.j5)("background:"+e.chart.barColor)},{default:(0,a.w5)((()=>[(0,a.Uk)("Ajouter les valeurs")])),_:1},8,["style"]),(0,a.Wm)(U,{modelValue:e.dialog,"onUpdate:modelValue":l[4]||(l[4]=l=>e.dialog=l),"max-width":"600"},{default:(0,a.w5)((()=>[(0,a.Wm)(w,null,{default:(0,a.w5)((()=>[(0,a.Wm)(p,null,{default:(0,a.w5)((()=>[(0,a.Uk)("Ajouter les valeurs")])),_:1}),(0,a.Wm)(v,null,{default:(0,a.w5)((()=>[(0,a.Wm)(C,{modelValue:e.monthValue.year,"onUpdate:modelValue":l[1]||(l[1]=l=>e.monthValue.year=l),label:"Year"},null,8,["modelValue"]),(0,a.Wm)(V,null,{default:(0,a.w5)((()=>[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.months,((e,l)=>((0,a.wg)(),(0,a.j4)(k,{key:l,cols:"6"},{default:(0,a.w5)((()=>[(0,a.Wm)(C,{modelValue:e.value,"onUpdate:modelValue":l=>e.value=l,label:e.month,placeholder:e.month},null,8,["modelValue","onUpdate:modelValue","label","placeholder"])])),_:2},1024)))),128))])),_:1})])),_:1}),(0,a.Wm)(x,null,{default:(0,a.w5)((()=>[(0,a.Wm)(W,{color:"primary",onClick:l[2]||(l[2]=l=>e.addMonthValues(e.chart.id))},{default:(0,a.w5)((()=>[(0,a.Uk)("Save")])),_:1}),(0,a.Wm)(W,{onClick:l[3]||(l[3]=l=>e.dialog=!1)},{default:(0,a.w5)((()=>[(0,a.Uk)("Cancel")])),_:1})])),_:1})])),_:1})])),_:1},8,["modelValue"])])])]),(0,a._)("div",d,[(0,a.Wm)(z,{type:"bar",options:e.options,series:e.series,height:e.height},null,8,["options","series","height"])])],2)):(0,a.kq)("",!0)])),_:1})])),_:1})}var m=t(68816),c=t(8433),p=(0,a.aZ)({computed:{currentRouteName(){return window.location.origin}},name:"widget-1",props:{year:null,chart:null,barColor:String,widgetClasses:String,height:Number},data(){return{dialog:!1,monthValue:{year:null},months:[{month:"jan",value:0},{month:"Fév",value:0},{month:"Mar",value:0},{month:"Avr",value:0},{month:"Mai",value:0},{month:"Juin",value:0},{month:"Juil",value:0},{month:"Août",value:0},{month:"Sept",value:0},{month:"Oct",value:0},{month:"Nov",value:0},{month:"Déc",value:0}]}},watch:{"monthValue.year"(e){const l=this.chart.month_values.filter((l=>l.year==e));l.length>0&&(this.months=l)}},components:{},setup(e){const l=(0,m.mK)("--bs-gray-500"),t=(0,m.mK)("--bs-gray-200"),a=(0,m.mK)("--bs-gray-300");let o=[],n=[],r=0;e.chart.month_values.forEach((l=>{l.year===e.year&&(r+=l.value,o.push(l.month),n.push(l.value))})),console.log(n);const u=[{name:e.chart.chartName,data:n},{name:"Cumul",data:Array(n.length).fill((r/n.length).toFixed(2))}],s={chart:{fontFamily:"inherit",type:"bar",toolbar:{show:!1}},plotOptions:{bar:{horizontal:!1,columnWidth:["30%"],endingShape:"rounded"}},legend:{show:!1},dataLabels:{enabled:!1},stroke:{show:!0,width:2,colors:["transparent"]},xaxis:{categories:o,axisBorder:{show:!1},axisTicks:{show:!1},labels:{style:{colors:l,fontSize:"12px"}}},yaxis:{labels:{style:{colors:l,fontSize:"12px"}}},fill:{opacity:1},states:{normal:{filter:{type:"none",value:0}},hover:{filter:{type:"none",value:0}},active:{allowMultipleDataPointsSelection:!1,filter:{type:"none",value:0}}},tooltip:{style:{fontSize:"12px"},y:{formatter:function(e){return e}}},colors:[e.barColor,a],grid:{borderColor:t,strokeDashArray:4,yaxis:{lines:{show:!0}}}};return{options:s,series:u}},methods:{addMonthValues(e){const l=this.months.map((e=>({month:e.month,value:e.value,year:this.monthValue.year})));console.log(l),c.Z.post(this.currentRouteName+`/api/chart-data/${e}/month-values`,l).then((e=>{console.log(e.data),this.dialog=!1})).catch((e=>{console.log(e)}))}}}),v=t(83744);const w=(0,v.Z)(p,[["render",h]]);var f=w}}]);
//# sourceMappingURL=8319.b68949ec.js.map