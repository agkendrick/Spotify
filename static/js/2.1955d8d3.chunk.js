webpackJsonp([2],{504:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function i(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function a(e){var t=e.artist,n=t.loading,r=t.view,o=t.related,i=t.info;return{loading:n,view:r,related:o,bio:i.bio,name:i.name,followers:i.followers,img:i.img,id:i.id}}function u(e){return{changeSubView:function(t){return e(Object(f.a)(t))},selectRelatedArtist:function(t){return e(Object(f.c)(t))}}}Object.defineProperty(t,"__esModule",{value:!0});var c=n(4),s=n.n(c),l=n(194),f=n(508),p=n(522),b=n(523),h=n(513),d=n(54),y=n(514),m=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),v=d.b.div.withConfig({displayName:"artist__ArtistContainer",componentId:"sc-9cfaxf-0"})(["color:white;h4{font-size:11px;line-height:16px;font-weight:200;text-transform:uppercase;letter-spacing:.18em;padding-top:50px;color:hsla(0,0%,100%,.6);display:block;text-align:center;margin-bottom:1em;}h1{font-size:5vw;line-height:82px;letter-spacing:-.005em;font-weight:600;margin-top:0px;}> div{margin-top:120px;}h2{font-size:18px;line-height:24px;letter-spacing:.015em;font-weight:600;margin-bottom:1em;}"]),g=function(e){function t(e){r(this,t);var n=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return"PUSH"===e.history.action||e.id||e.history.push("/"),n.onItemSelect=n.onItemSelect.bind(n),e.changeSubView("about"),n}return i(t,e),m(t,[{key:"onItemSelect",value:function(e,t,n){this.props.selectRelatedArtist(e),window.scroll(0,0)}},{key:"componentDidUpdate",value:function(e){var t=this.props,n=t.img,r=t.setBackgroundImage;e.img!==n&&r(n)}},{key:"render",value:function(){var e=this.props,t=e.view,n=e.changeSubView,r=e.id,o=e.bio,i=e.name,a=e.followers,u=e.related,c=u.items,l=u.loading,f={about:{component:s.a.createElement(p.a,{bio:o}),display:"ABOUT"},"related-artists":{component:s.a.createElement(b.a,{related:c,onClick:this.onItemSelect,id:r}),display:"RELATED ARTISTS"}};return s.a.createElement(v,null,s.a.createElement("h4",null,Number(a).toLocaleString()," MONTHLY LISTENERS"),s.a.createElement("h1",null,i),s.a.createElement(y.a,null,s.a.createElement(h.a,{subViews:f,view:t,changeSubView:n}),l?null:f[t].component))}}]),t}(c.Component);t.default=Object(l.b)(a,u)(g)},506:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function u(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s=n(4),l=r(s),f=n(12),p=r(f),b=n(17),h=r(b),d=n(32),y=function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)},m=function(e){function t(){var n,r,o;i(this,t);for(var u=arguments.length,c=Array(u),s=0;s<u;s++)c[s]=arguments[s];return n=r=a(this,e.call.apply(e,[this].concat(c))),r.handleClick=function(e){if(r.props.onClick&&r.props.onClick(e),!e.defaultPrevented&&0===e.button&&!r.props.target&&!y(e)){e.preventDefault();var t=r.context.router.history,n=r.props,o=n.replace,i=n.to;o?t.replace(i):t.push(i)}},o=n,a(r,o)}return u(t,e),t.prototype.render=function(){var e=this.props,t=(e.replace,e.to),n=e.innerRef,r=o(e,["replace","to","innerRef"]);(0,h.default)(this.context.router,"You should not use <Link> outside a <Router>"),(0,h.default)(void 0!==t,'You must specify the "to" property');var i=this.context.router.history,a="string"===typeof t?(0,d.createLocation)(t,null,null,i.location):t,u=i.createHref(a);return l.default.createElement("a",c({},r,{onClick:this.handleClick,href:u,ref:n}))},t}(l.default.Component);m.propTypes={onClick:p.default.func,target:p.default.string,replace:p.default.bool,to:p.default.oneOfType([p.default.string,p.default.object]).isRequired,innerRef:p.default.oneOfType([p.default.string,p.default.func])},m.defaultProps={replace:!1},m.contextTypes={router:p.default.shape({history:p.default.shape({push:p.default.func.isRequired,replace:p.default.func.isRequired,createHref:p.default.func.isRequired}).isRequired}).isRequired},t.default=m},507:function(e,t,n){"use strict";function r(){return"\n        transition-property: color;\n        transition-duration: .2s;\n        transition-timing-function: linear;\n        color: hsla(0,0%,100%,.6);\n        cursor: pointer;\n    "}t.a=r},508:function(e,t,n){"use strict";function r(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){function r(o,i){try{var a=t[o](i),u=a.value}catch(e){return void n(e)}if(!a.done)return Promise.resolve(u).then(function(e){r("next",e)},function(e){r("throw",e)});e(u)}return r("next")})}}function o(e){var t=this;return function(){var n=r(l.a.mark(function n(r,o){var i;return l.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return i=o(),c(e,i,r),t.abrupt("return",r(Object(b.g)(e)));case 3:case"end":return t.stop()}},n,t)}));return function(e,t){return n.apply(this,arguments)}}()}function i(e){var t=this;return function(){var n=r(l.a.mark(function n(r,o){return l.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r(u(e)),t.abrupt("return",r(Object(b.g)("about")));case 2:case"end":return t.stop()}},n,t)}));return function(e,t){return n.apply(this,arguments)}}()}function a(e){var t=this;return function(){var n=r(l.a.mark(function n(r,o){var i,a;return l.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(r(Object(b.e)()),i=o().auth.token){t.next=4;break}return t.abrupt("return",r(Object(b.d)("No auth token")));case 4:return t.next=6,f.b(e,i);case 6:if(a=t.sent,a.success){t.next=9;break}return t.abrupt("return",r(Object(b.d)(a.message)));case 9:return t.abrupt("return",r(Object(b.f)(a.body,e)));case 10:case"end":return t.stop()}},n,t)}));return function(e,t){return n.apply(this,arguments)}}()}function u(e){var t=this;return function(){var n=r(l.a.mark(function n(r,o){var i,a,u;return l.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(r(Object(b.b)()),i=o().auth.token){t.next=4;break}return t.abrupt("return",r(Object(b.a)("No auth token")));case 4:return t.next=6,f.a(e,i);case 6:if(a=t.sent,a.success){t.next=9;break}return t.abrupt("return",r(Object(b.a)(a.message)));case 9:return t.next=11,p.a(a.body.name);case 11:return u=t.sent,t.abrupt("return",r(Object(b.c)({spotifyInfo:a.body,bio:u.body.artist.bio})));case 13:case"end":return t.stop()}},n,t)}));return function(e,t){return n.apply(this,arguments)}}()}function c(e,t,n){var r=t.artist.info.id;switch(e){case"related-artists":if(r!==t.artist.related.artistId&&null!=r)return n(a(r));break;default:return Promise.resolve()}}t.a=o,t.c=i,t.b=u;var s=n(103),l=n.n(s),f=n(509),p=n(510),b=n(511)},509:function(e,t,n){"use strict";function r(e,t){var n={url:"https://api.spotify.com/v1/artists/"+e,method:"GET",headers:{Authorization:"Bearer "+t},json:!0};return a()(n).then(function(e){return{success:!0,body:e}}).catch(function(e){return{success:!1,message:e.error.error.message}})}function o(e,t){var n={url:"https://api.spotify.com/v1/artists/"+e+"/related-artists",method:"GET",headers:{Authorization:"Bearer "+t},json:!0};return a()(n).then(function(e){return{success:!0,body:e}}).catch(function(e){return{success:!1,message:e.error.error.message}})}t.a=r,t.b=o;var i=n(193),a=n.n(i)},510:function(e,t,n){"use strict";function r(e){var t={url:"https://ws.audioscrobbler.com/2.0/",method:"GET",json:!0,qs:{artist:e,api_key:"41134702145d5a6b9a3f7b2818f651cc",method:"artist.getinfo",format:"json"}};return i()(t).then(function(e){return{success:!0,body:e}}).catch(function(e){return{success:!1,message:e}})}t.a=r;var o=n(193),i=n.n(o)},511:function(e,t,n){"use strict";function r(){return{type:l.c}}function o(e){return{type:l.d,payload:e}}function i(e){return{type:l.b,payload:e}}function a(){return{type:l.f}}function u(e,t){return{type:l.g,payload:e,artistId:t}}function c(e){return{type:l.e,payload:e}}function s(e){return{type:l.a,view:e}}t.b=r,t.c=o,t.a=i,t.e=a,t.f=u,t.d=c,t.g=s;var l=n(195)},512:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function i(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a=n(4),u=n.n(a),c=n(506),s=n.n(c),l=n(54),f=n(507),p=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),b=l.b.div.withConfig({displayName:"SearchResult__StyledSearchResult",componentId:"lb02s1-0"})(["padding:15px;line-height:20px;letter-spacing:.015em;font-weight:400;color:white;width:16.66666667%;height:250px;margin-bottom:25px;float:left;div:first-child{height:80%;width:100%;background-size:contain;background-repeat:no-repeat;background-position-x:center;}@media (max-width:768px){width:100% !important;div:first-child{margin:0 auto;}}"," "," "," ",""],Object(f.a)(),function(e){return"newReleases"===e.view&&Object(l.a)(["color:white;span{display:block;}"])},function(e){return"relatedArtists"===e.view&&Object(l.a)(["margin-bottom:40px;div{border-radius:50%;}"])},function(e){return"searchResults"===e.view&&Object(l.a)(["margin-bottom:40px;div{border-radius:50%;}"])}),h=l.b.div.withConfig({displayName:"SearchResult__Image",componentId:"lb02s1-1"})(["background-image:url( "," );"],function(e){return e.imgUrl}),d=function(e){function t(e){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return i(t,e),p(t,[{key:"render",value:function(){var e=this.props,t=e.img,n=e.type,r=e.onClick,o=e.name,i=e.view,a="album"===n?o[0]:o;return u.a.createElement(s.a,{to:"/artist"},u.a.createElement(b,{onClick:r,view:i},u.a.createElement(h,{imgUrl:t}),u.a.createElement("div",null,u.a.createElement("h5",null,a),u.a.createElement("span",null,"album"===n?o[1]:null))))}}]),t}(a.Component);t.a=d},513:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function i(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a=n(4),u=n.n(a),c=n(54),s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=c.b.div.withConfig({displayName:"SubNav__NavItem",componentId:"nqou29-0"})(["display:inline-block;padding:10px;margin:20px 10px;color:#9a9a9a;letter-spacing:1.5px;font-weight:400;transition:all 0.3s;:hover{color:white;cursor:pointer;}",""],function(e){return e.active&&Object(c.a)(['color:white;:after{content:"";display:block;margin:0 auto;width:40px;padding-top:20px;border-bottom:2px solid #7386D5;}'])}),f=function(e){function t(e){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return i(t,e),s(t,[{key:"render",value:function(){var e=this.props,t=e.subViews,n=e.view,r=e.changeSubView,o=Object.keys(t).map(function(e,o){return u.a.createElement(l,{active:n===e,onClick:function(){return r(e)},key:o},t[e].display)});return u.a.createElement(u.a.Fragment,null,o)}}]),t}(a.Component);t.a=f},514:function(e,t,n){"use strict";var r=n(54),o=r.b.div.withConfig({displayName:"SubViewWrapper",componentId:"sc-3qfeqn-0"})(["padding:0 2em;"]);t.a=o},522:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function i(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a=n(4),u=n.n(a),c=n(54),s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=c.b.div.withConfig({displayName:"AboutView__Bio",componentId:"sc-1d6fhoc-0"})(["{margin-top:15px;font-size:14px;line-height:20px;letter-spacing:.015em;font-weight:200;padding:0px 20px;}"]),f=function(e){function t(e){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return i(t,e),s(t,[{key:"render",value:function(){var e=this.props.bio;return u.a.createElement(l,null,u.a.createElement("h2",null,"Biography"),u.a.createElement("p",null,e))}}]),t}(a.Component);t.a=f},523:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function i(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a=n(4),u=n.n(a),c=n(512),s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=function(e){function t(e){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return i(t,e),s(t,[{key:"render",value:function(){var e=this.props,t=e.related,n=e.onClick,r=null==t?null:t.map(function(e){var t=e.id,r=e.name,o=e.img;return u.a.createElement(c.a,{key:t,name:r,id:t,img:o,onClick:function(){return n(t,r,"artist")},type:"artist",view:"relatedArtists"})});return u.a.createElement("div",null,r)}}]),t}(a.Component);t.a=l}});
//# sourceMappingURL=2.1955d8d3.chunk.js.map