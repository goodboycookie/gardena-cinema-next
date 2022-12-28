(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(4186)}])},9749:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"ImageLoaderProps",{enumerable:!0,get:function(){return d.ImageLoaderProps}}),t.default=function(e){let t,r;var n,{src:o,sizes:p,unoptimized:v=!1,priority:w=!1,loading:b,className:y,quality:x,width:E,height:j,fill:C,style:S,onLoad:N,onLoadingComplete:z,placeholder:O="empty",blurDataURL:P,layout:k,objectFit:A,objectPosition:I,lazyBoundary:R,lazyRoot:L}=e,T=a(e,["src","sizes","unoptimized","priority","loading","className","quality","width","height","fill","style","onLoad","onLoadingComplete","placeholder","blurDataURL","layout","objectFit","objectPosition","lazyBoundary","lazyRoot"]);let H=l.useContext(u.ImageConfigContext),M=l.useMemo(()=>{let e=g||H||d.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),r=e.deviceSizes.sort((e,t)=>e-t);return i({},e,{allSizes:t,deviceSizes:r})},[H]),D=T,G=D.loader||f.default;if(delete D.loader,"__next_img_default"in G){if("custom"===M.loader)throw Error('Image with src "'.concat(o,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}else{let B=G;G=e=>{let{config:t}=e,r=a(e,["config"]);return B(r)}}if(k){"fill"===k&&(C=!0);let W={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[k];W&&(S=i({},S,W));let F={responsive:"100vw",fill:"100vw"}[k];F&&!p&&(p=F)}let V="",q=h(E),Z=h(j);if("object"==typeof(n=o)&&(m(n)||void 0!==n.src)){let U=m(o)?o.default:o;if(!U.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(U)));if(!U.height||!U.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(U)));if(t=U.blurWidth,r=U.blurHeight,P=P||U.blurDataURL,V=U.src,!C){if(q||Z){if(q&&!Z){let J=q/U.width;Z=Math.round(U.height*J)}else if(!q&&Z){let Q=Z/U.height;q=Math.round(U.width*Q)}}else q=U.width,Z=U.height}}let X=!w&&("lazy"===b||void 0===b);((o="string"==typeof o?o:V).startsWith("data:")||o.startsWith("blob:"))&&(v=!0,X=!1),M.unoptimized&&(v=!0);let[K,Y]=l.useState(!1),[$,ee]=l.useState(!1),et=h(x),er=Object.assign(C?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:A,objectPosition:I}:{},$?{}:{color:"transparent"},S),ei="blur"===O&&P&&!K?{backgroundSize:er.objectFit||"cover",backgroundPosition:er.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:'url("data:image/svg+xml;charset=utf-8,'.concat(c.getImageBlurSvg({widthInt:q,heightInt:Z,blurWidth:t,blurHeight:r,blurDataURL:P}),'")')}:{},en=function(e){let{config:t,src:r,unoptimized:i,width:n,quality:o,sizes:a,loader:l}=e;if(i)return{src:r,srcSet:void 0,sizes:void 0};let{widths:s,kind:c}=function(e,t,r){let{deviceSizes:i,allSizes:n}=e;if(r){let o=/(^|\s)(1?\d?\d)vw/g,a=[];for(let l;l=o.exec(r);l)a.push(parseInt(l[2]));if(a.length){let s=.01*Math.min(...a);return{widths:n.filter(e=>e>=i[0]*s),kind:"w"}}return{widths:n,kind:"w"}}if("number"!=typeof t)return{widths:i,kind:"w"};let c=[...new Set([t,2*t].map(e=>n.find(t=>t>=e)||n[n.length-1]))];return{widths:c,kind:"x"}}(t,n,a),d=s.length-1;return{sizes:a||"w"!==c?a:"100vw",srcSet:s.map((e,i)=>"".concat(l({config:t,src:r,quality:o,width:e})," ").concat("w"===c?e:i+1).concat(c)).join(", "),src:l({config:t,src:r,quality:o,width:s[d]})}}({config:M,src:o,unoptimized:v,width:q,quality:et,sizes:p,loader:G}),eo=o,ea={imageSrcSet:en.srcSet,imageSizes:en.sizes,crossOrigin:D.crossOrigin},el=l.useRef(N);l.useEffect(()=>{el.current=N},[N]);let es=l.useRef(z);l.useEffect(()=>{es.current=z},[z]);let ec=i({isLazy:X,imgAttributes:en,heightInt:Z,widthInt:q,qualityInt:et,className:y,imgStyle:er,blurStyle:ei,loading:b,config:M,fill:C,unoptimized:v,placeholder:O,loader:G,srcString:eo,onLoadRef:el,onLoadingCompleteRef:es,setBlurComplete:Y,setShowAltText:ee},D);return l.default.createElement(l.default.Fragment,null,l.default.createElement(_,Object.assign({},ec)),w?l.default.createElement(s.default,null,l.default.createElement("link",Object.assign({key:"__nimg-"+en.src+en.srcSet+en.sizes,rel:"preload",as:"image",href:en.srcSet?void 0:en.src},ea))):null)};var i=r(6495).Z,n=r(2648).Z,o=r(1598).Z,a=r(7273).Z,l=o(r(7294)),s=n(r(3121)),c=r(2675),d=r(139),u=r(8730);r(7238);var f=n(r(9824));let g={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1};function m(e){return void 0!==e.default}function h(e){return"number"==typeof e||void 0===e?e:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function p(e,t,r,n,o,a,l){if(!e||e["data-loaded-src"]===t)return;e["data-loaded-src"]=t;let s="decode"in e?e.decode():Promise.resolve();s.catch(()=>{}).then(()=>{if(e.parentNode){if("blur"===r&&a(!0),null==n?void 0:n.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let l=!1,s=!1;n.current(i({},t,{nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>l,isPropagationStopped:()=>s,persist(){},preventDefault(){l=!0,t.preventDefault()},stopPropagation(){s=!0,t.stopPropagation()}}))}(null==o?void 0:o.current)&&o.current(e)}})}let _=e=>{var{imgAttributes:t,heightInt:r,widthInt:n,qualityInt:o,className:s,imgStyle:c,blurStyle:d,isLazy:u,fill:f,placeholder:g,loading:m,srcString:h,config:_,unoptimized:v,loader:w,onLoadRef:b,onLoadingCompleteRef:y,setBlurComplete:x,setShowAltText:E,onLoad:j,onError:C}=e,S=a(e,["imgAttributes","heightInt","widthInt","qualityInt","className","imgStyle","blurStyle","isLazy","fill","placeholder","loading","srcString","config","unoptimized","loader","onLoadRef","onLoadingCompleteRef","setBlurComplete","setShowAltText","onLoad","onError"]);return m=u?"lazy":m,l.default.createElement(l.default.Fragment,null,l.default.createElement("img",Object.assign({},S,t,{width:n,height:r,decoding:"async","data-nimg":f?"fill":"1",className:s,loading:m,style:i({},c,d),ref:l.useCallback(e=>{e&&(C&&(e.src=e.src),e.complete&&p(e,h,g,b,y,x,v))},[h,g,b,y,x,C,v]),onLoad(e){let t=e.currentTarget;p(t,h,g,b,y,x,v)},onError(e){E(!0),"blur"===g&&x(!0),C&&C(e)}})))};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2675:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getImageBlurSvg=function(e){let{widthInt:t,heightInt:r,blurWidth:i,blurHeight:n,blurDataURL:o}=e,a=i||t,l=n||r,s=o.startsWith("data:image/jpeg")?"%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%":"";return a&&l?"%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 ".concat(a," ").concat(l,"'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='").concat(i&&n?"1":"20","'/%3E").concat(s,"%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='").concat(o,"'/%3E%3C/svg%3E"):"%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' x='0' y='0' height='100%25' width='100%25' href='".concat(o,"'/%3E%3C/svg%3E")}},9824:function(e,t){"use strict";function r(e){let{config:t,src:r,width:i,quality:n}=e;return r.endsWith(".svg")&&!t.dangerouslyAllowSVG?r:"".concat(t.path,"?url=").concat(encodeURIComponent(r),"&w=").concat(i,"&q=").concat(n||75)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,r.__next_img_default=!0,t.default=r},4186:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return d}});var i=r(5893),n=r(9008),o=r.n(n),a=r(5675),l=r.n(a),s=r(7160),c=r.n(s);function d(){return(0,i.jsxs)("div",{className:c().container,children:[(0,i.jsxs)(o(),{children:[(0,i.jsx)("title",{children:"Create Next App"}),(0,i.jsx)("meta",{name:"description",content:"Generated by create next app"}),(0,i.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,i.jsxs)("main",{className:c().main,children:[(0,i.jsxs)("span",{children:[(0,i.jsx)("h1",{children:"GARDENA CINEMA"}),(0,i.jsx)("p",{children:"HOME   EVENTS   CONTACT"})]}),(0,i.jsx)("div",{children:"insert image  here"})]}),(0,i.jsx)("footer",{className:c().footer,children:(0,i.jsxs)("a",{href:"https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",target:"_blank",rel:"noopener noreferrer",children:["Powered by"," ",(0,i.jsxs)("span",{className:c().logo,children:[(0,i.jsx)(l(),{src:"/vercel.svg",alt:"Vercel Logo",width:72,height:16}),"Crenshaw Ave., Gardena, CA 90406"]})]})})]})}},7160:function(e){e.exports={container:"Home_container__bCOhY",main:"Home_main__nLjiQ",footer:"Home_footer____T7K",title:"Home_title__T09hD",description:"Home_description__41Owk",code:"Home_code__suPER",grid:"Home_grid__GxQ85",card:"Home_card___LpL1",logo:"Home_logo__27_tb"}},9008:function(e,t,r){e.exports=r(3121)},5675:function(e,t,r){e.exports=r(9749)}},function(e){e.O(0,[774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);