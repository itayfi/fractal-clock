(this.webpackJsonpfractals=this.webpackJsonpfractals||[]).push([[0],[,,,,,,,,,,function(e,t,a){e.exports=a(19)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(7),c=a.n(o),l=(a(15),a(16),a(2)),s=a(1),i=a(9),u={hours:!1,minutes:!0,seconds:!0,maxDepth:8,showFps:!1,color:"#5cc0ff",dropoffMode:"exponential"},f=r.a.createContext({});function m(e){var t=e.children,a=localStorage.getItem("fractalClockSettings"),n=r.a.useState(a?JSON.parse(a):u),o=Object(i.a)(n,2),c=o[0],m=o[1],v=r.a.useMemo((function(){var e=Object.fromEntries(Object.keys(u).map((function(e){return[e,{value:c[e],onChange:function(t){m((function(a){return Object(s.a)(Object(s.a)({},a),{},Object(l.a)({},e,t))}))}}]})));return Object(s.a)(Object(s.a)({},e),{},{raw:c})}),[c,m]);return r.a.useEffect((function(){localStorage.setItem("fractalClockSettings",JSON.stringify(c))}),[c]),r.a.createElement(f.Provider,{value:v},t)}function v(){return r.a.useContext(f)}a(17);var g=a(4);function b(e){var t=e.value,a=e.onChange,n=e.label,o=Object(g.a)(e,["value","onChange","label"]),c=r.a.useCallback((function(e){return a(e.target.checked)}),[a]);return r.a.createElement("label",null,r.a.createElement("input",Object.assign({checked:t,onChange:c,type:"checkbox"},o)),n)}function h(e){return e.target.value}function p(e){var t=e.onChange,a=e.label,n=e.valueGetter,o=void 0===n?h:n,c=Object(g.a)(e,["onChange","label","valueGetter"]),l=r.a.useCallback((function(e){return t(o(e))}),[t,o]);return r.a.createElement("label",null,a,r.a.createElement("input",Object.assign({onChange:l},c)))}function d(e){return e.target.valueAsNumber}function E(e){var t=Object.assign({},e);return r.a.createElement(p,Object.assign({type:"range",valueGetter:d,title:t.value},t))}function O(e){var t=e.label,a=e.options,n=e.value,o=e.onChange,c=r.a.useCallback((function(e){return o(e.target.value)}),[o]);return r.a.createElement("label",null,t,r.a.createElement("select",{value:n,onChange:c},a.map((function(e){return r.a.createElement("option",{value:e.value},e.title)}))))}var C=[{value:"exponential",title:"Exponential"},{value:"linear",title:"Linear"},{value:"constant",title:"Constant"}];function j(){var e=v();return r.a.createElement("div",{className:"settings-panel"},r.a.createElement("h3",null,"Fractal Clock"),r.a.createElement(E,Object.assign({min:"1",max:"15",step:"1",label:"Max Depth"},e.maxDepth)),r.a.createElement(b,Object.assign({label:"Hours"},e.hours)),r.a.createElement(b,Object.assign({label:"Minutes"},e.minutes)),r.a.createElement(b,Object.assign({label:"Seconds"},e.seconds)),r.a.createElement(p,Object.assign({type:"color",label:"Color "},e.color)),r.a.createElement(O,Object.assign({label:"Dropoff Mode ",options:C},e.dropoffMode)))}var w=a(5),x=a(8),k=a.n(x);function M(e,t,a){switch(t.dropoffMode){case"linear":e.strokeStyle=k()(t.color).setAlpha(a/t.maxDepth).toRgbString();case"constant":e.lineWidth=Math.pow(.7,a-t.maxDepth)}}function y(e){var t,a=new OffscreenCanvas(666,666),n=new OffscreenCanvas(666,666),r=a.getContext("2d"),o=n.getContext("2d"),c=[],l=function(){var e=new Date,t=e.getSeconds()+e.getMilliseconds()/1e3,a=e.getMinutes()+t/60;return{hours:(e.getHours()+a/60)%12/12,minutes:a%60/60,seconds:t%60/60}}();for(var s in l)e[s]&&c.push((t=l[s],(new DOMMatrix).translate(333,333).scale(.7).rotate(360*t).translate(0,-100/.7).translate(-333,-333)));o.strokeStyle=e.color;for(var i=0;i<e.maxDepth;i++){o.clearRect(0,0,666,666);var u,f=Object(w.a)(c);try{for(f.s();!(u=f.n()).done;){var m=u.value;o.setTransform(m),o.drawImage(a,0,0)}}catch(p){f.e(p)}finally{f.f()}o.setTransform(new DOMMatrix),M(o,e,i),o.beginPath();var v,g=Object(w.a)(c);try{for(g.s();!(v=g.n()).done;){var b=v.value;o.moveTo(333,333);var h=new DOMPoint(333,333).matrixTransform(b);o.lineTo(h.x,h.y)}}catch(p){g.e(p)}finally{g.f()}o.stroke(),r.clearRect(0,0,666,666),r.drawImage(n,0,0)}return a.transferToImageBitmap()}a(18);function S(){var e=v().raw,t=r.a.useRef();return r.a.useEffect((function(){var a;return function n(r){!function(e,t,a){t.getContext("bitmaprenderer").transferFromImageBitmap(y(a))}(0,t.current,e),a=requestAnimationFrame(n)}(),function(){return cancelAnimationFrame(a)}}),[e]),r.a.createElement("div",{className:"clock-container"},r.a.createElement("canvas",{width:"666",height:"666",ref:t}))}var D=function(){return r.a.createElement(m,null,r.a.createElement("div",{className:"App"},r.a.createElement(j,null),r.a.createElement(S,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(D,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[10,1,2]]]);
//# sourceMappingURL=main.f00deb2e.chunk.js.map