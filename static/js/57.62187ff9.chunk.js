"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[57],{5057:function(e,n,t){t.r(n),t.d(n,{default:function(){return C}});var r=t(5705),a={form:"Form_form__e1yzW",formName:"Form_formName__by7Sx",formNumber:"Form_formNumber__ggvL9",formBtn:"Form_formBtn__u8Ete"},s=t(9434),o=function(e){return e.filter},c=function(e){return e.contacts.items},m=function(e){return e.contacts.isLoading},i=function(e){return e.contacts.error},l=t(3634),u=t(184),d=function(e){var n=e.name;return(0,u.jsx)(r.Bc,{name:n,render:function(e){return(0,u.jsx)("p",{children:e})}})},f={name:"",number:""},h=function(){var e=(0,s.I0)(),n=(0,s.v9)(c);return(0,u.jsx)(r.J9,{initialValues:f,onSubmit:function(t,r){var a=r.resetForm;n.some((function(e){return e.name.toLowerCase()===t.name.toLowerCase()}))?alert("".concat(t.name," is already in contacts")):(e((0,l.uK)(t)),a())},children:(0,u.jsxs)(r.l0,{className:a.form,children:[(0,u.jsxs)("label",{className:a.formLabel,htmlFor:"name",children:["Name",(0,u.jsx)(r.gN,{className:a.formName,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",placeholder:"Name",required:!0}),(0,u.jsx)(d,{name:"name"})]}),(0,u.jsxs)("label",{className:a.formLabel,htmlFor:"number",children:["Number",(0,u.jsx)(r.gN,{className:a.formNumber,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",placeholder:"Number",required:!0}),(0,u.jsx)(d,{name:"number"})]}),(0,u.jsx)("button",{className:a.formBtn,type:"submit",children:"Add contact"})]})})},b={contactListDeleteBtn:"ContactListItem_contactListDeleteBtn__cCYA9"};function x(e){var n=e.id,t=e.name,r=e.number,a=(0,s.I0)();return(0,u.jsxs)("li",{className:b.contactListItem,children:[t,": ",r,(0,u.jsx)("button",{className:b.contactListDeleteBtn,type:"button",onClick:function(){return a((0,l.GK)(n))},children:"Delete"})]})}function p(){var e=function(e,n){return e.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}))}((0,s.v9)(c),(0,s.v9)(o));return(0,u.jsx)("ul",{children:e.map((function(e){var n=e.id,t=e.name,r=e.number;return(0,u.jsx)(x,{id:n,name:t,number:r},n)}))})}var j="Filter_filterLabel__+pnW-",_="Filter_filterName__Y2kKA",N=t(6895);function v(){var e=(0,s.I0)(),n=(0,s.v9)(o);return(0,u.jsxs)("label",{className:j,htmlFor:"filter",children:["Find contacts by name",(0,u.jsx)("input",{className:_,type:"text",name:"filter",value:n,onChange:function(n){e((0,N.bI)(n.currentTarget.value))},placeholder:"Write name for search"})]})}var y=t(2791);function C(){var e=(0,s.I0)(),n=(0,s.v9)(c),t=(0,s.v9)(o),r=(0,s.v9)(m),a=(0,s.v9)(i);return(0,y.useEffect)((function(){e((0,l.yF)())}),[e]),(0,u.jsxs)("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",fontSize:20},children:[(0,u.jsx)("h1",{children:"Phonebook"}),(0,u.jsx)(h,{}),(0,u.jsx)("h2",{children:"Contacts"}),n.length>0||t||r?(0,u.jsx)(v,{}):(0,u.jsx)("p",{children:"Contacts is empty!"}),r&&!a&&(0,u.jsx)("p",{children:"Loading data..."}),(0,u.jsx)(p,{})]})}}}]);
//# sourceMappingURL=57.62187ff9.chunk.js.map