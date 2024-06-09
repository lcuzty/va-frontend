(self["webpackChunkvolunteer_aid"]=self["webpackChunkvolunteer_aid"]||[]).push([[623],{2023:function(t,e,r){var i;
/**
 * [js-sha256]{@link https://github.com/emn178/js-sha256}
 *
 * @version 0.10.1
 * @author Chen, Yi-Cyuan [emn178@gmail.com]
 * @copyright Chen, Yi-Cyuan 2014-2023
 * @license MIT
 */(function(){"use strict";var e="input is invalid type",o="object"===typeof window,a=o?window:{};a.JS_SHA256_NO_WINDOW&&(o=!1);var s=!o&&"object"===typeof self,n=!a.JS_SHA256_NO_NODE_JS&&"object"===typeof process&&process.versions&&process.versions.node;n?a=r.g:s&&(a=self);var l=!a.JS_SHA256_NO_COMMON_JS&&t.exports,g=r.amdO,d=!a.JS_SHA256_NO_ARRAY_BUFFER&&"undefined"!==typeof ArrayBuffer,h="0123456789abcdef".split(""),c=[-2147483648,8388608,32768,128],u=[24,16,8,0],m=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298],p=["hex","array","digest","arrayBuffer"],w=[];!a.JS_SHA256_NO_NODE_JS&&Array.isArray||(Array.isArray=function(t){return"[object Array]"===Object.prototype.toString.call(t)}),!d||!a.JS_SHA256_NO_ARRAY_BUFFER_IS_VIEW&&ArrayBuffer.isView||(ArrayBuffer.isView=function(t){return"object"===typeof t&&t.buffer&&t.buffer.constructor===ArrayBuffer});var f=function(t,e){return function(r){return new b(e,!0).update(r)[t]()}},y=function(t){var e=f("hex",t);n&&(e=F(e,t)),e.create=function(){return new b(t)},e.update=function(t){return e.create().update(t)};for(var r=0;r<p.length;++r){var i=p[r];e[i]=f(i,t)}return e},F=function(t,i){var o,s=r(6127),n=r(1371).Buffer,l=i?"sha224":"sha256";o=n.from&&!a.JS_SHA256_NO_BUFFER_FROM?n.from:function(t){return new n(t)};var g=function(r){if("string"===typeof r)return s.createHash(l).update(r,"utf8").digest("hex");if(null===r||void 0===r)throw new Error(e);return r.constructor===ArrayBuffer&&(r=new Uint8Array(r)),Array.isArray(r)||ArrayBuffer.isView(r)||r.constructor===n?s.createHash(l).update(o(r)).digest("hex"):t(r)};return g},x=function(t,e){return function(r,i){return new k(r,e,!0).update(i)[t]()}},v=function(t){var e=x("hex",t);e.create=function(e){return new k(e,t)},e.update=function(t,r){return e.create(t).update(r)};for(var r=0;r<p.length;++r){var i=p[r];e[i]=x(i,t)}return e};function b(t,e){e?(w[0]=w[16]=w[1]=w[2]=w[3]=w[4]=w[5]=w[6]=w[7]=w[8]=w[9]=w[10]=w[11]=w[12]=w[13]=w[14]=w[15]=0,this.blocks=w):this.blocks=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],t?(this.h0=3238371032,this.h1=914150663,this.h2=812702999,this.h3=4144912697,this.h4=4290775857,this.h5=1750603025,this.h6=1694076839,this.h7=3204075428):(this.h0=1779033703,this.h1=3144134277,this.h2=1013904242,this.h3=2773480762,this.h4=1359893119,this.h5=2600822924,this.h6=528734635,this.h7=1541459225),this.block=this.start=this.bytes=this.hBytes=0,this.finalized=this.hashed=!1,this.first=!0,this.is224=t}function k(t,r,i){var o,a=typeof t;if("string"===a){var s,n=[],l=t.length,g=0;for(o=0;o<l;++o)s=t.charCodeAt(o),s<128?n[g++]=s:s<2048?(n[g++]=192|s>>6,n[g++]=128|63&s):s<55296||s>=57344?(n[g++]=224|s>>12,n[g++]=128|s>>6&63,n[g++]=128|63&s):(s=65536+((1023&s)<<10|1023&t.charCodeAt(++o)),n[g++]=240|s>>18,n[g++]=128|s>>12&63,n[g++]=128|s>>6&63,n[g++]=128|63&s);t=n}else{if("object"!==a)throw new Error(e);if(null===t)throw new Error(e);if(d&&t.constructor===ArrayBuffer)t=new Uint8Array(t);else if(!Array.isArray(t)&&(!d||!ArrayBuffer.isView(t)))throw new Error(e)}t.length>64&&(t=new b(r,!0).update(t).array());var h=[],c=[];for(o=0;o<64;++o){var u=t[o]||0;h[o]=92^u,c[o]=54^u}b.call(this,r,i),this.update(c),this.oKeyPad=h,this.inner=!0,this.sharedMemory=i}b.prototype.update=function(t){if(!this.finalized){var r,i=typeof t;if("string"!==i){if("object"!==i)throw new Error(e);if(null===t)throw new Error(e);if(d&&t.constructor===ArrayBuffer)t=new Uint8Array(t);else if(!Array.isArray(t)&&(!d||!ArrayBuffer.isView(t)))throw new Error(e);r=!0}var o,a,s=0,n=t.length,l=this.blocks;while(s<n){if(this.hashed&&(this.hashed=!1,l[0]=this.block,l[16]=l[1]=l[2]=l[3]=l[4]=l[5]=l[6]=l[7]=l[8]=l[9]=l[10]=l[11]=l[12]=l[13]=l[14]=l[15]=0),r)for(a=this.start;s<n&&a<64;++s)l[a>>2]|=t[s]<<u[3&a++];else for(a=this.start;s<n&&a<64;++s)o=t.charCodeAt(s),o<128?l[a>>2]|=o<<u[3&a++]:o<2048?(l[a>>2]|=(192|o>>6)<<u[3&a++],l[a>>2]|=(128|63&o)<<u[3&a++]):o<55296||o>=57344?(l[a>>2]|=(224|o>>12)<<u[3&a++],l[a>>2]|=(128|o>>6&63)<<u[3&a++],l[a>>2]|=(128|63&o)<<u[3&a++]):(o=65536+((1023&o)<<10|1023&t.charCodeAt(++s)),l[a>>2]|=(240|o>>18)<<u[3&a++],l[a>>2]|=(128|o>>12&63)<<u[3&a++],l[a>>2]|=(128|o>>6&63)<<u[3&a++],l[a>>2]|=(128|63&o)<<u[3&a++]);this.lastByteIndex=a,this.bytes+=a-this.start,a>=64?(this.block=l[16],this.start=a-64,this.hash(),this.hashed=!0):this.start=a}return this.bytes>4294967295&&(this.hBytes+=this.bytes/4294967296<<0,this.bytes=this.bytes%4294967296),this}},b.prototype.finalize=function(){if(!this.finalized){this.finalized=!0;var t=this.blocks,e=this.lastByteIndex;t[16]=this.block,t[e>>2]|=c[3&e],this.block=t[16],e>=56&&(this.hashed||this.hash(),t[0]=this.block,t[16]=t[1]=t[2]=t[3]=t[4]=t[5]=t[6]=t[7]=t[8]=t[9]=t[10]=t[11]=t[12]=t[13]=t[14]=t[15]=0),t[14]=this.hBytes<<3|this.bytes>>>29,t[15]=this.bytes<<3,this.hash()}},b.prototype.hash=function(){var t,e,r,i,o,a,s,n,l,g,d,h=this.h0,c=this.h1,u=this.h2,p=this.h3,w=this.h4,f=this.h5,y=this.h6,F=this.h7,x=this.blocks;for(t=16;t<64;++t)o=x[t-15],e=(o>>>7|o<<25)^(o>>>18|o<<14)^o>>>3,o=x[t-2],r=(o>>>17|o<<15)^(o>>>19|o<<13)^o>>>10,x[t]=x[t-16]+e+x[t-7]+r<<0;for(d=c&u,t=0;t<64;t+=4)this.first?(this.is224?(n=300032,o=x[0]-1413257819,F=o-150054599<<0,p=o+24177077<<0):(n=704751109,o=x[0]-210244248,F=o-1521486534<<0,p=o+143694565<<0),this.first=!1):(e=(h>>>2|h<<30)^(h>>>13|h<<19)^(h>>>22|h<<10),r=(w>>>6|w<<26)^(w>>>11|w<<21)^(w>>>25|w<<7),n=h&c,i=n^h&u^d,s=w&f^~w&y,o=F+r+s+m[t]+x[t],a=e+i,F=p+o<<0,p=o+a<<0),e=(p>>>2|p<<30)^(p>>>13|p<<19)^(p>>>22|p<<10),r=(F>>>6|F<<26)^(F>>>11|F<<21)^(F>>>25|F<<7),l=p&h,i=l^p&c^n,s=F&w^~F&f,o=y+r+s+m[t+1]+x[t+1],a=e+i,y=u+o<<0,u=o+a<<0,e=(u>>>2|u<<30)^(u>>>13|u<<19)^(u>>>22|u<<10),r=(y>>>6|y<<26)^(y>>>11|y<<21)^(y>>>25|y<<7),g=u&p,i=g^u&h^l,s=y&F^~y&w,o=f+r+s+m[t+2]+x[t+2],a=e+i,f=c+o<<0,c=o+a<<0,e=(c>>>2|c<<30)^(c>>>13|c<<19)^(c>>>22|c<<10),r=(f>>>6|f<<26)^(f>>>11|f<<21)^(f>>>25|f<<7),d=c&u,i=d^c&p^g,s=f&y^~f&F,o=w+r+s+m[t+3]+x[t+3],a=e+i,w=h+o<<0,h=o+a<<0,this.chromeBugWorkAround=!0;this.h0=this.h0+h<<0,this.h1=this.h1+c<<0,this.h2=this.h2+u<<0,this.h3=this.h3+p<<0,this.h4=this.h4+w<<0,this.h5=this.h5+f<<0,this.h6=this.h6+y<<0,this.h7=this.h7+F<<0},b.prototype.hex=function(){this.finalize();var t=this.h0,e=this.h1,r=this.h2,i=this.h3,o=this.h4,a=this.h5,s=this.h6,n=this.h7,l=h[t>>28&15]+h[t>>24&15]+h[t>>20&15]+h[t>>16&15]+h[t>>12&15]+h[t>>8&15]+h[t>>4&15]+h[15&t]+h[e>>28&15]+h[e>>24&15]+h[e>>20&15]+h[e>>16&15]+h[e>>12&15]+h[e>>8&15]+h[e>>4&15]+h[15&e]+h[r>>28&15]+h[r>>24&15]+h[r>>20&15]+h[r>>16&15]+h[r>>12&15]+h[r>>8&15]+h[r>>4&15]+h[15&r]+h[i>>28&15]+h[i>>24&15]+h[i>>20&15]+h[i>>16&15]+h[i>>12&15]+h[i>>8&15]+h[i>>4&15]+h[15&i]+h[o>>28&15]+h[o>>24&15]+h[o>>20&15]+h[o>>16&15]+h[o>>12&15]+h[o>>8&15]+h[o>>4&15]+h[15&o]+h[a>>28&15]+h[a>>24&15]+h[a>>20&15]+h[a>>16&15]+h[a>>12&15]+h[a>>8&15]+h[a>>4&15]+h[15&a]+h[s>>28&15]+h[s>>24&15]+h[s>>20&15]+h[s>>16&15]+h[s>>12&15]+h[s>>8&15]+h[s>>4&15]+h[15&s];return this.is224||(l+=h[n>>28&15]+h[n>>24&15]+h[n>>20&15]+h[n>>16&15]+h[n>>12&15]+h[n>>8&15]+h[n>>4&15]+h[15&n]),l},b.prototype.toString=b.prototype.hex,b.prototype.digest=function(){this.finalize();var t=this.h0,e=this.h1,r=this.h2,i=this.h3,o=this.h4,a=this.h5,s=this.h6,n=this.h7,l=[t>>24&255,t>>16&255,t>>8&255,255&t,e>>24&255,e>>16&255,e>>8&255,255&e,r>>24&255,r>>16&255,r>>8&255,255&r,i>>24&255,i>>16&255,i>>8&255,255&i,o>>24&255,o>>16&255,o>>8&255,255&o,a>>24&255,a>>16&255,a>>8&255,255&a,s>>24&255,s>>16&255,s>>8&255,255&s];return this.is224||l.push(n>>24&255,n>>16&255,n>>8&255,255&n),l},b.prototype.array=b.prototype.digest,b.prototype.arrayBuffer=function(){this.finalize();var t=new ArrayBuffer(this.is224?28:32),e=new DataView(t);return e.setUint32(0,this.h0),e.setUint32(4,this.h1),e.setUint32(8,this.h2),e.setUint32(12,this.h3),e.setUint32(16,this.h4),e.setUint32(20,this.h5),e.setUint32(24,this.h6),this.is224||e.setUint32(28,this.h7),t},k.prototype=new b,k.prototype.finalize=function(){if(b.prototype.finalize.call(this),this.inner){this.inner=!1;var t=this.array();b.call(this,this.is224,this.sharedMemory),this.update(this.oKeyPad),this.update(t),b.prototype.finalize.call(this)}};var _=y();_.sha256=_,_.sha224=y(!0),_.sha256.hmac=v(),_.sha224.hmac=v(!0),l?t.exports=_:(a.sha256=_.sha256,a.sha224=_.sha224,g&&(i=function(){return _}.call(_,r,_,t),void 0===i||(t.exports=i)))})()},4623:function(t,e,r){"use strict";r.r(e),r.d(e,{default:function(){return _t}});var i=r(6252),o=r(3577);const a={style:{width:"100vw",height:"100vh","padding-left":"50vw","padding-top":"50vh"}},s={style:{width:"450px",height:"500px",transform:"translate(-50%,-50%)",border:"1px solid var(--color-neutral-3)","border-radius":"10px",padding:"48px 40px 36px","text-align":"center",overflow:"hidden"}},n={key:1,style:{width:"100%",height:"100%",position:"absolute","background-color":"var(--color-neutral-1)","z-index":"5000",left:"0",top:"0",opacity:"0.2"}},l={key:2,class:"登录窗口"},g=(0,i._)("p",{style:{"font-size":"20px",color:"var(--color-neutral-5)"}},"志愿助手",-1),d={style:{"margin-top":"16px","font-size":"24px",color:"var(--color-neutral-10)"}},h={style:{"margin-top":"7px",color:"var(--color-neutral-10)"}},c={style:{width:"100%","margin-top":"24px",position:"relative"}},u={key:0,style:{color:"red","text-align":"left","margin-bottom":"5px"}},m={key:3,class:"注册窗口-输入邮箱"},p=(0,i._)("p",{style:{"font-size":"20px",color:"var(--color-neutral-5)"}},"志愿助手",-1),w={style:{"margin-top":"16px","font-size":"24px",color:"var(--color-neutral-10)"}},f={style:{"margin-top":"7px",color:"var(--color-neutral-10)"}},y={style:{width:"100%","margin-top":"24px",position:"relative"}},F={key:0,style:{color:"red","text-align":"left",transform:"translateY(-10px)","font-size":"14px"}},x={key:4,class:"注册窗口-输入姓名"},v=(0,i._)("p",{style:{"font-size":"20px",color:"var(--color-neutral-5)"}},"志愿助手",-1),b={style:{"margin-top":"16px","font-size":"24px",color:"var(--color-neutral-10)"}},k={style:{"margin-top":"7px",color:"var(--color-neutral-10)"}},_={style:{width:"100%","margin-top":"24px",position:"relative"}},T={key:0,style:{color:"red","text-align":"left",transform:"translateY(-10px)","font-size":"14px"}},S={key:5,class:"注册窗口-选择高考省份"},z=(0,i._)("p",{style:{"font-size":"20px",color:"var(--color-neutral-5)"}},"志愿助手",-1),P={style:{"margin-top":"16px","font-size":"24px",color:"var(--color-neutral-10)"}},j=(0,i._)("p",{style:{"margin-top":"7px",color:"var(--color-neutral-10)"}},"请选择高考省份",-1),A={style:{width:"100%","margin-top":"24px",position:"relative"}},C={key:0,style:{color:"red","text-align":"left",transform:"translateY(-10px)","font-size":"14px"}},U={key:6,class:"注册窗口-选择选科类型"},V=(0,i._)("p",{style:{"font-size":"20px",color:"var(--color-neutral-5)"}},"志愿助手",-1),N={style:{"margin-top":"16px","font-size":"24px",color:"var(--color-neutral-10)"}},W=(0,i._)("p",{style:{"margin-top":"7px",color:"var(--color-neutral-10)"}},"请选择选科类型",-1),R={style:{width:"100%","margin-top":"24px",position:"relative"}},D={key:0,style:{color:"var(--color-neutral-10)",padding:"10px 10px","border-radius":"10px","background-color":"var(--color-neutral-2)","text-align":"left","margin-bottom":"13px"}},O=(0,i._)("p",{style:{"font-weight":"bold","margin-bottom":"5px"}},"请选择你的科目",-1),q={key:1,style:{color:"red","text-align":"left",transform:"translateY(-10px)","font-size":"14px"}},B={key:7,class:"注册窗口-输入成绩"},E=(0,i._)("p",{style:{"font-size":"20px",color:"var(--color-neutral-5)"}},"志愿助手",-1),J={style:{"margin-top":"16px","font-size":"24px",color:"var(--color-neutral-10)"}},I=(0,i._)("p",{style:{"margin-top":"7px",color:"var(--color-neutral-10)"}},"请输入高考成绩",-1),M={style:{width:"100%","margin-top":"24px",position:"relative"}},H={key:0,style:{color:"red","text-align":"left",transform:"translateY(-10px)","font-size":"14px"}},Y={key:8,class:"注册窗口-选择身体受限情况"},L=(0,i._)("p",{style:{"font-size":"20px",color:"var(--color-neutral-5)"}},"志愿助手",-1),K={style:{"margin-top":"16px","font-size":"24px",color:"var(--color-neutral-10)"}},Z=(0,i._)("p",{style:{"margin-top":"7px",color:"var(--color-neutral-10)"}},"您是否有身体受限情况",-1),G={style:{width:"100%","margin-top":"24px",position:"relative","text-align":"left","font-size":"22px"}},Q=(0,i._)("br",null,null,-1),X={key:0,style:{color:"red","text-align":"left",transform:"translateY(-10px)","font-size":"14px"}},$={key:9,class:"注册窗口-设置登录密码"},tt=(0,i._)("p",{style:{"font-size":"20px",color:"var(--color-neutral-5)"}},"志愿助手",-1),et={style:{"margin-top":"16px","font-size":"24px",color:"var(--color-neutral-10)"}},rt=(0,i._)("p",{style:{"margin-top":"7px",color:"var(--color-neutral-10)"}},"设置登录密码",-1),it={style:{width:"100%","margin-top":"24px",position:"relative","text-align":"left","font-size":"22px",color:"var(--color-neutral-10)"}},ot={key:0,style:{color:"red","text-align":"left",transform:"translateY(-10px)","font-size":"14px"}},at={key:10,class:"注册窗口-完成注册窗口"},st=(0,i._)("p",{style:{"font-size":"20px",color:"var(--color-neutral-5)"}},"志愿助手",-1),nt={style:{"margin-top":"16px","font-size":"24px",color:"var(--color-neutral-10)"}},lt={style:{"margin-top":"7px",color:"var(--color-neutral-10)"}},gt={style:{width:"100%","margin-top":"24px",position:"relative","text-align":"left",color:"var(--color-neutral-10)"}},dt={key:0,style:{color:"red","text-align":"left",transform:"translateY(-10px)","font-size":"14px"}};function ht(t,e,r,ht,ct,ut){const mt=(0,i.up)("v-progress-linear"),pt=(0,i.up)("v-text-field"),wt=(0,i.up)("a-link"),ft=(0,i.up)("v-btn"),yt=(0,i.up)("v-select"),Ft=(0,i.up)("a-checkbox"),xt=(0,i.up)("a-checkbox-group");return(0,i.wg)(),(0,i.iD)("div",a,[(0,i._)("div",s,[ct.data.loginForm.loading?((0,i.wg)(),(0,i.j4)(mt,{key:0,style:{width:"100%",position:"absolute",top:"0",color:"var(--color-neutral-10)"},indeterminate:""})):(0,i.kq)("",!0),ct.data.loginForm.loading?((0,i.wg)(),(0,i.iD)("div",n)):(0,i.kq)("",!0),0==ct.data.loginForm.currentPage?((0,i.wg)(),(0,i.iD)("div",l,[g,(0,i._)("p",d,(0,o.zw)(0==ct.data.loginForm.currentPage?"登录":"注册"),1),(0,i._)("p",h,(0,o.zw)(ct.data.loginForm.subTitle),1),(0,i._)("div",c,[(0,i.Wm)(pt,{modelValue:ct.data.loginForm.loginEmail,"onUpdate:modelValue":e[0]||(e[0]=t=>ct.data.loginForm.loginEmail=t),variant:"outlined",label:"电子邮件地址",style:{color:"var(--color-neutral-10)"}},null,8,["modelValue"]),(0,i.Wm)(pt,{modelValue:ct.data.loginForm.loginPassword,"onUpdate:modelValue":e[1]||(e[1]=t=>ct.data.loginForm.loginPassword=t),type:"password",variant:"outlined",label:"登录密码",style:{color:"var(--color-neutral-10)"}},null,8,["modelValue"]),""!=ct.data.loginForm.loginWarningText?((0,i.wg)(),(0,i.iD)("p",u,(0,o.zw)(ct.data.loginForm.loginWarningText),1)):(0,i.kq)("",!0)]),(0,i.Wm)(wt,{style:{"background-color":"var(--color-neutral-1)",color:"var(--color-neutral-10)",padding:"0 0",float:"left"},onClick:ut.backToHomePage},{default:(0,i.w5)((()=>[(0,i.Uk)("暂不登录")])),_:1},8,["onClick"]),(0,i.Wm)(ft,{style:{position:"absolute",right:"40px",bottom:"64px","background-color":"rgb(0,120,215)",color:"white"},onClick:ut.login},{default:(0,i.w5)((()=>[(0,i.Uk)("登录")])),_:1},8,["onClick"]),(0,i.Wm)(ft,{variant:"text",style:(0,o.j5)([{position:"absolute",left:"30px",bottom:"64px","background-color":"var(--color-neutral-1)",padding:"0 10px"},{color:r.appData.isDarkMode?"white":"rgb(0,120,215)"}]),onClick:ut.changeToRegisterPage},{default:(0,i.w5)((()=>[(0,i.Uk)("创建账号")])),_:1},8,["style","onClick"])])):(0,i.kq)("",!0),1==ct.data.loginForm.currentPage?((0,i.wg)(),(0,i.iD)("div",m,[p,(0,i._)("p",w,(0,o.zw)(0==ct.data.loginForm.currentPage?"登录":"创建账号"),1),(0,i._)("p",f,(0,o.zw)(ct.data.loginForm.subTitle),1),(0,i._)("div",y,[(0,i.Wm)(pt,{modelValue:ct.data.loginForm.register.email,"onUpdate:modelValue":e[2]||(e[2]=t=>ct.data.loginForm.register.email=t),variant:"outlined",label:"电子邮件地址",style:{color:"var(--color-neutral-10)"}},null,8,["modelValue"]),""!=ct.data.loginForm.register.warningText?((0,i.wg)(),(0,i.iD)("p",F,(0,o.zw)(ct.data.loginForm.register.warningText),1)):(0,i.kq)("",!0)]),(0,i.Wm)(ft,{style:{position:"absolute",right:"40px",bottom:"64px","background-color":"rgb(0,120,215)",color:"white"},onClick:ut.registerChangeToNextPage_inputName},{default:(0,i.w5)((()=>[(0,i.Uk)("下一步")])),_:1},8,["onClick"])])):(0,i.kq)("",!0),2==ct.data.loginForm.currentPage?((0,i.wg)(),(0,i.iD)("div",x,[v,(0,i._)("p",b,(0,o.zw)(0==ct.data.loginForm.currentPage?"登录":"创建账号"),1),(0,i._)("p",k,(0,o.zw)(ct.data.loginForm.subTitle),1),(0,i._)("div",_,[(0,i.Wm)(pt,{modelValue:ct.data.loginForm.register.name,"onUpdate:modelValue":e[3]||(e[3]=t=>ct.data.loginForm.register.name=t),variant:"outlined",label:"姓名",style:{color:"var(--color-neutral-10)"}},null,8,["modelValue"]),""!=ct.data.loginForm.register.warningText?((0,i.wg)(),(0,i.iD)("p",T,(0,o.zw)(ct.data.loginForm.register.warningText),1)):(0,i.kq)("",!0)]),(0,i.Wm)(ft,{style:{position:"absolute",right:"40px",bottom:"64px","background-color":"rgb(0,120,215)",color:"white"},onClick:ut.registerChangeToNextPage_selectProvince},{default:(0,i.w5)((()=>[(0,i.Uk)("下一步")])),_:1},8,["onClick"])])):(0,i.kq)("",!0),3==ct.data.loginForm.currentPage?((0,i.wg)(),(0,i.iD)("div",S,[z,(0,i._)("p",P,(0,o.zw)(0==ct.data.loginForm.currentPage?"登录":"创建账号"),1),j,(0,i._)("div",A,[(0,i.Wm)(yt,{style:{color:"var(--color-neutral-10)"},variant:"outlined",items:ct.data.loginForm.provinceNameStringArray,label:"省份",modelValue:ct.data.loginForm.register.province,"onUpdate:modelValue":e[4]||(e[4]=t=>ct.data.loginForm.register.province=t)},null,8,["items","modelValue"]),""!=ct.data.loginForm.register.warningText?((0,i.wg)(),(0,i.iD)("p",C,(0,o.zw)(ct.data.loginForm.register.warningText),1)):(0,i.kq)("",!0)]),(0,i.Wm)(ft,{style:{position:"absolute",right:"40px",bottom:"64px","background-color":"rgb(0,120,215)",color:"white"},onClick:ut.registerChangeToNextPage_selectSubjectType},{default:(0,i.w5)((()=>[(0,i.Uk)("下一步")])),_:1},8,["onClick"])])):(0,i.kq)("",!0),4==ct.data.loginForm.currentPage?((0,i.wg)(),(0,i.iD)("div",U,[V,(0,i._)("p",N,(0,o.zw)(0==ct.data.loginForm.currentPage?"登录":"创建账号"),1),W,(0,i._)("div",R,[(0,i.Wm)(yt,{style:{color:"var(--color-neutral-10)"},items:ct.data.loginForm.subjectTypes,variant:"outlined",label:"选科",modelValue:ct.data.loginForm.register.subjectType,"onUpdate:modelValue":e[5]||(e[5]=t=>ct.data.loginForm.register.subjectType=t)},null,8,["items","modelValue"]),""!=ct.data.loginForm.register.subjectType&&"文科"!=ct.data.loginForm.register.subjectType&&"理科"!=ct.data.loginForm.register.subjectType?((0,i.wg)(),(0,i.iD)("div",D,[O,(0,i.Wm)(xt,{modelValue:ct.data.loginForm.register.subjectsSelect,"onUpdate:modelValue":e[6]||(e[6]=t=>ct.data.loginForm.register.subjectsSelect=t)},{default:(0,i.w5)((()=>[((0,i.wg)(),(0,i.iD)(i.HY,null,(0,i.Ko)([{name:"物理",key:"wl"},{name:"化学",key:"hx"},{name:"生物",key:"sw"},{name:"政治",key:"zz"},{name:"历史",key:"lz"},{name:"地理",key:"dl"}],(t=>(0,i.Wm)(Ft,{value:t.key,style:(0,o.j5)([{width:"50%",margin:"0 0",display:"inline-block"},{display:ut.getStudentChooseSubjects(t.name)?"unset":"none"}])},{default:(0,i.w5)((()=>[(0,i.Uk)((0,o.zw)(t.name),1)])),_:2},1032,["value","style"]))),64))])),_:1},8,["modelValue"])])):(0,i.kq)("",!0),""!=ct.data.loginForm.register.warningText?((0,i.wg)(),(0,i.iD)("p",q,(0,o.zw)(ct.data.loginForm.register.warningText),1)):(0,i.kq)("",!0)]),(0,i.Wm)(ft,{style:{position:"absolute",right:"40px",bottom:"64px","background-color":"rgb(0,120,215)",color:"white"},onClick:ut.registerChangeToNextPage_inputScoreAndRanking},{default:(0,i.w5)((()=>[(0,i.Uk)("下一步")])),_:1},8,["onClick"])])):(0,i.kq)("",!0),5==ct.data.loginForm.currentPage?((0,i.wg)(),(0,i.iD)("div",B,[E,(0,i._)("p",J,(0,o.zw)(0==ct.data.loginForm.currentPage?"登录":"创建账号"),1),I,(0,i._)("div",M,[(0,i.Wm)(pt,{style:{color:"var(--color-neutral-10)"},modelValue:ct.data.loginForm.register.score,"onUpdate:modelValue":e[7]||(e[7]=t=>ct.data.loginForm.register.score=t),label:"分数",variant:"outlined"},null,8,["modelValue"]),(0,i.Wm)(pt,{style:{color:"var(--color-neutral-10)"},modelValue:ct.data.loginForm.register.ranks,"onUpdate:modelValue":e[8]||(e[8]=t=>ct.data.loginForm.register.ranks=t),label:"位次",variant:"outlined"},null,8,["modelValue"]),""!=ct.data.loginForm.register.warningText?((0,i.wg)(),(0,i.iD)("p",H,(0,o.zw)(ct.data.loginForm.register.warningText),1)):(0,i.kq)("",!0)]),(0,i.Wm)(ft,{style:{position:"absolute",right:"40px",bottom:"64px","background-color":"rgb(0,120,215)",color:"white"},onClick:ut.registerChangeToNextPage_selectSMSR},{default:(0,i.w5)((()=>[(0,i.Uk)("下一步")])),_:1},8,["onClick"])])):(0,i.kq)("",!0),6==ct.data.loginForm.currentPage?((0,i.wg)(),(0,i.iD)("div",Y,[L,(0,i._)("p",K,(0,o.zw)(0==ct.data.loginForm.currentPage?"登录":"创建账号"),1),Z,(0,i._)("div",G,[(0,i.Wm)(Ft,{modelValue:ct.data.loginForm.register.isSM,"onUpdate:modelValue":e[9]||(e[9]=t=>ct.data.loginForm.register.isSM=t)},{default:(0,i.w5)((()=>[(0,i.Uk)("色盲")])),_:1},8,["modelValue"]),Q,(0,i.Wm)(Ft,{modelValue:ct.data.loginForm.register.isSR,"onUpdate:modelValue":e[10]||(e[10]=t=>ct.data.loginForm.register.isSR=t)},{default:(0,i.w5)((()=>[(0,i.Uk)("色弱")])),_:1},8,["modelValue"]),""!=ct.data.loginForm.register.warningText?((0,i.wg)(),(0,i.iD)("p",X,(0,o.zw)(ct.data.loginForm.register.warningText),1)):(0,i.kq)("",!0)]),(0,i.Wm)(ft,{style:{position:"absolute",right:"40px",bottom:"64px","background-color":"rgb(0,120,215)",color:"white"},onClick:ut.registerChangeToNextPage_setPassword},{default:(0,i.w5)((()=>[(0,i.Uk)("下一步")])),_:1},8,["onClick"])])):(0,i.kq)("",!0),7==ct.data.loginForm.currentPage?((0,i.wg)(),(0,i.iD)("div",$,[tt,(0,i._)("p",et,(0,o.zw)(0==ct.data.loginForm.currentPage?"登录":"创建账号"),1),rt,(0,i._)("div",it,[(0,i.Wm)(pt,{modelValue:ct.data.loginForm.register.password,"onUpdate:modelValue":e[11]||(e[11]=t=>ct.data.loginForm.register.password=t),type:"password",variant:"outlined",label:"密码"},null,8,["modelValue"]),(0,i.Wm)(pt,{modelValue:ct.data.loginForm.register.rePassword,"onUpdate:modelValue":e[12]||(e[12]=t=>ct.data.loginForm.register.rePassword=t),type:"password",variant:"outlined",label:"重复密码"},null,8,["modelValue"]),""!=ct.data.loginForm.register.warningText?((0,i.wg)(),(0,i.iD)("p",ot,(0,o.zw)(ct.data.loginForm.register.warningText),1)):(0,i.kq)("",!0)]),(0,i.Wm)(ft,{style:{position:"absolute",right:"40px",bottom:"64px","background-color":"rgb(0,120,215)",color:"white"},onClick:ut.finishRegister},{default:(0,i.w5)((()=>[(0,i.Uk)("完成注册")])),_:1},8,["onClick"])])):(0,i.kq)("",!0),8==ct.data.loginForm.currentPage?((0,i.wg)(),(0,i.iD)("div",at,[st,(0,i._)("p",nt,(0,o.zw)(0==ct.data.loginForm.currentPage?"登录":"创建账号"),1),(0,i._)("p",lt,(0,o.zw)(ct.data.loginForm.subTitle),1),(0,i._)("div",gt,[(0,i._)("p",null,(0,o.zw)(ct.data.loginForm.finishRegContent),1),""!=ct.data.loginForm.register.warningText?((0,i.wg)(),(0,i.iD)("p",dt,(0,o.zw)(ct.data.loginForm.register.warningText),1)):(0,i.kq)("",!0)]),"注册成功"==ct.data.loginForm.subTitle?((0,i.wg)(),(0,i.j4)(ft,{key:0,style:{position:"absolute",right:"40px",bottom:"64px","background-color":"rgb(0,120,215)",color:"white"},onClick:e[13]||(e[13]=t=>ut.login(!0))},{default:(0,i.w5)((()=>[(0,i.Uk)("登录")])),_:1})):(0,i.kq)("",!0),"注册成功"!=ct.data.loginForm.subTitle?((0,i.wg)(),(0,i.j4)(ft,{key:1,style:{position:"absolute",right:"40px",bottom:"64px","background-color":"rgb(0,120,215)",color:"white"},onClick:e[14]||(e[14]=()=>{ct.data.loginForm.register=JSON.parse(JSON.stringify(ct.data.loginForm.registerFormNew)),ct.data.loginForm.currentPage=1,ct.data.loginForm.subTitle="请输入电子邮件地址"})},{default:(0,i.w5)((()=>[(0,i.Uk)("重新注册")])),_:1})):(0,i.kq)("",!0)])):(0,i.kq)("",!0)])])}var ct=r(9182),ut=r.n(ct),mt=r(3413),pt=r(2487),wt=r.n(pt),ft=r(5121),yt=r(2023),Ft={computed:{},data(){return{data:{loginForm:{currentPage:0,subTitle:"以考生身份登录",loading:!1,provinceSubjects:[],provinceNameStringArray:[],subjectTypes:[],finishRegContent:"",register:{email:"",name:"",province:"",subjectType:"",ranks:"",score:"",isSM:!1,isSR:!1,password:"",rePassword:"",warningText:"",type:0,subjects:{wl:!1,hx:!1,sw:!1,zz:!1,ls:!1,dl:!1},subjectsSelect:[]},loginEmail:"",loginPassword:"",loginWarningText:"",registerFormNew:{email:"",name:"",province:"",subjectType:"",ranks:"",score:"",isSM:!1,isSR:!1,password:"",rePassword:"",warningText:"",type:0,subjects:{wl:!1,hx:!1,sw:!1,zz:!1,ls:!1,dl:!1},subjectsSelect:[]}}}}},mounted(){this.controlAppLoading()},methods:{getStudentChooseSubjects(t){switch(this.data.loginForm.register.subjectType.slice(0,2)){case"综合":return!0;case"本科":return!0;case"专科":return!0;case"物理":return"物理"!=t&&"历史"!=t;case"历史":return"物理"!=t&&"历史"!=t;case"理科":return!1;case"文科":return!1}},async login(t){if(this.data.loginForm.loginWarningText="",1==t&&(this.data.loginForm.loginEmail=this.data.loginForm.register.email,this.data.loginForm.loginPassword=this.data.loginForm.register.password),""==this.data.loginForm.loginEmail)return void(this.data.loginForm.loginWarningText="请输入登录邮箱");if(""==this.data.loginForm.loginPassword)return void(this.data.loginForm.loginWarningText="请输入登录密码");this.data.loginForm.loading=!0;let e=await wt().axiosPostWithCheckStatus(ut().serverURL,"/user/login",{email:this.data.loginForm.loginEmail,password:(0,yt.sha256)(this.data.loginForm.loginPassword)});this.data.loginForm.loading=!1,1==e.status?1==e.status&&(localStorage.setItem("loginedUserInfo",JSON.stringify(e.results.userInfo)),mt.Z.push("/")):this.data.loginForm.loginWarningText=e.content},async registerChangeToNextPage_setPassword(){this.data.loginForm.register.warningText="",this.data.loginForm.loading=!0,await this.waitSeconds(1.5),this.data.loginForm.loading=!1,this.data.loginForm.currentPage=7},async finishRegister(){if(this.data.loginForm.register.warningText="",0==wt().isVaildPasswordString(this.data.loginForm.register.password))return void(this.data.loginForm.register.warningText="密码应由大小写字母、数字或下划线组成，长度不小于8位且不长于16位");if(this.data.loginForm.register.password!=this.data.loginForm.register.rePassword)return void(this.data.loginForm.register.warningText="两次输入的密码不一致");this.data.loginForm.loading=!0,await this.waitSeconds(1.5),this.data.loginForm.register.isSM=this.data.loginForm.register.isSM?1:0,this.data.loginForm.register.isSR=this.data.loginForm.register.isSR?1:0,this.data.loginForm.register.score=parseInt(this.data.loginForm.register.score),this.data.loginForm.register.ranks=parseInt(this.data.loginForm.register.ranks),this.data.loginForm.register.subjects=JSON.stringify(this.data.loginForm.register.subjects),this.data.loginForm.register.allowChatUserEmails=JSON.stringify([]),this.data.loginForm.register.type=0;let t=await wt().axiosPostWithCheckStatus(ut().serverURL,"/user/register",this.data.loginForm.register);1!=t.status?(this.data.loginForm.subTitle="注册失败",this.data.loginForm.finishRegContent="很抱歉，注册失败，原因："+t.content):(this.data.loginForm.subTitle="注册成功",this.data.loginForm.finishRegContent="恭喜您，注册成功，登录账号是您的邮箱，请牢记您的登录密码"),this.data.loginForm.loading=!1,this.data.loginForm.currentPage=8},async registerChangeToNextPage_selectSMSR(){this.data.loginForm.register.warningText="",""!=this.data.loginForm.register.score?""!=this.data.loginForm.register.ranks?isNaN(parseInt(this.data.loginForm.register.score))?this.data.loginForm.register.warningText="请输入正确的成绩":isNaN(parseInt(this.data.loginForm.register.ranks))?this.data.loginForm.register.warningText="请输入正确的位次":parseInt(this.data.loginForm.register.score)<0||parseInt(this.data.loginForm.register.score)>750?this.data.loginForm.register.warningText="请输入正确的成绩":parseInt(this.data.loginForm.register.ranks)<0?this.data.loginForm.register.warningText="请输入正确的位次":(this.data.loginForm.loading=!0,await this.waitSeconds(1.5),this.data.loginForm.loading=!1,this.data.loginForm.currentPage=6):this.data.loginForm.register.warningText="请输入位次":this.data.loginForm.register.warningText="请输入成绩"},async registerChangeToNextPage_inputScoreAndRanking(){if(this.data.loginForm.register.warningText="",""==this.data.loginForm.register.subjectType)return void(this.data.loginForm.register.warningText="请选择选科类型");this.data.loginForm.register.subjects={wl:!1,hx:!1,sw:!1,zz:!1,ls:!1,dl:!1};for(let r=0;r<this.data.loginForm.register.subjectsSelect.length;r++)this.data.loginForm.register.subjects[this.data.loginForm.register.subjectsSelect[r]]=!0;let t=this.data.loginForm.register.subjectType,e=this.data.loginForm.register.subjectsSelect.length;"综合"!=t&&"本科"!=t&&"专科"!=t||3==e?"物理类"!=t&&"历史类"!=t||2==e?("理科"==t&&(this.data.loginForm.register.subjects.wl=!0,this.data.loginForm.register.subjects.hx=!0,this.data.loginForm.register.subjects.sw=!0),"文科"==t&&(this.data.loginForm.register.subjects.wl=!0,this.data.loginForm.register.subjects.hx=!0,this.data.loginForm.register.subjects.sw=!0),"物理类"==t&&(this.data.loginForm.register.subjects.wl=!0),"历史类"==t&&(this.data.loginForm.register.subjects.ls=!0),this.data.loginForm.loading=!0,await this.waitSeconds(1.5),this.data.loginForm.loading=!1,this.data.loginForm.currentPage=5):this.data.loginForm.register.warningText="请选择2个科目":this.data.loginForm.register.warningText="请选择3个科目"},async registerChangeToNextPage_selectSubjectType(){if(this.data.loginForm.register.warningText="",this.data.loginForm.loading=!0,""==this.data.loginForm.register.province)return this.data.loginForm.loading=!1,void(this.data.loginForm.register.warningText="请选择高考省份");await this.waitSeconds(1.5);let t=[];for(let e=0;e<this.data.loginForm.provinceSubjects.length;e++)if(this.data.loginForm.provinceSubjects[e].name==this.data.loginForm.register.province)for(let r=0;r<this.data.loginForm.provinceSubjects[e].type.length;r++)t.push(this.data.loginForm.provinceSubjects[e].type[r].name);this.data.loginForm.subjectTypes=t,this.data.loginForm.loading=!1,this.data.loginForm.currentPage=4},async registerChangeToNextPage_selectProvince(){if(this.data.loginForm.register.warningText="",this.data.loginForm.loading=!0,""==this.data.loginForm.register.name)return this.data.loginForm.loading=!1,void(this.data.loginForm.register.warningText="请输入姓名");await this.waitSeconds(1.5);let t=await wt().axiosPostWithCheckStatus(this.appData.serverURL,"/provincesAndSubjects",{}),e=[];for(let r=0;r<t.results.length;r++)e.push(t.results[r].name);this.data.loginForm.provinceNameStringArray=e,this.data.loginForm.provinceSubjects=t.results,this.data.loginForm.loading=!1,this.data.loginForm.currentPage=3},backToHomePage(){mt.Z.push("/")},async registerChangeToNextPage_inputName(){if(this.data.loginForm.register.warningText="",this.data.loginForm.loading=!0,await this.waitSeconds(.5),0==wt().isRightEmailAddress(this.data.loginForm.register.email))return this.data.loginForm.register.warningText="邮箱格式不正确",void(this.data.loginForm.loading=!1);await this.waitSeconds(1.5);let t=await wt().axiosPost(this.appData.serverURL,"/user/isExist",{email:this.data.loginForm.register.email});this.data.loginForm.loading=!1,1!=t.status?this.data.loginForm.register.warningText="此邮箱已注册":(this.data.loginForm.subTitle="请输入您的姓名",this.data.loginForm.currentPage=2)},async changeToRegisterPage(){this.data.loginForm.loading=!0,await this.waitSeconds(2),this.data.loginForm.loading=!1,this.data.loginForm.subTitle="请输入您的电子邮件地址",this.data.loginForm.register=this.resetAllKeys(this.data.loginForm.register),this.data.loginForm.currentPage=1},waitSeconds(t){return new Promise(((e,r)=>{setTimeout((()=>e()),1e3*t)}))},resetAllKeys(t){for(let e=0;e<Object.keys(t).length;e++)t[Object.keys(t)[e]]="";return t},isRightEmailAddress(t){return!vt(t)&&(0!=xt(t)&&(t=t.split("@"),2==t.length&&(""!=t[0]&&""!=t[1])))},axiosGet(t,e){return new Promise(((r,i)=>{e=wt().encodeString(JSON.stringify(e));var o={method:"get",url:this.appData.serverURL+t,data:e};(0,ft.Z)(o).then((t=>r(JSON.parse(wt().decodeString(t.data)))))}))}},props:{appData:void 0,controlAppLoading:void 0}};function xt(t){t=t.split("");for(let e=0;e<t.length;e++){let r=t[e].charCodeAt(0);if(!(r>=48&&r<=57)&&(!(r>=65&&r<=90)&&!(r>=97&&r<=122)&&43!=r&&45!=r&&46!=r))return!1}return!0}function vt(t){t=t.split("");for(let e=0;e<t.length;e++)if(" "==t[e])return!0;return!1}var bt=r(3744);const kt=(0,bt.Z)(Ft,[["render",ht]]);var _t=kt},1371:function(){},6127:function(){}}]);
//# sourceMappingURL=623.7406cee8.js.map