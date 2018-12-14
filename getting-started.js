(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{57:function(e,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var t,r=i(s(2)),o=function(e){if(e&&e.__esModule)return e;var a={};if(null!=e)for(var s in e)if(Object.prototype.hasOwnProperty.call(e,s)){var t=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,s):{};t.get||t.set?Object.defineProperty(a,s,t):a[s]=e[s]}return a.default=e,a}(s(0));i(s(1)),i(s(62));function i(e){return e&&e.__esModule?e:{default:e}}function n(e,a,s,r){t||(t="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var o=e&&e.defaultProps,i=arguments.length-3;if(a||0===i||(a={children:void 0}),a&&o)for(var n in o)void 0===a[n]&&(a[n]=o[n]);else a||(a=o||{});if(1===i)a.children=r;else if(i>1){for(var l=new Array(i),d=0;d<i;d++)l[d]=arguments[d+3];a.children=l}return{$$typeof:t,type:e,key:void 0===s?null:""+s,ref:null,props:a,_owner:null}}function l(e,a,s){return a in e?Object.defineProperty(e,a,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[a]=s,e}function d(){return(d=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var s=arguments[a];for(var t in s)Object.prototype.hasOwnProperty.call(s,t)&&(e[t]=s[t])}return e}).apply(this,arguments)}function c(e,a){if(null==e)return{};var s,t,r=function(e,a){if(null==e)return{};var s,t,r={},o=Object.keys(e);for(t=0;t<o.length;t++)s=o[t],a.indexOf(s)>=0||(r[s]=e[s]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)s=o[t],a.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(r[s]=e[s])}return r}const u=e=>{let{to:a}=e,s=c(e,["to"]);return a.includes("http")?o.default.createElement("a",d({},e,{href:a})):("#"===a[0]&&(a=r.default.join("/auto-release/","pages/getting-started.html")+a),o.default.createElement("a",d({},s,{href:a,onClick:s=>{if(s.preventDefault(),"#"===e.to)return!1;const t=new URL(r.default.join(window.location.origin,a));window.history.pushState((e=>({href:e.href,pathname:e.pathname,hash:e.hash,query:e.query}))(t),null,a),e.onClick();const o=new CustomEvent("changeLocation",{detail:t});return dispatchEvent(o),!1}})))};u.defaultProps={href:"",onClick:()=>{}};const p=e=>{var a,s;return s=a=class extends o.default.Component{constructor(...e){super(...e),l(this,"state",{Comp:null})}componentDidMount(){!this.state.Comp&&this.props.shouldLoad&&e().then(e=>{this.setState({Comp:e.default})})}render(){const{Comp:e}=this.state;return e?o.default.createElement(e,this.props,this.props.children||null):null}},l(a,"defaultProps",{shouldLoad:!0}),s};p(()=>s.e(23).then(s.bind(null,63))),p(()=>s.e(23).then(s.bind(null,64)));var h=n("h1",{},void 0,"Getting Started"),v=n("p",{},void 0,"Before we do anything we must first install ",n("code",{},void 0,"auto-release-cli")," as a dev dependency."),b=n("pre",{},void 0,n("code",{className:"language-sh"},void 0,"yarn add -D auto-release-cli",n("br",{}))),m=n("p",{},void 0,"To version, changelog, publish and release your code in all at the same time, we've included the ",n("code",{},void 0,"shipit")," tool. This tool takes the default ",n("code",{},void 0,"auto")," workflow and puts it into one command."),g=n("pre",{},void 0,n("code",{className:"language-json"},void 0,"{",n("br",{}),"  ",n("span",{className:"hljs-attr"},void 0,'"scripts"'),": {",n("br",{}),"    ",n("span",{className:"hljs-attr"},void 0,'"release"'),": ",n("span",{className:"hljs-string"},void 0,'"auto shipit"'),n("br",{}),"  }",n("br",{}),"}",n("br",{}))),f=n("p",{},void 0,"The simplest workflow to get set up in just the ",n("code",{},void 0,"package.json")," is by adding the following to your ",n("code",{},void 0,"package.json"),". With this setup your application will not be able to use the ",n("code",{},void 0,"no-release")," flag, but everything else will work just fine"),j=n("pre",{},void 0,n("code",{className:"language-json"},void 0,"{",n("br",{}),"  ",n("span",{className:"hljs-attr"},void 0,'"scripts"'),": {",n("br",{}),"    ",n("span",{className:"hljs-attr"},void 0,'"version"'),": ",n("span",{className:"hljs-string"},void 0,"\"npm version `auto version` -m 'Bump version to: %s [skip ci]'\""),",",n("br",{}),"    ",n("span",{className:"hljs-attr"},void 0,'"publish"'),": ",n("span",{className:"hljs-string"},void 0,'"npm publish && git push --follow-tags --set-upstream origin $branch"'),",",n("br",{}),"    ",n("span",{className:"hljs-attr"},void 0,'"release"'),": ",n("span",{className:"hljs-string"},void 0,'"auto changelog && npm run version && npm run publish && auto release"'),n("br",{}),"  }",n("br",{}),"}",n("br",{}))),N=n("code",{},void 0,"no-release"),y=n("p",{},void 0,"To use the ",n("code",{},void 0,"no-release")," label you have to get a little more involved and use a shell script. We could do the ",n("code",{},void 0,"if")," checks in the ",n("code",{},void 0,"package.json"),", but this would get messy and hard to read very quickly."),w=n("pre",{},void 0,n("code",{className:"language-json"},void 0,"{",n("br",{}),"  ",n("span",{className:"hljs-attr"},void 0,'"scripts"'),": {",n("br",{}),"    ",n("span",{className:"hljs-attr"},void 0,'"release"'),": ",n("span",{className:"hljs-string"},void 0,'"./scripts/release.sh"'),n("br",{}),"  }",n("br",{}),"}",n("br",{}))),k=n("p",{},void 0,"Here is an example release script for a single NPM package:"),P=n("pre",{},void 0,n("code",{className:"language-sh"},void 0,n("span",{className:"hljs-built_in"},void 0,"export")," PATH=$(npm bin):",n("span",{className:"hljs-variable"},void 0,"$PATH"),n("br",{}),n("br",{}),"VERSION=`auto version`",n("br",{}),n("br",{}),n("span",{className:"hljs-comment"},void 0,"## Support for label 'no-release'"),n("br",{}),n("span",{className:"hljs-keyword"},void 0,"if")," [ ! -z ",n("span",{className:"hljs-string"},void 0,'"',n("span",{className:"hljs-variable"},void 0,"$VERSION"),'"')," ]; ",n("span",{className:"hljs-keyword"},void 0,"then"),n("br",{}),"  ",n("span",{className:"hljs-comment"},void 0,"## Update Changelog"),n("br",{}),"  auto changelog",n("br",{}),n("br",{}),"  ",n("span",{className:"hljs-comment"},void 0,"## Publish Package"),n("br",{}),"  npm version ",n("span",{className:"hljs-variable"},void 0,"$VERSION")," -m ",n("span",{className:"hljs-string"},void 0,'"Bump version to: %s [skip ci]"'),n("br",{}),"  npm publish",n("br",{}),n("br",{}),"  ",n("span",{className:"hljs-comment"},void 0,"## Create GitHub Release"),n("br",{}),"  git push --follow-tags --",n("span",{className:"hljs-built_in"},void 0,"set"),"-upstream origin ",n("span",{className:"hljs-variable"},void 0,"$branch"),n("br",{}),"  auto release",n("br",{}),n("span",{className:"hljs-keyword"},void 0,"fi"),n("br",{}))),O=n("p",{},void 0,"or if you are using lerna to manage a monorepo."),S=n("pre",{},void 0,n("code",{className:"language-sh"},void 0,n("span",{className:"hljs-built_in"},void 0,"export")," PATH=$(npm bin):",n("span",{className:"hljs-variable"},void 0,"$PATH"),n("br",{}),n("br",{}),"VERSION=`auto version`",n("br",{}),n("br",{}),n("span",{className:"hljs-keyword"},void 0,"if")," [ ! -z ",n("span",{className:"hljs-string"},void 0,'"',n("span",{className:"hljs-variable"},void 0,"$VERSION"),'"')," ]; ",n("span",{className:"hljs-keyword"},void 0,"then"),n("br",{}),"  auto changelog",n("br",{}),"  lerna publish --yes --force-publish=* ",n("span",{className:"hljs-variable"},void 0,"$VERSION")," -m ",n("span",{className:"hljs-string"},void 0,"'%v [skip ci]'"),n("br",{}),"  auto release",n("br",{}),n("span",{className:"hljs-keyword"},void 0,"fi"),n("br",{}))),E=n("code",{},void 0,"auto-release"),C=n("code",{},void 0,"--githubApi");var $=e=>n("div",{className:e.className},void 0,n("section",{},void 0,h,v,b,n("h2",{id:"quick-setup"},void 0,"Quick Setup ",n(u,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#quick-setup","aria-hidden":"true"})),m,g,n("h2",{id:"detailed-setup"},void 0,"Detailed Setup ",n(u,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#detailed-setup","aria-hidden":"true"})),f,j,n("h3",{id:"enabling-no-release-label"},void 0,"Enabling ",N," label ",n(u,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#enabling-no-release-label","aria-hidden":"true"})),y,w,k,P,O,S,n("h2",{id:"enterprise"},void 0,"Enterprise ",n(u,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#enterprise","aria-hidden":"true"})),n("p",{},void 0,"If you are using enterprise github ",E," lets you configure the github API URL that it uses. You can configure this by using the CLI option ",C," or by setting the value in your ",n(u,{currentPage:e.currentPage,to:"/auto-release/pages/autorc.html#githubApi"},void 0,".autorc"),".")));a.default=$,e.exports=a.default}}]);
//# sourceMappingURL=getting-started.js.map