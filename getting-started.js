(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{58:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var s,o=r(t(2)),i=function(e){if(e&&e.__esModule)return e;var a={};if(null!=e)for(var t in e)if(Object.prototype.hasOwnProperty.call(e,t)){var s=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,t):{};s.get||s.set?Object.defineProperty(a,t,s):a[t]=e[t]}return a.default=e,a}(t(0));r(t(1)),r(t(63));function r(e){return e&&e.__esModule?e:{default:e}}function n(e,a,t,o){s||(s="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var i=e&&e.defaultProps,r=arguments.length-3;if(a||0===r||(a={children:void 0}),a&&i)for(var n in i)void 0===a[n]&&(a[n]=i[n]);else a||(a=i||{});if(1===r)a.children=o;else if(r>1){for(var l=new Array(r),d=0;d<r;d++)l[d]=arguments[d+3];a.children=l}return{$$typeof:s,type:e,key:void 0===t?null:""+t,ref:null,props:a,_owner:null}}function l(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function d(){return(d=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s])}return e}).apply(this,arguments)}function u(e,a){if(null==e)return{};var t,s,o=function(e,a){if(null==e)return{};var t,s,o={},i=Object.keys(e);for(s=0;s<i.length;s++)t=i[s],a.indexOf(t)>=0||(o[t]=e[t]);return o}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(s=0;s<i.length;s++)t=i[s],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}const c=e=>{let{to:a}=e,t=u(e,["to"]);return a.includes("http")?i.default.createElement("a",d({},e,{href:a})):("#"===a[0]&&(a=o.default.join("/auto-release/","pages/getting-started.html")+a),i.default.createElement("a",d({},t,{href:a,onClick:t=>{if(t.preventDefault(),"#"===e.to)return!1;const s=new URL(o.default.join(window.location.origin,a));window.history.pushState((e=>({href:e.href,pathname:e.pathname,hash:e.hash,query:e.query}))(s),null,a),e.onClick();const i=new CustomEvent("changeLocation",{detail:s});return dispatchEvent(i),!1}})))};c.defaultProps={href:"",onClick:()=>{}};const h=e=>{var a,t;return t=a=class extends i.default.Component{constructor(...e){super(...e),l(this,"state",{Comp:null})}componentDidMount(){!this.state.Comp&&this.props.shouldLoad&&e().then(e=>{this.setState({Comp:e.default})})}render(){const{Comp:e}=this.state;return e?i.default.createElement(e,this.props,this.props.children||null):null}},l(a,"defaultProps",{shouldLoad:!0}),t};h(()=>t.e(24).then(t.bind(null,64))),h(()=>t.e(24).then(t.bind(null,65)));var v=n("h1",{},void 0,"Getting Started"),p=n("p",{},void 0,"Before we do anything we must first install ",n("code",{},void 0,"auto-release-cli")," as a dev dependency."),g=n("pre",{},void 0,n("code",{className:"language-sh"},void 0,"yarn add -D auto-release-cli",n("br",{}))),b=n("code",{},void 0,"auto-release"),m=n("code",{},void 0,"--githubApi"),f=n("code",{},void 0,"auto init"),y=n("p",{},void 0,"If you're project is already published then you need to make sure that your last release is tagged and that it's the ",n("code",{},void 0,"Latest Release")," on GitHub."),j=n("p",{},void 0,"To tag your last release find that last commit where you bumped the version and run the following commands with your version number."),N=n("pre",{},void 0,n("code",{className:"language-sh"},void 0,"git tag v1.2.3",n("br",{}),"git push --tags",n("br",{}))),w=n("p",{},void 0,"Then on GitHub go to your project's releases and click ",n("code",{},void 0,"Draft a new release"),". In the ",n("code",{},void 0,"Tag version")," field enter the version number you just tagged and click ",n("code",{},void 0,"Publish release"),"."),k=n("p",{},void 0,"Now your github project is set up to use ",n("code",{},void 0,"auto-release"),"."),P=n("p",{},void 0,"Getting started with ",n("code",{},void 0,"auto-release")," is super easy."),O=n("ol",{},void 0,n("li",{},void 0,n("code",{},void 0,"auto init")," (optional)"),n("li",{},void 0,n("code",{},void 0,"auto create-labels")),n("li",{},void 0,"Configure environment variables"),n("li",{},void 0,"Set up script")),T=n("p",{},void 0,"Initialize all options and configure label text. If this is not run then ",n("code",{},void 0,"auto-release")," will use the default configuration. This command will produce and ",n("code",{},void 0,".autorc"),", this contains advanced configuration and might not be needed."),E=n("p",{},void 0,"After that, you need to set up the labels on your github project. The types of labels that ",n("code",{},void 0,"auto-release")," uses are:"),L=n("p",{},void 0,"To create the labels for your project on GitHub, run the following command with your ",n("code",{},void 0,"GH_TOKEN"),"."),S=n("pre",{},void 0,n("code",{className:"language-sh"},void 0,"GH_TOKEN=YOUR_TOKEN auto create-labels",n("br",{}))),_=n("p",{},void 0,"You must configure some environment variables for publishing and releasing to work properly."),I=n("ul",{},void 0,n("li",{},void 0,n("code",{},void 0,"GH_TOKEN")," - Used for updating the changelog and publishing the GitHub release"),n("li",{},void 0,n("code",{},void 0,"NPM_TOKEN")," - Used to publish to npm.")),C=n("p",{},void 0,"If you are publishing from the CI you must inject the ",n("code",{},void 0,"NPM_TOKEN")," into your ",n("code",{},void 0,".npmrc"),"."),H=n("pre",{},void 0,n("code",{className:"language-sh"},void 0,n("span",{className:"hljs-built_in"},void 0,"echo")," ",n("span",{className:"hljs-string"},void 0,'"//registry.npmjs.org/:_authToken=',n("span",{className:"hljs-variable"},void 0,"$NPM_TOKEN"),'"')," >> ~/.npmrc",n("br",{}))),R=n("p",{},void 0,n("code",{},void 0,"auto-release")," is written so that each tool it exposes is useful in isolation. It also provides workflows for those who don't care about the Details of each tool and just want their code released."),$=n("p",{},void 0,"To version, changelog, publish and release your code all at the same time, we've included the ",n("code",{},void 0,"shipit")," tool. This tool takes the default ",n("code",{},void 0,"auto")," workflow and puts it into one command."),G=n("pre",{},void 0,n("code",{className:"language-json"},void 0,"{",n("br",{}),"  ",n("span",{className:"hljs-attr"},void 0,'"scripts"'),": {",n("br",{}),"    ",n("span",{className:"hljs-attr"},void 0,'"release"'),": ",n("span",{className:"hljs-string"},void 0,'"auto shipit"'),n("br",{}),"  }",n("br",{}),"}",n("br",{}))),x=n("p",{},void 0,"The simplest workflow to get set up in just the ",n("code",{},void 0,"package.json")," is by adding the following to your ",n("code",{},void 0,"package.json"),". With this setup your application will not be able to use the ",n("code",{},void 0,"skip-release")," flag, but everything else will work just fine"),A=n("pre",{},void 0,n("code",{className:"language-json"},void 0,"{",n("br",{}),"  ",n("span",{className:"hljs-attr"},void 0,'"scripts"'),": {",n("br",{}),"    ",n("span",{className:"hljs-attr"},void 0,'"version"'),": ",n("span",{className:"hljs-string"},void 0,"\"npm version `auto version` -m 'Bump version to: %s [skip ci]'\""),",",n("br",{}),"    ",n("span",{className:"hljs-attr"},void 0,'"publish"'),": ",n("span",{className:"hljs-string"},void 0,'"npm publish && git push --follow-tags --set-upstream origin $branch"'),",",n("br",{}),"    ",n("span",{className:"hljs-attr"},void 0,'"release"'),": ",n("span",{className:"hljs-string"},void 0,'"auto changelog && npm run version && npm run publish && auto release"'),n("br",{}),"  }",n("br",{}),"}",n("br",{}))),D=n("code",{},void 0,"skip-release"),M=n("p",{},void 0,"To use the ",n("code",{},void 0,"skip-release")," label you have to get a little more involved and use a shell script. We could do the ",n("code",{},void 0,"if")," checks in the ",n("code",{},void 0,"package.json"),", but this would get messy and hard to read very quickly."),V=n("pre",{},void 0,n("code",{className:"language-json"},void 0,"{",n("br",{}),"  ",n("span",{className:"hljs-attr"},void 0,'"scripts"'),": {",n("br",{}),"    ",n("span",{className:"hljs-attr"},void 0,'"release"'),": ",n("span",{className:"hljs-string"},void 0,'"./scripts/release.sh"'),n("br",{}),"  }",n("br",{}),"}",n("br",{}))),z=n("p",{},void 0,"Here is an example release script for a single NPM package:"),K=n("pre",{},void 0,n("code",{className:"language-sh"},void 0,n("span",{className:"hljs-built_in"},void 0,"export")," PATH=$(npm bin):",n("span",{className:"hljs-variable"},void 0,"$PATH"),n("br",{}),n("br",{}),"VERSION=`auto version`",n("br",{}),n("br",{}),n("span",{className:"hljs-comment"},void 0,"## Support for label 'skip-release'"),n("br",{}),n("span",{className:"hljs-keyword"},void 0,"if")," [ ! -z ",n("span",{className:"hljs-string"},void 0,'"',n("span",{className:"hljs-variable"},void 0,"$VERSION"),'"')," ]; ",n("span",{className:"hljs-keyword"},void 0,"then"),n("br",{}),"  ",n("span",{className:"hljs-comment"},void 0,"## Update Changelog"),n("br",{}),"  auto changelog",n("br",{}),n("br",{}),"  ",n("span",{className:"hljs-comment"},void 0,"## Publish Package"),n("br",{}),"  npm version ",n("span",{className:"hljs-variable"},void 0,"$VERSION")," -m ",n("span",{className:"hljs-string"},void 0,'"Bump version to: %s [skip ci]"'),n("br",{}),"  npm publish",n("br",{}),n("br",{}),"  ",n("span",{className:"hljs-comment"},void 0,"## Create GitHub Release"),n("br",{}),"  git push --follow-tags --",n("span",{className:"hljs-built_in"},void 0,"set"),"-upstream origin ",n("span",{className:"hljs-variable"},void 0,"$branch"),n("br",{}),"  auto release",n("br",{}),n("span",{className:"hljs-keyword"},void 0,"fi"),n("br",{}))),U=n("p",{},void 0,"or if you are using lerna to manage a monorepo."),q=n("pre",{},void 0,n("code",{className:"language-sh"},void 0,n("span",{className:"hljs-built_in"},void 0,"export")," PATH=$(npm bin):",n("span",{className:"hljs-variable"},void 0,"$PATH"),n("br",{}),n("br",{}),"VERSION=`auto version`",n("br",{}),n("br",{}),n("span",{className:"hljs-keyword"},void 0,"if")," [ ! -z ",n("span",{className:"hljs-string"},void 0,'"',n("span",{className:"hljs-variable"},void 0,"$VERSION"),'"')," ]; ",n("span",{className:"hljs-keyword"},void 0,"then"),n("br",{}),"  auto changelog",n("br",{}),"  lerna publish --yes --force-publish=* ",n("span",{className:"hljs-variable"},void 0,"$VERSION")," -m ",n("span",{className:"hljs-string"},void 0,"'%v [skip ci]'"),n("br",{}),"  auto release",n("br",{}),n("span",{className:"hljs-keyword"},void 0,"fi"),n("br",{})));var B=e=>n("div",{className:e.className},void 0,n("section",{},void 0,v,p,g,n("h2",{id:"enterprise"},void 0,"Enterprise ",n(c,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#enterprise","aria-hidden":"true"})),n("p",{},void 0,"If you are using enterprise github ",b," lets you configure the github API URL that it uses. You can configure this by using the CLI option ",m,", by setting the value in your ",n(c,{currentPage:e.currentPage,to:"/auto-release/pages/autorc.html#githubApi"},void 0,".autorc"),", or during ",f,"."),n("h3",{id:"project-already-published"},void 0,"Project already published ",n(c,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#project-already-published","aria-hidden":"true"})),y,j,N,w,k,n("h2",{id:"configuration"},void 0,"Configuration ",n(c,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#configuration","aria-hidden":"true"})),P,O,n("h3",{id:"1.-initialize-options"},void 0,"1. Initialize Options ",n(c,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#1.-initialize-options","aria-hidden":"true"})),T,n("h3",{id:"2.-labels"},void 0,"2. Labels ",n(c,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#2.-labels","aria-hidden":"true"})),E,n("ul",{},void 0,n("li",{},void 0,"Versioning Labels - used to calculate version numbers and make releases. To change them refer to ",n(c,{currentPage:e.currentPage,to:"/auto-release/pages/autorc.html#versioning-labels"},void 0,"this"),"."),n("li",{},void 0,"Changelog Labels - These labels do not effect the version calculation but they will change the section the PR displays in the changelog. These are customizable too, and you can even add your own sections. Read more ",n(c,{currentPage:e.currentPage,to:"/auto-release/pages/autorc.html#changelog-titles"},void 0,"here"))),L,S,n("h3",{id:"3.-environment-variables"},void 0,"3. Environment Variables ",n(c,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#3.-environment-variables","aria-hidden":"true"})),_,I,C,H,n("h3",{id:"4.-script"},void 0,"4. Script ",n(c,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#4.-script","aria-hidden":"true"})),R,n("h4",{id:"quick-setup"},void 0,"Quick Setup ",n(c,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#quick-setup","aria-hidden":"true"})),$,G,n("h4",{id:"detailed-setup"},void 0,"Detailed Setup ",n(c,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#detailed-setup","aria-hidden":"true"})),x,A,n("h5",{id:"enabling-skip-release-label"},void 0,"Enabling ",D," label ",n(c,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#enabling-skip-release-label","aria-hidden":"true"})),M,V,z,K,U,q));a.default=B,e.exports=a.default}}]);
//# sourceMappingURL=getting-started.js.map