(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(7),c=n.n(o),i=(n(14),n(1)),u=n(2),l=n(4),s=n(3),d=n(5),m=3,p=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(l.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).onSubmit=function(e){e.preventDefault(),n.props.onAdd(m,n.prodName.value,n.prodPrice.value),n.prodName.value="",n.prodPrice.value="",m++},n}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("input",{placeholder:"Product Name",ref:function(t){return e.prodName=t}}),r.a.createElement("input",{placeholder:"Price",ref:function(t){return e.prodPrice=t}}),r.a.createElement("button",{type:"submit"},"Add")))}}]),t}(a.Component),f=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(l.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={isEdit:!1},n.onEdit=function(){n.setState({isEdit:!0})},n.onEditSubmit=function(e){e.preventDefault(),n.props.onEditSubmit(n.prodName.value,n.prodPrice.value,n.props.name),n.setState({isEdit:!1})},n}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.name,a=t.price;return r.a.createElement("li",null,this.state.isEdit?r.a.createElement("form",{onSubmit:this.onEditSubmit},r.a.createElement("input",{placeholder:"Product Name",ref:function(t){return e.prodName=t},defaultValue:n}),r.a.createElement("input",{placeholder:"Price",ref:function(t){return e.prodPrice=t},defaultValue:a}),r.a.createElement("button",{type:"submit"},"Save")):r.a.createElement("div",null,n,r.a.createElement("span",null," | "),a,r.a.createElement("span",null," | "),r.a.createElement("button",{onClick:this.onEdit},"Edit"),r.a.createElement("span",null," | "),r.a.createElement("button",{onClick:function(){return e.props.onDelete(n)},className:"delete"},"Delete")))}}]),t}(a.Component);n(15);localStorage.setItem("products",JSON.stringify([{id:1,name:"Ipad",price:"Rs.38000"},{id:2,name:"Iphone",price:"Rs.90000"}]));var h=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(l.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={products:JSON.parse(localStorage.getItem("products"))},n.onAdd=function(e,t,a){var r=n.getProducts();r.push({id:e,name:t,price:a}),n.setState({products:r})},n.onDelete=function(e){var t=n.getProducts().filter(function(t){return t.name!==e});n.setState({products:t})},n.onEditSubmit=function(e,t,a){var r=n.getProducts();r=r.map(function(n){return n.name===a&&(n.name=e,n.price=t),n}),n.setState({products:r})},n}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentWillMount",value:function(){this.getProducts()}},{key:"getProducts",value:function(){return this.state.products}},{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"products_block"},r.a.createElement("h1",null,"Products Management"),r.a.createElement("div",{className:"add_prod"},r.a.createElement("h4",null,"Add Product"),r.a.createElement(p,{onAdd:this.onAdd})),r.a.createElement("ul",null,this.state.products.map(function(t){return r.a.createElement(f,Object.assign({key:t.id},t,{onDelete:e.onDelete,onEditSubmit:e.onEditSubmit}))}))))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(h,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,t,n){e.exports=n(16)}},[[8,1,2]]]);
//# sourceMappingURL=main.7c8e0c8d.chunk.js.map