import './polyfills.server.mjs';
import{a as U,i as k,m as A}from"./chunk-IZ6JN2LE.mjs";import{Ic as a,Kc as n,Lb as f,Nc as u,Pa as y,R as h,Sa as x,U as v,Z as g,_ as i,da as s,fa as m,ib as S,mb as b,pb as C,sa as l,sb as c,tb as p,ub as D,wb as I,wc as E,xb as M,yb as w,zb as _}from"./chunk-3D55TWHC.mjs";var O=(()=>{class e{constructor(){this.elementRef=i(l),this.builder=i(u),this.player=this.builder.build([n({transform:"translateX(0)"}),a("300ms",n({transform:"translateX(-5px)"})),a("300ms",n({transform:"translateX(5px)"})),a("300ms",n({transform:"translateX(-5px)"})),a("300ms",n({transform:"translateX(5px)"})),a("300ms",n({transform:"translateX(0)"}))]).create(this.elementRef.nativeElement)}playAnimation(){this.player.play(),this.player.onDone(()=>{this.player.reset(),this.player.play()})}stopAnimation(){this.player&&(this.player.pause(),this.player.reset())}onMouseEnter(){this.playAnimation()}onMouseLeave(){this.stopAnimation()}static{this.\u0275fac=function(t){return new(t||e)}}static{this.\u0275dir=m({type:e,selectors:[["","wobble",""]],hostBindings:function(t,o){t&1&&I("mouseenter",function(){return o.onMouseEnter()})("mouseleave",function(){return o.onMouseLeave()})},standalone:!0})}}return e})();var N=(()=>{class e{constructor(){this.elementRef=i(l),this.builder=i(u),this.player=this.builder.build([n({opacity:0}),a("1.5s ease-in",n({opacity:1}))]).create(this.elementRef.nativeElement)}ngOnInit(){this.player.play()}static{this.\u0275fac=function(t){return new(t||e)}}static{this.\u0275dir=m({type:e,selectors:[["","fadeIn",""]],standalone:!0})}}return e})();var F=["*"],te=(()=>{class e{static{this.\u0275fac=function(t){return new(t||e)}}static{this.\u0275cmp=s({type:e,selectors:[["app-main-container"]],standalone:!0,features:[f],ngContentSelectors:F,decls:2,vars:0,consts:[[1,"main-container"]],template:function(t,o){t&1&&(w(),c(0,"div",0),_(1),p())},styles:['.main-container[_ngcontent-%COMP%]{display:flex;gap:2rem;flex-flow:column nowrap;align-items:center;margin:0 auto;padding:1rem;height:20vh;min-height:300px}.font-sixtyfour[_ngcontent-%COMP%]{font-family:Sixtyfour Convergence,sans-serif;font-optical-sizing:auto;font-weight:400;font-style:normal;font-variation-settings:"BLED" 0,"SCAN" 0,"XELA" 0,"YELA" 0}']})}}return e})();function T(e,R){if(e&1&&D(0,"iframe",1),e&2){let r=M();b("src",r._videoSrc,y)}}var fe=(()=>{class e{constructor(){this.domeSanitizer=i(k),this._videoSrc=""}set videoSrc(r){this._videoSrc=this.domeSanitizer.bypassSecurityTrustResourceUrl(r)}static{this.\u0275fac=function(t){return new(t||e)}}static{this.\u0275cmp=s({type:e,selectors:[["app-iframe-video"]],inputs:{videoSrc:"videoSrc"},standalone:!0,features:[f],decls:2,vars:1,consts:[[1,"iframe-video-container"],["width","760","height","315","title","Youtube Video","frameborder","0","allow","accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture","allowfullscreen","",3,"src"]],template:function(t,o){t&1&&(c(0,"div",0),S(1,T,1,1,"iframe",1),p()),t&2&&(x(),C(1,o._videoSrc?1:-1))},dependencies:[E],styles:[".iframe-video-container[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%]{border-radius:1rem;box-shadow:0 0 47px #ff422d}"]})}}return e})();var j=(()=>{class e{constructor(r){this.http=r,this.apiUrl="http://localhost:3000/api/usuarios"}verificarUsuario(r){return this.http.post(`${this.apiUrl}/existe`,{email:r})}crearUsuario(r,t,o){return this.http.post(`${this.apiUrl}/crear`,{name:r,email:t,password:o})}login(r,t){return this.http.post(`${this.apiUrl}/login`,{email:r,password:t}).pipe(h(o=>{localStorage.setItem("token",o.token),localStorage.setItem("username",o.name)}))}logout(){localStorage.removeItem("token"),localStorage.removeItem("username")}getToken(){return localStorage.getItem("token")}getPerfilUsuario(){return this.http.get(`${this.apiUrl}/perfil`,{headers:{Authorization:`Bearer ${this.getToken()}`}})}isLoggedIn(){return!!this.getToken()}static{this.\u0275fac=function(t){return new(t||e)(g(U))}}static{this.\u0275prov=v({token:e,factory:e.\u0275fac,providedIn:"root"})}}return e})();var we=(e,R)=>{let t=i(j).getToken(),o=i(A);return t?!0:(o.navigate(["/login"]),!1)};export{O as a,N as b,te as c,fe as d,j as e,we as f};