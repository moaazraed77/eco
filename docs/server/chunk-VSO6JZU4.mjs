import './polyfills.server.mjs';
import{c as mt,d as K,f as S,g as N,h as Q}from"./chunk-GTSSCL6B.mjs";import{w as ft}from"./chunk-GAHTZX2O.mjs";import{$ as d,Ab as U,Fa as lt,Ga as V,Gc as pt,Ka as a,La as T,Pa as ut,Qb as E,Ta as Z,W as y,Wa as g,X as ot,Z as at,aa as I,ab as D,bb as O,cb as c,db as A,dc as q,ea as $,f as v,fa as rt,fb as p,gb as h,hb as m,ia as ct,ib as j,jb as z,kb as G,lb as J,mb as ht,na as L,nb as R,nc as W,oa as P,ob as l,ta as M,vb as f,xb as b,xc as dt}from"./chunk-R5NSQYSQ.mjs";import{a as u,b as C}from"./chunk-3CVZQN5Z.mjs";var vt=["toast-component",""];function It(s,o){if(s&1){let e=J();h(0,"button",5),R("click",function(){L(e);let i=l();return P(i.remove())}),h(1,"span",6),f(2,"\xD7"),m()()}}function wt(s,o){if(s&1&&(z(0),f(1),G()),s&2){let e=l(2);a(),b("[",e.duplicatesCount+1,"]")}}function xt(s,o){if(s&1&&(h(0,"div"),f(1),D(2,wt,2,1,"ng-container",4),m()),s&2){let e=l();p(e.options.titleClass),O("aria-label",e.title),a(),b(" ",e.title," "),a(),c("ngIf",e.duplicatesCount)}}function Dt(s,o){if(s&1&&j(0,"div",7),s&2){let e=l();p(e.options.messageClass),c("innerHTML",e.message,V)}}function Ot(s,o){if(s&1&&(h(0,"div",8),f(1),m()),s&2){let e=l();p(e.options.messageClass),O("aria-label",e.message),a(),b(" ",e.message," ")}}function At(s,o){if(s&1&&(h(0,"div"),j(1,"div",9),m()),s&2){let e=l();a(),A("width",e.width()+"%")}}function jt(s,o){if(s&1){let e=J();h(0,"button",5),R("click",function(){L(e);let i=l();return P(i.remove())}),h(1,"span",6),f(2,"\xD7"),m()()}}function Rt(s,o){if(s&1&&(z(0),f(1),G()),s&2){let e=l(2);a(),b("[",e.duplicatesCount+1,"]")}}function Ht(s,o){if(s&1&&(h(0,"div"),f(1),D(2,Rt,2,1,"ng-container",4),m()),s&2){let e=l();p(e.options.titleClass),O("aria-label",e.title),a(),b(" ",e.title," "),a(),c("ngIf",e.duplicatesCount)}}function Mt(s,o){if(s&1&&j(0,"div",7),s&2){let e=l();p(e.options.messageClass),c("innerHTML",e.message,V)}}function Et(s,o){if(s&1&&(h(0,"div",8),f(1),m()),s&2){let e=l();p(e.options.messageClass),O("aria-label",e.message),a(),b(" ",e.message," ")}}function St(s,o){if(s&1&&(h(0,"div"),j(1,"div",9),m()),s&2){let e=l();a(),A("width",e.width()+"%")}}var X=class{_attachedHost;component;viewContainerRef;injector;constructor(o,e){this.component=o,this.injector=e}attach(o,e){return this._attachedHost=o,o.attach(this,e)}detach(){let o=this._attachedHost;if(o)return this._attachedHost=void 0,o.detach()}get isAttached(){return this._attachedHost!=null}setAttachedHost(o){this._attachedHost=o}},Y=class{_attachedPortal;_disposeFn;attach(o,e){return this._attachedPortal=o,this.attachComponentPortal(o,e)}detach(){this._attachedPortal&&this._attachedPortal.setAttachedHost(),this._attachedPortal=void 0,this._disposeFn&&(this._disposeFn(),this._disposeFn=void 0)}setDisposeFn(o){this._disposeFn=o}},tt=class{_overlayRef;componentInstance;duplicatesCount=0;_afterClosed=new v;_activate=new v;_manualClose=new v;_resetTimeout=new v;_countDuplicate=new v;constructor(o){this._overlayRef=o}manualClose(){this._manualClose.next(),this._manualClose.complete()}manualClosed(){return this._manualClose.asObservable()}timeoutReset(){return this._resetTimeout.asObservable()}countDuplicate(){return this._countDuplicate.asObservable()}close(){this._overlayRef.detach(),this._afterClosed.next(),this._manualClose.next(),this._afterClosed.complete(),this._manualClose.complete(),this._activate.complete(),this._resetTimeout.complete(),this._countDuplicate.complete()}afterClosed(){return this._afterClosed.asObservable()}isInactive(){return this._activate.isStopped}activate(){this._activate.next(),this._activate.complete()}afterActivate(){return this._activate.asObservable()}onDuplicate(o,e){o&&this._resetTimeout.next(),e&&this._countDuplicate.next(++this.duplicatesCount)}},w=class{toastId;config;message;title;toastType;toastRef;_onTap=new v;_onAction=new v;constructor(o,e,t,i,n,r){this.toastId=o,this.config=e,this.message=t,this.title=i,this.toastType=n,this.toastRef=r,this.toastRef.afterClosed().subscribe(()=>{this._onAction.complete(),this._onTap.complete()})}triggerTap(){this._onTap.next(),this.config.tapToDismiss&&this._onTap.complete()}onTap(){return this._onTap.asObservable()}triggerAction(o){this._onAction.next(o)}onAction(){return this._onAction.asObservable()}},gt={maxOpened:0,autoDismiss:!1,newestOnTop:!0,preventDuplicates:!1,countDuplicates:!1,resetTimeoutOnDuplicate:!1,includeTitleDuplicates:!1,iconClasses:{error:"toast-error",info:"toast-info",success:"toast-success",warning:"toast-warning"},closeButton:!1,disableTimeOut:!1,timeOut:5e3,extendedTimeOut:1e3,enableHtml:!1,progressBar:!1,toastClass:"ngx-toastr",positionClass:"toast-top-right",titleClass:"toast-title",messageClass:"toast-message",easing:"ease-in",easeTime:300,tapToDismiss:!0,onActivateTick:!1,progressAnimation:"decreasing"},_t=new at("ToastConfig"),et=class extends Y{_hostDomElement;_componentFactoryResolver;_appRef;constructor(o,e,t){super(),this._hostDomElement=o,this._componentFactoryResolver=e,this._appRef=t}attachComponentPortal(o,e){let t=this._componentFactoryResolver.resolveComponentFactory(o.component),i;return i=t.create(o.injector),this._appRef.attachView(i.hostView),this.setDisposeFn(()=>{this._appRef.detachView(i.hostView),i.destroy()}),e?this._hostDomElement.insertBefore(this._getComponentRootNode(i),this._hostDomElement.firstChild):this._hostDomElement.appendChild(this._getComponentRootNode(i)),i}_getComponentRootNode(o){return o.hostView.rootNodes[0]}},Nt=(()=>{class s{_document=I(q);_containerElement;ngOnDestroy(){this._containerElement&&this._containerElement.parentNode&&this._containerElement.parentNode.removeChild(this._containerElement)}getContainerElement(){return this._containerElement||this._createContainer(),this._containerElement}_createContainer(){let e=this._document.createElement("div");e.classList.add("overlay-container"),e.setAttribute("aria-live","polite"),this._document.body.appendChild(e),this._containerElement=e}static \u0275fac=function(t){return new(t||s)};static \u0275prov=y({token:s,factory:s.\u0275fac,providedIn:"root"})}return s})(),it=class{_portalHost;constructor(o){this._portalHost=o}attach(o,e=!0){return this._portalHost.attach(o,e)}detach(){return this._portalHost.detach()}},Ft=(()=>{class s{_overlayContainer=I(Nt);_componentFactoryResolver=I(ut);_appRef=I(E);_document=I(q);_paneElements=new Map;create(e,t){return this._createOverlayRef(this.getPaneElement(e,t))}getPaneElement(e="",t){return this._paneElements.get(t)||this._paneElements.set(t,{}),this._paneElements.get(t)[e]||(this._paneElements.get(t)[e]=this._createPaneElement(e,t)),this._paneElements.get(t)[e]}_createPaneElement(e,t){let i=this._document.createElement("div");return i.id="toast-container",i.classList.add(e),i.classList.add("toast-container"),t?t.getContainerElement().appendChild(i):this._overlayContainer.getContainerElement().appendChild(i),i}_createPortalHost(e){return new et(e,this._componentFactoryResolver,this._appRef)}_createOverlayRef(e){return new it(this._createPortalHost(e))}static \u0275fac=function(t){return new(t||s)};static \u0275prov=y({token:s,factory:s.\u0275fac,providedIn:"root"})}return s})(),F=(()=>{class s{overlay;_injector;sanitizer;ngZone;toastrConfig;currentlyActive=0;toasts=[];overlayContainer;previousToastMessage;index=0;constructor(e,t,i,n,r){this.overlay=t,this._injector=i,this.sanitizer=n,this.ngZone=r,this.toastrConfig=u(u({},e.default),e.config),e.config.iconClasses&&(this.toastrConfig.iconClasses=u(u({},e.default.iconClasses),e.config.iconClasses))}show(e,t,i={},n=""){return this._preBuildNotification(n,e,t,this.applyConfig(i))}success(e,t,i={}){let n=this.toastrConfig.iconClasses.success||"";return this._preBuildNotification(n,e,t,this.applyConfig(i))}error(e,t,i={}){let n=this.toastrConfig.iconClasses.error||"";return this._preBuildNotification(n,e,t,this.applyConfig(i))}info(e,t,i={}){let n=this.toastrConfig.iconClasses.info||"";return this._preBuildNotification(n,e,t,this.applyConfig(i))}warning(e,t,i={}){let n=this.toastrConfig.iconClasses.warning||"";return this._preBuildNotification(n,e,t,this.applyConfig(i))}clear(e){for(let t of this.toasts)if(e!==void 0){if(t.toastId===e){t.toastRef.manualClose();return}}else t.toastRef.manualClose()}remove(e){let t=this._findToast(e);if(!t||(t.activeToast.toastRef.close(),this.toasts.splice(t.index,1),this.currentlyActive=this.currentlyActive-1,!this.toastrConfig.maxOpened||!this.toasts.length))return!1;if(this.currentlyActive<this.toastrConfig.maxOpened&&this.toasts[this.currentlyActive]){let i=this.toasts[this.currentlyActive].toastRef;i.isInactive()||(this.currentlyActive=this.currentlyActive+1,i.activate())}return!0}findDuplicate(e="",t="",i,n){let{includeTitleDuplicates:r}=this.toastrConfig;for(let _ of this.toasts){let H=r&&_.title===e;if((!r||H)&&_.message===t)return _.toastRef.onDuplicate(i,n),_}return null}applyConfig(e={}){return u(u({},this.toastrConfig),e)}_findToast(e){for(let t=0;t<this.toasts.length;t++)if(this.toasts[t].toastId===e)return{index:t,activeToast:this.toasts[t]};return null}_preBuildNotification(e,t,i,n){return n.onActivateTick?this.ngZone.run(()=>this._buildNotification(e,t,i,n)):this._buildNotification(e,t,i,n)}_buildNotification(e,t,i,n){if(!n.toastComponent)throw new Error("toastComponent required");let r=this.findDuplicate(i,t,this.toastrConfig.resetTimeoutOnDuplicate&&n.timeOut>0,this.toastrConfig.countDuplicates);if((this.toastrConfig.includeTitleDuplicates&&i||t)&&this.toastrConfig.preventDuplicates&&r!==null)return r;this.previousToastMessage=t;let _=!1;this.toastrConfig.maxOpened&&this.currentlyActive>=this.toastrConfig.maxOpened&&(_=!0,this.toastrConfig.autoDismiss&&this.clear(this.toasts[0].toastId));let H=this.overlay.create(n.positionClass,this.overlayContainer);this.index=this.index+1;let st=t;t&&n.enableHtml&&(st=this.sanitizer.sanitize(lt.HTML,t));let x=new tt(H),B=new w(this.index,n,st,i,e,x),Tt=[{provide:w,useValue:B}],bt=M.create({providers:Tt,parent:this._injector}),Ct=new X(n.toastComponent,bt),nt=H.attach(Ct,n.newestOnTop);x.componentInstance=nt.instance;let k={toastId:this.index,title:i||"",message:t||"",toastRef:x,onShown:x.afterActivate(),onHidden:x.afterClosed(),onTap:B.onTap(),onAction:B.onAction(),portal:nt};return _||(this.currentlyActive=this.currentlyActive+1,setTimeout(()=>{k.toastRef.activate()})),this.toasts.push(k),k}static \u0275fac=function(t){return new(t||s)(d(_t),d(Ft),d(M),d(pt),d(Z))};static \u0275prov=y({token:s,factory:s.\u0275fac,providedIn:"root"})}return s})(),Bt=(()=>{class s{toastrService;toastPackage;ngZone;message;title;options;duplicatesCount;originalTimeout;width=g(-1);toastClasses="";state;get _state(){return this.state()}get displayStyle(){if(this.state().value==="inactive")return"none"}timeout;intervalId;hideTime;sub;sub1;sub2;sub3;constructor(e,t,i){this.toastrService=e,this.toastPackage=t,this.ngZone=i,this.message=t.message,this.title=t.title,this.options=t.config,this.originalTimeout=t.config.timeOut,this.toastClasses=`${t.toastType} ${t.config.toastClass}`,this.sub=t.toastRef.afterActivate().subscribe(()=>{this.activateToast()}),this.sub1=t.toastRef.manualClosed().subscribe(()=>{this.remove()}),this.sub2=t.toastRef.timeoutReset().subscribe(()=>{this.resetTimeout()}),this.sub3=t.toastRef.countDuplicate().subscribe(n=>{this.duplicatesCount=n}),this.state=g({value:"inactive",params:{easeTime:this.toastPackage.config.easeTime,easing:"ease-in"}})}ngOnDestroy(){this.sub.unsubscribe(),this.sub1.unsubscribe(),this.sub2.unsubscribe(),this.sub3.unsubscribe(),clearInterval(this.intervalId),clearTimeout(this.timeout)}activateToast(){this.state.update(e=>C(u({},e),{value:"active"})),!(this.options.disableTimeOut===!0||this.options.disableTimeOut==="timeOut")&&this.options.timeOut&&(this.outsideTimeout(()=>this.remove(),this.options.timeOut),this.hideTime=new Date().getTime()+this.options.timeOut,this.options.progressBar&&this.outsideInterval(()=>this.updateProgress(),10))}updateProgress(){if(this.width()===0||this.width()===100||!this.options.timeOut)return;let e=new Date().getTime(),t=this.hideTime-e;this.width.set(t/this.options.timeOut*100),this.options.progressAnimation==="increasing"&&this.width.update(i=>100-i),this.width()<=0&&this.width.set(0),this.width()>=100&&this.width.set(100)}resetTimeout(){clearTimeout(this.timeout),clearInterval(this.intervalId),this.state.update(e=>C(u({},e),{value:"active"})),this.outsideTimeout(()=>this.remove(),this.originalTimeout),this.options.timeOut=this.originalTimeout,this.hideTime=new Date().getTime()+(this.options.timeOut||0),this.width.set(-1),this.options.progressBar&&this.outsideInterval(()=>this.updateProgress(),10)}remove(){this.state().value!=="removed"&&(clearTimeout(this.timeout),this.state.update(e=>C(u({},e),{value:"removed"})),this.outsideTimeout(()=>this.toastrService.remove(this.toastPackage.toastId),+this.toastPackage.config.easeTime))}tapToast(){this.state().value!=="removed"&&(this.toastPackage.triggerTap(),this.options.tapToDismiss&&this.remove())}stickAround(){this.state().value!=="removed"&&this.options.disableTimeOut!=="extendedTimeOut"&&(clearTimeout(this.timeout),this.options.timeOut=0,this.hideTime=0,clearInterval(this.intervalId),this.width.set(0))}delayedHideToast(){this.options.disableTimeOut===!0||this.options.disableTimeOut==="extendedTimeOut"||this.options.extendedTimeOut===0||this.state().value==="removed"||(this.outsideTimeout(()=>this.remove(),this.options.extendedTimeOut),this.options.timeOut=this.options.extendedTimeOut,this.hideTime=new Date().getTime()+(this.options.timeOut||0),this.width.set(-1),this.options.progressBar&&this.outsideInterval(()=>this.updateProgress(),10))}outsideTimeout(e,t){this.ngZone?this.ngZone.runOutsideAngular(()=>this.timeout=setTimeout(()=>this.runInsideAngular(e),t)):this.timeout=setTimeout(()=>e(),t)}outsideInterval(e,t){this.ngZone?this.ngZone.runOutsideAngular(()=>this.intervalId=setInterval(()=>this.runInsideAngular(e),t)):this.intervalId=setInterval(()=>e(),t)}runInsideAngular(e){this.ngZone?this.ngZone.run(()=>e()):e()}static \u0275fac=function(t){return new(t||s)(T(F),T(w),T(Z))};static \u0275cmp=$({type:s,selectors:[["","toast-component",""]],hostVars:5,hostBindings:function(t,i){t&1&&R("click",function(){return i.tapToast()})("mouseenter",function(){return i.stickAround()})("mouseleave",function(){return i.delayedHideToast()}),t&2&&(ht("@flyInOut",i._state),p(i.toastClasses),A("display",i.displayStyle))},standalone:!0,features:[U],attrs:vt,decls:5,vars:5,consts:[["type","button","class","toast-close-button","aria-label","Close",3,"click",4,"ngIf"],[3,"class",4,"ngIf"],["role","alert",3,"class","innerHTML",4,"ngIf"],["role","alert",3,"class",4,"ngIf"],[4,"ngIf"],["type","button","aria-label","Close",1,"toast-close-button",3,"click"],["aria-hidden","true"],["role","alert",3,"innerHTML"],["role","alert"],[1,"toast-progress"]],template:function(t,i){t&1&&D(0,It,3,0,"button",0)(1,xt,3,5,"div",1)(2,Dt,1,3,"div",2)(3,Ot,2,4,"div",3)(4,At,2,2,"div",4),t&2&&(c("ngIf",i.options.closeButton),a(),c("ngIf",i.title),a(),c("ngIf",i.message&&i.options.enableHtml),a(),c("ngIf",i.message&&!i.options.enableHtml),a(),c("ngIf",i.options.progressBar))},dependencies:[W],encapsulation:2,data:{animation:[mt("flyInOut",[N("inactive",S({opacity:0})),N("active",S({opacity:1})),N("removed",S({opacity:0})),Q("inactive => active",K("{{ easeTime }}ms {{ easing }}")),Q("active => removed",K("{{ easeTime }}ms {{ easing }}"))])]},changeDetection:0})}return s})(),kt=C(u({},gt),{toastComponent:Bt}),$t=(s={})=>ct([{provide:_t,useValue:{default:kt,config:s}}]),se=(()=>{class s{static forRoot(e={}){return{ngModule:s,providers:[$t(e)]}}static \u0275fac=function(t){return new(t||s)};static \u0275mod=rt({type:s});static \u0275inj=ot({})}return s})();var Lt=(()=>{class s{toastrService;toastPackage;appRef;message;title;options;duplicatesCount;originalTimeout;width=g(-1);toastClasses="";get displayStyle(){return this.state()==="inactive"?"none":null}state=g("inactive");timeout;intervalId;hideTime;sub;sub1;sub2;sub3;constructor(e,t,i){this.toastrService=e,this.toastPackage=t,this.appRef=i,this.message=t.message,this.title=t.title,this.options=t.config,this.originalTimeout=t.config.timeOut,this.toastClasses=`${t.toastType} ${t.config.toastClass}`,this.sub=t.toastRef.afterActivate().subscribe(()=>{this.activateToast()}),this.sub1=t.toastRef.manualClosed().subscribe(()=>{this.remove()}),this.sub2=t.toastRef.timeoutReset().subscribe(()=>{this.resetTimeout()}),this.sub3=t.toastRef.countDuplicate().subscribe(n=>{this.duplicatesCount=n})}ngOnDestroy(){this.sub.unsubscribe(),this.sub1.unsubscribe(),this.sub2.unsubscribe(),this.sub3.unsubscribe(),clearInterval(this.intervalId),clearTimeout(this.timeout)}activateToast(){this.state.set("active"),!(this.options.disableTimeOut===!0||this.options.disableTimeOut==="timeOut")&&this.options.timeOut&&(this.timeout=setTimeout(()=>{this.remove()},this.options.timeOut),this.hideTime=new Date().getTime()+this.options.timeOut,this.options.progressBar&&(this.intervalId=setInterval(()=>this.updateProgress(),10))),this.options.onActivateTick&&this.appRef.tick()}updateProgress(){if(this.width()===0||this.width()===100||!this.options.timeOut)return;let e=new Date().getTime(),t=this.hideTime-e;this.width.set(t/this.options.timeOut*100),this.options.progressAnimation==="increasing"&&this.width.update(i=>100-i),this.width()<=0&&this.width.set(0),this.width()>=100&&this.width.set(100)}resetTimeout(){clearTimeout(this.timeout),clearInterval(this.intervalId),this.state.set("active"),this.options.timeOut=this.originalTimeout,this.timeout=setTimeout(()=>this.remove(),this.originalTimeout),this.hideTime=new Date().getTime()+(this.originalTimeout||0),this.width.set(-1),this.options.progressBar&&(this.intervalId=setInterval(()=>this.updateProgress(),10))}remove(){this.state()!=="removed"&&(clearTimeout(this.timeout),this.state.set("removed"),this.timeout=setTimeout(()=>this.toastrService.remove(this.toastPackage.toastId)))}tapToast(){this.state()!=="removed"&&(this.toastPackage.triggerTap(),this.options.tapToDismiss&&this.remove())}stickAround(){this.state()!=="removed"&&(clearTimeout(this.timeout),this.options.timeOut=0,this.hideTime=0,clearInterval(this.intervalId),this.width.set(0))}delayedHideToast(){this.options.disableTimeOut===!0||this.options.disableTimeOut==="extendedTimeOut"||this.options.extendedTimeOut===0||this.state()==="removed"||(this.timeout=setTimeout(()=>this.remove(),this.options.extendedTimeOut),this.options.timeOut=this.options.extendedTimeOut,this.hideTime=new Date().getTime()+(this.options.timeOut||0),this.width.set(-1),this.options.progressBar&&(this.intervalId=setInterval(()=>this.updateProgress(),10)))}static \u0275fac=function(t){return new(t||s)(T(F),T(w),T(E))};static \u0275cmp=$({type:s,selectors:[["","toast-component",""]],hostVars:4,hostBindings:function(t,i){t&1&&R("click",function(){return i.tapToast()})("mouseenter",function(){return i.stickAround()})("mouseleave",function(){return i.delayedHideToast()}),t&2&&(p(i.toastClasses),A("display",i.displayStyle))},standalone:!0,features:[U],attrs:vt,decls:5,vars:5,consts:[["type","button","class","toast-close-button","aria-label","Close",3,"click",4,"ngIf"],[3,"class",4,"ngIf"],["role","alert",3,"class","innerHTML",4,"ngIf"],["role","alert",3,"class",4,"ngIf"],[4,"ngIf"],["type","button","aria-label","Close",1,"toast-close-button",3,"click"],["aria-hidden","true"],["role","alert",3,"innerHTML"],["role","alert"],[1,"toast-progress"]],template:function(t,i){t&1&&D(0,jt,3,0,"button",0)(1,Ht,3,5,"div",1)(2,Mt,1,3,"div",2)(3,Et,2,4,"div",3)(4,St,2,2,"div",4),t&2&&(c("ngIf",i.options.closeButton),a(),c("ngIf",i.title),a(),c("ngIf",i.message&&i.options.enableHtml),a(),c("ngIf",i.message&&!i.options.enableHtml),a(),c("ngIf",i.options.progressBar))},dependencies:[W],encapsulation:2,changeDetection:0})}return s})(),ne=C(u({},gt),{toastComponent:Lt});var ue=(()=>{let o=class o{constructor(t,i,n){this.http=t,this.toastr=i,this.database=n,this.favourits=g([]),this.carts=g([]),this.apiLink=this.database.app.options.databaseURL?.toString()}getDataAPI(t){return this.http.get(`${this.apiLink}/products.json`)}getpagesCarasouelAPI(t){return this.http.get(`${this.apiLink}/${t}.json`)}getpagesContentAPI(t){return this.http.get(`${this.apiLink}/${t}.json`)}createe(t,i,n){i=="add-product"&&n.department!=""&&n.department!=" "&&n.department!=null&&n.department!=null?this.http.post(`${this.apiLink}/products.json`,n).subscribe(r=>{this.toastr.success("\u062A\u0645 \u0627\u0636\u0627\u0641\u0629 \u0627\u0644\u0645\u0646\u062A\u062C","\u0639\u0645\u0644\u064A\u0629 \u0646\u0627\u062C\u062D\u0629"),this.http.post(`${this.apiLink}/products-copy.json`,n).subscribe()}):i!="add-product"&&n.department!=""&&n.department!=" "&&n.department!=null&&n.department!=null&&t!=""&&t!=" "&&t!=null&&t!=null?this.http.put(`${this.apiLink}/products/${t}.json`,n).subscribe(r=>{this.toastr.success("\u062A\u0645 \u062A\u0639\u062F\u064A\u0644 \u0627\u0644\u0645\u0646\u062A\u062C","\u0639\u0645\u0644\u064A\u0629 \u0646\u0627\u062C\u062D\u0629")}):location.reload()}updatePagesTitle(t){this.getDataAPI("pagesTitles").subscribe(i=>{for(let n in i)i[n].id==t.id&&this.http.put(`${this.apiLink}/pagesTitles/${n}.json`,t).subscribe(()=>{this.toastr.warning("\u062A\u0645 \u062A\u0639\u062F\u064A\u0644 \u0627\u0644\u0639\u0646\u0627\u0648\u064A\u0646","\u0639\u0645\u0644\u064A\u0629 \u0646\u0627\u062C\u062D\u0629")})})}del(t,i){return this.http.delete(`${this.apiLink}/${t}/${i}.json`).subscribe(n=>{this.toastr.success("\u062A\u0645 \u062D\u0630\u0641 \u0627\u0644\u0635\u0648\u0631\u0629","\u0639\u0645\u0644\u064A\u0629 \u0646\u0627\u062C\u062D\u0629")})}getSocialAPI(t){return this.http.get(`${this.apiLink}/${t}.json`)}returnSoical(t){let i=[];return this.getSocialAPI(t).subscribe(n=>{for(let r in n)i.push(n[r])}),i}updateWhatsapp(t){this.getSocialAPI("whatsapp").subscribe(i=>{for(let n in i)this.http.put(`${this.apiLink}/whatsapp/${n}.json`,t).subscribe(r=>{this.toastr.success("\u062A\u0645 \u062A\u0639\u062F\u064A\u0644 \u0627\u0644\u0648\u0627\u062A\u0633\u0627\u0628","\u0639\u0645\u0644\u064A\u0629 \u0646\u0627\u062C\u062D\u0629")})})}updateSnapChat(t){this.getSocialAPI("snapchat").subscribe(i=>{for(let n in i)this.http.put(`${this.apiLink}/snapchat/${n}.json`,t).subscribe(r=>{this.toastr.warning("\u062A\u0645 \u062A\u0639\u062F\u064A\u0644 \u0633\u0646\u0627\u0628 \u0634\u0627\u062A","\u0639\u0645\u0644\u064A\u0629 \u0646\u0627\u062C\u062D\u0629")})})}updateInstagram(t){this.getSocialAPI("insta").subscribe(i=>{for(let n in i)this.http.put(`${this.apiLink}/insta/${n}.json`,t).subscribe(r=>{this.toastr.error("\u062A\u0645 \u062A\u0639\u062F\u064A\u0644 \u0627\u0644\u0627\u0646\u0633\u062A\u062C\u0631\u0627\u0645","\u0639\u0645\u0644\u064A\u0629 \u0646\u0627\u062C\u062D\u0629")})})}setFavourite(t){let i=[];i=JSON.parse(localStorage.getItem("Favourites")),i.push(t),localStorage.setItem("Favourites",JSON.stringify(i))}};o.\u0275fac=function(i){return new(i||o)(d(dt),d(F),d(ft))},o.\u0275prov=y({token:o,factory:o.\u0275fac,providedIn:"root"});let s=o;return s})();export{F as a,se as b,ue as c};