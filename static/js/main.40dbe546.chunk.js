(this["webpackJsonpsml-test"]=this["webpackJsonpsml-test"]||[]).push([[0],{107:function(e,t,a){e.exports=a(220)},112:function(e,t,a){},176:function(e,t,a){},177:function(e,t,a){},178:function(e,t,a){},180:function(e,t,a){},181:function(e,t,a){},182:function(e,t,a){},220:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(9),c=a.n(r),o=(a(112),a(17)),i=a(7),u=a(96),m=a(230),s=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||i.d,d=[u.a],v=Object(i.c)({form:m.a}),f=Object(i.e)(v,{},Object(i.d)(i.a.apply(void 0,d),s())),p=(a(176),a(177),a(228)),E=a(101),h=(a(178),a(229)),g=a(225),y=a(231),b=a(100),N=[{name:"\u041e\u043a\u043b\u0430\u0434 \u0437\u0430 \u043c\u0435\u0441\u044f\u0446",id:"month"},{name:"\u041c\u0420\u041e\u0422",id:"min"},{name:"\u041e\u043f\u043b\u0430\u0442\u0430 \u0437\u0430 \u0434\u0435\u043d\u044c",id:"day"},{name:"\u041e\u043f\u043b\u0430\u0442\u0430 \u0437\u0430 \u0447\u0430\u0441",id:"hour"}],k=function(e){return l.a.createElement(g.a,Object.assign({id:"tip"},e),"\u041c\u0420\u041e\u0422 - \u043c\u0438\u043d\u0438\u043c\u0430\u043b\u044c\u043d\u044b\u0439 \u0440\u0430\u0437\u043c\u0435\u0440 \u043e\u043f\u043b\u0430\u0442\u044b \u0442\u0440\u0443\u0434\u0430. \u0420\u0430\u0437\u043d\u044b\u0439 \u0434\u043b\u044f \u0440\u0430\u0437\u043d\u044b\u0445 \u0440\u0435\u0433\u0438\u043e\u043d\u043e\u0432.")},O=function(e){var t=e.checked,a=e.tip,n=e.input,r=e.target,c=e.handleClick;return N.map((function(e){return l.a.createElement("li",{key:"radio".concat(e.id)},l.a.createElement("label",{className:"form-check-label",htmlFor:e.id},l.a.createElement("span",{className:"dot-container"},l.a.createElement("span",{className:e.id===t?"dot":"disabled"})),l.a.createElement("input",Object.assign({className:"form-chack-input",id:e.id,type:"radio"},n,{value:e.id,checked:t===e.id})),e.name),"min"===e.id?l.a.createElement(y.a,{placement:"bottom-start",delay:{show:50,hide:50},overlay:k},l.a.createElement("div",{ref:r,className:"tip-container",onClick:c},l.a.createElement("span",{className:"tip"},a?"x":"i"))):null)}))},j=function(e){var t=e.checked,a=Object(n.useState)(!1),r=Object(E.a)(a,2),c=r[0],o=r[1],i=Object(n.useRef)(null);return l.a.createElement("ul",{className:"list-unstyled"},l.a.createElement(h.a,{name:"type",checked:t,component:O,target:i,tip:c,handleClick:function(){return o(!c)}}),l.a.createElement(b.a,{target:i.current,show:c,placement:"bottom-start"},k))},x=(a(180),function(e){return l.a.createElement("label",{className:"switch"},l.a.createElement("input",Object.assign({},e.input,{type:"checkbox",defaultChecked:!0})),l.a.createElement("span",{className:"slider"}))}),w=function(e){var t=e.tax;return l.a.createElement("div",{className:"tax-container"},l.a.createElement("div",{className:t?"gray":"black"},"\u0423\u043a\u0430\u0437\u0430\u0442\u044c \u0441 \u041d\u0414\u0424\u041b"),l.a.createElement(h.a,{name:"tax",component:x}),l.a.createElement("div",{className:t?"black":"gray"},"\u0411\u0435\u0437 \u041d\u0414\u0424\u041b"))},S=(a(181),function(e){for(var t=e.split("").reverse(),a=0,n=0;a<t.length;)3===n&&a!==t.length?(t.splice(a,0," "),n=0):n++,a++;return t.reverse(),t.join("")}),_=function(e){if(!e)return"";var t=e.split("").filter((function(e){return"0123456789".includes(e)})).filter((function(e,t){return t<12})).join("");return S(parseInt(t)>999e9?999e9.toString():t)},C=function(e){return l.a.createElement("input",Object.assign({},e.input,{value:_(e.input.value),className:"form-control",type:"text"}))},I=function(e){var t=e.type;return l.a.createElement("div",{className:"amount-container"},l.a.createElement(h.a,{name:"amount",component:C}),l.a.createElement("span",{className:"currency-sign"},"\u20bd ","hour"===t?" \u0432 \u0447\u0430\u0441":"day"===t?" \u0432 \u0434\u0435\u043d\u044c":""))},M=(a(182),a(226)),T=function(e){var t=e.value,a=e.withTax,n=function(e,t){var a=e.split("").filter((function(e){return" "!==e})),n={amount:"",tax:"",total:""},l=parseInt(a.join("")),r=0;t?(r=Math.round(l/.87),n.amount=l.toString(),n.tax=(r-l).toString(),n.total=r.toString()):(r=Math.round(.13*l),n.total=l.toString(),n.tax=r.toString(),n.amount=(l-r).toString());for(var c=0,o=Object.keys(n);c<o.length;c++){var i=o[c];n[i]=S(n[i])}return n}(_(t),a);return l.a.createElement(M.a,null,l.a.createElement("div",{className:"info-container"},l.a.createElement("div",null,n.amount," \u20bd",l.a.createElement("span",{className:"font-regular"}," ","\u0441\u043e\u0442\u0440\u0443\u0434\u043d\u0438\u043a \u0431\u0443\u0434\u0435\u0442 \u043f\u043e\u043b\u0443\u0447\u0430\u0442\u044c \u043d\u0430 \u0440\u0443\u043a\u0438")),l.a.createElement("div",null,n.tax," \u20bd",l.a.createElement("span",{className:"font-regular"}," \u041d\u0414\u0424\u041b, 13% \u043e\u0442 \u043e\u043a\u043b\u0430\u0434\u0430")),l.a.createElement("div",null,n.total," \u20bd",l.a.createElement("span",{className:"font-regular"}," \u0437\u0430 \u0441\u043e\u0442\u0440\u0443\u0434\u043d\u0438\u043a\u0430 \u0432 \u043c\u0435\u0441\u044f\u0446"))))},B=a(227),D=Object(p.a)({form:"payment"})((function(e){var t,a,n,r,c,i,u,m,s,d,v,f,p=Object(o.c)((function(e){return e})),E=(null===p||void 0===p||null===(t=p.form)||void 0===t||null===(a=t.payment)||void 0===a||null===(n=a.values)||void 0===n?void 0:n.amount)||"",h=void 0===(null===p||void 0===p||null===(r=p.form)||void 0===r||null===(c=r.payment)||void 0===c||null===(i=c.values)||void 0===i?void 0:i.tax)||(null===p||void 0===p||null===(u=p.form)||void 0===u||null===(m=u.payment)||void 0===m||null===(s=m.values)||void 0===s?void 0:s.tax),g=(null===p||void 0===p||null===(d=p.form)||void 0===d||null===(v=d.payment)||void 0===v||null===(f=v.values)||void 0===f?void 0:f.type)||"month";return l.a.createElement(B.a,null,l.a.createElement(M.a,null,"\u0421\u0443\u043c\u043c\u0430"),l.a.createElement(M.a,null,l.a.createElement("form",null,l.a.createElement(j,{checked:g}),"min"!==g&&l.a.createElement(w,{tax:h}),"min"!==g&&l.a.createElement(I,{type:g}))),"month"===g&&0!==E.length?l.a.createElement(T,{value:E,withTax:h}):l.a.createElement("div",{className:"instead-of-info"}))}));var J=function(){return l.a.createElement(o.a,{store:f},l.a.createElement(D,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(J,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[107,1,2]]]);
//# sourceMappingURL=main.40dbe546.chunk.js.map