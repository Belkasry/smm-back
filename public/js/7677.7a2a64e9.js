"use strict";(self["webpackChunkdemo1"]=self["webpackChunkdemo1"]||[]).push([[7677],{17677:function(e,t,a){a.d(t,{y:function(){return de}});var l=a(66252),o=a(52762),n=a(9807),r=a(12214),u=a(48676);const s=(0,r.d4)({align:{type:String,default:"start"},fixed:Boolean,fixedOffset:[Number,String],height:[Number,String],lastFixed:Boolean,noPadding:Boolean,tag:String,width:[Number,String]},((e,t)=>{let{slots:a,attrs:o}=t;const n=e.tag??"td";return(0,l.Wm)(n,(0,l.dG)({class:["v-data-table__td",{"v-data-table-column--fixed":e.fixed,"v-data-table-column--last-fixed":e.lastFixed,"v-data-table-column--no-padding":e.noPadding},`v-data-table-column--align-${e.align}`],style:{height:(0,u.kb)(e.height),width:(0,u.kb)(e.width),left:(0,u.kb)(e.fixedOffset||null)}},o),{default:()=>[a.default?.()]})}));var i=a(17737),d=a(9264),c=a(98042),p=a(16054),m=a(2262),v=a(6533);const f=(0,v.U)({headers:{type:Array,default:()=>[]}},"v-data-table-header"),g=Symbol.for("vuetify:data-table-headers");function y(e,t){const a=(0,m.iH)([]),o=(0,m.iH)([]);(0,l.YP)((()=>e.headers),(()=>{const l=e.headers.length?Array.isArray(e.headers[0])?e.headers:[e.headers]:[],n=l.flatMap(((e,t)=>e.map((e=>({column:e,row:t}))))),r=l.length,s={title:"",sortable:!1},i={...s,width:48};if(t?.groupBy?.value.length){const e=n.findIndex((e=>{let{column:t}=e;return"data-table-group"===t.key}));e<0?n.unshift({column:{...s,key:"data-table-group",title:"Group",rowspan:r},row:0}):n.splice(e,1,{column:{...s,...n[e].column},row:n[e].row})}if(t?.showSelect?.value){const e=n.findIndex((e=>{let{column:t}=e;return"data-table-select"===t.key}));e<0?n.unshift({column:{...i,key:"data-table-select",rowspan:r},row:0}):n.splice(e,1,{column:{...i,...n[e].column},row:n[e].row})}if(t?.showExpand?.value){const e=n.findIndex((e=>{let{column:t}=e;return"data-table-expand"===t.key}));e<0?n.push({column:{...i,key:"data-table-expand",rowspan:r},row:0}):n.splice(e,1,{column:{...i,...n[e].column},row:n[e].row})}const d=(0,u.MT)(r).map((()=>[])),c=(0,u.MT)(r).fill(0);let p=0;n.forEach((e=>{let{column:t,row:a}=e;const l=t.key??"data-table-column-"+p++;for(let o=a;o<=a+(t.rowspan??1)-1;o++)d[o].push({...t,key:l,fixedOffset:c[o],sortable:t.sortable??!!t.key}),c[o]+=t.width??0})),d.forEach((e=>{for(let t=e.length;t--;t>=0)if(e[t].fixed)return void(e[t].lastFixed=!0)}));const m=new Set;a.value=d.map((e=>{const t=[];for(const a of e)m.has(a.key)||(m.add(a.key),t.push(a));return t})),o.value=d.at(-1)??[]}),{deep:!0,immediate:!0});const n={headers:a,columns:o};return(0,l.JJ)(g,n),n}function h(){const e=(0,l.f3)(g);if(!e)throw new Error("Missing headers!");return e}var b=a(11316);const x=(0,v.U)({showSelect:Boolean,modelValue:{type:Array,default:()=>[]}},"v-data-table-select"),k=Symbol.for("vuetify:data-table-selection");function w(e,t){const a=(0,b.z)(e,"modelValue",e.modelValue,(e=>new Set(e)),(e=>[...e.values()]));function o(e){return e.every((e=>a.value.has(e.value)))}function n(e){return e.some((e=>a.value.has(e.value)))}function r(e,t){const l=new Set(a.value);for(const a of e)t?l.add(a.value):l.delete(a.value);a.value=l}function u(e){r([e],!o([e]))}function s(e){r(t.value,e)}const i=(0,l.Fl)((()=>a.value.size>0)),d=(0,l.Fl)((()=>o(t.value))),c={toggleSelect:u,select:r,selectAll:s,isSelected:o,isSomeSelected:n,someSelected:i,allSelected:d};return(0,l.JJ)(k,c),c}function S(){const e=(0,l.f3)(k);if(!e)throw new Error("Missing selection!");return e}const W=(0,v.U)({sortBy:{type:Array,default:()=>[]},multiSort:Boolean,mustSort:Boolean},"v-data-table-sort"),P=Symbol.for("vuetify:data-table-sort");function F(e){const t=(0,b.z)(e,"sortBy"),a=a=>{let l=t.value.map((e=>({...e})))??[];const o=l.find((e=>e.key===a));o?"desc"===o.order?e.mustSort?o.order="asc":l=l.filter((e=>e.key!==a)):o.order="desc":l=e.multiSort?[...l,{key:a,order:"asc"}]:[{key:a,order:"asc"}],t.value=l},o={sortBy:t,toggleSort:a};return(0,l.JJ)(P,o),o}function B(){const e=(0,l.f3)(P);if(!e)throw new Error("Missing sort!");return e}function T(e,t,a){const o=(0,l.Fl)((()=>a.value.reduce(((e,t)=>(t.sort&&(e[t.key]=t.sort),e)),{}))),n=(0,l.Fl)((()=>t.value.length?I(e.value,t.value,"en",o.value):e.value));return{sortedItems:n}}function I(e,t,a,l){const o=new Intl.Collator(a,{sensitivity:"accent",usage:"sort"});return[...e].sort(((e,a)=>{for(let n=0;n<t.length;n++){const r=t[n].key,s=t[n].order;if(!1===s)continue;let i=(0,u.vO)(e.raw,r),d=(0,u.vO)(a.raw,r);if("desc"===s&&([i,d]=[d,i]),l?.[r]){const e=l[r](i,d);if(!e)continue;return e}if(null!=i&&null!=d){if(i instanceof Date&&d instanceof Date)return i.getTime()-d.getTime();if([i,d]=[i,d].map((e=>(e||"").toString().toLocaleLowerCase())),i!==d)return isNaN(i)||isNaN(d)?o.compare(i,d):Number(i)-Number(d)}}return 0}))}var _=a(73099);const $=(0,r.ev)()({name:"VDataTableHeaders",props:{color:String,sticky:Boolean,multiSort:Boolean,sortAscIcon:{type:d.lE,default:"$sortAsc"},sortDescIcon:{type:d.lE,default:"$sortDesc"},...(0,c.fF)()},setup(e,t){let{slots:a,emit:o}=t;const{toggleSort:r,sortBy:d}=B(),{someSelected:m,allSelected:v,selectAll:f}=S(),{columns:g,headers:y}=h(),{loaderClasses:b}=(0,c.U2)(e),x=(t,a)=>e.sticky||t.fixed?{position:"sticky",zIndex:t.fixed?4:e.sticky?3:void 0,left:t.fixed?(0,u.kb)(t.fixedOffset):void 0,top:e.sticky?`calc(var(--v-table-header-height) * ${a})`:void 0}:null;function k(t){const a=d.value.find((e=>e.key===t));return a?"asc"===a.order?e.sortAscIcon:e.sortDescIcon:e.sortAscIcon}const{backgroundColorClasses:w,backgroundColorStyles:W}=(0,p.Y5)(e,"color"),P=t=>{let{column:o,x:c,y:p}=t;const g=!!d.value.find((e=>e.key===o.key)),y="data-table-select"===o.key||"data-table-expand"===o.key;return(0,l.Wm)(s,{tag:"th",align:o.align,class:["v-data-table__th",{"v-data-table__th--sortable":o.sortable,"v-data-table__th--sorted":g},b.value],style:{width:(0,u.kb)(o.width),minWidth:(0,u.kb)(o.width),...x(o,p)},colspan:o.colspan,rowspan:o.rowspan,onClick:o.sortable?()=>r(o.key):void 0,lastFixed:o.lastFixed,noPadding:y},{default:()=>{const t=`column.${o.key}`,r={column:o,selectAll:f};return a[t]?a[t](r):"data-table-select"===o.key?a["column.data-table-select"]?.(r)??(0,l.Wm)(n.pM,{modelValue:v.value,indeterminate:m.value&&!v.value,"onUpdate:modelValue":f},null):(0,l.Wm)("div",{class:"v-data-table-header__content"},[(0,l.Wm)("span",null,[o.title]),o.sortable&&(0,l.Wm)(i.t,{key:"icon",class:"v-data-table-header__sort-icon",icon:k(o.key)},null),e.multiSort&&g&&(0,l.Wm)("div",{key:"badge",class:["v-data-table-header__sort-badge",...w.value],style:W.value},[d.value.findIndex((e=>e.key===o.key))+1])])}})};(0,_.L)((()=>(0,l.Wm)(l.HY,null,[y.value.map(((e,t)=>(0,l.Wm)("tr",null,[e.map(((e,a)=>(0,l.Wm)(P,{column:e,x:a,y:t},null)))]))),e.loading&&(0,l.Wm)("tr",{class:"v-data-table__progress"},[(0,l.Wm)("th",{colspan:g.value.length},[(0,l.Wm)(c.rD,{name:"v-data-table-headers",active:!0,color:"boolean"===typeof e.loading?void 0:e.loading,indeterminate:!0},{default:a.loader})])])])))}});var C=a(9095);const V=(0,v.U)({groupBy:{type:Array,default:()=>[]}},"data-table-group"),E=Symbol.for("vuetify:data-table-group");function D(e,t,a){const o=(0,m.iH)(new Set),n=(0,l.Fl)((()=>t.value.map((e=>({...e,order:e.order??!1}))).concat(a.value)));function r(e){return o.value.has(e.id)}function u(e){const t=new Set(o.value);r(e)?t.delete(e.id):t.add(e.id),o.value=t}function s(e){function t(e){const a=[];for(const l of e.items)"item"===l.type?a.push(l):a.push(...t(l));return a}return t({type:"group-header",items:e,id:"dummy",key:"dummy",value:"dummy",depth:0})}const i={sortByWithGroups:n,toggleGroup:u,opened:o,groupBy:t,extractRows:s,isGroupOpen:r};return(0,l.JJ)(E,i),i}function N(){const e=(0,l.f3)(E);if(!e)throw new Error("Missing group!");return e}function O(e,t){if(!e.length)return[];const a=new Map;for(const l of e){const e=(0,u.vO)(l.raw,t);a.has(e)||a.set(e,[]),a.get(e).push(l)}return a}function A(e,t){let a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,l=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"root";if(!t.length)return[];const o=O(e,t[0]),n=[],r=t.slice(1);return o.forEach(((e,o)=>{const u=t[0],s=`${l}_${u}_${o}`;n.push({depth:a,id:s,key:u,value:o,items:r.length?A(e,r,a+1,s):e,type:"group-header"})})),n}function L(e,t){const a=[];for(const l of e)"group-header"===l.type?(null!=l.value&&a.push(l),(t.has(l.id)||null==l.value)&&a.push(...L(l.items,t))):a.push(l);return a}function U(e,t,a){const o=(0,l.Fl)((()=>{if(!t.value.length)return e.value;const l=A(e.value,t.value.map((e=>e.key)));return L(l,a.value)}));return{flatItems:o}}const M=(0,r.ev)()({name:"VDataTableGroupHeaderRow",props:{item:{type:Object,required:!0}},setup(e,t){let{slots:a}=t;const{isGroupOpen:o,toggleGroup:r,extractRows:u}=N(),{isSelected:i,isSomeSelected:d,select:c}=S(),{columns:p}=h(),m=(0,l.Fl)((()=>u([e.item])));return()=>(0,l.Wm)("tr",{class:"v-data-table-group-header-row",style:{"--v-data-table-group-header-row-depth":e.item.depth}},[p.value.map((t=>{if("data-table-group"===t.key){const t=o(e.item)?"$expand":"$next",n=()=>r(e.item);return a["data-table-group"]?.({item:e.item,count:m.value.length,props:{icon:t,onClick:n}})??(0,l.Wm)(s,{class:"v-data-table-group-header-row__column"},{default:()=>[(0,l.Wm)(C.T,{size:"small",variant:"text",icon:t,onClick:n},null),(0,l.Wm)("span",null,[e.item.value]),(0,l.Wm)("span",null,[(0,l.Uk)("("),m.value.length,(0,l.Uk)(")")])]})}if("data-table-select"===t.key){const e=i(m.value),t=d(m.value)&&!e,o=e=>c(m.value,e);return a["data-table-select"]?.({props:{modelValue:e,indeterminate:t,"onUpdate:modelValue":o}})??(0,l.Wm)("td",null,[(0,l.Wm)(n.pM,{modelValue:e,indeterminate:t,"onUpdate:modelValue":o},null)])}return(0,l.Wm)("td",null,null)}))])}}),H=(0,v.U)({expandOnClick:Boolean,showExpand:Boolean,expanded:{type:Array,default:()=>[]}},"v-data-table-expand"),G=Symbol.for("vuetify:datatable:expanded");function J(e){const t=(0,m.Vh)(e,"expandOnClick"),a=(0,b.z)(e,"expanded",e.expanded,(e=>new Set(e)),(e=>[...e.values()]));function o(e,t){const l=new Set(a.value);t?l.add(e.value):l.delete(e.value),a.value=l}function n(e){return a.value.has(e.value)}function r(e){o(e,!n(e))}const u={expand:o,expanded:a,expandOnClick:t,isExpanded:n,toggleExpand:r};return(0,l.JJ)(G,u),u}function z(){const e=(0,l.f3)(G);if(!e)throw new Error("foo");return e}const Y=(0,r.aZ)({name:"VDataTableRow",props:{item:Object},setup(e,t){let{slots:a}=t;const{isSelected:o,toggleSelect:r}=S(),{isExpanded:u,toggleExpand:i}=z(),{columns:d}=h();(0,_.L)((()=>(0,l.Wm)("tr",{class:["v-data-table__tr"]},[!d.value.length&&(0,l.Wm)(s,{key:"no-data"},a),e.item&&d.value.map(((t,c)=>(0,l.Wm)(s,{align:t.align,fixed:t.fixed,fixedOffset:t.fixedOffset,lastFixed:t.lastFixed,noPadding:"data-table-select"===t.key||"data-table-expand"===t.key,width:t.width},{default:()=>{const s=e.item,c=`item.${t.key}`,p={item:e.item,columns:d.value,isSelected:o,toggleSelect:r,isExpanded:u,toggleExpand:i};return a[c]?a[c](p):"data-table-select"===t.key?a["item.data-table-select"]?.(p)??(0,l.Wm)(n.pM,{modelValue:o([s]),onClick:()=>r(s)},null):"data-table-expand"===t.key?a["item.data-table-expand"]?.(p)??(0,l.Wm)(C.T,{icon:u(s)?"$collapse":"$expand",size:"small",variant:"text",onClick:()=>i(s)},null):s.columns[t.key]}})))])))}});var R=a(88475);const j=(0,r.ev)()({name:"VDataTableRows",props:{loading:[Boolean,String],loadingText:{type:String,default:"$vuetify.dataIterator.loadingText"},hideNoData:Boolean,items:{type:Array,default:()=>[]},noDataText:{type:String,default:"$vuetify.noDataText"},rowHeight:Number},emits:{"click:row":(e,t)=>!0},setup(e,t){let{emit:a,slots:o}=t;const{columns:n}=h(),{expandOnClick:r,toggleExpand:u,isExpanded:s}=z(),{isSelected:i,toggleSelect:d}=S(),{toggleGroup:c,isGroupOpen:p}=N(),{t:m}=(0,R.bU)();return(0,_.L)((()=>(0,l.Wm)(l.HY,null,[e.loading?o.loading?.()??(0,l.Wm)(Y,{class:"v-data-table-rows-no-data",key:"loading"},{default:()=>[m(e.loadingText)]}):void 0,!e.loading&&!e.items.length&&!e.hideNoData&&(o["no-data"]?.()??(0,l.Wm)(Y,{class:"v-data-table-rows-no-data",key:"no-data"},{default:()=>[m(e.noDataText)]})),e.items.map(((e,t)=>"group-header"===e.type?o["group-header"]?o["group-header"]({index:t,item:e,columns:n.value,isExpanded:s,toggleExpand:u,isSelected:i,toggleSelect:d,toggleGroup:c,isGroupOpen:p}):(0,l.Wm)(M,{key:`group-header_${e.id}`,item:e},o):(0,l.Wm)(l.HY,null,[o.item?o.item({index:t,item:e,columns:n.value,isExpanded:s,toggleExpand:u,isSelected:i,toggleSelect:d}):(0,l.Wm)(Y,{key:`item_${e.value}`,onClick:t=>{r.value&&u(e.value),a("click:row",t,{item:e})},item:e},o),s(e)&&o["expanded-row"]?.({item:e,columns:n.value})])))]))),{}}});var q=a(88069);const Z=(0,v.U)({page:{type:[Number,String],default:1},itemsPerPage:{type:[Number,String],default:10}},"v-data-table-paginate"),K=Symbol.for("vuetify:data-table-pagination");function Q(e,t){const a=(0,b.z)(e,"page",void 0,(e=>+(e??1))),o=(0,b.z)(e,"itemsPerPage",void 0,(e=>+(e??10))),n=(0,l.Fl)((()=>+(e.itemsLength??t.value.length))),r=(0,l.Fl)((()=>-1===o.value?0:o.value*(a.value-1))),u=(0,l.Fl)((()=>-1===o.value?n.value:Math.min(n.value,r.value+o.value))),s=(0,l.Fl)((()=>-1===o.value||0===n.value?1:Math.ceil(n.value/o.value))),i={page:a,itemsPerPage:o,startIndex:r,stopIndex:u,pageCount:s,itemsLength:n};return(0,l.JJ)(K,i),i}function X(){const e=(0,l.f3)(K);if(!e)throw new Error("Missing pagination!");return e}function ee(e,t,a,o){const n=(0,l.Fl)((()=>o.value<=0?e.value:e.value.slice(t.value,a.value)));return{paginatedItems:n}}const te=(0,r.ev)()({name:"VDataTableFooter",props:{prevIcon:{type:String,default:"$prev"},nextIcon:{type:String,default:"$next"},firstIcon:{type:String,default:"$first"},lastIcon:{type:String,default:"$last"},itemsPerPageText:{type:String,default:"$vuetify.dataFooter.itemsPerPageText"},pageText:{type:String,default:"$vuetify.dataFooter.pageText"},firstPageLabel:{type:String,default:"$vuetify.dataFooter.firstPage"},prevPageLabel:{type:String,default:"$vuetify.dataFooter.prevPage"},nextPageLabel:{type:String,default:"$vuetify.dataFooter.nextPage"},lastPageLabel:{type:String,default:"$vuetify.dataFooter.lastPage"},itemsPerPageOptions:{type:Array,default:()=>[{value:10,title:"10"},{value:25,title:"25"},{value:50,title:"50"},{value:100,title:"100"},{value:-1,title:"$vuetify.dataFooter.itemsPerPageAll"}]},showCurrentPage:Boolean},setup(e,t){let{slots:a}=t;const{t:o}=(0,R.bU)(),{page:n,pageCount:r,startIndex:u,stopIndex:s,itemsLength:i,itemsPerPage:d}=X(),c=(0,l.Fl)((()=>e.itemsPerPageOptions.map((e=>({...e,title:o(e.title)})))));return()=>(0,l.Wm)("div",{class:"v-data-table-footer"},[a.prepend?.(),(0,l.Wm)("div",{class:"v-data-table-footer__items-per-page"},[(0,l.Wm)("span",null,[o(e.itemsPerPageText)]),(0,l.Wm)(q.r,{items:c.value,modelValue:d.value,"onUpdate:modelValue":e=>d.value=Number(e),density:"compact",variant:"outlined","hide-details":!0},null)]),(0,l.Wm)("div",{class:"v-data-table-footer__info"},[(0,l.Wm)("div",null,[o(e.pageText,i.value?u.value+1:0,s.value,i.value)])]),(0,l.Wm)("div",{class:"v-data-table-footer__pagination"},[(0,l.Wm)(C.T,{icon:e.firstIcon,variant:"plain",onClick:()=>n.value=1,disabled:1===n.value,"aria-label":o(e.firstPageLabel)},null),(0,l.Wm)(C.T,{icon:e.prevIcon,variant:"plain",onClick:()=>n.value=Math.max(1,n.value-1),disabled:1===n.value,"aria-label":o(e.prevPageLabel)},null),e.showCurrentPage&&(0,l.Wm)("span",{key:"page",class:"v-data-table-footer__page"},[n.value]),(0,l.Wm)(C.T,{icon:e.nextIcon,variant:"plain",onClick:()=>n.value=Math.min(r.value,n.value+1),disabled:n.value===r.value,"aria-label":o(e.nextPageLabel)},null),(0,l.Wm)(C.T,{icon:e.lastIcon,variant:"plain",onClick:()=>n.value=r.value,disabled:n.value===r.value,"aria-label":o(e.lastPageLabel)},null)])])}});var ae=a(89855);const le=(0,v.U)({...(0,ae.S1)({itemValue:"id"})},"v-data-table-item");function oe(e,t){const{items:a}=(0,ae.Ce)(e),o=(0,l.Fl)((()=>a.value.map((e=>({...e,type:"item",columns:t.value.reduce(((t,a)=>(t[a.key]=(0,u.qF)(e.raw,a.value??a.key),t)),{})})))));return{items:o}}var ne=a(24083);function re(e){let{page:t,itemsPerPage:a,sortBy:o,groupBy:n}=e;const r=(0,ne.FN)("VDataTable"),s=(0,l.Fl)((()=>({page:t.value,itemsPerPage:a.value,sortBy:o.value,groupBy:n.value})));(0,l.YP)(o,(()=>{t.value=1}),{deep:!0}),(0,l.YP)(a,(()=>{t.value=1}));let i=null;(0,l.YP)(s,(()=>{(0,u.vZ)(i,s.value)||(r.emit("update:options",s.value),i=s.value)}),{deep:!0,immediate:!0})}var ue=a(66474),se=a(304);const ie=(0,v.U)({...le(),...f(),hideNoData:Boolean,noDataText:{type:String,default:"$vuetify.noDataText"},height:[String,Number],width:[String,Number],fixedHeader:Boolean,fixedFooter:Boolean},"v-data-table"),de=(0,r.ev)()({name:"VDataTable",props:{search:String,...ie(),...H(),...V(),...x(),...W(),...Z(),...(0,se.Up)()},emits:{"update:modelValue":e=>!0,"update:page":e=>!0,"update:itemsPerPage":e=>!0,"update:sortBy":e=>!0,"update:options":e=>!0,"update:groupBy":e=>!0,"update:expanded":e=>!0,"click:row":(e,t)=>!0},setup(e,t){let{emit:a,slots:n}=t;const r=(0,b.z)(e,"groupBy"),{columns:u}=y(e,{groupBy:r,showSelect:(0,m.Vh)(e,"showSelect"),showExpand:(0,m.Vh)(e,"showExpand")}),{items:s}=oe(e,u),i=(0,l.Fl)((()=>u.value.map((e=>"columns."+e.key)))),{filteredItems:d}=(0,se.L0)(e,s,(0,m.Vh)(e,"search"),{filterKeys:i}),{sortBy:c}=F(e),{sortByWithGroups:p,opened:v,extractRows:f}=D(e,r,c),{sortedItems:g}=T(d,p,u),{flatItems:h}=U(g,r,v),{page:x,itemsPerPage:k,startIndex:S,stopIndex:W}=Q(e,h),{paginatedItems:P}=ee(h,S,W,k),B=(0,l.Fl)((()=>f(P.value)));return w(e,B),J(e),re({page:x,itemsPerPage:k,sortBy:c,groupBy:r}),(0,ue.AF)({VDataTableRows:{hideNoData:(0,m.Vh)(e,"hideNoData"),noDataText:(0,m.Vh)(e,"noDataText")}}),(0,_.L)((()=>(0,l.Wm)(o.Y,{class:["v-data-table",{"v-data-table--show-select":e.showSelect}],fixedHeader:e.fixedHeader,fixedFooter:e.fixedFooter,height:e.height},{top:n.top,default:n.default??(()=>(0,l.Wm)(l.HY,null,[n.colgroup?.({columns:u}),(0,l.Wm)("thead",null,[n.headers?n.headers():(0,l.Wm)($,{sticky:e.fixedHeader,multiSort:e.multiSort},n)]),n.thead?.(),(0,l.Wm)("tbody",null,[n.body?n.body():(0,l.Wm)(j,{items:P.value,"onClick:row":(e,t)=>a("click:row",e,t)},n)]),n.tbody?.(),n.tfoot?.()])),bottom:n.bottom??(()=>(0,l.Wm)(te,null,{prepend:n["footer.prepend"]}))}))),{}}})}}]);
//# sourceMappingURL=7677.7a2a64e9.js.map