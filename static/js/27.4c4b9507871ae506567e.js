webpackJsonp([27],{"7srI":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("woOf"),i=a.n(n),s=a("vLgD");var l=a("xT6B"),o={pageNum:1,pageSize:5,keyword:null},r={id:null,title:null,startDate:null,endDate:null,status:0},u={name:"flashPromotionList",data:function(){return{listQuery:i()({},o),list:null,total:null,listLoading:!1,dialogVisible:!1,flashPromotion:i()({},r),isEdit:!1}},created:function(){this.getList()},filters:{formatActiveStatus:function(t){var e=(new Date).getTime();return e>=t.startDate&&e<=t.endDate?"活动进行中":e>t.endDate?"活动已结束":"活动未开始"},formatDate:function(t){if(null==t||""===t)return"N/A";var e=new Date(t);return Object(l.a)(e,"yyyy-MM-dd")}},methods:{handleResetSearch:function(){this.listQuery=i()({},o)},handleSearchList:function(){this.listQuery.pageNum=1,this.getList()},handleSizeChange:function(t){this.listQuery.pageNum=1,this.listQuery.pageSize=t,this.getList()},handleCurrentChange:function(t){this.listQuery.pageNum=t,this.getList()},handleAdd:function(){this.dialogVisible=!0,this.isEdit=!1,this.flashPromotion=i()({},r)},handleShowSessionList:function(){this.$router.push({path:"/sms/flashSession"})},handleStatusChange:function(t,e){var a=this;this.$confirm("是否要修改该状态?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){var t,n;(t=e.id,n={status:e.status},Object(s.a)({url:"/flash/update/status/"+t,method:"post",params:n})).then(function(t){a.$message({type:"success",message:"修改成功!"})})}).catch(function(){a.$message({type:"info",message:"取消修改"}),a.getList()})},handleDelete:function(t,e){var a=this;this.$confirm("是否要删除该活动?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){var t;(t=e.id,Object(s.a)({url:"/flash/delete/"+t,method:"post"})).then(function(t){a.$message({type:"success",message:"删除成功!"}),a.getList()})})},handleUpdate:function(t,e){this.dialogVisible=!0,this.isEdit=!0,this.flashPromotion=i()({},e)},handleDialogConfirm:function(){var t=this;this.$confirm("是否要确认?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){var e,a;t.isEdit?(e=t.flashPromotion.id,a=t.flashPromotion,Object(s.a)({url:"/flash/update/"+e,method:"post",data:a})).then(function(e){t.$message({message:"修改成功！",type:"success"}),t.dialogVisible=!1,t.getList()}):function(t){return Object(s.a)({url:"/flash/create",method:"post",data:t})}(t.flashPromotion).then(function(e){t.$message({message:"添加成功！",type:"success"}),t.dialogVisible=!1,t.getList()})})},handleSelectSession:function(t,e){this.$router.push({path:"/sms/selectSession",query:{flashPromotionId:e.id}})},getList:function(){var t,e=this;this.listLoading=!0,(t=this.listQuery,Object(s.a)({url:"/flash/list",method:"get",params:t})).then(function(t){e.listLoading=!1,e.list=t.data.list,e.total=t.data.total})}}},c={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container"},[a("el-card",{staticClass:"filter-container",attrs:{shadow:"never"}},[a("div",[a("i",{staticClass:"el-icon-search"}),t._v(" "),a("span",[t._v("筛选搜索")]),t._v(" "),a("el-button",{staticStyle:{float:"right"},attrs:{type:"primary",size:"small"},on:{click:function(e){return t.handleSearchList()}}},[t._v("\n        查询搜索\n      ")]),t._v(" "),a("el-button",{staticStyle:{float:"right","margin-right":"15px"},attrs:{size:"small"},on:{click:function(e){return t.handleResetSearch()}}},[t._v("\n        重置\n      ")])],1),t._v(" "),a("div",{staticStyle:{"margin-top":"15px"}},[a("el-form",{attrs:{inline:!0,model:t.listQuery,size:"small","label-width":"140px"}},[a("el-form-item",{attrs:{label:"活动名称："}},[a("el-input",{staticClass:"input-width",attrs:{placeholder:"活动名称",clearable:""},model:{value:t.listQuery.keyword,callback:function(e){t.$set(t.listQuery,"keyword",e)},expression:"listQuery.keyword"}})],1)],1)],1)]),t._v(" "),a("el-card",{staticClass:"operate-container",attrs:{shadow:"never"}},[a("i",{staticClass:"el-icon-tickets"}),t._v(" "),a("span",[t._v("数据列表")]),t._v(" "),a("el-button",{staticClass:"btn-add",staticStyle:{"margin-left":"20px"},attrs:{size:"mini"},on:{click:function(e){return t.handleAdd()}}},[t._v("添加活动")]),t._v(" "),a("el-button",{staticClass:"btn-add",attrs:{size:"mini"},on:{click:function(e){return t.handleShowSessionList()}}},[t._v("秒杀时间段列表")])],1),t._v(" "),a("div",{staticClass:"table-container"},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],ref:"flashTable",staticStyle:{width:"100%"},attrs:{data:t.list,border:""}},[a("el-table-column",{attrs:{type:"selection",width:"60",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{label:"编号",width:"100",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.id))]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"活动标题",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.title))]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"活动状态",width:"140",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(t._f("formatActiveStatus")(e.row)))]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"开始时间",width:"140",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(t._f("formatDate")(e.row.startDate)))]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"结束时间",width:"140",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(t._f("formatDate")(e.row.endDate)))]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"上线/下线",width:"200",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-switch",{attrs:{"active-value":1,"inactive-value":0},on:{change:function(a){return t.handleStatusChange(e.$index,e.row)}},model:{value:e.row.status,callback:function(a){t.$set(e.row,"status",a)},expression:"scope.row.status"}})]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"操作",width:"180",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{size:"mini",type:"text"},on:{click:function(a){return t.handleSelectSession(e.$index,e.row)}}},[t._v("设置商品\n          ")]),t._v(" "),a("el-button",{attrs:{size:"mini",type:"text"},on:{click:function(a){return t.handleUpdate(e.$index,e.row)}}},[t._v("\n            编辑\n          ")]),t._v(" "),a("el-button",{attrs:{size:"mini",type:"text"},on:{click:function(a){return t.handleDelete(e.$index,e.row)}}},[t._v("删除\n          ")])]}}])})],1)],1),t._v(" "),a("div",{staticClass:"pagination-container"},[a("el-pagination",{attrs:{background:"",layout:"total, sizes,prev, pager, next,jumper","current-page":t.listQuery.pageNum,"page-size":t.listQuery.pageSize,"page-sizes":[5,10,15],total:t.total},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange,"update:currentPage":function(e){return t.$set(t.listQuery,"pageNum",e)},"update:current-page":function(e){return t.$set(t.listQuery,"pageNum",e)}}})],1),t._v(" "),a("el-dialog",{attrs:{title:"添加活动",visible:t.dialogVisible,width:"40%"},on:{"update:visible":function(e){t.dialogVisible=e}}},[a("el-form",{ref:"flashPromotionForm",attrs:{model:t.flashPromotion,"label-width":"150px",size:"small"}},[a("el-form-item",{attrs:{label:"活动标题："}},[a("el-input",{staticStyle:{width:"250px"},model:{value:t.flashPromotion.title,callback:function(e){t.$set(t.flashPromotion,"title",e)},expression:"flashPromotion.title"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"开始时间："}},[a("el-date-picker",{attrs:{type:"date",placeholder:"请选择时间"},model:{value:t.flashPromotion.startDate,callback:function(e){t.$set(t.flashPromotion,"startDate",e)},expression:"flashPromotion.startDate"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"结束时间："}},[a("el-date-picker",{attrs:{type:"date",placeholder:"请选择时间"},model:{value:t.flashPromotion.endDate,callback:function(e){t.$set(t.flashPromotion,"endDate",e)},expression:"flashPromotion.endDate"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"上线/下线"}},[a("el-radio-group",{model:{value:t.flashPromotion.status,callback:function(e){t.$set(t.flashPromotion,"status",e)},expression:"flashPromotion.status"}},[a("el-radio",{attrs:{label:1}},[t._v("上线")]),t._v(" "),a("el-radio",{attrs:{label:0}},[t._v("下线")])],1)],1)],1),t._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{size:"small"},on:{click:function(e){t.dialogVisible=!1}}},[t._v("取 消")]),t._v(" "),a("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(e){return t.handleDialogConfirm()}}},[t._v("确 定")])],1)],1)],1)},staticRenderFns:[]};var d=a("VU/8")(u,c,!1,function(t){a("PdQp")},null,null);e.default=d.exports},PdQp:function(t,e){}});
//# sourceMappingURL=27.4c4b9507871ae506567e.js.map