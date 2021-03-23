(this["webpackJsonpgoit-react-hw-07-phonebook"]=this["webpackJsonpgoit-react-hw-07-phonebook"]||[]).push([[0],{23:function(t,e,n){t.exports={btnRemove:"ContactListItem_btnRemove__vI47a",contactListItem:"ContactListItem_contactListItem__6xll8"}},24:function(t,e,n){t.exports={label:"Filter_label__5zHWT",inputFilter:"Filter_inputFilter__36ipA"}},37:function(t,e,n){t.exports={container:"App_container__AM9cm",root:"App_root__3M1NW"}},39:function(t,e,n){t.exports={spinner:"Spinner_styled_spinner__2Emdd"}},44:function(t,e,n){},72:function(t,e,n){t.exports={contactList:"ContactsList_contactList__1Ex5m",message:"ContactsList_message__21Puv"}},9:function(t,e,n){t.exports={contactForm:"ContactForm_contactForm__2TGjH",label:"ContactForm_label__2fTAN",contactInput:"ContactForm_contactInput__1vgDh",btn:"ContactForm_btn__2LwkK"}},93:function(t,e,n){"use strict";n.r(e);var c=n(0),a=n.n(c),r=n(12),o=n.n(r),s=(n(44),n(13)),u=n(14),i=n(17),l=n(15),b=n(7),m=n(4),j=n(8),h=n.n(j),f=n(18),p=n(11),d=n.n(p),O=n(2),v=(Object(O.b)("contacts/remove-contact"),Object(O.b)("contacts/change-filter")),x=Object(O.b)("contacts/fecth-contacts"),_=Object(O.b)("contacts/fecth-contacts-success"),g=Object(O.b)("contacts/fecth-contacts-failure"),N=Object(O.b)("contacts/add-contacts"),C=Object(O.b)("contacts/add-contacts-success"),y=Object(O.b)("contacts/add-contacts-failure"),k=Object(O.b)("contacts/delete-contact-request"),w=Object(O.b)("contacts/delete-contact-success"),F=Object(O.b)("contacts/delete-contact-error"),L=Object(O.b)("contacts/setError"),I=Object(O.b)("contacts/resetError");d.a.defaults.baseURL="http://localhost:3004";var A,R,S,T=function(t){return t.contacts.items},E=function(t){return t.contacts.filter},M=function(t){return t.contacts.loading},D=function(t){var e=T(t),n=E(t).toLowerCase();return e.filter((function(t){return t.name.toLowerCase().includes(n)}))},P=n(9),z=n.n(P),B=n(1),H=function(t){Object(i.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(s.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).state={name:"",number:""},t.handleChange=function(e){t.setState(Object(m.a)({},e.target.name,e.target.value))},t.handleSubmit=function(e){e.preventDefault(),console.log(t.state.name,t.state.number);var n=t.props.contacts.find((function(e){return e.name===t.state.name})),c=t.props.contacts.find((function(e){return e.number===t.state.number}));n?alert("This contact NAME already exists\n         as Name:".concat(n.name," Tel:").concat(n.number)):c?alert("This contact NUMBER already exists as\n         Tel:".concat(c.number," Name:").concat(c.name)):t.state.name?t.state.number?(t.props.onSubmit({name:t.state.name,number:t.state.number}),t.setState({name:"",number:""})):alert("Please, enter the contact number"):alert("Please, enter the contact name")},t}return Object(u.a)(n,[{key:"render",value:function(){return Object(B.jsxs)("form",{onSubmit:this.handleSubmit,className:z.a.contactForm,children:[Object(B.jsxs)("label",{htmlFor:"name",className:z.a.label,children:["Name",Object(B.jsx)("input",{name:"name",type:"text",className:z.a.contactInput,placeholder:"insert name",onChange:this.handleChange,value:this.state.name})]}),Object(B.jsxs)("label",{htmlFor:"number",className:z.a.label,children:["Number",Object(B.jsx)("input",{name:"number",type:"text",className:z.a.contactInput,placeholder:"insert number",onChange:this.handleChange,value:this.state.number})]}),Object(B.jsx)("button",{type:"submit",className:z.a.btn,children:"Add contact"})]})}}]),n}(c.Component),J={onSubmit:function(t){var e=t.name,n=t.number;return function(){var t=Object(f.a)(h.a.mark((function t(c){var a,r,o;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a={name:e,number:n},console.log(a),c(N()),t.prev=3,t.next=6,d.a.post("/contacts",a);case 6:r=t.sent,o=r.data,console.log(o),c(C(o)),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(3),c(y(t.t0));case 15:case"end":return t.stop()}}),t,null,[[3,12]])})));return function(e){return t.apply(this,arguments)}}()}},U=Object(b.b)((function(t){return{contacts:T(t)}}),J)(H),W=(n(68),n(23)),q=n.n(W),G=function(t){var e=t.id,n=t.name,c=t.number,a=t.handleRemove;return Object(B.jsxs)("li",{className:q.a.contactListItem,children:[Object(B.jsx)("span",{className:"contactName",children:n}),Object(B.jsxs)("span",{className:"contactNumber",children:[" ",c]}),Object(B.jsx)("button",{onClick:function(){return a(e)},className:q.a.btnRemove,children:"Delete"})]})},K=(n(72),{handleRemove:function(t){return function(){var e=Object(f.a)(h.a.mark((function e(n){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(k()),e.prev=1,e.next=4,d.a.delete("/contacts/".concat(t));case 4:n(w(t)),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),n(F(e.t0));case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t){return e.apply(this,arguments)}}()}}),Q=Object(b.b)(null,K)((function(t){var e=t.contacts,n=t.handleRemove;return Object(B.jsx)("ul",{className:"contactsList",children:e.map((function(t){var e=t.name,c=t.number,a=t.id;return Object(B.jsx)(G,{id:a,name:e,number:c,handleRemove:n},a)}))})})),V=n(24),X=n.n(V),Y=Object(b.b)((function(t){return{filter:E(t)}}),(function(t){return{handleChange:function(e){return t(v(e.target.value))}}}))((function(t){var e=t.filter,n=t.handleChange;return Object(B.jsxs)("label",{className:X.a.label,children:["Find contacts by name",Object(B.jsx)("input",{className:X.a.inputFilter,name:"filter",type:"text",placeholder:"search contact",onChange:n,value:e})]})})),Z=(n(35),n(37)),$=n.n(Z),tt=n(38),et=n.n(tt),nt=n(39),ct=n.n(nt),at=function(t){var e=t.loading;return Object(B.jsx)(et.a,{className:ct.a.spinner,visible:e,type:"ThreeDots",color:"white",height:80,width:80,timeout:1800})},rt=function(t){Object(i.a)(n,t);var e=Object(l.a)(n);function n(){return Object(s.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.props.fecthContacts()}},{key:"render",value:function(){var t=this.props,e=t.contacts,n=t.loading;return Object(B.jsx)(B.Fragment,{children:Object(B.jsxs)("div",{className:$.a.container,children:[Object(B.jsx)("h1",{className:"titlePhonebook",children:"Phonebook"}),Object(B.jsx)(U,{}),Object(B.jsx)("h2",{className:"title",children:"Contacts list"}),!!e.length&&Object(B.jsx)(Y,{}),Object(B.jsx)(Q,{contacts:this.props.contacts}),Object(B.jsx)(at,{loading:n})]})})}}]),n}(c.Component),ot={fecthContacts:function(){return function(){var t=Object(f.a)(h.a.mark((function t(e){var n,c;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e(x()),t.prev=1,t.next=4,d.a.get("/contacts");case 4:n=t.sent,c=n.data,console.log(c),e(_(c)),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(1),e(g(t.t0));case 13:case"end":return t.stop()}}),t,null,[[1,10]])})));return function(e){return t.apply(this,arguments)}}()}},st=Object(b.b)((function(t){return{contacts:D(t),loading:M(t)}}),ot)(rt),ut=n(16),it=n(10),lt=(n(91),n(5)),bt=Object(O.c)([],(A={},Object(m.a)(A,_,(function(t,e){return e.payload})),Object(m.a)(A,C,(function(t,e){var n=e.payload;return[].concat(Object(ut.a)(t),[n])})),Object(m.a)(A,w,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),A)),mt=Object(O.c)("",Object(m.a)({},v,(function(t,e){return e.payload}))),jt=Object(O.c)(!1,(R={},Object(m.a)(R,x,(function(){return!0})),Object(m.a)(R,_,(function(){return!1})),Object(m.a)(R,g,(function(){return!1})),Object(m.a)(R,N,(function(){return!0})),Object(m.a)(R,C,(function(){return!1})),Object(m.a)(R,y,(function(){return!1})),Object(m.a)(R,k,(function(){return!0})),Object(m.a)(R,w,(function(){return!1})),Object(m.a)(R,F,(function(){return!1})),R)),ht=Object(O.c)("",(S={},Object(m.a)(S,L,(function(t,e){return e.payload})),Object(m.a)(S,I,(function(){return""})),S)),ft=Object(lt.c)({items:bt,filter:mt,loading:jt,error:ht}),pt=Object(ut.a)(Object(O.d)({serializableCheck:{ignoredActions:[it.a,it.f,it.b,it.c,it.d,it.e]}})),dt=Object(O.a)({reducer:{contacts:ft},middleware:pt,devTools:!1});o.a.render(Object(B.jsx)(b.a,{store:dt,children:Object(B.jsx)(a.a.StrictMode,{children:Object(B.jsx)(st,{})})}),document.getElementById("root"))}},[[93,1,2]]]);
//# sourceMappingURL=main.38587e29.chunk.js.map