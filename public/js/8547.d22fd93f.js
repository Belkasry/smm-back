"use strict";(self["webpackChunkdemo1"]=self["webpackChunkdemo1"]||[]).push([[8547],{88547:function(e,l,a){a.d(l,{Z:function(){return f}});var t=a(66252),o=a(3577);const n=(0,t._)("p",null,"Cumulative by year:",-1),r={class:"card-header border-0 pt-5"},u={class:"card-title align-items-start flex-column"},s={class:"card-label text-white fw-bolder fs-5 mb-1"},i={class:"card-toolbar"},d={class:"card-body"};function h(e,l,a,h,m,c){const p=(0,t.up)("v-card-title"),v=(0,t.up)("v-card-text"),w=(0,t.up)("v-card"),f=(0,t.up)("v-list-subheader"),y=(0,t.up)("v-list-item-title"),g=(0,t.up)("v-list-item-subtitle"),b=(0,t.up)("v-list-item"),_=(0,t.up)("v-list"),k=(0,t.up)("v-col"),W=(0,t.up)("v-btn"),V=(0,t.up)("v-text-field"),x=(0,t.up)("v-row"),C=(0,t.up)("v-card-actions"),U=(0,t.up)("v-dialog"),z=(0,t.up)("apexchart");return(0,t.wg)(),(0,t.j4)(x,{class:"mt-4"},{default:(0,t.w5)((()=>[(0,t.Wm)(k,{md:"4",class:"d-none"},{default:(0,t.w5)((()=>[(0,t._)("div",null,[(0,t.Wm)(w,null,{default:(0,t.w5)((()=>[(0,t.Wm)(p,{style:(0,o.j5)("color:"+e.chart.barColor)},{default:(0,t.w5)((()=>[(0,t.Uk)((0,o.zw)(e.chart.theme)+" - "+(0,o.zw)(e.chart.chartName),1)])),_:1},8,["style"]),(0,t.Wm)(v,null,{default:(0,t.w5)((()=>[n])),_:1})])),_:1}),(0,t.Wm)(_,null,{default:(0,t.w5)((()=>[(0,t.Wm)(f,null,{default:(0,t.w5)((()=>[(0,t.Uk)("Valeurs mensuelles:")])),_:1}),((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(e.chart.month_values,(e=>((0,t.wg)(),(0,t.j4)(b,{key:e.id},{default:(0,t.w5)((()=>[(0,t.Wm)(y,null,{default:(0,t.w5)((()=>[(0,t.Wm)(y,null,{default:(0,t.w5)((()=>[(0,t.Uk)((0,o.zw)(e.month)+" - "+(0,o.zw)(e.value),1)])),_:2},1024),(0,t.Wm)(g,null,{default:(0,t.w5)((()=>[(0,t.Uk)((0,o.zw)(e.year),1)])),_:2},1024)])),_:2},1024)])),_:2},1024)))),128))])),_:1})])])),_:1}),(0,t.Wm)(k,{md:"12"},{default:(0,t.w5)((()=>[e.chart?((0,t.wg)(),(0,t.iD)("div",{key:0,class:(0,o.C_)(["card",e.widgetClasses]),style:{"background-color":"#235153"}},[(0,t._)("div",r,[(0,t._)("h3",u,[(0,t._)("span",s,(0,o.zw)(e.chart.chartName),1),(0,t._)("span",{class:"text-muted fw-bold fs-7",style:(0,o.j5)("color:"+e.chart.barColor)},(0,o.zw)(e.chart.theme),5)]),(0,t._)("div",i,[(0,t._)("div",null,[(0,t.Wm)(W,{onClick:l[0]||(l[0]=l=>e.dialog=!0),style:(0,o.j5)("background:"+e.chart.barColor)},{default:(0,t.w5)((()=>[(0,t.Uk)("Ajouter les valeurs")])),_:1},8,["style"]),(0,t.Wm)(U,{modelValue:e.dialog,"onUpdate:modelValue":l[4]||(l[4]=l=>e.dialog=l),"max-width":"600"},{default:(0,t.w5)((()=>[(0,t.Wm)(w,null,{default:(0,t.w5)((()=>[(0,t.Wm)(p,null,{default:(0,t.w5)((()=>[(0,t.Uk)("Ajouter les valeurs")])),_:1}),(0,t.Wm)(v,null,{default:(0,t.w5)((()=>[(0,t.Wm)(V,{modelValue:e.monthValue.year,"onUpdate:modelValue":l[1]||(l[1]=l=>e.monthValue.year=l),label:"Year"},null,8,["modelValue"]),(0,t.Wm)(x,null,{default:(0,t.w5)((()=>[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(e.months,((e,l)=>((0,t.wg)(),(0,t.j4)(k,{key:l,cols:"6"},{default:(0,t.w5)((()=>[(0,t.Wm)(V,{modelValue:e.value,"onUpdate:modelValue":l=>e.value=l,label:e.month,placeholder:e.month},null,8,["modelValue","onUpdate:modelValue","label","placeholder"])])),_:2},1024)))),128))])),_:1})])),_:1}),(0,t.Wm)(C,null,{default:(0,t.w5)((()=>[(0,t.Wm)(W,{color:"primary",onClick:l[2]||(l[2]=l=>e.addMonthValues(e.chart.id))},{default:(0,t.w5)((()=>[(0,t.Uk)("Save")])),_:1}),(0,t.Wm)(W,{onClick:l[3]||(l[3]=l=>e.dialog=!1)},{default:(0,t.w5)((()=>[(0,t.Uk)("Cancel")])),_:1})])),_:1})])),_:1})])),_:1},8,["modelValue"])])])]),(0,t._)("div",d,[(0,t.Wm)(z,{type:"bar",options:e.options,series:e.series,height:e.height},null,8,["options","series","height"])])],2)):(0,t.kq)("",!0)])),_:1})])),_:1})}var m=a(68816),c=a(8433),p=(0,t.aZ)({computed:{currentRouteName(){return window.location.origin}},name:"widget-1",props:{year:null,chart:null,barColor:String,widgetClasses:String,height:Number},data(){return{dialog:!1,monthValue:{year:null},months:[{month:"jan",value:0},{month:"Fév",value:0},{month:"Mar",value:0},{month:"Avr",value:0},{month:"Mai",value:0},{month:"Juin",value:0},{month:"Juil",value:0},{month:"Août",value:0},{month:"Sept",value:0},{month:"Oct",value:0},{month:"Nov",value:0},{month:"Déc",value:0}]}},watch:{"monthValue.year"(e){const l=this.chart.month_values.filter((l=>l.year==e));l.length>0&&(this.months=l)}},components:{},setup(e){const l=(0,m.mK)("--bs-gray-500"),a=(0,m.mK)("--bs-gray-200"),t=(0,m.mK)("--bs-gray-300");let o=[],n=[],r=0;e.chart.month_values.forEach((l=>{l.year===e.year&&(r+=l.value,o.push(l.month),n.push(l.value))})),console.log(n);const u=[{name:e.chart.chartName,data:n},{name:"Cumul",data:Array(n.length).fill((r/n.length).toFixed(2))}],s={chart:{fontFamily:"inherit",type:"bar",toolbar:{show:!1}},plotOptions:{bar:{horizontal:!1,columnWidth:["30%"],endingShape:"rounded"}},legend:{show:!1},dataLabels:{enabled:!1},stroke:{show:!0,width:2,colors:["transparent"]},xaxis:{categories:o,axisBorder:{show:!1},axisTicks:{show:!1},labels:{style:{colors:l,fontSize:"12px"}}},yaxis:{labels:{style:{colors:l,fontSize:"12px"}}},fill:{opacity:1},states:{normal:{filter:{type:"none",value:0}},hover:{filter:{type:"none",value:0}},active:{allowMultipleDataPointsSelection:!1,filter:{type:"none",value:0}}},tooltip:{style:{fontSize:"12px"},y:{formatter:function(e){return e}}},colors:[e.barColor,t],grid:{borderColor:a,strokeDashArray:4,yaxis:{lines:{show:!0}}}};return{options:s,series:u}},methods:{addMonthValues(e){const l=this.months.map((e=>({month:e.month,value:e.value,year:this.monthValue.year})));console.log(l),c.Z.post(this.currentRouteName+`/api/chart-data/${e}/month-values`,l).then((e=>{console.log(e.data),this.dialog=!1,location.reload()})).catch((e=>{console.log(e)}))}}}),v=a(83744);const w=(0,v.Z)(p,[["render",h]]);var f=w}}]);
//# sourceMappingURL=8547.d22fd93f.js.map