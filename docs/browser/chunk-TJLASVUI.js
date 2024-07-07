import{$ as D,$a as f,Ac as ft,Da as r,Ea as y,Eb as H,Ia as ut,Lb as Q,Ma as q,Pa as v,Tb as Y,Ua as S,V as I,Va as O,W as at,Wa as l,Xa as F,Y as rt,Za as m,_ as d,_a as u,_b as pt,a as h,ab as E,b as C,bb as z,cb as G,da as $,db as U,dc as mt,ea as lt,eb as dt,fb as A,gb as c,ha as ct,l as g,ma as B,na as V,nb as _,pb as T,sa as j,sb as K,ya as ht,za as Z}from"./chunk-4CM3PSM5.js";var b=function(s){return s[s.State=0]="State",s[s.Transition=1]="Transition",s[s.Sequence=2]="Sequence",s[s.Group=3]="Group",s[s.Animate=4]="Animate",s[s.Keyframes=5]="Keyframes",s[s.Style=6]="Style",s[s.Trigger=7]="Trigger",s[s.Reference=8]="Reference",s[s.AnimateChild=9]="AnimateChild",s[s.AnimateRef=10]="AnimateRef",s[s.Query=11]="Query",s[s.Stagger=12]="Stagger",s}(b||{}),zt="*";function vt(s,i){return{type:b.Trigger,name:s,definitions:i,options:{}}}function J(s,i=null){return{type:b.Animate,styles:i,timings:s}}function Gt(s,i=null){return{type:b.Sequence,steps:s,options:i}}function N(s){return{type:b.Style,styles:s,offset:null}}function P(s,i,e){return{type:b.State,name:s,styles:i,options:e}}function W(s,i,e=null){return{type:b.Transition,expr:s,animation:i,options:e}}var _t=class{constructor(i=0,e=0){this._onDoneFns=[],this._onStartFns=[],this._onDestroyFns=[],this._originalOnDoneFns=[],this._originalOnStartFns=[],this._started=!1,this._destroyed=!1,this._finished=!1,this._position=0,this.parentPlayer=null,this.totalTime=i+e}_onFinish(){this._finished||(this._finished=!0,this._onDoneFns.forEach(i=>i()),this._onDoneFns=[])}onStart(i){this._originalOnStartFns.push(i),this._onStartFns.push(i)}onDone(i){this._originalOnDoneFns.push(i),this._onDoneFns.push(i)}onDestroy(i){this._onDestroyFns.push(i)}hasStarted(){return this._started}init(){}play(){this.hasStarted()||(this._onStart(),this.triggerMicrotask()),this._started=!0}triggerMicrotask(){queueMicrotask(()=>this._onFinish())}_onStart(){this._onStartFns.forEach(i=>i()),this._onStartFns=[]}pause(){}restart(){}finish(){this._onFinish()}destroy(){this._destroyed||(this._destroyed=!0,this.hasStarted()||this._onStart(),this.finish(),this._onDestroyFns.forEach(i=>i()),this._onDestroyFns=[])}reset(){this._started=!1,this._finished=!1,this._onStartFns=this._originalOnStartFns,this._onDoneFns=this._originalOnDoneFns}setPosition(i){this._position=this.totalTime?i*this.totalTime:1}getPosition(){return this.totalTime?this._position/this.totalTime:1}triggerCallback(i){let e=i=="start"?this._onStartFns:this._onDoneFns;e.forEach(t=>t()),e.length=0}},gt=class{constructor(i){this._onDoneFns=[],this._onStartFns=[],this._finished=!1,this._started=!1,this._destroyed=!1,this._onDestroyFns=[],this.parentPlayer=null,this.totalTime=0,this.players=i;let e=0,t=0,n=0,o=this.players.length;o==0?queueMicrotask(()=>this._onFinish()):this.players.forEach(a=>{a.onDone(()=>{++e==o&&this._onFinish()}),a.onDestroy(()=>{++t==o&&this._onDestroy()}),a.onStart(()=>{++n==o&&this._onStart()})}),this.totalTime=this.players.reduce((a,p)=>Math.max(a,p.totalTime),0)}_onFinish(){this._finished||(this._finished=!0,this._onDoneFns.forEach(i=>i()),this._onDoneFns=[])}init(){this.players.forEach(i=>i.init())}onStart(i){this._onStartFns.push(i)}_onStart(){this.hasStarted()||(this._started=!0,this._onStartFns.forEach(i=>i()),this._onStartFns=[])}onDone(i){this._onDoneFns.push(i)}onDestroy(i){this._onDestroyFns.push(i)}hasStarted(){return this._started}play(){this.parentPlayer||this.init(),this._onStart(),this.players.forEach(i=>i.play())}pause(){this.players.forEach(i=>i.pause())}restart(){this.players.forEach(i=>i.restart())}finish(){this._onFinish(),this.players.forEach(i=>i.finish())}destroy(){this._onDestroy()}_onDestroy(){this._destroyed||(this._destroyed=!0,this._onFinish(),this.players.forEach(i=>i.destroy()),this._onDestroyFns.forEach(i=>i()),this._onDestroyFns=[])}reset(){this.players.forEach(i=>i.reset()),this._destroyed=!1,this._finished=!1,this._started=!1}setPosition(i){let e=i*this.totalTime;this.players.forEach(t=>{let n=t.totalTime?Math.min(1,e/t.totalTime):1;t.setPosition(n)})}getPosition(){let i=this.players.reduce((e,t)=>e===null||t.totalTime>e.totalTime?t:e,null);return i!=null?i.getPosition():0}beforeDestroy(){this.players.forEach(i=>{i.beforeDestroy&&i.beforeDestroy()})}triggerCallback(i){let e=i=="start"?this._onStartFns:this._onDoneFns;e.forEach(t=>t()),e.length=0}},Ut="!";var yt=["toast-component",""];function xt(s,i){if(s&1){let e=U();u(0,"button",5),A("click",function(){B(e);let n=c();return V(n.remove())}),u(1,"span",6),_(2,"\xD7"),f()()}}function St(s,i){if(s&1&&(z(0),_(1),G()),s&2){let e=c(2);r(),T("[",e.duplicatesCount+1,"]")}}function Ot(s,i){if(s&1&&(u(0,"div"),_(1),S(2,St,2,1,"ng-container",4),f()),s&2){let e=c();m(e.options.titleClass),O("aria-label",e.title),r(),T(" ",e.title," "),r(),l("ngIf",e.duplicatesCount)}}function Ft(s,i){if(s&1&&E(0,"div",7),s&2){let e=c();m(e.options.messageClass),l("innerHTML",e.message,Z)}}function Et(s,i){if(s&1&&(u(0,"div",8),_(1),f()),s&2){let e=c();m(e.options.messageClass),O("aria-label",e.message),r(),T(" ",e.message," ")}}function At(s,i){if(s&1&&(u(0,"div"),E(1,"div",9),f()),s&2){let e=c();r(),F("width",e.width()+"%")}}function Rt(s,i){if(s&1){let e=U();u(0,"button",5),A("click",function(){B(e);let n=c();return V(n.remove())}),u(1,"span",6),_(2,"\xD7"),f()()}}function jt(s,i){if(s&1&&(z(0),_(1),G()),s&2){let e=c(2);r(),T("[",e.duplicatesCount+1,"]")}}function Ht(s,i){if(s&1&&(u(0,"div"),_(1),S(2,jt,2,1,"ng-container",4),f()),s&2){let e=c();m(e.options.titleClass),O("aria-label",e.title),r(),T(" ",e.title," "),r(),l("ngIf",e.duplicatesCount)}}function Nt(s,i){if(s&1&&E(0,"div",7),s&2){let e=c();m(e.options.messageClass),l("innerHTML",e.message,Z)}}function Pt(s,i){if(s&1&&(u(0,"div",8),_(1),f()),s&2){let e=c();m(e.options.messageClass),O("aria-label",e.message),r(),T(" ",e.message," ")}}function Mt(s,i){if(s&1&&(u(0,"div"),E(1,"div",9),f()),s&2){let e=c();r(),F("width",e.width()+"%")}}var X=class{_attachedHost;component;viewContainerRef;injector;constructor(i,e){this.component=i,this.injector=e}attach(i,e){return this._attachedHost=i,i.attach(this,e)}detach(){let i=this._attachedHost;if(i)return this._attachedHost=void 0,i.detach()}get isAttached(){return this._attachedHost!=null}setAttachedHost(i){this._attachedHost=i}},tt=class{_attachedPortal;_disposeFn;attach(i,e){return this._attachedPortal=i,this.attachComponentPortal(i,e)}detach(){this._attachedPortal&&this._attachedPortal.setAttachedHost(),this._attachedPortal=void 0,this._disposeFn&&(this._disposeFn(),this._disposeFn=void 0)}setDisposeFn(i){this._disposeFn=i}},et=class{_overlayRef;componentInstance;duplicatesCount=0;_afterClosed=new g;_activate=new g;_manualClose=new g;_resetTimeout=new g;_countDuplicate=new g;constructor(i){this._overlayRef=i}manualClose(){this._manualClose.next(),this._manualClose.complete()}manualClosed(){return this._manualClose.asObservable()}timeoutReset(){return this._resetTimeout.asObservable()}countDuplicate(){return this._countDuplicate.asObservable()}close(){this._overlayRef.detach(),this._afterClosed.next(),this._manualClose.next(),this._afterClosed.complete(),this._manualClose.complete(),this._activate.complete(),this._resetTimeout.complete(),this._countDuplicate.complete()}afterClosed(){return this._afterClosed.asObservable()}isInactive(){return this._activate.isStopped}activate(){this._activate.next(),this._activate.complete()}afterActivate(){return this._activate.asObservable()}onDuplicate(i,e){i&&this._resetTimeout.next(),e&&this._countDuplicate.next(++this.duplicatesCount)}},w=class{toastId;config;message;title;toastType;toastRef;_onTap=new g;_onAction=new g;constructor(i,e,t,n,o,a){this.toastId=i,this.config=e,this.message=t,this.title=n,this.toastType=o,this.toastRef=a,this.toastRef.afterClosed().subscribe(()=>{this._onAction.complete(),this._onTap.complete()})}triggerTap(){this._onTap.next(),this.config.tapToDismiss&&this._onTap.complete()}onTap(){return this._onTap.asObservable()}triggerAction(i){this._onAction.next(i)}onAction(){return this._onAction.asObservable()}},Tt={maxOpened:0,autoDismiss:!1,newestOnTop:!0,preventDuplicates:!1,countDuplicates:!1,resetTimeoutOnDuplicate:!1,includeTitleDuplicates:!1,iconClasses:{error:"toast-error",info:"toast-info",success:"toast-success",warning:"toast-warning"},closeButton:!1,disableTimeOut:!1,timeOut:5e3,extendedTimeOut:1e3,enableHtml:!1,progressBar:!1,toastClass:"ngx-toastr",positionClass:"toast-top-right",titleClass:"toast-title",messageClass:"toast-message",easing:"ease-in",easeTime:300,tapToDismiss:!0,onActivateTick:!1,progressAnimation:"decreasing"},bt=new rt("ToastConfig"),it=class extends tt{_hostDomElement;_componentFactoryResolver;_appRef;constructor(i,e,t){super(),this._hostDomElement=i,this._componentFactoryResolver=e,this._appRef=t}attachComponentPortal(i,e){let t=this._componentFactoryResolver.resolveComponentFactory(i.component),n;return n=t.create(i.injector),this._appRef.attachView(n.hostView),this.setDisposeFn(()=>{this._appRef.detachView(n.hostView),n.destroy()}),e?this._hostDomElement.insertBefore(this._getComponentRootNode(n),this._hostDomElement.firstChild):this._hostDomElement.appendChild(this._getComponentRootNode(n)),n}_getComponentRootNode(i){return i.hostView.rootNodes[0]}},kt=(()=>{class s{_document=D(Q);_containerElement;ngOnDestroy(){this._containerElement&&this._containerElement.parentNode&&this._containerElement.parentNode.removeChild(this._containerElement)}getContainerElement(){return this._containerElement||this._createContainer(),this._containerElement}_createContainer(){let e=this._document.createElement("div");e.classList.add("overlay-container"),e.setAttribute("aria-live","polite"),this._document.body.appendChild(e),this._containerElement=e}static \u0275fac=function(t){return new(t||s)};static \u0275prov=I({token:s,factory:s.\u0275fac,providedIn:"root"})}return s})(),st=class{_portalHost;constructor(i){this._portalHost=i}attach(i,e=!0){return this._portalHost.attach(i,e)}detach(){return this._portalHost.detach()}},Lt=(()=>{class s{_overlayContainer=D(kt);_componentFactoryResolver=D(ut);_appRef=D(H);_document=D(Q);_paneElements=new Map;create(e,t){return this._createOverlayRef(this.getPaneElement(e,t))}getPaneElement(e="",t){return this._paneElements.get(t)||this._paneElements.set(t,{}),this._paneElements.get(t)[e]||(this._paneElements.get(t)[e]=this._createPaneElement(e,t)),this._paneElements.get(t)[e]}_createPaneElement(e,t){let n=this._document.createElement("div");return n.id="toast-container",n.classList.add(e),n.classList.add("toast-container"),t?t.getContainerElement().appendChild(n):this._overlayContainer.getContainerElement().appendChild(n),n}_createPortalHost(e){return new it(e,this._componentFactoryResolver,this._appRef)}_createOverlayRef(e){return new st(this._createPortalHost(e))}static \u0275fac=function(t){return new(t||s)};static \u0275prov=I({token:s,factory:s.\u0275fac,providedIn:"root"})}return s})(),M=(()=>{class s{overlay;_injector;sanitizer;ngZone;toastrConfig;currentlyActive=0;toasts=[];overlayContainer;previousToastMessage;index=0;constructor(e,t,n,o,a){this.overlay=t,this._injector=n,this.sanitizer=o,this.ngZone=a,this.toastrConfig=h(h({},e.default),e.config),e.config.iconClasses&&(this.toastrConfig.iconClasses=h(h({},e.default.iconClasses),e.config.iconClasses))}show(e,t,n={},o=""){return this._preBuildNotification(o,e,t,this.applyConfig(n))}success(e,t,n={}){let o=this.toastrConfig.iconClasses.success||"";return this._preBuildNotification(o,e,t,this.applyConfig(n))}error(e,t,n={}){let o=this.toastrConfig.iconClasses.error||"";return this._preBuildNotification(o,e,t,this.applyConfig(n))}info(e,t,n={}){let o=this.toastrConfig.iconClasses.info||"";return this._preBuildNotification(o,e,t,this.applyConfig(n))}warning(e,t,n={}){let o=this.toastrConfig.iconClasses.warning||"";return this._preBuildNotification(o,e,t,this.applyConfig(n))}clear(e){for(let t of this.toasts)if(e!==void 0){if(t.toastId===e){t.toastRef.manualClose();return}}else t.toastRef.manualClose()}remove(e){let t=this._findToast(e);if(!t||(t.activeToast.toastRef.close(),this.toasts.splice(t.index,1),this.currentlyActive=this.currentlyActive-1,!this.toastrConfig.maxOpened||!this.toasts.length))return!1;if(this.currentlyActive<this.toastrConfig.maxOpened&&this.toasts[this.currentlyActive]){let n=this.toasts[this.currentlyActive].toastRef;n.isInactive()||(this.currentlyActive=this.currentlyActive+1,n.activate())}return!0}findDuplicate(e="",t="",n,o){let{includeTitleDuplicates:a}=this.toastrConfig;for(let p of this.toasts){let R=a&&p.title===e;if((!a||R)&&p.message===t)return p.toastRef.onDuplicate(n,o),p}return null}applyConfig(e={}){return h(h({},this.toastrConfig),e)}_findToast(e){for(let t=0;t<this.toasts.length;t++)if(this.toasts[t].toastId===e)return{index:t,activeToast:this.toasts[t]};return null}_preBuildNotification(e,t,n,o){return o.onActivateTick?this.ngZone.run(()=>this._buildNotification(e,t,n,o)):this._buildNotification(e,t,n,o)}_buildNotification(e,t,n,o){if(!o.toastComponent)throw new Error("toastComponent required");let a=this.findDuplicate(n,t,this.toastrConfig.resetTimeoutOnDuplicate&&o.timeOut>0,this.toastrConfig.countDuplicates);if((this.toastrConfig.includeTitleDuplicates&&n||t)&&this.toastrConfig.preventDuplicates&&a!==null)return a;this.previousToastMessage=t;let p=!1;this.toastrConfig.maxOpened&&this.currentlyActive>=this.toastrConfig.maxOpened&&(p=!0,this.toastrConfig.autoDismiss&&this.clear(this.toasts[0].toastId));let R=this.overlay.create(o.positionClass,this.overlayContainer);this.index=this.index+1;let nt=t;t&&o.enableHtml&&(nt=this.sanitizer.sanitize(ht.HTML,t));let x=new et(R),k=new w(this.index,o,nt,n,e,x),Ct=[{provide:w,useValue:k}],It=j.create({providers:Ct,parent:this._injector}),Dt=new X(o.toastComponent,It),ot=R.attach(Dt,o.newestOnTop);x.componentInstance=ot.instance;let L={toastId:this.index,title:n||"",message:t||"",toastRef:x,onShown:x.afterActivate(),onHidden:x.afterClosed(),onTap:k.onTap(),onAction:k.onAction(),portal:ot};return p||(this.currentlyActive=this.currentlyActive+1,setTimeout(()=>{L.toastRef.activate()})),this.toasts.push(L),L}static \u0275fac=function(t){return new(t||s)(d(bt),d(Lt),d(j),d(mt),d(q))};static \u0275prov=I({token:s,factory:s.\u0275fac,providedIn:"root"})}return s})(),$t=(()=>{class s{toastrService;toastPackage;ngZone;message;title;options;duplicatesCount;originalTimeout;width=v(-1);toastClasses="";state;get _state(){return this.state()}get displayStyle(){if(this.state().value==="inactive")return"none"}timeout;intervalId;hideTime;sub;sub1;sub2;sub3;constructor(e,t,n){this.toastrService=e,this.toastPackage=t,this.ngZone=n,this.message=t.message,this.title=t.title,this.options=t.config,this.originalTimeout=t.config.timeOut,this.toastClasses=`${t.toastType} ${t.config.toastClass}`,this.sub=t.toastRef.afterActivate().subscribe(()=>{this.activateToast()}),this.sub1=t.toastRef.manualClosed().subscribe(()=>{this.remove()}),this.sub2=t.toastRef.timeoutReset().subscribe(()=>{this.resetTimeout()}),this.sub3=t.toastRef.countDuplicate().subscribe(o=>{this.duplicatesCount=o}),this.state=v({value:"inactive",params:{easeTime:this.toastPackage.config.easeTime,easing:"ease-in"}})}ngOnDestroy(){this.sub.unsubscribe(),this.sub1.unsubscribe(),this.sub2.unsubscribe(),this.sub3.unsubscribe(),clearInterval(this.intervalId),clearTimeout(this.timeout)}activateToast(){this.state.update(e=>C(h({},e),{value:"active"})),!(this.options.disableTimeOut===!0||this.options.disableTimeOut==="timeOut")&&this.options.timeOut&&(this.outsideTimeout(()=>this.remove(),this.options.timeOut),this.hideTime=new Date().getTime()+this.options.timeOut,this.options.progressBar&&this.outsideInterval(()=>this.updateProgress(),10))}updateProgress(){if(this.width()===0||this.width()===100||!this.options.timeOut)return;let e=new Date().getTime(),t=this.hideTime-e;this.width.set(t/this.options.timeOut*100),this.options.progressAnimation==="increasing"&&this.width.update(n=>100-n),this.width()<=0&&this.width.set(0),this.width()>=100&&this.width.set(100)}resetTimeout(){clearTimeout(this.timeout),clearInterval(this.intervalId),this.state.update(e=>C(h({},e),{value:"active"})),this.outsideTimeout(()=>this.remove(),this.originalTimeout),this.options.timeOut=this.originalTimeout,this.hideTime=new Date().getTime()+(this.options.timeOut||0),this.width.set(-1),this.options.progressBar&&this.outsideInterval(()=>this.updateProgress(),10)}remove(){this.state().value!=="removed"&&(clearTimeout(this.timeout),this.state.update(e=>C(h({},e),{value:"removed"})),this.outsideTimeout(()=>this.toastrService.remove(this.toastPackage.toastId),+this.toastPackage.config.easeTime))}tapToast(){this.state().value!=="removed"&&(this.toastPackage.triggerTap(),this.options.tapToDismiss&&this.remove())}stickAround(){this.state().value!=="removed"&&this.options.disableTimeOut!=="extendedTimeOut"&&(clearTimeout(this.timeout),this.options.timeOut=0,this.hideTime=0,clearInterval(this.intervalId),this.width.set(0))}delayedHideToast(){this.options.disableTimeOut===!0||this.options.disableTimeOut==="extendedTimeOut"||this.options.extendedTimeOut===0||this.state().value==="removed"||(this.outsideTimeout(()=>this.remove(),this.options.extendedTimeOut),this.options.timeOut=this.options.extendedTimeOut,this.hideTime=new Date().getTime()+(this.options.timeOut||0),this.width.set(-1),this.options.progressBar&&this.outsideInterval(()=>this.updateProgress(),10))}outsideTimeout(e,t){this.ngZone?this.ngZone.runOutsideAngular(()=>this.timeout=setTimeout(()=>this.runInsideAngular(e),t)):this.timeout=setTimeout(()=>e(),t)}outsideInterval(e,t){this.ngZone?this.ngZone.runOutsideAngular(()=>this.intervalId=setInterval(()=>this.runInsideAngular(e),t)):this.intervalId=setInterval(()=>e(),t)}runInsideAngular(e){this.ngZone?this.ngZone.run(()=>e()):e()}static \u0275fac=function(t){return new(t||s)(y(M),y(w),y(q))};static \u0275cmp=$({type:s,selectors:[["","toast-component",""]],hostVars:5,hostBindings:function(t,n){t&1&&A("click",function(){return n.tapToast()})("mouseenter",function(){return n.stickAround()})("mouseleave",function(){return n.delayedHideToast()}),t&2&&(dt("@flyInOut",n._state),m(n.toastClasses),F("display",n.displayStyle))},standalone:!0,features:[K],attrs:yt,decls:5,vars:5,consts:[["type","button","class","toast-close-button","aria-label","Close",3,"click",4,"ngIf"],[3,"class",4,"ngIf"],["role","alert",3,"class","innerHTML",4,"ngIf"],["role","alert",3,"class",4,"ngIf"],[4,"ngIf"],["type","button","aria-label","Close",1,"toast-close-button",3,"click"],["aria-hidden","true"],["role","alert",3,"innerHTML"],["role","alert"],[1,"toast-progress"]],template:function(t,n){t&1&&S(0,xt,3,0,"button",0)(1,Ot,3,5,"div",1)(2,Ft,1,3,"div",2)(3,Et,2,4,"div",3)(4,At,2,2,"div",4),t&2&&(l("ngIf",n.options.closeButton),r(),l("ngIf",n.title),r(),l("ngIf",n.message&&n.options.enableHtml),r(),l("ngIf",n.message&&!n.options.enableHtml),r(),l("ngIf",n.options.progressBar))},dependencies:[Y],encapsulation:2,data:{animation:[vt("flyInOut",[P("inactive",N({opacity:0})),P("active",N({opacity:1})),P("removed",N({opacity:0})),W("inactive => active",J("{{ easeTime }}ms {{ easing }}")),W("active => removed",J("{{ easeTime }}ms {{ easing }}"))])]},changeDetection:0})}return s})(),Bt=C(h({},Tt),{toastComponent:$t}),Vt=(s={})=>ct([{provide:bt,useValue:{default:Bt,config:s}}]),he=(()=>{class s{static forRoot(e={}){return{ngModule:s,providers:[Vt(e)]}}static \u0275fac=function(t){return new(t||s)};static \u0275mod=lt({type:s});static \u0275inj=at({})}return s})();var Zt=(()=>{class s{toastrService;toastPackage;appRef;message;title;options;duplicatesCount;originalTimeout;width=v(-1);toastClasses="";get displayStyle(){return this.state()==="inactive"?"none":null}state=v("inactive");timeout;intervalId;hideTime;sub;sub1;sub2;sub3;constructor(e,t,n){this.toastrService=e,this.toastPackage=t,this.appRef=n,this.message=t.message,this.title=t.title,this.options=t.config,this.originalTimeout=t.config.timeOut,this.toastClasses=`${t.toastType} ${t.config.toastClass}`,this.sub=t.toastRef.afterActivate().subscribe(()=>{this.activateToast()}),this.sub1=t.toastRef.manualClosed().subscribe(()=>{this.remove()}),this.sub2=t.toastRef.timeoutReset().subscribe(()=>{this.resetTimeout()}),this.sub3=t.toastRef.countDuplicate().subscribe(o=>{this.duplicatesCount=o})}ngOnDestroy(){this.sub.unsubscribe(),this.sub1.unsubscribe(),this.sub2.unsubscribe(),this.sub3.unsubscribe(),clearInterval(this.intervalId),clearTimeout(this.timeout)}activateToast(){this.state.set("active"),!(this.options.disableTimeOut===!0||this.options.disableTimeOut==="timeOut")&&this.options.timeOut&&(this.timeout=setTimeout(()=>{this.remove()},this.options.timeOut),this.hideTime=new Date().getTime()+this.options.timeOut,this.options.progressBar&&(this.intervalId=setInterval(()=>this.updateProgress(),10))),this.options.onActivateTick&&this.appRef.tick()}updateProgress(){if(this.width()===0||this.width()===100||!this.options.timeOut)return;let e=new Date().getTime(),t=this.hideTime-e;this.width.set(t/this.options.timeOut*100),this.options.progressAnimation==="increasing"&&this.width.update(n=>100-n),this.width()<=0&&this.width.set(0),this.width()>=100&&this.width.set(100)}resetTimeout(){clearTimeout(this.timeout),clearInterval(this.intervalId),this.state.set("active"),this.options.timeOut=this.originalTimeout,this.timeout=setTimeout(()=>this.remove(),this.originalTimeout),this.hideTime=new Date().getTime()+(this.originalTimeout||0),this.width.set(-1),this.options.progressBar&&(this.intervalId=setInterval(()=>this.updateProgress(),10))}remove(){this.state()!=="removed"&&(clearTimeout(this.timeout),this.state.set("removed"),this.timeout=setTimeout(()=>this.toastrService.remove(this.toastPackage.toastId)))}tapToast(){this.state()!=="removed"&&(this.toastPackage.triggerTap(),this.options.tapToDismiss&&this.remove())}stickAround(){this.state()!=="removed"&&(clearTimeout(this.timeout),this.options.timeOut=0,this.hideTime=0,clearInterval(this.intervalId),this.width.set(0))}delayedHideToast(){this.options.disableTimeOut===!0||this.options.disableTimeOut==="extendedTimeOut"||this.options.extendedTimeOut===0||this.state()==="removed"||(this.timeout=setTimeout(()=>this.remove(),this.options.extendedTimeOut),this.options.timeOut=this.options.extendedTimeOut,this.hideTime=new Date().getTime()+(this.options.timeOut||0),this.width.set(-1),this.options.progressBar&&(this.intervalId=setInterval(()=>this.updateProgress(),10)))}static \u0275fac=function(t){return new(t||s)(y(M),y(w),y(H))};static \u0275cmp=$({type:s,selectors:[["","toast-component",""]],hostVars:4,hostBindings:function(t,n){t&1&&A("click",function(){return n.tapToast()})("mouseenter",function(){return n.stickAround()})("mouseleave",function(){return n.delayedHideToast()}),t&2&&(m(n.toastClasses),F("display",n.displayStyle))},standalone:!0,features:[K],attrs:yt,decls:5,vars:5,consts:[["type","button","class","toast-close-button","aria-label","Close",3,"click",4,"ngIf"],[3,"class",4,"ngIf"],["role","alert",3,"class","innerHTML",4,"ngIf"],["role","alert",3,"class",4,"ngIf"],[4,"ngIf"],["type","button","aria-label","Close",1,"toast-close-button",3,"click"],["aria-hidden","true"],["role","alert",3,"innerHTML"],["role","alert"],[1,"toast-progress"]],template:function(t,n){t&1&&S(0,Rt,3,0,"button",0)(1,Ht,3,5,"div",1)(2,Nt,1,3,"div",2)(3,Pt,2,4,"div",3)(4,Mt,2,2,"div",4),t&2&&(l("ngIf",n.options.closeButton),r(),l("ngIf",n.title),r(),l("ngIf",n.message&&n.options.enableHtml),r(),l("ngIf",n.message&&!n.options.enableHtml),r(),l("ngIf",n.options.progressBar))},dependencies:[Y],encapsulation:2,changeDetection:0})}return s})(),ue=C(h({},Tt),{toastComponent:Zt});var ge=(()=>{let i=class i{constructor(t,n,o){this.http=t,this.toastr=n,this.database=o,this.favourits=v([]),this.carts=v([]),this.apiLink=this.database.app.options.databaseURL?.toString()}getDataAPI(t){return this.http.get(`${this.apiLink}/products.json`)}getpagesCarasouelAPI(t){return this.http.get(`${this.apiLink}/${t}.json`)}getpagesContentAPI(t){return this.http.get(`${this.apiLink}/${t}.json`)}createe(t,n,o){n=="add-product"&&o.department!=""&&o.department!=" "&&o.department!=null&&o.department!=null?this.http.post(`${this.apiLink}/products.json`,o).subscribe(a=>{this.toastr.success("\u062A\u0645 \u0627\u0636\u0627\u0641\u0629 \u0627\u0644\u0645\u0646\u062A\u062C","\u0639\u0645\u0644\u064A\u0629 \u0646\u0627\u062C\u062D\u0629"),this.http.post(`${this.apiLink}/products-copy.json`,o).subscribe()}):n!="add-product"&&o.department!=""&&o.department!=" "&&o.department!=null&&o.department!=null&&t!=""&&t!=" "&&t!=null&&t!=null?this.http.put(`${this.apiLink}/products/${t}.json`,o).subscribe(a=>{this.toastr.success("\u062A\u0645 \u062A\u0639\u062F\u064A\u0644 \u0627\u0644\u0645\u0646\u062A\u062C","\u0639\u0645\u0644\u064A\u0629 \u0646\u0627\u062C\u062D\u0629")}):location.reload()}updatePagesTitle(t){this.getDataAPI("pagesTitles").subscribe(n=>{for(let o in n)n[o].id==t.id&&this.http.put(`${this.apiLink}/pagesTitles/${o}.json`,t).subscribe(()=>{this.toastr.warning("\u062A\u0645 \u062A\u0639\u062F\u064A\u0644 \u0627\u0644\u0639\u0646\u0627\u0648\u064A\u0646","\u0639\u0645\u0644\u064A\u0629 \u0646\u0627\u062C\u062D\u0629")})})}del(t,n){return this.http.delete(`${this.apiLink}/${t}/${n}.json`).subscribe(o=>{this.toastr.success("\u062A\u0645 \u062D\u0630\u0641 \u0627\u0644\u0635\u0648\u0631\u0629","\u0639\u0645\u0644\u064A\u0629 \u0646\u0627\u062C\u062D\u0629")})}getSocialAPI(t){return this.http.get(`${this.apiLink}/${t}.json`)}returnSoical(t){let n=[];return this.getSocialAPI(t).subscribe(o=>{for(let a in o)n.push(o[a])}),n}updateWhatsapp(t){this.getSocialAPI("whatsapp").subscribe(n=>{for(let o in n)this.http.put(`${this.apiLink}/whatsapp/${o}.json`,t).subscribe(a=>{this.toastr.success("\u062A\u0645 \u062A\u0639\u062F\u064A\u0644 \u0627\u0644\u0648\u0627\u062A\u0633\u0627\u0628","\u0639\u0645\u0644\u064A\u0629 \u0646\u0627\u062C\u062D\u0629")})})}updateSnapChat(t){this.getSocialAPI("snapchat").subscribe(n=>{for(let o in n)this.http.put(`${this.apiLink}/snapchat/${o}.json`,t).subscribe(a=>{this.toastr.warning("\u062A\u0645 \u062A\u0639\u062F\u064A\u0644 \u0633\u0646\u0627\u0628 \u0634\u0627\u062A","\u0639\u0645\u0644\u064A\u0629 \u0646\u0627\u062C\u062D\u0629")})})}updateInstagram(t){this.getSocialAPI("insta").subscribe(n=>{for(let o in n)this.http.put(`${this.apiLink}/insta/${o}.json`,t).subscribe(a=>{this.toastr.error("\u062A\u0645 \u062A\u0639\u062F\u064A\u0644 \u0627\u0644\u0627\u0646\u0633\u062A\u062C\u0631\u0627\u0645","\u0639\u0645\u0644\u064A\u0629 \u0646\u0627\u062C\u062D\u0629")})})}setFavourite(t){let n=[];n=JSON.parse(localStorage.getItem("Favourites")),n.push(t),localStorage.setItem("Favourites",JSON.stringify(n))}};i.\u0275fac=function(n){return new(n||i)(d(pt),d(M),d(ft))},i.\u0275prov=I({token:i,factory:i.\u0275fac,providedIn:"root"});let s=i;return s})();export{b as a,zt as b,vt as c,J as d,Gt as e,N as f,P as g,W as h,_t as i,gt as j,Ut as k,M as l,he as m,ge as n};