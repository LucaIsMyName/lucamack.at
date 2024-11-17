/* esm.sh - esbuild bundle(tippy.js@6.3.7) es2022 production */
import{createPopper as Et,applyStyles as Tt}from"./popper.js";var Kt='<svg width="16" height="6" xmlns="http://www.w3.org/2000/svg"><path d="M0 6s1.796-.013 4.67-3.615C5.851.9 6.93.006 8 0c1.07-.006 2.148.887 3.343 2.385C14.233 6.005 16 6 16 6H0z"></svg>',Ot="tippy-box",ze="tippy-content",qe="tippy-backdrop",Ge="tippy-arrow",Ke="tippy-svg-arrow",U={passive:!0,capture:!0},Je=function(){return document.body};function ve(t,n,r){if(Array.isArray(t)){var o=t[n];return o??(Array.isArray(r)?r[n]:r)}return t}function be(t,n){var r={}.toString.call(t);return r.indexOf("[object")===0&&r.indexOf(n+"]")>-1}function Qe(t,n){return typeof t=="function"?t.apply(void 0,n):t}function We(t,n){if(n===0)return t;var r;return function(o){clearTimeout(r),r=setTimeout(function(){t(o)},n)}}function Ze(t,n){var r=Object.assign({},t);return n.forEach(function(o){delete r[o]}),r}function Ct(t){return t.split(/\s+/).filter(Boolean)}function _(t){return[].concat(t)}function Ue(t,n){t.indexOf(n)===-1&&t.push(n)}function Dt(t){return t.filter(function(n,r){return t.indexOf(n)===r})}function et(t){return t.split("-")[0]}function q(t){return[].slice.call(t)}function _e(t){return Object.keys(t).reduce(function(n,r){return t[r]!==void 0&&(n[r]=t[r]),n},{})}function F(){return document.createElement("div")}function ue(t){return["Element","Fragment"].some(function(n){return be(t,n)})}function At(t){return be(t,"NodeList")}function we(t){return be(t,"MouseEvent")}function tt(t){return!!(t&&t._tippy&&t._tippy.reference===t)}function Mt(t){return ue(t)?[t]:At(t)?q(t):Array.isArray(t)?t:q(document.querySelectorAll(t))}function me(t,n){t.forEach(function(r){r&&(r.style.transitionDuration=n+"ms")})}function Q(t,n){t.forEach(function(r){r&&r.setAttribute("data-state",n)})}function nt(t){var n,r=_(t),o=r[0];return o!=null&&(n=o.ownerDocument)!=null&&n.body?o.ownerDocument:document}function Lt(t,n){var r=n.clientX,o=n.clientY;return t.every(function(f){var s=f.popperRect,a=f.popperState,l=f.props,d=l.interactiveBorder,g=et(a.placement),h=a.modifiersData.offset;if(!h)return!0;var M=g==="bottom"?h.top.y:0,C=g==="top"?h.bottom.y:0,D=g==="right"?h.left.x:0,w=g==="left"?h.right.x:0,y=s.top-o+M>d,m=o-s.bottom-C>d,c=s.left-r+D>d,T=r-s.right-w>d;return y||m||c||T})}function ge(t,n,r){var o=n+"EventListener";["transitionend","webkitTransitionEnd"].forEach(function(f){t[o](f,r)})}function Be(t,n){for(var r=n;r;){var o;if(t.contains(r))return!0;r=r.getRootNode==null||(o=r.getRootNode())==null?void 0:o.host}return!1}var k={isTouch:!1},He=0;function St(){k.isTouch||(k.isTouch=!0,window.performance&&document.addEventListener("mousemove",rt))}function rt(){var t=performance.now();t-He<20&&(k.isTouch=!1,document.removeEventListener("mousemove",rt)),He=t}function xt(){var t=document.activeElement;if(tt(t)){var n=t._tippy;t.blur&&!n.state.isVisible&&t.blur()}}function Nt(){document.addEventListener("touchstart",St,U),window.addEventListener("blur",xt)}var Pt=typeof window<"u"&&typeof document<"u",It=Pt?!!window.msCrypto:!1;var Rt={animateFill:!1,followCursor:!1,inlinePositioning:!1,sticky:!1},Vt={allowHTML:!1,animation:"fade",arrow:!0,content:"",inertia:!1,maxWidth:350,role:"tooltip",theme:"",zIndex:9999},N=Object.assign({appendTo:Je,aria:{content:"auto",expanded:"auto"},delay:0,duration:[300,250],getReferenceClientRect:null,hideOnClick:!0,ignoreAttributes:!1,interactive:!1,interactiveBorder:2,interactiveDebounce:0,moveTransition:"",offset:[0,10],onAfterUpdate:function(){},onBeforeUpdate:function(){},onCreate:function(){},onDestroy:function(){},onHidden:function(){},onHide:function(){},onMount:function(){},onShow:function(){},onShown:function(){},onTrigger:function(){},onUntrigger:function(){},onClickOutside:function(){},placement:"top",plugins:[],popperOptions:{},render:null,showOnCreate:!1,touch:!0,trigger:"mouseenter focus",triggerTarget:null},Rt,Vt),kt=Object.keys(N),jt=function(n){var r=Object.keys(n);r.forEach(function(o){N[o]=n[o]})};function it(t){var n=t.plugins||[],r=n.reduce(function(o,f){var s=f.name,a=f.defaultValue;if(s){var l;o[s]=t[s]!==void 0?t[s]:(l=N[s])!=null?l:a}return o},{});return Object.assign({},t,r)}function Wt(t,n){var r=n?Object.keys(it(Object.assign({},N,{plugins:n}))):kt,o=r.reduce(function(f,s){var a=(t.getAttribute("data-tippy-"+s)||"").trim();if(!a)return f;if(s==="content")f[s]=a;else try{f[s]=JSON.parse(a)}catch{f[s]=a}return f},{});return o}function Fe(t,n){var r=Object.assign({},n,{content:Qe(n.content,[t])},n.ignoreAttributes?{}:Wt(t,n.plugins));return r.aria=Object.assign({},N.aria,r.aria),r.aria={expanded:r.aria.expanded==="auto"?n.interactive:r.aria.expanded,content:r.aria.content==="auto"?n.interactive?null:"describedby":r.aria.content},r}var Ut=function(){return"innerHTML"};function he(t,n){t[Ut()]=n}function $e(t){var n=F();return t===!0?n.className=Ge:(n.className=Ke,ue(t)?n.appendChild(t):he(n,t)),n}function Ye(t,n){ue(n.content)?(he(t,""),t.appendChild(n.content)):typeof n.content!="function"&&(n.allowHTML?he(t,n.content):t.textContent=n.content)}function se(t){var n=t.firstElementChild,r=q(n.children);return{box:n,content:r.find(function(o){return o.classList.contains(ze)}),arrow:r.find(function(o){return o.classList.contains(Ge)||o.classList.contains(Ke)}),backdrop:r.find(function(o){return o.classList.contains(qe)})}}function ot(t){var n=F(),r=F();r.className=Ot,r.setAttribute("data-state","hidden"),r.setAttribute("tabindex","-1");var o=F();o.className=ze,o.setAttribute("data-state","hidden"),Ye(o,t.props),n.appendChild(r),r.appendChild(o),f(t.props,t.props);function f(s,a){var l=se(n),d=l.box,g=l.content,h=l.arrow;a.theme?d.setAttribute("data-theme",a.theme):d.removeAttribute("data-theme"),typeof a.animation=="string"?d.setAttribute("data-animation",a.animation):d.removeAttribute("data-animation"),a.inertia?d.setAttribute("data-inertia",""):d.removeAttribute("data-inertia"),d.style.maxWidth=typeof a.maxWidth=="number"?a.maxWidth+"px":a.maxWidth,a.role?d.setAttribute("role",a.role):d.removeAttribute("role"),(s.content!==a.content||s.allowHTML!==a.allowHTML)&&Ye(g,t.props),a.arrow?h?s.arrow!==a.arrow&&(d.removeChild(h),d.appendChild($e(a.arrow))):d.appendChild($e(a.arrow)):h&&d.removeChild(h)}return{popper:n,onUpdate:f}}ot.$$tippy=!0;var _t=1,ie=[],ae=[];function Bt(t,n){var r=Fe(t,Object.assign({},N,it(_e(n)))),o,f,s,a=!1,l=!1,d=!1,g=!1,h,M,C,D=[],w=We(xe,r.interactiveDebounce),y,m=_t++,c=null,T=Dt(r.plugins),A={isEnabled:!0,isVisible:!1,isDestroyed:!1,isMounted:!1,isShown:!1},e={id:m,reference:t,popper:F(),popperInstance:c,props:r,state:A,plugins:T,clearDelayTimeouts:lt,setProps:dt,setContent:vt,show:mt,hide:gt,hideWithInteractivity:ht,enable:ft,disable:pt,unmount:yt,destroy:bt};if(!r.render)return e;var b=r.render(e),p=b.popper,P=b.onUpdate;p.setAttribute("data-tippy-root",""),p.id="tippy-"+e.id,e.popper=p,t._tippy=e,p._tippy=e;var S=T.map(function(i){return i.fn(e)}),j=t.hasAttribute("aria-expanded");return Me(),J(),Z(),I("onCreate",[e]),r.showOnCreate&&ke(),p.addEventListener("mouseenter",function(){e.props.interactive&&e.state.isVisible&&e.clearDelayTimeouts()}),p.addEventListener("mouseleave",function(){e.props.interactive&&e.props.trigger.indexOf("mouseenter")>=0&&W().addEventListener("mousemove",w)}),e;function $(){var i=e.props.touch;return Array.isArray(i)?i:[i,0]}function G(){return $()[0]==="hold"}function x(){var i;return!!((i=e.props.render)!=null&&i.$$tippy)}function V(){return y||t}function W(){var i=V().parentNode;return i?nt(i):document}function K(){return se(p)}function Ee(i){return e.state.isMounted&&!e.state.isVisible||k.isTouch||h&&h.type==="focus"?0:ve(e.props.delay,i?0:1,N.delay)}function Z(i){i===void 0&&(i=!1),p.style.pointerEvents=e.props.interactive&&!i?"":"none",p.style.zIndex=""+e.props.zIndex}function I(i,u,v){if(v===void 0&&(v=!0),S.forEach(function(E){E[i]&&E[i].apply(E,u)}),v){var O;(O=e.props)[i].apply(O,u)}}function Te(){var i=e.props.aria;if(i.content){var u="aria-"+i.content,v=p.id,O=_(e.props.triggerTarget||t);O.forEach(function(E){var L=E.getAttribute(u);if(e.state.isVisible)E.setAttribute(u,L?L+" "+v:v);else{var R=L&&L.replace(v,"").trim();R?E.setAttribute(u,R):E.removeAttribute(u)}})}}function J(){if(!(j||!e.props.aria.expanded)){var i=_(e.props.triggerTarget||t);i.forEach(function(u){e.props.interactive?u.setAttribute("aria-expanded",e.state.isVisible&&u===V()?"true":"false"):u.removeAttribute("aria-expanded")})}}function ce(){W().removeEventListener("mousemove",w),ie=ie.filter(function(i){return i!==w})}function ee(i){if(!(k.isTouch&&(d||i.type==="mousedown"))){var u=i.composedPath&&i.composedPath()[0]||i.target;if(!(e.props.interactive&&Be(p,u))){if(_(e.props.triggerTarget||t).some(function(v){return Be(v,u)})){if(k.isTouch||e.state.isVisible&&e.props.trigger.indexOf("click")>=0)return}else I("onClickOutside",[e,i]);e.props.hideOnClick===!0&&(e.clearDelayTimeouts(),e.hide(),l=!0,setTimeout(function(){l=!1}),e.state.isMounted||fe())}}}function Oe(){d=!0}function Ce(){d=!1}function De(){var i=W();i.addEventListener("mousedown",ee,!0),i.addEventListener("touchend",ee,U),i.addEventListener("touchstart",Ce,U),i.addEventListener("touchmove",Oe,U)}function fe(){var i=W();i.removeEventListener("mousedown",ee,!0),i.removeEventListener("touchend",ee,U),i.removeEventListener("touchstart",Ce,U),i.removeEventListener("touchmove",Oe,U)}function st(i,u){Ae(i,function(){!e.state.isVisible&&p.parentNode&&p.parentNode.contains(p)&&u()})}function ut(i,u){Ae(i,u)}function Ae(i,u){var v=K().box;function O(E){E.target===v&&(ge(v,"remove",O),u())}if(i===0)return u();ge(v,"remove",M),ge(v,"add",O),M=O}function Y(i,u,v){v===void 0&&(v=!1);var O=_(e.props.triggerTarget||t);O.forEach(function(E){E.addEventListener(i,u,v),D.push({node:E,eventType:i,handler:u,options:v})})}function Me(){G()&&(Y("touchstart",Se,{passive:!0}),Y("touchend",Ne,{passive:!0})),Ct(e.props.trigger).forEach(function(i){if(i!=="manual")switch(Y(i,Se),i){case"mouseenter":Y("mouseleave",Ne);break;case"focus":Y(It?"focusout":"blur",Pe);break;case"focusin":Y("focusout",Pe);break}})}function Le(){D.forEach(function(i){var u=i.node,v=i.eventType,O=i.handler,E=i.options;u.removeEventListener(v,O,E)}),D=[]}function Se(i){var u,v=!1;if(!(!e.state.isEnabled||Ie(i)||l)){var O=((u=h)==null?void 0:u.type)==="focus";h=i,y=i.currentTarget,J(),!e.state.isVisible&&we(i)&&ie.forEach(function(E){return E(i)}),i.type==="click"&&(e.props.trigger.indexOf("mouseenter")<0||a)&&e.props.hideOnClick!==!1&&e.state.isVisible?v=!0:ke(i),i.type==="click"&&(a=!v),v&&!O&&te(i)}}function xe(i){var u=i.target,v=V().contains(u)||p.contains(u);if(!(i.type==="mousemove"&&v)){var O=pe().concat(p).map(function(E){var L,R=E._tippy,X=(L=R.popperInstance)==null?void 0:L.state;return X?{popperRect:E.getBoundingClientRect(),popperState:X,props:r}:null}).filter(Boolean);Lt(O,i)&&(ce(),te(i))}}function Ne(i){var u=Ie(i)||e.props.trigger.indexOf("click")>=0&&a;if(!u){if(e.props.interactive){e.hideWithInteractivity(i);return}te(i)}}function Pe(i){e.props.trigger.indexOf("focusin")<0&&i.target!==V()||e.props.interactive&&i.relatedTarget&&p.contains(i.relatedTarget)||te(i)}function Ie(i){return k.isTouch?G()!==i.type.indexOf("touch")>=0:!1}function Re(){Ve();var i=e.props,u=i.popperOptions,v=i.placement,O=i.offset,E=i.getReferenceClientRect,L=i.moveTransition,R=x()?se(p).arrow:null,X=E?{getBoundingClientRect:E,contextElement:E.contextElement||V()}:t,je={name:"$$tippy",enabled:!0,phase:"beforeWrite",requires:["computeStyles"],fn:function(ne){var z=ne.state;if(x()){var wt=K(),de=wt.box;["placement","reference-hidden","escaped"].forEach(function(re){re==="placement"?de.setAttribute("data-placement",z.placement):z.attributes.popper["data-popper-"+re]?de.setAttribute("data-"+re,""):de.removeAttribute("data-"+re)}),z.attributes.popper={}}}},H=[{name:"offset",options:{offset:O}},{name:"preventOverflow",options:{padding:{top:2,bottom:2,left:5,right:5}}},{name:"flip",options:{padding:5}},{name:"computeStyles",options:{adaptive:!L}},je];x()&&R&&H.push({name:"arrow",options:{element:R,padding:3}}),H.push.apply(H,u?.modifiers||[]),e.popperInstance=Et(X,p,Object.assign({},u,{placement:v,onFirstUpdate:C,modifiers:H}))}function Ve(){e.popperInstance&&(e.popperInstance.destroy(),e.popperInstance=null)}function ct(){var i=e.props.appendTo,u,v=V();e.props.interactive&&i===Je||i==="parent"?u=v.parentNode:u=Qe(i,[v]),u.contains(p)||u.appendChild(p),e.state.isMounted=!0,Re()}function pe(){return q(p.querySelectorAll("[data-tippy-root]"))}function ke(i){e.clearDelayTimeouts(),i&&I("onTrigger",[e,i]),De();var u=Ee(!0),v=$(),O=v[0],E=v[1];k.isTouch&&O==="hold"&&E&&(u=E),u?o=setTimeout(function(){e.show()},u):e.show()}function te(i){if(e.clearDelayTimeouts(),I("onUntrigger",[e,i]),!e.state.isVisible){fe();return}if(!(e.props.trigger.indexOf("mouseenter")>=0&&e.props.trigger.indexOf("click")>=0&&["mouseleave","mousemove"].indexOf(i.type)>=0&&a)){var u=Ee(!1);u?f=setTimeout(function(){e.state.isVisible&&e.hide()},u):s=requestAnimationFrame(function(){e.hide()})}}function ft(){e.state.isEnabled=!0}function pt(){e.hide(),e.state.isEnabled=!1}function lt(){clearTimeout(o),clearTimeout(f),cancelAnimationFrame(s)}function dt(i){if(!e.state.isDestroyed){I("onBeforeUpdate",[e,i]),Le();var u=e.props,v=Fe(t,Object.assign({},u,_e(i),{ignoreAttributes:!0}));e.props=v,Me(),u.interactiveDebounce!==v.interactiveDebounce&&(ce(),w=We(xe,v.interactiveDebounce)),u.triggerTarget&&!v.triggerTarget?_(u.triggerTarget).forEach(function(O){O.removeAttribute("aria-expanded")}):v.triggerTarget&&t.removeAttribute("aria-expanded"),J(),Z(),P&&P(u,v),e.popperInstance&&(Re(),pe().forEach(function(O){requestAnimationFrame(O._tippy.popperInstance.forceUpdate)})),I("onAfterUpdate",[e,i])}}function vt(i){e.setProps({content:i})}function mt(){var i=e.state.isVisible,u=e.state.isDestroyed,v=!e.state.isEnabled,O=k.isTouch&&!e.props.touch,E=ve(e.props.duration,0,N.duration);if(!(i||u||v||O)&&!V().hasAttribute("disabled")&&(I("onShow",[e],!1),e.props.onShow(e)!==!1)){if(e.state.isVisible=!0,x()&&(p.style.visibility="visible"),Z(),De(),e.state.isMounted||(p.style.transition="none"),x()){var L=K(),R=L.box,X=L.content;me([R,X],0)}C=function(){var H;if(!(!e.state.isVisible||g)){if(g=!0,p.offsetHeight,p.style.transition=e.props.moveTransition,x()&&e.props.animation){var le=K(),ne=le.box,z=le.content;me([ne,z],E),Q([ne,z],"visible")}Te(),J(),Ue(ae,e),(H=e.popperInstance)==null||H.forceUpdate(),I("onMount",[e]),e.props.animation&&x()&&ut(E,function(){e.state.isShown=!0,I("onShown",[e])})}},ct()}}function gt(){var i=!e.state.isVisible,u=e.state.isDestroyed,v=!e.state.isEnabled,O=ve(e.props.duration,1,N.duration);if(!(i||u||v)&&(I("onHide",[e],!1),e.props.onHide(e)!==!1)){if(e.state.isVisible=!1,e.state.isShown=!1,g=!1,a=!1,x()&&(p.style.visibility="hidden"),ce(),fe(),Z(!0),x()){var E=K(),L=E.box,R=E.content;e.props.animation&&(me([L,R],O),Q([L,R],"hidden"))}Te(),J(),e.props.animation?x()&&st(O,e.unmount):e.unmount()}}function ht(i){W().addEventListener("mousemove",w),Ue(ie,w),w(i)}function yt(){e.state.isVisible&&e.hide(),e.state.isMounted&&(Ve(),pe().forEach(function(i){i._tippy.unmount()}),p.parentNode&&p.parentNode.removeChild(p),ae=ae.filter(function(i){return i!==e}),e.state.isMounted=!1,I("onHidden",[e]))}function bt(){e.state.isDestroyed||(e.clearDelayTimeouts(),e.unmount(),Le(),delete t._tippy,e.state.isDestroyed=!0,I("onDestroy",[e]))}}function B(t,n){n===void 0&&(n={});var r=N.plugins.concat(n.plugins||[]);Nt();var o=Object.assign({},n,{plugins:r}),f=Mt(t);if(0)var s,a;var l=f.reduce(function(d,g){var h=g&&Bt(g,o);return h&&d.push(h),d},[]);return ue(t)?l[0]:l}B.defaultProps=N;B.setDefaultProps=jt;B.currentInput=k;var Jt=function(n){var r=n===void 0?{}:n,o=r.exclude,f=r.duration;ae.forEach(function(s){var a=!1;if(o&&(a=tt(o)?s.reference===o:s.popper===o.popper),!a){var l=s.props.duration;s.setProps({duration:f}),s.hide(),s.state.isDestroyed||s.setProps({duration:l})}})},Ht=Object.assign({},Tt,{effect:function(n){var r=n.state,o={popper:{position:r.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};Object.assign(r.elements.popper.style,o.popper),r.styles=o,r.elements.arrow&&Object.assign(r.elements.arrow.style,o.arrow)}}),Qt=function(n,r){var o;r===void 0&&(r={});var f=n,s=[],a=[],l,d=r.overrides,g=[],h=!1;function M(){a=f.map(function(e){return _(e.props.triggerTarget||e.reference)}).reduce(function(e,b){return e.concat(b)},[])}function C(){s=f.map(function(e){return e.reference})}function D(e){f.forEach(function(b){e?b.enable():b.disable()})}function w(e){return f.map(function(b){var p=b.setProps;return b.setProps=function(P){p(P),b.reference===l&&e.setProps(P)},function(){b.setProps=p}})}function y(e,b){var p=a.indexOf(b);if(b!==l){l=b;var P=(d||[]).concat("content").reduce(function(S,j){return S[j]=f[p].props[j],S},{});e.setProps(Object.assign({},P,{getReferenceClientRect:typeof P.getReferenceClientRect=="function"?P.getReferenceClientRect:function(){var S;return(S=s[p])==null?void 0:S.getBoundingClientRect()}}))}}D(!1),C(),M();var m={fn:function(){return{onDestroy:function(){D(!0)},onHidden:function(){l=null},onClickOutside:function(p){p.props.showOnCreate&&!h&&(h=!0,l=null)},onShow:function(p){p.props.showOnCreate&&!h&&(h=!0,y(p,s[0]))},onTrigger:function(p,P){y(p,P.currentTarget)}}}},c=B(F(),Object.assign({},Ze(r,["overrides"]),{plugins:[m].concat(r.plugins||[]),triggerTarget:a,popperOptions:Object.assign({},r.popperOptions,{modifiers:[].concat(((o=r.popperOptions)==null?void 0:o.modifiers)||[],[Ht])})})),T=c.show;c.show=function(e){if(T(),!l&&e==null)return y(c,s[0]);if(!(l&&e==null)){if(typeof e=="number")return s[e]&&y(c,s[e]);if(f.indexOf(e)>=0){var b=e.reference;return y(c,b)}if(s.indexOf(e)>=0)return y(c,e)}},c.showNext=function(){var e=s[0];if(!l)return c.show(0);var b=s.indexOf(l);c.show(s[b+1]||e)},c.showPrevious=function(){var e=s[s.length-1];if(!l)return c.show(e);var b=s.indexOf(l),p=s[b-1]||e;c.show(p)};var A=c.setProps;return c.setProps=function(e){d=e.overrides||d,A(e)},c.setInstances=function(e){D(!0),g.forEach(function(b){return b()}),f=e,D(!1),C(),M(),g=w(c),c.setProps({triggerTarget:a})},g=w(c),c},Ft={mouseover:"mouseenter",focusin:"focus",click:"click"};function Zt(t,n){var r=[],o=[],f=!1,s=n.target,a=Ze(n,["target"]),l=Object.assign({},a,{trigger:"manual",touch:!1}),d=Object.assign({touch:N.touch},a,{showOnCreate:!0}),g=B(t,l),h=_(g);function M(m){if(!(!m.target||f)){var c=m.target.closest(s);if(c){var T=c.getAttribute("data-tippy-trigger")||n.trigger||N.trigger;if(!c._tippy&&!(m.type==="touchstart"&&typeof d.touch=="boolean")&&!(m.type!=="touchstart"&&T.indexOf(Ft[m.type])<0)){var A=B(c,d);A&&(o=o.concat(A))}}}}function C(m,c,T,A){A===void 0&&(A=!1),m.addEventListener(c,T,A),r.push({node:m,eventType:c,handler:T,options:A})}function D(m){var c=m.reference;C(c,"touchstart",M,U),C(c,"mouseover",M),C(c,"focusin",M),C(c,"click",M)}function w(){r.forEach(function(m){var c=m.node,T=m.eventType,A=m.handler,e=m.options;c.removeEventListener(T,A,e)}),r=[]}function y(m){var c=m.destroy,T=m.enable,A=m.disable;m.destroy=function(e){e===void 0&&(e=!0),e&&o.forEach(function(b){b.destroy()}),o=[],w(),c()},m.enable=function(){T(),o.forEach(function(e){return e.enable()}),f=!1},m.disable=function(){A(),o.forEach(function(e){return e.disable()}),f=!0},D(m)}return h.forEach(y),g}var en={name:"animateFill",defaultValue:!1,fn:function(n){var r;if(!((r=n.props.render)!=null&&r.$$tippy))return{};var o=se(n.popper),f=o.box,s=o.content,a=n.props.animateFill?$t():null;return{onCreate:function(){a&&(f.insertBefore(a,f.firstElementChild),f.setAttribute("data-animatefill",""),f.style.overflow="hidden",n.setProps({arrow:!1,animation:"shift-away"}))},onMount:function(){if(a){var d=f.style.transitionDuration,g=Number(d.replace("ms",""));s.style.transitionDelay=Math.round(g/10)+"ms",a.style.transitionDuration=d,Q([a],"visible")}},onShow:function(){a&&(a.style.transitionDuration="0ms")},onHide:function(){a&&Q([a],"hidden")}}}};function $t(){var t=F();return t.className=qe,Q([t],"hidden"),t}var ye={clientX:0,clientY:0},oe=[];function at(t){var n=t.clientX,r=t.clientY;ye={clientX:n,clientY:r}}function Yt(t){t.addEventListener("mousemove",at)}function Xt(t){t.removeEventListener("mousemove",at)}var tn={name:"followCursor",defaultValue:!1,fn:function(n){var r=n.reference,o=nt(n.props.triggerTarget||r),f=!1,s=!1,a=!0,l=n.props;function d(){return n.props.followCursor==="initial"&&n.state.isVisible}function g(){o.addEventListener("mousemove",C)}function h(){o.removeEventListener("mousemove",C)}function M(){f=!0,n.setProps({getReferenceClientRect:null}),f=!1}function C(y){var m=y.target?r.contains(y.target):!0,c=n.props.followCursor,T=y.clientX,A=y.clientY,e=r.getBoundingClientRect(),b=T-e.left,p=A-e.top;(m||!n.props.interactive)&&n.setProps({getReferenceClientRect:function(){var S=r.getBoundingClientRect(),j=T,$=A;c==="initial"&&(j=S.left+b,$=S.top+p);var G=c==="horizontal"?S.top:$,x=c==="vertical"?S.right:j,V=c==="horizontal"?S.bottom:$,W=c==="vertical"?S.left:j;return{width:x-W,height:V-G,top:G,right:x,bottom:V,left:W}}})}function D(){n.props.followCursor&&(oe.push({instance:n,doc:o}),Yt(o))}function w(){oe=oe.filter(function(y){return y.instance!==n}),oe.filter(function(y){return y.doc===o}).length===0&&Xt(o)}return{onCreate:D,onDestroy:w,onBeforeUpdate:function(){l=n.props},onAfterUpdate:function(m,c){var T=c.followCursor;f||T!==void 0&&l.followCursor!==T&&(w(),T?(D(),n.state.isMounted&&!s&&!d()&&g()):(h(),M()))},onMount:function(){n.props.followCursor&&!s&&(a&&(C(ye),a=!1),d()||g())},onTrigger:function(m,c){we(c)&&(ye={clientX:c.clientX,clientY:c.clientY}),s=c.type==="focus"},onHidden:function(){n.props.followCursor&&(M(),h(),a=!0)}}}};function zt(t,n){var r;return{popperOptions:Object.assign({},t.popperOptions,{modifiers:[].concat((((r=t.popperOptions)==null?void 0:r.modifiers)||[]).filter(function(o){var f=o.name;return f!==n.name}),[n])})}}var nn={name:"inlinePositioning",defaultValue:!1,fn:function(n){var r=n.reference;function o(){return!!n.props.inlinePositioning}var f,s=-1,a=!1,l=[],d={name:"tippyInlinePositioning",enabled:!0,phase:"afterWrite",fn:function(D){var w=D.state;o()&&(l.indexOf(w.placement)!==-1&&(l=[]),f!==w.placement&&l.indexOf(w.placement)===-1&&(l.push(w.placement),n.setProps({getReferenceClientRect:function(){return g(w.placement)}})),f=w.placement)}};function g(C){return qt(et(C),r.getBoundingClientRect(),q(r.getClientRects()),s)}function h(C){a=!0,n.setProps(C),a=!1}function M(){a||h(zt(n.props,d))}return{onCreate:M,onAfterUpdate:M,onTrigger:function(D,w){if(we(w)){var y=q(n.reference.getClientRects()),m=y.find(function(T){return T.left-2<=w.clientX&&T.right+2>=w.clientX&&T.top-2<=w.clientY&&T.bottom+2>=w.clientY}),c=y.indexOf(m);s=c>-1?c:s}},onHidden:function(){s=-1}}}};function qt(t,n,r,o){if(r.length<2||t===null)return n;if(r.length===2&&o>=0&&r[0].left>r[1].right)return r[o]||n;switch(t){case"top":case"bottom":{var f=r[0],s=r[r.length-1],a=t==="top",l=f.top,d=s.bottom,g=a?f.left:s.left,h=a?f.right:s.right,M=h-g,C=d-l;return{top:l,bottom:d,left:g,right:h,width:M,height:C}}case"left":case"right":{var D=Math.min.apply(Math,r.map(function(p){return p.left})),w=Math.max.apply(Math,r.map(function(p){return p.right})),y=r.filter(function(p){return t==="left"?p.left===D:p.right===w}),m=y[0].top,c=y[y.length-1].bottom,T=D,A=w,e=A-T,b=c-m;return{top:m,bottom:c,left:T,right:A,width:e,height:b}}default:return n}}var rn={name:"sticky",defaultValue:!1,fn:function(n){var r=n.reference,o=n.popper;function f(){return n.popperInstance?n.popperInstance.state.elements.reference:r}function s(g){return n.props.sticky===!0||n.props.sticky===g}var a=null,l=null;function d(){var g=s("reference")?f().getBoundingClientRect():null,h=s("popper")?o.getBoundingClientRect():null;(g&&Xe(a,g)||h&&Xe(l,h))&&n.popperInstance&&n.popperInstance.update(),a=g,l=h,n.state.isMounted&&requestAnimationFrame(d)}return{onMount:function(){n.props.sticky&&d()}}}};function Xe(t,n){return t&&n?t.top!==n.top||t.right!==n.right||t.bottom!==n.bottom||t.left!==n.left:!0}B.setDefaultProps({render:ot});var on=B;export{en as animateFill,Qt as createSingleton,on as default,Zt as delegate,tn as followCursor,Jt as hideAll,nn as inlinePositioning,Kt as roundArrow,rn as sticky};
//# sourceMappingURL=tippy.mjs.map