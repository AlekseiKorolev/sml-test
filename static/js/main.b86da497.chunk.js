(this["webpackJsonpsml-test"]=this["webpackJsonpsml-test"]||[]).push([[0],{103:function(e,t,a){e.exports=a(216)},108:function(e,t,a){},112:function(e,t,a){},113:function(e,t,a){},114:function(e,t,a){},176:function(e,t,a){},177:function(e,t,a){},178:function(e,t,a){},216:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(9),l=a.n(c),i=(a(108),a(16)),s=a(7),o=a(227),m=(a(112),a(113),a(224)),u=a(99),d=(a(114),a(225)),p=a(226),f=a(221),v=[{name:"\u041e\u043a\u043b\u0430\u0434 \u0437\u0430 \u043c\u0435\u0441\u044f\u0446",id:"month"},{name:"\u041c\u0420\u041e\u0422",id:"min"},{name:"\u041e\u043f\u043b\u0430\u0442\u0430 \u0437\u0430 \u0434\u0435\u043d\u044c",id:"day"},{name:"\u041e\u043f\u043b\u0430\u0442\u0430 \u0437\u0430 \u0447\u0430\u0441",id:"hour"}],E=function(e){var t=e.checked,a=e.tip;return v.map((function(n){return r.a.createElement("li",{key:"radio".concat(n.id)},r.a.createElement("span",{className:"dot-container"},r.a.createElement("span",{className:n.id===t?"dot":"disabled"})),r.a.createElement("input",Object.assign({className:"form-chack-input",id:n.id,type:"radio"},e.input,{value:n.id,checked:t===n.id})),r.a.createElement("label",{className:"form-check-label",htmlFor:n.id},n.name),"min"===n.id?r.a.createElement("div",{ref:e.target,className:"tip-container",onClick:e.handleClick},r.a.createElement("span",{className:"tip"},a?"x":"i")):null)}))},h=function(e){var t=Object(n.useState)(!1),a=Object(u.a)(t,2),c=a[0],l=a[1],i=Object(n.useRef)(null),s=e.checked;return r.a.createElement("ul",{className:"list-unstyled"},r.a.createElement(d.a,{name:"type",checked:s,component:E,target:i,tip:c,handleClick:function(){return l(!c)}}),r.a.createElement(p.a,{target:i.current,show:c,placement:"bottom-start"},(function(e){return r.a.createElement(f.a,Object.assign({id:"tip"},e),"\u041c\u0420\u041e\u0422 - \u043c\u0438\u043d\u0438\u043c\u0430\u043b\u044c\u043d\u044b\u0439 \u0440\u0430\u0437\u043c\u0435\u0440 \u043e\u043f\u043b\u0430\u0442\u044b \u0442\u0440\u0443\u0434\u0430. \u0420\u0430\u0437\u043d\u044b\u0439 \u0434\u043b\u044f \u0440\u0430\u0437\u043d\u044b\u0445 \u0440\u0435\u0433\u0438\u043e\u043d\u043e\u0432.")})))},g=(a(176),function(e){return r.a.createElement("label",{className:"switch"},r.a.createElement("input",Object.assign({},e.input,{type:"checkbox",defaultChecked:!0})),r.a.createElement("span",{className:"slider"}))}),b=function(e){var t=e.tax;return r.a.createElement("div",{className:"tax-container"},r.a.createElement("div",{className:t?"gray":"black"},"\u0423\u043a\u0430\u0437\u0430\u0442\u044c \u0441 \u041d\u0414\u0424\u041b"),r.a.createElement(d.a,{name:"tax",component:g}),r.a.createElement("div",{className:t?"black":"gray"},"\u0411\u0435\u0437 \u041d\u0414\u0424\u041b"))},y=(a(177),function(e,t,a){var n=e.split("").filter((function(e){return" "!==e}));if(t){var r=parseInt(n.join(""));if(a){var c=Math.round(r/.87);"tax"===t?n=(c-r).toString().split(""):"total"===t&&(n=c.toString().split(""))}else{var l=Math.round(.13*r);"tax"===t?n=l.toString().split(""):"amount"===t&&(n=(r-l).toString().split(""))}}n.reverse();for(var i=0,s=0;i<n.length;)3===s&&i!==n.length?(n.splice(i,0," "),s=0):s++,i++;return n.reverse(),n.join("")}),N=function(e){return r.a.createElement("input",Object.assign({},e.input,{value:y(e.input.value),className:"form-control",type:"text"}))},k=function(e){if(!e)return!1;var t=e.split(" ").join("");return!!/^\d+$/.test(t)},x=function(e){var t=e.type;return r.a.createElement("div",{className:"min"===t?"amount-container hidden":"amount-container"},r.a.createElement(d.a,{name:"amount",component:N,validate:k}),r.a.createElement("span",{className:"currency-sign"},"\u20bd ","hour"===t?" \u0432 \u0447\u0430\u0441":"day"===t?" \u0432 \u0434\u0435\u043d\u044c":""))},j=(a(178),a(222)),O=function(e){var t=e.value,a=e.tax;return r.a.createElement(j.a,null,r.a.createElement("div",{className:"info-container"},r.a.createElement("div",null,y(t,"amount",a)," \u20bd",r.a.createElement("span",{className:"font-regular"}," ","\u0441\u043e\u0442\u0440\u0443\u0434\u043d\u0438\u043a \u0431\u0443\u0434\u0435\u0442 \u043f\u043e\u043b\u0443\u0447\u0430\u0442\u044c \u043d\u0430 \u0440\u0443\u043a\u0438")),r.a.createElement("div",null,y(t,"tax",a)," \u20bd",r.a.createElement("span",{className:"font-regular"}," \u041d\u0414\u0424\u041b, 13% \u043e\u0442 \u043e\u043a\u043b\u0430\u0434\u0430")),r.a.createElement("div",null,y(t,"total",a)," \u20bd",r.a.createElement("span",{className:"font-regular"}," \u0437\u0430 \u0441\u043e\u0442\u0440\u0443\u0434\u043d\u0438\u043a\u0430 \u0432 \u043c\u0435\u0441\u044f\u0446"))))},w=a(223),S=Object(i.b)((function(e){return{state:e.form.payment}}))((function(e){var t=e.state&&e.state.values&&e.state.values.amount||"",a=!e.state||!e.state.values||void 0===e.state.values.tax||e.state.values.tax,n=e.state&&e.state.values&&e.state.values.type?e.state.values.type:"month",c=e.valid;return r.a.createElement(w.a,null,r.a.createElement(j.a,null,"\u0421\u0443\u043c\u043c\u0430"),r.a.createElement(j.a,null,r.a.createElement("form",null,r.a.createElement(h,{checked:n}),r.a.createElement(b,{tax:a}),r.a.createElement(x,{type:n}))),"month"!==n||c||0===t.length?r.a.createElement("div",{className:"instead-of-info"}):r.a.createElement(O,{value:t,type:n,tax:a}))})),C=Object(m.a)({form:"payment"})(S),M=Object(s.b)({form:o.a}),B=Object(s.c)(M);var I=function(){return r.a.createElement(i.a,{store:B},r.a.createElement(C,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(I,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[103,1,2]]]);
//# sourceMappingURL=main.b86da497.chunk.js.map