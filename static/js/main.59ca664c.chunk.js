(this["webpackJsonpall-clear"]=this["webpackJsonpall-clear"]||[]).push([[0],{50:function(e,t,n){},51:function(e,t,n){},53:function(e,t,n){},54:function(e,t,n){},55:function(e,t,n){},56:function(e,t,n){"use strict";n.r(t);var c=n(0),i=n.n(c),a=n(31),r=n.n(a),o=n(7),s=n(13),u=n(5),l=n(18),d="https://checkpoint--api.herokuapp.com",j="users",h="app_user_id",b=n(1),f=function(){var e=Object(c.useState)({email:"jisie@jisie.com"}),t=Object(u.a)(e,2),n=t[0],i=t[1],a=Object(o.f)(),r=function(){return fetch("".concat(d,"/").concat(j,"?email=").concat(n.email)).then((function(e){return e.json()})).then((function(e){return!!e.length&&e[0]}))};r().then((function(e){e&&(sessionStorage.setItem(h,e.id),a.push("/"))}));return Object(b.jsxs)("main",{className:"container--login",children:[Object(b.jsx)("section",{children:Object(b.jsxs)("form",{className:"form--login",onSubmit:function(e){e.preventDefault(),r().then((function(e){e?(sessionStorage.setItem(h,e.id),a.push("/")):window.alert("Invalid email address")}))},children:[Object(b.jsx)("h1",{children:"Checkpoint"}),Object(b.jsx)("h2",{children:"Please sign in"}),Object(b.jsxs)("fieldset",{children:[Object(b.jsx)("label",{htmlFor:"inputEmail",children:" Email address "}),Object(b.jsx)("input",{type:"email",id:"email",className:"form-control",placeholder:"Email address",required:!0,autoFocus:!0,value:n.email,onChange:function(e){var t=Object(s.a)({},n);t[e.target.id]=e.target.value,i(t)}})]}),Object(b.jsx)("fieldset",{children:Object(b.jsx)("button",{type:"submit",children:"Sign in"})})]})}),Object(b.jsx)("section",{className:"link--register",children:Object(b.jsx)(l.b,{to:"/register",children:"Register for an account"})})]})},O=function(){var e=Object(c.useState)({firstName:"",lastName:"",email:""}),t=Object(u.a)(e,2),n=t[0],i=t[1],a=Object(c.useState)(!1),r=Object(u.a)(a,2),l=r[0],f=r[1],O=Object(o.f)(),m=function(e){var t=Object(s.a)({},n);t[e.target.id]=e.target.value,i(t)};return Object(b.jsxs)("main",{style:{textAlign:"center"},children:[Object(b.jsxs)("dialog",{className:"dialog dialog--password",open:l,children:[Object(b.jsx)("div",{children:"Account with that email address already exists"}),Object(b.jsx)("button",{className:"button--close",onClick:function(e){return f(!1)},children:"Close"})]}),Object(b.jsxs)("form",{className:"form--login",onSubmit:function(e){e.preventDefault(),fetch("".concat(d,"/").concat(j,"?email=").concat(n.email)).then((function(e){return e.json()})).then((function(e){return!!e.length})).then((function(e){e?f(!0):fetch("".concat(d,"/").concat(j),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:n.email,firstName:n.firstName,lastName:n.lastName})}).then((function(e){return e.json()})).then((function(e){e.hasOwnProperty("id")&&(sessionStorage.setItem(h,e.id),O.push("/"))}))}))},children:[Object(b.jsx)("h1",{className:"h3 mb-3 font-weight-normal",children:"Please Register for Application Name"}),Object(b.jsxs)("fieldset",{children:[Object(b.jsx)("label",{htmlFor:"firstName",children:" First Name "}),Object(b.jsx)("input",{type:"text",name:"firstName",id:"firstName",className:"form-control",placeholder:"First name",required:!0,autoFocus:!0,value:n.firstName,onChange:m})]}),Object(b.jsxs)("fieldset",{children:[Object(b.jsx)("label",{htmlFor:"lastName",children:" Last Name "}),Object(b.jsx)("input",{type:"text",name:"lastName",id:"lastName",className:"form-control",placeholder:"Last name",required:!0,value:n.lastName,onChange:m})]}),Object(b.jsxs)("fieldset",{children:[Object(b.jsx)("label",{htmlFor:"inputEmail",children:" Email address "}),Object(b.jsx)("input",{type:"email",name:"email",id:"email",className:"form-control",placeholder:"Email address",required:!0,value:n.email,onChange:m})]}),Object(b.jsx)("fieldset",{children:Object(b.jsx)("button",{type:"submit",children:" Sign in "})})]})]})},m=n(34),p=n(28),x=n.n(p),g=n(33),v=Object(c.createContext)(),C=function(e){var t=Object(c.useContext)(N),n=t.getLatLong,i=t.getRoutePath,a=t.newRoute;Object(c.useEffect)((function(){if(a.origin){var e=[],t=[],c=[],s=[],l=a.origin,d=a.destination;i(a.origin,a.destination).then((function(t){return e=t.map((function(e){return n(e)})),Promise.all(e)})).then((function(e){e.forEach((function(e){var t=l.split(" "),n=d.split(" "),i=t.splice(-3,1),a=Object(u.a)(i,1)[0],r=n.splice(-3,1),o=Object(u.a)(r,1)[0],s=e.items.map((function(e){return e.title})).join("");s.toLowerCase().includes("".concat(a.toLowerCase()))||s.toLowerCase().includes("".concat(o.toLowerCase()))?c.push(e.items.find((function(e){return e.title.toLowerCase().includes("".concat(a.toLowerCase()))||e.title.toLowerCase().includes("".concat(o.toLowerCase()))}))):c.push(" ")}))})).then(Object(g.a)(x.a.mark((function e(){var n,i,l,d,j,h;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:c.map((function(e){return" "===e?t.push(""):t.push(Object.values(e.position))})),n=0;case 2:if(!(n<t.length)){e.next=18;break}if(""!==t[n]){e.next=10;break}return i={streetName:s[n],latLong:t[n],routeId:a.id,order:n+1},o(i),e.next=8,r(50);case 8:e.next=15;break;case 10:return l=Object(u.a)(t[n],2),d=l[0],j=l[1],h={streetName:s[n],latLong:d+", "+j,routeId:a.id,order:n+1},o(h),e.next=15,r(50);case 15:n++,e.next=2;break;case 18:case"end":return e.stop()}}),e)}))))}}),[a]);var r=function(e){return new Promise((function(t){setTimeout(t,e)}))},o=function(e){return fetch("https://checkpoint--api.herokuapp.com/paths",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})};return Object(b.jsx)(v.Provider,{value:{getPathByRouteId:function(e){return fetch("https://checkpoint--api.herokuapp.com/paths?routeId=".concat(e.id)).then((function(e){return e.json()}))}},children:e.children})},N=Object(c.createContext)(),S=function(e){var t=Object(c.useState)([]),n=Object(u.a)(t,2),i=n[0],a=n[1],r=Object(c.useState)({}),o=Object(u.a)(r,2),s=o[0],l=o[1],d=Object(c.useState)({}),j=Object(u.a)(d,2),h=(j[0],j[1],function(e){return fetch("https://geocode.search.hereapi.com/v1/geocode?q=".concat(e,"&apiKey=").concat("nIMc78ZNxT61PJBF3f05uO_NMFXRX7wo1MJkyJQiNsU")).then((function(e){return e.json()}))}),f=function(e,t){return fetch("https://router.hereapi.com/v8/routes?transportMode=car&origin=".concat(Object.values(e),"&destination=").concat(Object.values(t),"&return=polyline,turnbyturnactions&apikey=").concat("nIMc78ZNxT61PJBF3f05uO_NMFXRX7wo1MJkyJQiNsU")).then((function(e){return e.json()}))},O=function(e){return fetch("https://checkpoint--api.herokuapp.com/routes",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){return e.json()})).then(l).then(p).then((function(){return Object(b.jsx)(C,{})}))},p=function(){return fetch("https://checkpoint--api.herokuapp.com/routes").then((function(e){return e.json()})).then((function(e){return a(e)}))};return Object(b.jsx)(N.Provider,{value:{getLatLong:h,getDirections:f,addNewRoute:O,getRoutes:p,routes:i,getRouteById:function(e){return fetch("https://checkpoint--api.herokuapp.com/routes/".concat(e,"?_embed=path")).then((function(e){return e.json()}))},deleteRoute:function(e){return fetch("https://checkpoint--api.herokuapp.com/routes/".concat(e),{method:"DELETE"}).then(p)},updateRoute:function(e){return fetch("https://checkpoint--api.herokuapp.com/routes/".concat(e.id),{method:"DELETE"}).then((function(){return O({name:e.name,origin:e.origin,destination:e.destination,userId:e.userId})}))},getRoutePath:function(e,t){var n={},c={};return h(e).then((function(e){return n=e.items[0].position})).then((function(){return h(t)})).then((function(e){return c=e.items[0].position})).then((function(){return f(n,c)})).then((function(t){return function(e,t){var n=e.routes[0].sections[0].turnByTurnActions.filter((function(e){return void 0!==e.nextRoad})),c=[];n.forEach((function(e){return e.nextRoad.name?c.push(e.nextRoad.name[0].value):c.push(e.nextRoad.number[0].value)}));var i=Object(m.a)(new Set(c)),a=[];if(t){var r=t.split(" ").splice(-2,1),o=Object(u.a)(r,1)[0];return i.forEach((function(e){a.push(e+" "+o)})),a}return i}(t,e)}))},newRoute:s},children:e.children})},y=Object(c.createContext)(),R=function(e){var t=Object(c.useState)({}),n=Object(u.a)(t,2),i=n[0],a=n[1],r=Object(c.useContext)(N),o=(r.getLatLong,r.getDirections,r.getRouteById,Object(c.useContext)(v).getPathByRouteId),s=function(e){return e=e.replace(/\s+/g,""),fetch("https://infinite-scrubland-76177.herokuapp.com/https://traffic.ls.hereapi.com/traffic/6.0/incidents.json?corridor=".concat(e,"20&apiKey=").concat("nIMc78ZNxT61PJBF3f05uO_NMFXRX7wo1MJkyJQiNsU")).then((function(e){if(e.ok)return console.log("got a good response",e),e.json();console.log("you don't want that response")})).then((function(e){a(e)}))};return Object(b.jsx)(y.Provider,{value:{getIncidentAndLocation:function(e){return o(e).then((function(e){var t="";return e.forEach((function(e){return""!==e.latLong?t=t+e.latLong+";":t})),s(t)}))},incidents:i},children:e.children})},k=n(16),I=n(20),F=n(57),w=(n(29),n(50),function(e){var t=e.routeObj,n=Object(c.useContext)(y),i=n.getIncidentAndLocation,a=n.incidents,r=Object(c.useContext)(N),o=r.deleteRoute,l=r.getRouteById,d=r.updateRoute,j=r.getRoutePath,h=Object(c.useState)([]),f=Object(u.a)(h,2),O=f[0],m=f[1],p=Object(c.useState)(0),x=Object(u.a)(p,2),g=x[0],v=x[1],C=Object(c.useState)(Object(b.jsx)("div",{})),S=Object(u.a)(C,2),R=S[0],w=S[1],E=Object(c.useState)(!1),T=Object(u.a)(E,2),P=T[0],L=T[1],_=Object(c.useState)({}),M=Object(u.a)(_,2),Z=M[0],J=M[1],B=Object(c.useState)(!1),D=Object(u.a)(B,2),A=D[0],q=D[1],U=Object(c.useState)([]),X=Object(u.a)(U,2),Q=X[0],H=X[1];Object(c.useEffect)((function(){var e;m(null===a||void 0===a||null===(e=a.TRAFFICITEMS)||void 0===e?void 0:e.TRAFFICITEM)}),[a]),Object(c.useEffect)((function(){w(function(){if(g===t.id)return O?Object(b.jsxs)("div",{className:"incidentMessage",children:[Object(b.jsx)("h5",{children:"Traffic Incidents"})," ",O.map((function(e){return Object(b.jsx)(I.a.Text,{children:null===e||void 0===e?void 0:e.TRAFFICITEMDESCRIPTION[0].content},Math.random())}))]}):Object(b.jsx)(I.a.Text,{className:"incidentMessage",children:"All clear! There are no incidents blocking your route"})}())}),[g]);var K=function(e){var t=Object(s.a)({},Z);t[e.target.id]=e.target.value,J(t)};Object(c.useEffect)((function(){var e,t;(null===(e=Z.origin)||void 0===e?void 0:e.length)>15&&(null===(t=Z.destination)||void 0===t?void 0:t.length)>15?q(!0):q(!1)}),[Z]);return Object(b.jsxs)(I.a,{className:"savedRoutes__cards--routeCard",children:[P?Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("div",{className:"allEditFields",children:[Object(b.jsx)("legend",{children:"Route Name"}),Object(b.jsx)("input",{id:"name",type:"text",value:Z.name,onChange:function(e){return K(e)}}),Object(b.jsxs)("div",{className:"legends",children:[Object(b.jsx)("legend",{children:"Origin"}),Object(b.jsx)("legend",{children:"Destination"})]}),Object(b.jsxs)("div",{className:"addressEditFields",children:[Object(b.jsx)("textarea",{id:"origin",type:"text",value:Z.origin,onChange:function(e){return K(e)}}),Object(b.jsx)("textarea",{id:"destination",type:"text",value:Z.destination,onChange:function(e){return K(e)}})]})]}),Object(b.jsxs)(I.a.Body,{className:"newRoute__path",children:[Object(b.jsx)("h3",{children:"Your Route Path"}),Object(b.jsx)("p",{className:"editedRoutePath",children:Q.join(" to ")}),Object(b.jsx)(k.a,{className:"route button",onClick:function(){return function(){var e=Object(s.a)({},Z);j(e.origin,e.destination).then((function(e){return H(e)}))}()},children:"View Route Path"})]})]}):Object(b.jsx)(I.a.Title,{children:t.name}),P?"":Object(b.jsxs)(b.Fragment,{children:[R,Object(b.jsx)(k.a,{className:"traffic button",id:t.id,onClick:function(e){!function(e){i(t).then((function(){v(parseInt(e.target.id))}))}(e)},children:"Check Traffic"})]}),Object(b.jsxs)(F.a,{"aria-label":"First group",children:[P?Object(b.jsx)(k.a,{className:"save button",disabled:!A,onClick:function(){d(Z),H([]),L(!1)},id:"".concat(t.id),children:"Save Changes"}):Object(b.jsx)(k.a,{className:"edit button",onClick:function(){l(t.id).then((function(e){return J(e)})),L(!0)},id:"".concat(t.id),children:"Edit"}),Object(b.jsx)(k.a,{className:"delete button",onClick:function(){o(t.id)},children:"Delete Route"})]})]})}),E=n(19),T=n(11),P=(n(51),function(){var e,t=Object(c.useContext)(N),n=t.addNewRoute,i=t.getRoutePath,a=Object(c.useState)(!1),r=Object(u.a)(a,2),o=r[0],l=r[1],d=Object(c.useState)(["Don't forget to check your path before clicking Save!"]),j=Object(u.a)(d,2),f=j[0],O=j[1],m=Object(c.useState)({}),p=Object(u.a)(m,2),x=p[0],g=p[1],v=Object(c.useState)({name:"",originStreet:"",originCSZ:"",destinationStreet:"",destinationCSZ:""}),C=Object(u.a)(v,2),S=C[0],y=C[1],R=function(e){var t=Object(s.a)({},S);t[e.target.name]=e.target.value,y(t),!1===Object.values(t).includes("")?l(!0):l(!1)};return Object(c.useEffect)((function(){var e=parseInt(sessionStorage.getItem(h)),t={name:S.name,origin:S.originStreet+" "+S.originCSZ,destination:S.destinationStreet+" "+S.destinationCSZ,userId:e};g(t),o&&i(t.origin,t.destination).then((function(e){return O(e)}))}),[S]),Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("div",{className:"formsAndInput",children:[Object(b.jsxs)("fieldset",{className:"newRoute__forms--title",children:[Object(b.jsx)("legend",{children:"Route Name"}),Object(b.jsx)(T.a.Control,{type:"text",name:"name",value:S.name,placeholder:"Route Name (ex. Home to Work)",onChange:function(e){return R(e)},required:!0})]}),Object(b.jsxs)("div",{className:"newRoute__forms",children:[Object(b.jsxs)(T.a,{className:"newRoute__forms--origin",children:[Object(b.jsx)("legend",{children:"Origin"}),Object(b.jsx)("fieldset",{children:Object(b.jsx)(T.a.Control,{placeholder:"Street",type:"text",name:"originStreet",value:S.originStreet,onChange:function(e){return R(e)},required:!0})}),Object(b.jsxs)("fieldset",{children:[Object(b.jsx)("label",{htmlFor:"originCSZ"}),Object(b.jsx)(T.a.Control,{placeholder:"City, State Zip",type:"text",name:"originCSZ",value:S.originCSZ,onChange:function(e){return R(e)},required:!0})]})]}),Object(b.jsxs)(T.a,{className:"newRoute__forms--destination",children:[Object(b.jsx)("legend",{children:"Destination"}),Object(b.jsx)("fieldset",{children:Object(b.jsx)(T.a.Control,{placeholder:"Street",type:"text",name:"destinationStreet",value:S.destinationStreet,onChange:function(e){return R(e)},required:!0})}),Object(b.jsxs)("fieldset",{children:[Object(b.jsx)("label",{htmlFor:"destinationCSZ"}),Object(b.jsx)(T.a.Control,{placeholder:"City, State Zip",type:"text",name:"destinationCSZ",value:S.destinationCSZ,onChange:function(e){return R(e)},required:!0})]})]})]})]}),Object(b.jsxs)("div",{className:"newRoute__path",children:[Object(b.jsx)(I.a.Title,{children:"Your Route Path"}),f.join(" to ")]}),Object(b.jsx)("button",(e={className:"btn--saveRoute",type:"submit",disabled:!o},Object(E.a)(e,"className","save button"),Object(E.a)(e,"onClick",(function(){return n(x),y({name:"",originStreet:"",originCSZ:"",destinationStreet:"",destinationCSZ:""}),O([]),void l(!1)})),Object(E.a)(e,"children","Save Route"),e))]})}),L=(n(53),function(){var e=Object(c.useContext)(N),t=e.routes,n=e.getRoutes,i=Object(c.useState)([]),a=Object(u.a)(i,2),r=a[0],s=a[1],l=Object(o.f)();Object(c.useEffect)((function(){n()}),[]),Object(c.useEffect)((function(){var e=parseInt(sessionStorage.getItem(h)),n=t.filter((function(t){return t.userId===e}));s(n)}),[t]);return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("button",{onClick:function(){return l.push("/edit-profile")},children:"Edit Profile Info"}),Object(b.jsx)("h1",{children:"Checkpoint"}),Object(b.jsx)("button",{className:"logout",onClick:function(){return sessionStorage.removeItem("app_user_id"),void l.push("/")},children:"Logout"}),Object(b.jsxs)("section",{className:"savedRoutes",children:[Object(b.jsx)("h2",{children:"Saved Routes"}),Object(b.jsx)("p",{className:"recheckMessage",children:"Traffic Incidents are updated periodically, so you may need to Check Traffic again if you're logged in for an extended period"}),Object(b.jsx)("div",{className:"savedRoutes__cards",children:r.map((function(e){return Object(b.jsx)(w,{routeObj:e},e.id)}))})]}),Object(b.jsxs)("div",{className:"newRoute",children:[Object(b.jsx)("h2",{children:"New Route"}),Object(b.jsx)("div",{className:"newRoute__content",children:Object(b.jsx)(P,{})})]})]})}),_=Object(c.createContext)(),M=function(e){var t=Object(c.useState)({}),n=Object(u.a)(t,2),i=n[0],a=n[1],r=sessionStorage.getItem(h);return Object(b.jsx)(_.Provider,{value:{getLoggedInUserObject:function(){return fetch("https://checkpoint--api.herokuapp.com/users/".concat(r)).then((function(e){return e.json()})).then(a)},userObject:i,updateUser:function(e){return fetch("https://checkpoint--api.herokuapp.com/users/".concat(e.id),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})}},children:e.children})},Z=(n(54),function(){var e=Object(c.useContext)(_),t=e.getLoggedInUserObject,n=e.userObject,i=e.updateUser,a=Object(o.f)(),r=Object(c.useState)({}),l=Object(u.a)(r,2),d=l[0],j=l[1];Object(c.useEffect)((function(){t()}),[]),Object(c.useEffect)((function(){j(n)}),[n]);var h=function(e){var t=Object(s.a)({},d);t[e.target.name]=e.target.value,j(t)};return Object(b.jsxs)(T.a,{id:"modal",children:[Object(b.jsx)("h3",{id:"userEditHeader",children:"User Profile Information"}),Object(b.jsx)("legend",{htmlFor:"firstName",children:"First Name"}),Object(b.jsx)(T.a.Control,{name:"firstName",type:"text",value:"".concat(d.firstName),onChange:function(e){return h(e)}}),Object(b.jsx)("legend",{htmlFor:"lastName",children:"Last Name"}),Object(b.jsx)(T.a.Control,{name:"lastName",type:"text",value:"".concat(d.lastName),onChange:function(e){return h(e)}}),Object(b.jsx)("legend",{htmlFor:"email",children:"Email"}),Object(b.jsx)(T.a.Control,{name:"email",type:"text",value:"".concat(d.email),onChange:function(e){return h(e)}}),Object(b.jsx)(k.a,{id:"userEditSave",onClick:function(){return i(d),void a.push("/")},children:"Save Changes"})]})}),J=function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(o.b,{render:function(){return sessionStorage.getItem(h)?Object(b.jsx)(b.Fragment,{children:Object(b.jsx)(M,{children:Object(b.jsx)(S,{children:Object(b.jsx)(C,{children:Object(b.jsxs)(R,{children:[Object(b.jsx)(o.b,{exact:!0,path:"/",children:Object(b.jsx)(L,{})}),Object(b.jsx)(o.b,{exact:!0,path:"/edit-profile",children:Object(b.jsx)(Z,{})})]})})})})}):Object(b.jsx)(o.a,{to:"/login"})}}),Object(b.jsx)(o.b,{path:"/login",children:Object(b.jsx)(f,{})}),Object(b.jsx)(o.b,{path:"/register",children:Object(b.jsx)(O,{})})]})},B=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,58)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,a=t.getLCP,r=t.getTTFB;n(e),c(e),i(e),a(e),r(e)}))};n(55);r.a.render(Object(b.jsx)(i.a.StrictMode,{children:Object(b.jsx)(l.a,{children:Object(b.jsx)(J,{})})}),document.getElementById("root")),B()}},[[56,1,2]]]);
//# sourceMappingURL=main.59ca664c.chunk.js.map