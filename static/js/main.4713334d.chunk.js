(this["webpackJsonpsimple-todo-app"]=this["webpackJsonpsimple-todo-app"]||[]).push([[0],{19:function(e,t,n){e.exports=n(42)},41:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),r=n(16),c=n.n(r),l=n(6),i=n(3),d=n(44),u=n(17),s=n.n(u),m=function(e){var t=e.todo,n=t.completed,r=t.id,c=t.title;return Object(o.useEffect)((function(){return function(){alert("Item about to be deleted!")}}),[]),a.a.createElement("li",{className:"todo-item"},a.a.createElement("input",{type:"checkbox",checked:n,onChange:function(){return e.handleChangeProps(r)}}),a.a.createElement("button",{onClick:function(){return e.deleteTodoProps(r)}},"Delete"),a.a.createElement("span",{style:n?{fontStyle:"italic",color:"#d35e0f",opacity:.4,textDecoration:"line-through"}:null},c))},p=function(e){return a.a.createElement("div",null,e.todos.map((function(t){return a.a.createElement(m,{key:t.id,todo:t,handleChangeProps:e.handleChangeProps,deleteTodoProps:e.deleteTodoProps})})))},f=n(5),h=n(18),b=function(e){var t=Object(o.useState)({title:""}),n=Object(i.a)(t,2),r=n[0],c=n[1];return a.a.createElement("form",{onSubmit:function(t){t.preventDefault(),e.addTodoProps(r.title),c({title:""})},className:"form-container"},a.a.createElement("input",{type:"text",className:"input-text",placeholder:"Add todo...",value:r.title,name:"title",onChange:function(e){c(Object(h.a)({},r,Object(f.a)({},e.target.name,e.target.value)))}}),a.a.createElement("input",{type:"submit",className:"input-submit",value:"Submit"}))},E=function(e){var t=Object(o.useRef)(!0);console.log(t),Object(o.useEffect)((function(){var e="rgb("+Math.floor(256*Math.random())+","+Math.floor(256*Math.random())+","+Math.floor(256*Math.random())+")";t.current?t.current=!1:(document.getElementById("inH1").innerHTML="clicked",document.getElementById("inH1").style.backgroundColor=e)}),[e.headerSpan]);return a.a.createElement("header",{style:{padding:"20px 0",lineHeight:"2em"}},a.a.createElement("h1",{style:{fontSize:"25px",marginBottom:"15px"}},"Simple Todo App ",a.a.createElement("span",{id:"inH1"})),a.a.createElement("p",{style:{fontSize:"19px"}},"Please add to-dos item(s) through the input field"))},g=function(e){var t=Object(o.useState)([]),n=Object(i.a)(t,2),r=n[0],c=n[1],u=Object(o.useState)(!1),m=Object(i.a)(u,2),f=m[0],h=m[1];return Object(o.useEffect)((function(){console.log("test run"),s.a.get("https://jsonplaceholder.typicode.com/todos?_limit=10").then((function(e){return c(e.data)}))}),[]),a.a.createElement("div",{className:"container"},a.a.createElement(E,{headerSpan:f}),a.a.createElement(b,{addTodoProps:function(e){var t={id:Object(d.a)(),title:e,completed:!1};c({todos:[].concat(Object(l.a)(r),[t])})}}),a.a.createElement(p,{todos:r,handleChangeProps:function(e){c(r.map((function(t){return t.id===e&&(t.completed=!t.completed),t}))),h(!f)},deleteTodoProps:function(e){c(Object(l.a)(r.filter((function(t){return t.id!==e}))))}}))};n(41);c.a.render(a.a.createElement(g,null),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.4713334d.chunk.js.map