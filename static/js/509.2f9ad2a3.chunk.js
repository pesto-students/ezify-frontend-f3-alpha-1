"use strict";(self.webpackChunkezzify_pesto_frontend=self.webpackChunkezzify_pesto_frontend||[]).push([[509],{7653:function(e,a,t){t.d(a,{Z:function(){return w}});var n=t(2791),s=t(7462),r=t(3366),c=t(1694),i=t.n(c),d=t(162),l=t(2785),o=["active","disabled","className","style","activeLabel","children"],m=["children"],u=n.forwardRef((function(e,a){var t=e.active,c=e.disabled,d=e.className,m=e.style,u=e.activeLabel,h=e.children,x=(0,r.Z)(e,o),f=t||c?"span":l.Z;return n.createElement("li",{ref:a,style:m,className:i()(d,"page-item",{active:t,disabled:c})},n.createElement(f,(0,s.Z)({className:"page-link",disabled:c},x),h,t&&u&&n.createElement("span",{className:"sr-only"},u)))}));u.defaultProps={active:!1,disabled:!1,activeLabel:"(current)"},u.displayName="PageItem";var h=u;function x(e,a,t){function s(e){var s=e.children,c=(0,r.Z)(e,m);return n.createElement(u,c,n.createElement("span",{"aria-hidden":"true"},s||a),n.createElement("span",{className:"sr-only"},t))}return void 0===t&&(t=e),s.displayName=e,s}var f=x("First","\xab"),p=x("Prev","\u2039","Previous"),j=x("Ellipsis","\u2026","More"),v=x("Next","\u203a"),g=x("Last","\xbb"),b=["bsPrefix","className","children","size"],N=n.forwardRef((function(e,a){var t=e.bsPrefix,c=e.className,l=e.children,o=e.size,m=(0,r.Z)(e,b),u=(0,d.vE)(t,"pagination");return n.createElement("ul",(0,s.Z)({ref:a},m,{className:i()(c,u,o&&u+"-"+o)}),l)}));N.First=f,N.Prev=p,N.Ellipsis=j,N.Item=h,N.Next=v,N.Last=g;var _=N,y=t(184),w=function(e){var a=e.records,t=e.pageSize,n=e.page,s=e.setPage;return(0,y.jsx)(_,{className:"customPagination",children:a.map((function(e,a){if(a%t===0)return(0,y.jsx)(_.Item,{active:a/t+1===n,onClick:function(){return s(0===a?1:a/t+1)},children:0===a?1:a/t+1},a+1)}))})}},672:function(e,a,t){t.d(a,{Z:function(){return o}});var n=t(885),s=t(2791),r=t(8545),c=t(3117),i=t(7653),d=t(9612),l=t(184),o=function(e){var a=e.tableData,t=(0,s.useState)(1),o=(0,n.Z)(t,2),m=o[0],u=o[1],h=(0,s.useState)(10),x=(0,n.Z)(h,1)[0];return(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)("div",{className:"container",children:[(0,l.jsx)("div",{className:"row py-4",children:(0,l.jsx)("div",{className:"col-12 custom-dynamic-page__heading-text",children:a.tableTitle})}),a.filters.length>0&&(0,l.jsx)("div",{className:"row",children:a.filters.map((function(e,a){return(0,l.jsx)("div",{className:"col-3",children:(0,l.jsxs)("div",{className:"custom-dynamic-page__filter-box ".concat(e.active?"custom-dynamic-page__filter-box_filter-active":""),children:[(0,l.jsx)("div",{className:"d-flex align-items-center justify-content-center custom-dynamic-page__filter-box_icon",children:(0,l.jsx)("img",{src:r,alt:"Service Icon"})}),(0,l.jsxs)("div",{className:"mr-3",children:[(0,l.jsx)("div",{className:"d-flex align-items-center justify-content-between",children:(0,l.jsx)("div",{className:"custom-dynamic-page__filter-box_title",children:e.title})}),(0,l.jsx)("div",{className:"d-flex align-items-center justify-content-start",children:(0,l.jsx)("span",{className:"custom-dynamic-page__filter-box_value",children:e.value})})]})]})},a)}))}),(0,l.jsx)("div",{className:"custom-dynamic-page__custom-table row my-3",children:(0,l.jsxs)("table",{className:"table custom-dynamic-page__custom-table_table-margin mt-0 mb-0",children:[(0,l.jsx)("thead",{children:(0,l.jsx)("tr",{children:a.records.headers.map((function(e,a){return(0,l.jsx)("th",{className:"custom-dynamic-page__custom-table_header-elements",children:e},a)}))})}),(0,l.jsxs)("tbody",{children:[0===a.records.data.length&&(0,l.jsx)("tr",{children:(0,l.jsx)("td",{colSpan:a.records.headers.length,className:"text-center",children:"No Records Found"})}),"orders"===a.tableName&&(0,l.jsx)(l.Fragment,{children:a.records.data.slice((m-1)*x,(m-1)*x+x).map((function(e,a){return(0,l.jsxs)("tr",{className:"".concat(a%2!==0?"even-row":null),children:[(0,l.jsx)("td",{children:a+1}),(0,l.jsx)("td",{children:e.name}),(0,l.jsx)("td",{children:e.service}),(0,l.jsx)("td",{children:(0,l.jsxs)("div",{className:"d-flex align-items-center justify-content-start booking-page__custom-table__icons",children:[(0,l.jsx)("img",{src:c,alt:"rupeeIcon",className:"mr-2"}),e.amount]})}),(0,l.jsx)("td",{children:e.date})]},a)}))}),"vendors"===a.tableName&&(0,l.jsx)(l.Fragment,{children:a.records.data.slice((m-1)*x,(m-1)*x+x).map((function(e,t){return(0,l.jsxs)("tr",{className:"".concat(t%2!==0?"even-row":null),children:[(0,l.jsx)("td",{children:t+1}),(0,l.jsx)("td",{children:e.name}),(0,l.jsx)("td",{children:e.email}),(0,l.jsxs)("td",{children:["pending"===e.status&&(0,l.jsx)("span",{className:"badge badge-warning",children:"Pending"}),"approved"===e.status&&(0,l.jsx)("span",{className:"badge badge-success",children:"Approved"}),"rejected"===e.status&&(0,l.jsx)("span",{className:"badge badge-danger",children:"Rejected"})]}),(0,l.jsx)("td",{children:e.date}),(0,l.jsx)("td",{children:e.updatedDate}),(0,l.jsx)("td",{children:(0,l.jsx)(d.ZP,{options:a.actionsOptions,onChange:function(t){return a.onActionoptionChange(e.id,t.value)}})})]},t)}))}),"vendorsBookings"===a.tableName&&(0,l.jsx)(l.Fragment,{children:a.records.data.slice((m-1)*x,(m-1)*x+x).map((function(e,t){return(0,l.jsxs)("tr",{className:"".concat(t%2!==0?"even-row":null),children:[(0,l.jsx)("td",{children:t+1}),(0,l.jsx)("td",{children:e.name}),(0,l.jsx)("td",{children:e.place}),(0,l.jsx)("td",{children:e.service}),(0,l.jsx)("td",{children:e.date}),(0,l.jsxs)("td",{children:["received"===e.status&&(0,l.jsx)("span",{className:"badge badge-info",children:"Received"}),"completed"===e.status&&(0,l.jsx)("span",{className:"badge badge-success",children:"Completed"}),"active"===e.status&&(0,l.jsx)("span",{className:"badge badge-warning",children:"Active"})]}),(0,l.jsx)("td",{children:(0,l.jsx)(d.ZP,{options:a.actionsOptions,onChange:function(t){return a.onActionoptionChange(e.id,t.value)}})})]},t)}))}),"vendorsEarnings"===a.tableName&&(0,l.jsx)(l.Fragment,{children:a.records.data.slice((m-1)*x,(m-1)*x+x).map((function(e,a){return(0,l.jsxs)("tr",{className:"".concat(a%2!==0?"even-row":null),children:[(0,l.jsx)("td",{children:a+1}),(0,l.jsx)("td",{children:e.name}),(0,l.jsx)("td",{children:e.place}),(0,l.jsx)("td",{children:e.service}),(0,l.jsx)("td",{children:e.date}),(0,l.jsx)("td",{children:(0,l.jsxs)("div",{className:"d-flex align-items-center justify-content-start booking-page__custom-table__icons",children:[(0,l.jsx)("img",{src:c,alt:"rupeeIcon",className:"mr-2"}),e.amount]})})]},a)}))})]})]})}),(0,l.jsx)("div",{className:"d-flex align-items-center justify-content-end mt-4",children:(0,l.jsx)(i.Z,{records:a.records.data,pageSize:x,page:m,setPage:u})})]})})}},9509:function(e,a,t){t.r(a),t.d(a,{default:function(){return v}});var n=t(5861),s=t(885),r=t(7757),c=t.n(r),i=t(2791),d=t(364),l=t(6916),o=t(672),m=t(4872),u=t(7391),h=t(6606),x=t(5335),f=t(184),p=t(2426),j=(0,l.zB)({userToken:m.r}),v=(0,d.$j)(j)((function(e){var a=e.userToken,t=(0,i.useContext)(u.D),r=(0,i.useState)({tableName:"orders",tableTitle:"My Orders",filters:[],records:{headers:["No.","Name","Service","Amount","Date"],data:[]}}),d=(0,s.Z)(r,2),l=d[0],m=d[1],j=function(){var e=(0,n.Z)(c().mark((function e(){var a,t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,h.e)(v);case 2:a=e.sent,Array.isArray(a)&&a.length>0&&(t=[],a.forEach((function(e,a){t.push({id:e._id,name:"".concat(e.vendor_info[0].firstName," ").concat(e.vendor_info[0].lastName),service:"".concat(e.service_info[0].name),amount:"".concat(e.baseprice),date:"".concat(p(e.createdAt).format("Do MMM, YYYY hh:mm A"))})})),m({tableName:"orders",tableTitle:"My Orders",filters:[],records:{headers:["No.","Name","Service","Amount","Date"],data:t}}));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),v=function(){var e=(0,n.Z)(c().mark((function e(){var n,s;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={Authorization:"Bearer ".concat(a)},e.next=3,t.getData(x.Y.GET_ALL_ORDERS,{headers:n});case 3:return s=e.sent,e.abrupt("return",s);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,i.useEffect)((function(){j()}),[]),(0,f.jsx)(f.Fragment,{children:(0,f.jsx)(o.Z,{tableData:l})})}))},8545:function(e,a,t){e.exports=t.p+"static/media/serviceIconGreen.b3e42b634102c5e847cb.webp"},3117:function(e,a,t){e.exports=t.p+"static/media/rupee.bc6defe8c0aee382f52f.webp"}}]);
//# sourceMappingURL=509.2f9ad2a3.chunk.js.map