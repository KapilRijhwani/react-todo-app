(this["webpackJsonpreact-todo-app"]=this["webpackJsonpreact-todo-app"]||[]).push([[0],{27:function(e,t,n){e.exports=n(39)},39:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),r=n(22),l=n.n(r),c=n(17),i=n(5),d=n(6),u=n(8),s=n(7),p=n(9),m=function(e){function t(){var e,n;Object(i.a)(this,t);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(n=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(a)))).state={},n.getTitleStyle=function(){return{backgroundColor:"#f4f4f4",padding:"10px",borderBottom:"2px #ccc dotted",textDecoration:n.props.todo.completed?"line-through":"none"}},n.closeBtnStyle={background:"#ff0000",color:"#fff",border:"none",padding:"5px 10px",borderRadius:"50%",cursor:"pointer",float:"right"},n}return Object(p.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this,t=this.props.todo,n=t.id,o=t.title;return a.a.createElement("div",{style:this.getTitleStyle()},a.a.createElement("p",null,a.a.createElement("input",{type:"checkbox",onChange:function(){return e.props.onToggleCheckbox(n)}}),o,a.a.createElement("button",{style:this.closeBtnStyle,onClick:function(){return e.props.onDelete(n)}},"X")))}}]),t}(o.Component),f=function(e){function t(){var e,n;Object(i.a)(this,t);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(n=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(a)))).state={},n}return Object(p.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this;return a.a.createElement("div",null,this.props.todos.map((function(t){return a.a.createElement(m,{key:t.id,todo:t,onToggleCheckbox:e.props.onToggleCheckbox,onDelete:e.props.onDelete})})))}}]),t}(o.Component),b=n(13),h=function(){var e={color:"#fff",textDecoration:"none"};return a.a.createElement("header",{style:{background:"#333",color:"#fff",textAlign:"center",padding:"10px"}},a.a.createElement("h1",null,"Todo List"),a.a.createElement(b.b,{style:e,to:"/"},"Home")," ","|"," ",a.a.createElement(b.b,{style:e,to:"/about"},"About"))},g=n(25),y=function(e){function t(){var e,n;Object(i.a)(this,t);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(n=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(a)))).state={title:""},n.onChange=function(e){n.setState(Object(g.a)({},e.target.name,e.target.value))},n.onSubmit=function(e){e.preventDefault(),n.props.addTodo(n.state.title),n.setState({title:""})},n}return Object(p.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return a.a.createElement("div",null,a.a.createElement("form",{onSubmit:this.onSubmit,style:{display:"flex"}},a.a.createElement("input",{type:"text",name:"title",placeholder:"Add Todo...",style:{flex:"10",padding:"5px"},value:this.state.title,onChange:this.onChange}),a.a.createElement("input",{type:"submit",value:"Submit",className:"btn",style:{flex:"1",display:"inline-block",border:"none",background:"#555",color:"#fff",padding:"7px 20px",cursor:"pointer"}})))}}]),t}(o.Component),v=n(26),E=n.n(v);function j(){return a.a.createElement(a.a.Fragment,null,a.a.createElement("h1",null,"About"),a.a.createElement("p",null,"This is React Todo App v1.0. Learning React by KapilRijhwani."))}var O=n(10),x=function(e){function t(){var e,n;Object(i.a)(this,t);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(n=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(a)))).state={todos:[{id:1,title:"Todo 1",completed:!1},{id:2,title:"Todo 2",completed:!1},{id:3,title:"Todo 3",completed:!1}]},n.addTodo=function(e){var t={id:E.a.v4(),title:e,completed:!1};n.setState({todos:[].concat(Object(c.a)(n.state.todos),[t])})},n.toggleTodoItem=function(e){n.setState({todos:n.state.todos.map((function(t){return t.id===e&&(t.completed=!t.completed),t}))})},n.deleteTodoItem=function(e){n.setState({todos:Object(c.a)(n.state.todos.filter((function(t){return t.id!==e})))})},n}return Object(p.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this;return a.a.createElement(b.a,null,a.a.createElement("div",{className:"App"},a.a.createElement("div",{className:"container"},a.a.createElement(h,null),a.a.createElement(O.a,{exact:!0,path:"/",render:function(t){return a.a.createElement(a.a.Fragment,null,a.a.createElement(y,{addTodo:e.addTodo}),a.a.createElement(f,{todos:e.state.todos,onToggleCheckbox:e.toggleTodoItem,onDelete:e.deleteTodoItem}))}}),a.a.createElement(O.a,{path:"/about",component:j}))))}}]),t}(o.Component);l.a.render(a.a.createElement(x,null),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.76d04e71.chunk.js.map