(this.webpackJsonpusersunited=this.webpackJsonpusersunited||[]).push([[0],{123:function(e,t,n){e.exports=n(313)},128:function(e,t,n){},129:function(e,t,n){},130:function(e,t,n){},131:function(e,t,n){},132:function(e,t,n){},133:function(e,t,n){},134:function(e,t,n){},135:function(e,t,n){},196:function(e,t){},198:function(e,t){},313:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(53),o=n.n(l),c=(n(128),n(129),n(130),n(131),n(132),n(133),n(134),n(135),n(8)),s=n(55),i=n(22),m=n(28),u=n(54);function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function E(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(n,!0).forEach((function(t){Object(u.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var p={backgroundColor:"transparent",color:" #0a0c0f",textTransform:"uppercase",lineHeight:"52px",textDecoration:"none"},f=function(e){var t=a.useState(!1),n=Object(c.a)(t,2),r=n[0],l=n[1];function o(){e.history.push("/"),l(!r)}return a.createElement("div",{className:"header"},a.createElement("div",{className:"container"},a.createElement("div",{className:"row"},a.createElement("div",{className:"columns three"},a.createElement("nav",{role:"navigation"},a.createElement("div",{id:"menuToggle"},a.createElement("input",{type:"checkbox",checked:r,onChange:function(){return l(!r)}}),a.createElement("span",null),a.createElement("span",null),a.createElement("span",null),a.createElement("ul",{id:"menu"},a.createElement("div",{onClick:o,className:"uu-logo-mark"}),[["Home"],["About"],["Info"],["Contact"]].map((function(e){var t=Object(c.a)(e,1)[0];return a.createElement("li",{key:t,onClick:o,style:{backgroundColor:"transparent",cursor:"pointer",color:"#1EAEDB",textDecoration:"underline"}},t)}))))),a.createElement("div",{className:"uu-logo"},a.createElement(i.b,{to:"/",style:E({},p,{fontSize:20})},a.createElement("strong",null,"USERS"),"UNITED")),a.createElement("div",{className:"mobile-login-btn"},a.createElement(i.b,{to:"/join"},a.createElement("span",null,a.createElement("i",{className:"fa fa-lock"}))))),a.createElement("div",{className:"menu columns nine"},a.createElement("span",{style:E({},p,{fontSize:20})},"#BOYCOTT",a.createElement("strong",null,"FACEBOOK")),a.createElement("ul",{className:"u-pull-right"},a.createElement("li",{className:"menu-btn"},a.createElement(s.Share,{href:"http://www.facebook.com"},(function(e){var t=e.handleClick,n=e.loading;return a.createElement("button",{type:"button",disabled:n,style:p,onClick:t},a.createElement("span",null,"Share"),a.createElement("i",{className:"fa fa-share"}))}))),a.createElement("li",{className:"menu-btn"},a.createElement(i.b,{to:"/join",style:{fontSize:16,fontFamily:"'Michroma', sans-serif",lineHeight:"52px"}},a.createElement("span",null,"Login"),a.createElement("i",{className:"fa fa-lock"}))))))))},h={last1day:0,last7day:0,last30day:0,totalUser:0,totalSec:0,timeNow:0,messages:[]},b=r.a.createContext(h),g=n(32),v=n(4),y=n.n(v),N=n(34),w=n(119),k=n(120),O=n(56),S=new(function(){function e(){var t=this;Object(w.a)(this,e),this.config={networkId:"default",nodeUrl:"https://rpc.nearprotocol.com",contractName:"usersunited",walletUrl:"https://wallet.nearprotocol.com",initialBalance:1e8},this.Near=null,this.walletAccount=null,this.contract=null,this.proMethods=new Promise((function(e){return t.getNear(e)}))}return Object(k.a)(e,[{key:"addMessage",value:function(){var e=Object(N.a)(y.a.mark((function e(t){var n;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.proMethods;case 2:n=e.sent,window.FB.api("/me",{fields:["picture","name","email"]},function(){var e=Object(N.a)(y.a.mark((function e(a){var r,l,o,c,s,i;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=a.name,l=a.id,o=a.email,c=a.picture,s=c.data.url,i=(new Date).toISOString(),e.next=5,n.addMessage({text:t,date:i,id:l,name:r,email:o,photo:s});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"nearSignin",value:function(){this.walletAccount.requestSignIn(this.config.contractName,"Users United",window.location.href,window.location.href)}},{key:"monthCounters",value:function(){var e=Object(N.a)(y.a.mark((function e(){var t,n,a,r,l,o,c;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new Intl.DateTimeFormat("en",{month:"short"}),e.next=3,this.proMethods;case 3:for(n=e.sent,a=new Date,r=[],l=[],o=0;o<6;o++)r.unshift(a.toISOString().substr(0,7)),l.unshift(t.format(a)),a.setMonth(a.getMonth()-1);return e.next=10,n.monthCounters({yearMonth6:r.join(",")});case 10:return c=e.sent,e.abrupt("return",{monthLabels:l,monthCounters:c});case 12:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getRangeMessages",value:function(){var e=Object(N.a)(y.a.mark((function e(){var t,n,a,r,l,o,c,s;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.proMethods;case 2:return t=e.sent,e.next=5,t.getRangeMessages({start:0});case 5:return n=e.sent,a=n.length,r=n.reduce((function(e,t){var n=new Date(t.date),a=new Date,r=Math.abs(a.getTime()-n.getTime());return e+Math.ceil(r/1e3)}),0),l=(new Date).getTime(),o=n.filter((function(e){return l-new Date(e.date).getTime()<=864e5})).length,c=n.filter((function(e){return l-new Date(e.date).getTime()<=6048e5})).length,s=n.filter((function(e){return l-new Date(e.date).getTime()<=2592e6})).length,e.abrupt("return",{last1day:o,last7day:c,last30day:s,totalUser:a,totalSec:r,timeNow:l,messages:n});case 13:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getNear",value:function(){var e=Object(N.a)(y.a.mark((function e(t){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.connect(Object.assign({deps:{keyStore:new O.keyStores.BrowserLocalStorageKeyStore}},this.config));case 2:return this.Near=e.sent,this.walletAccount=new O.WalletAccount(this.Near,null),e.next=6,this.Near.loadContract(this.config.contractName,{viewMethods:["getRangeMessages","hasCommented","monthCounters","getProfile"],changeMethods:["addMessage"],sender:this.walletAccount.getAccountId()});case 6:this.contract=e.sent,t(this.contract);case 8:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()}]),e}()),j=function(){var e=a.useContext(b),t=e.totalSec,n=e.totalUser,r=a.useState(0),l=Object(c.a)(r,2),o=l[0],s=l[1],i=a.useState(t),m=Object(c.a)(i,2),u=m[0],d=m[1];return Object(g.a)((function(){d(u+n);var e=Math.round((u+1+t)*(.068/24/60/60)*1e6)/1e6;s(e)}),1e3),a.createElement("p",null,"We are ",a.createElement("strong",{className:"total-boycott-sum"},n)," Users United boycotting Facebook resulting in",a.createElement("strong",{className:"total-boycott-sum",id:"earning-total"}," $".concat(o," ")),"lost revenue.")},C=function(){var e=a.useContext(b),t=e.last1day,n=e.last30day,r=e.last7day;return a.createElement(a.Fragment,null,a.createElement("section",null,a.createElement("span",null,a.createElement("aside",null,"LAST"),"24 HOURS"),a.createElement("span",{className:"total-boycott-sum"},t)),a.createElement("section",null,a.createElement("span",null,a.createElement("aside",null,"LAST"),"7 DAYS"),a.createElement("span",{className:"total-boycott-sum"},r)),a.createElement("section",null,a.createElement("span",null,a.createElement("aside",null,"LAST"),"30 DAYS"),a.createElement("span",{className:"total-boycott-sum"},n)))},x=n(121),M=function(){var e=r.a.useState(null),t=Object(c.a)(e,2),n=t[0],a=t[1];return r.a.useMemo((function(){return S.monthCounters()}),[]).then(a),n?r.a.createElement(x.a,{options:{legend:{display:!1,fontColor:"rgb(255, 99, 132)"},scales:{yAxes:[{ticks:{display:!1,beginAtZero:!0}}]}},data:{labels:n.monthLabels,datasets:[{backgroundColor:"rgba(24, 119, 242,.2)",borderColor:"rgba(24, 119, 242)",data:n.monthCounters,pointBackgroundColor:"#000",pointRadius:4,lineTension:0}]}}):null},D=function(e){var t=e.history,n=a.useContext(b);var r=a.useState(0),l=Object(c.a)(r,2),o=l[0],s=l[1];Object(g.a)((function(){return s(o+1)}),1e3);var m=n.messages.map((function(e,t){var n=t+1,r=new Date(e.date),l=new Date,c=Math.abs(l.getTime()-r.getTime()),s=Math.ceil(c/1e3)+o,m=Math.ceil(c/864e5);return a.createElement("tr",{key:n},a.createElement("td",null,a.createElement("div",{className:"avatar"},a.createElement("img",{src:e.photo,alt:"img"}))),a.createElement("td",null,a.createElement("span",null,a.createElement(i.b,{className:"user-num",to:"/user#".concat(n)},"#",n),e.name," is boycotting Facebook because ",e.text)),a.createElement("td",null,a.createElement("span",{className:"u-pull-right"},a.createElement("label",{className:"user-num"},m),"Days")),a.createElement("td",null,a.createElement("span",{className:"u-pull-right"},a.createElement("label",{className:"user-sum"},"$",Math.round(s*(.068/24/60/60)*1e6)/1e6),"Boycott Value")))}));return a.createElement("div",{className:"log"},a.createElement("div",{className:"container"},a.createElement("div",{className:"row"},a.createElement("div",{className:"columns three sidebar"},a.createElement("div",{className:"sidebar-content"},a.createElement("div",{className:"campaign-avatar"},a.createElement("div",{className:"facebook-logo"})),a.createElement(j,null),a.createElement(M,null),a.createElement(C,null),a.createElement("button",{onClick:function(){t.push("join")},id:"joinBtn"},"Join Boycott"))),a.createElement("div",{className:"columns nine ledger"},a.createElement("table",{className:"u-full-width"},a.createElement("tbody",{id:"near-tbody"},m))))))},T=n(57),A=n.n(T),F=function(e){var t=window.location.hash,n=a.useState(""),r=Object(c.a)(n,2),l=r[0],o=r[1];function s(){console.log(l),S.addMessage(l)}return a.createElement(a.Fragment,null,a.createElement("div",{className:"how-it-works"},a.createElement("div",{className:"container"},a.createElement("div",{className:"row"},a.createElement("div",{className:"columns twelve"},a.createElement("h2",null,"How it works"))),a.createElement("div",{className:"row"},a.createElement("div",{className:"columns four"},a.createElement("h5",null,"Connect Facebook"),a.createElement("div",{className:"steps-img"}),a.createElement("p",null,"We're only as strong as our newest member")),a.createElement("div",{className:"columns four"},a.createElement("h5",null,"Stop using it"),a.createElement("div",{className:"steps-img"}),a.createElement("p",null,"We're only as strong as our newest member")),a.createElement("div",{className:"columns four"},a.createElement("h5",null,"Spread the word"),a.createElement("div",{className:"steps-img"}),a.createElement("p",null,"We're only as strong as our newest member"))))),a.createElement("div",{className:"log"},a.createElement("div",{className:"container"},a.createElement("div",{className:"row"},a.createElement("div",{className:"columns three sidebar"},a.createElement("div",{className:"sidebar-content"},a.createElement("div",{className:"campaign-avatar"},a.createElement("div",{className:"facebook-logo"})),a.createElement("h5",null,"Join Boycott"),a.createElement(j,null),a.createElement(M,null),a.createElement("ul",{className:"sidebar-menu",role:"tablist"},[["#facebook","Connect"],["#near","Secure"],["#post","Post"]].map((function(e,n){var r=Object(c.a)(e,2),l=r[0],o=r[1];return a.createElement("li",{key:n},a.createElement("a",{href:l,role:"tab","aria-selected":t===l||0===n&&""===t},o," ",a.createElement("span",null,n+1)))}))))),a.createElement(A.a,{id:"facebook"},a.createElement("div",{className:"columns nine profile-container"},a.createElement("div",{className:"profile-content"},a.createElement("span",{className:"step-number"},"Step One"),a.createElement("h3",null,"Connect Your Account"),a.createElement("p",null,"Connect your Facebook account just like you would with any other app. However, instead of mining your data, Users United will only access your name, avatar and last login to track your boycott."),a.createElement("button",{className:"secondary-btn",onClick:function(){window.FB.login((function(){return e.history.push("#near")}))}},"Log In With Facebook"),a.createElement("aside",null,a.createElement("span",null,a.createElement("i",{className:"fa fa-asterisk"}),'Yes, the irony of needing to connect Facebook in order boycott Facebook is not lost on us. But as Sun Tzu said, "The opportunity of defeating the enemy is provided by the enemy." \xaf\\_(\u30c4)_/\xaf'))))),a.createElement(A.a,{id:"near"},a.createElement("div",{className:"columns nine profile-container"},a.createElement("div",{className:"profile-content"},a.createElement("span",{className:"step-number"},"Step Two"),a.createElement("h3",null,"Secure Your Account"),a.createElement("p",null,"The future of the web is decentralized. You boycott (and any data associated with it) is stored on a censorship and tamper resistent blockchain powered by the NEAR Protocol, To continue, you'll need to create a username and verify your phone number."),a.createElement("button",{className:"secondary-btn",onClick:function(){S.nearSignin()}},"Secure Your Account"),a.createElement("aside",null,a.createElement("span",null,a.createElement("i",{className:"fa fa-asterisk"}),"NEAR is a sharded, developer-friendly, proof-of-stake public blockchain.",a.createElement("a",{href:"#learnmore"},"Learn more")))))),a.createElement(A.a,{id:"post"},a.createElement("div",{className:"columns nine profile-container"},a.createElement("div",{className:"profile-content"},a.createElement("span",{className:"step-number"},"Step Three"),a.createElement("h3",null,"Post Your Boycott"),a.createElement("p",null,"What are your reasons for boycotting Facebook? Tired of the lack of privacy, disinformation, fake news, your uncle's rants? There's no end, really, so be sure to tell Zuck why you're boycotting Facebook."),a.createElement("input",{className:"u-full-width",type:"text",value:l,onChange:function(e){return o(e.currentTarget.value)},maxLength:50,id:"message",placeholder:"I am boycotting facebook because...",style:{flex:1},onKeyUp:function(e){13===e.keyCode&&s()}}),a.createElement("button",{className:"secondary-btn",onClick:s},"Post Boycott"),a.createElement("aside",null,a.createElement("span",null,a.createElement("i",{className:"fa fa-asterisk"}),"Your message will be formatted as ",a.createElement("strong",null,"{Your Name}")," is boycotting Facebook because"," ",a.createElement("strong",null,"{your reason}"),". Surely there is a better way of handling this, but for now it works (fingers crossed).")))))))))},P=function(e){var t=e.value,n=a.useState(0),r=Object(c.a)(n,2),l=r[0],o=r[1];return Object(g.a)((function(){return o(l+1)}),1e3),a.createElement(a.Fragment,null,Math.round(1e6*(t+.068/24/60/60*l))/1e6)};function B(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}var U=function(e){var t=a.useContext(b).messages,n=window.location.hash,r=a.useMemo((function(){var e,a=Number(n.substring(1));if(t.length<1)return null;e=a>0?t[a-1]:t[0];var r=new Date(e.date),l=new Date,o=Math.abs(l.getTime()-r.getTime()),c=Math.ceil(o/864e5);return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?B(n,!0).forEach((function(t){Object(u.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):B(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e,{totalCost:Math.round(o/1e3*(.068/24/60/60)*1e6)/1e6,diffDays:c,userNo:a})}),[n,t]);return r?a.createElement(a.Fragment,null,a.createElement("div",{className:"how-it-works"},a.createElement("div",{className:"container"},a.createElement("div",{className:"row"},a.createElement("div",{className:"columns twelve"},a.createElement("h2",null,"How it works"))),a.createElement("div",{className:"row"},a.createElement("div",{className:"columns four"},a.createElement("h5",null,"Connect Facebook"),a.createElement("div",{className:"steps-img"}),a.createElement("p",null,"We're only as strong as our newest member")),a.createElement("div",{className:"columns four"},a.createElement("h5",null,"Stop using it"),a.createElement("div",{className:"steps-img"}),a.createElement("p",null,"We're only as strong as our newest member")),a.createElement("div",{className:"columns four"},a.createElement("h5",null,"Spread the word"),a.createElement("div",{className:"steps-img"}),a.createElement("p",null,"We're only as strong as our newest member"))))),a.createElement("div",{className:"log"},a.createElement("div",{className:"container"},a.createElement("div",{className:"row"},a.createElement("div",{className:"columns three sidebar"},a.createElement("div",{className:"sidebar-content"},a.createElement("div",{className:"campaign-avatar"},a.createElement("div",{className:"facebook-logo"})),a.createElement(j,null),a.createElement(M,null),a.createElement(C,null),a.createElement("button",{onClick:function(){return e.history.push("/")}},"Leaderboard"))),a.createElement("div",{id:"profile",className:"columns nine profile-container"},a.createElement("div",{className:"profile-content"},a.createElement("div",{className:"profile-header"},a.createElement("div",{className:"avatar"},a.createElement("img",{src:r.photo,alt:"img",style:{width:"inherit"}})),a.createElement("section",null,a.createElement("h3",null,r.name),a.createElement("a",{href:"https://facebook.com/".concat(r.id),className:"url-address"},"https://facebook.com/",r.id))),a.createElement("section",{className:"user-stats"},a.createElement("div",null,a.createElement("h3",null,a.createElement(i.b,{to:"/#".concat(r.userNo)},"#",r.userNo)),a.createElement("span",null,"User Number")),a.createElement("div",null,a.createElement("h3",null,r.diffDays),a.createElement("span",null,"Days Boycotting")),a.createElement("div",null,a.createElement("h3",null,"$",a.createElement(P,{value:r.totalCost})),a.createElement("span",null,"Boycott Value"))),a.createElement("p",null,"I am boycotting Facebook until ",r.text))))))):null},I=n(77),W=n.n(I);W.a.setAppElement("#root");var L={overlay:{position:"fixed",top:0,left:0,right:0,bottom:0,background:"rgba(0,0,0,0.8)",display:"flex",justifyContent:"center",alignItems:"center",zIndex:10001},content:{position:"relative",top:0,left:0,right:0,bottom:0,border:0,padding:0,backgroundColor:"#fff",maxWidth:"480px",maxHeight:"100vh",borderRadius:"4px",overflowY:"auto",boxSizing:"border-box"}},Y=function(e){var t=r.a.useState(!0),n=Object(c.a)(t,2),a=n[0],l=n[1],o=function(){return l(!1)};return r.a.createElement(W.a,{isOpen:a,onAfterOpen:function(){return l(!0)},onRequestClose:o,style:L,contentLabel:"Opening Modal",closeTimeoutMS:300},r.a.createElement("header",{className:"modal__header"},r.a.createElement("h2",{className:"modal__title"},"Enough,",r.a.createElement("br",null),"Zuck"),r.a.createElement("button",{className:"modal__close",onClick:o})),r.a.createElement("main",{className:"modal__content"},r.a.createElement("p",null,"Facebook makes billions every year from our personal data. What do we get?"),r.a.createElement("p",null,"A like? Disinformation campaigns? Misuse of our personal data? Another rant from Uncle Joe?"),r.a.createElement("p",null,"We demand more for using Facebook.")),r.a.createElement("footer",{className:"modal__footer"},r.a.createElement("button",{onClick:function(){e.history.push("/join"),l(!1)}},"Join Boycott"),r.a.createElement("button",{className:"secondary-btn",onClick:o},"Not Now")))},_=function(){var e=r.a.useState(h),t=Object(c.a)(e,2),n=t[0],a=t[1];return r.a.useEffect((function(){S.getRangeMessages().then(a)}),[]),r.a.createElement(b.Provider,{value:n},r.a.createElement(s.FacebookProvider,{appId:"384002515644565"},r.a.createElement(i.a,{basename:"/usersunited"},r.a.createElement(m.a,{component:f}),r.a.createElement(m.c,null,r.a.createElement(m.a,{path:"/",exact:!0,component:D}),r.a.createElement(m.a,{path:"/join",component:F}),r.a.createElement(m.a,{path:"/user",component:U})),r.a.createElement(m.a,{component:Y}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(_,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[123,1,2]]]);
//# sourceMappingURL=main.09f2ac56.chunk.js.map