(this["webpackJsonpstock-snippets"]=this["webpackJsonpstock-snippets"]||[]).push([[0],{109:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(13),c=a.n(l),o=a(15),s=a(115),m=a(116);function u(e){var t=e.callback,a=Object(n.useState)(""),l=Object(o.a)(a,2),c=(l[0],l[1]);return r.a.createElement(s.a,{inline:!0,onSubmit:function(e){e.preventDefault();var a=new FormData(e.target).get("search").replace(/\s/g,"").split(","),n=[];Promise.all(a.map((function(e){return fetch("https://api.stocktwits.com/api/2/streams/symbol/".concat(e,".json"))}))).then((function(e){return Promise.all(e.map((function(e){return e.json()})))})).then((function(e){console.log(e),404==e[0].response.status?alert("Invalid search term, try GOOG or BB"):(e.forEach((function(e){e.messages.forEach((function(e){n.push(e)}))})),t(n))}))}},r.a.createElement(s.a.Control,{name:"search",type:"text",placeholder:"search for some stocks",className:"mr-sm-2",onChange:function(e){return c(e.target.value)}}),r.a.createElement(m.a,{type:"submit",variant:"outline-info",className:"mr-sm-2"},"Search"))}var i=a(111),p=a(38),f=a.n(p),E=(a(64),a(39)),d=a.n(E);function h(e){for(var t=e.content,a=t.body,n=t.symbols.map((function(e){return e.symbol})),l=0;l<n.length;l++)a=a.replace("$"+n[l],'<a target="_blank" href="http://stocktwits.com/symbol/'.concat(n[l],'">$').concat(n[l],"</a>"));return console.log(a),r.a.createElement(i.a,{style:{borderBottomStyle:"solid",paddingBottom:"4px"},as:"li"},r.a.createElement("img",{width:64,height:64,className:"align-self-start mr-3",src:t.user.avatar_url,alt:"user avatar"}),r.a.createElement(i.a.Body,null,r.a.createElement("h5",null,t.user.name),r.a.createElement(f.a,null,d()(a)),r.a.createElement("br",null),r.a.createElement("small",null,new Date(t.created_at).toLocaleString())))}var g=a(112),b=a(113),v=a(37);function y(e){var t=e.data.sort((function(e,t){return new Date(t.created_at)-new Date(e.created_at)}));return r.a.createElement(g.a,null,r.a.createElement(b.a,null,r.a.createElement(v.a,{md:{span:8,offset:2},s:{span:12}},r.a.createElement("ul",{style:{paddingLeft:"0px",paddingBottom:"10px",paddingTop:"10px",listStyleType:"none",margin:"0px"}},t.map((function(e){return r.a.createElement(h,{content:e})}))))))}var k=a(114);c.a.render(r.a.createElement((function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),a=t[0],l=t[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(k.a,{className:"justify-content-between",bg:"dark",variant:"dark",expand:"lg"},r.a.createElement(k.a.Brand,{bg:"light"},"Stock Snippets"),r.a.createElement(u,{callback:l})),r.a.createElement(g.a,null,r.a.createElement(b.a,null,r.a.createElement(v.a,null,0==a.length?r.a.createElement("h3",null,"Search for a stock or two!"):r.a.createElement(r.a.Fragment,null),r.a.createElement(y,{data:a})))))}),null),document.getElementById("root"))},43:function(e,t,a){e.exports=a(109)},90:function(e,t){}},[[43,1,2]]]);
//# sourceMappingURL=main.622c9d9e.chunk.js.map