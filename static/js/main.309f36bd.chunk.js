(this.webpackJsonpmydemo=this.webpackJsonpmydemo||[]).push([[0],{14:function(e,a,t){},23:function(e,a,t){e.exports=t(34)},28:function(e,a,t){},34:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(16),o=t.n(l),i=(t(28),t(14),t(8)),c=t(17),m=t(18),s=t(22),u=t(21),E=function(e){Object(s.a)(t,e);var a=Object(u.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(m.a)(t,[{key:"render",value:function(){var e=this.props.location.data.id,a=i.profiles[e];return r.a.createElement("section",{className:"parent"},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-top"},r.a.createElement("h2",null,a.basicInformation.name),r.a.createElement("em",null,a.basicInformation.role)),r.a.createElement("div",{className:"card-bottom"},r.a.createElement("a",{href:"mailto:"+a.basicInformation.email},a.basicInformation.email),r.a.createElement("br",null),r.a.createElement("a",{href:"tel:"+a.basicInformation.mobile},a.basicInformation.mobile),r.a.createElement("br",null))),r.a.createElement("div",{className:"card2"},r.a.createElement("div",{className:"card-bottom"},r.a.createElement("h2",null," Educational Qualifications")),r.a.createElement("div",{className:"card-top"},a.Education.map((function(e,a){return r.a.createElement("ul",null,r.a.createElement("li",null,e.Degree),r.a.createElement("li",null,e.institution))})))))}}]),t}(r.a.Component),f=t(9),d=t(5);var b=function(){var e=i.profiles;return r.a.createElement("section",{className:"parent"},e.map((function(e,a){return r.a.createElement("div",{className:"card",key:a},r.a.createElement("div",{className:"card-top"},r.a.createElement("h2",null," ",e.basicInformation.name),r.a.createElement("br",null),r.a.createElement("h5",null,r.a.createElement("em",null,e.basicInformation.role))),r.a.createElement("div",{className:"card-bottom"},r.a.createElement("a",{href:"mailto:"+e.basicInformation.email},e.basicInformation.email),r.a.createElement("br",null),r.a.createElement("a",{href:"tel:"+e.basicInformation.mobile},e.basicInformation.mobile),r.a.createElement("br",null),r.a.createElement(f.b,{to:{pathname:"/profile",data:{id:a}}}," ViewProfile >>")))})))},p=function(){var e=i.profiles;return r.a.createElement("section",null,r.a.createElement(f.a,null,r.a.createElement("header",{className:"header"},e.map((function(e,a){return r.a.createElement(f.b,{to:{pathname:"/profile",data:{id:a}}},"Profile"+(a+1)+" ")}))),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(d.a,{exact:!0,path:"/profile",component:E}),r.a.createElement(d.a,{exact:!0,path:"/",component:b})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(p,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e){e.exports=JSON.parse('{"profiles":[{"basicInformation":{"name":"vijay","role":"Developer","email":"vijaykumar.b@gmail.com","mobile":"+91 9542219884"},"Education":[{"Degree":"B.tech","institution":"CBIT","Percentage":"70%"},{"Degree":"Diplomo","institution":"Gov\'t Polytechnic college","Percentage":"80%"},{"Degree":"SSC","institution":"Little Angels","Percentage":"80%"}]},{"basicInformation":{"name":"kumar","role":"Python Developer","email":"vijaykumar.b@apssdc.in","mobile":"+91 8328113925"},"Education":[{"Degree":"B.tech","institution":"CBIT","Percentage":"70%"},{"Degree":"Diplomo","institution":"Gov\'t Polytechnic college","Percentage":"80%"},{"Degree":"SSC","institution":"Little Angels","Percentage":"80%"}]}]}')}},[[23,1,2]]]);
//# sourceMappingURL=main.309f36bd.chunk.js.map