(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{55:function(e,r,o){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var t,a=s(o(2)),n=function(e){if(e&&e.__esModule)return e;var r={};if(null!=e)for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var t=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,o):{};t.get||t.set?Object.defineProperty(r,o,t):r[o]=e[o]}return r.default=e,r}(o(0));s(o(1)),s(o(63));function s(e){return e&&e.__esModule?e:{default:e}}function i(e,r,o,a){t||(t="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var n=e&&e.defaultProps,s=arguments.length-3;if(r||0===s||(r={children:void 0}),r&&n)for(var i in n)void 0===r[i]&&(r[i]=n[i]);else r||(r=n||{});if(1===s)r.children=a;else if(s>1){for(var l=new Array(s),u=0;u<s;u++)l[u]=arguments[u+3];r.children=l}return{$$typeof:t,type:e,key:void 0===o?null:""+o,ref:null,props:r,_owner:null}}function l(e,r,o){return r in e?Object.defineProperty(e,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[r]=o,e}function u(){return(u=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var o=arguments[r];for(var t in o)Object.prototype.hasOwnProperty.call(o,t)&&(e[t]=o[t])}return e}).apply(this,arguments)}function d(e,r){if(null==e)return{};var o,t,a=function(e,r){if(null==e)return{};var o,t,a={},n=Object.keys(e);for(t=0;t<n.length;t++)o=n[t],r.indexOf(o)>=0||(a[o]=e[o]);return a}(e,r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(t=0;t<n.length;t++)o=n[t],r.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}const c=e=>{let{to:r}=e,o=d(e,["to"]);return r.includes("http")?n.default.createElement("a",u({},e,{href:r})):("#"===r[0]&&(r=a.default.join("/auto-release/","pages/auto-version.html")+r),n.default.createElement("a",u({},o,{href:r,onClick:o=>{if(o.preventDefault(),"#"===e.to)return!1;const t=new URL(a.default.join(window.location.origin,r));window.history.pushState((e=>({href:e.href,pathname:e.pathname,hash:e.hash,query:e.query}))(t),null,r),e.onClick();const n=new CustomEvent("changeLocation",{detail:t});return dispatchEvent(n),!1}})))};c.defaultProps={href:"",onClick:()=>{}};const h=e=>{var r,o;return o=r=class extends n.default.Component{constructor(...e){super(...e),l(this,"state",{Comp:null})}componentDidMount(){!this.state.Comp&&this.props.shouldLoad&&e().then(e=>{this.setState({Comp:e.default})})}render(){const{Comp:e}=this.state;return e?n.default.createElement(e,this.props,this.props.children||null):null}},l(r,"defaultProps",{shouldLoad:!0}),o};h(()=>o.e(24).then(o.bind(null,64))),h(()=>o.e(24).then(o.bind(null,65)));var p=i("h1",{},void 0,i("code",{},void 0,"auto version")),v=i("p",{},void 0,"Get the semantic version bump for the given changes. Requires all PRs to have labels for the change type. If a PR does not have a label associated with it, it will default to ",i("code",{},void 0,"patch"),"."),f=i("pre",{},void 0,i("code",{className:"language-bash"},void 0,">  auto version -h",i("br",{}),i("br",{}),"usage: auto.js version [-h] [--noReleaseLabels NORELEASELABELS]",i("br",{}),"                       [--onlyPublishWithReleaseLabel] [--major MAJOR]",i("br",{}),"                       [--minor MINOR] [--patch PATCH] [-v] [-vv]",i("br",{}),"                       [--githubApi GITHUBAPI]",i("br",{}),i("br",{}),i("br",{}),"Optional arguments:",i("br",{}),"  -h, --",i("span",{className:"hljs-built_in"},void 0,"help"),"            Show this ",i("span",{className:"hljs-built_in"},void 0,"help")," message and ",i("span",{className:"hljs-built_in"},void 0,"exit"),".",i("br",{}),"  --noReleaseLabels NORELEASELABELS",i("br",{}),"                        Labels that will not create a release. Defaults to",i("br",{}),"                        just ",i("span",{className:"hljs-string"},void 0,"'no-release'"),i("br",{}),"  --onlyPublishWithReleaseLabel",i("br",{}),"                        Only bump version ",i("span",{className:"hljs-keyword"},void 0,"if")," `release` label is on pull",i("br",{}),"                        request",i("br",{}),"  --major MAJOR         The name of the tag ",i("span",{className:"hljs-keyword"},void 0,"for")," a major version bump",i("br",{}),"  --minor MINOR         The name of the tag ",i("span",{className:"hljs-keyword"},void 0,"for")," a minor version bump",i("br",{}),"  --patch PATCH         The name of the tag ",i("span",{className:"hljs-keyword"},void 0,"for")," a patch version bump",i("br",{}),"  -v, --verbose         Show some more logs",i("br",{}),"  -vv, --very-verbose   Show a lot more logs",i("br",{}),"  --githubApi GITHUBAPI",i("br",{}),"                        Github API to use",i("br",{}))),b=i("p",{},void 0,"Useful in conjunction with ",i("code",{},void 0,"npm version")," to auto-version releases."),m=i("p",{},void 0,"To create a prerelease add the ",i("code",{},void 0,"prerelease")," label to your pull request."),g=i("p",{},void 0,"To not create a release for a pull request add the ",i("code",{},void 0,"no-release")," label. Any pull request with this tag will make ",i("code",{},void 0,"auto version")," return ",i("code",{},void 0,"''"),"."),y=i("article",{className:"message column is-warning"},void 0,i("div",{className:"message-body"},void 0,i("p",{},void 0,"⚠️ You must check the return value of ",i("code",{},void 0,"auto version")," in a bash script like in the example configuration for the ",i("code",{},void 0,"no-release")," label to function properly."))),w=i("code",{},void 0,".autorc");var P=e=>i("div",{className:e.className},void 0,i("section",{},void 0,p,v,f,b,i("h2",{id:"prerelease"},void 0,"Prerelease ",i(c,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#prerelease","aria-hidden":"true"})),m,i("h2",{id:"no-release"},void 0,"No Release ",i(c,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#no-release","aria-hidden":"true"})),g,y,i("h2",{id:"configure-versioning-labels"},void 0,"Configure Versioning Labels ",i(c,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#configure-versioning-labels","aria-hidden":"true"})),i("p",{},void 0,"You can customize the versioning labels in the ",w,". To see configuration ",i(c,{currentPage:e.currentPage,to:"/auto-release/pages/autorc.html#versioning-labels"},void 0,"go here"),".")));r.default=P,e.exports=r.default}}]);
//# sourceMappingURL=auto-version.js.map