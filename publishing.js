(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{59:function(e,o,t){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;s(t(2));var n,r=function(e){if(e&&e.__esModule)return e;var o={};if(null!=e)for(var t in e)if(Object.prototype.hasOwnProperty.call(e,t)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,t):{};n.get||n.set?Object.defineProperty(o,t,n):o[t]=e[t]}return o.default=e,o}(t(0));s(t(1)),s(t(60));function s(e){return e&&e.__esModule?e:{default:e}}function i(e,o,t,r){n||(n="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var s=e&&e.defaultProps,i=arguments.length-3;if(o||0===i||(o={children:void 0}),o&&s)for(var a in s)void 0===o[a]&&(o[a]=s[a]);else o||(o=s||{});if(1===i)o.children=r;else if(i>1){for(var l=new Array(i),u=0;u<i;u++)l[u]=arguments[u+3];o.children=l}return{$$typeof:n,type:e,key:void 0===t?null:""+t,ref:null,props:o,_owner:null}}function a(e,o,t){return o in e?Object.defineProperty(e,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[o]=t,e}const l=e=>{var o,t;return t=o=class extends r.default.Component{constructor(...e){super(...e),a(this,"state",{Comp:null})}componentDidMount(){!this.state.Comp&&this.props.shouldLoad&&e().then(e=>{this.setState({Comp:e.default})})}render(){const{Comp:e}=this.state;return e?r.default.createElement(e,this.props,this.props.children||null):null}},a(o,"defaultProps",{shouldLoad:!0}),t};l(()=>t.e(21).then(t.bind(null,61))),l(()=>t.e(21).then(t.bind(null,62)));var u=i("section",{},void 0,i("h1",{},void 0,"Publishing"),i("p",{},void 0,i("code",{},void 0,"auto-release"),"'s main use it to automate the release process for your project This can be broken down into three core steps:"),i("pre",{},void 0,i("code",{className:"language-text"},void 0,"pre: (optional) Check if new version",i("br",{}),i("br",{}),"1. Generate CHANGELOG.md",i("br",{}),"2. Publish code",i("br",{}),"3. Generate github release notes",i("br",{}))),i("p",{},void 0,i("code",{},void 0,"auto-release")," makes no assumptions about your publishing process. Each tool is a function that can be run in isolation and only does one thing really well. For instance, you could just use ",i("code",{},void 0,"auto changelog")," to generate the changelog and nothing else or use ",i("code",{},void 0,"auto version")," to calculate just the semver bump."));var d=e=>i("div",{className:e.className},void 0,u);o.default=d,e.exports=o.default}}]);
//# sourceMappingURL=publishing.js.map