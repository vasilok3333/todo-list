(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],{14:function(t,e,n){},15:function(t,e,n){},16:function(t,e,n){},17:function(t,e,n){},19:function(t,e,n){"use strict";n.r(e);var s=n(2),i=n.n(s),a=n(9),d=n.n(a),c=(n(14),n(15),n(8)),o=n(3),r=n(4),l=n(1),u=n(6),h=n(5),j=(n(16),n(17),n(0));function b(t){return Object(j.jsxs)("div",{className:"buttons",children:[Object(j.jsx)("p",{onClick:t.editText,children:"\ud83d\udd8a\ufe0f"}),Object(j.jsx)("p",{onClick:t.doneItem,children:"\u2714\ufe0f"}),Object(j.jsx)("p",{onClick:t.deleteIitem,children:"\u274c"})]})}var m=function(t){Object(u.a)(n,t);var e=Object(h.a)(n);function n(t){var s;return Object(o.a)(this,n),(s=e.call(this,t)).state={text:s.props.text,edit:!1,id:s.props.id,done:s.props.done},s.editListItem=s.editListItem.bind(Object(l.a)(s)),s.editText=s.editText.bind(Object(l.a)(s)),s.deleteItem=s.deleteItem.bind(Object(l.a)(s)),s.onKeyPressHandler=s.onKeyPressHandler.bind(Object(l.a)(s)),s.doneItem=s.doneItem.bind(Object(l.a)(s)),s}return Object(r.a)(n,[{key:"editListItem",value:function(t){this.setState({text:t.target.value})}},{key:"editText",value:function(){this.setState({edit:!this.state.edit})}},{key:"deleteItem",value:function(){this.props.deleteTask(this.state.id)}},{key:"onKeyPressHandler",value:function(t){"Enter"===t.key&&this.editText()}},{key:"doneItem",value:function(){this.setState({done:!this.state.done})}},{key:"render",value:function(){return Object(j.jsxs)("div",{className:"listItem "+(this.state.done?"doneItem":null),children:[this.state.edit?Object(j.jsx)("input",{type:"text",className:"inputItem",value:this.state.text,onBlur:this.editText,onKeyPress:this.onKeyPressHandler,onChange:this.editListItem}):Object(j.jsx)("div",{className:"taskText",children:this.state.text}),Object(j.jsx)(b,{editText:this.editText,deleteIitem:this.deleteItem,doneItem:this.doneItem})]})}}]),n}(i.a.Component),x=function(t){Object(u.a)(n,t);var e=Object(h.a)(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){var t=this,e=this.props.items.map((function(e){return Object(j.jsx)(m,{text:e.text,id:e.id,done:e.done,deleteTask:t.props.deleteTask,filterItems:t.props.filterItems},e.id)}));return e.length>0?Object(j.jsx)("div",{className:"listItems",children:e}):null}}]),n}(i.a.Component);var p=function(t){return Object(j.jsxs)("form",{id:"to-do-form",onSubmit:t.addItem,children:[Object(j.jsx)("span",{className:"title-task",children:"Task"}),Object(j.jsx)("input",{type:"text",placeholder:"What do you need to do",onChange:t.handleInput,value:t.value}),Object(j.jsx)("button",{type:"submit",children:"Save Item"})]})},O=n(21),I=function(t){Object(u.a)(n,t);var e=Object(h.a)(n);function n(t){var s;return Object(o.a)(this,n),(s=e.call(this,t)).state={items:[],text:""},s.handleInput=s.handleInput.bind(Object(l.a)(s)),s.addItem=s.addItem.bind(Object(l.a)(s)),s.deleteTask=s.deleteTask.bind(Object(l.a)(s)),s}return Object(r.a)(n,[{key:"addItem",value:function(t){if(t.preventDefault(),""!==this.state.text){var e={text:this.state.text,done:!1,edit:!1,id:Object(O.a)()};this.setState({items:[e].concat(Object(c.a)(this.state.items)),text:""})}}},{key:"deleteTask",value:function(t){this.setState({items:Object(c.a)(this.state.items).filter((function(e){return e.id!==t}))})}},{key:"handleInput",value:function(t){this.setState({text:t.target.value})}},{key:"render",value:function(){return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)("h1",{className:"title",children:"To do:"}),Object(j.jsx)(x,{items:this.state.items,deleteTask:this.deleteTask,filterItems:this.filterItems,changeDone:this.changeDone}),Object(j.jsx)(p,{addItem:this.addItem,handleInput:this.handleInput,value:this.state.text})]})}}]),n}(i.a.Component),f=function(){return Object(j.jsx)("div",{children:Object(j.jsx)(I,{})})};d.a.render(Object(j.jsx)(i.a.StrictMode,{children:Object(j.jsx)(f,{})}),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.03bbba05.chunk.js.map