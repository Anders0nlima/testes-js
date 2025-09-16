import{R as La,r as N,u as Da,j as m}from"./index-DfmCRIcE.js";/*!
 * Font Awesome Free 7.0.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2025 Fonticons, Inc.
 */function Pe(e,a){(a==null||a>e.length)&&(a=e.length);for(var t=0,r=Array(a);t<a;t++)r[t]=e[t];return r}function Vt(e){if(Array.isArray(e))return e}function Bt(e){if(Array.isArray(e))return Pe(e)}function Wt(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}function Yt(e,a){for(var t=0;t<a.length;t++){var r=a[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,Ra(r.key),r)}}function Kt(e,a,t){return a&&Yt(e.prototype,a),Object.defineProperty(e,"prototype",{writable:!1}),e}function se(e,a){var t=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(!t){if(Array.isArray(e)||(t=Be(e))||a){t&&(e=t);var r=0,n=function(){};return{s:n,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(l){throw l},f:n}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var i,o=!0,s=!1;return{s:function(){t=t.call(e)},n:function(){var l=t.next();return o=l.done,l},e:function(l){s=!0,i=l},f:function(){try{o||t.return==null||t.return()}finally{if(s)throw i}}}}function A(e,a,t){return(a=Ra(a))in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function Gt(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Xt(e,a){var t=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(t!=null){var r,n,i,o,s=[],l=!0,f=!1;try{if(i=(t=t.call(e)).next,a===0){if(Object(t)!==t)return;l=!1}else for(;!(l=(r=i.call(t)).done)&&(s.push(r.value),s.length!==a);l=!0);}catch(u){f=!0,n=u}finally{try{if(!l&&t.return!=null&&(o=t.return(),Object(o)!==o))return}finally{if(f)throw n}}return s}}function Ht(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function qt(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function aa(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),t.push.apply(t,r)}return t}function c(e){for(var a=1;a<arguments.length;a++){var t=arguments[a]!=null?arguments[a]:{};a%2?aa(Object(t),!0).forEach(function(r){A(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):aa(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function me(e,a){return Vt(e)||Xt(e,a)||Be(e,a)||Ht()}function O(e){return Bt(e)||Gt(e)||Be(e)||qt()}function Jt(e,a){if(typeof e!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,a);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(a==="string"?String:Number)(e)}function Ra(e){var a=Jt(e,"string");return typeof a=="symbol"?a:a+""}function ce(e){"@babel/helpers - typeof";return ce=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},ce(e)}function Be(e,a){if(e){if(typeof e=="string")return Pe(e,a);var t={}.toString.call(e).slice(8,-1);return t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set"?Array.from(e):t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?Pe(e,a):void 0}}var ta=function(){},We={},za={},$a=null,Ua={mark:ta,measure:ta};try{typeof window<"u"&&(We=window),typeof document<"u"&&(za=document),typeof MutationObserver<"u"&&($a=MutationObserver),typeof performance<"u"&&(Ua=performance)}catch{}var Zt=We.navigator||{},ra=Zt.userAgent,na=ra===void 0?"":ra,$=We,P=za,ia=$a,ie=Ua;$.document;var z=!!P.documentElement&&!!P.head&&typeof P.addEventListener=="function"&&typeof P.createElement=="function",Va=~na.indexOf("MSIE")||~na.indexOf("Trident/"),xe,Qt=/fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|jr|jfr|jdr|cr|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,er=/Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Slab Press|Slab|Whiteboard)?.*/i,Ba={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"},slab:{"fa-regular":"regular",faslr:"regular"},"slab-press":{"fa-regular":"regular",faslpr:"regular"},thumbprint:{"fa-light":"light",fatl:"light"},whiteboard:{"fa-semibold":"semibold",fawsb:"semibold"},notdog:{"fa-solid":"solid",fans:"solid"},"notdog-duo":{"fa-solid":"solid",fands:"solid"},etch:{"fa-solid":"solid",faes:"solid"},jelly:{"fa-regular":"regular",fajr:"regular"},"jelly-fill":{"fa-regular":"regular",fajfr:"regular"},"jelly-duo":{"fa-regular":"regular",fajdr:"regular"},chisel:{"fa-regular":"regular",facr:"regular"}},ar={GROUP:"duotone-group",PRIMARY:"primary",SECONDARY:"secondary"},Wa=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press"],E="classic",te="duotone",Ya="sharp",Ka="sharp-duotone",Ga="chisel",Xa="etch",Ha="jelly",qa="jelly-duo",Ja="jelly-fill",Za="notdog",Qa="notdog-duo",et="slab",at="slab-press",tt="thumbprint",rt="whiteboard",tr="Classic",rr="Duotone",nr="Sharp",ir="Sharp Duotone",or="Chisel",sr="Etch",lr="Jelly",fr="Jelly Duo",cr="Jelly Fill",ur="Notdog",dr="Notdog Duo",mr="Slab",pr="Slab Press",vr="Thumbprint",gr="Whiteboard",nt=[E,te,Ya,Ka,Ga,Xa,Ha,qa,Ja,Za,Qa,et,at,tt,rt];xe={},A(A(A(A(A(A(A(A(A(A(xe,E,tr),te,rr),Ya,nr),Ka,ir),Ga,or),Xa,sr),Ha,lr),qa,fr),Ja,cr),Za,ur),A(A(A(A(A(xe,Qa,dr),et,mr),at,pr),tt,vr),rt,gr);var hr={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"},slab:{400:"faslr"},"slab-press":{400:"faslpr"},whiteboard:{600:"fawsb"},thumbprint:{300:"fatl"},notdog:{900:"fans"},"notdog-duo":{900:"fands"},etch:{900:"faes"},chisel:{400:"facr"},jelly:{400:"fajr"},"jelly-fill":{400:"fajfr"},"jelly-duo":{400:"fajdr"}},br={"Font Awesome 7 Free":{900:"fas",400:"far"},"Font Awesome 7 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 7 Brands":{400:"fab",normal:"fab"},"Font Awesome 7 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 7 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 7 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"},"Font Awesome 7 Jelly":{400:"fajr",normal:"fajr"},"Font Awesome 7 Jelly Fill":{400:"fajfr",normal:"fajfr"},"Font Awesome 7 Jelly Duo":{400:"fajdr",normal:"fajdr"},"Font Awesome 7 Slab":{400:"faslr",normal:"faslr"},"Font Awesome 7 Slab Press":{400:"faslpr",normal:"faslpr"},"Font Awesome 7 Thumbprint":{300:"fatl",normal:"fatl"},"Font Awesome 7 Notdog":{900:"fans",normal:"fans"},"Font Awesome 7 Notdog Duo":{900:"fands",normal:"fands"},"Font Awesome 7 Etch":{900:"faes",normal:"faes"},"Font Awesome 7 Chisel":{400:"facr",normal:"facr"},"Font Awesome 7 Whiteboard":{600:"fawsb",normal:"fawsb"}},yr=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["chisel",{defaultShortPrefixId:"facr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["etch",{defaultShortPrefixId:"faes",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["jelly",{defaultShortPrefixId:"fajr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-duo",{defaultShortPrefixId:"fajdr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-fill",{defaultShortPrefixId:"fajfr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["notdog",{defaultShortPrefixId:"fans",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["notdog-duo",{defaultShortPrefixId:"fands",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["slab",{defaultShortPrefixId:"faslr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["slab-press",{defaultShortPrefixId:"faslpr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["thumbprint",{defaultShortPrefixId:"fatl",defaultStyleId:"light",styleIds:["light"],futureStyleIds:[],defaultFontWeight:300}],["whiteboard",{defaultShortPrefixId:"fawsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}]]),xr={chisel:{regular:"facr"},classic:{brands:"fab",light:"fal",regular:"far",solid:"fas",thin:"fat"},duotone:{light:"fadl",regular:"fadr",solid:"fad",thin:"fadt"},etch:{solid:"faes"},jelly:{regular:"fajr"},"jelly-duo":{regular:"fajdr"},"jelly-fill":{regular:"fajfr"},notdog:{solid:"fans"},"notdog-duo":{solid:"fands"},sharp:{light:"fasl",regular:"fasr",solid:"fass",thin:"fast"},"sharp-duotone":{light:"fasdl",regular:"fasdr",solid:"fasds",thin:"fasdt"},slab:{regular:"faslr"},"slab-press":{regular:"faslpr"},thumbprint:{light:"fatl"},whiteboard:{semibold:"fawsb"}},it=["fak","fa-kit","fakd","fa-kit-duotone"],oa={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},Ar=["kit"],Sr="kit",wr="kit-duotone",kr="Kit",jr="Kit Duotone";A(A({},Sr,kr),wr,jr);var _r={kit:{"fa-kit":"fak"}},Pr={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},Er={kit:{fak:"fa-kit"}},sa={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},Ae,oe={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Nr=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press"],Ir="classic",Cr="duotone",Tr="sharp",Or="sharp-duotone",Fr="chisel",Mr="etch",Lr="jelly",Dr="jelly-duo",Rr="jelly-fill",zr="notdog",$r="notdog-duo",Ur="slab",Vr="slab-press",Br="thumbprint",Wr="whiteboard",Yr="Classic",Kr="Duotone",Gr="Sharp",Xr="Sharp Duotone",Hr="Chisel",qr="Etch",Jr="Jelly",Zr="Jelly Duo",Qr="Jelly Fill",en="Notdog",an="Notdog Duo",tn="Slab",rn="Slab Press",nn="Thumbprint",on="Whiteboard";Ae={},A(A(A(A(A(A(A(A(A(A(Ae,Ir,Yr),Cr,Kr),Tr,Gr),Or,Xr),Fr,Hr),Mr,qr),Lr,Jr),Dr,Zr),Rr,Qr),zr,en),A(A(A(A(A(Ae,$r,an),Ur,tn),Vr,rn),Br,nn),Wr,on);var sn="kit",ln="kit-duotone",fn="Kit",cn="Kit Duotone";A(A({},sn,fn),ln,cn);var un={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"},slab:{"fa-regular":"faslr"},"slab-press":{"fa-regular":"faslpr"},whiteboard:{"fa-semibold":"fawsb"},thumbprint:{"fa-light":"fatl"},notdog:{"fa-solid":"fans"},"notdog-duo":{"fa-solid":"fands"},etch:{"fa-solid":"faes"},jelly:{"fa-regular":"fajr"},"jelly-fill":{"fa-regular":"fajfr"},"jelly-duo":{"fa-regular":"fajdr"},chisel:{"fa-regular":"facr"}},dn={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"],slab:["faslr"],"slab-press":["faslpr"],whiteboard:["fawsb"],thumbprint:["fatl"],notdog:["fans"],"notdog-duo":["fands"],etch:["faes"],jelly:["fajr"],"jelly-fill":["fajfr"],"jelly-duo":["fajdr"],chisel:["facr"]},Ee={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"},slab:{faslr:"fa-regular"},"slab-press":{faslpr:"fa-regular"},whiteboard:{fawsb:"fa-semibold"},thumbprint:{fatl:"fa-light"},notdog:{fans:"fa-solid"},"notdog-duo":{fands:"fa-solid"},etch:{faes:"fa-solid"},jelly:{fajr:"fa-regular"},"jelly-fill":{fajfr:"fa-regular"},"jelly-duo":{fajdr:"fa-regular"},chisel:{facr:"fa-regular"}},mn=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands","fa-semibold"],ot=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt","faslr","faslpr","fawsb","fatl","fans","fands","faes","fajr","fajfr","fajdr","facr"].concat(Nr,mn),pn=["solid","regular","light","thin","duotone","brands","semibold"],st=[1,2,3,4,5,6,7,8,9,10],vn=st.concat([11,12,13,14,15,16,17,18,19,20]),gn=["aw","fw","pull-left","pull-right"],hn=[].concat(O(Object.keys(dn)),pn,gn,["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","inverse","layers","layers-bottom-left","layers-bottom-right","layers-counter","layers-text","layers-top-left","layers-top-right","li","pull-end","pull-start","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul","width-auto","width-fixed",oe.GROUP,oe.SWAP_OPACITY,oe.PRIMARY,oe.SECONDARY]).concat(st.map(function(e){return"".concat(e,"x")})).concat(vn.map(function(e){return"w-".concat(e)})),bn={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},D="___FONT_AWESOME___",Ne=16,lt="fa",ft="svg-inline--fa",W="data-fa-i2svg",Ie="data-fa-pseudo-element",yn="data-fa-pseudo-element-pending",Ye="data-prefix",Ke="data-icon",la="fontawesome-i2svg",xn="async",An=["HTML","HEAD","STYLE","SCRIPT"],ct=["::before","::after",":before",":after"],ut=(function(){try{return!0}catch{return!1}})();function re(e){return new Proxy(e,{get:function(t,r){return r in t?t[r]:t[E]}})}var dt=c({},Ba);dt[E]=c(c(c(c({},{"fa-duotone":"duotone"}),Ba[E]),oa.kit),oa["kit-duotone"]);var Sn=re(dt),Ce=c({},xr);Ce[E]=c(c(c(c({},{duotone:"fad"}),Ce[E]),sa.kit),sa["kit-duotone"]);var fa=re(Ce),Te=c({},Ee);Te[E]=c(c({},Te[E]),Er.kit);var Ge=re(Te),Oe=c({},un);Oe[E]=c(c({},Oe[E]),_r.kit);re(Oe);var wn=Qt,mt="fa-layers-text",kn=er,jn=c({},hr);re(jn);var _n=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Se=ar,Pn=[].concat(O(Ar),O(hn)),Q=$.FontAwesomeConfig||{};function En(e){var a=P.querySelector("script["+e+"]");if(a)return a.getAttribute(e)}function Nn(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(P&&typeof P.querySelector=="function"){var In=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-search-pseudo-elements","searchPseudoElements"],["data-search-pseudo-elements-warnings","searchPseudoElementsWarnings"],["data-search-pseudo-elements-full-scan","searchPseudoElementsFullScan"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];In.forEach(function(e){var a=me(e,2),t=a[0],r=a[1],n=Nn(En(t));n!=null&&(Q[r]=n)})}var pt={styleDefault:"solid",familyDefault:E,cssPrefix:lt,replacementClass:ft,autoReplaceSvg:!0,autoAddCss:!0,searchPseudoElements:!1,searchPseudoElementsWarnings:!0,searchPseudoElementsFullScan:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Q.familyPrefix&&(Q.cssPrefix=Q.familyPrefix);var q=c(c({},pt),Q);q.autoReplaceSvg||(q.observeMutations=!1);var p={};Object.keys(pt).forEach(function(e){Object.defineProperty(p,e,{enumerable:!0,set:function(t){q[e]=t,ee.forEach(function(r){return r(p)})},get:function(){return q[e]}})});Object.defineProperty(p,"familyPrefix",{enumerable:!0,set:function(a){q.cssPrefix=a,ee.forEach(function(t){return t(p)})},get:function(){return q.cssPrefix}});$.FontAwesomeConfig=p;var ee=[];function Cn(e){return ee.push(e),function(){ee.splice(ee.indexOf(e),1)}}var K=Ne,F={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Tn(e){if(!(!e||!z)){var a=P.createElement("style");a.setAttribute("type","text/css"),a.innerHTML=e;for(var t=P.head.childNodes,r=null,n=t.length-1;n>-1;n--){var i=t[n],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return P.head.insertBefore(a,r),e}}var On="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function ca(){for(var e=12,a="";e-- >0;)a+=On[Math.random()*62|0];return a}function J(e){for(var a=[],t=(e||[]).length>>>0;t--;)a[t]=e[t];return a}function Xe(e){return e.classList?J(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(a){return a})}function vt(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Fn(e){return Object.keys(e||{}).reduce(function(a,t){return a+"".concat(t,'="').concat(vt(e[t]),'" ')},"").trim()}function pe(e){return Object.keys(e||{}).reduce(function(a,t){return a+"".concat(t,": ").concat(e[t].trim(),";")},"")}function He(e){return e.size!==F.size||e.x!==F.x||e.y!==F.y||e.rotate!==F.rotate||e.flipX||e.flipY}function Mn(e){var a=e.transform,t=e.containerWidth,r=e.iconWidth,n={transform:"translate(".concat(t/2," 256)")},i="translate(".concat(a.x*32,", ").concat(a.y*32,") "),o="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),s="rotate(".concat(a.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(s)},f={transform:"translate(".concat(r/2*-1," -256)")};return{outer:n,inner:l,path:f}}function Ln(e){var a=e.transform,t=e.width,r=t===void 0?Ne:t,n=e.height,i=n===void 0?Ne:n,o="";return Va?o+="translate(".concat(a.x/K-r/2,"em, ").concat(a.y/K-i/2,"em) "):o+="translate(calc(-50% + ".concat(a.x/K,"em), calc(-50% + ").concat(a.y/K,"em)) "),o+="scale(".concat(a.size/K*(a.flipX?-1:1),", ").concat(a.size/K*(a.flipY?-1:1),") "),o+="rotate(".concat(a.rotate,"deg) "),o}var Dn=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 7 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 7 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 7 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 7 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 7 Duotone";
  --fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 7 Duotone";
  --fa-font-duotone-light: normal 300 1em/1 "Font Awesome 7 Duotone";
  --fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 7 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 7 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-slab-regular: normal 400 1em/1 "Font Awesome 7 Slab";
  --fa-font-slab-press-regular: normal 400 1em/1 "Font Awesome 7 Slab Press";
  --fa-font-whiteboard-semibold: normal 600 1em/1 "Font Awesome 7 Whiteboard";
  --fa-font-thumbprint-light: normal 300 1em/1 "Font Awesome 7 Thumbprint";
  --fa-font-notdog-solid: normal 900 1em/1 "Font Awesome 7 Notdog";
  --fa-font-notdog-duo-solid: normal 900 1em/1 "Font Awesome 7 Notdog Duo";
  --fa-font-etch-solid: normal 900 1em/1 "Font Awesome 7 Etch";
  --fa-font-jelly-regular: normal 400 1em/1 "Font Awesome 7 Jelly";
  --fa-font-jelly-fill-regular: normal 400 1em/1 "Font Awesome 7 Jelly Fill";
  --fa-font-jelly-duo-regular: normal 400 1em/1 "Font Awesome 7 Jelly Duo";
  --fa-font-chisel-regular: normal 400 1em/1 "Font Awesome 7 Chisel";
}

.svg-inline--fa {
  box-sizing: content-box;
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285714em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left,
.svg-inline--fa .fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-pull-right,
.svg-inline--fa .fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  inset-block-start: 0.25em; /* syncing vertical alignment with Web Font rendering */
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.fa-layers .svg-inline--fa {
  inset: 0;
  margin: auto;
  position: absolute;
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: calc(10 / 16 * 1em); /* converts a 10px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 10 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 10 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xs {
  font-size: calc(12 / 16 * 1em); /* converts a 12px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 12 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 12 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-sm {
  font-size: calc(14 / 16 * 1em); /* converts a 14px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 14 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 14 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-lg {
  font-size: calc(20 / 16 * 1em); /* converts a 20px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 20 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 20 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xl {
  font-size: calc(24 / 16 * 1em); /* converts a 24px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 24 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 24 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-2xl {
  font-size: calc(32 / 16 * 1em); /* converts a 32px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 32 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 32 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-width-auto {
  --fa-width: auto;
}

.fa-fw,
.fa-width-fixed {
  --fa-width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-inline-start: var(--fa-li-margin, 2.5em);
  padding-inline-start: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

/* Heads Up: Bordered Icons will not be supported in the future!
  - This feature will be deprecated in the next major release of Font Awesome (v8)!
  - You may continue to use it in this version *v7), but it will not be supported in Font Awesome v8.
*/
/* Notes:
* --@{v.$css-prefix}-border-width = 1/16 by default (to render as ~1px based on a 16px default font-size)
* --@{v.$css-prefix}-border-padding =
  ** 3/16 for vertical padding (to give ~2px of vertical whitespace around an icon considering it's vertical alignment)
  ** 4/16 for horizontal padding (to give ~4px of horizontal whitespace around an icon)
*/
.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.0625em);
  box-sizing: var(--fa-border-box-sizing, content-box);
  padding: var(--fa-border-padding, 0.1875em 0.25em);
}

.fa-pull-left,
.fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right,
.fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
  .fa-bounce,
  .fa-fade,
  .fa-beat-fade,
  .fa-flip,
  .fa-pulse,
  .fa-shake,
  .fa-spin,
  .fa-spin-pulse {
    animation: none !important;
    transition: none !important;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.svg-inline--fa.fa-inverse {
  fill: var(--fa-inverse, #fff);
}

.fa-stack {
  display: inline-block;
  height: 2em;
  line-height: 2em;
  position: relative;
  vertical-align: middle;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.svg-inline--fa.fa-stack-1x {
  --fa-width: 1.25em;
  height: 1em;
  width: var(--fa-width);
}
.svg-inline--fa.fa-stack-2x {
  --fa-width: 2.5em;
  height: 2em;
  width: var(--fa-width);
}

.fa-stack-1x,
.fa-stack-2x {
  inset: 0;
  margin: auto;
  position: absolute;
  z-index: var(--fa-stack-z-index, auto);
}`;function gt(){var e=lt,a=ft,t=p.cssPrefix,r=p.replacementClass,n=Dn;if(t!==e||r!==a){var i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(a),"g");n=n.replace(i,".".concat(t,"-")).replace(o,"--".concat(t,"-")).replace(s,".".concat(r))}return n}var ua=!1;function we(){p.autoAddCss&&!ua&&(Tn(gt()),ua=!0)}var Rn={mixout:function(){return{dom:{css:gt,insertCss:we}}},hooks:function(){return{beforeDOMElementCreation:function(){we()},beforeI2svg:function(){we()}}}},R=$||{};R[D]||(R[D]={});R[D].styles||(R[D].styles={});R[D].hooks||(R[D].hooks={});R[D].shims||(R[D].shims=[]);var T=R[D],ht=[],bt=function(){P.removeEventListener("DOMContentLoaded",bt),ue=1,ht.map(function(a){return a()})},ue=!1;z&&(ue=(P.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(P.readyState),ue||P.addEventListener("DOMContentLoaded",bt));function zn(e){z&&(ue?setTimeout(e,0):ht.push(e))}function ne(e){var a=e.tag,t=e.attributes,r=t===void 0?{}:t,n=e.children,i=n===void 0?[]:n;return typeof e=="string"?vt(e):"<".concat(a," ").concat(Fn(r),">").concat(i.map(ne).join(""),"</").concat(a,">")}function da(e,a,t){if(e&&e[a]&&e[a][t])return{prefix:a,iconName:t,icon:e[a][t]}}var ke=function(a,t,r,n){var i=Object.keys(a),o=i.length,s=t,l,f,u;for(r===void 0?(l=1,u=a[i[0]]):(l=0,u=r);l<o;l++)f=i[l],u=s(u,a[f],f,a);return u};function yt(e){return O(e).length!==1?null:e.codePointAt(0).toString(16)}function ma(e){return Object.keys(e).reduce(function(a,t){var r=e[t],n=!!r.icon;return n?a[r.iconName]=r.icon:a[t]=r,a},{})}function Fe(e,a){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=t.skipHooks,n=r===void 0?!1:r,i=ma(a);typeof T.hooks.addPack=="function"&&!n?T.hooks.addPack(e,ma(a)):T.styles[e]=c(c({},T.styles[e]||{}),i),e==="fas"&&Fe("fa",a)}var ae=T.styles,$n=T.shims,xt=Object.keys(Ge),Un=xt.reduce(function(e,a){return e[a]=Object.keys(Ge[a]),e},{}),qe=null,At={},St={},wt={},kt={},jt={};function Vn(e){return~Pn.indexOf(e)}function Bn(e,a){var t=a.split("-"),r=t[0],n=t.slice(1).join("-");return r===e&&n!==""&&!Vn(n)?n:null}var _t=function(){var a=function(i){return ke(ae,function(o,s,l){return o[l]=ke(s,i,{}),o},{})};At=a(function(n,i,o){if(i[3]&&(n[i[3]]=o),i[2]){var s=i[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){n[l.toString(16)]=o})}return n}),St=a(function(n,i,o){if(n[o]=o,i[2]){var s=i[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){n[l]=o})}return n}),jt=a(function(n,i,o){var s=i[2];return n[o]=o,s.forEach(function(l){n[l]=o}),n});var t="far"in ae||p.autoFetchSvg,r=ke($n,function(n,i){var o=i[0],s=i[1],l=i[2];return s==="far"&&!t&&(s="fas"),typeof o=="string"&&(n.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(n.unicodes[o.toString(16)]={prefix:s,iconName:l}),n},{names:{},unicodes:{}});wt=r.names,kt=r.unicodes,qe=ve(p.styleDefault,{family:p.familyDefault})};Cn(function(e){qe=ve(e.styleDefault,{family:p.familyDefault})});_t();function Je(e,a){return(At[e]||{})[a]}function Wn(e,a){return(St[e]||{})[a]}function B(e,a){return(jt[e]||{})[a]}function Pt(e){return wt[e]||{prefix:null,iconName:null}}function Yn(e){var a=kt[e],t=Je("fas",e);return a||(t?{prefix:"fas",iconName:t}:null)||{prefix:null,iconName:null}}function U(){return qe}var Et=function(){return{prefix:null,iconName:null,rest:[]}};function Kn(e){var a=E,t=xt.reduce(function(r,n){return r[n]="".concat(p.cssPrefix,"-").concat(n),r},{});return nt.forEach(function(r){(e.includes(t[r])||e.some(function(n){return Un[r].includes(n)}))&&(a=r)}),a}function ve(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=a.family,r=t===void 0?E:t,n=Sn[r][e];if(r===te&&!e)return"fad";var i=fa[r][e]||fa[r][n],o=e in T.styles?e:null,s=i||o||null;return s}function Gn(e){var a=[],t=null;return e.forEach(function(r){var n=Bn(p.cssPrefix,r);n?t=n:r&&a.push(r)}),{iconName:t,rest:a}}function pa(e){return e.sort().filter(function(a,t,r){return r.indexOf(a)===t})}var va=ot.concat(it);function ge(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=a.skipLookups,r=t===void 0?!1:t,n=null,i=pa(e.filter(function(v){return va.includes(v)})),o=pa(e.filter(function(v){return!va.includes(v)})),s=i.filter(function(v){return n=v,!Wa.includes(v)}),l=me(s,1),f=l[0],u=f===void 0?null:f,d=Kn(i),g=c(c({},Gn(o)),{},{prefix:ve(u,{family:d})});return c(c(c({},g),Jn({values:e,family:d,styles:ae,config:p,canonical:g,givenPrefix:n})),Xn(r,n,g))}function Xn(e,a,t){var r=t.prefix,n=t.iconName;if(e||!r||!n)return{prefix:r,iconName:n};var i=a==="fa"?Pt(n):{},o=B(r,n);return n=i.iconName||o||n,r=i.prefix||r,r==="far"&&!ae.far&&ae.fas&&!p.autoFetchSvg&&(r="fas"),{prefix:r,iconName:n}}var Hn=nt.filter(function(e){return e!==E||e!==te}),qn=Object.keys(Ee).filter(function(e){return e!==E}).map(function(e){return Object.keys(Ee[e])}).flat();function Jn(e){var a=e.values,t=e.family,r=e.canonical,n=e.givenPrefix,i=n===void 0?"":n,o=e.styles,s=o===void 0?{}:o,l=e.config,f=l===void 0?{}:l,u=t===te,d=a.includes("fa-duotone")||a.includes("fad"),g=f.familyDefault==="duotone",v=r.prefix==="fad"||r.prefix==="fa-duotone";if(!u&&(d||g||v)&&(r.prefix="fad"),(a.includes("fa-brands")||a.includes("fab"))&&(r.prefix="fab"),!r.prefix&&Hn.includes(t)){var w=Object.keys(s).find(function(_){return qn.includes(_)});if(w||f.autoFetchSvg){var h=yr.get(t).defaultShortPrefixId;r.prefix=h,r.iconName=B(r.prefix,r.iconName)||r.iconName}}return(r.prefix==="fa"||i==="fa")&&(r.prefix=U()||"fas"),r}var Zn=(function(){function e(){Wt(this,e),this.definitions={}}return Kt(e,[{key:"add",value:function(){for(var t=this,r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];var o=n.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){t.definitions[s]=c(c({},t.definitions[s]||{}),o[s]),Fe(s,o[s]);var l=Ge[E][s];l&&Fe(l,o[s]),_t()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(t,r){var n=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(n).map(function(i){var o=n[i],s=o.prefix,l=o.iconName,f=o.icon,u=f[2];t[s]||(t[s]={}),u.length>0&&u.forEach(function(d){typeof d=="string"&&(t[s][d]=f)}),t[s][l]=f}),t}}])})(),ga=[],X={},H={},Qn=Object.keys(H);function ei(e,a){var t=a.mixoutsTo;return ga=e,X={},Object.keys(H).forEach(function(r){Qn.indexOf(r)===-1&&delete H[r]}),ga.forEach(function(r){var n=r.mixout?r.mixout():{};if(Object.keys(n).forEach(function(o){typeof n[o]=="function"&&(t[o]=n[o]),ce(n[o])==="object"&&Object.keys(n[o]).forEach(function(s){t[o]||(t[o]={}),t[o][s]=n[o][s]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(o){X[o]||(X[o]=[]),X[o].push(i[o])})}r.provides&&r.provides(H)}),t}function Me(e,a){for(var t=arguments.length,r=new Array(t>2?t-2:0),n=2;n<t;n++)r[n-2]=arguments[n];var i=X[e]||[];return i.forEach(function(o){a=o.apply(null,[a].concat(r))}),a}function Y(e){for(var a=arguments.length,t=new Array(a>1?a-1:0),r=1;r<a;r++)t[r-1]=arguments[r];var n=X[e]||[];n.forEach(function(i){i.apply(null,t)})}function V(){var e=arguments[0],a=Array.prototype.slice.call(arguments,1);return H[e]?H[e].apply(null,a):void 0}function Le(e){e.prefix==="fa"&&(e.prefix="fas");var a=e.iconName,t=e.prefix||U();if(a)return a=B(t,a)||a,da(Nt.definitions,t,a)||da(T.styles,t,a)}var Nt=new Zn,ai=function(){p.autoReplaceSvg=!1,p.observeMutations=!1,Y("noAuto")},ti={i2svg:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return z?(Y("beforeI2svg",a),V("pseudoElements2svg",a),V("i2svg",a)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=a.autoReplaceSvgRoot;p.autoReplaceSvg===!1&&(p.autoReplaceSvg=!0),p.observeMutations=!0,zn(function(){ni({autoReplaceSvgRoot:t}),Y("watch",a)})}},ri={icon:function(a){if(a===null)return null;if(ce(a)==="object"&&a.prefix&&a.iconName)return{prefix:a.prefix,iconName:B(a.prefix,a.iconName)||a.iconName};if(Array.isArray(a)&&a.length===2){var t=a[1].indexOf("fa-")===0?a[1].slice(3):a[1],r=ve(a[0]);return{prefix:r,iconName:B(r,t)||t}}if(typeof a=="string"&&(a.indexOf("".concat(p.cssPrefix,"-"))>-1||a.match(wn))){var n=ge(a.split(" "),{skipLookups:!0});return{prefix:n.prefix||U(),iconName:B(n.prefix,n.iconName)||n.iconName}}if(typeof a=="string"){var i=U();return{prefix:i,iconName:B(i,a)||a}}}},I={noAuto:ai,config:p,dom:ti,parse:ri,library:Nt,findIconDefinition:Le,toHtml:ne},ni=function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=a.autoReplaceSvgRoot,r=t===void 0?P:t;(Object.keys(T.styles).length>0||p.autoFetchSvg)&&z&&p.autoReplaceSvg&&I.dom.i2svg({node:r})};function he(e,a){return Object.defineProperty(e,"abstract",{get:a}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return ne(r)})}}),Object.defineProperty(e,"node",{get:function(){if(z){var r=P.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function ii(e){var a=e.children,t=e.main,r=e.mask,n=e.attributes,i=e.styles,o=e.transform;if(He(o)&&t.found&&!r.found){var s=t.width,l=t.height,f={x:s/l/2,y:.5};n.style=pe(c(c({},i),{},{"transform-origin":"".concat(f.x+o.x/16,"em ").concat(f.y+o.y/16,"em")}))}return[{tag:"svg",attributes:n,children:a}]}function oi(e){var a=e.prefix,t=e.iconName,r=e.children,n=e.attributes,i=e.symbol,o=i===!0?"".concat(a,"-").concat(p.cssPrefix,"-").concat(t):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:c(c({},n),{},{id:o}),children:r}]}]}function si(e){var a=["aria-label","aria-labelledby","title","role"];return a.some(function(t){return t in e})}function Ze(e){var a=e.icons,t=a.main,r=a.mask,n=e.prefix,i=e.iconName,o=e.transform,s=e.symbol,l=e.maskId,f=e.extra,u=e.watchable,d=u===void 0?!1:u,g=r.found?r:t,v=g.width,w=g.height,h=[p.replacementClass,i?"".concat(p.cssPrefix,"-").concat(i):""].filter(function(S){return f.classes.indexOf(S)===-1}).filter(function(S){return S!==""||!!S}).concat(f.classes).join(" "),_={children:[],attributes:c(c({},f.attributes),{},{"data-prefix":n,"data-icon":i,class:h,role:f.attributes.role||"img",viewBox:"0 0 ".concat(v," ").concat(w)})};!si(f.attributes)&&!f.attributes["aria-hidden"]&&(_.attributes["aria-hidden"]="true"),d&&(_.attributes[W]="");var b=c(c({},_),{},{prefix:n,iconName:i,main:t,mask:r,maskId:l,transform:o,symbol:s,styles:c({},f.styles)}),j=r.found&&t.found?V("generateAbstractMask",b)||{children:[],attributes:{}}:V("generateAbstractIcon",b)||{children:[],attributes:{}},x=j.children,C=j.attributes;return b.children=x,b.attributes=C,s?oi(b):ii(b)}function ha(e){var a=e.content,t=e.width,r=e.height,n=e.transform,i=e.extra,o=e.watchable,s=o===void 0?!1:o,l=c(c({},i.attributes),{},{class:i.classes.join(" ")});s&&(l[W]="");var f=c({},i.styles);He(n)&&(f.transform=Ln({transform:n,width:t,height:r}),f["-webkit-transform"]=f.transform);var u=pe(f);u.length>0&&(l.style=u);var d=[];return d.push({tag:"span",attributes:l,children:[a]}),d}function li(e){var a=e.content,t=e.extra,r=c(c({},t.attributes),{},{class:t.classes.join(" ")}),n=pe(t.styles);n.length>0&&(r.style=n);var i=[];return i.push({tag:"span",attributes:r,children:[a]}),i}var je=T.styles;function De(e){var a=e[0],t=e[1],r=e.slice(4),n=me(r,1),i=n[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(p.cssPrefix,"-").concat(Se.GROUP)},children:[{tag:"path",attributes:{class:"".concat(p.cssPrefix,"-").concat(Se.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(p.cssPrefix,"-").concat(Se.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:a,height:t,icon:o}}var fi={found:!1,width:512,height:512};function ci(e,a){!ut&&!p.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(a,'" is missing.'))}function Re(e,a){var t=a;return a==="fa"&&p.styleDefault!==null&&(a=U()),new Promise(function(r,n){if(t==="fa"){var i=Pt(e)||{};e=i.iconName||e,a=i.prefix||a}if(e&&a&&je[a]&&je[a][e]){var o=je[a][e];return r(De(o))}ci(e,a),r(c(c({},fi),{},{icon:p.showMissingIcons&&e?V("missingIconAbstract")||{}:{}}))})}var ba=function(){},ze=p.measurePerformance&&ie&&ie.mark&&ie.measure?ie:{mark:ba,measure:ba},Z='FA "7.0.1"',ui=function(a){return ze.mark("".concat(Z," ").concat(a," begins")),function(){return It(a)}},It=function(a){ze.mark("".concat(Z," ").concat(a," ends")),ze.measure("".concat(Z," ").concat(a),"".concat(Z," ").concat(a," begins"),"".concat(Z," ").concat(a," ends"))},Qe={begin:ui,end:It},le=function(){};function ya(e){var a=e.getAttribute?e.getAttribute(W):null;return typeof a=="string"}function di(e){var a=e.getAttribute?e.getAttribute(Ye):null,t=e.getAttribute?e.getAttribute(Ke):null;return a&&t}function mi(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(p.replacementClass)}function pi(){if(p.autoReplaceSvg===!0)return fe.replace;var e=fe[p.autoReplaceSvg];return e||fe.replace}function vi(e){return P.createElementNS("http://www.w3.org/2000/svg",e)}function gi(e){return P.createElement(e)}function Ct(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=a.ceFn,r=t===void 0?e.tag==="svg"?vi:gi:t;if(typeof e=="string")return P.createTextNode(e);var n=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){n.setAttribute(o,e.attributes[o])});var i=e.children||[];return i.forEach(function(o){n.appendChild(Ct(o,{ceFn:r}))}),n}function hi(e){var a=" ".concat(e.outerHTML," ");return a="".concat(a,"Font Awesome fontawesome.com "),a}var fe={replace:function(a){var t=a[0];if(t.parentNode)if(a[1].forEach(function(n){t.parentNode.insertBefore(Ct(n),t)}),t.getAttribute(W)===null&&p.keepOriginalSource){var r=P.createComment(hi(t));t.parentNode.replaceChild(r,t)}else t.remove()},nest:function(a){var t=a[0],r=a[1];if(~Xe(t).indexOf(p.replacementClass))return fe.replace(a);var n=new RegExp("".concat(p.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(s,l){return l===p.replacementClass||l.match(n)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?t.removeAttribute("class"):t.setAttribute("class",i.toNode.join(" "))}var o=r.map(function(s){return ne(s)}).join(`
`);t.setAttribute(W,""),t.innerHTML=o}};function xa(e){e()}function Tt(e,a){var t=typeof a=="function"?a:le;if(e.length===0)t();else{var r=xa;p.mutateApproach===xn&&(r=$.requestAnimationFrame||xa),r(function(){var n=pi(),i=Qe.begin("mutate");e.map(n),i(),t()})}}var ea=!1;function Ot(){ea=!0}function $e(){ea=!1}var de=null;function Aa(e){if(ia&&p.observeMutations){var a=e.treeCallback,t=a===void 0?le:a,r=e.nodeCallback,n=r===void 0?le:r,i=e.pseudoElementsCallback,o=i===void 0?le:i,s=e.observeMutationsRoot,l=s===void 0?P:s;de=new ia(function(f){if(!ea){var u=U();J(f).forEach(function(d){if(d.type==="childList"&&d.addedNodes.length>0&&!ya(d.addedNodes[0])&&(p.searchPseudoElements&&o(d.target),t(d.target)),d.type==="attributes"&&d.target.parentNode&&p.searchPseudoElements&&o([d.target],!0),d.type==="attributes"&&ya(d.target)&&~_n.indexOf(d.attributeName))if(d.attributeName==="class"&&di(d.target)){var g=ge(Xe(d.target)),v=g.prefix,w=g.iconName;d.target.setAttribute(Ye,v||u),w&&d.target.setAttribute(Ke,w)}else mi(d.target)&&n(d.target)})}}),z&&de.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function bi(){de&&de.disconnect()}function yi(e){var a=e.getAttribute("style"),t=[];return a&&(t=a.split(";").reduce(function(r,n){var i=n.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(r[o]=s.join(":").trim()),r},{})),t}function xi(e){var a=e.getAttribute("data-prefix"),t=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",n=ge(Xe(e));return n.prefix||(n.prefix=U()),a&&t&&(n.prefix=a,n.iconName=t),n.iconName&&n.prefix||(n.prefix&&r.length>0&&(n.iconName=Wn(n.prefix,e.innerText)||Je(n.prefix,yt(e.innerText))),!n.iconName&&p.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(n.iconName=e.firstChild.data)),n}function Ai(e){var a=J(e.attributes).reduce(function(t,r){return t.name!=="class"&&t.name!=="style"&&(t[r.name]=r.value),t},{});return a}function Si(){return{iconName:null,prefix:null,transform:F,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Sa(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},t=xi(e),r=t.iconName,n=t.prefix,i=t.rest,o=Ai(e),s=Me("parseNodeAttributes",{},e),l=a.styleParser?yi(e):[];return c({iconName:r,prefix:n,transform:F,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:o}},s)}var wi=T.styles;function Ft(e){var a=p.autoReplaceSvg==="nest"?Sa(e,{styleParser:!1}):Sa(e);return~a.extra.classes.indexOf(mt)?V("generateLayersText",e,a):V("generateSvgReplacementMutation",e,a)}function ki(){return[].concat(O(it),O(ot))}function wa(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!z)return Promise.resolve();var t=P.documentElement.classList,r=function(d){return t.add("".concat(la,"-").concat(d))},n=function(d){return t.remove("".concat(la,"-").concat(d))},i=p.autoFetchSvg?ki():Wa.concat(Object.keys(wi));i.includes("fa")||i.push("fa");var o=[".".concat(mt,":not([").concat(W,"])")].concat(i.map(function(u){return".".concat(u,":not([").concat(W,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=J(e.querySelectorAll(o))}catch{}if(s.length>0)r("pending"),n("complete");else return Promise.resolve();var l=Qe.begin("onTree"),f=s.reduce(function(u,d){try{var g=Ft(d);g&&u.push(g)}catch(v){ut||v.name==="MissingIcon"&&console.error(v)}return u},[]);return new Promise(function(u,d){Promise.all(f).then(function(g){Tt(g,function(){r("active"),r("complete"),n("pending"),typeof a=="function"&&a(),l(),u()})}).catch(function(g){l(),d(g)})})}function ji(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Ft(e).then(function(t){t&&Tt([t],a)})}function _i(e){return function(a){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(a||{}).icon?a:Le(a||{}),n=t.mask;return n&&(n=(n||{}).icon?n:Le(n||{})),e(r,c(c({},t),{},{mask:n}))}}var Pi=function(a){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=t.transform,n=r===void 0?F:r,i=t.symbol,o=i===void 0?!1:i,s=t.mask,l=s===void 0?null:s,f=t.maskId,u=f===void 0?null:f,d=t.classes,g=d===void 0?[]:d,v=t.attributes,w=v===void 0?{}:v,h=t.styles,_=h===void 0?{}:h;if(a){var b=a.prefix,j=a.iconName,x=a.icon;return he(c({type:"icon"},a),function(){return Y("beforeDOMElementCreation",{iconDefinition:a,params:t}),Ze({icons:{main:De(x),mask:l?De(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:b,iconName:j,transform:c(c({},F),n),symbol:o,maskId:u,extra:{attributes:w,styles:_,classes:g}})})}},Ei={mixout:function(){return{icon:_i(Pi)}},hooks:function(){return{mutationObserverCallbacks:function(t){return t.treeCallback=wa,t.nodeCallback=ji,t}}},provides:function(a){a.i2svg=function(t){var r=t.node,n=r===void 0?P:r,i=t.callback,o=i===void 0?function(){}:i;return wa(n,o)},a.generateSvgReplacementMutation=function(t,r){var n=r.iconName,i=r.prefix,o=r.transform,s=r.symbol,l=r.mask,f=r.maskId,u=r.extra;return new Promise(function(d,g){Promise.all([Re(n,i),l.iconName?Re(l.iconName,l.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(v){var w=me(v,2),h=w[0],_=w[1];d([t,Ze({icons:{main:h,mask:_},prefix:i,iconName:n,transform:o,symbol:s,maskId:f,extra:u,watchable:!0})])}).catch(g)})},a.generateAbstractIcon=function(t){var r=t.children,n=t.attributes,i=t.main,o=t.transform,s=t.styles,l=pe(s);l.length>0&&(n.style=l);var f;return He(o)&&(f=V("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),r.push(f||i.icon),{children:r,attributes:n}}}},Ni={mixout:function(){return{layer:function(t){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=r.classes,i=n===void 0?[]:n;return he({type:"layer"},function(){Y("beforeDOMElementCreation",{assembler:t,params:r});var o=[];return t(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(p.cssPrefix,"-layers")].concat(O(i)).join(" ")},children:o}]})}}}},Ii={mixout:function(){return{counter:function(t){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};r.title;var n=r.classes,i=n===void 0?[]:n,o=r.attributes,s=o===void 0?{}:o,l=r.styles,f=l===void 0?{}:l;return he({type:"counter",content:t},function(){return Y("beforeDOMElementCreation",{content:t,params:r}),li({content:t.toString(),extra:{attributes:s,styles:f,classes:["".concat(p.cssPrefix,"-layers-counter")].concat(O(i))}})})}}}},Ci={mixout:function(){return{text:function(t){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=r.transform,i=n===void 0?F:n,o=r.classes,s=o===void 0?[]:o,l=r.attributes,f=l===void 0?{}:l,u=r.styles,d=u===void 0?{}:u;return he({type:"text",content:t},function(){return Y("beforeDOMElementCreation",{content:t,params:r}),ha({content:t,transform:c(c({},F),i),extra:{attributes:f,styles:d,classes:["".concat(p.cssPrefix,"-layers-text")].concat(O(s))}})})}}},provides:function(a){a.generateLayersText=function(t,r){var n=r.transform,i=r.extra,o=null,s=null;if(Va){var l=parseInt(getComputedStyle(t).fontSize,10),f=t.getBoundingClientRect();o=f.width/l,s=f.height/l}return Promise.resolve([t,ha({content:t.innerHTML,width:o,height:s,transform:n,extra:i,watchable:!0})])}}},Mt=new RegExp('"',"ug"),ka=[1105920,1112319],ja=c(c(c(c({},{FontAwesome:{normal:"fas",400:"fas"}}),br),bn),Pr),Ue=Object.keys(ja).reduce(function(e,a){return e[a.toLowerCase()]=ja[a],e},{}),Ti=Object.keys(Ue).reduce(function(e,a){var t=Ue[a];return e[a]=t[900]||O(Object.entries(t))[0][1],e},{});function Oi(e){var a=e.replace(Mt,"");return yt(O(a)[0]||"")}function Fi(e){var a=e.getPropertyValue("font-feature-settings").includes("ss01"),t=e.getPropertyValue("content"),r=t.replace(Mt,""),n=r.codePointAt(0),i=n>=ka[0]&&n<=ka[1],o=r.length===2?r[0]===r[1]:!1;return i||o||a}function Mi(e,a){var t=e.replace(/^['"]|['"]$/g,"").toLowerCase(),r=parseInt(a),n=isNaN(r)?"normal":r;return(Ue[t]||{})[n]||Ti[t]}function _a(e,a){var t="".concat(yn).concat(a.replace(":","-"));return new Promise(function(r,n){if(e.getAttribute(t)!==null)return r();var i=J(e.children),o=i.filter(function(be){return be.getAttribute(Ie)===a})[0],s=$.getComputedStyle(e,a),l=s.getPropertyValue("font-family"),f=l.match(kn),u=s.getPropertyValue("font-weight"),d=s.getPropertyValue("content");if(o&&!f)return e.removeChild(o),r();if(f&&d!=="none"&&d!==""){var g=s.getPropertyValue("content"),v=Mi(l,u),w=Oi(g),h=f[0].startsWith("FontAwesome"),_=Fi(s),b=Je(v,w),j=b;if(h){var x=Yn(w);x.iconName&&x.prefix&&(b=x.iconName,v=x.prefix)}if(b&&!_&&(!o||o.getAttribute(Ye)!==v||o.getAttribute(Ke)!==j)){e.setAttribute(t,j),o&&e.removeChild(o);var C=Si(),S=C.extra;S.attributes[Ie]=a,Re(b,v).then(function(be){var $t=Ze(c(c({},C),{},{icons:{main:be,mask:Et()},prefix:v,iconName:j,extra:S,watchable:!0})),ye=P.createElementNS("http://www.w3.org/2000/svg","svg");a==="::before"?e.insertBefore(ye,e.firstChild):e.appendChild(ye),ye.outerHTML=$t.map(function(Ut){return ne(Ut)}).join(`
`),e.removeAttribute(t),r()}).catch(n)}else r()}else r()})}function Li(e){return Promise.all([_a(e,"::before"),_a(e,"::after")])}function Di(e){return e.parentNode!==document.head&&!~An.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Ie)&&(!e.parentNode||e.parentNode.tagName!=="svg")}var Ri=function(a){return!!a&&ct.some(function(t){return a.includes(t)})},zi=function(a){if(!a)return[];var t=new Set,r=a.split(/,(?![^()]*\))/).map(function(l){return l.trim()});r=r.flatMap(function(l){return l.includes("(")?l:l.split(",").map(function(f){return f.trim()})});var n=se(r),i;try{for(n.s();!(i=n.n()).done;){var o=i.value;if(Ri(o)){var s=ct.reduce(function(l,f){return l.replace(f,"")},o);s!==""&&s!=="*"&&t.add(s)}}}catch(l){n.e(l)}finally{n.f()}return t};function Pa(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(z){var t;if(a)t=e;else if(p.searchPseudoElementsFullScan)t=e.querySelectorAll("*");else{var r=new Set,n=se(document.styleSheets),i;try{for(n.s();!(i=n.n()).done;){var o=i.value;try{var s=se(o.cssRules),l;try{for(s.s();!(l=s.n()).done;){var f=l.value,u=zi(f.selectorText),d=se(u),g;try{for(d.s();!(g=d.n()).done;){var v=g.value;r.add(v)}}catch(h){d.e(h)}finally{d.f()}}}catch(h){s.e(h)}finally{s.f()}}catch(h){p.searchPseudoElementsWarnings&&console.warn("Font Awesome: cannot parse stylesheet: ".concat(o.href," (").concat(h.message,`)
If it declares any Font Awesome CSS pseudo-elements, they will not be rendered as SVG icons. Add crossorigin="anonymous" to the <link>, enable searchPseudoElementsFullScan for slower but more thorough DOM parsing, or suppress this warning by setting searchPseudoElementsWarnings to false.`))}}}catch(h){n.e(h)}finally{n.f()}if(!r.size)return;var w=Array.from(r).join(", ");try{t=e.querySelectorAll(w)}catch{}}return new Promise(function(h,_){var b=J(t).filter(Di).map(Li),j=Qe.begin("searchPseudoElements");Ot(),Promise.all(b).then(function(){j(),$e(),h()}).catch(function(){j(),$e(),_()})})}}var $i={hooks:function(){return{mutationObserverCallbacks:function(t){return t.pseudoElementsCallback=Pa,t}}},provides:function(a){a.pseudoElements2svg=function(t){var r=t.node,n=r===void 0?P:r;p.searchPseudoElements&&Pa(n)}}},Ea=!1,Ui={mixout:function(){return{dom:{unwatch:function(){Ot(),Ea=!0}}}},hooks:function(){return{bootstrap:function(){Aa(Me("mutationObserverCallbacks",{}))},noAuto:function(){bi()},watch:function(t){var r=t.observeMutationsRoot;Ea?$e():Aa(Me("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},Na=function(a){var t={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return a.toLowerCase().split(" ").reduce(function(r,n){var i=n.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return r.flipX=!0,r;if(o&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(o){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},t)},Vi={mixout:function(){return{parse:{transform:function(t){return Na(t)}}}},hooks:function(){return{parseNodeAttributes:function(t,r){var n=r.getAttribute("data-fa-transform");return n&&(t.transform=Na(n)),t}}},provides:function(a){a.generateAbstractTransformGrouping=function(t){var r=t.main,n=t.transform,i=t.containerWidth,o=t.iconWidth,s={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(n.x*32,", ").concat(n.y*32,") "),f="scale(".concat(n.size/16*(n.flipX?-1:1),", ").concat(n.size/16*(n.flipY?-1:1),") "),u="rotate(".concat(n.rotate," 0 0)"),d={transform:"".concat(l," ").concat(f," ").concat(u)},g={transform:"translate(".concat(o/2*-1," -256)")},v={outer:s,inner:d,path:g};return{tag:"g",attributes:c({},v.outer),children:[{tag:"g",attributes:c({},v.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:c(c({},r.icon.attributes),v.path)}]}]}}}},_e={x:0,y:0,width:"100%",height:"100%"};function Ia(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||a)&&(e.attributes.fill="black"),e}function Bi(e){return e.tag==="g"?e.children:[e]}var Wi={hooks:function(){return{parseNodeAttributes:function(t,r){var n=r.getAttribute("data-fa-mask"),i=n?ge(n.split(" ").map(function(o){return o.trim()})):Et();return i.prefix||(i.prefix=U()),t.mask=i,t.maskId=r.getAttribute("data-fa-mask-id"),t}}},provides:function(a){a.generateAbstractMask=function(t){var r=t.children,n=t.attributes,i=t.main,o=t.mask,s=t.maskId,l=t.transform,f=i.width,u=i.icon,d=o.width,g=o.icon,v=Mn({transform:l,containerWidth:d,iconWidth:f}),w={tag:"rect",attributes:c(c({},_e),{},{fill:"white"})},h=u.children?{children:u.children.map(Ia)}:{},_={tag:"g",attributes:c({},v.inner),children:[Ia(c({tag:u.tag,attributes:c(c({},u.attributes),v.path)},h))]},b={tag:"g",attributes:c({},v.outer),children:[_]},j="mask-".concat(s||ca()),x="clip-".concat(s||ca()),C={tag:"mask",attributes:c(c({},_e),{},{id:j,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[w,b]},S={tag:"defs",children:[{tag:"clipPath",attributes:{id:x},children:Bi(g)},C]};return r.push(S,{tag:"rect",attributes:c({fill:"currentColor","clip-path":"url(#".concat(x,")"),mask:"url(#".concat(j,")")},_e)}),{children:r,attributes:n}}}},Yi={provides:function(a){var t=!1;$.matchMedia&&(t=$.matchMedia("(prefers-reduced-motion: reduce)").matches),a.missingIconAbstract=function(){var r=[],n={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:c(c({},n),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=c(c({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:c(c({},n),{},{cx:"256",cy:"364",r:"28"}),children:[]};return t||s.children.push({tag:"animate",attributes:c(c({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:c(c({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:c(c({},n),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:t?[]:[{tag:"animate",attributes:c(c({},o),{},{values:"1;0;0;0;0;1;"})}]}),t||r.push({tag:"path",attributes:c(c({},n),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:c(c({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},Ki={hooks:function(){return{parseNodeAttributes:function(t,r){var n=r.getAttribute("data-fa-symbol"),i=n===null?!1:n===""?!0:n;return t.symbol=i,t}}}},Gi=[Rn,Ei,Ni,Ii,Ci,$i,Ui,Vi,Wi,Yi,Ki];ei(Gi,{mixoutsTo:I});I.noAuto;var Xi=I.config;I.library;I.dom;var Lt=I.parse;I.findIconDefinition;I.toHtml;var Hi=I.icon;I.layer;I.text;I.counter;function qi(e){return e=e-0,e===e}function Dt(e){return qi(e)?e:(e=e.replaceAll(/[_-]+(.)?/g,(a,t)=>t?t.toUpperCase():""),e.charAt(0).toLowerCase()+e.slice(1))}function Ji(e){return e.charAt(0).toUpperCase()+e.slice(1)}var G=new Map,Zi=1e3;function Qi(e){if(G.has(e))return G.get(e);const a={};let t=0;const r=e.length;for(;t<r;){const n=e.indexOf(";",t),i=n===-1?r:n,o=e.slice(t,i).trim();if(o){const s=o.indexOf(":");if(s>0){const l=o.slice(0,s).trim(),f=o.slice(s+1).trim();if(l&&f){const u=Dt(l);a[u.startsWith("webkit")?Ji(u):u]=f}}}t=i+1}if(G.size===Zi){const n=G.keys().next().value;n&&G.delete(n)}return G.set(e,a),a}function Rt(e,a,t={}){if(typeof a=="string")return a;const r=(a.children||[]).map(f=>Rt(e,f)),n=a.attributes||{},i={};for(const[f,u]of Object.entries(n))switch(!0){case f==="class":{i.className=u,delete n.class;break}case f==="style":{i.style=Qi(String(u));break}case f.startsWith("aria-"):case f.startsWith("data-"):{i[f.toLowerCase()]=u;break}default:i[Dt(f)]=u}const{style:o,"aria-label":s,...l}=t;return o&&(i.style=i.style?{...i.style,...o}:o),s&&(i["aria-label"]=s,i["aria-hidden"]="false"),e(a.tag,{...l,...i},...r)}var Ca=(e,a)=>{const t=N.useId();return e||(a?t:void 0)},eo=class{constructor(e="react-fontawesome"){this.enabled=!1;let a=!1;try{a=typeof process<"u"&&!1}catch{}this.scope=e,this.enabled=a}log(...e){this.enabled&&console.log(`[${this.scope}]`,...e)}warn(...e){this.enabled&&console.warn(`[${this.scope}]`,...e)}error(...e){this.enabled&&console.error(`[${this.scope}]`,...e)}},ao="searchPseudoElementsFullScan"in Xi?"7.0.0":"6.0.0",to=Number.parseInt(ao)>=7,M={beat:"fa-beat",fade:"fa-fade",beatFade:"fa-beat-fade",bounce:"fa-bounce",shake:"fa-shake",spin:"fa-spin",spinPulse:"fa-spin-pulse",spinReverse:"fa-spin-reverse",pulse:"fa-pulse"},ro={left:"fa-pull-left",right:"fa-pull-right"},no={90:"fa-rotate-90",180:"fa-rotate-180",270:"fa-rotate-270"},io={"2xs":"fa-2xs",xs:"fa-xs",sm:"fa-sm",lg:"fa-lg",xl:"fa-xl","2xl":"fa-2xl","1x":"fa-1x","2x":"fa-2x","3x":"fa-3x","4x":"fa-4x","5x":"fa-5x","6x":"fa-6x","7x":"fa-7x","8x":"fa-8x","9x":"fa-9x","10x":"fa-10x"},L={border:"fa-border",fixedWidth:"fa-fw",flip:"fa-flip",flipHorizontal:"fa-flip-horizontal",flipVertical:"fa-flip-vertical",inverse:"fa-inverse",rotateBy:"fa-rotate-by",swapOpacity:"fa-swap-opacity",widthAuto:"fa-width-auto"};function oo(e){const{beat:a,fade:t,beatFade:r,bounce:n,shake:i,spin:o,spinPulse:s,spinReverse:l,pulse:f,fixedWidth:u,inverse:d,border:g,flip:v,size:w,rotation:h,pull:_,swapOpacity:b,rotateBy:j,widthAuto:x,className:C}=e,S=[];return C&&S.push(...C.split(" ")),a&&S.push(M.beat),t&&S.push(M.fade),r&&S.push(M.beatFade),n&&S.push(M.bounce),i&&S.push(M.shake),o&&S.push(M.spin),l&&S.push(M.spinReverse),s&&S.push(M.spinPulse),f&&S.push(M.pulse),u&&S.push(L.fixedWidth),d&&S.push(L.inverse),g&&S.push(L.border),v===!0&&S.push(L.flip),(v==="horizontal"||v==="both")&&S.push(L.flipHorizontal),(v==="vertical"||v==="both")&&S.push(L.flipVertical),w!=null&&S.push(io[w]),h!=null&&h!==0&&S.push(no[h]),_!=null&&S.push(ro[_]),b&&S.push(L.swapOpacity),to&&(j&&S.push(L.rotateBy),x&&S.push(L.widthAuto)),S}var so=e=>typeof e=="object"&&"icon"in e&&!!e.icon;function Ta(e){if(e)return so(e)?e:Lt.icon(e)}function lo(e){return Object.keys(e)}var Oa=new eo("FontAwesomeIcon"),zt={border:!1,className:"",mask:void 0,maskId:void 0,fixedWidth:!1,inverse:!1,flip:!1,icon:void 0,listItem:!1,pull:void 0,pulse:!1,rotation:void 0,rotateBy:!1,size:void 0,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:void 0,transform:void 0,swapOpacity:!1,widthAuto:!1},fo=new Set(Object.keys(zt)),Ve=La.forwardRef((e,a)=>{const t={...zt,...e},{icon:r,mask:n,symbol:i,title:o,titleId:s,maskId:l,transform:f}=t,u=Ca(l,!!n),d=Ca(s,!!o),g=Ta(r);if(!g)return Oa.error("Icon lookup is undefined",r),null;const v=oo(t),w=typeof f=="string"?Lt.transform(f):f,h=Ta(n),_=Hi(g,{...v.length>0&&{classes:v},...w&&{transform:w},...h&&{mask:h},symbol:i,title:o,titleId:d,maskId:u});if(!_)return Oa.error("Could not find icon",g),null;const{abstract:b}=_,j={ref:a};for(const x of lo(t))fo.has(x)||(j[x]=t[x]);return co(b[0],j)});Ve.displayName="FontAwesomeIcon";var co=Rt.bind(null,La.createElement);/*!
 * Font Awesome Free 7.0.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2025 Fonticons, Inc.
 */var uo={prefix:"fas",iconName:"xmark",icon:[384,512,[128473,10005,10006,10060,215,"close","multiply","remove","times"],"f00d","M55.1 73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L147.2 256 9.9 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192.5 301.3 329.9 438.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.8 256 375.1 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192.5 210.7 55.1 73.4z"]},mo=uo,po={prefix:"fas",iconName:"chevron-down",icon:[448,512,[],"f078","M201.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 338.7 54.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"]},vo={prefix:"fas",iconName:"bars",icon:[448,512,["navicon"],"f0c9","M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"]};const go="_navbar_pz5co_23",ho="_fixed_pz5co_55",bo="_navbarLeft_pz5co_63",yo="_navbarCenter_pz5co_65",xo="_navbarRight_pz5co_67",Ao="_logoLink_pz5co_97",So="_iconButton_pz5co_119",wo="_icon_pz5co_119",ko="_languageSelector_pz5co_181",jo="_languagePill_pz5co_193",_o="_active_pz5co_221",Po="_flagContainer_pz5co_229",Eo="_flagImage_pz5co_255",No="_languageName_pz5co_269",Io="_chevron_pz5co_281",Co="_rotate_pz5co_291",To="_languageDropdown_pz5co_299",Oo="_languageOption_pz5co_325",Fo="_selected_pz5co_361",Mo="_menuOverlay_pz5co_371",Lo="_noScroll_pz5co_397",k={navbar:go,fixed:ho,navbarLeft:bo,navbarCenter:yo,navbarRight:xo,logoLink:Ao,iconButton:So,icon:wo,languageSelector:ko,languagePill:jo,active:_o,flagContainer:Po,flagImage:Eo,languageName:No,chevron:Io,rotate:Co,languageDropdown:To,languageOption:Oo,selected:Fo,menuOverlay:Mo,noScroll:Lo},Fa="/testes-js/assets/brazilFlag-DCnmeU1F.webp",Ma="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUoAAADGCAMAAACD8jkgAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAhFBMVEXYV2z43+P////t7/RwgqoEJGsBIWnTQVnIEC4CImpfc6Dp7PL++frnl6TLGzjPMErut8DKGDXjh5b99/jM0+E4UYkyTIbFzd3wv8fRNU/9/f6irsgVMnURL3KRn778/P355ejcZ3r44OTZWG3kiJdkd6Pr7vOWpMETMXTKGTbKFzXvuMEj3VZ2AAAAAWJLR0QCZgt8ZAAAAAd0SU1FB+kDCBEDMG+bGP0AAAV7SURBVHja7d3ZVtRAFIXhDSrgyOQ8oUIz6Pu/n4q66ABhparOPvuw3HXlhdDJl/o7IZ2kgY3NBePBw0dbvDF5qe2dRWN78kPEhXv85OnV6zx7/mJmeXb3sLN/cLgE8+Wr/5Py9Zu1l3n7bmZpfiPiEnSJ5fsPH/8/yk+fj65e5MvXuYW5TBtX/9RVXpVycduX/wFXE1RXeVHK5W2vU2orL0nZ0vaUUll5Qcq2tq9T6iqvR9nY9g1KWeXVKJvbvoVSVHktyo62b6WUVF6Ksqft2ykVlReinLT97Xhh23OU+ZWXoexte54yu/IqlN1t30GZXHkNyr799hrlcfOPxFdegXLS9uHJfvsUQ/tEjq+8AOVY238pm99e4yuXU462/Y+y/4ejKhdTDu23r1FuiivXUga0vU6prVxJGdL2hFJauY4yqO1rlMLKZZRRbf+hXJ2GbZbNo7Pz+0R5fhbV9q9xukLgm0V35RLKyLYvdxWInuY9lSso41calA1UnpKRIni/ui4lZ+qAN+HLUpJWFeRNVY+SFiAyXqQQJXHCIGPq16FkriDSNloBSm52yH05JSV7miA3AiElfbUg2HwKyoTYoHrhVMqUyQFVDpmUOSsD6YZMocxKDPpF4FLmTQnow6BSJr5RQf92TaRM3X1CfxBBo0w+qIP+0JZFmf2nBvR/cHEo8/8AXkDJX6x4SsVpmUWU7FjCKSUnCxdScjdzMKXoFPZSSuoChlLKPlhZTknMJpJS93FfCyVtg8dRKj+EbqJkLWoUpfbSiEZKTkBBlOILdpopGZs+hFJ+GVk7JWGhAyjVlz11UoanNE4pvxivmzJ4EoxTyi8R7acMrnyYUtz2GGVw5UGUyptmBihjK4+g1N7KNULJqbybUn2D4Rglo/JeSvltr6OU8ZX3Uapv04ygDK+8i1J+83AMZXDlXZTyW9qjKEMrD6TMfZwKNquNsUN04TClKU1pSlOa0pSmNKUpTWlKU5rSlEmU29XGxTLKi3ILjh2PoGFKU5rSlB6mNKUpTelhSlOa0sOUpjSlKT1MaUpTepjSlKY0pYcpTWlKD1Oa0pSm9DClKU3pYUpTmtKUHqbUUfpmk7CbTXwLlO8mM6UpTWlKU5rSlKY0pSlNaUpTmvKeUcY/oHZ+bMyc0mNR7u3O/PDkGcBhD6gNf2zy7Dg8+L6TS3nHS+7+WPtvZR6bPHmYd9cUIQa+MXtue/2ZyjUe5j3Y9s3HREe/V6ZVDnHbk9A4u52syiFu+zBjD55TOSq1zTsYyqgcldomHlcmVI5KbVMP0emVo0DbsV/zJqsc+rbDv3xQVDnUbTO+ElNTOcRtk76oVVE5xG3Tvj44v3KI2+Z9qXV65RC3zfyq9eTKIW47mFJZOcRth1PqKoe47XhKWeUQt82gFFUOcdscSknlELdNolRUDnHbNMr8yiFum0iZXTnEbTMpkyuHuG0uZWrlELfNpkysHPpF4FLmTQnow2BTZq0M9G/XfMqcxKA/iEigTJkc0B/aplAmrBb0f3AlUdJjg/40QBYle5pAf3Iqj5K7gtCfMs2kZGYH/Yn8VErihIH+46VkStqqQv+hZzolKUDoP4rPp+RMHegvEFFQMlYa+suWNJTxKWJ1GvcLj87Ou65MlFBubZ2fBU6i0xXEbSspgyuHuG0tZWjl0O23K1BG7sshbltOGVc5xG0XoIyqHOK2K1AGVQ5x2zUoQypHxyY4ib7FvwDleOXHELddhnK8cojbLkQ5Wjl0++16lGOVQ9x2LcqhyiFuuxrlQOUQt12PsrtyiNsuSNlbOcRtl6TsqxzitotS9lQOcdtVKTsqh7jtupTNlUPcdmXKxsohbrs0ZVvlELddnLKlciSeS7uXlMsr/wn7Kc8XRIwldQAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyNS0wMy0wOFQxNzowMzo0OCswMDowMCu+lGQAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjUtMDMtMDhUMTc6MDM6NDgrMDA6MDBa4yzYAAAAAElFTkSuQmCC",Do="/testes-js/assets/logoCine3-Cj2ZMUYN.png",Ro="_menuContent_jejpi_1",zo="_sidebar_jejpi_15",$o="_sidebarButton_jejpi_33",Uo="_active_jejpi_69",Vo="_contentArea_jejpi_79",Bo="_contentGrid_jejpi_91",Wo="_card_jejpi_103",Yo="_cardImage_jejpi_117",Ko="_cardTitle_jejpi_157",Go="_cardDescription_jejpi_167",Xo="_supportContainer_jejpi_177",Ho="_supportBox_jejpi_191",qo="_watchButton_jejpi_211",Jo="_videoModal_jejpi_241",Zo="_videoBackdrop_jejpi_267",Qo="_videoContainer_jejpi_281",es="_modalVideoPlayer_jejpi_299",as="_closeButton_jejpi_309",ts="_applyButton_jejpi_337",rs="_applyModal_jejpi_367",ns="_applyModalBackdrop_jejpi_393",is="_applyModalContainer_jejpi_407",os="_applyModalTitle_jejpi_427",ss="_applyModalText_jejpi_437",y={menuContent:Ro,sidebar:zo,sidebarButton:$o,active:Uo,contentArea:Vo,contentGrid:Bo,card:Wo,cardImage:Yo,cardTitle:Ko,cardDescription:Go,supportContainer:Xo,supportBox:Ho,watchButton:qo,videoModal:Jo,videoBackdrop:Zo,videoContainer:Qo,modalVideoPlayer:es,closeButton:as,applyButton:ts,applyModal:rs,applyModalBackdrop:ns,applyModalContainer:is,applyModalTitle:os,applyModalText:ss},ls="/testes-js/assets/filmeImgem1-yZ-29yUx.jpg",fs="/testes-js/assets/filmeImagem2-x89vKUAq.jpg",cs="/testes-js/assets/filmeVideo1-CXUP7fVk.mp4",us="/testes-js/assets/filmeVideo2-EZRHYS_l.mp4",ds="/testes-js/assets/vaga1.2-bO-Y0wxV.png",ms="/testes-js/assets/vaga2.2-BIfB2cr0.png",ps="/testes-js/assets/vaga3.2-4NfVz_6L.png",vs="/testes-js/assets/vaga4.2-CUZ_NIGO.png",gs=()=>{const{t:e}=Da(),[a,t]=N.useState(!1),[r,n]=N.useState(null),i=N.useRef(null),[o,s]=N.useState(!1),[l,f]=N.useState(null),[u,d]=N.useState("suporte"),g=h=>{a?(t(!1),n(null)):(n(h),t(!0))},v=h=>{o?(s(!1),f(null)):(f(h),s(!0))};N.useEffect(()=>{a&&i.current?i.current.play():i.current&&i.current.pause()},[a]);const w=()=>{const h=[{id:1,imagem:ls,titulo:e("menu.TDtituloUm"),descricao:e("menu.TDdescricaoUm"),video:us},{id:2,imagem:fs,titulo:e("menu.TDtituloDois"),descricao:e("menu.TDdescricaoDois"),video:cs}],_=[{id:3,imagem:ds,titulo:e("menu.VagaTituloUm"),descricao:e("menu.VagaDescricaoUm"),requisitos:e("menu.VagaRequisitosUm"),caracteristicas:e("menu.VagaCaracteristicasUm"),aplica:e("menu.VagaAplicaUm")},{id:4,imagem:ms,titulo:e("menu.VagaTituloDois"),descricao:e("menu.VagaDescricaoDois"),requisitos:e("menu.VagaRequisitosDois"),caracteristicas:e("menu.VagaCaracteristicasDois"),aplica:e("menu.VagaAplicaDois")},{id:5,imagem:ps,titulo:e("menu.VagaTituloTres"),descricao:e("menu.VagaDescricaoTres"),requisitos:e("menu.VagaRequisitosTres"),caracteristicas:e("menu.VagaCaracteristicasTres"),aplica:e("menu.VagaAplicaTres")},{id:6,imagem:vs,titulo:e("menu.VagaTituloQuatro"),descricao:e("menu.VagaDescricaoQuatro"),requisitos:e("menu.VagaRequisitosQuatro"),caracteristicas:e("menu.VagaCaracteristicasQuatro"),aplica:e("menu.VagaAplicaQuatro")}];switch(u){case"trabalhos":return m.jsx("div",{className:y.contentGrid,children:h.map(b=>m.jsxs("div",{className:y.card,children:[m.jsx("img",{src:b.imagem,alt:b.titulo,className:y.cardImage}),m.jsx("h3",{className:y.cardTitle,children:b.titulo}),m.jsx("p",{className:y.cardDescription,children:b.descricao}),m.jsx("button",{className:y.watchButton,onClick:()=>g(b.video),children:e("menu.botaoAssitir")})]},b.id))});case"trabalhar":return m.jsx("div",{className:y.contentGrid,children:_.map(b=>m.jsxs("div",{className:y.card,children:[m.jsx("img",{src:b.imagem,alt:b.titulo,className:y.cardImage}),m.jsx("h3",{className:y.cardTitle,children:b.titulo}),m.jsx("p",{className:y.cardDescription,children:b.descricao}),m.jsx("button",{className:y.applyButton,onClick:()=>v(b),children:e("menu.botaoAplicar")})]},b.id))});case"suporte":return m.jsxs("div",{className:y.supportContainer,children:[m.jsx("p",{children:e("menu.mensagemSuporte")}),m.jsx("div",{className:y.supportBox})]});default:return null}};return m.jsxs("div",{className:y.menuContent,children:[m.jsxs("div",{className:y.sidebar,children:[m.jsx("button",{className:`${y.sidebarButton} ${u==="trabalhos"?y.active:""}`,onClick:()=>d("trabalhos"),children:e("menu.botaoMenuUm")}),m.jsx("button",{className:`${y.sidebarButton} ${u==="trabalhar"?y.active:""}`,onClick:()=>d("trabalhar"),children:e("menu.botaoMenuDois")}),m.jsx("button",{className:`${y.sidebarButton} ${u==="suporte"?y.active:""}`,onClick:()=>d("suporte"),children:e("menu.botaoMenuTres")})]}),m.jsx("div",{className:y.contentArea,children:w()}),a&&m.jsxs("div",{className:y.videoModal,children:[m.jsx("div",{className:y.videoBackdrop,onClick:()=>g(null)}),m.jsxs("div",{className:y.videoContainer,children:[m.jsx("video",{ref:i,className:y.modalVideoPlayer,src:r,controls:!0,autoPlay:!0}),m.jsx("button",{className:y.closeButton,onClick:()=>g(null),"aria-label":"Fechar vídeo",children:"✖"})]})]}),o&&l&&m.jsxs("div",{className:y.applyModal,children:[m.jsx("div",{className:y.applyModalBackdrop,onClick:()=>v(null)}),m.jsxs("div",{className:y.applyModalContainer,children:[m.jsx("h2",{className:y.applyModalTitle,children:l.titulo}),m.jsx("h3",{children:e("menu.applyModalUm")}),m.jsx("p",{className:y.applyModalText,children:l.requisitos}),m.jsx("h3",{children:e("menu.applyModalDois")}),m.jsx("p",{className:y.applyModalText,children:l.caracteristicas}),m.jsx("h3",{children:e("menu.applyModalTres")}),m.jsx("p",{className:y.applyModalText,children:l.aplica}),m.jsx("button",{className:y.closeButton,onClick:()=>v(null),children:"✖"})]})]})]})},bs=({transparent:e=!1})=>{const{language:a,changeLanguage:t}=Da(),[r,n]=N.useState(!1),[i,o]=N.useState(!1),[s,l]=N.useState(!1),[f,u]=N.useState(0),[d,g]=N.useState(e?"transparent":"rgba(0, 0, 0, 1)"),v={pt:{code:"pt",name:"Português",flag:Fa},en:{code:"en",name:"English",flag:Ma}},w=v[a]||v.pt;N.useEffect(()=>{const j=()=>{if(u(window.scrollY),e){const x=Math.min(window.scrollY/200,1);g(`rgba(0, 0, 0, ${x})`)}};return window.addEventListener("scroll",j),()=>window.removeEventListener("scroll",j)},[e]),N.useEffect(()=>{const j=document.documentElement,x=document.body;if(r){l(!0);const C=window.innerWidth-j.clientWidth;x.style.position="fixed",x.style.top=`-${f}px`,x.style.width="100%",x.style.overflow="hidden",x.style.paddingRight=`${C}px`,j.classList.add(k.noScroll)}else l(!1),x.style.position="",x.style.top="",x.style.width="",x.style.overflow="",x.style.paddingRight="",j.classList.remove(k.noScroll),window.scrollTo(0,f);return()=>{x.style.position="",x.style.top="",x.style.width="",x.style.overflow="",x.style.paddingRight="",j.classList.remove(k.noScroll)}},[r,f]);const h=()=>{n(!r),r||o(!1)},_=()=>{o(!i)},b=j=>{if(a===j){o(!1);return}t(j),o(!1),setTimeout(()=>{window.location.reload()},100)};return m.jsxs(m.Fragment,{children:[m.jsxs("nav",{className:`${k.navbar} ${s?k.fixed:""}`,style:{backgroundColor:d},children:[m.jsx("div",{className:k.navbarLeft,children:m.jsx("button",{className:`${k.iconButton} ${k.menuButton}`,onClick:h,children:m.jsx(Ve,{icon:r?mo:vo,className:k.icon})})}),m.jsxs("div",{className:k.navbarCenter,children:[" ",m.jsx("a",{href:"/",className:k.logoLink,children:m.jsx("img",{src:Do,alt:"Microsoft Logo",className:k.logoImage,height:50,width:300})})]}),m.jsx("div",{className:k.navbarRight,children:m.jsxs("div",{className:k.languageSelector,children:[m.jsxs("button",{className:`${k.languagePill} ${i?k.active:""}`,onClick:_,children:[m.jsx("div",{className:k.flagContainer,children:m.jsx("img",{src:w.flag,alt:w.name,className:k.flagImage})}),m.jsx("span",{className:k.languageName,children:w.name}),m.jsx(Ve,{icon:po,className:`${k.chevron} ${i?k.rotate:""}`})]}),i&&m.jsxs("div",{className:k.languageDropdown,children:[m.jsxs("button",{className:`${k.languageOption} ${a==="pt"?k.selected:""}`,onClick:()=>b("pt"),children:[m.jsx("div",{className:k.flagContainer,children:m.jsx("img",{src:Fa,alt:"Português",className:k.flagImage})}),m.jsx("span",{children:"Português"})]}),m.jsxs("button",{className:`${k.languageOption} ${a==="en"?k.selected:""}`,onClick:()=>b("en"),children:[m.jsx("div",{className:k.flagContainer,children:m.jsx("img",{src:Ma,alt:"English",className:k.flagImage})}),m.jsx("span",{children:"English"})]})]})]})})]}),r&&m.jsx("div",{className:k.menuOverlay,children:m.jsx(gs,{})})]})};export{bs as NavBar,bs as default};
